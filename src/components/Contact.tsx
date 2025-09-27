"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ContactUs from "../../public/Contactus/Contactus.svg";

const Contact = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({ type: "", message: "" });

  // Animate section when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => { if (formRef.current) observer.unobserve(formRef.current); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };
    if (!formData.name.trim()) { newErrors.name = "Name is required"; valid = false; }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = "Valid email is required"; valid = false; }
    if (!formData.message.trim()) { newErrors.message = "Message cannot be empty"; valid = false; }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "f0c56849-8d4e-40d1-831e-0277e09a9869");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formDataToSend });
      const result = await response.json();
      if (result.success) {
        setStatus({ type: "success", message: "Message Sent Successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch (error:unknown) {
      if(typeof error == "string"){
      setStatus({ type: "error", message: "Failed to send message. Please check your connection." });
      }
    }
  };

  return (
    <section
      ref={formRef}
      id="Contact"
      className={` w-full mt-1 px-6 py-16 md:py-20 transition-all duration-1000 flex flex-col lg:flex-row gap-10 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left Image & Info */}
      <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Let&apos;s Connect
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
          We&apos;d love to hear from you! Fill out the form and we’ll get back to you as soon as possible.
        </p>
        <div className="mt-8 w-full max-w-md mx-auto lg:mx-0">
          <Image src={ContactUs} alt="Contact Illustration" className="w-full rounded-xl" />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-medium text-gray-700 dark:text-gray-200">Full Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gradient-to-r focus:ring-orange-500 focus:outline-none shadow-sm transition"
          />
          {errors.name && <span className="text-red-500 mt-1 text-sm">{errors.name}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-gray-700 dark:text-gray-200">Email</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gradient-to-r focus:ring-orange-500 focus:outline-none shadow-sm transition"
          />
          {errors.email && <span className="text-red-500 mt-1 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-medium text-gray-700 dark:text-gray-200">Message</label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-gradient-to-r focus:ring-orange-500 focus:outline-none shadow-sm transition resize-none"
          ></textarea>
          {errors.message && <span className="text-red-500 mt-1 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105"
        >
          Send Message
        </button>

        {status.message && (
          <p className={`mt-3 text-center text-sm font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}>
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
