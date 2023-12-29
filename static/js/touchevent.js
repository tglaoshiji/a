function v_on(obj,ev,fn){if(obj.attachEvent){obj.attachEvent("on"+ev,fn);}else{obj.addEventListener(ev,fn,false);}}
var touchEvent={tap:function(element,fn){var startTx,startTy;v_on(element,'touchstart',function(e){var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;},false);v_on(element,'touchend',function(e){var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY;if(Math.abs(startTx-endTx)<6&&Math.abs(startTy-endTy)<6){fn();}},false);},doubleTap:function(element,fn){var isTouchEnd=false,lastTime=0,lastTx=null,lastTy=null,firstTouchEnd=true,body=document.body,dTapTimer,startTx,startTy,startTime;v_on(element,'touchstart',function(e){if(dTapTimer){clearTimeout(dTapTimer);dTapTimer=null;}
var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;},false);v_on(element,'touchend',function(e){var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY,now=Date.now(),duration=now-lastTime;if(Math.abs(startTx-endTx)<6&&Math.abs(startTx-endTx)<6){if(duration<301){if(lastTx!==null&&Math.abs(lastTx-endTx)<45&&Math.abs(lastTy-endTy)<45){firstTouchEnd=true;lastTx=lastTy=null;fn();}}
else{lastTx=endTx;lastTy=endTy;}}
else{firstTouchEnd=true;lastTx=lastTy=null;}
lastTime=now;},false);if(~navigator.userAgent.toLowerCase().indexOf('iphone os')){v_on(body,'touchstart',function(e){startTime=Date.now();},true);v_on(body,'touchend',function(e){var noLongTap=Date.now()-startTime<501;if(firstTouchEnd){firstTouchEnd=false;if(noLongTap&&e.target===element){dTapTimer=setTimeout(function(){firstTouchEnd=true;lastTx=lastTy=null;fn();},400);}}
else{firstTouchEnd=true;}},true);v_on(element,'click',function(e){if(dTapTimer){clearTimeout(dTapTimer);dTapTimer=null;firstTouchEnd=true;}},false);}},longTap:function(element,fn){var startTx,startTy,lTapTimer;v_on(element,'touchstart',function(e){if(lTapTimer){clearTimeout(lTapTimer);lTapTimer=null;}
var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;lTapTimer=setTimeout(function(){fn();},1000);},false);v_on(element,'touchmove',function(e){var touches=e.touches[0],endTx=touches.clientX,endTy=touches.clientY;if(lTapTimer&&(Math.abs(endTx-startTx)>5||Math.abs(endTy-startTy)>5)){clearTimeout(lTapTimer);lTapTimer=null;}},false);v_on(element,'touchend',function(e){if(lTapTimer){clearTimeout(lTapTimer);lTapTimer=null;}},false);},swipe:function(element,fn){var isTouchMove,startTx,startTy;v_on(element,'touchstart',function(e){var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;isTouchMove=false;},false);v_on(element,'touchmove',function(e){isTouchMove=true;},false);v_on(element,'touchend',function(e){if(!isTouchMove){return;}
var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY,distanceX=startTx-endTx
distanceY=startTy-endTy,isSwipe=false;if(Math.abs(distanceX)>20||Math.abs(distanceY)>20){fn(e);}},false);},swipeUp:function(element,fn){if(fn==false)return;var isTouchMove,startTx,startTy;v_on(element,'touchstart',function(e){var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;isTouchMove=false;},false);v_on(element,'touchmove',function(e){isTouchMove=true;},false);v_on(element,'touchend',function(e){if(!isTouchMove){return;}
var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY,distanceX=startTx-endTx
distanceY=startTy-endTy,isSwipe=false;if(Math.abs(distanceX)<Math.abs(distanceY)){if(distanceY>20){fn(e,distanceY);isSwipe=true;}}},false);},swipeDown:function(element,fn){if(fn==false)return;var isTouchMove,startTx,startTy;v_on(element,'touchstart',function(e){var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;isTouchMove=false;},false);v_on(element,'touchmove',function(e){isTouchMove=true;},false);v_on(element,'touchend',function(e){if(!isTouchMove){return;}
var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY,distanceX=startTx-endTx
distanceY=startTy-endTy,isSwipe=false;if(Math.abs(distanceX)<Math.abs(distanceY)){if(distanceY<-20){fn(e,distanceY);isSwipe=true;}}},false);},swipeLeft:function(element,fn){var isTouchMove,startTx,startTy;v_on(element,'touchstart',function(e){var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;isTouchMove=false;},false);v_on(element,'touchmove',function(e){isTouchMove=true;e.preventDefault();},false);v_on(element,'touchend',function(e){if(!isTouchMove){return;}
var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY,distanceX=startTx-endTx
distanceY=startTy-endTy,isSwipe=false;if(Math.abs(distanceX)>=Math.abs(distanceY)){if(distanceX>20){fn(e);isSwipe=true;}}},false);},swipeRight:function(element,fn){var isTouchMove,startTx,startTy;v_on(element,'touchstart',function(e){var touches=e.touches[0];startTx=touches.clientX;startTy=touches.clientY;isTouchMove=false;},false);v_on(element,'touchmove',function(e){isTouchMove=true;e.preventDefault();},false);v_on(element,'touchend',function(e){if(!isTouchMove){return;}
var touches=e.changedTouches[0],endTx=touches.clientX,endTy=touches.clientY,distanceX=startTx-endTx
distanceY=startTy-endTy,isSwipe=false;if(Math.abs(distanceX)>=Math.abs(distanceY)){if(distanceX<-20){fn(e);isSwipe=true;}}},false);}}
jQuery.fn.extend({tap:function(fn){return touchEvent.tap(jQuery(this)[0],fn);},doubleTap:function(fn){return touchEvent.doubleTap(jQuery(this)[0],fn);},longTap:function(fn){return touchEvent.longTap(jQuery(this)[0],fn);},swipe:function(fn){return touchEvent.swipe(jQuery(this)[0],fn);},swipeLeft:function(fn){return touchEvent.swipeLeft(jQuery(this)[0],fn);},swipeRight:function(fn){return touchEvent.swipeRight(jQuery(this)[0],fn);},swipeUp:function(fn){return touchEvent.swipeUp(jQuery(this)[0],fn);},swipeDown:function(fn){return touchEvent.swipeDown(jQuery(this)[0],fn);}});