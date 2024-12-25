import React from "react";
import "@tailwindcss/forms";

function page() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] relative flex flex-col items-center">
      <section className="w-full max-w-screen-lg mx-auto px-10 mb-10 mt-24 fade-in-2">
        <h1 className="text-5xl md:text-6xl mb-0 pb-0 text-[#FF0479]">
          Contact L.B. Deyo
        </h1>
        <div className="border-b-[#ffae00] shadow-black shadow-sm border-b mt-2"></div>
        <p className="mt-4 mb-5">What story do you want to tell?</p>
        <form
          action="https://formsubmit.co/lbdeyo@gmail.com"
          method="POST"
          className="flex flex-col gap-4 text-zinc-800 max-w-2xl">
          <input
            type="hidden"
            name="_subject"
            value="Message to L.B. Deyo, Designer"></input>
          <input
            className="form-input px-4 py-1 rounded-md"
            name="name"
            placeholder="Name"
            required
          />
          <select
            className="px-4 py-1 rounded-md"
            name="typeSelect"
            title="typeSelect"
            id="typeSelector">
            <option value="">I need...</option>
            <option value="newWebsite">A new website</option>
            <option value="workWebsite">Updates to my existing website</option>
            <option value="video">A video</option>
            <option value="design">Print or digital design</option>
            <option value="illustration">Custom illustrations</option>
            <option value="soundEditing">Sound editing</option>
            <option value="other">Other</option>
          </select>
          <input
            type="email"
            className="form-input px-4 py-1 rounded-md"
            name="email"
            placeholder="email address"
            required></input>
          <textarea
            name="message"
            className="form-textarea rounded-md"
            placeholder="Write your message here"
            required></textarea>
          <button
            className="text-black bg-[#ffae00] hover:bg-[#ffcc00] focus:ring-4 hover:text-black font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-blue-800"
            type="submit">
            SEND
          </button>
        </form>
      </section>
    </div>
  );
}

export default page;
