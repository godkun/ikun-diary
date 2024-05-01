# 2024-4-30

## 回顾

1. 继续支持爱码2.0版本专项测试
2. 解决windows电脑上 inlay chat 的采纳和撤销codelens不展示问题
3. 帮同事check2.0版本功能和代码
4. 给vscode inlay chat 窗口增加打开左侧chat web页面功能
5. 分析如何解决自定义快捷键被其他插件强制覆盖问题【暂时没有解决】

## 今日成长

[满分5颗星]

成长指数：:star::star::star:

### 解决windows电脑上 inlay chat 的采纳和撤销codelens不展示问题

- 原因：这个经过定位，发现在拿服务端返回的代码和windows的vscode的选中区域代码，进行比较时，始终返回 false
- 解决：windows有crlf和lf，如何是crlf 就会和lf的代码无法等于，通过正则将crlf替换成 lf 再进行比较

心情指数：:star::star: