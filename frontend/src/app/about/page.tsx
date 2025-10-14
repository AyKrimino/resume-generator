import Link from "next/link";

export default function About() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          About This Project
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This project was built to simplify the process of creating
          professional resumes — helping students and professionals focus on
          their content, not formatting.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-12 px-4 text-gray-700">
        <h2 className="text-2xl font-semibold mb-3">My Mission</h2>
        <p className="mb-6">
          “I built this project to make resume creation fast and
          distraction-free. My goal is to let people focus on their experience
          and achievements — not on fiddly formatting or complex tools. ”
        </p>
        <h2 className="text-2xl font-semibold mb-3">My Vision</h2>
        <p>
          “I want to provide an open, opinionated resume tool that’s easy to
          use, easy to customize, and easy to export. Over time I plan to expand
          the template library and improve export fidelity while keeping the app
          lightweight and developer friendly.”
        </p>
      </section>

      <section className="bg-gray-50 p-8 rounded-2xl max-w-4xl mx-auto text-center">
        <ul className="flex flex-wrap justify-center gap-4 text-gray-700">
          <li>Next.js</li>
          <li>●</li>
          <li>NestJS</li>
          <li>●</li>
          <li>TypeScript</li>
          <li>●</li>
          <li>TailwindCSS</li>
          <li>●</li>
          <li>Shadcn/UI</li>
        </ul>
        <p className="text-sm text-gray-500 mt-6">
          Developed by Ayoub Krimi. Open source on{" "}
          <Link
            className="underline hover:text-blue-700"
            rel="noopener noreferrer"
            href="https://github.com/AyKrimino/resume-generator"
          >
            Github
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
