import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostItemProps } from "@/modules/posts/view";

// Back to the root folder
const root = process.cwd();
const postsDirPath = "src/data/posts";

export async function getPostSlug() {
  const files = fs.readdirSync(path.join(root, postsDirPath));

  const slugs = files.map((file) => {
    // Set slug from file name
    const slug = file.replace(".mdx", "");

    return {
      params: {
        slug,
      },
    };
  });

  return slugs;
}

export async function getPosts() {
  // Get all the files on folder blogs
  const files = fs.readdirSync(path.join(root, postsDirPath));

  // Get slug for blogs
  const blogs = files.map((file) => {
    // Set slug from file name
    const slug = file.replace(".mdx", "");
    // Get frontmatter
    const fm = fs.readFileSync(path.join(root, postsDirPath, file), "utf-8");

    const { data: body } = matter(fm);

    return {
      slug,
      body,
    } as PostItemProps;
  });

  return blogs;
}

export async function getPostBySlug(slug: string) {
  // Get files with the specific slug
  const files = fs.readFileSync(
    path.join(root, postsDirPath, slug + ".mdx"),
    "utf-8"
  );

  const { data: body, content } = matter(files);

  return {
    body,
    content,
  };
}
