"use client";
import React, { useCallback, useState } from "react";

function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto w-full max-w-frame px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-brass">
              Contact
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-ivory md:text-7xl">
              What shall we{" "}
              <em className="text-ivory/70">create</em>
              <br />
              together?
            </h1>
            <p className="mt-8 max-w-md text-lg text-ivory/65">
              Tell me a little about the work. I&apos;ll write back quickly —
              usually within a&nbsp;day.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-ivory/10 bg-ink-raised p-6 sm:p-8 md:col-span-7 md:p-10">
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
    setErrors((prev) => ({
      ...prev,
      email: validateEmail(value) ? undefined : "Please enter a valid email address.",
    }));
  }, [validateEmail]);

  const onBlurMessage = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
    const value = e.target.value.trim();
    setErrors((prev) => ({ ...prev, message: value ? undefined : "Please include a brief message." }));
  }, []);

  const clearError = useCallback((key: keyof typeof errors) => {
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }, []);

  const fieldClass = (hasError: boolean) =>
    `form-input w-full rounded-xl border bg-ink px-4 py-3 text-ivory placeholder:text-ivory/30 ${
      hasError
        ? "border-ember ring-2 ring-ember/30"
        : "border-ivory/15 focus:border-ivory/40 focus:ring-1 focus:ring-ivory/20"
    }`;

  const selectClass =
    "form-select w-full rounded-xl border border-ivory/15 bg-ink px-4 py-3 text-ivory focus:border-ivory/40 focus:ring-1 focus:ring-ivory/20";

  const textareaClass = (hasError: boolean) =>
    `form-textarea w-full rounded-xl border bg-ink px-4 py-3 text-ivory placeholder:text-ivory/30 ${
      hasError
        ? "border-ember ring-2 ring-ember/30"
        : "border-ivory/15 focus:border-ivory/40 focus:ring-1 focus:ring-ivory/20"
    }`;

  return (
    <form
      action="https://formsubmit.co/lbdeyo@gmail.com"
      method="POST"
      autoComplete="on"
      className="grid grid-cols-1 gap-5 md:grid-cols-2"
    >
      <input type="hidden" name="_subject" value="Message to L.B. Deyo, Designer" />
      <div>
        <label htmlFor="nameField" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ivory/55">
          Name
        </label>
        <input
          id="nameField"
          className={fieldClass(!!errors.name)}
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
          onBlur={onBlurName}
          onChange={() => clearError("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-ember" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="emailField" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ivory/55">
          Email
        </label>
        <input
          type="email"
          id="emailField"
          className={fieldClass(!!errors.email)}
          name="email"
          placeholder="you@studio.com"
          autoComplete="email"
          required
          onBlur={onBlurEmail}
          onChange={() => clearError("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-ember" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div className="md:col-span-2">
        <label htmlFor="typeSelector" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ivory/55">
          I need
        </label>
        <select className={selectClass} name="typeSelect" title="typeSelect" id="typeSelector">
          <option value="newWebsite">A new website</option>
          <option value="workWebsite">Updates to my existing website</option>
          <option value="video">A video</option>
          <option value="design">Print or digital design</option>
          <option value="illustration">Custom illustrations</option>
          <option value="soundEditing">Sound editing</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="messageField" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-ivory/55">
          Message
        </label>
        <textarea
          name="message"
          id="messageField"
          className={textareaClass(!!errors.message)}
          rows={6}
          placeholder="What are we making?"
          required
          onBlur={onBlurMessage}
          onChange={() => clearError("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-ember" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <div className="md:col-span-2">
        <button
          className="inline-flex items-center rounded-full bg-ivory px-6 py-3 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors hover:bg-white"
          type="submit"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactPage;
