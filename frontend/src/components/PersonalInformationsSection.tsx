type PersonalInformationsSectionProps = {
  name: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setLinkedinUrl: (linkedinUrl: string) => void;
  setGithubUrl: (githubUrl: string) => void;
};

const PersonalInformationsSection = ({
  name,
  email,
  phone,
  linkedinUrl,
  githubUrl,
  setName,
  setEmail,
  setPhone,
  setLinkedinUrl,
  setGithubUrl,
}: PersonalInformationsSectionProps) => {
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
      </div>
    </section>
  );
};

export default PersonalInformationsSection;
