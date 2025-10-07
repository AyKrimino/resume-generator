"use client";

import ResumePreview from "@/components/ResumePreview";
import apiClient from "@/lib/axios";
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
    const htmlContent = previewRef.current?.innerHTML;
    if (!htmlContent) return;
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

  const handleDownloadPDFClick = async () => {
    const htmlContent = previewRef.current?.innerHTML;
    if (!htmlContent) return;

    try {
      const response = await apiClient.post(
        "/generate-pdf",
        { htmlContent },
        { responseType: "blob" }
      );
      const pdfContent = response.data;
      downloadFile(pdfContent, "resume.pdf", "application/pdf");
    } catch (error) {
      console.log(`Failed to generate pdf ${error}`);
      throw error;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Resume Generator</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <form className="w-full sm:w-1/2 p-6 border rounded-lg">
            <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
                Personal Informations
              </h1>
              <div className="space-y-1">
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Linkedin URL
                  </label>
                  <input
                    type="url"
                    placeholder="Linkedin URL"
                    className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                  />
                </div>
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Github URL
                  </label>
                  <input
                    type="url"
                    placeholder="Github URL"
                    className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                  />
                </div>
              </div>
            </section>
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
          <button
            type="button"
            onClick={handleDownloadPDFClick}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 ml-2 cursor-pointer"
          >
            Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
