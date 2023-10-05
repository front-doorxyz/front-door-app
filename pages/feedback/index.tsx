import { useState } from "react";
import emailjs from "emailjs-com";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";
import { NextPage } from "next";

const validateEmail = (email: string) => {
  // email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

const validateName = (name: string) => {
  // name validation (at least 3 characters)
  return name.length >= 3;
};

const Feedback: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const emailjsKey = process.env.NEXT_PUBLIC_EMAILJS_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validate inputs
    const newErrors = {
      name: validateName(name) ? "" : "Name must be at least 3 characters",
      email: validateEmail(email) ? "" : "Invalid email address",
      message: message.trim() !== "" ? "" : "Message cannot be empty",
    };

    setErrors(newErrors);

    // Check if there are no errors before submitting
    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      // Perform the submission or API call here

      alert("Form submitted successfully!");
    }
  };

  return (
    <Layout title="Feedback">
      <Banner
        title="Help us improve by leaving your comments"
        subtitle="Review and Help us grow"
      />
      <div className="flex flex-col items-center  mt-[2%]">
        <form onSubmit={handleSubmit}>
          <div className="shadow-2xl w-[300px] mx-auto md:w-[30vw] bg-white rounded-[2%] p-10 mt-[4%] flex flex-col items-center justify-center gap-5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered h-10 p-3 rounded-md border border-slate-800 w-[200px] md:w-[20vw]"
              value={formData.name}
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.name}</p>

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered h-10 p-3 rounded-md border border-slate-800 w-[200px] md:w-[20vw]"
              value={formData.email}
              onChange={handleChange}
            />
            <p className="text-red-500">{errors.email}</p>

            <textarea
              name="message"
              placeholder="Enter your message"
              className="peer h-3/4 min-h-[100px] w-[200px] md:w-[20vw] rounded-md border border-slate-800 input input-bordered p-3"
              value={formData.message}
              onChange={handleChange}></textarea>
            <p className="text-red-500">{errors.message}</p>
            <button
              className="px-8 py-3 bg-purple-950 text-white rounded-md focus:outline-none w-[200px] md:w-[20vw]"
              type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Feedback;
