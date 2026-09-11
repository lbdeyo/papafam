"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

export default function ShowreelCard() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    const preview = previewRef.current;
    const modal = modalRef.current;
    if (preview && modal) {
      preview.currentTime = modal.currentTime;
    }
    modal?.pause();
    dialogRef.current?.close();
    setOpen(false);
    preview?.play().catch(() => undefined);
    triggerRef.current?.focus();
  }, []);

  const openModal = useCallback(() => {
    const preview = previewRef.current;
    const modal = modalRef.current;
    const dialog = dialogRef.current;
    if (!dialog) return;

    preview?.pause();
    dialog.showModal();
    setOpen(true);

    if (modal) {
      modal.currentTime = preview?.currentTime ?? 0;
      modal.muted = false;
      modal.play().catch(() => {
        modal.muted = true;
        modal.play().catch(() => undefined);
      });
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClick = (event: MouseEvent) => {
      if (event.target === dialog) close();
    };
    const onClose = () => {
      setOpen(false);
      const preview = previewRef.current;
      const modal = modalRef.current;
      if (preview && modal) {
        preview.currentTime = modal.currentTime;
      }
      modal?.pause();
      preview?.play().catch(() => undefined);
    };

    dialog.addEventListener("click", onClick);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("click", onClick);
      dialog.removeEventListener("close", onClose);
    };
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-ivory/10 bg-ink-card md:col-span-5 md:aspect-auto md:min-h-full">
        <video
          ref={previewRef}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:brightness-110"
          autoPlay
          muted
          loop
          playsInline
          poster="/seo/social-preview-image.jpg"
          aria-hidden="true"
        >
          <source src="/showreel-2025.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/20" />
        <button
          ref={triggerRef}
          type="button"
          onClick={openModal}
          className="absolute inset-0 z-10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ivory/50"
          aria-haspopup="dialog"
          aria-label="Watch Showreel ’25"
        />
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between">
          <p className="text-[11px] uppercase tracking-[0.22em] text-ivory/80">
            Showreel ’25
          </p>
          <span className="flex items-center gap-2 text-ivory">
            <span className="text-[11px] uppercase tracking-[0.22em] text-ivory/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Watch
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-ink/50 backdrop-blur-sm transition-colors group-hover:border-white/60 group-hover:bg-ink/70">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 translate-x-px"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5.5v13l11-6.5L8 5.5Z" />
              </svg>
            </span>
          </span>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 z-[100] m-auto h-fit w-[min(92vw,72rem,calc(80vh*16/9))] max-w-none border-0 bg-transparent p-0 text-ivory [&::backdrop]:bg-ink/90 [&::backdrop]:backdrop-blur-md"
      >
        <div className="relative overflow-hidden rounded-[1.75rem] border border-ivory/10 bg-ink-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)]">
          <div className="flex items-center justify-between px-5 py-3 md:px-6">
            <p
              id={titleId}
              className="text-[11px] uppercase tracking-[0.22em] text-ivory/70"
            >
              Showreel ’25
            </p>
            <button
              type="button"
              onClick={close}
              className="rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ivory/70 transition-colors hover:bg-ivory/10 hover:text-ivory"
            >
              Close
            </button>
          </div>
          <video
            ref={modalRef}
            className="aspect-video h-auto w-full bg-black object-contain"
            controls
            playsInline
            loop
            poster="/seo/social-preview-image.jpg"
          >
            <source src="/showreel-2025.mp4" type="video/mp4" />
          </video>
        </div>
      </dialog>
    </>
  );
}
