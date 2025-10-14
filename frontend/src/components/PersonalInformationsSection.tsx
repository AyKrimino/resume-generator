import { useTemplate } from "@/context/TemplateContext";
import { PersonalInformationsSectionProps } from "@/types/resume";

const PersonalInformationsSection = ({
  name,
  email,
  phone,
  headline,
  location,
  linkedinUrl,
  githubUrl,
  facebookUrl,
  twitterUrl,
  setName,
  setEmail,
  setPhone,
  setLinkedinUrl,
  setGithubUrl,
  setHeadline,
  setLocation,
  setFacebookUrl,
  setTwitterUrl,
}: PersonalInformationsSectionProps) => {
  const { currentTemplate } = useTemplate();

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Personal Informations
      </h1>
      <div className="space-y-1">
        <div className="">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {currentTemplate?.hasAttribute?.email && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        <div className="">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            placeholder="+216 55-555-555"
            className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {currentTemplate?.hasAttribute?.headline && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Headline
            </label>
            <input
              type="tel"
              placeholder="Full-stack Software Engineer"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>
        )}

        {currentTemplate?.hasAttribute?.location && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="tel"
              placeholder="San Francisco, CA"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        )}

        {currentTemplate?.hasAttribute?.linkedinUrl && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Linkedin URL
            </label>
            <input
              type="url"
              placeholder="https://linkedin.com/in/yourprofile"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
            />
          </div>
        )}

        {currentTemplate?.hasAttribute?.githubUrl && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Github URL
            </label>
            <input
              type="url"
              placeholder="https://github.com/yourusername"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
            />
          </div>
        )}

        {currentTemplate?.hasAttribute?.facebookUrl && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Facebook URL
            </label>
            <input
              type="url"
              placeholder="https://facebook.com/yourusername"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={facebookUrl}
              onChange={(e) => setFacebookUrl(e.target.value)}
            />
          </div>
        )}

        {currentTemplate?.hasAttribute?.twitterUrl && (
          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Twitter URL
            </label>
            <input
              type="url"
              placeholder="https://x.com/yourusername"
              className="mb-4 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={twitterUrl}
              onChange={(e) => setTwitterUrl(e.target.value)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalInformationsSection;
