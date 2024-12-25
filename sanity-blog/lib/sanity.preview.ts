"use client";

import {projectId, dataset} from "./sanity.client";
import {createClient} from "next-sanity";

if (!projectId || !dataset) {
  throw new Error(
    "Missing projectId or dataset. Check your sanity.json or .env"
  );
}

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion: "2023-12-25",
  useCdn: false,
  perspective: "previewDrafts",
  stega: {
    enabled: true,
    studioUrl: "/studio",
  },
});
