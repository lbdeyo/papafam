import {defineConfig, isDev} from "sanity";
import {visionTool} from "@sanity/vision";
import {deskTool} from "sanity/desk";
import {schemaTypes} from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
// const projectId = "bx055f5z";
// const dataset = "production";
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "PAPAFAM_Content_Studio",
  title: "PAPAFAM_Content_Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
