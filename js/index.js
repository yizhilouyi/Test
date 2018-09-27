$(function () {
    /*手势切换轮播图*/
    /*1.自动轮播 无缝*/
    /*2.点随着变化*/
    /*3.完成手势切换*/
    var $banner = $('.sn_banner');
    var width = $banner.width();
    var $oneul = $banner.find('ul').eq(0);
    var $twoul = $banner.find('ul').eq(1);
    var $twoli = $twoul.find('li');

    var animationFuc =function () {
        $oneul.animate({transform:'translateX('+(-index*width)+'px)'},200,function () {
                 if (index>=9){
                     index=1;
                     $oneul.css({transform:'translateX('+(-index*width)+'px)'});
                 }else if(index <= 0 ){
            index = 8;
            /*瞬间*/
                     $oneul.css({transform:'translateX('+(-index*width)+'px)'});
               }
            $twoli.removeClass('now').eq(index-1).addClass('now');
        })
    }

    var index = 1;

    var t = setInterval(function () {
        index ++;
        animationFuc();

    },2000)

    /*3.完成手势切换  android 4.0 兼容 */
    /*左滑的手势  下一张*/
    $banner.on('swipeLeft',function () {
        console.log('++')
        index ++;
        animationFuc();
    });
    /*右滑的手势  上一张*/
    $banner.on('swipeRight',function () {
        index --;
        animationFuc();
    });
})

