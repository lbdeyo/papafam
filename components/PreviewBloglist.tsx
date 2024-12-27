"use client";

import {previewClient} from "../lib/sanity.preview";
import BlogList from "./BlogList";
import {groq} from "next-sanity";
import {useEffect, useState} from "react";

type Props = {
  query: string;
};

export default function PreviewBlogList({query}: Props) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await previewClient.fetch(groq`*[_type == "post"] {
        ...,
        author->,
        categories[]->
      } | order(priority asc)`);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return <BlogList posts={posts} />;
}
