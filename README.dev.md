# 开发文档

## z-index 层级管理

### 布局流

- header 20

### 浮层
- mask 1000
- popup 2000
- trigger popup 3000
- PreviewImage 4000
- dialog 5000 dialog mask 5000
- pickpopup 6000
- toast 7000 toast mask 7000
- nprogress 9999

weui
- weui mask 1000
- weui toast 5000
- weui dialog 5000

### line-height 居中
在 Android 环境下，使用 line-height 对字体大小小于 12px 的文字做居中的话，会往上偏移，目前的解决方案是把文字放大一倍，
再使用 scale(0.5) 进行缩小。

## js规范
在 comonent 目录
