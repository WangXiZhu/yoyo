vuejs作为mvvm模式的框架

如何把数据（modal） 与 视图(view) 联系起来肯定是关键。

1.通过observer对data进行监听，然后订阅某个数据项的变化

2.把template解析为document fragment,然后判断其中的directive[命令],得到所依赖的数据项和更新方法。
其中包括vue中自己的标签 v-text等

3.directive(数据依赖)  ----watcher---- observer --->触发视图更新




http://jiongks.name/blog/vue-code-review/