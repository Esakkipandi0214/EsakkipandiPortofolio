"use client";

import { useState } from "react";
import Image from "next/image";
import ContactUs from "../../public/Contactus/Contactus.svg";

const Contact = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div id="Contact" className=" mx-auto px-6 py-12 md:py-16 lg:py-20 bg-white  z-50  shadow-lg flex flex-col md:flex-row gap-8">
      <div className="flex flex-col justify-center md:w-1/2 text-gray-800">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Let&apos;s Connect</h2>
        <p className="mt-3 text-gray-600">We&apos;d love to hear from you! Fill out the form below and we&apos;ll get back to you soon.</p>
        <Image src={ContactUs} alt="Contact Illustration" className="mt-6 w-full max-w-sm mx-auto" />
      </div>

      <form onSubmit={handleSubmit} className="md:w-1/2 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button type="submit" className="w-full p-3 text-white font-semibold rounded-lg bg-orange-600 hover:bg-orange-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
