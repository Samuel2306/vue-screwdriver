(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            var clientHeight = docEl.clientHeight;
            if (!clientHeight) return;
            win.rootFontSize = 100 * (clientHeight / 800);
            docEl.style.fontSize = win.rootFontSize + 'px';
            if(clientWidth<=1024){
              var whdef = 100 / 750;// 表示750的设计图,使用100PX的默认值
              var wH = win.innerHeight;// 当前窗口的高度
              var wW = win.innerWidth;// 当前窗口的宽度
              var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
              docEl.style.fontSize = rem + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
