export type CertificateItem = {
  name: string;
  issuer: string;
  date: string;
  description: string;
};

export type CertificationsSectionProps = {
  certificateItems: CertificateItem[];
  setCertificateItems: (certificateItems: CertificateItem[]) => void;
};

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationSectionProps = {
  educationItems: EducationItem[];
  setEducationItems: (educationItems: EducationItem[]) => void;
};

export type ExperienceItem = {
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type ExperienceSectionProps = {
  experienceItems: ExperienceItem[];
  setExperienceItems: (experienceItems: ExperienceItem[]) => void;
};

export type PersonalInformationsSectionProps = {
  name: string;
  headline: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
  setName: (name: string) => void;
  setHeadline: (headline: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setLinkedinUrl: (linkedinUrl: string) => void;
  setGithubUrl: (githubUrl: string) => void;
  setLocation: (location: string) => void;
};

export type ProjectItem = {
  name: string;
  description: string;
  technologies: string;
  link: string;
};

export type ProjectSectionProps = {
  projectItems: ProjectItem[];
  setProjectItems: (projectItems: ProjectItem[]) => void;
};

export type SkillsSectionProps = {
  skills: string;
  setSkills: (skills: string) => void;
};

export type SummarySectionProps = {
  summary: string;
  setSummary: (summary: string) => void;
};

export type ResumePreviewProps = {
  name: string;
  headline?: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  location?: string;
  summary: string;
  educationItems: EducationItem[];
  experienceItems: ExperienceItem[];
  skills: string;
  projectItems: ProjectItem[];
  certificateItems: CertificateItem[];
};
