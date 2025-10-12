import { ResumePreviewProps } from "@/types/resume";

const ModernTemplate = (props: ResumePreviewProps) => {
  const formatDate = (dateString: string): string => {
    return !isNaN(new Date(dateString).valueOf())
      ? new Date(dateString).getFullYear().toString()
      : dateString;
  };

  const skills: string[] = [];
  Object.entries(props.skills).forEach(([category, skillsArray]) => {
    if (Array.isArray(skillsArray)) {
      const names = skillsArray.map((skill: { name: string }) => skill.name);
      skills.push(...names);
    }
  });

  return (
    <div className="">
      <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
        <div className="flex rounded-t-lg bg-[#8e4d57] sm:px-2 w-full">
          <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="https://media.licdn.com/dms/image/C4D03AQH8qidO0nb_Ng/profile-displayphoto-shrink_800_800/0/1615696897070?e=2147483647&v=beta&t=ia3wfE2J7kVLdBy9ttkgUDAA_ul29fymykhQo0lABDo" />
          </div>

          <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p className="font-poppins font-bold text-[#fcfbfc] sm:text-4xl text-2xl">
              {props.name}
            </p>
            <p className="text-[#fcfbfc]">{props.headline}</p>
          </div>
        </div>

        <div className="p-5">
          <div className="flex flex-col sm:flex-row sm:mt-10">
            <div className="flex flex-col sm:w-1/3">
              <div className="py-3 sm:order-none order-3">
                {/* TODO: add dynamic links (user can add what links he want to see) */}
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  My Contact
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>

                <div>
                  <div className="flex items-center my-1">
                    <a className="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                    <div className="ml-2 truncate">{props.linkedinUrl}</div>
                  </div>
                  <div className="flex items-center my-1">
                    <a
                      className="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds YouTube"
                      href=""
                      target="_blank"
                    >
                      <svg
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 448 512"
                        className="h-4"
                      >
                        <g>
                          <path
                            fill="currentColor"
                            className="st0"
                            d="M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165
		c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792
		c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135
		c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142
		c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006
		c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14
		C152.159-1.117,112.6,10.159,94.811,21.696z"
                          />
                        </g>
                      </svg>
                    </a>
                    <div>{props.phone}</div>
                  </div>
                  <div className="flex items-center my-1">
                    <a
                      className="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Facebook"
                      href=""
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </a>
                    <div>{props.facebookUrl}</div>
                  </div>
                  <div className="flex items-center my-1">
                    <a
                      className="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        className="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                    <div>{props.twitterUrl}</div>
                  </div>
                </div>
              </div>
              <div className="py-3 sm:order-none order-2">
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  Skills
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>

                <div>
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center my-1">
                      <div className="">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-3 sm:order-none order-1">
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  Education Background
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>

                <div className="flex flex-col space-y-1">
                  {props.educationItems?.length > 0 &&
                    props.educationItems.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <p className="font-semibold text-xs text-gray-700">
                          {formatDate(item.endDate)}
                        </p>
                        <p className="text-sm font-medium">
                          <span className="text-green-700">
                            {item.degree.toUpperCase()}
                          </span>
                          , {item.field.toUpperCase()},{" "}
                          {item.school.toUpperCase()}.
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  About Me
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>
                <p>{props.summary}</p>
              </div>

              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  Professional Experience
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>

                <div className="flex flex-col">
                  {props.experienceItems?.length > 0 &&
                    props.experienceItems.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <p className="text-lg font-bold text-gray-700">
                          {item.company} | {item.title}
                        </p>
                        <p className="font-semibold text-sm text-gray-700">
                          {formatDate(item.startDate)} -{" "}
                          {formatDate(item.endDate)}
                        </p>
                        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
                          Key Responsibilities
                        </p>
                        <ul className="text-sm list-disc pl-4 space-y-1">
                          {/* TODO: make real list items */}
                          <li>{item.description}</li>
                        </ul>
                      </div>
                    ))}
                </div>
              </div>

              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  Projects
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>

                <div className="flex flex-col">
                  {props.projectItems.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">
                        {item.name}
                      </p>
                      <p className="font-normal text-sm text-gray-700 mb-1 pl-2">
                        {item.description}
                      </p>
                      <a
                        href={item.link}
                        className="hover:underline text-sm text-[#8e4d57]"
                      >
                        View Project
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-3">
                <h2 className="text-lg font-poppins font-bold text-[#8e4d57]">
                  Certifications
                </h2>
                <div className="border-2 w-20 border-[#8e4d57] my-3"></div>

                <div className="flex flex-col">
                  {props.certificateItems.map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <p className="text-lg font-semibold text-gray-700">
                        {item.name} - {item.issuer}
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        {formatDate(item.date)}
                      </p>
                      <p className="font-normal text-sm text-gray-700 mb-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
