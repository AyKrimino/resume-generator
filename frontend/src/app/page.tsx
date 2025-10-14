"use client";

import CertificationsSection from "@/components/CertificationsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import PersonalInformationsSection from "@/components/PersonalInformationsSection";
import ProjectSection from "@/components/ProjectsSection";
import ResumePreview from "@/components/ResumePreview";
import SkillsSection from "@/components/SkillsSection";
import SummarySection from "@/components/SummarySection";
import { dummyResume } from "@/data/dummyResume";
import apiClient from "@/lib/axios";
import { SkillsByCategory, SkillsSectionProps } from "@/types/resume";
import { buildFullHtml, getStylesheetUrls } from "@/utils/buildHtmlFile";
import { buildMarkdownFile } from "@/utils/buildMarkdownFile";
import { downloadFile } from "@/utils/downloadFile";
import { useRef, useState } from "react";

export default function Home() {
  const [name, setName] = useState(dummyResume.name);
  const [headline, setHeadline] = useState(dummyResume.headline);
  const [email, setEmail] = useState(dummyResume.email);
  const [phone, setPhone] = useState(dummyResume.phone);
  const [linkedinUrl, setLinkedinUrl] = useState(dummyResume.linkedinUrl);
  const [githubUrl, setGithubUrl] = useState(dummyResume.githubUrl);
  const [facebookUrl, setFacebookUrl] = useState(dummyResume.facebookUrl);
  const [twitterUrl, setTwitterUrl] = useState(dummyResume.twitterUrl);
  const [location, setLocation] = useState(dummyResume.location);

  const [summary, setSummary] = useState(dummyResume.summary);

  const [educationItems, setEducationItems] = useState(
    dummyResume.educationItems
  );

  const [experienceItems, setExperienceItems] = useState(
    dummyResume.experienceItems
  );

  const [skillItems, setSkillItems] = useState<SkillsByCategory>(
    dummyResume.skills
  );

  const [projectItems, setProjectItems] = useState(dummyResume.projectItems);

  const [certificateItems, setCertificateItems] = useState(
    dummyResume.certificateItems
  );

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
      skillItems,
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
              headline={headline}
              email={email}
              phone={phone}
              linkedinUrl={linkedinUrl}
              githubUrl={githubUrl}
              facebookUrl={facebookUrl}
              twitterUrl={twitterUrl}
              location={location}
              setName={setName}
              setHeadline={setHeadline}
              setEmail={setEmail}
              setPhone={setPhone}
              setLinkedinUrl={setLinkedinUrl}
              setGithubUrl={setGithubUrl}
              setFacebookUrl={setFacebookUrl}
              setTwitterUrl={setTwitterUrl}
              setLocation={setLocation}
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
            <SkillsSection
              skillItems={skillItems}
              setSkillItems={setSkillItems}
            />
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
              headline={headline}
              email={email}
              phone={phone}
              linkedinUrl={linkedinUrl}
              githubUrl={githubUrl}
              facebookUrl={facebookUrl}
              twitterUrl={twitterUrl}
              location={location}
              summary={summary}
              educationItems={educationItems}
              experienceItems={experienceItems}
              skillItems={skillItems}
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
