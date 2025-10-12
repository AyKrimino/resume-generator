import "@/app/templates/styles/minimal-template.css";
import { ResumePreviewProps } from "@/types/resume";

const MinimalTemplate = (props: ResumePreviewProps) => {
  const formatDate = (dateString: string): string => {
    return !isNaN(new Date(dateString).valueOf())
      ? new Date(dateString).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })
      : dateString;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <header className="flex items-center mb-2">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQHBgMttNT44bw/article-cover_image-shrink_720_1280/0/1673417990795?e=2147483647&v=beta&t=mRO_7zq02rlo8kfKq_mUTFEv9aC9Un7H9uj0xTD3-Z4"
          alt="Profile Picture"
          className="w-44 h-44 mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
          <p className="text-lg text-gray-600">{props.headline}</p>
          <p className="text-gray-500 mt-2">
            Email: {props.email} | Phone: {props.phone} | LinkedIn:
            {props.linkedinUrl}
          </p>
        </div>
      </header>

      <section>
        <h2 className="section-title text-xl">About Me</h2>
        <p className="text-gray-700">{props.summary}</p>
      </section>

      <section className="mt-2">
        <h2 className="section-title text-xl">Skills</h2>
        <div className="space-y-1">
          <div>
            <h3 className="font-semibold">HTML & CSS</h3>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: "90px" }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">JavaScript</h3>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">React</h3>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">UI/UX Design</h3>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-2">
        <h2 className="section-title text-xl">Experience</h2>
        <div className="space-y-4">
          {props.experienceItems?.length > 0 &&
            props.experienceItems.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold">
                  {item.title} at {item.company}
                </h3>
                <p className="text-gray-600">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </p>
                {/* TODO: make real list description */}
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  {item?.description && <li>{item.description}</li>}
                </ul>
              </div>
            ))}
        </div>
      </section>

      <section className="mt-2">
        <h2 className="section-title text-xl">Education</h2>
        {props.educationItems?.length > 0 &&
          props.educationItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">
                {item.degree} in {item.field}
              </h3>
              <p className="text-gray-600">{item.school}</p>
              <p className="text-gray-500">
                Graduated: {formatDate(item.endDate)}
              </p>
            </div>
          ))}
      </section>

      <section className="mt-2">
        <h2 className="section-title text-xl">Projects</h2>
        {props.projectItems?.length > 0 &&
          props.projectItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-500">Technologies: {item.technologies}</p>
              <a
                href={item.link}
                className="text-gray-700 hover:underline text-sm"
              >
                View Project
              </a>
            </div>
          ))}
      </section>

      <section className="mt-2">
        <h2 className="section-title text-xl">Certifications</h2>
        {props.certificateItems?.length > 0 &&
          props.certificateItems.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.issuer}</p>
              <p className="text-gray-500">{item.description}</p>
              <p className="text-gray-500">{formatDate(item.date)}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export default MinimalTemplate;
