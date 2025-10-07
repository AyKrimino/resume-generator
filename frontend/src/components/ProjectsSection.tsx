type ProjectItem = {
  name: string;
  description: string;
  technologies: string;
  link: string;
};

type ProjectSectionProps = {
  projectItems: ProjectItem[];
  setProjectItems: (projectItems: ProjectItem[]) => void;
};

const ProjectSection = ({
  projectItems,
  setProjectItems,
}: ProjectSectionProps) => {
  const addProjectItem = () => {
    setProjectItems([
      ...projectItems,
      {
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
    ]);
  };

  const updateProjectItem = (index: number, field: string, value: string) => {
    const updatedItems = [...projectItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setProjectItems(updatedItems);
  };

  const removeProjectItem = (index: number) => {
    if (projectItems.length > 1) {
      const updatedItems = [...projectItems];
      updatedItems.splice(index, 1);
      setProjectItems(updatedItems);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Projects
      </h1>
      {projectItems.map((item, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Project #{index + 1}
            </h3>
            <button
              type="button"
              onClick={() => removeProjectItem(index)}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors delay-150 ease-in-out cursor-pointer"
            >
              Remove
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Name
            </label>
            <input
              type="text"
              placeholder="E-commerce Website"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.name}
              onChange={(e) => updateProjectItem(index, "name", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              placeholder="Brief description of the project"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.description}
              onChange={(e) =>
                updateProjectItem(index, "description", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies Used
            </label>
            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.technologies}
              onChange={(e) =>
                updateProjectItem(index, "technologies", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Link (optional)
            </label>
            <input
              type="url"
              placeholder="https://project-url.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.link}
              onChange={(e) => updateProjectItem(index, "link", e.target.value)}
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addProjectItem}
        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        + Add Project
      </button>
    </section>
  );
};

export default ProjectSection;
