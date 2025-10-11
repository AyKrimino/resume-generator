import { ComponentType } from "react";
import { ResumePreviewProps } from "./resume";

export type TemplateMeta = {
  slug: string;
  name: string;
  description: string;
  author: string;
  authorWebsite: string;
  stylesheetPath: string;
  previewPath: string;
  component: ComponentType<ResumePreviewProps>;
  pageSize: string;
  isDefault: boolean;
  tags: string[];
};
