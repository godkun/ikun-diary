# 2024-5-8

## 回顾

1. 编写详细的vscode内联功能使用文档、演示录屏

-----
2. 定位线上插件安装和本地安装的相同插件存在无法被覆盖问题

经过细致的分析和测试，最后得出结论：vscode不会覆盖用户自己的目录数据，比如用户自己搞了一个插件，然后目录和线上某个插件目录一样，这个时候vscode是不会去覆盖的。因为覆盖就涉及到删除用户数据的风险

解决方案：在做下一个版本时，比如 2.1.0 版本，则在上线前，先把版本好改成 2.1.0-alpha ，等上线前再改成2.1.0，这样在安装2.1.0-alpha插件的时候，插件目录是插件名-2.1.0-alpha，和未来上线的目录不一致，就不会出现覆盖问题

-----

3. 解决爱码用户反馈的线上使用问题

## 今日成长

[满分5颗星]

成长指数：:star:

心情指数：:star::star: