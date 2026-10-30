create table public.visits (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  lang text not null check (lang in ('en', 'pt')),
  device text not null check (device in ('mobile', 'desktop')),
  timezone text check (char_length(timezone) <= 64),
  high_fives int not null default 0
);

alter table public.visits enable row level security;

create function public.log_visit(p_lang text, p_device text, p_timezone text)
returns uuid
language sql
security definer
set search_path = public
as $$
  insert into public.visits (lang, device, timezone)
  values (p_lang, p_device, left(p_timezone, 64))
  returning id;
$$;

create function public.add_visit_high_five(p_id uuid)
returns void
language sql
security definer
set search_path = public
as $$
  update public.visits set high_fives = high_fives + 1 where id = p_id;
$$;

grant execute on function public.log_visit(text, text, text) to anon;
grant execute on function public.add_visit_high_five(uuid) to anon;
