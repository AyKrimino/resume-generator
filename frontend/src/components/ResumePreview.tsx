import { ResumePreviewProps } from "@/types/resume";

const ResumePreview = ({
  name,
  email,
  phone,
  linkedinUrl,
  githubUrl,
  summary,
}: ResumePreviewProps) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
      <p>
        <a href={linkedinUrl}>{linkedinUrl}</a>
      </p>
      <p>
        <a href={githubUrl}>{githubUrl}</a>
      </p>
      <p>{summary}</p>
    </div>
  );
};

export default ResumePreview;
