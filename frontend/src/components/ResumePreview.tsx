import DefaultTemplate from "@/app/templates/react/DefaultTemplate";
import { ResumePreviewProps } from "@/types/resume";

const ResumePreview = (props: ResumePreviewProps) => {
  return <DefaultTemplate {...props} />;
};

export default ResumePreview;
