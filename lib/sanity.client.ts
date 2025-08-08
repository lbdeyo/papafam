import { createClient } from "next-sanity";

const projectIdEnv = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

if (!projectIdEnv) {
  throw new Error(
    "Missing env NEXT_PUBLIC_SANITY_PROJECT_ID. Add it to .env.local (see .env.local.example)."
  );
}

export const projectId = projectIdEnv;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // set to `true` to fetch from edge cache
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});

// Separate client for static generation to prevent response body consumption issues
export const staticClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for static generation
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/studio",
  },
});
