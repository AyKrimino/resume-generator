"use client";

import ResumePreview from "@/components/ResumePreview";
import { downloadFile } from "@/utils/downloadFile";
import { useRef, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadHtmlClick = () => {
    const htmlContent = previewRef.current.innerHTML;
    downloadFile(htmlContent, "resume.html", "text/html");
  };

  const handleDownloadMarkdownClick = () => {
    const markdownContent = `# ${name || "Resume"}

Email: ${email}
Phone: ${phone}
${linkedinUrl ? `[LinkedIn](${linkedinUrl})` : ""}
${githubUrl ? `[GitHub](${githubUrl})` : ""}
`.trim();
    downloadFile(markdownContent, "resume.md", "text/markdown");
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Resume Generator</h1>
      <div className="flex justify-between">
        <form className="w-full md:w-1/2 p-6 border rounded-lg">
          <input
            type="text"
            placeholder="Name"
            className="mb-4 w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="mb-4 w-full p-2 border rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="url"
            placeholder="Linkedin URL"
            className="mb-4 w-full p-2 border rounded"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
          />
          <input
            type="url"
            placeholder="Github URL"
            className="mb-4 w-full p-2 border rounded"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
          />
        </form>
        <div
          ref={previewRef}
          className="w-full md:w-1/2 p-6 border rounded-lg ml-4"
        >
          <ResumePreview
            name={name}
            email={email}
            phone={phone}
            linkedinUrl={linkedinUrl}
            githubUrl={githubUrl}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          type="button"
          onClick={handleDownloadHtmlClick}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Download HTML
        </button>
        <button
          type="button"
          onClick={handleDownloadMarkdownClick}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ml-2 cursor-pointer"
        >
          Download Markdown
        </button>
      </div>
    </main>
  );
}
