function App() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <main className="flex flex-col gap-6">

        <h1 className="text-3xl font-bold">Software Engineer</h1>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg">
            Hi! I'm Rafael, a Software Engineer with passion for mobile and web dev
          </h2>
          <h2 className="text-lg">
            Currently working as an iOS Engineer at Leal Apps, building fitness and health apps
          </h2>
        </div>

        <div className="flex gap-2 items-center">
          <span>Check out my</span>
          <a
            className="underline text-blue-600 hover:text-blue-800"
            href="https://www.linkedin.com/in/rafael-badaro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>and</span>
          <a
            className="underline text-blue-600 hover:text-blue-800"
            href="https://github.com/RafaelBadaro"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

      </main>
    </div>
  );
}

export default App;
