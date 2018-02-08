/**
 * Created by wm.liu on 2018/2/8.
 */
'use strict';
console.log('hello world');
var people = [{
    text: '杨威',
    id: 1
},{
    text: '于海婧',
    id: 2
},{
    text: '刘伟明',
    id: 3
},{
    text: '孙静',
    id: 4
},{
    text: '朱翔',
    id: 5
},{
    text: '周航',
    id: 6
},{
    text: '保洁阿姨',
    id: 7
},{
    text: '主席',
    id: 8
},{
    text: '主持人',
    id: 9
},{
    text: '杨威',
    id: 1
},{
    text: '于海婧',
    id: 2
},{
    text: '刘伟明',
    id: 3
},{
    text: '孙静',
    id: 4
},{
    text: '朱翔',
    id: 5
},{
    text: '周航',
    id: 6
},{
    text: '保洁阿姨',
    id: 7
},{
    text: '主席',
    id: 8
},{
    text: '主持人',
    id: 9
},{
    text: '杨威',
    id: 1
},{
    text: '于海婧',
    id: 2
},{
    text: '刘伟明',
    id: 3
},{
    text: '孙静',
    id: 4
},{
    text: '朱翔',
    id: 5
},{
    text: '周航',
    id: 6
},{
    text: '保洁阿姨',
    id: 7
},{
    text: '主席',
    id: 8
},{
    text: '主持人',
    id: 9
}];
console.log(people);
window.onload = function () {
    insertData(people);

    var myScroll, inter;
    var step = -200;
    var speed = 20;
    var freq = 20;

    loaded();

    function loaded() {
        myScroll = new IScroll('#wrapper', {
            mouseWheel: true,
            infiniteElements: '#scroller .row',
            //infiniteLimit: 2000,
            dataset: requestData,
            dataFiller: updateContent,
            cacheSize: 1000
        });
        window.iscroll = myScroll;
        inter = setInterval(function () {
            myScroll.scrollBy(0, step, speed);
        }, freq)

        document.getElementById('footer').addEventListener('click', function (e) {
            console.log(1111)
            clearInterval(inter);
        })

        document.getElementById('header').addEventListener('click', function (e) {
            console.log(1111)
            clearInterval(inter);
            inter = setInterval(function () {
                myScroll.scrollBy(0, step, speed);
            }, freq)
        })


    }

    function requestData(start, count) {
    }

    function updateContent(el, data) {
        el.innerHTML = data;
    }

    document.addEventListener('touchmove', function (e) {
        e.preventDefault();
    }, isPassive() ? {
        capture: false,
        passive: false
    }: false);


}

function insertData(data) {
    console.log(111)
    var innerHtml = '<ul>';
    for (var i = 0, len = data.length; i < len; i++) {
        innerHtml += `<li class="row">${data[i].text}</li>`;
    }
    innerHtml += '</ul>';
    document.getElementById('scroller').innerHTML = innerHtml;
}