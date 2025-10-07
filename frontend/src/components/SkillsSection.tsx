type SkillsSectionProps = {
  skills: string;
  setSkills: (skills: string) => void;
};

const SkillsSection = ({ skills, setSkills }: SkillsSectionProps) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Skills
      </h1>
      <textarea
        value={skills}
        placeholder="List your skills (e.g., React, Node.js, Python, Project Management, etc.)"
        onChange={(e) => setSkills(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ></textarea>
    </section>
  );
};

export default SkillsSection;
