/**
 * Created by wm.liu on 2018/2/8.
 */
'use strict';
var PeopleList = [{"id":1,"name":"杨威"},{"id":2,"name":"朱翔"},{"id":3,"name":"刘静"},{"id":4,"name":"李赟"},{"id":5,"name":"付丙岛"},{"id":6,"name":"曹飞"},{"id":7,"name":"李叶成"},{"id":8,"name":"李嵩楠"},{"id":9,"name":"张智"},{"id":10,"name":"邵洪雨"},{"id":11,"name":"冯敬舜"},{"id":12,"name":"孙文超"},{"id":13,"name":"徐成刚"},{"id":14,"name":"牟站通"},{"id":15,"name":"兰国亮"},{"id":16,"name":"龚世伟"},{"id":17,"name":"魏其文"},{"id":18,"name":"孙启昌"},{"id":19,"name":"杨丰瑞"},{"id":20,"name":"杨领"},{"id":21,"name":"张亚龙"},{"id":22,"name":"易丹桂"},{"id":23,"name":"杨思源"},{"id":24,"name":"牛增军"},{"id":25,"name":"刘珺峰"},{"id":26,"name":"朱盼盼"},{"id":27,"name":"刘伟明"},{"id":28,"name":"庞玉彤"},{"id":29,"name":"朱亚宁"},{"id":30,"name":"权金铎"},{"id":31,"name":"王奡"},{"id":32,"name":"周航"},{"id":33,"name":"陈红"},{"id":34,"name":"唐兴兴"},{"id":35,"name":"李思雯"},{"id":36,"name":"李昂"},{"id":37,"name":"凌晓蔚"},{"id":38,"name":"丁小飞"},{"id":39,"name":"张睿雄"},{"id":40,"name":"方洲"},{"id":41,"name":"朱岑喆"},{"id":42,"name":"杜政均"},{"id":43,"name":"安康"},{"id":44,"name":"陈雪"},{"id":45,"name":"唐伟"},{"id":46,"name":"赵小龙"},{"id":47,"name":"李俊江"},{"id":48,"name":"李锐"},{"id":49,"name":"黎丽娜"},{"id":50,"name":"吴琪"},{"id":51,"name":"缪霞"},{"id":52,"name":"王雪艳"},{"id":53,"name":"王雪"},{"id":54,"name":"孙静"},{"id":55,"name":"孙洁"},{"id":56,"name":"方娜"},{"id":57,"name":"孙逸飞"},{"id":58,"name":"郑海蓉"},{"id":59,"name":"陈曦曦"},{"id":60,"name":"胡博"},{"id":61,"name":"李岩松"},{"id":62,"name":"潘熙之"},{"id":63,"name":"邓元勋"},{"id":64,"name":"罗方舟"},{"id":65,"name":"杨晓"},{"id":66,"name":"陈梦飞"},{"id":67,"name":"方明辉"},{"id":68,"name":"廖志谋"},{"id":69,"name":"张筱"},{"id":70,"name":"李晨"},{"id":71,"name":"马士豪"},{"id":72,"name":"姚盈"},{"id":73,"name":"袁表仙"},{"id":74,"name":"胡雪扬"},{"id":75,"name":"张璐"},{"id":76,"name":"李星征"},{"id":77,"name":"张舟"},{"id":78,"name":"郭亚钊"},{"id":79,"name":"尹曼"},{"id":80,"name":"马寅"},{"id":81,"name":"于岚"},{"id":82,"name":"戈弋"},{"id":83,"name":"严寒"},{"id":84,"name":"邸超琪"},{"id":85,"name":"阳瑞琦"},{"id":86,"name":"朱鹏"},{"id":87,"name":"吕亚微"},{"id":88,"name":"赵航"},{"id":89,"name":"高亚丽"},{"id":90,"name":"朱小梦"},{"id":91,"name":"金丽华"},{"id":92,"name":"曾益红"},{"id":93,"name":"李泽端"},{"id":94,"name":"张茂婷"},{"id":95,"name":"邵琨容"},{"id":96,"name":"徐子冰"},{"id":97,"name":"刘鑫"},{"id":98,"name":"夏雪婷"},{"id":99,"name":"汤雅倩"},{"id":100,"name":"幸云晨"},{"id":101,"name":"张航"},{"id":102,"name":"郝敬滨"},{"id":103,"name":"李俊逸"},{"id":104,"name":"程芳燕"},{"id":105,"name":"张君"},{"id":106,"name":"张翰文"},{"id":107,"name":"苑雅轩"},{"id":108,"name":"申倩倩"},{"id":109,"name":"方峰新"},{"id":110,"name":"田双坤"},{"id":111,"name":"于千雅"},{"id":112,"name":"高晓峰"},{"id":113,"name":"杨震"},{"id":114,"name":"胡绵钟"},{"id":115,"name":"常俊山"},{"id":116,"name":"熊静玲"},{"id":117,"name":"肖昌林"},{"id":118,"name":"曾红珍"}];
var WhiteList = {
    '一等奖':[],
    '二等奖':['朱翔'],
    '三等奖':['孙静','李赟']
}
window._PeopleList = PeopleList;
window._WhiteList = WhiteList;


window.onload = function () {
    var SPACE = 300; //间隔时间
    var firstClick = true; // 是否首次点击
    var clickNum = 0;
    var isStart = false;
    var currAwrad = '';
    var loadInterval;
    var freq = 10;
    var currPeople = '';
    var BgmDom = document.getElementsByClassName('award-bgm')[0];

    function start(awardText, clickNum) {
        normalStart();
        if (clickNum > 1) {
            logicStart(awardText);
        }
        startMusic();
    }

    function stop(awardText) {
        if (currPeople) {
            logicStop(currPeople,awardText);
            currPeople = '';
        }else{
            normalStop();
        }
        stopMusic();
    }

    function logicStart(awardText) {
        var currPeopleArr = WhiteList[awardText] || [];
        var random = Math.floor(Math.random() * currPeopleArr.length);
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
        }, freq);
    }

    function normalStop() {
        clearInterval(loadInterval);
        var peopleName = document.getElementsByClassName('content')[0].innerHTML;
        removePeople(peopleName);
        PeopleList = PeopleList.filter(function (item) {
            return item['name'] !== peopleName;
        });
        // 需要将白名单里的名字去掉
        removeWhiteList(peopleName);
    }

    /**
     * 音乐开始
     */
    function startMusic() {
        BgmDom.play();
    }

    /**
     * 音乐结束
     */
    function stopMusic() {
        // 需要将音乐停止
        BgmDom.pause();

    }

    function removePeople(peopleName) {
        PeopleList = PeopleList.filter(function (item) {
            return item['name'] !== peopleName;
        })
    }

    function removeWhiteList(peopleName) {
        for (var i in WhiteList){
            WhiteList[i] = WhiteList[i].filter(function (item) {
                return item !== peopleName;
            });
        }
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
        if (e.target.className !== 'button'){
            return;
        }
        var awardText = e.target.innerHTML;
        isStart = true;
        e.target.className += ' button-disabled';
        currAwrad = e.target.innerHTML;
        start(awardText, clickNum);
    }

    function stopHandler(e) {
        var awardText = e.target.innerHTML;
        // 开始后，其他的按钮不能点击
        if (awardText === currAwrad) {
            isStart = false;
            e.target.className = 'button';
            currAwrad = '';
            stop(awardText);
        }
    }

    document.getElementsByClassName('button-group')[0].addEventListener('click', function (e) {

        if (isStart) {         // 再次点击，结束
            stopHandler(e);
        } else {         // 开始
            // 需要监听一段时间内的点击事件
            startListen(startHandler.bind(this, e));
        }


    });
};

var str = '杨威,\
朱翔,\
刘静,\
李赟,\
付丙岛,\
曹飞,\
李叶成,\
李嵩楠,\
张智,\
邵洪雨,\
冯敬舜,\
孙文超,\
徐成刚,\
牟站通,\
兰国亮,\
龚世伟,\
魏其文,\
孙启昌,\
杨丰瑞,\
杨领,\
张亚龙,\
易丹桂,\
杨思源,\
牛增军,\
刘珺峰,\
朱盼盼,\
刘伟明,\
庞玉彤,\
朱亚宁,\
权金铎,\
王奡,\
周航,\
陈红,\
唐兴兴,\
李思雯,\
李昂,\
凌晓蔚,\
丁小飞,\
张睿雄,\
方洲,\
朱岑喆,\
杜政均,\
安康,\
陈雪,\
唐伟,\
赵小龙,\
李俊江,\
李锐,\
黎丽娜,\
吴琪,\
缪霞,\
王雪艳,\
王雪,\
孙静,\
孙洁,\
方娜,\
孙逸飞,\
郑海蓉,\
陈曦曦,\
胡博,\
李岩松,\
潘熙之,\
邓元勋,\
罗方舟,\
杨晓,\
陈梦飞,\
方明辉,\
廖志谋,\
张筱,\
李晨,\
马士豪,\
姚盈,\
袁表仙,\
胡雪扬,\
张璐,\
李星征,\
张舟,\
郭亚钊,\
尹曼,\
马寅,\
于岚,\
戈弋,\
严寒,\
邸超琪,\
阳瑞琦,\
朱鹏,\
吕亚微,\
赵航,\
高亚丽,\
朱小梦,\
金丽华,\
曾益红,\
李泽端,\
张茂婷,\
邵琨容,\
徐子冰,\
刘鑫,\
夏雪婷,\
汤雅倩,\
幸云晨,\
张航,\
郝敬滨,\
李俊逸,\
程芳燕,\
张君,\
张翰文,\
苑雅轩,\
申倩倩,\
方峰新,\
田双坤,\
于千雅,\
高晓峰,\
杨震,\
胡绵钟,\
常俊山,\
熊静玲,\
肖昌林,\
曾红珍';