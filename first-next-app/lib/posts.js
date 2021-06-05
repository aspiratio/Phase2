import fs from "fs";
import path from "path";
import matter from "gray-matter";

// process.cwd()で、node実行時のワーキングディレクトリのパスを取得、postsと結合している
const postsDirPath = path.join(process.cwd(), "posts");

export function getPosts() {
  // fs.readdirSyncは、引数にとったパスのディレクトリ内のファイル名の配列を返す
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    const postPath = path.join(postsDirPath, postName);

    // postファイルを読み込み、FrontMatterを解析
    const result = matter(fs.readFileSync(postPath, "utf8"));
    return result.data;
  });
}

export function getIds() {
  const postNames = fs.readdirSync(postsDirPath);

  return postNames.map((postName) => {
    return {
      params: {
        id: postName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostById(id) {
  const postPath = path.join(postsDirPath, `${id}.md`);

  const result = matter(fs.readFileSync(postPath, "utf8"));
  result.date = String(result.date);

  return {
    id,
    ...result.data,
    content: result.content,
  };
}
