import { FC } from "react";

interface ResumePreviewProps {
  name: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
}

const ResumePreview: FC<ResumePreviewProps> = ({
  name,
  email,
  phone,
  linkedinUrl,
  githubUrl,
}) => {
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
    </div>
  );
};

export default ResumePreview;
