import {Dispatch, SetStateAction} from "react";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  priority: number;
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  youtube: string;
}

interface YouTube extends Base {
  title: string;
  renderDefault: Function;
  url: url;
}
interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

type Category =
  | string
  | ({
      _id: string;
      title: string;
    } & Base);

interface BlogListFilterProps {
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
  posts: Post[];
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
