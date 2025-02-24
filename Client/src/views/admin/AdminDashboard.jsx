import React from "react";
import { FaPeopleGroup } from "react-icons/fa6"; // ✅ Import FaPeopleGroup here
import AdminPageCards from "../../components/AdminPageCard";

const batchDetails = [
  {
    batchYear: "2024",
    value: "44",
    label: "Total Students",
    bgColor: "bg-green-200",
    iconBgColor: "bg-red-700",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2024",
    value: "120",
    label: "Total 10th Students",
    bgColor: "bg-lime-100",
    iconBgColor: "bg-yellow-500",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2024",
    value: "50",
    label: "Total 11th Students",
    bgColor: "bg-amber-50",
    iconBgColor: "bg-rose-800",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2024",
    value: "50",
    label: "Total 12th Students",
    bgColor: "bg-green-300",
    iconBgColor: "bg-yellow-900",
    logo: FaPeopleGroup,
  },
];

const testDetails = [
  {
    batchYear: "2025",
    value: "44",
    label: "Total Test",
    bgColor: "bg-green-200",
    iconBgColor: "bg-red-700",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2025",
    value: "120",
    label: "Total 10th Test",
    bgColor: "bg-lime-100",
    iconBgColor: "bg-yellow-500",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2025",
    value: "50",
    label: "Total 11th Test",
    bgColor: "bg-amber-50",
    iconBgColor: "bg-rose-800",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2025",
    value: "50",
    label: "Total 12th Test",
    bgColor: "bg-green-300",
    iconBgColor: "bg-yellow-900",
    logo: FaPeopleGroup,
  },
];

const paymentDetails = [
  {
    batchYear: "2025",
    value: "44",
    label: "Total Payment",
    bgColor: "bg-green-200",
    iconBgColor: "bg-red-700",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2025",
    value: "120",
    label: "10th Student Payment",
    bgColor: "bg-lime-100",
    iconBgColor: "bg-yellow-500",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2025",
    value: "50",
    label: "11th Student Payment",
    bgColor: "bg-amber-50",
    iconBgColor: "bg-rose-800",
    logo: FaPeopleGroup,
  },
  {
    batchYear: "2025",
    value: "50",
    label: "12th Student Payment",
    bgColor: "bg-green-300",
    iconBgColor: "bg-yellow-900",
    logo: FaPeopleGroup,
  },
];

const AdminDashboard = () => {
  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8">
      <h1 className="text-2xl py-5">Batch Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {batchDetails.map((item, index) => (
          <AdminPageCards
            key={index}
            batchYear={item.batchYear}
            value={item.value}
            label={item.label}
            bgColor={item.bgColor}
            iconBgColor={item.iconBgColor}
            logo={item.logo} // ✅ Pass the component reference
            onClick={() => alert(`Clicked on ${item.label}`)}
          />
        ))}
      </div>

      {/* Payment Details */}
      <h1 className="text-2xl py-5">Payment Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {paymentDetails.map((item, index) => (
          <AdminPageCards
            key={index}
            batchYear={item.batchYear}
            value={item.value}
            label={item.label}
            bgColor={item.bgColor}
            iconBgColor={item.iconBgColor}
            logo={item.logo} // ✅ Pass the component reference
            onClick={() => alert(`Clicked on ${item.label}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
