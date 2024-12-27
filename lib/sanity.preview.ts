"use client";

import {projectId, dataset, apiVersion} from "./sanity.client";
import {createClient} from "next-sanity";

if (!projectId || !dataset || !apiVersion) {
  throw new Error(
    "Missing projectId, dataset, or apiVersion. Check your .env.local or sanity.client.ts"
  );
}

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});
