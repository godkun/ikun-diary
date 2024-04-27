# 写一个自动生成vitepress文章的脚本工具

::: details 代码实现

<!-- 文件名默认用作标题 -->

<<< @/script/new.mts#snippet{ts:line-numbers}

:::


## 回顾

本来下用 zx.js 结果发现没用到，也没有用 fx-extra ，直接用 fs 就可以了。整体思路如下：

1. 确定文章所在的一级目录
2. 通过 inquirer 让我选择哪一个一级目录
3. 用 fs 获取选择的一级目录，起所有二级目录
4. 通过 inquirer 让我选择哪一个二级目录
5. 通过 inquirer 让我输入文章标题
6. 获取 `../.vitepress/configs/sidebar` 导出数据
7. 对数据进行遍历处理，增加新增的文章配置
8. 对数据进行序列化并格式化
9. 重新将数据写入到 `../.vitepress/configs/sidebar` 文件中
10. 用 fs 新建文章的 md 文件



