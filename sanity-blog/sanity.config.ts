import {defineConfig, isDev} from "sanity";
import {deskTool} from "sanity/desk";
import {schemaTypes} from "./schemas";
import {myTheme} from "./theme";
import StudioNavbar from "./components/StudioNavbar";
import Logo from "./components/Logo";
import {getDefaultDocumentNode} from "./structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "lbdeyo_Content_Studio",
  title: "lbdeyo Content Studio",

  projectId,
  dataset,

  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
