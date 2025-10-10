"use client";

import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import PersonalInformationsSection from "@/components/PersonalInformationsSection";
import ProjectSection from "@/components/ProjectsSection";
import ResumePreview from "@/components/ResumePreview";
import SkillsSection from "@/components/SkillsSection";
import SummarySection from "@/components/SummarySection";
import apiClient from "@/lib/axios";
import { buildFullHtml, getStylesheetUrls } from "@/utils/buildHtmlFile";
import { buildMarkdownFile } from "@/utils/buildMarkdownFile";
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

  const [experienceItems, setExperienceItems] = useState([
    {
      company: "",
      title: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [skills, setSkills] = useState("");

  const [projectItems, setProjectItems] = useState([
    {
      name: "",
      description: "",
      technologies: "",
      link: "",
    },
  ]);

  const [certificateItems, setCertificateItems] = useState([
    {
      name: "",
      issuer: "",
      date: "",
      description: "",
    },
  ]);

  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadHtmlClick = async () => {
    const innerHTML = previewRef.current?.innerHTML;
    if (!innerHTML) return;

    const cssUrls = getStylesheetUrls();
    const fullHtml = await buildFullHtml(innerHTML, cssUrls);
    downloadFile(fullHtml, "resume.html", "text/html");
  };

  const handleDownloadMarkdownClick = () => {
    const markdownContent = buildMarkdownFile({
      name,
      email,
      phone,
      linkedinUrl,
      githubUrl,
      summary,
      educationItems,
      experienceItems,
      skills,
      projectItems,
      certificateItems,
    });
    downloadFile(markdownContent, "resume.md", "text/markdown");
  };

  const handleDownloadPDFClick = async () => {
    const innerHTML = previewRef.current?.innerHTML;
    if (!innerHTML) return;

    const cssUrls = getStylesheetUrls();
    const fullHtml = await buildFullHtml(innerHTML, cssUrls);

    try {
      const response = await apiClient.post(
        "/generate-pdf",
        { htmlContent: fullHtml },
        { responseType: "blob" }
      );
      downloadFile(response.data, "resume.pdf", "application/pdf");
    } catch (error) {
      console.log(`Failed to generate pdf ${error}`);
      throw error;
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <form className="flex-[1] w-full lg:w-1/2 p-2 sm:p-4 space-y-6">
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
            <ProjectSection
              projectItems={projectItems}
              setProjectItems={setProjectItems}
            />
            <CertificationsSection
              certificateItems={certificateItems}
              setCertificateItems={setCertificateItems}
            />
          </form>
          <div
            ref={previewRef}
            className="flex-[1.5] w-full lg:w-1/2 p-2 sm:p-4"
          >
            <ResumePreview
              name={name}
              email={email}
              phone={phone}
              linkedinUrl={linkedinUrl}
              githubUrl={githubUrl}
              summary={summary}
              educationItems={educationItems}
              experienceItems={experienceItems}
              skills={skills}
              projectItems={projectItems}
              certificateItems={certificateItems}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center lg:justify-around px-4 lg:px-0 gap-2 lg:gap-6">
          <button
            type="button"
            onClick={handleDownloadHtmlClick}
            className="px-3 lg:px-6 py-2 lg:py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 cursor-pointer transition-all delay-150 ease-in-out"
          >
            Download HTML
          </button>
          <button
            type="button"
            onClick={handleDownloadMarkdownClick}
            className="px-3 lg:px-6 py-2 lg:py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 ml-2 cursor-pointer transition-all delay-150 ease-in-out"
          >
            Download Markdown
          </button>
          <button
            type="button"
            onClick={handleDownloadPDFClick}
            className="px-3 lg:px-6 py-2 lg:py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-600 ml-2 cursor-pointer transition-all delay-150 ease-in-out"
          >
            Download PDF
          </button>
        </div>
      </div>
    </main>
  );
}
