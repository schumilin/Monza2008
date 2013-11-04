Monza 2008
=========

> We have made a big step today for that and I really look forward

## Preload Image jQuery Plugin

####Current version: 0.5
 
####Last updated: 2013 - 11 - 04

####Written by: Schumilin

####Feature:

> 图片加载完毕后才会显示，可自定义显示方式，或自定义出现动画。

####Usage:
```javascript
$('.a').preloadImage({
    duration: '300ms'
});
$('.b .c').preloadImage({
    duration: '800ms',
    direction: 'right',
    distance: '30',
    nextImage: {
        selector: '.d',
        url: 'http://img.wdj.com/screen.jpg',
        fadeIn: false
    }
});
$('.e .f').preloadImage();
```

属性|说明|默认值|示例
---|---|---|---
fadeIn|是否需要 fadeIn|true|false
duration|fade 的持续时间|1s|'2500ms' or '5s'
url|如果该节点的 css 里没有写入背景图片 url，需在此设置|none|'http://img.wdj.com/test.jpg'
nextImage|加载完毕后才会加载下一张|none|{selector:'.container',fadeIn: true}
direciton|自定义动画方向，上下左右|none|'left' or 'bottom'
distance|自定义动画移动距离(px)|none|35


