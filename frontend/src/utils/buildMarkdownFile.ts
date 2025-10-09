import {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
} from "@/types/resume";

export const buildMarkdownFile = (params: {
  name: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  summary: string;
  educationItems: EducationItem[];
  experienceItems: ExperienceItem[];
  skills: string;
  projectItems: ProjectItem[];
  certificateItems: CertificateItem[];
}): string => {
  const {
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
  } = params;

  return `
# ${name || "Resume"}

## Personal Information
- Email: ${email}
- Phone: ${phone}
${linkedinUrl ? `- LinkedIn: [LinkedIn](${linkedinUrl})` : ""}
${githubUrl ? `- GitHub: [GitHub](${githubUrl})` : ""}

## Summary
${summary || "No summary provided"}

## Education
${educationItems
  .map(
    (item, index) =>
      `### ${index + 1}. ${item.degree} in ${item.field} at ${item.school}\n` +
      `${item.startDate} - ${item.endDate}\n` +
      `${item.description ? `Description: ${item.description}\n` : ""}`
  )
  .join("\n\n")}

## Experience
${experienceItems
  .map(
    (item, index) =>
      `### ${index + 1}. ${item.title} at ${item.company}\n` +
      `${item.startDate} - ${item.endDate}\n` +
      `${item.description ? `Description: ${item.description}\n` : ""}`
  )
  .join("\n\n")}

## Skills
${skills || "No skills listed"}

## Projects
${projectItems
  .map(
    (item, index) =>
      `### ${index + 1}. ${item.name}\n` +
      `Technologies: ${item.technologies}\n` +
      `${item.description ? `Description: ${item.description}\n` : ""}` +
      `${item.link ? `[Project Link](${item.link})\n` : ""}`
  )
  .join("\n\n")}

## Certificates
${certificateItems
  .map(
    (item, index) =>
      `### ${index + 1}. ${item.name} (${item.issuer})\n` +
      `Date: ${item.date}\n` +
      `${item.description ? `Description: ${item.description}\n` : ""}`
  )
  .join("\n\n")}
`.trim();
};
