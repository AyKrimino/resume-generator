import { ExperienceSectionProps } from "@/types/resume";

const ExperienceSection = ({
  experienceItems,
  setExperienceItems,
}: ExperienceSectionProps) => {
  const addExperienceItem = () => {
    setExperienceItems([
      ...experienceItems,
      {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const updateExperienceItem = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedItems = [...experienceItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setExperienceItems(updatedItems);
  };

  const removeExperienceItem = (index: number) => {
    if (experienceItems.length > 1) {
      const updatedItems = [...experienceItems];
      updatedItems.splice(index, 1);
      setExperienceItems(updatedItems);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Work Experience
      </h1>
      {experienceItems.map((item, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Experience #{index + 1}
            </h3>
            <button
              type="button"
              onClick={() => removeExperienceItem(index)}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors delay-150 ease-in-out cursor-pointer"
            >
              Remove
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company
              </label>
              <input
                type="text"
                placeholder="Tech Company Inc."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.company}
                onChange={(e) =>
                  updateExperienceItem(index, "company", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
              </label>
              <input
                type="text"
                placeholder="Senior Developer"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.title}
                onChange={(e) =>
                  updateExperienceItem(index, "title", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.startDate}
                onChange={(e) =>
                  updateExperienceItem(index, "startDate", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.endDate}
                onChange={(e) =>
                  updateExperienceItem(index, "endDate", e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Key responsibilities and achievements"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.description}
              onChange={(e) =>
                updateExperienceItem(index, "description", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addExperienceItem}
        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer delay-150 ease-in-out"
      >
        + Add Experience
      </button>
    </section>
  );
};

export default ExperienceSection;
