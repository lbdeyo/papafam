"use client";

import { Suspense } from "react";

export default function PreviewSuspense({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback="Loading...">{children}</Suspense>;
}
