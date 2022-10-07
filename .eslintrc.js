/*
 * @Author: wangtao
 * @Date: 2022-06-22 09:47:55
 * @LastEditors: 汪滔
 * @LastEditTime: 2022-10-07 09:32:12
 * @Description: file content
 */
module.exports = {
  env: {
    //指定代码的运行环境
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  parser: "@typescript-eslint/parser", //定义ESLint的解析器
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ], //定义文件继承的子规范
  plugins: ["@typescript-eslint"], //自定义rules所依赖的插件
  rules: {
    // 这里可以设置规则：
    //"off" or 0 - 关闭规则
    //"warn" or 1 - 将规则作为警告打开（不影响退出代码）
    //"error" or 2 - 将规则作为错误打开（退出代码为1）
    eqeqeq: "error" //开启全等校验
  }
};
