# 🧪 使用方法

---

# 🚀 一键部署到 Cloudflare Pages

你可以轻松将此项目部署到 [Cloudflare Pages](https://pages.cloudflare.com/)，免费获得全球 CDN 加速！

点击下方链接，GitHub 会自动为你创建一个基于本项目的仓库：

[![Use this template](https://img.shields.io/badge/Create_from_Template-3b5998?style=for-the-badge&logo=github)](https://github.com/new?template_name=rspress-template&template_owner=PBnicad)

然后按下面步骤部署。

1. 进入 [Cloudflare Pages 控制台](https://dash.cloudflare.com/?to=/:account/pages)
2. 点击 **“Create a project”** → **“Connect to Git”**
3. 选择你的刚刚fork的仓库
4. 在构建设置中填写：

> 💡 **部署时请设置：**
>
> - **Build command**: `pnpm install && pnpm run build`  
> - **Build output directory**: `/doc_build`  

5. 点击 **Save and Deploy**

几分钟后，你将获得一个类似 `https://your-project.pages.dev` 的在线站点！

