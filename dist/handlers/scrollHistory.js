"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _cleanArray=_interopRequireDefault(require("../utils/cleanArray")),_sendCursorToEnd=_interopRequireDefault(require("../utils/sendCursorToEnd")),_default=function(a,b){var c=b.history,d=b.historyPosition,e=b.previousHistoryPosition,f=b.terminalInput,g=(0,_cleanArray["default"])(c).reverse(),h=d,i=e,j=f.current;if(0<g.length)switch(a){case"up":{var k=g[0],l=g[g.length-1],m=g[h+1];return null===h?(j.value=k,(0,_sendCursorToEnd["default"])(j),{historyPosition:0,previousHistoryPosition:null}):h+1===g.length?(j.value=l,(0,_sendCursorToEnd["default"])(j),{historyPosition:g.length-1,previousHistoryPosition:1===g.length?null:g.length-2}):(j.value=m,(0,_sendCursorToEnd["default"])(j),{historyPosition:h+1,previousHistoryPosition:h})}case"down":{var n=g[0],o=g[h-1];return null!==h&&g[h]?-1==h-1?(j.value=null===i||0===h&&1===i?"":n,(0,_sendCursorToEnd["default"])(j),{historyPosition:null,previousHistoryPosition:null}):(j.value=o,(0,_sendCursorToEnd["default"])(j),{historyPosition:h-1,previousHistoryPosition:h}):(j.value="",(0,_sendCursorToEnd["default"])(j),{historyPosition:null,previousHistoryPosition:null})}}};exports["default"]=_default;