<script type="text/javascript">
function getElementsByClassName(classname, tagname) {
    tagname = tagname || '*';
    var pattern = new RegExp('(^|\\s)' + classname + '(\\s|$)');
    var elems = document.getElementsByTagName(tagname);
    var tar = [];
    if(elems.length) {
        for(var i = 0; i < elems.length; i++) {
            if(pattern.test(elems[i].className)) tar.push(elems[i]);
        }
    }
    return tar;
}
function showPonysPic(classname, tagname) {
    tagname = tagname || '*';
    var tar = getElementsByClassName(classname, tagname);
    if(tar.length) {
        for(var i = 0; i < tar.length; i++) {
            var imgs = tar[i].getElementsByTagName('img');
            for(var j = 0; j < imgs.length; j++) {
                imgs[j].title = '点击查看大图';
                imgs[j].onclick = function () {
                    //如果已经存在 focuspic 那么就把其移除掉，这个主要是防止一个页面有多张图片时叠加
                    document.getElementById('focuspic') && document.body.removeChild(document.getElementById('focuspic'));
                    var elem = document.createElement('img');
                    var parent = this.parentNode;
                    elem.id = 'focuspic';
                    elem.className = 'focuspic';
                    elem.title = '点击图片关闭';
                    //如果图片父元素是 a，那么就用 a 的 href 地址。WordPress 默认会给图片加上链接，这样就可以默认用缩略图来展示，点击时显示链接的大图；否则就用图片本身的 src
                    elem.src = parent.tagName == 'A' ? parent.href : this.src;
                    elem.onclick = function () {
                        this.parentNode.removeChild(elem);
                    }
                    document.body.appendChild(elem);
                    elem.style.top = (document.documentElement.clientHeight - elem.height - 30) / 2 + 'px';
                    elem.style.left = (document.documentElement.clientWidth - elem.width - 30) / 2 + 'px';
                    return false;
                }
            }
        }
    }
}

showPonysPic('info', 'div');
</script>

    </body>

<style>
.focuspic { position: fixed; padding: 13px; max-width: 90%; max-height: 90%; width: auto; height: auto; border: 1px solid #333; background: #EEE; background: rgba(0, 0, 0, 0.6); cursor: url(img/zoomout.cur), pointer; border-radius: 10px; box-shadow: 0 0 20px #000; }
</style>
