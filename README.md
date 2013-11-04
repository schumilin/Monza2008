Monza 2008
=========

> We have made a big step today for that and I really look forward

## Preload Image jQuery Plugin

###version: 0.5
 
###updated: 2013 - 11- 04

####change log: 

> 改成 jQuery 插件的形式，写法更加人性化。但是在有多个节点处理时写起来比较麻烦。

####Usage:
```javascript
    $('.container').preload({
        fadeIn: false,
        duration: '500ms'
    });
```

property
value
default
example
fadeIn
if you need a fade for show
true
true || false
duration
the duration of the fade
1s
'2s' || '2500ms'
url
if the node doesn’t has background-image in css
none
'http://img.wdjimg.com/ios-landing-page/images/screen.jpg'
nextImage
callback function
none
[{
        selector: '.container',
        fadeIn: true
}]
direction
up down left right
none
'left'
distance
length (px)
none
'300'

