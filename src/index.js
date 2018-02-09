/**
 * Created by wm.liu on 2018/2/8.
 */
'use strict';
console.log('hello world');
var people = [{
    name: '杨威',
    id: 1
}, {
    name: '于海婧',
    id: 2
}, {
    name: '刘伟明',
    id: 3
}, {
    name: '孙静',
    id: 4
}, {
    name: '朱翔',
    id: 5
}, {
    name: '周航',
    id: 6
}, {
    name: '保洁阿姨',
    id: 7
}, {
    name: '主席',
    id: 8
}, {
    name: '主持人',
    id: 9
}, {
    name: '杨威',
    id: 1
}, {
    name: '于海婧',
    id: 2
}, {
    name: '刘伟明',
    id: 3
}, {
    name: '孙静',
    id: 4
}, {
    name: '朱翔',
    id: 5
}, {
    name: '周航',
    id: 6
}, {
    name: '保洁阿姨',
    id: 7
}, {
    name: '主席',
    id: 8
}, {
    name: '主持人',
    id: 9
}, {
    name: '杨威',
    id: 1
}, {
    name: '于海婧',
    id: 2
}, {
    name: '刘伟明',
    id: 3
}, {
    name: '孙静',
    id: 4
}, {
    name: '朱翔',
    id: 5
}, {
    name: '周航',
    id: 6
}, {
    name: '保洁阿姨',
    id: 7
}, {
    name: '主席',
    id: 8
}, {
    name: '主持人',
    id: 9
}];


window.onload = function () {
    var SPACE = 1000; //间隔时间
    var firstClick = true; // 是否首次点击
    var clickNum = 0;
    var isStart = false;
    var currAwrad = '';

    function start(awardText, clickNum) {
        console.log('start:' + awardText + '点击次数：' + clickNum);
    }

    function stop(awardText, clickNum) {
        console.log('stop:' + awardText + '点击次数：' + clickNum);
    }

    function startListen(cbk) {
        if (firstClick) {
            firstClick = false;
            clickNum++;
            setTimeout(function () {
                firstClick = true;
                cbk && cbk(clickNum);
                clickNum = 0
            }, SPACE);
        } else {
            clickNum++;
        }

    }

    function startHandler(e, clickNum) {
        var awardText = e.target.innerHTML;
        isStart = true;
        e.target.className += ' button-disabled';
        currAwrad = e.target.innerHTML;
        start(awardText, clickNum);
    }

    function stopHandler(e,clickNum) {
        var awardText = e.target.innerHTML;
        // 开始后，其他的按钮不能点击
        if (awardText === currAwrad) {
            isStart = false;
            e.target.className = 'button';
            currAwrad = '';
            stop(awardText, clickNum);
        }
    }

    document.getElementsByClassName('button-group')[0].addEventListener('click', function (e) {

        if (isStart) {         // 再次点击，结束
            stopHandler(e,clickNum);
        } else {         // 开始
            // 需要监听一段时间内的点击事件
            startListen(startHandler.bind(this, e));
        }


    });
};