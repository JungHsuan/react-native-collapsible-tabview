# React native collapsible tabview example
This is just a simple example implementing a tabview with collapsible header. Here we use [react-native-tab-view](https://github.com/react-native-community/react-native-tab-view) in our implemetation.

# Dependencies
### 2022-07
- Here I've upgraded `react-native` to `0.68.2` ,and `react-native-tab-view` to `3.1.1`.
- `react-native-reanimated` and `react-native-gesture-handler` have been removed by `react-native-tab-view`.
- `hermes` is default enabled on both `iOS` and `Android`.
- No changes to example code. 
- No furthur updates for old version.

### 2021-06
- Be noticed that we are using react-native `0.62.2` in this example, some breaking changes may lead to crashes.
- Accroding to this [post](https://reactnative.dev/blog/2020/03/26/version-0.62#deprecations), `getNode()` is deprecated. As a result, before `0.62.0` you should use `ref.getNode()` in order to get correct `ref` for the `Animated` component.

# Usage
There are three examples under `src` folder:  
1. ``CollapsibleTabView``: provides the most basic workable example without scrollable header and pull-to-refresh. 
2. ``HeaderScrollableTabView``: provides scrollable header without pull-to-refresh. 
3. ``PullRefreshTabView``: provides both scrollable header and pull-to-refresh. 

It is critical to give the correct ``paddingTop`` and ``minHeight`` of ``contentContainerStyle``  of the ``FlatList``
```
  contentContainerStyle={{
      ...
      paddingTop: HeaderHeight + TabBarHeight,
      minHeight: windowHeight - SafeStatusBar + HeaderHeight,
  }}
```


# Demo                   
iOS ![ios](demo/ios.gif) Android ![Android](demo/demo_android.gif)


