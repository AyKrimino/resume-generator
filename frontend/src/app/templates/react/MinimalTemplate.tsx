const MinimalTemplate = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <header className="flex items-center mb-6">
          <img
            src="https://media.licdn.com/dms/image/D4D12AQHBgMttNT44bw/article-cover_image-shrink_720_1280/0/1673417990795?e=2147483647&v=beta&t=mRO_7zq02rlo8kfKq_mUTFEv9aC9Un7H9uj0xTD3-Z4"
            alt="Profile Picture"
            className="profile-pic mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">John Doe</h1>
            <p className="text-lg text-gray-600">
              Web Developer | UI/UX Designer
            </p>
            <p className="text-gray-500 mt-2">
              Email: john.doe@example.com | Phone: (123) 456-7890 | LinkedIn:
              linkedin.com/in/johndoe
            </p>
          </div>
        </header>

        <section>
          <h2 className="section-title text-xl">About Me</h2>
          <p className="text-gray-700">
            Passionate web developer with over 5 years of experience in building
            interactive and responsive websites. Adept at collaborating with
            designers and developers to create user-centered solutions. Excels
            in problem-solving and is committed to continuous learning and
            improvement.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="section-title text-xl">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">HTML & CSS</h3>
              <div className="skill-bar">
                <div className="skill-fill" style="width: 90%;"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">JavaScript</h3>
              <div className="skill-bar">
                <div className="skill-fill" style="width: 80%;"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">React</h3>
              <div className="skill-bar">
                <div className="skill-fill" style="width: 85%;"></div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">UI/UX Design</h3>
              <div className="skill-bar">
                <div className="skill-fill" style="width: 75%;"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="section-title text-xl">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">
                Senior Web Developer at XYZ Corp
              </h3>
              <p className="text-gray-600">Jan 2020 - Present</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>
                  Developed and maintained company websites and applications.
                </li>
                <li>
                  Collaborated with cross-functional teams to enhance user
                  experience.
                </li>
                <li>
                  Implemented responsive designs and optimized performance.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Front-End Developer at ABC Inc</h3>
              <p className="text-gray-600">Jun 2017 - Dec 2019</p>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>
                  Built interactive user interfaces with HTML, CSS, and
                  JavaScript.
                </li>
                <li>
                  Worked closely with designers to create visually appealing
                  designs.
                </li>
                <li>Ensured cross-browser compatibility and responsiveness.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="section-title text-xl">Education</h2>
          <div>
            <h3 className="font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600">University of Somewhere</p>
            <p className="text-gray-500">Graduated: May 2017</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MinimalTemplate;
