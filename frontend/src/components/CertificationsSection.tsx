import { CertificationsSectionProps } from "@/types/resume";

const CertificationsSection = ({
  certificateItems,
  setCertificateItems,
}: CertificationsSectionProps) => {
  const addCertificateItem = () => {
    setCertificateItems([
      ...certificateItems,
      {
        name: "",
        issuer: "",
        date: "",
        description: "",
      },
    ]);
  };

  const updateCertificateItem = (
    index: number,
    field: string,
    value: string
  ) => {
    const updatedItems = [...certificateItems];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setCertificateItems(updatedItems);
  };

  const removeCertificateItem = (index: number) => {
    if (certificateItems.length > 1) {
      const updatedItems = [...certificateItems];
      updatedItems.splice(index, 1);
      setCertificateItems(updatedItems);
    }
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-4">
        Certifications
      </h1>
      {certificateItems.map((item, index) => (
        <div key={index} className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Certificate #{index + 1}
            </h3>
            <button
              type="button"
              onClick={() => removeCertificateItem(index)}
              className="px-3 py-1 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors delay-150 ease-in-out cursor-pointer"
            >
              Remove
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Certificate Name
            </label>
            <input
              type="text"
              placeholder="AWS Certified Developer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.name}
              onChange={(e) =>
                updateCertificateItem(index, "name", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Issuing Organization
            </label>
            <input
              type="text"
              placeholder="Amazon Web Services"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.issuer}
              onChange={(e) =>
                updateCertificateItem(index, "issuer", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Earned
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.date}
              onChange={(e) =>
                updateCertificateItem(index, "date", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description (optional)
            </label>
            <textarea
              placeholder="Additional details about the certification"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={item.description}
              onChange={(e) =>
                updateCertificateItem(index, "description", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addCertificateItem}
        className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors delay-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        + Add Certificate
      </button>
    </section>
  );
};

export default CertificationsSection;
