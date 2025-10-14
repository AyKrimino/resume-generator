import {
  CertificateItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillsByCategory,
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
  skillItems: SkillsByCategory;
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
    skillItems,
    projectItems,
    certificateItems,
  } = params;

  const renderSkillsMarkdown = (skillsObj: SkillsByCategory) => {
    if (!skillsObj || Object.keys(skillsObj).length === 0)
      return "No Skills listed.";
    return Object.entries(skillsObj)
      .map(([category, items]) => {
        const itemsMD =
          items && items.length > 0
            ? items
                .map((item) => {
                  const level = item.level ? ` - ${item.level}` : "";
                  return `- **${item.name}**${level}`;
                })
                .join("\n")
            : "_No Skills in this category_";
        return `### ${category}\n\n${itemsMD}`;
      })
      .join("\n\n");
  };

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
${renderSkillsMarkdown(skillItems)}

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
