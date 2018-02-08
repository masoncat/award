/**
 * Created by wm.liu on 2018/2/8.
 */
console.log('hello world');
$(function(){
    $(".rollpicshow").jCarouselLite({
        auto: 100, /*自动播放间隔时间*/
        speed: 200, /*速度*/
        btnNext:".next",/*向前滚动*/
        btnPrev:".prev",/*向后滚动*/
        visible:3 /*显示数量*/
    })});