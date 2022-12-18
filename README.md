### 介绍

本项目是使用wangEditor 5富文本编辑器的例子，非常值得初次使用wangEditor 5的人来参考，可以少走弯路

实现了wangEditor 5的引入、在父组件给wangEditor 5设置HTML和获取wangEditor 5的HTML、实现图片上传到后端服务器

后端上传图片代码使用Java实现，具体代码看下面贴出的博客

### 使用的技术

```json
{
  "name": "wang-editor-demo",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@wangeditor/editor": "^5.1.23",
    "@wangeditor/editor-for-vue": "^5.1.12",
    "vue": "^3.2.45",
    "vue-router": "^4.1.6"
  },
  "devDependencies": {
    "@types/node": "^18.11.17",
    "@vitejs/plugin-vue": "^4.0.0",
    "vite": "^4.0.0"
  }
}
```

### 博客教程

[Vue.js3.2引入wangEditor 5富文本编辑器 | LeDao's Blog (zoutl.cn)](https://blog.zoutl.cn/549.html)

[Spring Boot 实现 wangEditor 5 富文本编辑器上传图片到服务器 | LeDao's Blog (zoutl.cn)](https://blog.zoutl.cn/550.html)
