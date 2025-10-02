export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Resume Generator</h1>
      <form className="w-full md:w-1/2 p-6 border rounded-lg">
        <input
          type="text"
          placeholder="name"
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="email"
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="telephone"
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="url"
          placeholder="linkedin url"
          className="mb-4 w-full p-2 border rounded"
        />
        <input
          type="url"
          placeholder="github"
          className="mb-4 w-full p-2 border rounded"
        />
      </form>
    </main>
  );
}
