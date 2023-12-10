(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{306:function(t,e,r){"use strict";r.r(e);var n=r(14),a=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"搭建指南"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建指南"}},[t._v("#")]),t._v(" 搭建指南")]),t._v(" "),e("h2",{attrs:{id:"_1-环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-环境准备"}},[t._v("#")]),t._v(" 1.环境准备")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.dcloud.io/hbuilderx.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("HbuilderX"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("微信开发者工具"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nodejs"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://unicloud.dcloud.net.cn/pages/login/login?uniIdRedirectUrl=%252Fpages%252Findex%252Findex",target:"_blank",rel:"noopener noreferrer"}},[t._v("uniCloud主页"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=5043",target:"_blank",rel:"noopener noreferrer"}},[t._v("XX壁纸下载地址"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"_2-搭建步骤概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-搭建步骤概述"}},[t._v("#")]),t._v(" 2.搭建步骤概述")]),t._v(" "),e("p",[t._v("1.检查电脑环境，确保已经成功安装HbuilderX、微信开发者工具、Nodejs。"),e("br"),t._v("\n2.本项目包含客户端、管理端、service端，"),e("strong",[e("code",[t._v("客户端运行依赖于管理端和service端，所以需要先部署管理端和service端，再部署客户端")])]),t._v("，否则客户端无法运行。"),e("br"),t._v("\n3.客户端、管理端、service端部署在同一个云服务空间中，客户端只需要绑定管理端项目即可，详细部署步骤请阅读下述文档。")]),t._v(" "),e("blockquote",[e("p",[t._v("注册并登录uniCloud →  安装HbuilderX → 安装微信开发者工具 → 打开uniapp插件市场下载并打开项目 → 根据下述步骤部署到云服务空间")])]),t._v(" "),e("h2",{attrs:{id:"_3-管理端搭建及后台部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-管理端搭建及后台部署"}},[t._v("#")]),t._v(" 3.管理端搭建及后台部署")]),t._v(" "),e("p",[t._v("1.下载uniapp插件市场中的"),e("code",[t._v("XX壁纸管理后台")]),t._v("项目"),e("br"),t._v(" "),e("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=5043",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址点这里"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("2.点击下载插件并导入HbuilderX，允许浏览器运行HbuilderX，HbuilderX弹出新建uni-app项目，检查项目信息OK后，点击创建，等待项目创建完成"),e("img",{attrs:{src:"https://mp-802fb3b0-f10c-42e7-8756-48b103d5c39e.cdn.bspapp.com/%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/%E6%96%B0%E5%BB%BA%E9%A1%B9%E7%9B%AE.jpg",alt:"图片"}})]),t._v(" "),e("p",[t._v("3.项目创建完成后，在HbuilderX的项目列表中打开项目，右击 "),e("strong",[e("code",[t._v("uniCloud文件夹")])]),t._v("，点击 "),e("strong",[e("code",[t._v("关联云服务空间或项目")])]),t._v(" "),e("img",{attrs:{src:"https://mp-802fb3b0-f10c-42e7-8756-48b103d5c39e.cdn.bspapp.com/%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/%E5%85%B3%E8%81%94%E6%9C%8D%E5%8A%A1%E7%A9%BA%E9%97%B4.jpg",alt:""}})]),t._v(" "),e("p",[t._v("4.关联服务空间\n"),e("img",{attrs:{src:"https://mp-802fb3b0-f10c-42e7-8756-48b103d5c39e.cdn.bspapp.com/%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/%E9%80%89%E6%8B%A9%E7%A9%BA%E9%97%B4.png",alt:"图片"}})]),t._v(" "),e("p",[t._v("5.新建服务空间"),e("br"),t._v("\n在uniCloud控制台创建新的服务空间\n"),e("img",{attrs:{src:"https://mp-802fb3b0-f10c-42e7-8756-48b103d5c39e.cdn.bspapp.com/%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/%E6%96%B0%E5%BB%BA%E7%A9%BA%E9%97%B4.jpg",alt:""}})]),t._v(" "),e("p",[t._v("6.新购并开通服务空间"),e("br"),t._v("\n点击 "),e("strong",[e("code",[t._v("立即购买")])]),t._v("，在新页面中点击 "),e("strong",[e("code",[t._v("确认开通")])]),t._v(" "),e("img",{attrs:{src:"https://mp-802fb3b0-f10c-42e7-8756-48b103d5c39e.cdn.bspapp.com/%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/%E6%9C%8D%E5%8A%A1%E7%A9%BA%E9%97%B4%E6%96%B0%E8%B4%AD.jpg",alt:""}})]),t._v(" "),e("blockquote",[e("ul",[e("li",[t._v("1：推荐使用阿里云服务器")]),t._v(" "),e("li",[t._v("2：推荐使用按量付费，用多少付多少，不会造成资源浪费")]),t._v(" "),e("li",[t._v("3：如果是第一开通云服务空间，需要缴纳200元保证金，并且对阿里云充值")])])]),t._v(" "),e("p",[t._v("7.等待空间初始化后在HbuilderX空间列表点击刷新，选择刚在创建的空间点击 "),e("strong",[e("code",[t._v("关联")])]),t._v(" "),e("img",{attrs:{src:"https://mp-802fb3b0-f10c-42e7-8756-48b103d5c39e.cdn.bspapp.com/%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3/%E5%88%B7%E6%96%B0%E7%A9%BA%E9%97%B4.jpg",alt:""}})]),t._v(" "),e("p",[t._v("8.初始化空间数据")]),t._v(" "),e("blockquote",[e("p",[t._v("更新中...请等待...")])]),t._v(" "),e("h2",{attrs:{id:"_4-客户端搭建及上传发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-客户端搭建及上传发布"}},[t._v("#")]),t._v(" 4.客户端搭建及上传发布")])])}),[],!1,null,null,null);e.default=a.exports}}]);