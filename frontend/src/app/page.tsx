"use client";

import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import PersonalInformationsSection from "@/components/PersonalInformationsSection";
import ResumePreview from "@/components/ResumePreview";
import SkillsSection from "@/components/SkillsSection";
import SummarySection from "@/components/SummarySection";
import apiClient from "@/lib/axios";
import { downloadFile } from "@/utils/downloadFile";
import { useRef, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const [summary, setSummary] = useState("");

  const [educationItems, setEducationItems] = useState([
    {
      school: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [skills, setSkills] = useState("");

  const [experienceItems, setExperienceItems] = useState([
    {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

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
          <form className="w-full sm:w-1/2 p-6 space-y-6 border rounded-lg">
            <PersonalInformationsSection
              name={name}
              email={email}
              phone={phone}
              linkedinUrl={linkedinUrl}
              githubUrl={githubUrl}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              setLinkedinUrl={setLinkedinUrl}
              setGithubUrl={setGithubUrl}
            />
            <SummarySection summary={summary} setSummary={setSummary} />
            <EducationSection
              educationItems={educationItems}
              setEducationItems={setEducationItems}
            />
            <ExperienceSection
              experienceItems={experienceItems}
              setExperienceItems={setExperienceItems}
            />
            <SkillsSection skills={skills} setSkills={setSkills} />
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
              summary={summary}
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
