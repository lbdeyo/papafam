"use client";
import React, { useCallback, useState } from "react";

function page() {
  return (
    <div className="min-h-screen relative">
      <section className="relative w-full">
        <div className="w-full max-w-screen-lg mx-auto px-4 md:px-0 pt-20 md:pt-16 pb-10 mb-10 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-auto">
          {/* Hero card */}
          <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-[#FF0000] text-white border border-red-600 ring-1 ring-red-300/30 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight break-words text-white mb-3">
              Contact L.B. Deyo
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95">
              What shall we create together?
            </p>
          </div>

          {/* Form card */}
          <div className="md:col-span-6 rounded-2xl p-4 sm:p-6 md:p-8 bg-neutral-800 text-white border border-neutral-800 ring-1 ring-white/5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
            <FormStyled />
          </div>
        </div>
      </section>
    </div>
  );
}

function FormStyled() {
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateEmail = useCallback((value: string) => {
    const re = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    return re.test(value);
  }, []);

  const onBlurName = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setErrors((prev) => ({ ...prev, name: value ? undefined : "Please enter your name." }));
  }, []);

  const onBlurEmail = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setErrors((prev) => ({ ...prev, email: validateEmail(value) ? undefined : "Please enter a valid email address." }));
  }, [validateEmail]);

  const onBlurMessage = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.trim();
    setErrors((prev) => ({ ...prev, message: value ? undefined : "Please include a brief message." }));
  }, []);

  const clearError = useCallback((key: keyof typeof errors) => {
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, [setErrors]);

  const inputClass = (hasError: boolean) =>
    `form-input w-full px-4 py-2 rounded-md text-zinc-900 placeholder:text-zinc-500 ${hasError ? "border-2 border-red-500 ring-2 ring-red-500/30" : "border border-transparent focus:ring-2 focus:ring-white/30"
    }`;

  const selectClass = `form-select w-full px-4 py-2 rounded-md text-zinc-900 placeholder:text-zinc-500 border border-transparent focus:ring-2 focus:ring-white/30`;
  const textareaClass = (hasError: boolean) =>
    `form-textarea w-full px-4 py-2 rounded-md text-zinc-900 placeholder:text-zinc-500 ${hasError ? "border-2 border-red-500 ring-2 ring-red-500/30" : "border border-transparent focus:ring-2 focus:ring-white/30"
    }`;

  return (
    <form
      action="https://formsubmit.co/lbdeyo@gmail.com"
      method="POST"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-900"
    >
      <input type="hidden" name="_subject" value="Message to L.B. Deyo, Designer" />
      <div className="col-span-1">
        <label htmlFor="nameField" className="block text-sm font-medium text-zinc-200 mb-2">Name</label>
        <input
          id="nameField"
          className={inputClass(!!errors.name)}
          name="name"
          placeholder="Name"
          required
          onBlur={onBlurName}
          onChange={() => clearError("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div className="col-span-1">
        <label htmlFor="emailField" className="block text-sm font-medium text-zinc-200 mb-2">Email address</label>
        <input
          type="email"
          id="emailField"
          className={inputClass(!!errors.email)}
          name="email"
          placeholder="Email address"
          required
          onBlur={onBlurEmail}
          onChange={() => clearError("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="typeSelector" className="block text-sm font-medium text-zinc-200 ">I need...</label>
      </div>
      <select className={selectClass} name="typeSelect" title="typeSelect" id="typeSelector">
        <option value="newWebsite">A new website</option>
        <option value="workWebsite">Updates to my existing website</option>
        <option value="video">A video</option>
        <option value="design">Print or digital design</option>
        <option value="illustration">Custom illustrations</option>
        <option value="soundEditing">Sound editing</option>
        <option value="other">Other</option>
      </select>
      <div className="md:col-span-2">
        <label htmlFor="messageField" className="block text-sm font-medium text-zinc-200 mb-2">Message</label>
        <textarea
          name="message"
          id="messageField"
          className={textareaClass(!!errors.message)}
          rows={6}
          placeholder="Write your message here"
          required
          onBlur={onBlurMessage}
          onChange={() => clearError("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <div className="md:col-span-2">
        <button className="inline-block border-2 border-white text-white bg-transparent hover:bg-white hover:text-neutral-900 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-white/40" type="submit">
          Send message
        </button>
      </div>
    </form>
  );
}

export default page;
