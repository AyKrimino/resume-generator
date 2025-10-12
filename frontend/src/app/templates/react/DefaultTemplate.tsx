import { ResumePreviewProps } from "@/types/resume";

const DefaultTemplate = (props: ResumePreviewProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mx-auto">
      <header className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          {props.name}
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-2">
          <p className="text-gray-700">{props.email}</p>
          <p className="text-gray-700">{props.phone}</p>
          {props.linkedinUrl && (
            <a
              href={props.linkedinUrl}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all delay-150 ease-in-out"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          )}
          {props.githubUrl && (
            <a
              href={props.githubUrl}
              className="text-blue-600 hover:text-blue-800 hover:underline transition-all delay-150 ease-in-out"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          )}
        </div>
      </header>

      {props.summary && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{props.summary}</p>
        </section>
      )}

      {props.educationItems?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Education
          </h2>
          {props.educationItems.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-xl font-medium text-gray-900">
                {item.degree} in {item.field}
              </h3>
              <p className="font-medium text-gray-700">{item.school}</p>
              <p className="text-gray-600">
                {item.startDate} - {item.endDate}
              </p>
              {item.description && (
                <p className="mt-2 text-gray-700">{item.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {props.experienceItems?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Work Experience
          </h2>
          {props.experienceItems.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-xl font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="font-medium text-gray-700">{item.company}</p>
              <p className="text-gray-600">
                {item.startDate} - {item.endDate}
              </p>
              {item.description && (
                <p className="mt-2 text-gray-700">{item.description}</p>
              )}
            </div>
          ))}
        </section>
      )}

      {props.skills && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {props.skills.split(",").map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </section>
      )}

      {props.projectItems?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Projects
          </h2>
          {props.projectItems.map((item, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-xl font-medium text-gray-900">{item.name}</h3>
              <p className="text-gray-700">{item.description}</p>
              {item.technologies && (
                <p className="mt-2 text-gray-600">
                  <strong>Technologies:</strong> {item.technologies}
                </p>
              )}
              {item.link && (
                <p className="mt-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Project
                  </a>
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {props.certificateItems?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
            Certifications
          </h2>
          {props.certificateItems.map((item, index) => {
            if (item.name)
              return (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="text-xl font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <p className="font-medium text-gray-700">{item.issuer}</p>
                  <p className="text-gray-600">Earned: {item.date}</p>
                  {item.description && (
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  )}
                </div>
              );
          })}
        </section>
      )}
    </div>
  );
};

export default DefaultTemplate;
