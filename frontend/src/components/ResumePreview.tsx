import ClassicTemplate from "@/app/templates/react/ClassicTemplate";
import { ResumePreviewProps } from "@/types/resume";

const ResumePreview = (props: ResumePreviewProps) => {
  return <ClassicTemplate {...props} />;
};

export default ResumePreview;
