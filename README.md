[![npm version](https://badge.fury.io/js/react-mgm.svg)](https://badge.fury.io/js/react-mgm)

# react-mgm

## 简介

`react-mgm` 是一套基于 React 的移动端 UI 组件库，提供 48+ 个高质量组件，涵盖表单、布局、浮层、数据展示、业务组件等多个领域。适用于移动端 Web 应用开发。

## 安装

```bash
npm install react-mgm
```

### peerDependencies

| 依赖包 | 版本 |
|--------|------|
| react | ^16.8.0 |
| react-dom | ^16.8.0 |
| prop-types | ^15.6.2 |
| classnames | ^2.2.6 |
| lodash | ^4.17.10 |
| big.js | ^5.2.2 |
| gm-util | ^5.9.1 |
| weui | ^1.1.3 |

## 使用

### 快速开始

```jsx
import { Button, Toast, Dialog, Page, Flex } from 'react-mgm'

function App() {
  return (
    <Page>
      <Page.Header title="标题" />
      <Page.Body>
        <Flex>内容区域</Flex>
        <Button onClick={() => Toast.tip('Hello!')}>点击提示</Button>
      </Page.Body>
    </Page>
  )
}
```

### 引入样式

```jsx
import 'react-mgm/src/index.less'
```

### 国际化

```jsx
import { setLocale } from 'react-mgm'

// 设置语言
setLocale('en')
```

## 导出列表

### 基础组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Button | 按钮 | [README](src/component/button/README.md) |
| Flex | 弹性布局 | [README](src/component/flex/README.md) |
| Loading | 加载指示器 | [README](src/component/loading/README.md) |
| Divider | 分割线 | [README](src/component/divider/README.md) |
| LazyImg | 图片懒加载 | [README](src/component/lazy_img/README.md) |
| Mask | 遮罩层 | [README](src/component/mask/README.md) |
| CursorFix | 光标修复 | [README](src/component/cursor_fix/README.md) |

### 表单组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Input | 输入框 | [README](src/component/input/README.md) |
| Textarea | 多行文本框 | [README](src/component/textarea/README.md) |
| InputNumber | 数字输入框 | [README](src/component/input_number/README.md) |
| Radio | 单选框 | [README](src/component/radio/README.md) |
| Select | 选择器 | [README](src/component/select/README.md) |
| Keyboard | 自定义键盘 | [README](src/component/keyboard/README.md) |
| Counter | 计数器 | [README](src/component/counter/README.md) |
| Canvas | Canvas 画布 | [README](src/component/canvas/README.md) |
| Signature | 手写签名 | [README](src/component/signature/README.md) |
| Uploader | 文件上传 | [README](src/component/uploader/README.md) |

### 选择器组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Picker | 选择器 | [README](src/component/picker/README.md) |
| ConfirmPicker | 确认选择器 | [README](src/component/picker/README.md) |
| CouplingPicker | 联动选择器 | [README](src/component/picker/README.md) |
| ConfirmCouplingPicker | 确认联动选择器 | [README](src/component/picker/README.md) |
| Calendar | 日历 | [README](src/component/calendar/README.md) |
| TimeSelect | 时间选择 | [README](src/component/time_select/README.md) |

### 布局组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Page | 页面容器 | [README](src/component/page/README.md) |
| Header | 页面头部 | [README](src/component/header/README.md) |
| Tabs | 标签页 | [README](src/component/tabs/README.md) |
| List | 列表 | [README](src/component/list/README.md) |
| Cells | 单元格容器 | [README](src/component/cell/README.md) |
| Cell | 单元格 | [README](src/component/cell/README.md) |
| CellsTitle | 单元格标题 | [README](src/component/cell/README.md) |
| CellsTips | 单元格提示 | [README](src/component/cell/README.md) |
| CellHeader | 单元格头部 | [README](src/component/cell/README.md) |
| CellBody | 单元格主体 | [README](src/component/cell/README.md) |
| CellFooter | 单元格底部 | [README](src/component/cell/README.md) |
| CellSwipe | 滑动单元格 | [README](src/component/cell/README.md) |
| CellSwitch | 开关单元格 | [README](src/component/cell/README.md) |

### 浮层组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Dialog | 对话框 | [README](src/component/dialog/README.md) |
| Alert | 警告对话框 | [README](src/component/dialog/README.md) |
| Confirm | 确认对话框 | [README](src/component/dialog/README.md) |
| Popup | 弹出层 | [README](src/component/popup/README.md) |
| Toast | 轻提示 | [README](src/component/toast/README.md) |
| ActionSheet | 操作面板 | [README](src/component/action_sheet/README.md) |
| InnerLayer | 内层浮层 | [README](src/component/inner_layer/README.md) |
| PreviewImage | 图片预览 | [README](src/component/preview_image/README.md) |

### 数据展示

| 组件 | 说明 | 文档 |
|------|------|------|
| Price | 价格显示 | [README](src/component/price/README.md) |
| FlipNumber | 翻牌数字 | [README](src/component/flip_number/README.md) |
| ProgressBar | 进度条 | [README](src/component/progress/README.md) |
| LetterIndex | 字母索引 | [README](src/component/letter_index/README.md) |
| LetterIndexMultiple | 多组字母索引 | [README](src/component/letter_index/README.md) |
| Tooltip | 文字提示 | [README](src/component/tooltip/README.md) |
| Trigger | 触发器 | [README](src/component/trigger/README.md) |

### 搜索组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Search | 搜索框 | [README](src/component/search/README.md) |
| SearchPage | 搜索页面 | [README](src/component/search/README.md) |
| FakeSearch | 伪搜索框 | [README](src/component/search/README.md) |

### 滚动与无限加载

| 组件 | 说明 | 文档 |
|------|------|------|
| Infinite | 无限滚动列表 | [README](src/component/infinite/README.md) |
| InfiniteBox | 无限滚动容器 | [README](src/component/infinite/README.md) |
| ScrollIntoView | 滚动到可视区域 | [README](src/component/scroll_into_view/README.md) |
| LetterIndex | 字母索引（同时支持滚动定位） | [README](src/component/letter_index/README.md) |

### 滑块组件

| 组件 | 说明 | 文档 |
|------|------|------|
| Slider | 滑块（带标签） | [README](src/component/slider/README.md) |
| SliderLess | 滑块（无标签） | [README](src/component/slider_less/README.md) |
| SliderFlag | 标记滑块 | [README](src/component/slider_flag/README.md) |

### 工具组件

| 组件 | 说明 | 文档 |
|------|------|------|
| NProgress | 页面顶部进度条 | [README](src/component/nprogress/README.md) |
| LayoutRoot | 布局根容器 | [README](src/component/layout_root/README.md) |
| Storage | 本地存储 | [README](src/component/storage/README.md) |
| Square | 方块占位 | [README](src/component/square/README.md) |

### 工具函数

| 导出项 | 说明 |
|--------|------|
| setLocale | 设置国际化语言 |

## 发版流程

本项目已配置 GitHub Actions 自动发版，无需手动操作。

### 触发条件

当代码 **push 或 merge 到 `master` 分支**，且 `src/` 或 `package.json` 有变更时，自动触发。

### 自动执行流程

1. 检查是否为发版 commit（避免循环触发）
2. 安装依赖
3. 版本号自动 patch +1（如 `8.3.3` → `8.3.4`），并提交到 master
4. 自动发布到 npm

### 版本号规则

- 使用 `npm version patch`，每次自动在**补丁号**位 +1
- 如需手动修改主版本号或次版本号，请在 `package.json` 中修改后推送

### 前置要求

仓库需配置以下 Secrets（Settings > Secrets and variables > Actions）：

| Secret | 说明 |
|--------|------|
| `NPM_TOKEN` | npm 发布 token |

### 如何发布

正常开发流程即可，无需额外操作：

```bash
# 开发完成后，合并到 master
git checkout master
git merge your-feature-branch
git push origin master

# GitHub Actions 会自动完成版本更新和 npm 发布
```

## 注意事项

- 本组件库基于 React 16.8+ 开发，使用了 React Hooks 和 Function Component
- 样式基于 Less，使用时需要确保 Less loader 配置正确
- 组件依赖 weui 样式基础，部分组件的样式风格与 weui 一致
- 国际化支持通过 `setLocale` 切换语言
- 各组件的详细 API 和使用示例请查看对应组件目录下的 README.md
