#!/usr/bin/env zx

import fs from "fs";
import path from "path";
import prettier from "prettier";
import inquirer from "inquirer";
import { sidebar } from "../.vitepress/configs/sidebar";

const cwd = process.cwd();

const { a } = await inquirer.prompt([
  {
    type: "list",
    name: "a",
    message: "选择写作主题 (播客/不卡科技/思考):",
    choices: ["blog", "buka", "think", "jy"],
  },
]);

const directoryPath = path.join(`${cwd}/${a}`);

const filesAndDirectories = await fs.readdirSync(directoryPath);
const subdirectories = filesAndDirectories.filter((fileOrDir) => {
  const fullPath = path.join(directoryPath, fileOrDir);
  return fs.statSync(fullPath).isDirectory();
});

const { b } = await inquirer.prompt([
  {
    type: "list",
    name: "b",
    message: "选择分类:",
    choices: subdirectories,
  },
]);

const { c } = await inquirer.prompt([
  {
    type: "input",
    name: "c",
    message: "请输入文章标题:",
  },
]);

if (!c) {
  console.log("文章名称不能为空，自动退出");
  process.exit(1);
}

const map = {
  day: "每日思考",
  week: "周回顾",
  month: "月回顾",
}

let sidebarObject = JSON.parse(JSON.stringify(sidebar));

const filePath = path.join(`${cwd}/.vitepress/configs/sidebar.ts`);

sidebarObject[`/${a}/`].forEach((item) => {
  if (item.text === map[b] || item.text === b) {
    const index = item.items.findIndex((item) => item.text === c);
    if (index < 0) item.items.unshift({ text: c, link: `/${a}/${b}/${c}/index.md` });
    else {
      console.log("存在相同名称文章，自动退出");
      process.exit(1);
    }
  }
});

// 将修改后的对象转换回字符串形式
const modifiedContent = `export const sidebar = ${JSON.stringify(sidebarObject, null, 2)};`;

const formattedContent = prettier.format(modifiedContent, {
  parser: "typescript",
});

formattedContent.then((res) => {
  // 写入修改后的内容
  fs.writeFile(filePath, res, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File has been successfully updated.");
    }
  });
});

const textCotent = `# ${c}`;

fs.mkdirSync(`/${cwd}/${a}/${b}/${c}`);
fs.writeFile(
  path.join(`/${cwd}/${a}/${b}/${c}/index.md`),
  textCotent,
  "utf8",
  (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File has been successfully updated.");
    }
  }
);
