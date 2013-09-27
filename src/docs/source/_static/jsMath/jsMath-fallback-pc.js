/*
 *  jsMath-fallback-pc.js
 *  
 *  Part of the jsMath package for mathematics on the web.
 *
 *  This file makes changes needed for when the TeX fonts are not available
 *  with a browser on the PC.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright 2004-2006 by Davide P. Cervone
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

jsMath.Script.Uncompress([
  ['jsMath.Add(jsMath.TeX,{cmr10',':[{c:"&Gamma;",','tclass:"greek"},{c:"&','Delta;",',2,'Theta;",',2,'Lambda;",',2,'Xi;",',2,'Pi;",',2,'Sigma;",',2,'Upsilon;",',2,'Phi;",',2,'Psi;",',2,'Omega;",','tclass:"','greek','"},{c',':"ff','",ic:0.0778,krn:{"39":0.0778,"63":0.0778,"33":0.0778,"41":0.0778,"93":0.0778},lig:{"105":','14,"108":15},','tclass:"normal"},{c',':"fi",',28,':"fl",',28,':"ffi",',28,':"ffl",',28,':"&#x131',';",a:0,',28,':"j",','d:0.2,',28,':"&#x2CB;",',22,'accent','"},{c:"&#','x2CA;",',22,45,46,'x2C7;",',22,45,46,'x2D8;",',22,45,46,'x2C9;",',22,45,46,'x2DA;",',22,45,46,'x0327;",',28,':"&#xDF;",',28,':"&#xE6',38,28,':"&#x153',38,28,':"&#xF8;",',28,':"&#xC6;",',28,':"&#x152;",',28,':"&#xD8;",',28,':"?",krn:{"108":-0.278,"76":-0.319},',28,':"!",lig:{"96":60},',28,':"&#x201D;",',28,':"#",',28,':"$",',28,':"%",',28,':"&amp;",',28,':"&#x2019;",krn:{"63":0.111,"33":0.','111},','lig:{"39":34},',28,':"(",',41,28,':")",',41,28,':"*",',28,':"+",a:0.1,',28,':",",a:-','0.3,d:0.2,','w:0.278,',28,':"-",a:0,lig:{"45":123},',28,':".",a:-0.','25,',28,':"/",',28,':"0",',28,':"1",',28,':"2",',28,':"3",',28,':"4",',28,':"5",',28,':"6",',28,':"7",',28,':"8",',28,':"9",',28,':":",',28,':";",',28,':"&#xA1;",',28,':"=",a:0,d:-0.1,',28,':"&#xBF;",',28,':"?",lig:{"96":62},',28,':"@",',28,':"A','",krn:{"','116','":-0.0278,"','67',161,'79',161,'71',161,'85',161,'81',161,'84','":-0.0833,"','89',173,'86','":-0.111',',"87":-0.',100,28,':"B",',28,':"C",',28,':"D',159,'88',161,'87',161,'65',161,'86',161,'89','":-0.0278','},',28,':"E",',28,':"F',159,'111',173,'101',173,'117','":-0.0833,"114":-0.0833,"97":-0.0833,"65":-0.','111,"79',161,'67',161,'71',161,'81',196,'},',28,':"G",',28,':"H",',28,':"I',159,'73":0.','0278','},',28,':"J",',28,':"K',159,'79',161,'67',161,'71',161,'81',196,'},',28,':"L',159,'84',173,'89',173,'86',177,178,100,28,':"M",',28,':"N",',28,':"O',159,'88',161,'87',161,'65',161,'86',161,'89',196,'},',28,':"P',159,'65',173,'111',161,'101',161,'97',161,'46',173,'44":-0.0833},',28,':"Q",',41,28,':"R',159,'116',161,'67',161,'79',161,'71',161,'85',161,'81',161,'84',173,'89',173,'86',177,178,100,28,':"S",',28,':"T',159,'121',161,'101',173,'111',208,'0833,"117":-0.0833','},',28,':"U",',28,':"V",','ic:0.0139,krn:{"','111',173,'101',173,'117',208,'111,"79',161,'67',161,'71',161,'81',196,'},',28,':"W",',328,'111',173,'101',173,'117',208,'111,"79',161,'67',161,'71',161,'81',196,'},',28,':"X',159,'79',161,'67',161,'71',161,'81',196,'},',28,':"Y",ic:0.025,','krn:{"101',173,'111',208,322,'},',28,':"Z",',28,':"[",','d:0.1,',28,':"&#x201C;",',28,':"]",',386,28,':"&#x2C6;",',22,45,46,'x2D9;",',22,45,46,'x2018;",lig:{"96":92},',28,':"a','",a:0,krn:{"','118',161,'106":0.','0556,"121',161,'119',196,'},',28,':"b',159,'101','":0.0278,"','111',417,'120',161,'100',417,'99',417,'113',417,'118',161,407,'0556,"121',161,'119',196,'},',28,':"c',404,'104',161,'107',196,'},',28,':"d",',28,':"e",a:0,',28,':"f',26,'12,"102":11,"108":13},',28,':"g",','a:0,d:0.2,ic:0.','0139,krn:{"',407,226,'},',28,':"h',159,'116',161,'117',161,'98',161,'121',161,'118',161,'119',196,'},',28,':"i",',28,':"j",',41,28,':"k',159,'97','":-0.0556,"','101',161,'97',161,'111',161,'99',196,'},',28,':"l",',28,':"m',404,'116',161,'117',161,'98',161,'121',161,'118',161,'119',196,'},',28,':"n',404,'116',161,'117',161,'98',161,'121',161,'118',161,'119',196,'},',28,':"o',404,'101',417,'111',417,'120',161,'100',417,'99',417,'113',417,'118',161,407,'0556,"121',161,'119',196,'},',28,':"p",a:0,',41,376,417,'111',417,'120',161,'100',417,'99',417,'113',417,'118',161,407,'0556,"121',161,'119',196,'},',28,':"q",a:0,',41,28,':"','r",a:0,',28,':"s",a:0,',28,':"t',159,'121',161,'119',196,'},',28,':"u',404,'119',196,'},',28,':"v",a:0,',328,'97',484,'101',161,'97',161,'111',161,'99',196,'},',28,':"w",a:0,',328,'101',161,'97',161,'111',161,'99',196,'},',28,':"x",a:0,',28,':"y",',454,455,'111',161,'101',161,'97',161,'46',173,'44":-0.0833},',28,':"z",a:0,',28,':"&#x2013',';",a:0.1,','ic:0.0278,','lig:{"45":124},',28,':"&#x2014',641,642,28,':"&#x2DD;",',22,45,46,'x2DC;",',22,45,46,'xA8;",',22,45,'"}],cmmi10',1,'ic:0.139',',krn:{"61":-0.0556,"59":-0.111,"58":-0.111,"127":0.','0833},',22,'igreek"},{c:"&',3,'krn:{"127":0.','167},',22,666,5,'ic:0.',226,',krn:{"127":0.','0833},',22,666,7,668,'167},',22,666,9,'ic:0.0757',675,'0833},',22,666,11,'ic:0.0812,krn:{"61',484,'59":-0.0556,"58":-0.0556,"127":0.','0556},',22,666,13,'ic:0.0576',675,'0833},',22,666,15,'ic:0.139',663,'0556},',22,666,17,668,'0833},',22,666,19,'ic:0.11,krn:{"61',484,693,'0556},',22,666,21,'ic:0.0502',675,'0833},',22,666,'alpha',';",a:0,ic:0.','0037',675,226,'},',2,'beta;",','d:0.2,ic:0.','0528',675,'0833},',2,'gamma;",',454,'0556,',2,'delta;",ic:0.0378,krn:{"',693,'0556},',2,'epsilon;",a:0',675,'0556},',22,'lucida',24,':"&zeta;",',735,'0738',675,'0833},',2,'eta;",',454,'0359',675,'0556},',2,'theta;",ic:0.',226,675,'0833},',2,'iota;",a:0',675,'0556},',2,'kappa',38,2,'lambda;",',2,'mu',38,'d:0.2',675,226,'},',2,'nu',728,'0637,krn:{"',693,226,'},',2,'xi;",',735,'046',675,100,2,'pi',728,'0359,',2,'rho',38,'d:0.2',675,'0833},',2,'sigma',728,802,'krn:{"59',484,'58":-0.0556','},',2,'tau',728,'113,krn:{"',693,226,'},',2,'upsilon',728,'0359',675,226,'},',2,'phi',641,'d:0.2',675,'0833},',2,'chi',38,'d:0.2',675,'0556},',2,'psi',641,735,'0359',675,100,2,'omega',728,802,2,'epsilon;",a:0',675,'0833},',22,'greek',46,'x3D1;",',668,'0833},',22,'lucida',46,'x3D6',728,226,',',22,'lucida',46,'x3F1',38,'d:0.2',675,'0833},',22,'lucida',46,'x3C2;",',454,'0799',675,'0833},',22,'lucida',46,'x3D5',641,'d:0.2',675,'0833},',22,'lucida',46,'x21BC',';",a:0,d:-0.','2,',22,'arrows',46,'x21BD',899,'1,',22,'arrows',46,'x21C0',899,'2,',22,'arrows',46,'x21C1',899,'1,',22,'arrows',24,':\'<span style="position:relative; ','top:-.1em">&#','x02D3',';</span>\',a:0','.1,',22,'symbol"},{c',922,923,'x02D2',925,'.1,','tclass:"symbol"},{c:"&#','x25B9;",',934,'x25C3;",',22,928,':"0",',28,':"1",',28,':"2",',28,':"3",',28,':"4",',28,':"5",',28,':"6",',28,':"7",',28,':"8",',28,':"9",',28,119,'3,',28,':",",a:-',114,28,':"&lt',641,28,':\'<span style="font-size',':133','%; position:relative; top:.','1em">/</','span>\',',386,'krn:{"1',484,'65',484,'77',484,'78',484,'89":0.0556,"90":-0.0556},',28,':"&gt',641,28,':"&#x22C6',38,22,'arial',46,'x2202;",ic:0.0556',675,'0833},',28,':"A",',668,'139','},tclass:"italic"},{c:"','B",ic:0.0502',675,'0833',1000,'C",ic:0.0715,krn:{"61',161,693,'0833',1000,'D",ic:0.',226,675,'0556',1000,'E",ic:0.0576',675,'0833',1000,'F",ic:0.139',663,'0833',1000,'G",',668,'0833',1000,'H",ic:0.0812,krn:{"61',484,693,'0556',1000,'I",ic:0.0785',675,'111',1000,'J",ic:0.0962',663,'167',1000,'K",ic:0.0715,krn:{"61',484,693,'0556',1000,'L",',668,226,1000,'M','",ic:0.109,krn:{"','61',484,693,'0833',1000,'N',1050,'61',173,'61',161,693,'0833',1000,'O",ic:0.',226,675,'0833',1000,'P",ic:0.139',663,'0833',1000,'Q",d:0.2',675,'0833',1000,'R",ic:0.00773',675,'0833',1000,'S",ic:0.0576,krn:{"61',484,693,'0833',1000,'T','",ic:0.139,krn:{"','61',161,693,'0833',1000,'U',1050,'59',177,',"58',177,',"61',484,'127":0.',226,1000,'V",ic:0.222,krn:{"59','":-0.167,"','58',1106,'61',177,1000,'W',1088,'59',1106,'58',1106,'61',177,1000,'X",ic:0.0785,krn:{"61',173,'61',161,693,'0833',1000,'Y",ic:0.222,krn:{"59',1106,'58',1106,'61',177,1000,'Z",ic:0.0715,krn:{"61',484,693,'0833},',22,'italic',46,'x266D;",',934,'x266E;",',934,'x266F;",',22,928,':\'<span style="','position: relative; top',':-.3em','; font-size:75%">&#','x203F',925,',d:-0.1,',22,991,'"},{c:\'<span style="',1150,':.4em',1152,'x2040',925,',d:-0.1,',22,991,46,'x2113;",',668,'111',1000,'a",a:0,',22,'italic"},{c:"','b",',22,1174,'c",a:0',675,'0556',1000,'d',159,'89":0.0556,"90',484,'106',177,',"102',1106,1102,'167',1000,'e",a:0',675,'0556',1000,'f",',735,'108,krn:{"',693,'167',1000,'g",',454,'0359',675,226,1000,'h',159,'127',196,1000,'i",',22,1174,'j",',735,'0572,krn:{"59',484,815,1000,'k",ic:0.0315,',22,1174,'l",ic:0.0197',675,'0833',1000,'m",a:0,',22,1174,'n",a:0,',22,1174,'o",a:0',675,'0556',1000,'p",a:0,d:0.2',675,'0833',1000,'q",',454,'0359',675,'0833',1000,579,642,'krn:{"',693,'0556',1000,'s",a:0',675,'0556',1000,'t",',668,'0833',1000,'u",a:0',675,226,1000,'v",a:0,ic:0.0359',675,226,1000,'w",a:0,ic:0.0269',675,'0833',1000,'x",a:0',675,226,1000,'y",',454,'0359',675,'0556',1000,'z",a:0,ic:0.044',675,'0556},',22,'italic',46,'x131;",a:0',675,226,1000,'j",d:0.2',675,'0833},',22,'italic',46,'x2118',38,'d:0.2',675,100,22,991,24,922,'left: .3em; top: -.65em; font-size: 67%">&#x2192;</',973,'ic:0.154,',934,'x0311;",ic:0.399,',22,'normal"}],cmsy10:[{c',922,'top:.1em">&#x2212',925,'.1,',934,'xB7',899,'2,',28,':"&#xD7',38,28,922,'top:.3em">&#x2A',925,',',28,':"&#xF7',38,28,':"&#x25CA;",',934,'xB1',641,28,':"&#x2213;",',934,'x2295;",',934,'x2296;",',934,'x2297;",',934,'x2298;",',934,'x2299;",',934,'x25EF;",',22,991,46,'x2218',899,'1,',22,'symbol2',46,'x2022',899,'2,',934,'x224D',641,22,'symbol2',46,'x2261',641,22,'symbol2',46,'x2286;",',934,'x2287;",',934,'x2264;",',934,'x2265;",',934,'x227C;",',934,'x227D;",',22,928,':"~",a:0,d:-0.2,',28,':"&#x2248',641,'d:-0.1,',934,'x2282;",',934,'x2283;",',934,'x226A;",',934,'x226B;",',934,'x227A;",',934,'x227B;",',934,'x2190;",a:-0.1,',22,'arrow1',46,'x2192;",a:-0.1,',22,'arrow1',46,'x2191',';",a:0.2,d:0',',',22,'arrow1a',46,'x2193',1419,',',22,'arrow1a',46,'x2194;",a:-0.1,',22,'arrow1',46,'x2197',641,22,'arrows',46,'x2198',641,22,'arrows',46,'x2243',641,22,'symbol2',46,'x21D0;",a:-0.1,',22,'arrow2',46,'x21D2;",a:-0.1,',22,'arrow2',46,'x21D1',1419,'.1,',22,'arrow1a',46,'x21D3',1419,'.1,',22,'arrow1a',46,'x21D4;",a:-0.1,',22,'arrow2',46,'x2196',641,22,'arrows',46,'x2199',641,22,'arrows',46,'x221D',641,28,969,': 133%; margin-right: -.1em; ',1150,':.4em">&#x2032',925,',',22,'lucida',46,'x221E',641,934,'x2208;",',934,'x220B;",',22,928,969,': 150',971,'2em">&#','x25B3;</',973,22,928,969,': 150',971,1506,'x25BD;</',973,22,928,969,': 133',971,'2em">/</',973,41,28,969,': 67%; ',1150,':-.15em; ','margin-right:-.','3em">&#x22A2;</',973,934,'x2200;",',934,'x2203;",',934,'xAC',899,'1,',934,'x2205;",',934,'x211C;",',934,'x2111;",',934,'x22A4;",',934,'x22A5;",',934,'x2135;",',22,928,':"A',159,'48":0.194},',22,'cal"},{c:"','B",ic:0.0304',',krn:{"48":0.','139},',22,1559,'C",ic:0.0583',1561,'139},',22,1559,'D",ic:0.',226,1561,'0833},',22,1559,'E",ic:0.0894',1561,100,22,1559,'F",ic:0.0993',1561,100,22,1559,'G",',735,'0593',1561,100,22,1559,'H",ic:0.00965',1561,100,22,1559,'I",ic:0.0738',1561,226,'},',22,1559,'J",',735,'185',1561,'167},',22,1559,'K",ic:0.0144',1561,'0556},',22,1559,'L',159,'48":0.139},',22,1559,'M',159,'48":0.139},',22,1559,'N",ic:0.147',1561,'0833},',22,1559,'O",ic:0.',226,1561,100,22,1559,'P",ic:0.0822',1561,'0833},',22,1559,'Q",d:0.2',1561,100,22,1559,'R',159,'48":0.0833},',22,1559,'S",ic:0.075',1561,'139},',22,1559,'T",ic:0.254',1561,226,'},',22,1559,'U",ic:0.0993',1561,'0833},',22,1559,'V",ic:0.0822',1561,226,'},',22,1559,'W",ic:0.0822',1561,'0833},',22,1559,'X",ic:0.146',1561,'139},',22,1559,'Y",ic:0.0822',1561,'0833},',22,1559,'Z",ic:0.0794',1561,'139},',22,'cal',46,'x22C3;",',934,'x22C2;",',934,'x228E;",',934,'x22C0;",',934,'x22C1;",',934,'x22A2;",',934,'x22A3;",',934,'x230A;",','a:',114,22,991,46,'x230B;",','a:',114,22,991,46,'x2308;",','a:',114,22,991,46,'x2309;",','a:',114,22,991,24,':"{",',41,28,':"}",',41,28,':"&#','x2329;",','a:',114,934,'x232A;",','a:',114,934,'x2223;",',386,934,'x2225;",',386,934,'x2195',1419,',',22,'arrow1a',46,'x21D5;",a:0.3,d:0,',22,'arrow1a',46,'x2216;",','a:0.3,',386,934,'x2240;",',22,928,922,'top: .8em">&#x221A;</',973,'h:0.04,d:0.8,',934,'x2210;",a:0.4,',934,'x2207;",',22,928,969,': 85%; ','left:-.1em; margin-right:-.',1506,'x222B',925,'.4,',386,'ic:0.111,',22,'lucida',46,'x2294;",',934,'x2293;",',934,'x2291;",',934,'x2292;",',934,'xA7;",',386,28,':"&#x2020;",',386,28,':"&#x2021;",',386,28,':"&#xB6;",a:0.3,',386,22,'lucida',46,'x2663;",',22,991,46,'x2662;",',22,991,46,'x2661;",',22,991,46,'x2660;",',22,991,'"}],cmex10:[{c',103,'h:0.04,d:1.16,n:','16,',22,'delim1"},{c',106,1832,'17,',22,1835,385,1832,'104,',22,1835,390,1832,'105,',22,'delim1',46,1721,1832,'106,',22,'delim1a',46,1727,1832,'107,',22,'delim1a',46,1709,1832,'108,',22,'delim1a',46,1715,1832,'109,',22,'delim1a',1158,'margin-left:-.1em">{</',973,1832,'110,',22,'delim1',1158,1530,'1em">}</',973,1832,'111,',22,'delim1',46,1740,1832,'68,',22,'delim1b',46,1744,1832,'69,',22,'delim1b',46,'x2223',';",h:0.7,d:0.1,delim:{rep:','12},',934,'x2225',1904,'13},',22,928,122,1832,'46,',22,'delim1a',46,1764,1832,'47,',22,'delim1a',24,103,'h:0.04,d:1.76,n:','18,',22,'delim2',24,106,1925,'19,',22,'delim2',24,103,'h:0.04,d:2.36,n:','32,',22,'delim3"},{c',106,1937,'33,',22,1940,385,1937,'34,',22,1940,390,1937,'35,',22,'delim3',46,1721,1937,'36,',22,'delim3a',46,1727,1937,'37,',22,'delim3a',46,1709,1937,'38,',22,'delim3a',46,1715,1937,'39,',22,'delim3a"},{c',922,1783,'1em">{</',973,1937,'40,',22,1940,922,'left:-.05em; ',1530,'1em">}</',973,1937,'41,',22,'delim3',46,1740,1937,'42,',22,'delim3b',46,1744,1937,'43,',22,'delim3b',24,122,1937,'44,',22,'delim3a',46,1764,1937,'45,',22,1979,103,'h:0.04,d:2.96,','n:48,',22,'delim4"},{c',106,2022,'n:49,',22,2025,385,2022,'n:50,',22,2025,390,2022,'n:51,',22,'delim4',46,1721,2022,'n:52,',22,'delim4a',46,1727,2022,'n:53,',22,'delim4a',46,1709,2022,'n:54,',22,'delim4a',46,1715,2022,'n:55,',22,'delim4a',24,922,1783,'1em">{</',973,2022,'n:56,',22,2025,922,1783,'1em">}</',973,2022,'n:57,',22,'delim4',46,1740,2022,22,'delim4b',46,1744,2022,22,'delim4b',24,122,2022,22,'delim4a',46,1764,2022,22,'delim4a',24,122,1925,'30,',22,'delim2a',46,1764,1925,'31,',22,'delim2a',46,'xE6',';",h:0.8,d:0.2,delim:{','top:48,bot:64,rep:66},',22,'delimx',46,'xF6',2116,'top:49,bot:65,rep:67},',22,'delimx',46,'xE9',2116,'top:50,bot:52,rep:54},',22,'delimx',46,'xF9',2116,'top:51,bot:53,rep:55},',22,'delimx',46,'xEB',2116,'bot:52,rep:54},',22,'delimx',46,'xFB',2116,'bot:53,rep:55},',22,'delimx',46,'xEA',2116,'top:50,rep:54},',22,'delimx',46,'xFA',2116,'top:51,rep:55},',22,'delimx',46,'xEC',2116,'top:56,mid:60,bot:58,rep:62},',22,'delimx',46,'xFC',2116,'top:57,mid:61,bot:59,rep:62},',22,'delimx',46,'xEE',2116,'top:56,bot:58,rep:62},',22,'delimx',46,'xFE',2116,'top:57,bot:59,rep:62},',22,'delimx',46,'xED',2116,'rep:63},',22,'delimx',46,'xFD',2116,'rep:119},',22,'delimx',46,'xEF',2116,'rep:62},',22,'delimx',1158,'margin:.125em">|</',973,'h:0.8,d:'],
  ['0,delim:{','top:','120,bot:121,rep:63},','tclass:"','normal','"},{c:"&#','xE8',';",h:0.8,d:0.2,delim:{',1,'56,bot:59,rep:62},',3,'delimx',5,'xF8',7,1,'57,bot:58,rep:62},',3,11,5,'xE7',7,'rep:66},',3,11,5,'xF7',7,'rep:67},',3,11,5,'x2329;",','h:0.04,d:1.76,n:','28,',3,'delim2b',5,'x232A;",',33,'29,',3,36,5,'x2294',';",h:0,d:1,n:','71,',3,'bigop1',5,'x2294',';",h:0.1,d:1.','5,',3,'bigop2',5,'x222E',';",h:0,d:1.11,ic:0.095,n:','73,',3,'bigop1c',5,'x222E;",h:0,d:2.22,ic:0.222,',3,'bigop2c',5,'x2299',45,'75,',3,48,5,'x2299',51,'5,',3,54,5,'x2295',45,'77,',3,48,5,'x2295',51,'5,',3,54,5,'x2297',45,'79,',3,48,5,'x2297',51,'5,',3,54,5,'x2211',45,'88,',3,'bigop1a',5,'x220F',45,'89,',3,106,5,'x222B',57,'90,',3,60,5,'x222A',45,'91,',3,'bigop1b',5,'x2229',45,'92,',3,124,5,'x228E',45,'93,',3,124,5,'x22C0',45,'94,',3,48,5,'x22C1',45,'95,',3,48,5,'x2211',51,'6,',3,'bigop2a',5,'x220F',51,'5,',3,154,5,'x222B;",h:0,d:2.22,ic:0.222,',3,64,5,'x222A',51,'5,',3,'bigop2b',5,'x2229',51,'5,',3,170,5,'x228E',51,'5,',3,170,5,'x22C0',51,'5,',3,54,5,'x22C1',51,'5,',3,54,5,'x2210',45,'97,',3,106,5,'x2210',51,'5,',3,154,5,'xFE3F;",h:0.','722,w:0.','65,n:99,',3,'wide1',5,208,'85,w:1.1,n:100,',3,'wide2',5,208,'99,w:1.65,',3,'wide3','"},{c:"~",h:0.',209,'5,n:102,',3,'wide1a',223,'8,w:0.8,n:103,',3,'wide2a',223,'99,w:1.3,',3,'wide3a','"},{c:"[",',33,'20,',3,'delim2','"},{c:"]",',33,'21,',3,240,5,'x2308;",',33,'22,',3,'delim2a',5,'x2309;",',33,'23,',3,251,5,'x230A;",',33,'24,',3,251,5,'x230B;",',33,'25,',3,251,'"},{c:\'<span style="','position:relative; ','left',':-.1em','; margin-right:-.','1em">{</span>\',',33,'26,',3,240,270,'position:relative',274,'1em; left:-.05em">}</span>\',',33,'27,',3,240,270,'font-size: ','150%; ','position:relative; top:.','8em','">&#x221A;</span>\',h:0.','04,d:1.16,n:113,',3,'root',270,289,'220%; ',291,'8em">&#x221A;</span>\',',33,'114,',3,296,270,289,'310%; ',291,'8em',274,'01em',293,'06,d:2.36,n:115,',3,296,270,289,'400%; ',291,'8em',274,'025em',293,'08,d:2.96,n:116,',3,296,270,289,'490%; ',291,'8em',274,'03em',293,'1,d:3.75,n:117,',3,296,270,289,'580%; ',291,'775em',274,'04em',293,'12,d:4.5,n:118,',3,296,270,289,'750%; ',291,343,';','margin-right',':-.04em',293,'14,d:5.7,',3,296,270,'margin-left',':.02em">|</','span><span style="',363,':.08em; ','margin-right:.125em">|</span','>\',h:0.8,d:',0,1,'126,bot:127,rep:119},',3,'normal',5,'x2191',';",h:0.7,d:0,delim:{',1,'120,rep:63},',3,'arrow1a',5,'x2193;",h:0.65,d:',0,'bot:121,rep:63},',3,381,270,363,273,'"></',365,291,'55em',274,'3em">&#x25DC',';</span>\',h:0.','05,',3,'symbol',270,363,':-.3em"></',365,291,394,274,'1em">&#x25DD',397,'05,',3,400,270,363,273,'"></',365,291,'15em',274,'3em">&#x25DF',397,'05,',3,400,270,363,':-.3em"></',365,291,419,274,'1em">&#x25DE',397,'05,',3,400,5,'x21D1',377,1,'126,rep:119},',3,381,5,'x21D3',377,'bot:127,rep:119},',3,381,'"}],cmti10',':[{c:"&Gamma;",','ic:0.133,',3,'igreek"},{c:"&','Delta;",',3,455,'Theta;",','ic:0.094,',3,455,'Lambda;",',3,455,'Xi;",ic:0.153,',3,455,'Pi;",ic:0.164,',3,455,'Sigma;",','ic',':0.12,',3,455,'Upsilon;",','ic:0.111,',3,455,'Phi;",','ic:0.0599,',3,455,'Psi;",','ic:0.111,',3,455,'Omega;",','ic:0.103,',3,'igreek','"},{c:"ff','",ic:0.212,krn:{"39":0.104,"63":0.104,"33":0.104,"41":0.104,"93":0.104},lig:{"105":','14,"108":15},','tclass:"italic"},{c',':"fi','",ic:0.103,',496,':"fl',498,496,':"ffi',498,496,':"ffl',498,496,':"&#x131;",a:0,','ic:0.','0767,',496,':"j",d:0.2,','ic:0.0374,',496,':"&#x2CB;",',3,'iaccent',5,'x2CA;",','ic:0.0969,',3,518,5,'x2C7;",','ic:0.083,',3,518,5,'x2D8;",','ic:0.108,',3,518,5,'x2C9;",',490,3,518,5,'x2DA;",',3,518,'"},{c:"?",','d:0.17,w:0.46,',496,':"&#xDF;",','ic:0.105,',496,':"&#xE6;",a:0,','ic:0.0751,',496,':"&#x153;",a:0,',550,496,':"&#xF8;",','ic:0.0919,',496,':"&#xC6;",','ic',474,496,':"&#x152;",','ic',474,496,':"&#xD8;",',460,496,':"?",krn:{"108":-0.','256,"76":-0.321},',496,':"!",','ic:0.124,lig:{"96":','60},',496,':"&#x201D;",','ic:0.0696,',496,':"#",ic:0.0662,',496,':"$",',496,':"%",ic:0.136,',496,':"&amp;",','ic:0.0969,',496,':"&#x2019;",','ic:0.124,','krn:{"63":0.','102,"33":0.102},lig:{"39":34},',496,':"(",d:0.2,','ic:0.162,',496,':")",d:0.2,','ic:0.0369,',496,':"*",ic:0.149,',496,':"+",a:0.1,','ic:0.0369,',496,':",",a:-0.3,d:0.2,w:0.278,',496,':"-",a:0,ic:0.0283',',lig:{"45":','123},',496,':".",a:-0.25,',496,':"/",ic:0.162,',496,':"0",ic:0.136,',496,':"1",ic:0.136,',496,':"2",ic:0.136,',496,':"3",ic:0.136,',496,':"4",ic:0.136,',496,':"5",ic:0.136,',496,':"6",ic:0.136,',496,':"7",ic:0.136,',496,':"8",ic:0.136,',496,':"9",ic:0.136,',496,':":",ic:0.0582,',496,':";",ic:0.0582,',496,':"&#xA1;",','ic:0.0756,',496,':"=",a:0,d:-0.1,','ic:0.0662,',496,':"&#xBF;",',496,':"?",','ic:0.122,','lig:{"96":','62},',496,':"@",ic:0.096,',496,':"A",','krn:{"110":-0.0256,"108":-0.0256,"114":-0.0256,"117":-0.0256,"109":-0.0256,"116":-0.0256,"105":-0.0256,"67":-0.0256,"79":-0.0256,"71":-0.0256,"104":-0.0256,"98":-0.0256,"85":-0.0256,"107":-0.0256,"118":-0.0256,"119":-0.0256,"81":-','0.0256,"84','":-0.0767,"','89',656,'86','":-0.102,"','87',660,'101','":-0.0511,"','97',664,'111',664,'100',664,'99',664,'103',664,'113','":-0.0511','},',496,':"B',498,496,':"C",','ic:0.145,',496,':"D",',460,'krn:{"88','":-0.0256,"','87',688,'65',688,'86',688,'89":-0.','0256},',496,':"E",ic',474,496,':"F','",ic:0.133,krn:{"','111',656,'101',656,'117','":-0.0767,"114":-0.0767,"97":-0.0767,"','65',660,'79',688,'67',688,'71',688,'81":-0.0256','},',496,':"G",ic:0.0872,',496,':"H",ic:0.164,',496,':"I",ic:0.158,',496,':"J",ic:0.14,',496,':"K",',683,'krn:{"79',688,'67',688,'71',688,717,'},',496,':"L",krn:{"84',656,'89',656,'86',660,'87',660,'101',664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"M",ic:0.164,',496,':"N",ic:0.164,',496,':"O",',460,'krn:{"88',688,'87',688,'65',688,'86',688,695,'0256},',496,':"P',498,'krn:{"65":-0.0767},',496,':"Q",d:0.2,',460,496,':"R",ic:0.0387,',654,'0.0256,"84',656,'89',656,'86',660,'87',660,'101',664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"S",ic',474,496,':"T',702,'121',656,'101',656,'111',708,'117',656,'65":-0.0767},',496,':"U",ic:0.164,',496,':"V",ic:0.','184,krn:{"','111',656,'101',656,'117',708,'65',660,'79',688,'67',688,'71',688,717,'},',496,':"W",ic:0.',831,'65":-0.0767},',496,':"X",ic:0.158,krn:{"79',688,'67',688,'71',688,717,'},',496,':"Y",ic:0.','194',',krn:{"101',656,'111',708,'117',656,'65":-0.0767},',496,':"Z",',683,496,':"[",d:0.1,','ic:0.188,',496,':"&#x201C;",','ic:0.169,',496,':"]",d:0.1,','ic:0.105,',496,':"&#x2C6;",','ic:0.0665,',3,518,5,'x2D9;",','ic:0.118,',3,518,5,'x2018;",',573,'92},',496,':"a','",a:0,ic:0.',511,496,':"b",ic:0.0631',864,664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"c',899,'0565',864,664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"d',498,'krn:{"108":','0.0511},',496,':"e',899,'0751',864,664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"f',494,'12,"102":11,"108":13},',496,':"g','",a:0,d:0.2,ic:0.','0885,',496,':"h",ic:0.',511,496,':"i",ic:0.102,',496,513,683,496,':"k",',531,496,':"l',498,940,'0.0511},',496,':"m',899,511,496,':"n',899,511,'krn:{"39":-0.102},',496,':"o',899,'0631',864,664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"p',967,'0631',864,664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"q',967,'0885,',496,':"r',899,'108',864,664,'97',664,'111',664,'100',664,'99',664,'103',664,'113',676,'},',496,':"s',899,'0821,',496,':"t",ic:0.0949,',496,':"u',899,511,496,':"v',899,'108,',496,':"w',899,1068,940,'0.0511},',496,':"x',899,'12,',496,':"y',967,'0885,',496,':"z',899,'123,',496,':"&#x2013;",a:0.1,ic:0.','0921',607,'124},',496,':"&#x2014;",a:0.1,ic:0.','0921,',496,':"&#x2DD;",',647,3,518,5,'x2DC;",','ic:0.116,',3,518,5,'xA8;",',3,518,'"}],cmbx10',452,3,'bgreek"},{c:"&','Delta;",',3,1112,459,3,1112,'Lambda;",',3,1112,'Xi;",',3,1112,'Pi;",',3,1112,472,3,1112,477,3,1112,481,3,1112,485,3,1112,489,3,'bgreek','"},{c:"ff','",ic:0.0778,krn:{"39":0.0778,"63":0.0778,"33":0.0778,"41":0.0778,"93":0.0778},lig:{"105":','14,"108":15},','tclass:"bold"},{c',':"fi",',1146,':"fl",',1146,':"ffi",',1146,':"ffl",',1146,509,1146,513,1146,':"&#x2CB;",',3,'baccent',5,520,3,1161,5,525,3,1161,5,530,3,1161,5,535,3,1161,5,'x2DA;",',3,1161,543,1146,546,1146,549,1146,552,1146,555,1146,558,1146,562,1146,566,1146,569,'278,"76":-0.319},',1146,572,648,'60},',1146,576,1146,':"#",',1146,':"$",',1146,':"%",',1146,585,1146,588,590,'111,"33":0.111},lig:{"39":34},',1146,593,1146,596,1146,':"*",',1146,601,1146,':",",a:-0.3,d:0.2,w:0.278,',1146,':"-",a:0',607,'123},',1146,':".",a:-0.25,',1146,':"/",',1146,':"0",',1146,':"1",',1146,':"2",',1146,':"3",',1146,':"4",',1146,':"5",',1146,':"6",',1146,':"7",',1146,':"8",',1146,':"9",',1146,':":",',1146,':";",',1146,638,1146,641,1146,':"&#xBF;",',1146,646,648,'62},',1146,':"@",',1146,':"A",krn:{"116','":-0.0278,"','67',1274,'79',1274,'71',1274,'85',1274,'81',1274,'84','":-0.0833,"','89',1286,'86":-0.','111,"87":-0.111},',1146,':"B",',1146,682,1146,':"D",krn:{"88',1274,'87',1274,'65',1274,'86',1274,695,'0278},',1146,':"E",',1146,':"F",krn:{"111',1286,'101',1286,'117','":-0.0833,"114":-0.0833,"97":-0.0833,"65":-0.','111,"79',1274,'67',1274,'71',1274,'81":-0.0278','},',1146,':"G",',1146,':"H",',1146,':"I",krn:{"73":0.0278},',1146,':"J",',1146,':"K",krn:{"79',1274,'67',1274,'71',1274,1321,'},',1146,':"L",krn:{"84',1286,'89',1286,1289,'111,"87":-0.111},',1146,':"M",',1146,':"N",',1146,':"O",krn:{"88',1274,'87',1274,'65',1274,'86',1274,695,'0278},',1146,':"P",krn:{"65',1286,'111',1274,'101',1274,'97',1274,'46',1286,'44":-0.0833},',1146,784,1146,':"R",krn:{"116',1274,'67',1274,'79',1274,'71',1274,'85',1274,'81',1274,'84',1286,'89',1286,1289,'111,"87":-0.111},',1146,':"S",',1146,':"T",krn:{"121',1274,'101',1286,'111',1314,'0833,"117":-0.0833','},',1146,':"U",',1146,830,'0139,krn:{"','111',1286,'101',1286,'117',1314,'111,"79',1274,'67',1274,'71',1274,1321,'},',1146,849,1410,'111',1286,'101',1286,'117',1314,'111,"79',1274,'67',1274,'71',1274,1321,'},',1146,':"X",krn:{"79',1274,'67',1274,'71',1274,1321,'},',1146,862,'025',864,1286,'111',1314,1404,'},',1146,872,1146,875,1146,878,1146,881,1146,884,3,1161,5,889,3,1161,5,894,648,'92},',1146,':"a','",a:0,krn:{"','118',1274,'106":0.','0556,"121',1274,'119":-0.','0278},',1146,':"b",krn:{"101','":0.0278,"','111',1492,'120',1274,'100',1492,'99',1492,'113',1492,'118',1274,1485,'0556,"121',1274,1488,'0278},',1146,':"c',1482,'104',1274,'107":-0.0278},',1146,':"d",',1146,':"e",a:0,',1146,':"f',1144,'12,"102":11,"108":13},',1146,':"g',967,1410,1485,'0278},',1146,':"h",krn:{"116',1274,'117',1274,'98',1274,'121',1274,'118',1274,1488,'0278},',1146,':"i",',1146,513,1146,':"k",krn:{"97":-0.0556,"101',1274,'97',1274,'111',1274,'99":-0.','0278},',1146,':"l",',1146,':"m',1482,'116',1274,'117',1274,'98',1274,'121',1274,'118',1274,1488,'0278},',1146,':"n',1482,'116',1274,'117',1274,'98',1274,'121',1274,'118',1274,1488,'0278},',1146,':"o",a:0',864,1492,'111',1492,'120',1274,'100',1492,'99',1492,'113',1492,'118',1274,1485,'0556,"121',1274,1488,'0278},',1146,':"p",a:0,d:0.2',864,1492,'111',1492,'120',1274,'100',1492,'99',1492,'113',1492,'118',1274,1485,'0556,"121',1274,1488,'0278},',1146,':"q",a:0,d:0.2,',1146,':"r",a:0,',1146,':"s",a:0,',1146,':"t",krn:{"121',1274,1488,'0278},',1146,':"u',1482,1488,'0278},',1146,':"v',899,1410,'97":-0.0556,"101',1274,'97',1274,'111',1274,1554,'0278},',1146,':"w',899,'0139',864,1274,'97',1274,'111',1274,1554,'0278},',1146,':"x",a:0,',1146,':"y',967,1410,'111',1274,'101',1274,'97',1274,'46',1286,'44":-0.0833},',1146,':"z",a:0,',1146,1088,'0278',607,'124},',1146,1093,'0278,',1146,1096,3,1161,5,1101,3,1161,5,'xA8;",',3,1161,'"}]});','jsMath.Setup.Styles({".typeset .','cmr10','":"font-family',': serif','",".typeset .','italic":"font-style: italic',1712,'bold":"font-weight: bold',1712,'lucida',1710,': \'lucida sans unicode','\'",".typeset .','arial','":"font-family: \'Arial unicode MS',1720,'cal',1710,': \'Script MT\', \'Script MT Bold\', cursive',1712,'arrows',1722,1720,'arrow1',1722,1720,381,1722,'\'; ',291,'05em;left:-.',419,274,419,1712,'arrow2',1722,'\'; ',271,'top',273,';",".typeset .','arrow3',1722,'\'; margin:.1em',1712,400,1722,1720,'symbol2',1722,1720,'delim1','":"font-family: \'Times New Roman\'; font-','size: ','133%; ',291,'7em',1712,'delim1a','":"font-family: \'Lucida sans unicode\'; font-size: ','133%; ',291,'8em',1712,'delim1b',1722,'\'; font-size: ','133%; ',291,'8em',1712,240,1761,1762,'180%; ',291,'75em',1712,251,1768,'180%; ',291,'8em',1712,36,1722,1775,'180%; ',291,'8em',1712,'delim3',1761,1762,'250%; ',291,'725em',1712,'delim3a',1768,'250%; ',291,343,1712,'delim3b',1722,1775,'250%; ',291,'8em',1712,'delim4',1761,1762,'325%; ',291,'7em',1712,'delim4a',1768,'325%; ',291,343,1712,'delim4b',1722,1775,'325%; ',291,'8em',1712,11,1710,': Symbol; ',291,'2em',1712,'greek',1710,': \'Times New Roman',1720,492,1761,'style:italic',1712,1142,1761,'weight:bold',1712,48,1722,1775,'130','%; position: relative; top',': .7em; margin:-.05em',1712,106,1722,1775,'110',1862,': .85em',1749,124,1722,1775,'180',1862,': .6em',1712,60,1722,1775,'85',1862,': 1em',1712,54,1722,1775,'230',1862,1877,'; margin:-.05em',1712,154,1722,1775,'185',1862,': .75em',1712,170,1722,1775,'275',1862,': .',394,1712,64,1722,1775,'185',1862,1884,274,'1em',1712,212,'":"',289,'67',1862,':-.5em',1749,217,'":"',289,'110',1862,':-.2em',1749,222,'":"',289,'175%;",".typeset .',227,1761,1762,'75',1862,1923,1712,231,1761,1762,'133',1862,1930,1712,235,1761,1762,'200',1862,273,1712,296,1722,'\'; ',356,':-.075em',1712,'accent',1722,'\'; ',291,'05em; left:.15em',1712,518,1722,'\'; ',291,1967,'; font-','style:italic',1712,1161,1722,'\'; ',291,1967,1974,1856,'"});','if(jsMath.browser=="','Mozilla"){','jsMath.Update.TeXfonts({cmex10:{"','48":{c:"&#xF8EB;"},"49":{c:"&#xF8F6;"},"50":{c:"&#xF8EE;"},"51":{c:"&#xF8F9;"},"52":{c:"&#xF8F0;"},"53":{c:"&#xF8FB;"},"54":{c:"&#xF8EF;"},"55":{c:"&#xF8FA;"},"56":{c:"&#xF8F1;"},"57":{c:"&#xF8FC;"},"58":{c:"&#xF8F3;"},"59":{c:"&#xF8FE;"},"60":{c:"&#xF8F2;"},"61":{c:"&#xF8FD;"},"62":{c:"&#xF8F4;"},"64":{c:"&#xF8ED;"},"65":{c:"&#xF8F8;"},"66":{c:"&#xF8EC;"},"67":{c:"&#xF8F7;"}}});',1708,'accent',1710,': Arial unicode MS; ',291,'05em; left:.05em"})}',1985,'MSIE"){jsMath.Browser.msieFontBug=1;',1987,'63":{','c:\'<span style="',271,'left:.125em; ',368,'>\'},"119":{',1999,271,'left:.02em; ',356,'=.08em">|</',365,368,'>\'}}})}jsMath.Macro("not","\\\\mathrel{\\\\rlap{\\\\kern 3mu/}}");jsMath.Macro("bowtie","\\\\mathrel\\\\triangleright\\\\kern-6mu\\\\mathrel\\\\triangleleft");jsMath.Box.defaultH=0.8;']
]);