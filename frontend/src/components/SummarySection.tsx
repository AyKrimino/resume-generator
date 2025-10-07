type SummarySectionProps = {
  summary: string;
  setSummary: (summary: string) => void;
};

const SummarySection = ({ summary, setSummary }: SummarySectionProps) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Professional Summary
      </h1>
      <textarea
        value={summary}
        placeholder="A brief professional summary highlighting your key skills, experience, and career goals..."
        onChange={(e) => setSummary(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      ></textarea>
    </section>
  );
};

export default SummarySection;
