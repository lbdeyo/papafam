import {defineField, defineType} from "sanity";

export default defineType({
  name: "SoloImage",
  title: "SoloImage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "img",
      title: "Img",
      type: "image",
    }),
  ],

  preview: {
    select: {
      title: "title",

      media: "img",
    },
  },
});
