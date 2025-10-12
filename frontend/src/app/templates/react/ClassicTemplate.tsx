import { ResumePreviewProps } from "@/types/resume";

const ClassicTemplate = (props: ResumePreviewProps) => {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{props.name}</h2>
              <p className="text-sm text-gray-600">{props.headline}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
              <p className="text-sm text-gray-600">
                Email: <a href={props.email}>{props.email}</a>
              </p>
              <p className="text-sm text-gray-600">
                Location: {props.location}
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p className="text-sm leading-relaxed">{props.summary}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Experience</h3>
            {props.experienceItems?.length > 0 &&
              props.experienceItems.map((item, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-md font-semibold">{item.company}</h4>
                  <p className="text-sm text-gray-600">
                    {item.title} |{" "}
                    {new Date(item.startDate).getFullYear() || item.startDate} -{" "}
                    {new Date(item.endDate).getFullYear() || item.endDate}
                  </p>
                  {item.description && (
                    <ul className="list-disc list-inside text-sm">
                      <li>{item.description}</li>
                    </ul>
                  )}
                </div>
              ))}
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Education</h3>
            {props.educationItems?.length > 0 &&
              props.educationItems.map((item, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-md font-semibold">
                    {item.degree} in {item.field}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {item.school} |{" "}
                    {new Date(item.startDate).getFullYear() || item.startDate} -{" "}
                    {new Date(item.endDate).getFullYear() || item.endDate}
                  </p>
                  {item.description && (
                    <ul className="list-disc list-inside text-sm">
                      <li>{item.description}</li>
                    </ul>
                  )}
                </div>
              ))}
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Projects</h3>
            {props.projectItems?.length > 0 &&
              props.projectItems.map((item, index) => (
                <div key={index} className="mt-4">
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  {item.description && (
                    <p className="text-sm text-ray-600">{item.description}</p>
                  )}
                  {item.technologies && (
                    <p className="mt-2 text-sm text-gray-600">
                      <strong>Technologies:</strong> {item.technologies}
                    </p>
                  )}
                  {item.link && (
                    <p className="mt-2">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:underline"
                      >
                        View Project
                      </a>
                    </p>
                  )}
                </div>
              ))}
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-sm">
              {Object.entries(props.skills).map(([categorie, skillsArray]) => (
                <li key={categorie}>
                  {categorie}:{" "}
                  {skillsArray.map((skill) => skill.name).join(", ")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;
