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
      className={`w-full bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Image & Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="text-center lg:text-left mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                Let&apos;s Connect
              </h2>
              <p className="mt-3 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We&apos;d love to hear from you! Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full">
              <div className="relative w-full max-w-md mx-auto lg:mx-0 h-64 sm:h-72 md:h-80 lg:h-96">
                <Image 
                  src={ContactUs} 
                  alt="Contact Illustration" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <form 
            onSubmit={handleSubmit} 
            className="w-full lg:w-1/2 space-y-5 sm:space-y-6 bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />

            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none shadow-sm transition duration-200"
              />
              {errors.name && <span className="text-red-500 mt-2 text-xs sm:text-sm font-medium">{errors.name}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none shadow-sm transition duration-200"
              />
              {errors.email && <span className="text-red-500 mt-2 text-xs sm:text-sm font-medium">{errors.email}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                className="px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:outline-none shadow-sm transition duration-200 resize-none"
              ></textarea>
              {errors.message && <span className="text-red-500 mt-2 text-xs sm:text-sm font-medium">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="w-full py-3 sm:py-4 px-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 active:scale-95"
            >
              Send Message
            </button>

            {status.message && (
              <div className={`mt-4 p-4 rounded-lg text-center text-sm sm:text-base font-medium transition duration-300 ${
                status.type === "success" 
                  ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200" 
                  : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200"
              }`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
