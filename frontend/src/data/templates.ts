import classicTemplate from "@/app/templates/react/ClassicTemplate";
import DefaultTemplate from "@/app/templates/react/DefaultTemplate";
import MinimalTemplate from "@/app/templates/react/MinimalTemplate";
import ModernTemplate from "@/app/templates/react/ModernTemplate";
import { TemplateMeta } from "@/types/templates";

export const templates: TemplateMeta[] = [
  {
    slug: "default",
    name: "Default Template",
    description: "This is the default template.",
    author: "Ayoub Krimi",
    authorWebsite: "https://github.com/AyKrimino",
    stylesheetPath: "/templates/styles/default-template.css",
    previewPath: "/templates/previews/default-template-thumbnail.png",
    component: DefaultTemplate,
    pageSize: "A4",
    isDefault: true,
    tags: ["classic", "one-column", "has-colors", "no-profile-picture"],
    hasAttribute: {
      headline: false,
      location: false,
      linkedinUrl: true,
      githubUrl: true,
    },
  },
  {
    slug: "classic",
    name: "Classic Template",
    description:
      "This tailwind example is contributed by Geoffrey Callaghan, on 03-Nov-2023. Component is made with Tailwind CSS v3. It is responsive. similar terms for this example is CV template",
    author: "Geoffrey Callaghan",
    authorWebsite: "https://tailwindflex.com/@geoffrey-callaghan",
    stylesheetPath: "/templates/styles/classic-template.css",
    previewPath: "/templates/previews/classic-template-thumbnail.png",
    component: classicTemplate,
    pageSize: "A4",
    isDefault: false,
    tags: ["classic", "one-column", "no-colors", "no-profile-picture"],
    hasAttribute: {
      headline: true,
      location: true,
      linkedinUrl: false,
      githubUrl: false,
    },
  },
  {
    slug: "minimal",
    name: "Minimal Template",
    description:
      "this modern CV template crafted with HTML and Tailwind CSS. Featuring a clean, stylish design and easy customization, this CV template is perfect for professionals looking to make a strong impression. Showcase your skills, experience, and education with a visually appealing and responsive layout. This tailwind example is contributed by Hezron Okoko, on 27-Aug-2024. Component is made with Tailwind CSS v3. It is responsive. similar terms for this example are Author box, User information,CV template",
    author: "Hezron Okoko",
    authorWebsite: "https://tailwindflex.com/@hefacom",
    stylesheetPath: "/templates/styles/minimal-template.css",
    previewPath: "/templates/previews/minimal-template-thumbnail.png",
    component: MinimalTemplate,
    pageSize: "A4",
    isDefault: false,
    tags: ["minimal", "one-column", "has-colors", "has-profile-picture"],
    hasAttribute: {
      headline: false,
      location: false,
      linkedinUrl: true,
      githubUrl: true,
    },
  },
  {
    slug: "modern",
    name: "Modern Template",
    description:
      "This tailwind example is contributed by Amit Pachange, on 19-Jul-2023. Component is made with Tailwind CSS v3. It is responsive. similar terms for this example are Author box, User information,CV template",
    author: "Amit Pachange",
    authorWebsite: "https://tailwindflex.com/@amit",
    stylesheetPath: "/templates/styles/modern-template.css",
    previewPath: "/templates/previews/modern-template-thumbnail.png",
    component: ModernTemplate,
    pageSize: "A4",
    isDefault: false,
    tags: ["modern", "two-columns", "has-colors", "has-profile-picture"],
    hasAttribute: {
      headline: false,
      location: false,
      linkedinUrl: true,
      githubUrl: true,
    },
  },
];
