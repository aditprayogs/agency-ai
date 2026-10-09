import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);


const onSubmit = async (event) => {
  event.preventDefault();

  setLoading(true);

  const formData = new FormData(event.target);

  formData.append(
    "access_key",
    "7623a885-ae86-4b4c-b604-022ba94de803"
  );

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success("Pesan berhasil dikirim!");
      event.target.reset();
    } else {
      toast.error(
        data.message || "Pesan gagal dikirim. Silakan coba lagi."
      );
    }
  } catch (error) {
    toast.error("Terjadi kesalahan koneksi. Silakan coba lagi.");
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 py-20 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white bg-white dark:bg-[#0b0f19]"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Your Name
          </label>

          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img
              src={assets.person_icon}
              alt=""
              className="w-5 h-5"
            />

            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              autoComplete="name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email ID
          </label>

          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img
              src={assets.email_icon}
              alt=""
              className="w-5 h-5"
            />

            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              autoComplete="email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Message
          </label>

          <textarea
            rows={8}
            placeholder="Enter your message"
            name="message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent resize-y"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Submit"}

          <img
            src={assets.arrow_icon}
            alt=""
            className="w-4"
          />
        </button>

        {/* Result */}
        {result && (
          <p
            role="status"
            aria-live="polite"
            className="sm:col-span-2 text-sm"
          >
            {result}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactUs;