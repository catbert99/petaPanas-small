(function (document, window) {
    'use strict'
    var _this = this;
    let defaultConfig = {
        ppCellh : '30px',
        ppCellw : '30px',
        ppFontSize : '0.8rem',
        ppFontColor : 'black',
        ppColors: {
            start: 'cymk(0%, 100%, 65%, 0%)',
            end: 'cymk(74%, 62%, 0%, 0%)',
            steps: 10
        }
    };
    function a1(ppDiv, ppData, ppConfig){
        this.ppDiv = ppDiv;
        this.ppData = ppData;
        this.ppConfig = ppConfig;
    };
    function cyRGB(a){
        let aa = a.match(/[0-9]+/g);
        let b1 = [];
        for (let i = 0; i < 3; i++){
            let b2 = (
                (255 - (255*aa[i]/100)) * (255 - (255*aa[3]/100))
            )/255;
            b1.push(Math.ceil(b2));
        }
        let c = 'rgb('+b1[0]+','+b1[1]+','+b1[2]+')';
        return(c);
    };
    function cEngine(a,b,c,e){
        let aa = a.match(/[0-9]+/g);
        let bb = b.match(/[0-9]+/g);
        let ab1 = [];
        for(let i = 0; i < 4; i++){
            let ab2 = ((aa[i].valueOf() * (c-e)) + (bb[i].valueOf() * (e))) / c;
            ab1.push(ab2);
        };
        let ab3 = [];
        for (let ii = 0; ii < 3; ii++){
            let ab4 = (
                (255 - (255*ab1[ii]/100)) * (255 - (255*ab1[3]/100))
            )/255;
            ab3.push(Math.ceil(ab4));
        }
        let f = 'rgb('+ab3[0]+','+ab3[1]+','+ab3[2]+')';
        return(f);
    };
    var petaPanas = {
        dchart : function(aa){
            let a = new a1(
                aa.ppDiv,
                aa.ppData,
                (!aa.ppConfig) ? defaultConfig : aa.ppConfig
            );
            let b1 = document.getElementById(a.ppDiv);
            let b2 = document.createElement('table');
            const e1 = a.ppData.values.flat();
            const e2 = [... new Set(e1)];
            const e3 = e2.sort(function(a,b){return a-b}); 
            const e4 = e3.length;
            if(e4 > a.ppConfig.ppColors.steps) {a.ppConfig.ppColors.steps = e4};
            b1.appendChild(b2);
            //populate horizontal headers
            let b2_1 = document.createElement('tr');
            let b2_2 = document.createElement('th');
            b2_1.appendChild(b2_2);
            for (let c = 0; c < a.ppData.values[0].length; c++){
                let b2_3 = document.createElement('th');
                let b2_4 = document.createElement('div');
                b2_4.innerText = a.ppData.labels.x[c];
                b2_4.setAttribute('class','topth');
                b2_4.style.width = a.ppConfig.ppCellw;
                b2_3.setAttribute('class','topth');
                b2_3.appendChild(b2_4);
                b2_1.appendChild(b2_3);
            };
            b2.appendChild(b2_1);
            //populate contents
            for (let cx = 0; cx < a.ppData.values.length; cx++){
                let d1 = document.createElement('tr');
                let d2 = document.createElement('td');
                d2.innerText = a.ppData.labels.y[cx];
                d1.appendChild(d2);
                for (let cy = 0; cy < a.ppData.values[cx].length; cy++){
                    let d3 = document.createElement('td');
                    d3.setAttribute('style','height: '+a.ppConfig.ppCellh+'; width: '+a.ppConfig.ppCellw);
                    d3.style.backgroundColor = '#DCDCDC';
                    if(!a.ppData.values[cx][cy] == false){
                        let d4 = document.createElement('span');
                        d4.innerText = a.ppData.values[cx][cy];
                        d4.setAttribute('class','ttext');
                        d3.appendChild(d4);
                        let e5 = e3.findIndex(e33 => e33 === a.ppData.values[cx][cy]);
                        let f = cEngine(a.ppConfig.ppColors.start, a.ppConfig.ppColors.end, a.ppConfig.ppColors.steps, e5);
                        d3.style.backgroundColor = f;
                        d3.setAttribute('class','ttip');
                    }
                    d1.appendChild(d3);
                };
                b2.appendChild(d1);
            };
            let b3 = document.createElement('div');
            b3.style.background = 'linear-gradient(to right,' +
                cyRGB(a.ppConfig.ppColors.start) + ' 0%, ' + cyRGB(a.ppConfig.ppColors.end) + ' 100%)';
            b3.style.height = '20px';
            b3.style.width = '20%';
            b3.style.marginTop = '20px';
            b1.appendChild(b3);
        }
    };
    console.log('petaPanas has warmed up');
    if (typeof define == 'function' && define.amd){
        define([],function(){
            return petaPanas;
        });
    } else {
        window.petaPanas = petaPanas;
    }
}(document,window));
