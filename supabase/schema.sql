create table public.high_fives (
  id int primary key default 1 check (id = 1),
  count bigint not null default 0
);

insert into public.high_fives (id, count) values (1, 0);

alter table public.high_fives enable row level security;

create policy "anyone can read high fives"
  on public.high_fives for select
  to anon
  using (true);

create function public.increment_high_five()
returns bigint
language sql
security definer
set search_path = public
as $$
  update public.high_fives set count = count + 1 where id = 1 returning count;
$$;

grant usage on schema public to anon;
grant select on public.high_fives to anon;
grant execute on function public.increment_high_five() to anon;
