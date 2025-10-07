import { ResumePreviewProps } from "@/types/resume";

const ResumePreview = ({
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
}: ResumePreviewProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-3xl mx-auto">
      <header className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          {name}
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
          <p className="text-gray-700">{email}</p>
          <p className="text-gray-700">{phone}</p>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all delay-150 ease-in-out"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all delay-150 ease-in-out"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
