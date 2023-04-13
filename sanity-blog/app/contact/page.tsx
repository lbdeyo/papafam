import React from "react";
import "@tailwindcss/forms";

function page() {
  return (
    <section className="mb-10  mt-24  mx-auto px-10  max-w-2xl fade-in-2 h-screen  ">
      <h1 className="text-4xl pb-3 ">Contact L.B. Deyo</h1>
      <p className="mb-5">What story do you want to tell?</p>
      <form
        action="https://formsubmit.co/lbdeyo@gmail.com"
        method="POST"
        className="flex flex-col gap-4  text-zinc-800 mx-auto">
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
          className="form-input px-4 py-1 rounded-md "
          name="email"
          placeholder="email address"
          required></input>
        <textarea
          name="message"
          className="form-textarea rounded-md"
          placeholder="Write your message here"
          required></textarea>
        <button
          className="text-black bg-[#ffae00] hover:bg-[#ffcc00]  focus:ring-4 focus:ring-blue-300 hover:text-black font-bold rounded-lg text-sm px-5 py-2.5  focus:outline-none dark:focus:ring-blue-800 shadow-black shadow-md"
          type="submit">
          SEND
        </button>
      </form>
    </section>
  );
}

export default page;
