import { SkillItem, SkillsSectionProps } from "@/types/resume";
import { useEffect, useState } from "react";

const SkillsSection = ({ skillItems, setSkillItems }: SkillsSectionProps) => {
  const [categoryNames, setCategoryNames] = useState<{ [key: string]: string }>(
    {}
  );

  useEffect(() => {
    const names: { [key: string]: string } = {};
    Object.keys(skillItems).forEach((category) => {
      names[category] = category;
    });
    setCategoryNames(names);
  }, [skillItems]);

  const addSkillItem = () => {
    const newCategoryName = `New Category ${
      Object.keys(skillItems).length + 1
    }`;
    setSkillItems({
      ...skillItems,
      [newCategoryName]: [{ name: "New Skill", level: "50%" }],
    });
  };

  const addSkillToCategory = (category: string) => {
    const updatedItems = { ...skillItems };
    updatedItems[category] = [
      ...updatedItems[category],
      { name: "New Skill", level: "50%" },
    ];
    setSkillItems(updatedItems);
  };

  const updateCategoryName = (oldCategory: string, newCategory: string) => {
    setCategoryNames((prev) => ({ ...prev, [oldCategory]: newCategory }));
  };

  const commitCategoryNameChange = (oldCategory: string) => {
    const newCategory = categoryNames[oldCategory].trim();
    if (!newCategory || oldCategory === newCategory) return;

    if (skillItems[newCategory]) return;

    const updatedItems = { ...skillItems };
    const categoryData = updatedItems[oldCategory];
    delete updatedItems[oldCategory];
    updatedItems[newCategory] = categoryData;

    setSkillItems(updatedItems);
  };

  const updateSkillItem = (
    category: string,
    index: number,
    field: keyof SkillItem,
    value: string
  ) => {
    const updatedItems = { ...skillItems };
    const updatedCategory = [...updatedItems[category]];

    updatedCategory[index] = {
      ...updatedCategory[index],
      [field]: value,
    };

    updatedItems[category] = updatedCategory;
    setSkillItems(updatedItems);
  };

  const removeSkillItem = (category: string, index: number) => {
    const updatedItems = { ...skillItems };
    const updatedCategory = [...updatedItems[category]];
    updatedCategory.splice(index, 1);
    updatedItems[category] = updatedCategory;
    setSkillItems(updatedItems);
  };

  const removeCategory = (category: string) => {
    const updatedItems = { ...skillItems };
    delete updatedItems[category];
    setSkillItems(updatedItems);
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Skills
      </h1>

      {Object.entries(skillItems).map(([category, skillItemArray], index) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Category: #{category}
            </h3>
            <button
              className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors delay-150 ease-in-out cursor-pointer"
              type="button"
              onClick={() => removeCategory(category)}
            >
              Remove Category
            </button>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              placeholder="JavaScript"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={categoryNames[category] || category}
              onChange={(e) => updateCategoryName(category, e.target.value)}
              onBlur={() => commitCategoryNameChange(category)}
            />
          </div>

          {skillItemArray.map((skillItem, idx) => (
            <div key={idx} className="flex items-end gap-2 mb-2">
              <div className="flex-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skill Name
                </label>
                <input
                  type="text"
                  placeholder="JavaScript"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={skillItem.name}
                  onChange={(e) =>
                    updateSkillItem(category, idx, "name", e.target.value)
                  }
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skill Level
                </label>
                <input
                  type="text"
                  placeholder="50%"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={skillItem.level}
                  onChange={(e) =>
                    updateSkillItem(category, idx, "level", e.target.value)
                  }
                />
              </div>

              <button
                className="px-3 py-1 bg-red-50 text-red-700 rounded-md hover:bg-red-100 cursor-pointer"
                type="button"
                onClick={() => removeSkillItem(category, idx)}
              >
                Remove Skill
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addSkillToCategory(category)}
            className="mt-3 px-3 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 cursor-pointer"
          >
            + Add Skill
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSkillItem}
        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        + Add Category
      </button>
    </section>
  );
};

export default SkillsSection;
