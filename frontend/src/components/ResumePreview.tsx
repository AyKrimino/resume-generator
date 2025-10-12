import { useTemplate } from "@/context/TemplateContext";
import { ResumePreviewProps } from "@/types/resume";

const ResumePreview = (props: ResumePreviewProps) => {
  const { currentTemplate } = useTemplate();

  return <currentTemplate.component {...props} />;
};

export default ResumePreview;
