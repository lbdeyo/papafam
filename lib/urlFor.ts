import {client} from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

// get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

export default function urlFor(source: any) {
  const returnVal = builder.image(source);
  return builder.image(source);
}
