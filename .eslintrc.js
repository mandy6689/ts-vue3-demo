module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',  //'@vue/standard', 注释掉不用检测语法规范
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'space-before-function-paren': 0, // 函数括号之前强制执行一致的间距
    "no-multiple-empty-lines": [0, { "max": 10 }]
  }
}
