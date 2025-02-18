import { useState } from "react";
import InputForm from "../../components/InputForm";
import Select from "react-select";
import MainButton from "../../components/MainButton";
import SocialButtons from "../../components/SocialButtons";
import Header from "../../layout/Header";

const Register = () => {
  const options = [
    { value: "10 Math", label: "10 Math" },
    { value: "11 Math", label: "11 Math" },
    { value: "12 Math", label: "12 Math" },
    { value: "Biology", label: "Biology" },
    { value: "Physics", label: "Physics" },
  ];

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    category: [], // Changed to an array for multiple selections
  });

  // Handle input field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Multi-Select dropdown change
  const handleSelectChange = (selectedOptions) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedOptions, // Store selected options array
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // Convert selected categories to an array of values if needed
    const formattedData = {
      ...formData,
      category: formData.category.map((item) => item.value), // Extract only values
    };

    console.log("Formatted Data:", formattedData);

    // You can send `formattedData` to an API
    // axios.post("/api/register", formattedData).then(response => console.log(response));
  };

  return (
    <div className="flex  bg-white justify-center items-center  xl:h-screen h-auto mt-10">
      <Header />
      <div className="w-full max-w-4xl p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl text-center">
          Welcome to Rajiv Classes!
        </h1>
        <p className="text-center text-gray-600 mt-2 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error
          quisquam illum odio blanditiis ex quam aperiam provident consequuntur
          aut quia quibusdam, non odit in placeat optio qui asperiores quos eius
          eaque alias expedita hic. Minus magnam ratione dignissimos nemo
          molestias reprehenderit aut beatae esse veniam, id ipsa voluptatum
        </p>

        {/* Form Start */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10">
            <InputForm
              className="w-full"
              placeholder="Enter first name"
              label="Student First Name"
              name="firstName"
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <InputForm
              className="w-full"
              placeholder="Enter last name"
              label="Student Last Name"
              name="lastName"
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <InputForm
              className="w-full"
              placeholder="Enter your email"
              label="Email"
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <InputForm
              className="w-full"
              placeholder="Enter your phone number"
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <InputForm
              className="w-full"
              placeholder="Village/city name"
              label="What is the student's address?"
              name="address"
              type="text"
              id="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {/* Multi-Select Dropdown */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-3">
                Categories
              </label>
              <Select
                options={options}
                isMulti
                onChange={handleSelectChange}
                value={formData.category}
                placeholder="Select categories"
                styles={{
                  control: (base) => ({
                    ...base,
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  }),
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <MainButton
              text="Submit"
              type="submit"
              className="w-full bg-indigo-500  hover:bg-indigo-600 rounded-xl"
            />
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 underline">
            Login
          </a>
        </p>
        <div className="flex items-center my-3">
          <hr className="w-full border-gray-300" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <SocialButtons
          onGoogleClick={() => alert("Google Signup")}
          onFacebookClick={() => alert("Facebook Signup")}
        />
      </div>
    </div>
  );
};

export default Register;
