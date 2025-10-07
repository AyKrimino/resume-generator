type EducationItem = {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
};
type EducationSectionProps = {
  educationItems: EducationItem[];
  setEducationItems: (educationItems: EducationItem[]) => void;
};

const EducationSection = ({
  educationItems,
  setEducationItems,
}: EducationSectionProps) => {
  const addEducationItem = () => {
    setEducationItems([
      ...educationItems,
      {
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const updateEducationItem = (index: number, field: string, value: string) => {
    const updatedItems = [...educationItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setEducationItems(updatedItems);
  };

  const removeEducationItem = (index: number) => {
    if (educationItems.length > 1) {
      const updatedItems = [...educationItems];
      updatedItems.splice(index, 1);
      setEducationItems(updatedItems);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Education
      </h1>
      {educationItems.map((item, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Education #{index + 1}
            </h3>
            <button
              type="button"
              onClick={() => removeEducationItem(index)}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors delay-150 ease-in-out cursor-pointer"
            >
              Remove
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                School/University
              </label>
              <input
                type="text"
                placeholder="University of Example"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.school}
                onChange={(e) =>
                  updateEducationItem(index, "school", e.target.value)
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Degree
              </label>
              <input
                type="text"
                placeholder="Bachelor of Science"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.degree}
                onChange={(e) =>
                  updateEducationItem(index, "degree", e.target.value)
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Field of Study
              </label>
              <input
                type="text"
                placeholder="Computer Science"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={item.field}
                onChange={(e) =>
                  updateEducationItem(index, "field", e.target.value)
                }
              />
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
                    updateEducationItem(index, "startDate", e.target.value)
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
                    updateEducationItem(index, "endDate", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Relevant coursework, honors, or achievements"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.description}
              onChange={(e) =>
                updateEducationItem(index, "description", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addEducationItem}
        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        + Add Education
      </button>
    </section>
  );
};

export default EducationSection;
