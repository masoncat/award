/**
 * Created by wm.liu on 2018/2/8.
 */
'use strict';
console.log('hello world');
var PeopleList = [{
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
    name: '权金铎',
    id: 1
}, {
    name: '陈红',
    id: 2
}, {
    name: '王奡',
    id: 3
}, {
    name: '王大妈',
    id: 4
}, {
    name: '庞玉彤',
    id: 5
}, {
    name: '朱亚宁',
    id: 6
}, {
    name: '易丹桂',
    id: 7
}, {
    name: '牛增军',
    id: 8
}, {
    name: '刘珺峰',
    id: 9
}, {
    name: '朱盼盼',
    id: 1
}, {
    name: '朱岑哲',
    id: 2
}, {
    name: '孙启昌',
    id: 3
}, {
    name: '孙静1',
    id: 4
}, {
    name: '朱翔2',
    id: 5
}, {
    name: '周航3',
    id: 6
}, {
    name: '保洁阿姨4',
    id: 7
}, {
    name: '主席5',
    id: 8
}, {
    name: '主持人6',
    id: 9
}];
var WhiteList = {
    '一等奖':['杨威','朱翔'],
    '二等奖':['周航']
}
window.PeopleList = PeopleList


window.onload = function () {
    var SPACE = 300; //间隔时间
    var firstClick = true; // 是否首次点击
    var clickNum = 0;
    var isStart = false;
    var currAwrad = '';
    var loadInterval;
    var freq = 10;
    var currPeople = '';

    function start(awardText, clickNum) {
        console.log('start:' + awardText + '点击次数：' + clickNum);
        normalStart();
        if (clickNum > 1) {
            logicStart(awardText);
        }
    }

    function stop(awardText, clickNum) {
        console.log('stop:' + awardText + '点击次数：' + clickNum);
        if (currPeople) {
            logicStop(currPeople,awardText);
            currPeople = '';
        }else{
            normalStop();
        }
    }

    function logicStart(awardText) {
        var currPeopleArr = WhiteList[awardText];
        var random = Math.floor(Math.random()*currPeopleArr.length);
        currPeople = currPeopleArr[random];
    }

    function logicStop(currPeople,awardText) {
        clearInterval(loadInterval);
        removePeople(currPeople);
        document.getElementsByClassName('content')[0].innerHTML = currPeople;
        // 从白名单移除
        WhiteList[awardText] = WhiteList[awardText].filter(function (item) {
            return item !== currPeople;
        });
    }

    function normalStart() {
        loadInterval = setInterval(function () {
            document.getElementsByClassName('content')[0].innerHTML = randomName();
        }, freq)
    }

    function normalStop() {
        clearInterval(loadInterval);
        var peopleName = document.getElementsByClassName('content')[0].innerHTML; // TODO 需要把白名单里的名字去掉
        removePeople(peopleName);
        PeopleList = PeopleList.filter(function (item) {
            return item['name'] !== peopleName;
        })
    }

    function removePeople(peopleName) {
        PeopleList = PeopleList.filter(function (item) {
            return item['name'] !== peopleName;
        })
    }

    function randomName() {
        var totalPeople = PeopleList.length; // 总人数
        var randomNum = Math.floor(Math.random() * totalPeople);
        return PeopleList[randomNum].name;
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