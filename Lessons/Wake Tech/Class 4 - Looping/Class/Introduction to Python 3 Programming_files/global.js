var classroomUrl = location.href;
var globalURL = '';
var courseURL = '';
var courseCodeLocation;
var classroomCourseCode = '';
var courseCode;
var e2g_randomNumber = Math.floor(Math.random() * 1000)
function urlDetector(){
	if(globalURL == '' && courseURL == ''){
		
		var scriptArray = document.getElementsByTagName("script");
		var scriptSearchStr = "";

		
		for(var i = 0; i < scriptArray.length; i++) {
			
		  var scriptSearchStr = scriptArray[i].src;
		  var globalSearch = scriptSearchStr.search("/global.js");
		  var courseSearch = scriptSearchStr.search("/course.js");
		  
		  if(globalSearch>-1){
			  globalURL = scriptSearchStr.replace("/global.js","/");
			}
		  if(courseSearch>-1 && globalURL != 'undefined'){
				courseCodeLocation = scriptSearchStr.indexOf("/course.js");
				courseCodeStart = courseCodeStop = courseCodeLocation;
				courseCodeStart -= 5;
				classroomCourseCode = scriptSearchStr.substring(courseCodeStart,courseCodeStop);
				courseURL = scriptSearchStr.replace("/course.js","/");
			}
		  if(globalURL != '' && courseURL != ''){
			  i = scriptArray.length;
			}
		}
	}
}

/* --------------------- START JW Player scripts START --------------------- */

var disableGlobalJWplayers;


function runJWsetup(){	
		if(disableGlobalJWplayers != true){
			$('.jw').hide();
			document.write('<div id=vidFrame_'+placeHolderNum+'></div>');	
			if(typeof jwplayer == 'undefined'){
			urlDetector();
			HTML5_jwplayer_scriptPath = globalURL + "jwplayer/HTML5_jwplayers.js";
			HTML5_jwplayer_scriptPath = "<script src="+HTML5_jwplayer_scriptPath+"></script>";
			document.write(HTML5_jwplayer_scriptPath);
			}
		}
}
function runJWloader(){
	if(disableGlobalJWplayers != true){
		if(courseCode == ''){
			courseCode = classroomCourseCode;
		}
		HTML5_video_scriptPath = globalURL + "jwplayer/HTML5_video.js";
		HTML5_video_scriptPath = "<script src="+HTML5_video_scriptPath+"></script>";
		document.write(HTML5_video_scriptPath);
	}
}

function mp3runJWsetup(){
	if(disableGlobalJWplayers != true){
		$('.jw').hide();
		document.write('<div id=audioFrame_'+placeHolderNum+'></div>');	
		if(typeof jwplayer == 'undefined'){
		urlDetector();
		HTML5_jwplayer_scriptPath = globalURL + "jwplayer/HTML5_jwplayers.js";
		HTML5_jwplayer_scriptPath = "<script src="+HTML5_jwplayer_scriptPath+"></script>";
		document.write(HTML5_jwplayer_scriptPath);
		}
	}
}
function mp3runJWloader(){
	if(disableGlobalJWplayers != true){
		if(courseCode == ''){
			courseCode = classroomCourseCode;
		}
		HTML5_audio_scriptPath = globalURL + "jwplayer/HTML5_audio.js";
		HTML5_audio_scriptPath = "<script src="+HTML5_audio_scriptPath+"></script>";
		document.write(HTML5_audio_scriptPath);
	}
}
/* --------------------- STOP JW Player scripts STOP --------------------- */

/* --------------------- START Replace Lightbox2 popup image with with fancybox popup image START --------------------- */

$(document).ready(function() {
	$('[rel]').each(function() {
		relValue = $(this).attr('rel');
		relCheck = relValue.search('lightbox');
		if(relCheck > -1){
			relValue = relValue.replace('lightbox','');
			relValue = relValue.replace('[','');//new
			relValue = relValue.replace(']','');//new
			$(this).addClass('popupimage');
			$(this).attr('rel',relValue);
		}
	});
});
/* --------------------- STOP Replace Lightbox2 popup image with with fancybox popup image STOP --------------------- */


var fancyboxLoaded;


function loadFancyBoxCode(){
if(fancyboxLoaded != true){	
	fancyboxLoaded = true;


/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
'"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
"function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
"image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);	
	}
setFancyBoxStyle();
}

function setFancyBoxStyle(){
	$("a.popupimage").fancybox({
		'titlePosition'	: 'inside',
		'transitionIn'	: 'fade',
		'transitionOut'	: 'fade',
		'autoScale'		: false
	});
	
var fancyBoxDivPatch_href;
var fancyBoxDivPatch_id;
var fancyBoxDivPatch_div;

	$("a.popupdiv").fancybox({
/*		'onStart':function(){
			fancyBoxDivPatch_start();
		},	
*/		'centerOnScroll'	: true,
		'titlePosition'		: 'inside',
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'autoScale'		: false,
		
		'onComplete':function(){
			fancyBoxDivPatch_complete();
		}
	
	});
	$("a.popupsite").fancybox({
		'titlePosition'		: 'inside',
		'width'				: "95%", 
		'height'			: "90%",
		'autoScale'		    : false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade',
		'type'				: 'iframe'
	});
	$("a.popupswf").fancybox({
		'titlePosition'		: 'inside',
		'padding'			: 10,
		'autoScale'		    : false,
		'transitionIn'		: 'fade',
		'transitionOut'		: 'fade'
	});
	
	
	$("a.popupdiv").click(function(){
		
		fancyBoxDivPatch_href = $(this).attr('href');
		fancyBoxDivPatch_id = fancyBoxDivPatch_href.replace('#','');
		fancyBoxDivPatch_div = $(fancyBoxDivPatch_href).html();
	})
	/*function fancyBoxDivPatch_start(){
		//Anything that we'd like to happen when popupdiv starts, but before the actual content is loaded
	}*/

	function fancyBoxDivPatch_complete(){
		if($('.fancybox-inline-tmp').exists()){
			$('.fancybox-inline-tmp').html(fancyBoxDivPatch_div).attr('id',fancyBoxDivPatch_id).removeClass('fancybox-inline-tmp').show();
			setFancyBoxStyle();
			$('#fancybox-wrap').animate({"top": ($(window).scrollTop() + 30) + "px"}, "slow" );	
		}
	}
}
/* ======================== START BUTTERFLY START ======================== */
var currentscrollpos;

/* ---------- START BUTTERFLY - Resize Events - START ---------- */
/**
 * Resize Events
 * @version 0.7
 * Changelog:
 *   * 0.5 Added API bind() function to make it easier to add listeners.
 *   * 0.6 Added support for window height changes
 *   * 0.7 Clean up outstanding bugs (duplicate event firing) and refactor.
 * 
 * There is no standard event for when a user resizes the text in their browser.
 * There is also no consistency between browser implementations of the window resize event
 * (some trigger as the window is resized, some only trigger as the user drops the resize handle).
 * This extension polls to detect these changes, and reports them immediately as custom events
 * ('x-text-resize' and 'x-window-resize') that other code can listen for and react to accordingly.
 * Resize Events also send an 'x-initial-size' event on load.
 * 
 * The custom events triggered are sent with emPixels, textHeight and windowWidth variables.
 * emPixels is a unit that estimates much space you have to work with but is resolution, text size
 * and zoom level independant. Use this value to base layout decisions on, and the layout will
 * always fit.
 * 
 * This extension is based on the 'text resize' events work of Lawrence Carvalho <http://www.alistapart.com/articles/fontresizing/>.
 * 
 * @author Lawrence Carvalho <carvalho@uk.yahoo-inc.com>
 * @author Andrew Ramsden <http://irama.org/>
 * 
 * @see http://irama.org/web/dhtml/resize-events/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 * @requires jQuery (tested with 1.4.2) <http://jquery.com/>
 */
var ResizeEvents = {
	baseTextHeight      : null,
	currentTextHeight   : null,
	baseWindowWidth     : null,
	baseWindowHeight    : null,
	currentWindowWidth  : null,
	currentWindowHeight : null,
	initialised         : false,
	intervalReference   : null,
	textSizeTestElement : null,
	eventElement        : jQuery(document),
	conf                : {
		textResizeEvent          : 'x-text-resize',
		windowResizeEvent        : 'x-window-resize',
		windowWidthResizeEvent   : 'x-window-width-resize',
		windowHeightResizeEvent  : 'x-window-height-resize',
		initialResizeEvent       : 'x-initial-sizes',
		pollFrequency            : 500,
		textSizeTestElId         : 'text-resize'
	}
};

 // start closure (protects variables from global scope)
(function($){
	
	
	/**
	 * A simple way to add a listener for resize events.
	 * 
	 * @param String events A space delimited list of events that should trigger this handler.
	 * @param function handler The handler function to be called when an event occurs.
	 */
	ResizeEvents.bind = function (events, handler) {
		
		// on DOMReady
			$(function(){
				// initialise if it hasn't happened already
					if (ResizeEvents.initialised !== true) {
						ResizeEvents.initialise();
					}
			});
		
		ResizeEvents.eventElement.bind(
			events,
			handler
		);
	};
	
	/**
	 * Initialisation
	 */
	ResizeEvents.initialise = function () {
		
		if (ResizeEvents.initialised === true) {
			return; // already initialised
		}
		
		// create text resize control element, and push it offscreen
			ResizeEvents.textSizeTestElement = $(
				'<span id="'+ResizeEvents.conf.textSizeTestElId+'" style="position: absolute; left: -9999px; '+
				'font-size: 100%; font-family: Courier New, mono; margin: 0; padding: 0;">&nbsp;</span>'
			).get(0);
			
		// append control element
			$('body').append(ResizeEvents.textSizeTestElement);
		
		// initialise variables
			windowWidthNow = $(window).width();
			windowHeightNow = $(window).height();
			textHeightNow = getTextHeight();
			ResizeEvents.baseTextHeight = textHeightNow;
			ResizeEvents.currentTextHeight = textHeightNow;
			ResizeEvents.baseWindowWidth = windowWidthNow;
			ResizeEvents.currentWindowWidth = windowWidthNow;
			ResizeEvents.baseWindowHeight = windowHeightNow;
			ResizeEvents.currentWindowHeight = windowHeightNow;
		
		// start polling
			if (ResizeEvents.intervalReference == null) {
				ResizeEventsPoll();
				ResizeEvents.intervalReference = window.setInterval('ResizeEventsPoll()', ResizeEvents.conf.pollFrequency);
			}
		
		// trigger onload
			ResizeEvents.eventElement.trigger(ResizeEvents.conf.initialResizeEvent, [emPixelNow, textHeightNow, windowWidthNow, windowHeightNow]);
				
		// flag initialisation complete
			ResizeEvents.initialised = true;
		
		
	};
	
	/**
	 * This function is called a number of times each second to check if text size 
	 * or window size has changed
	 */
	ResizeEventsPoll = function () {
		
		// get current values
			windowWidthNow = $(window).width();
			windowHeightNow = $(window).height();
			textHeightNow = getTextHeight();
			emPixelNow = windowWidthNow/textHeightNow;
			widthChanged = false;
		
		// test for window width change
			if (ResizeEvents.currentWindowWidth != windowWidthNow) {
				// Send custom event
					ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowWidthResizeEvent, [emPixelNow, textHeightNow, windowWidthNow, windowHeightNow]);
					ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowResizeEvent, [emPixelNow, textHeightNow, windowWidthNow, windowHeightNow]);
				// update current height
					ResizeEvents.currentWindowWidth = windowWidthNow;
					widthChanged = true;
			}
		
		// test for window height change
			if (ResizeEvents.currentWindowHeight != windowHeightNow) {
				// Send custom event
					ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowHeightResizeEvent, [emPixelNow, textHeightNow, windowWidthNow, windowHeightNow]);
					if (!widthChanged) { // don't send window-resize event twice
						ResizeEvents.eventElement.trigger(ResizeEvents.conf.windowResizeEvent, [emPixelNow, textHeightNow, windowWidthNow, windowHeightNow]);
					}
				// update current height
					ResizeEvents.currentWindowHeight = windowHeightNow;
			}
		
		
		// test for text size change
			if (ResizeEvents.currentTextHeight != textHeightNow) {
				// Send custom event (with new text size)
					ResizeEvents.eventElement.trigger(ResizeEvents.conf.textResizeEvent, [emPixelNow, textHeightNow, windowWidthNow, windowHeightNow]);
				// update current height
					ResizeEvents.currentTextHeight = textHeightNow;
			}
	};
	
	/**
	 * @return The current text height in pixels
	 */
	getTextHeight = function () {
		return ResizeEvents.textSizeTestElement.offsetHeight+'';
	};
	
})(jQuery); /* end closure */
/* ---------- STOP BUTTERFLY - Resize Events - STOP ---------- */
/* ---------- START BUTTERFLY - pxToEm - START ---------- */
/*-------------------------------------------------------------------- 
 * javascript method: "pxToEm"
 * by:
   Scott Jehl (scott@filamentgroup.com) 
   Maggie Wachs (maggie@filamentgroup.com)
   http://www.filamentgroup.com
 *
 * Copyright (c) 2008 Filament Group
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Description: Extends the native Number and String objects with pxToEm method. pxToEm converts a pixel value to ems depending on inherited font size.  
 * Article: http://www.filamentgroup.com/lab/retaining_scalable_interfaces_with_pixel_to_em_conversion/
 * Demo: http://www.filamentgroup.com/examples/pxToEm/	 	
 *							
 * Options:  	 								
 		scope: string or jQuery selector for font-size scoping
 		reverse: Boolean, true reverses the conversion to em-px
 * Dependencies: jQuery library						  
 * Usage Example: myPixelValue.pxToEm(); or myPixelValue.pxToEm({'scope':'#navigation', reverse: true});
 *
 * Version: 2.0, 08.01.2008 
 * Changelog:
 *		08.02.2007 initial Version 1.0
 *		08.01.2008 - fixed font-size calculation for IE
--------------------------------------------------------------------*/

Number.prototype.pxToEm = String.prototype.pxToEm = function(settings){
	//set defaults
	settings = jQuery.extend({
		scope: 'body',
		reverse: false
	}, settings);
	
	var pxVal = (this == '') ? 0 : parseFloat(this);
	var scopeVal;
	var getWindowWidth = function(){
		var de = document.documentElement;
		return self.innerWidth || (de && de.clientWidth) || document.body.clientWidth;
	};	
	
	/* When a percentage-based font-size is set on the body, IE returns that percent of the window width as the font-size. 
		For example, if the body font-size is 62.5% and the window width is 1000px, IE will return 625px as the font-size. 	
		When this happens, we calculate the correct body font-size (%) and multiply it by 16 (the standard browser font size) 
		to get an accurate em value. */
				
	if (settings.scope == 'body' && jQuery.browser.msie && (parseFloat(jQuery('body').css('font-size')) / getWindowWidth()).toFixed(1) > 0.0) {
		var calcFontSize = function(){		
			return (parseFloat(jQuery('body').css('font-size'))/getWindowWidth()).toFixed(3) * 16;
		};
		scopeVal = calcFontSize();
	}
	else { scopeVal = parseFloat(jQuery(settings.scope).css("font-size")); };
			
	var result = (settings.reverse == true) ? (pxVal * scopeVal).toFixed(2) + 'px' : (pxVal / scopeVal).toFixed(2) + 'em';
	return result;
};
/* ---------- STOP BUTTERFLY - pxToEm - STOP ---------- */
/* ---------- START BUTTERFLY - history - START ---------- */
/*
 * jQuery history plugin
 * 
 * The MIT License
 * 
 * Copyright (c) 2006-2009 Taku Sano (Mikage Sawatari)
 * Copyright (c) 2010 Takayuki Miwa
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function($) {
    var locationWrapper = {
        put: function(hash, win) {
            (win || window).location.hash = this.encoder(hash);
        },
        get: function(win) {
            var hash = ((win || window).location.hash).replace(/^#/, '');
            try {
                return $.browser.mozilla ? hash : decodeURIComponent(hash);
            }
            catch (error) {
                return hash;
            }
        },
        encoder: encodeURIComponent
    };

    var iframeWrapper = {
        id: "__jQuery_history",
        init: function() {
            var html = '<iframe id="'+ this.id +'" style="display:none" src="javascript:false;" />';
            $("body").prepend(html);
            return this;
        },
        _document: function() {
            return $("#"+ this.id)[0].contentWindow.document;
        },
        put: function(hash) {
            var doc = this._document();
            doc.open();
            doc.close();
            locationWrapper.put(hash, doc);
        },
        get: function() {
            return locationWrapper.get(this._document());
        }
    };

    function initObjects(options) {
        options = $.extend({
                unescape: false
            }, options || {});

        locationWrapper.encoder = encoder(options.unescape);

        function encoder(unescape_) {
            if(unescape_ === true) {
                return function(hash){ return hash; };
            }
            if(typeof unescape_ == "string" &&
               (unescape_ = partialDecoder(unescape_.split("")))
               || typeof unescape_ == "function") {
                return function(hash) { return unescape_(encodeURIComponent(hash)); };
            }
            return encodeURIComponent;
        }

        function partialDecoder(chars) {
            var re = new RegExp($.map(chars, encodeURIComponent).join("|"), "ig");
            return function(enc) { return enc.replace(re, decodeURIComponent); };
        }
    }

    var implementations = {};

    implementations.base = {
        callback: undefined,
        type: undefined,

        check: function() {},
        load:  function(hash) {},
        init:  function(callback, options) {
            initObjects(options);
            self.callback = callback;
            self._options = options;
            self._init();
        },

        _init: function() {},
        _options: {}
    };

    implementations.timer = {
        _appState: undefined,
        _init: function() {
            var current_hash = locationWrapper.get();
            self._appState = current_hash;
            self.callback(current_hash);
            setInterval(self.check, 100);
        },
        check: function() {
            var current_hash = locationWrapper.get();
            if(current_hash != self._appState) {
                self._appState = current_hash;
                self.callback(current_hash);
            }
        },
        load: function(hash) {
            if(hash != self._appState) {
                locationWrapper.put(hash);
                self._appState = hash;
                self.callback(hash);
            }
        }
    };

    implementations.iframeTimer = {
        _appState: undefined,
        _init: function() {
            var current_hash = locationWrapper.get();
            self._appState = current_hash;
            iframeWrapper.init().put(current_hash);
            self.callback(current_hash);
            setInterval(self.check, 100);
        },
        check: function() {
            var iframe_hash = iframeWrapper.get(),
                location_hash = locationWrapper.get();

            if (location_hash != iframe_hash) {
                if (location_hash == self._appState) {    // user used Back or Forward button
                    self._appState = iframe_hash;
                    locationWrapper.put(iframe_hash);
                    self.callback(iframe_hash); 
                } else {                              // user loaded new bookmark
                    self._appState = location_hash;  
                    iframeWrapper.put(location_hash);
                    self.callback(location_hash);
                }
            }
        },
        load: function(hash) {
            if(hash != self._appState) {
                locationWrapper.put(hash);
                iframeWrapper.put(hash);
                self._appState = hash;
                self.callback(hash);
            }
        }
    };

    implementations.hashchangeEvent = {
        _init: function() {
            self.callback(locationWrapper.get());
            $(window).bind('hashchange', self.check);
        },
        check: function() {
            self.callback(locationWrapper.get());
        },
        load: function(hash) {
            locationWrapper.put(hash);
        }
    };

    var self = $.extend({}, implementations.base);

    if($.browser.msie && ($.browser.version < 8 || document.documentMode < 8)) {
        self.type = 'iframeTimer';
    } else if("onhashchange" in window) {
        self.type = 'hashchangeEvent';
    } else {
        self.type = 'timer';
    }

    $.extend(self, implementations[self.type]);
    $.history = self;
})(jQuery);

/* ---------- STOP BUTTERFLY - history - STOP ---------- */
/* ---------- START BUTTERFLYn - butterfly - START ---------- */
/*
 * "Float like a butterfly"
 *              Muhammad Ali (a not-so-lightboxer).
 * 
 * jquery.butterfly is a fairly light-weight and fully accessible lightbox implementation for jQuery.
 * 
 * jquery.butterfly.js
 * @version 0.13
 * Changelog:
 *   *  0.1 Initial implementation.
 *   *  0.2: Support for window resizing added.
 *   *  0.3: Support added for callback functions (open/close/resize pre and post events). Error handling added for when lightbox target resource doesn't exist.
 *   *  0.4: Accessibility features added (controlling focus for user initiated lightboxes, keyboard support) - as per: http://irama.org/web/dhtml/lightbox/#accessibility
 *   *  0.5: Bug fixes for webkit. Blocked IE6 (no LB for them). Basic caption support (thanks to Ray Latchmanan). Gallery support.
 *   *  0.6: ARIA style keyboard support for navigating through galleries. Keyboard access now trapped in lightbox while lightbox is open. Support for preloading next image in galleries.
 *   *  0.7: Captions can be configured to come from link title attribute, link text (including any img alt text within), or not be displayed at all.
 *   *  0.8: Added ability to load pages in an iFrame (kicks in automatically for external-domain URLs).
 *   *  0.9: Support restored for IE6 (all thanks to the perseverance of github.com/bboyle - he has more patience than I). Added support for back button (through jquery.history.js)
 *   *  0.10: Set default close icon; fixing issues reported by jslint; minor jquery optimisations
 *   *  0.11: Fix for jQuery 1.8 compatibility issue
 *   *  0.12: Fix for captions extending outside lightbox (thanks to Roger Kowallis)
 *   *  0.13: Added option to treat links as image links (overriding automatic type detection). Handy for image URLs that don't have an image file extension (like Google Charts API URLs)
 *
 * @author Andrew Ramsden <http://irama.org/>
 * @see http://irama.org/web/dhtml/butterfly/
 * @license GNU GENERAL PUBLIC LICENSE (GPL) <http://www.gnu.org/licenses/gpl.html>
 * 
 * @requires jQuery (tested with 1.8.3) <http://jquery.com/>
 * @requires jQuery jARIA plugin <http://outstandingelephant.com/jaria/>
 * 
 * @optional (but reccommended) jQuery ResizeEvents plugin <http://irama.org/web/dhtml/resize-events/>
 * @optional (but reccommended) jQuery Got Style? plugin <http://irama.org/web/dhtml/got-style/>
 * @optional (but reccommended) jQuery ARIA keyboard navigation plugin <http://irama.org/web/dhtml/aria/key-nav/>
 *
 */
jQuery.butterfly = {};

jQuery.butterfly.defaultOptions = {
	contentDefaultWidth: null, // For content (can be em, % or px) - null default means 50em if pxToEm is available or 700px otherwise (a good line length for legibility)
	contentDefaultHeight: '100%', // For content (can be em, % or px)
	mediaMaxWidth: '100%', // For images (can be em, % or px)
	mediaMaxHeight: '100%', // For images (can be em, % or px)
	treatAsMedia: false, // Set to true for content to be resized as if it's media (good for video content)
	lightBoxMargin: null, // Margin around screen (can be em, % or px) - null default === 2em if pxToEm is available or 20px otherwise
	animateResize: true,
	animationSpeed: 150,
	useIframe: 'autodetect', // load contents in an iframe (good for cross-domain URLs). Options are: 'autodetect' (will load iframe for external URLs), true (will load in an iframe). false (will atempt to load with ajax).
	collapseHeightWhenPossible: true, // When content is shorter than available height, collapse height of lightbox
	reuseFragment: false, // When using a fragment from the same page as the link, reuse the same DOM nodes (persisting their state) or clone a new copy?
	closeButton: true, // Should we have a close button?
	closeButtonImage: 'close.png', // Set to the path of your close button image
	closeButtonCorner: 'tr', // Top left 'tl' or top right 'tr' or bottom left (bl) or bottom right (br) - top left is the most intuitive option that doesn't overlap scrollabrs
	clickOverlayCloses: true, // Will clicking the overlay layer (the dark tinted area) close the lightbox?
	preloadLoadingImage: '', // Specify an image path here and it will be preloaded
	preloadGalleryControlsSprite: '', // Specify an image path here and it will be preloaded
	galleryControlWidth: 49, // width of each control (default based on sprite that ships with butterfly)
	galleryControlHeight: 85, // height of each control (default based on sprite that ships with butterfly)
	galleryMode: 'rel', // Allow navigation between lightboxed images? Options are: rel (all links that have the same 'rel' attribute), 'container' (all links within the one container), 'all' (all linked images), or nothing '' (don't use galleries)
	galleryContainers: '', // CSS selectors specifying elements that contain linked images to form discrete galleries. e.g: '.gallery-pets, #gallery-flowers'
	galleryLoops: false, // When you reach the end of the gallery, should 'next' take you back to the begining? (and vice versa)
	captionMode: 'title', // Whether to use captions, and if so, where to grab the caption text from? Options are: 'title' (the title attribute of the link), 'text' (any text within the link, including image alt text), or nothing '' (don't display captions)
	preloadNextGalleryImage: true, // Should the next lightbox be preloaded if it's an image?
	zoomFromClicked: false, // Experimental
	callbackPreOpen: null, // Six callback functions can be defined that will be called at various points in the opening, closing and resizing of lightboxes
	callbackPreResize: null,
	callbackPostResize: null,
	callbackPostOpen: null,
	callbackPreClose: null,
	callbackPostClose: null,
	treatAsImage: false // If set to true, will treat all links as image links (overriding automatic type detection).
};

jQuery.butterfly.conf = {
	overlayOpacity: '.7',
	lightboxClass: 'lightbox',
	lightboxLinkSelector: 'a.lightbox'
};

jQuery.butterfly.linkCount = 0;

/**
 * Standard key mappings
 */
	DOM_VK_END    = 35;
	DOM_VK_HOME   = 36;
	DOM_VK_LEFT   = 37;
	DOM_VK_UP     = 38;
	DOM_VK_RIGHT  = 39;
	DOM_VK_DOWN   = 40;
	DOM_VK_ESCAPE = 27;

(function( $, ResizeEvents ) {// start closure
	'use strict';


	// functions and vars
	var resizeLightBox, closeLightBox, initLightBox, openLightBox, loadLightBoxContent,
		lightBoxKeypress, overlayClicked, loadLightBoxComplete, galleryControlsClick,
		isImage, parsePixels, findOffsetToCentre, checkForContent;

	
	// helper functions

	/**
	 * Get the keycode of an event
	 */
	function getKeyCode(evt) {
		evt = evt || window.event;
		
		if (evt.keyCode) {
			return evt.keyCode;
		} else if (evt.which) {
			return evt.which;
		}
		return null;
	}
	
	/**
	 * jQuery plugin that returns the text nodes within the target element, combined/concatenated with any alt text.
	 */
	$.fn.accessibleText = function() {
		if (this.is('img')) {
			return this.attr( 'alt' );
		} else if (this.is('input')) {
			return this.attr( 'value' );
		} else {
			return $.map( this.contents(), function( domElement ) {
				if ( domElement.nodeType === 3 ) {
					return domElement.data;
				} else if ( domElement.nodeType === 1 ) {
					var $element = $( domElement );
					if ( $element.is( 'img, input' ) || $element.find( 'img[alt], input[value]' ).length > 0 ) {
						return $element.accessibleText();
					} else {
						return $element.text();
					}
				}
			}).join( '' );
		}
	};


	// On DOMLoad
	$(function() {
		/*// IE6 fails, bail here.
			if ($.browser.msie && $.browser.version < 7) {
				return;
			}
		*/
		
		// If ResizeEvents plugin is available, listen for resize events
		if (typeof ResizeEvents !== 'undefined') {
			$(this).each(function(){
				ResizeEvents.bind (
					'x-text-resize x-window-resize', // no need to catch 'x-initial-sizes', lightbox not open initially
					resizeLightBox
				);
			});
		}
		
		// Create containers
		$( document.body )
			.append( '<div id="jb-overlay"></div><div id="jb-window"><div id="jb-window-inner"><div id="jb-window-content" style="width: auto; height: auto;" tabindex="0"></div></div></div>')
			.bind( 'keydown', lightBoxKeypress )
		;
		$( '#jb-overlay' )
			.fadeTo( 0, $.butterfly.conf.overlayOpacity, function() {
				// hide when animation complete
				$( this ).hide();
			})
		;
		$( '#jb-window' )
			.hide()
			.click( overlayClicked )
		;
		$( '#jb-window-inner' )
			.centre()
		;
		$( '#jb-window-content' )
			.css({
				overflow: 'hidden'
			})
			.hide()
		;
		
		$.history.init(
			function( hash ){
				if( hash === '' ) {
					closeLightBox.apply();
				} else {
					// restore the state from hash
					if( /^!/.test( hash )) {
						hash = hash.substring( 1 );
						$( '#' + hash ).trigger( 'click', [/*storeState*/false] );
					}
				}
			},
			{ unescape: ',/' }
		);
	});


	$.fn.butterfly = function( options ) {
		
		// IE6 fails, bail here.
			/*if ($.browser.msie && $.browser.version < 7) {
				return;
			}*/
		
		options = typeof options !== 'undefined' ? options : {};

		// Pre-load images
		if (options.closeButtonImage) {
			$('<img src="'+options.closeButtonImage+'" alt="" />');
		}
		if (options.preloadLoadingImage) {
			$('<img src="'+options.preloadLoadingImage+'" alt="" />');
		}
		if (options.preloadGalleryControlsSprite) {
			$('<img src="'+options.preloadGalleryControlsSprite+'" alt="" />');
		}

		// Initialise lightbox links for each match
		return this.each(function () {
			initLightBox.apply(this, [options]);
		});
	};


	initLightBox = function( options ) {
		var pxToEmExists = (typeof Number.prototype.pxToEm !== 'undefined') ? true : false;
		
		// Merge runtime options with defaults
		// Note: The first argument sent to extend is an empty object to
		// prevent extend from overriding the default $.AKN.defaultOptions object.
			options = (typeof options === 'undefined')
				? $.butterfly.defaultOptions
				: $.extend({}, $.butterfly.defaultOptions, options)
			;
		
		if (options.lightBoxMargin === null) {
			// if no margin specified, use 2em if pxToEm available, otherwise use 20px
			options.lightBoxMargin = pxToEmExists ? '2em' : '20px' ;
		}
		if (options.contentDefaultWidth === null) {
			// if no default width specified, use 50em if pxToEm available, otherwise use 700px (good line lengths for legibility)
			options.contentDefaultWidth = pxToEmExists ? '50em' : '700px' ;
		}
		
		// Assign an id if none exists
			if (typeof $(this).attr('id') === 'undefined' || $(this).attr('id') === '') { // cater for jquery 1.6 and previous versions
				$(this).attr('id', $.butterfly.conf.lightboxClass+'-uid-'+$.butterfly.linkCount);
			}
			options.linkID = $(this).attr('id');
			$.butterfly.linkCount++;
		
		$(this).data('options', options);
		$(this).addClass($.butterfly.conf.lightboxClass);
		$(this).click(openLightBox);
	};


	openLightBox = function( e, storeState ) {
		var options, originalTrigger, href, location, title, linkText, thisLink, selector, previousOptions;
		
		if (typeof e !== 'undefined') {
			e.preventDefault(); // so that links aren't followed
		}
		
		// Add state to history
		storeState = (typeof storeState !== 'undefined') ? storeState : true ;
		if (storeState) {
			$.history.load('!'+$(this).attr('id'));
			return; // This function will be called again by history.load after storing the state in the hash
		}
		
		// when opening, overflow should always be set to hidden (it is changed as appropriate later once the content loads)
		$('#jb-window-inner').css('overflow','hidden');

		// if lightbox is open already and fragment was reused... clean up
		if ($('#jb-overlay').is(':visible')) {
			options = $('#jb-overlay').data('options');
			if (options.linkType === 'fragment' && options.reuseFragment) {
				$('.jb-placeholder').remove();
			}
			originalTrigger = options.originalTrigger;
		} else {
			// if opening for the first time, set the original trigger
			originalTrigger = this;
		}

		// get target content
		location = window.location.href.replace( /#.*$/, '' );
		href = $(this).attr('href');
		if ( href.indexOf( location ) === 0 ) {
			href = href.substring( location.length );
		}
		title = $(this).attr('title');
		linkText = $(this).accessibleText();
			
		// get options
		options = $(this).data('options');
		options.href = href;
		options.title = title;
		options.linkText = linkText;
		options.trigger = this; // current trigger element
		options.originalTrigger = originalTrigger; // original trigger element

		// custom class?
		document.getElementById( 'jb-window-inner' ).className = options.className || '';

		if (options.treatAsImage || isImage(href)) {
			options.linkType = 'image';
		} else if (href.substring(0,1) === '#') {
			options.linkType = 'fragment';
		} else if (options.useIframe === true || (options.useIframe !== false && this.hostname !== window.location.hostname)) {
			options.linkType = 'iframe';
			options.useIframe = true;
			options.contentDefaultWidth = '100%';
			options.contentDefaultHeight = '100%';
		} else {
			options.linkType = 'ajax';
		}

		// run preOpen callback function
		if (options.callbackPreOpen !== null && typeof options.callbackPreOpen === 'function') {
			options.callbackPreOpen.apply(this);
		}

		// add/remove close button
		if (options.closeButton) {
			if ($('#jb-close-button').length === 0) {
				$('#jb-window').prepend('<a href="#" id="jb-close-button"><img src="'+options.closeButtonImage+'" alt="Close lightbox" /></a>');
				$('#jb-close-button').click(closeLightBox);
			}
		} else {
			$('#jb-close-button').remove();
		}

		// add class if overlay can be clicked to close
		if (options.clickOverlayCloses) {
			$('#jb-window').addClass('reactive');
		} else {
			$('#jb-window').removeClass('reactive');
		}

		// Find and store details of gallery (if configured)
		thisLink = $(this);
		if (options.galleryContainers !== '') {
			options.galleryMode = 'container';
		}
		options.gallerySelector = '';
		switch (options.galleryMode) {
			case 'all':
				options.gallerySelector = $.butterfly.conf.lightboxLinkSelector;
			break;
			case 'container':
				$.each( options.galleryContainers.split( ',' ), function() {
					selector = this + ' ' + $.butterfly.conf.lightboxLinkSelector;
					if ( thisLink.is( selector )) {
						options.gallerySelector = selector;
						return false; // we found the container, break loop
					}
				});
			break;
			// default: do nothing
		}
		if (options.gallerySelector === '' && $(this).attr('rel') !== '') {
			options.gallerySelector = $.butterfly.conf.lightboxLinkSelector+'[rel="'+$(this).attr('rel')+'"]';
		}

		// grab previousOptions
		previousOptions = $('#jb-overlay').data('options') || {};

		// assign link options to lightbox
		$(this).data('options', options);
		$('#jb-overlay').data('options', options);

		// Temporarily focus here, until loading is complete
		$('#jb-window').append('<p id="jb-loading">Loading...</p>');
		$('#jb-loading').attr('tabindex', '0').focus();
		
		if ($('#jb-overlay').is(':visible')) {
			// if lightbox is open:
			
			// cleanup after fragment positioning
			if (previousOptions.linkType === 'fragment' && previousOptions.reuseFragment) {
				$('.jb-placeholder').after($(previousOptions.href));
				$('.jb-placeholder').remove();
				$(previousOptions.href).disableFocussableElements();
			}
			
			// hide/clear content
			$('#jb-window-content')
				.hide()
				.empty()
			;
			$('#jb-window').addClass('loading');
			
			loadLightBoxContent.apply(this, [loadLightBoxComplete]);
				
		} else {
			// if lightbox is closed:
			// Disable focussable elements
			$( document.body ).disableFocussableElements( '#jb-window *' );
				
			// hide button
			$('#jb-close-button').hide();
			
			// hide gallery controls
			$('#jb-gallery-controls').hide();
				
			// show overlay
			$('#jb-overlay').fadeIn(options.animationSpeed).centre();
			
			// open small lightbox with loading spinner
			$('#jb-window')
				.addClass('loading')
				.show()
			;
			
			// to zoom or not to zoom?
			if (options.zoomFromClicked) {
				// align window with clicked element (for 'zoom in' effect)
				$('#jb-window-inner').css({
					top: $(this).offset().top,
					left: $(this).offset().left,
					width: $(this).width(),
					height: $(this).height()
				});
			} else {
				// just centre
				$('#jb-window-inner')
					.css({
						width: '100px',
						height: '100px'
					})
					.centre()
				;
			}
			
			// load new content to hidden layer
			loadLightBoxContent.apply(this, [loadLightBoxComplete]);
		}
		// for any images in the lightbox, if they are now physically smaller than the relevant max-size, add click-to-zoom capability
	};


	loadLightBoxComplete = function(){
		// once loaded
			// init options
			var options = $('#jb-overlay').data('options');
			
			// restore focussable elements inside content (in case content cloned from current page)
			$('#jb-window').restoreFocussableElements();
			
			// remove spinner
			$('#jb-window').removeClass('loading');
			
			
			// Redundant settimeout for webkit, cause otherwise dimensions are 0 when image loaded from cache. Thanks JKS! <http://stackoverflow.com/users/144149/jks>
			// @see http://stackoverflow.com/questions/318630/get-real-image-width-and-height-with-javascript-in-safari-chrome#answer-4909227
			setTimeout(function(){
				
				// Establish appropriate classes for new content type before fade in
				$('#jb-window').removeClass('type-media type-image type-fragment type-ajax');
				switch (options.linkType) {
					case 'image':
						$('#jb-window').addClass('type-image type-media');
						$('#jb-window-inner').css('overflow','hidden');
					break;
					case 'fragment':
						$('#jb-window').addClass('type-fragment');
						$('#jb-window-inner').css('overflow','auto');
					break;
					case 'iframe':
						$('#jb-window').addClass('type-iframe');
						$('#jb-window-inner').css('overflow','hidden');
					break;
					case 'ajax':
						$('#jb-window').addClass('type-ajax');
						$('#jb-window-inner').css('overflow','auto');
					break;
				}
				if (options.treatAsMedia) {
					$('#jb-window').addClass('type-media');
				}
				
				// resize
				resizeLightBox.apply(this, [function(){
					var nextControl;
						
					if (options.linkType === 'iframe') {
						$('#jb-window-content').css('visibility', 'visible');
					}
					// fade in new content
					$('#jb-window-content').fadeIn(options.animationSpeed, function(){
						
						// set focus to start of lightbox content
						$('#jb-window-content')
							//.attr('tabindex',0) // add to tab index (now occurs during initialisation)
							.focus() // set focus
						;
						
						// Remove temporary loading message
						$('#jb-loading').remove();
					
						// run postOpen callback function
						if (options.callbackPostOpen !== null && typeof options.callbackPostOpen === 'function') {
							options.callbackPostOpen.apply(this);
						}
						
						// preload next gallery image?
						nextControl = $('#jb-gallery-next');
						if (
							options.preloadNextGalleryImage && 
							nextControl.length > 0 && 
							nextControl.is(':visible') && 
							nextControl.attr('href') !== '#' && 
							isImage(nextControl.attr('href'))
						) {
							$('<img src="'+nextControl.attr('href')+'" alt="" />');
						}
					});
				}]);
			}, 0);
	};


	resizeLightBox = function( callback ) {

		var options = $('#jb-overlay').data('options'),
			lbMargin, availableWidth, availableHeight, contentDefaultWidth, contentDefaultHeight, mediaMaxWidth, mediaMaxHeight, w, h,
			reductionRatio, prevWidth, topLeft, animationSpeed, buttonWidth, buttonHeight, buttonLeft, buttonTop, prevTop, prevLeft, nextTop, nextLeft;

		if (typeof options === 'undefined') {
			return; // options haven't been assigned to lightbox overlay yet
		}

		lbMargin = parseInt(parsePixels(options.lightBoxMargin), 10);
		
		availableWidth = $('#jb-window').width() - (lbMargin * 2);
		availableHeight = $('#jb-window').height() - (lbMargin * 2);
		
		// find current default/max dimensions (convert to pixels if necessary)
		contentDefaultWidth = parsePixels(options.contentDefaultWidth, availableWidth);
		contentDefaultHeight = parsePixels(options.contentDefaultHeight, availableHeight);
		mediaMaxWidth = parsePixels(options.mediaMaxWidth, availableWidth);
		mediaMaxHeight = parsePixels(options.mediaMaxHeight, availableHeight);
		
		
		// run preResize callback function
			if (options.callbackPreResize !== null && typeof options.callbackPreResize === 'function') {
				options.callbackPreResize.apply($('#jb-window'), [availableWidth, availableHeight, contentDefaultWidth, contentDefaultHeight, mediaMaxWidth, mediaMaxHeight]);
			}

		/*// IE6 needs help with resizing the overlay and window
		if (
			$.browser.msie && $.browser.version === 6
		) {
			
			$('#jb-overlay, #jb-window').css({
				position: 'absolute',
				top: 0-$( document.body ).css('margin-top'),
				left: 0-$( document.body ).css('margin-left'),
				width: $(window).width(),
				height: $(window).height()
			});
			
		}
			*/

		if (options.linkType === 'image' || options.treatAsMedia) {
			
			
			
			// measure content size
			w = $('#jb-window-content').lightBoxContentWidth();
			h = $('#jb-window-content').lightBoxContentHeight();
			
				
			// compare dimensions against max width and height
			if (w > mediaMaxWidth) {
				reductionRatio = w / mediaMaxWidth;
				w = mediaMaxWidth;
				h = h / reductionRatio;
				// $.debug('w ratio = '+reductionRatio);
			}
			if (h > mediaMaxHeight) {
				reductionRatio = h / mediaMaxHeight;
				h = mediaMaxHeight;
				w = w / reductionRatio;
				// $.debug('h ratio = '+reductionRatio);
			}
			
			// compare dimensions against available width and height
			if (w > availableWidth) {
				reductionRatio = w / availableWidth;
				w = availableWidth;
				h = h * reductionRatio;
				// $.debug('w ratio = '+reductionRatio);
			}				
			if (h > availableHeight) {
				reductionRatio = h / availableHeight;
				h = availableHeight;
				w = w * reductionRatio;
				// $.debug('h ratio = '+reductionRatio);
			}
			// $.debug('max img width = '+options.mediaMaxWidth);
			// $.debug('max img height = '+options.mediaMaxHeight);
				
		} else if (options.linkType === 'iframe') {
			
			w = contentDefaultWidth;
			h = contentDefaultHeight;
			
		} else {
			
			// not an image or treat as media (must be content fragment)
			
			// $.debug('contentDefaultWidth = '+options.contentDefaultWidth);
			// $.debug('contentDefaultHeight = '+options.contentDefaultHeight);
			
			// measure content width
			w = $('#jb-window-content').lightBoxContentWidth();
		
			if (
				contentDefaultWidth === '' ||
				contentDefaultWidth === '100%' ||
				availableWidth < contentDefaultWidth
			) {
				w = availableWidth;
			} else {
				w = contentDefaultWidth;
			}
			
			if (options.collapseHeightWhenPossible) {
				
				// set new width temporarily
				prevWidth = $('#jb-window-inner').width();
				//$('#jb-window-inner').width(w); // not kicking in fast enough, use animate to lock in new width
				$('#jb-window-inner').animate({width: w}, 0);
					
				// measure height
				h = $('#jb-window-content').lightBoxContentHeight( false );
					
				// set width back to previous value
				$('#jb-window-inner').width(prevWidth);
				
				if (
					availableHeight < h
				) {
					h = availableHeight;
				// } else {
					// do nothing
					// h = contentDefaultHeight;
				}
				
			} else {
				
				// same height for all content boxes (based on contentDefaultHeight)
				h = $('#jb-window-content').lightBoxContentHeight();
				if (
					contentDefaultHeight === '' ||
					contentDefaultHeight === '100%' ||
					availableHeight < contentDefaultHeight
				) {
					h = availableHeight;
				} else {
					h = contentDefaultHeight;
				}
			}
		}
		
		// $.debug('availableWidth = '+availableWidth);
		// $.debug('availableHeight = '+availableHeight);
		// $.debug('final w = '+w);		
		// $.debug('final h = '+h);
				
		topLeft = findOffsetToCentre(w, h);
		
		// if not animating resize, set speed to 0
		animationSpeed = options.animateResize ? options.animationSpeed : 0;
		
		$('#jb-close-button').hide();
		$('#jb-gallery-controls').hide();
		
		if (options.linkType === 'iframe') {
			$('#jb-window-inner iframe').css('visibility','hidden');
		}
		
		$('#jb-window-inner').animate({
			'width' : w,
			'height' : h,
			'left' : topLeft[1],
			'top' : topLeft[0]
		}, animationSpeed, 0, function() {
			
			options = $('#jb-overlay').data('options');
			w = $('#jb-window-inner').width();
			h = $('#jb-window-inner').height();
			
			
			// Show iframe
			if (options.linkType === 'iframe') {
				$('#jb-window-inner iframe')
					.width(w)
					.height(h)
				;
				$('#jb-window-inner iframe').css('visibility','visible');
			}
			
			// Show close button
			if ($('#jb-close-button').length > 0) {
				buttonWidth = parseInt($('#jb-close-button').width(), 10);
				buttonHeight = parseInt($('#jb-close-button').height(), 10);
				
				switch (options.closeButtonCorner) {
					case 'tr':
						buttonLeft = topLeft[1] + w - buttonWidth/2;
						buttonTop = topLeft[0] - buttonHeight/2;
					break;
					case 'br':
						buttonLeft = topLeft[1] + w - buttonWidth/2;
						buttonTop = topLeft[0] + h - buttonHeight/2;
					break;
					case 'bl':
						buttonLeft = topLeft[1] - buttonWidth/2;
						buttonTop = topLeft[0] + h - buttonHeight/2;
					break;
					default:
					// case 'tl':
						buttonLeft = topLeft[1] - buttonWidth/2;
						buttonTop = topLeft[0] - buttonHeight/2;
				}
				
				$('#jb-close-button')
					.css({
						position: 'absolute',
						'z-index': '999999',
						left: buttonLeft,
						top: buttonTop
					})
					.show()
				;
			}

			// Are gallery controls relevant?
			if ($('#jb-gallery-controls').is('.active')) {
				// Position gallery controls
					prevTop = topLeft[0] + h/2 - options.galleryControlHeight/2;
					prevLeft = topLeft[1] - options.galleryControlWidth;
					$('#jb-gallery-prev').css({top: prevTop, left: prevLeft});
					
					nextTop = topLeft[0] + h/2 - options.galleryControlHeight/2;
					nextLeft = topLeft[1] + w;
					$('#jb-gallery-next').css({top: nextTop, left: nextLeft});
					
				// Show gallery controls
					$('#jb-gallery-controls')
						//.fadeIn()
						.show() // faster!
					;
			}
			
			// run postResize callback function
			if (options.callbackPostResize !== null && typeof options.callbackPostResize === 'function') {
				options.callbackPostResize.apply($('#jb-window'), [availableWidth, availableHeight, contentDefaultWidth, contentDefaultHeight, mediaMaxWidth, mediaMaxHeight]);
			}
			
			if (typeof callback !== 'undefined' && typeof callback.apply !== 'undefined') {
				callback.apply();
			}
		});
	};


	loadLightBoxContent = function( callback ) {
		
		var options = $( '#jb-overlay' ).data( 'options' ),
			href = options.href,
			caption, gallerySet, prevControl, nextControl, prevLink, nextLink,
			lbMargin, availableWidth, availableHeight, contentDefaultWidth, contentDefaultHeight, ajaxHref;
		
		// Populate caption
		switch (options.captionMode) {
			case 'title':
				caption = options.title ? '<p class=\'jb-caption\'><span>' + options.title + '</span></p>':'';
			break;
			case 'text':
				caption = options.linkText ? '<p class=\'jb-caption\'><span>' + options.linkText + '</span></p>':'';
			break;
			default:
				caption = '';
			break;
		}

		
		// remove previous error states
		$('#jb-window').removeClass('error-no-content');
		
		// Setup/adjust gallery (next/prev) links
		// Find the gallery set
		gallerySet = $(options.gallerySelector);
			
		$('#jb-gallery-controls').removeClass('active');

		if (gallerySet.length > 1 && gallerySet.isInSet('#'+options.linkID)) {
			
			// Setup the HTML for the gallery controls
			if ($('#jb-gallery-controls').length === 0) {
				$('#jb-window').append('<div id="jb-gallery-controls"></div>');
				prevControl = $('<a id="jb-gallery-prev" href="#">Previous</a>').click(galleryControlsClick);
				nextControl = $('<a id="jb-gallery-next" href="#">Next</a>').click(galleryControlsClick);
				$('#jb-gallery-controls').append(prevControl).append(nextControl);
				prevControl.add(nextControl).css({
					position: 'absolute',
					'z-index': '99999',
					display: 'block',
					overflow: 'hidden'
				});
			} else {
				prevControl = $('#jb-gallery-prev');
				nextControl = $('#jb-gallery-next');
				prevControl.add(nextControl)
					.removeClass('disabled')
					.attr('tabindex', '0')
					.attr('title', '')
					.show()
				;
			}
			$('#jb-gallery-controls').hide();
			$('#jb-gallery-controls').addClass('active');
			
			
			// Find previous link
			prevLink = gallerySet.prevInSet('#'+options.linkID);
			if (prevLink === false) {
				if (options.galleryLoops) {
					prevLink = gallerySet.lastInSet();
				} else {
					prevLink = $('<a href="#" id=""></a>');
					prevControl
						.addClass('disabled')
						.attr('tabindex', '-1')
						// hide it or it traps mouse clicks
						.hide()
					;
				}
			}
			prevControl
				.attr('href', prevLink.attr('href'))
				.data('linkID', prevLink.attr('id'))
				.attr('title', $.trim( prevLink.accessibleText() ))
			;
			
			// Find next link
			nextLink = gallerySet.nextInSet('#'+options.linkID);
			if (nextLink === false) {
				if (options.galleryLoops) {
					nextLink = gallerySet.firstInSet();
				} else {
					nextLink = $('<a href="#" id=""></a>');
					nextControl
						.addClass('disabled')
						.attr('tabindex', '-1')
						// hide it or it traps mouse clicks
						.hide()
					;
				}
			}
			nextControl
				.attr('href', nextLink.attr('href'))
				.data('linkID', nextLink.attr('id'))
				.attr('title', $.trim( nextLink.accessibleText() ))
			;
					
		} else {
			$('#jb-gallery-controls').hide();
		}
		
		switch (options.linkType) {
			case 'fragment': // internal page fragment
				
				if (options.reuseFragment) {
					$(href).after('<span class="jb-placeholder"></span>');
					$('#jb-window-content').empty().append($(href)); // href becomes a selector for an id fragment
				} else {
					$('#jb-window-content').empty().append($(href).clone(true));
				}
				
				checkForContent.apply(this, [options.linkType, href]);
				callback.apply(this);
			break;

			case 'image': // link to image
					
					$('#jb-window-content').empty().append(
						'<img src="'+href+'" alt="" style="max-width: 100%; max-height: 100%; float: left;" />'+caption
					);
					$('#jb-window-content img')
						.error(function(){
							checkForContent.apply(this, [options.linkType, href, callback]);
						})
						.data('full-width', '')
						.data('full-height', '')
						.load(callback)
					;
			break;

			case 'iframe': // link to iframe URL
					$('#jb-window-content').show().css('visibility', 'hidden');
					$('#jb-window-content').empty().append(
						'<iframe src="'+href+'" title="'+caption+'" width="100%" height="1000" />'
					);
					$('#jb-window-content').css('visibility', 'hidden');
					
					lbMargin = parseInt(parsePixels(options.lightBoxMargin), 10);
					availableWidth = $('#jb-window').width() - (lbMargin * 2);
					availableHeight = $('#jb-window').height() - (lbMargin * 2);
					// find current default/max dimensions (convert to pixels if necessary)
					contentDefaultWidth = parsePixels(options.contentDefaultWidth, availableWidth);
					contentDefaultHeight = parsePixels(options.contentDefaultHeight, availableHeight);
					
					$('#jb-window-content > iframe')
						.width(contentDefaultWidth)
						.height(contentDefaultHeight)
						.error(function(){
							checkForContent.apply(this, [options.linkType, href, callback]);
						})
						.load(callback)
					;
			break;

			default:
			// case 'ajax':
			// case '': // link to external page (or fragment of a page)
				// ajax call on remote file
				$.ajaxSetup ({
					cache: true
				});
				if (href.indexOf('#') !== -1) {
					ajaxHref = href.split('#').join(' #');
				} else {
					ajaxHref = href;
				}
				$('#jb-window-content').empty().load(ajaxHref, function(){
					checkForContent.apply(this, [options.linkType, href]);
					callback.apply(this);
				});
		}
	};
	
	
	checkForContent = function( linkType, href, callback ) {
		// check if no content loaded
		var wasError = false,
			options;
			
		// checkForContent only called for images on .error()
		// otherwise, if no children() exist
		if (linkType === 'image' || $('#jb-window-content').children().length === 0) {
			wasError = true;
		}

		if (wasError) {
			options = $('#jb-overlay').data('options');
			options.linkType = 'fragment';
			options.treatAsMedia = false;
			$('#jb-overlay').data('options', options);
			$('#jb-window')
				.removeClass('type-image type-media')
				.addClass('type-fragment error-no-content')
			;
			$('#jb-window-content').empty().append('<p>There was an error loading lightbox content. <strong>'+$(options.trigger).text()+'</strong> (<samp>'+href+'</samp>) could not be found.</p>');
		}
		if (typeof callback !== 'undefined') {
			callback.apply(this);
		}
	};
	

	closeLightBox = function( evt ) {
		var options, href, originalTriggerEL;

		if ( evt ) {
			evt.preventDefault(); // prevent click from following link
		}
		
		if ($('#jb-window:hidden').length) {
			return; // Already closed, do nothing
		}
		
		options = $('#jb-overlay').data('options');
		href = options.href;
		
		// run preClose callback function
		if (options.callbackPreClose !== null && typeof options.callbackPreClose === 'function') {
			options.callbackPreClose.apply(options.trigger);
		}
		
		// cleanup after fragment positioning
		if (options.linkType === 'fragment' && options.reuseFragment) {
			$('.jb-placeholder').after($(href));
			$('.jb-placeholder').remove();
		}
		
		
		// Restore all focussable elements
		$( document.body ).restoreFocussableElements();
		
		$('#jb-overlay').fadeOut(options.animationSpeed);
		$('#jb-window').hide();
		$('#jb-window-content').hide();
		
		// return focus to original trigger element
		originalTriggerEL = $(options.originalTrigger);
		if (typeof originalTriggerEL.attr('tabindex') === 'undefined') {
			originalTriggerEL.attr('tabindex',0);
		}
		originalTriggerEL.focus();
		
		// Remove temporary loading message
		$('#jb-loading').remove();
		
		// run postClose callback function
		if (options.callbackPostClose !== null && typeof options.callbackPostClose === 'function') {
			options.callbackPostClose.apply(options.trigger);
		}

		// TODO pop history? ... if this was a gallery, pop the entire gallery?
		// window.history.back();
	
		// TODO
		// load '' = jump to top of screen
		// load '!' = no jump, back links do not work
		$.history.load( '' );
	};
	
	
	/**
	 * A plugin to measure the width of an element accurately (even if it is hidden)
	 */
	$.fn.lightBoxContentWidth = function () {
		
		var jbWindow = this.closest('#jb-window'),
			jbWindowInner = $('#jb-window-inner'),
			isImageType = jbWindow.hasClass('type-media') ? true : false,
			isImageMedia = jbWindow.hasClass('media-image') ? true : false,
			currentWidth = jbWindowInner.width(),
			currentHeight = jbWindowInner.height(),
			currentLeft = jbWindowInner.css('left'),
			currentTop = jbWindowInner.css('top'),
			fullWidth
		;
		
		// relax size for measurement
		if (
			$.browser.msie &&
			$.browser.version === 7 &&
			isImageType &&
			isImageMedia && 
			this.find('img').outerWidth(true) === 0 // IE7 width === 0 on initial load
		) { // only works with '100%' for IE7 on initial load
			jbWindowInner.css({
				width: '100%',
				height: '100%',
				left:0,
				top:0
			});
		} else { // must use 'auto' for all other situations
			jbWindowInner.css({
				width: 'auto',
				height: 'auto',
				left:0,
				top:0
			});
		}
		
		
		// if element is hidden, unhide it, then measure
		if ( this.css('display') === 'none') {
						
			// make element display for a nanosecond
				this.css('display', 'block');
				
			// measure
				if (isImageType) {
					fullWidth = this.find('img').outerWidth(true);
				} else {
					fullWidth = this.outerWidth(true);
				}
			// restore
				this.css('display', 'none');
				
		} else {
			fullWidth = this.outerWidth(true);
		}
		
		
		// reinstate previous size/position
		jbWindowInner.css({'left':currentLeft,'top':currentTop});
		jbWindowInner.animate({
			width: currentWidth,
			height: currentHeight//,
				//left: curentLeft,
				//top: currentTop
		},0);

		return fullWidth;
	};
	

	/**
	 * A plugin to measure the height of an element accurately (even if it is hidden)
	 */
	$.fn.lightBoxContentHeight = function( relaxWidth ) {
		
		var jbWindow = this.closest('#jb-window'),
			jbWindowInner = jbWindow.find( '#jb-window-inner' ),
			isImageType = jbWindow.hasClass('type-media') ? true : false,
			isImageMedia = jbWindow.hasClass('media-image') ? true : false,
		
			// always relax height
			currentWidth = jbWindowInner.width(),
			currentHeight = jbWindowInner.height(),
			currentLeft = jbWindowInner.css('left'),
			currentTop = jbWindowInner.css('top'),

			fullHeight
		;

		relaxWidth = typeof relaxWidth !== 'undefined' ? relaxWidth : true;
			
		// relax size for measurement
		if (
			$.browser.msie && 
			$.browser.version === 7 && 
			isImageType && 
			isImageMedia &&
			this.find('img').outerWidth(true) === 0 // IE7 width === 0 on initial load
		) { // only works with '100%' for IE7 on initial load
			$('#jb-window-inner').height('100%');
			if (relaxWidth) {
				$('#jb-window-inner').width('100%').css({left:0,top:0});
			}
		} else { // must use 'auto' for all other situations
			$('#jb-window-inner').height('auto');
			if (relaxWidth) {
				$('#jb-window-inner').width('auto').css({left:0,top:0});
			}
		}
		
		// if element is hidden, unhide it, then measure
		if ( this.css('display') === 'none' ) {
						
			// make element display for a nanosecond
			this.css('display', 'block');
			
			// measure
			fullHeight = this.outerHeight(true);
				
			// restore
			this.css('display', 'none');
			
				
		} else {
			fullHeight = $(this).outerHeight(true);
		}
		
		// reinstate previous size
			$('#jb-window-inner')
				.width(currentWidth)
				.height(currentHeight)
				.css({left:currentLeft,top:currentTop})
			;
		
		return fullHeight;
	};
	
	
	overlayClicked = function( evt ) {
		var options = $('#jb-overlay').data('options');
				
		if ( evt.target === $('#jb-window').get(0) && options.clickOverlayCloses ) {
			closeLightBox.apply();
		// } else {
			// do nothing
		}
	};


	/**
	 * Key pressed on keyboard
	 */
	lightBoxKeypress = function( evt ) {
		var evtKeyCode;

		//$.debug('Key pressed: '+evt.keyCode);
		
		// If lightbox is not open or if modifier keys are down, ignore key presses
		if (
			!$('#jb-overlay').is(':visible') ||
			evt.ctrlKey ||
			evt.altKey ||
			evt.shiftKey ||
			evt.metaKey
		) {
			return true; /* facilitate further bubbling */
		}
	
		// Get the key that was pressed
		evtKeyCode = getKeyCode(evt);
		
		
		// handle keypresses here
		switch (evtKeyCode) {
			case DOM_VK_UP:
			case DOM_VK_LEFT:
				$('#jb-gallery-prev').click();
			break;
			case DOM_VK_DOWN:
			case DOM_VK_RIGHT:
				$('#jb-gallery-next').click();
			break;
			case DOM_VK_HOME:
				$($('#jb-overlay').data('options').gallerySelector).firstInSet().click();
			break;
			case DOM_VK_END:
				$($('#jb-overlay').data('options').gallerySelector).lastInSet().click();
			break;
			case DOM_VK_ESCAPE:
				closeLightBox.apply();
			break;
			default:
				// A different (untracked) key was pressed, just ignore it
				return true; /* facilitate further bubbling */
		}
		
		// Event already handled, prevent default
		evt.preventDefault();
	};
	

	/**
	 * Someone activated gallery 'next' or 'prev' links
	 */
	galleryControlsClick = function( evt ) {
		var lightboxLink,
			$this = $( this );
		
		// Prevent default action
		evt.preventDefault();

		// find the gallery link, and activate it
		if ( $this.data( 'linkID' ) !== '' ) {
			
			$( '#jb-gallery-controls' ).hide(); // hide gallery controls for the transition
			
			lightboxLink = $( '#' + $this.data( 'linkID' ));
			return lightboxLink.click();
		}
	};


	/**
	 * A plugin to centre a visible element on the screen
	 */
	$.fn.centre = function () {
		return this.css({
			'position': 'fixed',
			'top': ( $(window).height() - this.outerHeight() ) / 2 + 'px',
			'left': ( $(window).width() - this.outerWidth() ) / 2 + 'px'
		});
	};
	

	findOffsetToCentre = function( w, h ) {
		var topOffset = ( $(window).height() - h ) / 2,
			leftOffset = ( $(window).width() - w ) / 2;
		
		//// $.debug ('w = '+w+' | h = '+h+' | top = '+top+' | left = '+left);
		
		return [ topOffset, leftOffset ];
	};
	
	
	/**
	 * Find if the node is in the set of nodes
	 */
	$.fn.isInSet = function( currentElement ) {
		return this.index( $( currentElement )) !== -1;
	};
	

	/**
	 * Find the next node in the currently selected set of nodes
	 */
	$.fn.nextInSet = function( currentElement ) {
		var currentIndex = this.index( $( currentElement ));
		if ( this.length > currentIndex + 1 ) {
			return this.eq( currentIndex + 1 );
		} else {
			return false;
		}
	};
	

	/**
	 * Find the previous node in the currently selected set of nodes
	 */
	$.fn.prevInSet = function( currentElement ) {
		var currentIndex = this.index( $( currentElement ));
		if ( currentIndex > 0 ) {
			return this.eq( currentIndex - 1 );
		} else {
			return false;
		}
	};
	

	/**
	 * Find the first node in the currently selected set of nodes
	 */
	$.fn.firstInSet = function() {
		if ( this.length > 0 ) {
			return this.eq( 0 );
		} else {
			return false;
		}
	};
	
	
	/**
	 * Find the last node in the currently selected set of nodes
	 */
	$.fn.lastInSet = function() {
		if ( this.length > 0 ) {
			return this.eq( -1 );
		} else {
			return false;
		}
	};
	
	
	/**
	 * from: http://stackoverflow.com/questions/1933501/how-to-put-targetblank-in-jquery
	 */
	isImage = function( fileName ) {
		
		if (typeof fileName === 'undefined' || fileName === '') {
			return false;
		}
		var pos = String( fileName ).lastIndexOf( '.' ),
			extension;

		if (pos === -1 ) {
			return false;
		} else {
			return ( /^\.(jpg|png|gif|bmp|jpeg)$/i ).test( fileName.substring( pos ));
		}
	};
	
	
	/**
	 * Disable all focussable elements outside the lightbox. Stores previous tabindex for later restoration
	 * Currently targets links, common form elements and anything with tabindex > -1
	 * @see http://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
	 */
	$.fn.disableFocussableElements = function( excludeElements ) {
		excludeElements = excludeElements || '';
		var focussable = this.find( 'a, input, button, area, frame, iframe, [tabindex]' ).not( excludeElements ).not( '*[tabindex="-1"]' );

		focussable.each(function() {
			var $this = $( this ),
				prevTabIndex = $this.attr( 'tabindex' )
			;

			prevTabIndex = typeof ( prevTabIndex ) === 'undefined' || prevTabIndex === '' ? '' : prevTabIndex;

			$this
				.data( 'prevTabIndex', prevTabIndex )
				.addClass( 'jb-unfocussed' )
				.attr( 'tabindex', '-1' )
			;
		});
	};


	/**
	 * Restore all focussable elements outside the lightbox.
	 */
	$.fn.restoreFocussableElements = function() {
		var focussable = this.find( '.jb-unfocussed' );
		
		focussable.each(function() {
			var $this = $( this ),
				prevTabIndex = $this.data( 'prevTabIndex' );
			
			switch ( prevTabIndex ) {
				case '':
					$this.removeAttr( 'tabindex' );
				break;
				default:
					$this.attr( 'tabindex', prevTabIndex );
			}

			$this.removeClass( 'jb-unfocussed' );
		});
	};


	/**
	 * Converts % or em values to a number of pixels (integer).
	 * Use pxToEm (reverse mode) to convert em values to pixels (if the plugin is available)
	 * @param String input The dimenion to be converted (may include % or em or px)
	 * @param integer centDimension The dimension that represents 100%
	 * @return integer Converted dimension in pixels
	 */
	parsePixels = function( input, centDimension ) {
		
		centDimension = typeof centDimension !== 'undefined' ? centDimension : $( document.body ).width() ;
		
		input = input
			.replace('px','') // remove px units if present
			.replace(/^\s+|\s+$/g,"") // trim leading and trailing whitespace
		;
		
		if (!isNaN(input)) {
			// int already, return as pixels
			return parseInt(input, 10);

		} else if (input.substr(input.length - 1) === '%') {
			// %, convert to pixels
			
			if (typeof centDimension !== 'undefined') {
				input = parseInt(input
					.substr(0, input.length - 1) // strip unit
					.replace(/^\s+|\s+$/g,"") // trim
				, 10);
				return input/100 * parseInt(centDimension, 10);
			} else {
				$.debug('Warning: percentage unit was supplied to parsePixels() but could not be calculated because centDimension was not supplied.');
				return parseInt(input, 10);
			}
				
		} else if (input.substr(input.length - 2) === 'em') {
			// em, check for pxToEm and convert (or warn)
			if (typeof Number.prototype.pxToEm !== 'undefined') {
				input = parseInt(input
					.substr(0, input.length - 2) // strip unit
					.replace(/^\s+|\s+$/g,"") // trim
				, 10);
				input = input.pxToEm({
				   reverse: true
				});
				return input.substr(0, input.length - 2); // strip unit px;

			} else {
				$.debug('Warning: em unit was supplied to parsePixels() but could not be calulated because pxToEm plugin was not found.');
				return parseInt(input, 10);
			}
		} else {
			// unknown units, warn
			$.debug('Warning: unknown unit was supplied. parsePixels() can support px, em or % units only.');
			return parseInt(input, 10);
		}
	};


}( jQuery, ResizeEvents ));
/* end closure */

/* ---------- STOP BUTTERFLY - butterfly - STOP ---------- */
/* ---------- START BUTTERFLY - fancybox swap - START ---------- */
$(document).ready(function(){
	$('.popupimage').each(function(){
		var popupimage_temp = $(this).clone();
		popupimage_temp.removeClass('popupimage').addClass('popupimage_butterfly');
		$(this).before(popupimage_temp);
		$(this).remove();
	});
	

$(function(){
	/* Enhance all image links, and internal (relative) links only */
	//$('a:not([href^="http://"]), a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]').butterfly(options={
	$('#examples a').not('.image').butterfly(options={
		contentDefaultWidth: '50em', // for content
		contentDefaultHeight: '100%', // for content
		mediaMaxWidth: '100%', // for images
		mediaMaxHeight: '100%', // for images
		lightBoxMargin: '2em', // margin around screen (can be em, % or px)
		animateResize: true,
		//animationSpeed: 250, // in ms
		//preloadNextGalleryImage: false,
		//reuseFragment: true,
		//closeButton: true,
		callbackPreOpen: function(){currentscrollpos = $(window).scrollTop()},
		//callbackPostClose: function(){setTimeout(function(){ $('body,html').animate({scrollTop:currentscrollpos})}, 500)},
		callbackPostClose: function(){setTimeout(function(){ $('body,html').scrollTop(currentscrollpos), 5})},
		
		closeButtonImage: 'https://api.ed2go.com/CourseBuilder/2.0/images/resources/dev/global/butterfly-0.13/close.png',
		//galleryMode: 'all',
		//galleryLoops: true,
		galleryContainers: '.gallery-test', // can specify more than one, i.e.  '#gallery-container, .gallery-test'
		preloadLoadingImage: 'https://api.ed2go.com/CourseBuilder/2.0/images/resources/dev/global/butterfly-0.13/loading-black-on-white.gif',
		preloadGalleryControlsSprite: 'https://api.ed2go.com/CourseBuilder/2.0/images/resources/dev/global/butterfly-0.13/gallery-controls-sprite.png'
	});
	
	options.treatAsImage = true;
	$('#examples a.image,.popupimage_butterfly').butterfly(options);
});
});

/* ---------- STOP BUTTERFLY - fancybox swap - STOP ---------- */



/* ======================== STOP BUTTERFLY STOP ======================== */

/* ------------------START PRINTER FRIENDLY CODEBOX---------------------------- */
var pf_placeholder_image;
var pf_placeholder_interactivity;

$(document).ready(function(){

		urlDetector();
		loadFancyBoxCode();
		
		var printerFriendlyCheck = classroomUrl.search(/PrintLesson/i);
		var fullscreenCheck = classroomUrl.search(/fullscreen=true/i);
		
		pf_placeholder_image = '<img style="display:none" class="pf_placeholder_image" title="hidden image or multimedia element" alt="hidden image or multimedia element" src="'+globalURL+'images/pf_placeholder_a.png" border="0" />';
		
		pf_placeholder_interactivity = '<img style="display:none" class="pf_placeholder_interactivity" title="hidden image or multimedia element" alt="hidden image or multimedia element" src="'+globalURL+'images/pf_placeholder_a.png" border="0" />';
	
		var printSaveNotebox = "<div id='pf_notebox' align='center'><div class='roundednotebox_pf browser_notebox'><p><strong>Printing This Lesson</strong></p><p>Select what you’d like to include when you print, and then click the <strong>Print Lesson</strong> button:</p><form id='pfForm' name='pfForm' method='post' action=''><p><input name='radio' type='radio' id='pfImagesOnBtn' value='pfImagesOnBtn' checked='checked' onclick='showAllImagesPF()'/><label for='pfImagesOnBtn'>Text, images and activities (IE users only)</label></p><p><input type='radio' name='radio' id='pfInteractivityOffBtn' value='pfInteractivityOffBtn' onclick='hideInteractivityPF()'/><label for='pfInteractivityOffBtn'>Text and images</label></p><p><input type='radio' name='radio' id='pfImagesOffBtn' value='pfImagesOffBtn' onclick='hideAllImagesPF()'/><label for='pfImagesOffBtn'>Text only</label></p><p><INPUT onclick='printlessonPF()' value='Print Lesson' type=button></p></form><p><strong>Saving This Lesson</strong></p><p>For instructions on saving this lesson (shown below), please select the browser you're using.</p><div id='pf_notebox_browser_buttons_container' align='center'><table width='100%' border='0' align='center'><tr><td align='center'><div id='pf_chrome'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_chrome.png' alt='chrome icon' border='0' class='pf_visible'/><br><span class='caption'>Chrome</span></div></div></td><td align='center'><div id='pf_firefox'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_firefox.png' alt='Firefox icon' border='0' class='pf_visible'/><br><span class='caption'>Firefox</span></div></div></td><td align='center'><div id='pf_ie10'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_ie_10.png' alt='Internet Explorer 10 icon' border='0' class='pf_visible'/><br><span class='caption'>IE 11</span></div></div></td><td align='center'><div id='pf_safari'><div class='browser_notebox_icon_div'><img src='"+globalURL+"images/browser_b_safari.png' alt='Safari icon' border='0' class='pf_visible'/><br><span class='caption'>Safari</span></div></div></td></tr></table></div><div align='center'><INPUT type='button' class='pf_hide_directions_btn' style='display:none;' value='Hide Directions'></div><div id='pf_notebox_browser_directions_container'></div><div align='center'><INPUT type='button' class='pf_hide_directions_btn' style='display:none;' value='Hide Directions'></div></div></div>";
		
		/* This IF is for the new classroom */
		if($('#pf_notebox_container').exists()){
			$(document).ready(function() {
				$('div[id*=vidFrame]').addClass('classroomJwVideoContainer');
				$('div[id*=audioFrame]').addClass('classroomJwAudioContainer');
			});
			$('<link href="'+globalURL+'printer_friendly/printer_friendly.css" rel="stylesheet" type="text/css" media="print">').appendTo($('head'));
			$('#pf_notebox_container').html(printSaveNotebox);
			//$('u:contains(INSTRUCTIONS:)').first().hide(); //delete this line after old classroom is completely phased out
			//$('ul:contains(To print this page)').first().hide(); //delete this line after old classroom is completely phased out
		
		$('#showImagesBtnPF').attr('disabled', 'disabled');
		$('#hideImagesBtnPF').removeAttr('disabled');
		
		$('img').addClass('pf_image').before(pf_placeholder_image);
		$('object').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('video').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('audio').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('iframe').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('embed').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('.classroomJwAudioContainer').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		$('.classroomJwVideoContainer').addClass('pf_interactivity').before(pf_placeholder_interactivity);
		}
		 /* delete this ELSE IF after old classroom is completely phased out */
		/*else if((printerFriendlyCheck > -1)&&(fullscreenCheck == -1)){
			//alert("TEST");
			$(document).ready(function() {
				$('div[id*=vidFrame]').addClass('classroomJwVideoContainer');
				$('div[id*=audioFrame]').addClass('classroomJwAudioContainer');
			});

			$('<link href="'+globalURL+'printer_friendly/printer_friendly.css" rel="stylesheet" type="text/css" media="print">').appendTo($('head'));
			$('body').prepend(printSaveNotebox);
			$('u:contains(INSTRUCTIONS:)').first().hide();
			$('ul:contains(To print this page)').first().hide();
		}*/
		
/* ///////////////////////// BEGIN PF SAVING INSTRUCTIONS ///////////////////////// */

	/* Change the cursor into a pointer finger when hovering over the browser icons */
	$('#pf_chrome,#pf_firefox,#pf_ie10,#pf_safari').css('cursor', 'pointer');
	
	/* Hide the browser directions container when the page loads */
	$('#pf_notebox_browser_directions_container').hide();
	
	/* Function triggered by the 'Hide Directions' button */
	$('.pf_hide_directions_btn').click(function(){
		$('.pf_hide_directions_btn').hide();
		$('#pf_notebox_browser_directions_container').hide("slow");
		$('#pf_chrome, #pf_firefox, #pf_ie10, #pf_safari').fadeTo('slow',1.0);
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	});

	/* When a browser icon is clicked, the other browser icons will fade out to this opacity */
	var pf_image_fade = 0.22;
	
	/* function triggererd by Chrome icon click */	
	$('#pf_chrome').click(function(){
		pf_chrome_html = "<p><strong>Chrome</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Click the <strong>Command</strong> button <span class='NumberedList'><img src='"+globalURL+"printer_friendly/chrome_files/image001.jpg' alt=''></span> in the upper-right corner, and choose <strong>More Tools > Save page as</strong>.</li><p align='center'><img src='"+globalURL+"printer_friendly/chrome_files/image002a.jpg' alt=''><br/><span class='caption'>Choose <strong>More Tools > Save page as</strong></span></p><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your own. However, do not add your own extension to that filename.</li><li>Choose <strong>Webpage, Complete</strong> as the file type.</li><p align='center'><span style='text-align:center'><img src='"+globalURL+"printer_friendly/chrome_files/image003.jpg' alt=''><br></span><span class='caption'>Use <strong>Webpage, Complete</strong> as the file type</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>You'll likely see two icons per downloaded lesson, as in the example below.</li><p align='center'><span style='text-align:center'><img src='"+globalURL+"printer_friendly/chrome_files/image004.jpg' alt=''><br></span><span class='caption'>Icons for one lesson saved as <strong>Webpage, Complete</strong></span><strong></strong></p><li>To view the lesson, double-click the single file with the *.htm extension. Opening the folder icon won't show you the lesson; it will only display icons for extra files that the lesson needs to display properly.</li><li>If you have multiple programs for opening *.htm files, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With.</strong> You'll be able to select Chrome to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Chrome) but opened using a different browser (like Firefox). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #4 above).</p>"
		
		$('#pf_notebox_browser_directions_container').html(pf_chrome_html).show("slow");
		$('#pf_firefox, #pf_ie10, #pf_safari').fadeTo('slow',pf_image_fade);
		$('#pf_chrome').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})

	/* function triggererd by Firefox icon click */	
	$('#pf_firefox').click(function(){
		pf_firefox_html = "<P><strong>Firefox</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Click the <strong>Command</strong> button <span class='NumberedList'><img src='"+globalURL+"printer_friendly/FF_files/image001a.jpg' alt=''></span> in the upper-right corner, and choose <strong>Save Page</strong>.</li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image002a.jpg' alt=''><br/><span class='caption'>Choose <strong>Save Page</strong></span></p><!--<li>Choose <strong>Firefox</strong> ><strong>Save Page As</strong>. </li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image001a.jpg' alt=''><br><span class='caption'> Choose <strong>Save Page As</strong></span></p>--><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your own. However, do not add your own extension to that filename.</li><li>Choose <strong>Web Page, complete</strong> as the file type.</li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image002.jpg' alt=''><br><span class='caption'> Use <strong>Web Page, complete</strong> as the file type</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>You'll likely see two icons per downloaded lesson, as in the example below.</li><p align='center'><img src='"+globalURL+"printer_friendly/FF_files/image003.jpg' alt=''><br><span class='caption'> Icons for one lesson saved as <strong>Web Page, complete</strong></span></p><li>To view the lesson, double-click the file with the *.htm extension (the one that looks like a dog-eared piece of paper). Opening the folder icon won't show you the lesson; it will only display icons for extra files that the lesson needs to display properly.</li><li>If you have multiple programs for opening *.htm files, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With</strong>. You'll be able to select Firefox to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Firefox) but opened using a different browser (like Internet Explorer). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #4 above).</p>";
		
		$('#pf_notebox_browser_directions_container').html(pf_firefox_html).show("slow");
		$('#pf_chrome, #pf_ie10, #pf_safari').fadeTo('slow',pf_image_fade);
		$('#pf_firefox').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})



	/* function triggererd by IE10 icon click */	
	$('#pf_ie10').click(function(){
		pf_ie10_html = "<p><strong>Internet Explorer, Desktop Mode</strong></p><p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below. </p><ol><li>Click the Tools button<img src='"+globalURL+"printer_friendly/IE10_files/image001.jpg' alt=''> in the upper-right corner, and choose <strong>Save as</strong>.</li><p align='center'><img src='"+globalURL+"printer_friendly/IE10_files/image002.jpg' alt=''><br><span class='caption'>Select <strong>Save as</strong> from the shortcut menu </span></p><li>Specify the folder you want to save the file in, as you would with any other document.</li><li>Type a name for the lesson. You can use the long suggested name or make up a shorter name of your choice. However, do not add your own extension to that filename.</li><li>Choose Web Archive or Web Archive, single file as the format (file type). (If you have file extensions displayed, you'll see *.mht at the end.) Doing this will save the downloaded lesson as a single file, which is the most convenient method.</li><p align='center'><img src='"+globalURL+"printer_friendly/IE10_files/image003.jpg' alt=''><br><span class='caption'>Save the lesson as a <strong>Web Archive</strong>, if possible</span></p><li>Click <strong>Save</strong>.</li></ol><p><strong>Viewing Downloaded Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol><li>Open the folder you saved the lesson in.</li><li>If you saved the lesson as a Web Archive, double-click the lesson icon. The icon is similar to the image below.</li><p align='center'><img src='"+globalURL+"printer_friendly/IE10_files/image004.jpg' alt=''><br><span class='caption'>Icon for a <strong>Web Archive</strong></span><strong></strong></p><li>If you have multiple programs for opening *.mht files, you can right-click the icon (or CONTROL + click the icon if you're using a Mac) and choose <strong>Open With</strong>. You'll be able to select Internet Explorer to open and view the lesson.</li></ol><p><strong>Missing Pictures</strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before clicking Save. Or interactive content, such as videos or games, may not save. Another possibility is that you may have downloaded using one browser (like Internet Explorer) but opened using a different browser (like Firefox). Try opening the downloaded lesson with the same browser you used to download the lesson (please see step #3 above).</p>";
		
		$('#pf_notebox_browser_directions_container').html(pf_ie10_html).show("slow");
		$('#pf_chrome, #pf_firefox, #pf_safari').fadeTo('slow',pf_image_fade);
		$('#pf_ie10').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})

	/* function triggererd by Safari icon click */	
	$('#pf_safari').click(function(){
		pf_safari_html = "<p>If you'd like to access the lessons of this course when you're offline, as well as after the course has ended, it's easy to download them. First, you may want to create a folder to put all the lessons in so you have them in one place at the end of the course. Next, just follow the downloading instructions below.</p><ol><li>Click the&nbsp;<strong>File</strong> menu<strong></strong>and choose <strong>Save As.</strong><p align='center'><img src='"+globalURL+"printer_friendly/safari_files/image01.png' alt=''><br><span class='caption'>Choose&nbsp;<strong>Save As</strong>&nbsp;from the File menu </span></p><br></li><li>In the Export As box, type a name for the lesson. You can use the suggested name or make up a name of your own. However, do not add your own extension to that filename.</li><li>In the Where box, choose the folder you want to save the lesson in. You can change the folder by using the arrow button on the right.</li><li>Make sure the Format is set to <strong>Web Archive</strong>. If Web Archive isn't selected, please use the arrow button to choose Web Archive. <p align='center'><img src='"+globalURL+"printer_friendly/safari_files/image02.png' alt=''><br><span class='caption'>Specify the filename, location, and format</span></p></li><li>Click&nbsp;<strong>Save</strong>.</li></ol><p><strong>Viewing Saved Lessons</strong></p><p>After you've downloaded a lesson, you can use these steps at any time to open, view, or print it. You don't need to be connected to the Internet.</p><ol start='1' type='1'><li>Open Finder, and select the location where you saved the file.</li><li>Find the filename you gave to the saved lesson. </li><li>Right-click the filename or file icon, choose&nbsp;<strong>Open With</strong>, and then choose <strong>Safari</strong>. Safari will open, displaying the saved lesson.</li></ol><p><strong>Troubleshooting</strong><strong></strong></p><p>If you open a downloaded lesson and some pictures are missing, you might not have waited long enough for the pictures to download before saving the Web page. If this happens, try saving the lesson again. Interactive content, such as videos or games, may not save. </p><p>If the saved page won't open, you may have downloaded using one browser (like Safari) but opened using a different browser (like Chrome). Try opening the downloaded lesson with the same browser you used to save the lesson.</p>";
		
		$('#pf_notebox_browser_directions_container').html(pf_safari_html).show("slow");
		$('#pf_chrome, #pf_firefox, #pf_ie10').fadeTo('slow',pf_image_fade);
		$('#pf_safari').fadeTo('slow',1.0);
		$('.pf_hide_directions_btn').show();
		$('#pf_notebox_browser_directions_container').show("slow");
		$('#pf_notebox_browser_directions_container ol li').css('margin-bottom','10px');
	})
		
/* ///////////////////////// END PF SAVING INSTRUCTIONS ///////////////////////// */
		
		
});
function printlessonPF(){
		window.print();	
	}
function hideAllImagesPF(){
	$('.pf_image').hide();
	$('.pf_interactivity').hide();
				
	$('.pf_placeholder_image').show();
	$('.pf_placeholder_interactivity').show();
	
	$('.pf_visible').show().prev('img').hide();
	}
function hideInteractivityPF(){
	$('.pf_interactivity').hide();
	$('.pf_placeholder_interactivity').show();
				
	$('.pf_image').show();
	$('.pf_placeholder_image').hide();
	
	$('.pf_visible').show().prev('img').hide();
	}
function showAllImagesPF(){
	$('.pf_image').show();
	$('.pf_placeholder_image').hide();
		
	$('.pf_interactivity').show();
	$('.pf_placeholder_interactivity').hide();
	
	$('.pf_visible').show().prev('img').hide();
	}

/* ------------------STOP PRINTER FRIENDLY CODEBOX----------------------------------- */

/* ------------------START Saved lesson layout update START----------------------------------- */
$(document).ready(function(){
  var savedLessonWidth = '644px';
  locationCheck = location.hostname;
  ed2goLocationCheck = locationCheck.search(/ed2go/i);
  if(ed2goLocationCheck == -1){
	  
	  $('.left-navigation-links,.courseVideoSection iframe,.courseVideo').remove();
	  $('.courseVideoSection').prepend("<p>This video cannot be viewed offline.</p>");
	  $('.textEQ_container').html("<div class='courseVideoSection'><p>This activity cannot be viewed offline.</p></div>")
	  $('.roundednotebox_pf').html("<p><strong>Offline Content</strong></p><p><strong>Note:</strong> You are currently viewing an offline version of this lesson that was saved to your computer. Please be aware that some elements may not display or function correctly in this mode. If so, log into the classroom to properly view this lesson. Thank you.</p>");
	  pfTitleUpdateText = 'Offline View';
	  pfTitleUpdate = $('.classroom-section-title').html();
	  pfTitleUpdate = pfTitleUpdate.replace(/Printer Friendly/i,pfTitleUpdateText);
	  $('.classroom-section-title').html(pfTitleUpdate);
	  $('.breadcrumb-inactive').text(pfTitleUpdateText);
	  $('.printer-friendly-link-to-top').html('<a href="#title-bar">Back to top</a>');
	  $('.main-content').css({
		 float:'none',
		 width:'auto',
		 marginLeft:'auto',
		 marginRight:'auto' 
	  });
	  $('.title-bar-login-button').hide();
	  $('.title-bar-help-button').hide();
	  $('.title-bar-centering-container, .classroom-footer-text-right-align').css({
		 float:'none',
		 marginLeft:'auto',
		 marginRight:'auto',
		 width:savedLessonWidth
	  });
	  $('.classroom-main-container').css({
		 width:savedLessonWidth
	  });
	  $('.classroom-footer-text').css({
		 width:'auto'
	  });
	  if($('#ctl00_ctrlToggle_pnlSettings').exists()){
		  $('#ctl00_ctrlToggle_pnlSettings').hide();
	  }
	  
  }
  
  
})

/* ------------------STOP Saved lesson layout update STOP----------------------------------- */

/* ------------------START NEXT/FINAL STEPS GLOBAL UPDATE---------------------------- */

var thisCourseTitle = 'this';

/* This function checks to see if objects exist on a page, used in the following if statements */
$.fn.exists = function(){return this.length>0;}

$(document).ready(function() {
	
	if($('.stepsBoxPlaceholder').exists()) {
		$('.stepsBoxPlaceholder').hide();
	}
	if($('title').exists()) {
		thisCourseTitle = $(document).attr('title');
		
	}
	else{thisCourseTitle = 'this'};
	
	var SPT_search = thisCourseTitle.search(/Self-Paced Tutorial/i);
	var SPT_course;
	if(SPT_search > -1){
		SPT_course = true;
	}
	else{
		SPT_course = false;
	}
	
	printerFriendlyCheck = classroomUrl.search(/PrintLesson/i); /* checks to see if location is printer-friendly page */
	
	if(printerFriendlyCheck > -1 && !$('#pf_notebox_container').exists() && $('.title-bar-close-button').exists()){
		thisCourseTitleStop = thisCourseTitle.lastIndexOf(": Lesson"); // Removes breadcrumbs from title 
		thisCourseTitle = thisCourseTitle.substring(0,thisCourseTitleStop);
	}
	else if(printerFriendlyCheck > -1 && $('#pf_notebox_container').exists() && !$('.left-navigation-links').exists()){
		thisCourseTitleStop = thisCourseTitle.lastIndexOf(": Lesson"); // Removes breadcrumbs from title 
		thisCourseTitle = thisCourseTitle.substring(0,thisCourseTitleStop);
	}
	
	
	/*
	//The code below is for the new classroom
	if($('#pf_notebox_container').exists()){
		thisCourseTitleStop = thisCourseTitle.lastIndexOf(": Lesson"); // Removes breadcrumbs from title 
		thisCourseTitle = thisCourseTitle.substring(0,thisCourseTitleStop);
	}
	*/
	
	var finalSteps_no_rr;
	var finalStepsIMG_exists;
	var nextStepsIMG_exists;
	
	var otherCourses_innerHTML;
	
	/* Check to see if next or final steps image exists */
    $('img').each(function(){
		
		nextStepsSrcValue = $(this).attr('src');
		nextStepsCheck = nextStepsSrcValue.search(/nextsteps/i);
		
		finalStepsSrcValue = $(this).attr('src');
		finalStepsCheck = finalStepsSrcValue.search(/finalsteps/i);
		
		if(nextStepsCheck > -1){
			nextStepsIMG_exists = true;
		};
		
		if(finalStepsCheck > -1){
			finalStepsIMG_exists = true;
		};
	})	
	
	
	/* This is the new content that appears within the global NEXT steps box */
	var nextSteps_innerHTML = "<div id='nextSteps_item_intro'><p class='nextstepsroundedtitle_global'><img class='next_steps_icon' align='right' src='"+globalURL+"nextsteps/steps_icon.png' alt=''><strong>Next Steps</strong></p><p>Okay, you've finished your first lesson. Now what do you do?</p><p>You'll want to take the following steps, in any particular order you like:</p></div><ul><li id='nextSteps_item_quiz'><strong>Take the quiz</strong>. Reinforce what you learned in the lesson by testing yourself with a short five-question quiz. You can access the quiz for each lesson by clicking the <strong>Quizzes</strong> link. </li><li id='nextSteps_item_assignment'><strong>Do the assignment.</strong> Want some hands-on practice applying what you've just learned? Then roll up your sleeves and dig into the assignment! Just click the <strong>Assignments</strong> link to get to each lesson's assignment.</li><li id='nextSteps_item_faqs'><strong>Check out the FAQs</strong>. Since learning something new usually raises questions, every lesson in this course comes with an FAQs section. To get to the FAQs, click the <strong>Resources</strong> link, and then click <strong>FAQs</strong>.</li><li id='nextSteps_item_discussion'><strong>Drop by the Discussion Area</strong>. Come talk with me and your fellow students in the Discussion Area! Ask questions about anything that came up in the lesson, and share your insights with everyone. This is where we'll create a learning community.</li><li id='nextSteps_item_index'><strong>View the index</strong>. If you want to find a topic but can't quite remember where it was, then the index is the place to go. You'll find it by clicking the <strong>Resources</strong> link, and then clicking <strong>Course Index</strong>.</li><li id='nextSteps_item_resources'><strong>Browse resources for further learning</strong>. I've included a list of recommendations for books so you can continue learning more about this topic long after our time together ends. You'll find these by clicking the <strong>Resources</strong> link.</li></ul>";
	
	/* This is the container that holds the NEXT steps content */
	var nextSteps_innerHTML_with_container = '<div style="text-align: center;"><div class="nextstepsrounded_global">'+nextSteps_innerHTML+'</div></div>';
	
	/* This is the new content that appears within the global NEXT steps box for SPTs */
	var nextSteps_innerHTML_SPT = "<div id='nextSteps_item_intro'><p class='nextstepsroundedtitle_global'><img class='next_steps_icon_SPT' align='right' src='"+globalURL+"nextsteps/steps_icon.png' alt=''><strong>Next Steps</strong></p><p>Okay, you've finished your first lesson. Now what do you do?</p><p>You'll want to take the following steps, in any particular order you like:</p></div><ul><li id='nextSteps_item_quiz'><strong>Take the quiz</strong>. Reinforce what you learned in the lesson by testing yourself with a short five-question quiz. You can access the quiz for each lesson by clicking the <strong>Quizzes</strong> link. </li><li id='nextSteps_item_assignment'><strong>Do the assignment.</strong> Want some hands-on practice applying what you've just learned? Then roll up your sleeves and dig into the assignment! Just click the <strong>Assignments</strong> link to get to each lesson's assignment.</li><li id='nextSteps_item_faqs'><strong>Check out the FAQs</strong>. Since learning something new usually raises questions, every lesson in this course comes with an FAQs section. To get to the FAQs, click the <strong>Resources</strong> link, and then click <strong>FAQs</strong>.</li><li id='nextSteps_item_index'><strong>View the index</strong>. If you want to find a topic but can't quite remember where it was, then the index is the place to go. You'll find it by clicking the <strong>Resources</strong> link, and then clicking <strong>Course Index</strong>.</li><li id='nextSteps_item_resources'><strong>Browse resources for further learning</strong>.  Included is a list of recommendations for books so you can  continue learning more about this topic long after this course ends. You'll find these by clicking the <strong>Resources</strong> link.</li></ul>";
	
	/* This is the container that holds the NEXT steps content for SPTs */
	var nextSteps_innerHTML_with_container_SPT = '<div style="text-align: center;"><div class="nextstepsrounded_global">'+nextSteps_innerHTML_SPT+'</div></div>';	
	/* This is the new content that appears within the global FINAL steps box */
	var finalSteps_innerHTML = "<div id='finalSteps_item_intro'><p class='finalstepsroundedtitle_global'><img class='final_steps_icon' align='right' src='"+globalURL+"nextsteps/steps_icon.png' alt=''><strong>Final Steps</strong></p><p>Now that you've finished the last lesson, is there anything else to do? Yes, several things!</p></div><ul><li id='finalSteps_item_quiz_assignment_faqs'><strong>Quiz, assignment, and FAQs:</strong> You still have a quiz for this lesson, as well as an assignment, so be sure to do these. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</li><li id='finalSteps_item_resources'><strong>Resources for further learning:</strong> If you haven't already checked out the Recommended Books and Resources, now would be a great time. When it comes to a topic like <em>"+thisCourseTitle+"</em>, there's always more to learn. To access these, just click the <strong>Resources</strong> link. </li><li id='finalSteps_item_exam'><strong>Final exam:</strong> Here's the moment all those quizzes have been preparing you for—the cumulative final for this course. Let me give you a tip: Print the final before taking it so you can study and relieve any test anxiety you might have. (You can have the classroom open when you take the final too.) You only get one chance at the final, so you'll want to do your best. To access it, click the <strong>Completion</strong> link and then click <strong>Final Exam</strong>. Good luck!</li><li id='finalSteps_item_evaluation'><strong>Course evaluation:</strong> I'd love to know what you thought of this course and if you have any suggestions for improvement. So please take some time, either before or after you take the final, to fill out a brief evaluation. I appreciate your feedback, and future students will too! You'll find the link to this by clicking <strong>Completion</strong>, and then clicking <strong>Evaluation</strong>.</li><li id='finalSteps_item_discussion'><strong>Discussion Area:</strong> The Discussion Area will be open for two more weeks after Lesson 12's release, so please feel free to stop by and ask any questions (except about the final exam) and share your thoughts.</li></ul>";
	
	/* This is the container that holds the FINAL steps content*/
	var finalSteps_innerHTML_with_container = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML+'</div></div>';
	
	/* This is the new content that appears within the global FINAL steps box with no reccomended resources */
	var finalSteps_innerHTML_no_rr = "<div id='finalSteps_item_intro'><p class='finalstepsroundedtitle_global'><img class='final_steps_icon_no_rr' align='right' src='"+globalURL+"nextsteps/steps_icon.png' alt=''><strong>Final Steps</strong></p><p>Now that you've finished the last lesson, is there anything else to do? Yes, several things!</p></div><ul><li id='finalSteps_item_quiz_assignment_faqs'><strong>Quiz, assignment, and FAQs:</strong> You still have a quiz for this lesson, as well as an assignment, so be sure to do these. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</li><li id='finalSteps_item_finalsteps_item_resources'><strong>Resources for further learning:</strong> If you haven't already checked out the Recommended Books, now would be a great time. When it comes to a topic like <em>"+thisCourseTitle+"</em>, there's always more to learn. To access these, just click the <strong>Resources</strong> link. </li><li id='finalSteps_item_exam'><strong>Final exam:</strong> Here's the moment all those quizzes have been preparing you for—the cumulative final for this course. Let me give you a tip: Print the final before taking it so you can study and relieve any test anxiety you might have. (You can have the classroom open when you take the final too.) You only get one chance at the final, so you'll want to do your best. To access it, click the <strong>Completion</strong> link and then click <strong>Final Exam</strong>. Good luck!</li><li id='finalSteps_item_evaluation'><strong>Course evaluation:</strong> I'd love to know what you thought of this course and if you have any suggestions for improvement. So please take some time, either before or after you take the final, to fill out a brief evaluation. I appreciate your feedback, and future students will too! You'll find the link to this by clicking <strong>Completion</strong>, and then clicking <strong>Evaluation</strong>.</li><li id='finalSteps_item_discussion'><strong>Discussion Area:</strong> The Discussion Area will be open for two more weeks after Lesson 12's release, so please feel free to stop by and ask any questions (except about the final exam) and share your thoughts.</li></ul>";
	
	
	
	
	/* This is the container that holds the FINAL steps content with no reccomended resources */
	var finalSteps_innerHTML_with_container_no_rr = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML_no_rr+'</div></div>';
	
	
	/* This is the new content that appears within the global FINAL steps box with no reccomended resources for SPTs*/
	var finalSteps_innerHTML_SPT = "<p class='finalstepsroundedtitle_global'><img class='final_steps_icon_SPT' align='right' src='"+globalURL+"nextsteps/steps_icon.png' alt=''><strong>Final Steps</strong></p><p>Now that you've finished the last lesson, is there anything else to do? Yes, several things!</p><ul><li id='finalSteps_item_quiz_assignment_faqs'><strong>Quiz, assignment, and FAQs:</strong> You still have a quiz for this lesson, as well as an assignment, so be sure to do these. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</li><li id='finalSteps_item_finalsteps_item_resources'><strong>Resources for further learning:</strong> If you haven't already checked out the Recommended Books, now would be a great time. When it comes to a topic like <em>"+thisCourseTitle+"</em>, there's always more to learn. To access these, just click the <strong>Resources</strong> link. </li><li id='finalSteps_item_exam'><strong>Final exam:</strong> Here's the moment all those quizzes have been preparing you for—the cumulative final for this course. Here's a tip: Print the final before taking it so you can study and relieve any test anxiety you might have. (You can have the classroom open when you take the final too.) You only get one chance at the final, so you'll want to do your best. To access it, click the <strong>Completion</strong> link and then click <strong>Final Exam</strong>. Good luck!</li><li><strong>Course evaluation:</strong> What did you think of this course? Please take some  time, either before or after you take the final, to fill out a brief course  evaluation. Click <strong>Completion</strong> and then <strong>Evaluation</strong> to provide your  feedback.</li></ul>";

	
/* Check for older versions of the next/final steps tables via their images */	
if(nextStepsIMG_exists == true || finalStepsIMG_exists == true){	

	/* Checks to see if final steps image contains reccomended resources */
	if ($("img[src$='finalsteps_norr.gif']").exists() || $("img[src$='finalsteps_noRR_2.png']").exists()) {
		  finalSteps_no_rr = true;
	  }
	  else{
		  finalSteps_no_rr = false;
	  };

	
	/* This is the container that holds the FINAL steps content with no reccomended resources for SPTs */
	var finalSteps_innerHTML_with_container_SPT = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML_SPT+'</div></div>';	


	/* This locates and hides the oldest div-based next steps table and inserts empty nextStepsBox box */
		if ($(".nextstepsrounded").exists() || $(".nextstepsrounded_new").exists() || $(".finalstepsrounded").exists() || $(".finalstepsrounded_new").exists() || $("#nextStepsBox").exists() || $("#nextStepsBox_SPT").exists() || $("#finalStepsBox").exists() || $("#finalStepsBox_SPT").exists() || $("#finalStepsBox_no_rr").exists()) {
		  
		  if ($(".nextstepsrounded").exists()) {
			  $(".nextstepsrounded").hide().after('<div id="nextStepsBox"></div>');
		  }
		  /* This locates and hides the newer div-based next steps table and inserts empty nextStepsBox box */
		  else if ($(".nextstepsrounded_new").exists()) {
			  $(".nextstepsrounded_new").hide().after('<div id="nextStepsBox"></div>');
		  }
		  
		  /* Locates and hides the old div-based final steps table, hides old info and inserts new content. The 'other courses' info remains intact */
		  if ($(".finalstepsrounded").exists() && $('.yellowbackground').exists() && !$(".finalstepsrounded").is('table')) {
				$(".finalstepsrounded").addClass('oldFinalSteps');
				$(".oldFinalSteps").addClass('finalstepsrounded');
				$('.finalstepsrounded').addClass('finalstepsrounded_global');
				$('.finalstepsrounded_global').removeClass('finalstepsrounded');
	
				$("p:contains('Final Steps')").nextUntil(".yellowbackground").andSelf().hide();
				$('.yellowbackground').addClass('otherCoursesBar_global');
				$('.otherCoursesBar_global').removeClass('yellowbackground');
				$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" align="right" src="'+globalURL+'nextsteps/other_courses_icon.png" alt="">');
				  if(finalSteps_no_rr){
					  $('.otherCoursesBar_global').before(finalSteps_innerHTML_no_rr);
				  }
				  else{
					  $('.otherCoursesBar_global').before(finalSteps_innerHTML);
				}
					
		  }
////////////////////////////////	
			/* This searches for any tables that havev the finalstepsrounded class */	  
		  else if ($(".finalstepsrounded").exists() && $('.yellowbackground').exists() && $(".finalstepsrounded").is('table')) {
			  
				$(".finalstepsrounded").addClass('oldFinalSteps');
				$(".oldFinalSteps").removeClass('finalstepsrounded');
				$('.yellowbackground').addClass('otherCoursesBar_global');
				$('.otherCoursesBar_global').removeClass('yellowbackground');
				$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png" alt="">');
				$(".oldFinalSteps p:contains('Final Steps')").nextUntil('.otherCoursesBar_global').andSelf().remove();
				
				otherCourses_innerHTML = $(".oldFinalSteps td:has(.otherCoursesBar_global)").html();
				
				if(finalSteps_no_rr){
					 $(".oldFinalSteps").after('<div id="finalStepsBox_no_rr"></div>');
				  }
				else{
					 $(".oldFinalSteps").after('<div id="finalStepsBox"></div>');
				}
				$(".oldFinalSteps").after('<div id="otherCoursesBox">'+otherCourses_innerHTML+'</div>');
				$(".oldFinalSteps").remove();
				
		  }
/////////////////////////////////////		  
		  /* Locates and hides the newer div-based final steps table, hides old info and inserts new content. The 'other courses' info remains intact */
		  else if ($(".finalstepsrounded_new").exists()) {
			$("p:contains('Final Steps')").nextUntil(".yellowbarbackground_new").andSelf().hide();
			$('.finalstepsrounded_new').addClass('finalstepsrounded_global');
			$('.finalstepsrounded_global').removeClass('finalstepsrounded_new');
			  if(finalSteps_no_rr){
				  $('.yellowbarbackground_new').before(finalSteps_innerHTML_no_rr);
			  }
			  else{
				  $('.yellowbarbackground_new').before(finalSteps_innerHTML);
			  }
			$('.yellowbarbackground_new').addClass('otherCoursesBar_global');
			$('.otherCoursesBar_global').removeClass('yellowbarbackground_new');
			$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" align="right" src="'+globalURL+'nextsteps/other_courses_icon.png" alt="">');
			}
			
		  /* Locates and hides the newer div-based final steps table, hides old info and inserts new content. The 'other courses' info remains intact */
		  else if ($(".finalstepsrounded").exists() && $('.yellowbarbackground').exists()) {
			$("p:contains('Final Steps')").nextUntil(".yellowbarbackground").andSelf().hide();
			$('.finalstepsrounded').addClass('finalstepsrounded_global');
			$('.finalstepsrounded_global').removeClass('finalstepsrounded');
			  if(finalSteps_no_rr){
				  $('.yellowbarbackground').before(finalSteps_innerHTML_no_rr);
			  }
			  else{
				  $('.yellowbarbackground').before(finalSteps_innerHTML);
			  }	
			$('.yellowbarbackground').addClass('otherCoursesBar_global');
			$('.otherCoursesBar_global').removeClass('yellowbarbackground');
			$('.otherCoursesBar_global').after('<img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png" alt="">');
			}
			
		
	  			
		}
		

/* -------------- TABLE CHECK START -------------------- */

	/*  This function searches the classroom page for tables without embedded tables and gives them a class '.tableless_table'. This is required because the old next/final steps tables didn't have ids or classes. */
	else{
	  $("table:not(:has(table))").each(function(){
		  $(this).addClass('tableless_table');
	  });
	  
	  /*  This function searches the 'tableless_table' objects (above) and locates the old NEXT steps table, gives it class '.oldNextSteps' */
	  $(".tableless_table:contains('Next Steps')").each(function(){
		  $(this).addClass('oldNextSteps');
	  });
	  
	  /*  This function searches the 'tableless_table' objects (above) and locates the old FINAL steps table, gives it class '.oldFinalSteps' */
	  $(".tableless_table:contains('Final Steps')").each(function(){
		  $(this).addClass('oldFinalSteps');
	  });
	  
	  
	  
	if(SPT_course){
		
		  $(".oldNextSteps").addClass('oldNextSteps_SPT');
		  $(".oldFinalSteps").addClass('oldFinalSteps_SPT');
		  
		  $(".oldNextSteps_SPT").removeClass('oldNextSteps');
		  $(".oldFinalSteps_SPT").removeClass('oldFinalSteps');

		  $(".oldNextSteps_SPT").hide().after('<div id="nextStepsBox_SPT"></div>');
		  $(".oldFinalSteps_SPT").hide().after('<div id="finalStepsBox_SPT"></div>');	  
	}
	else{

	  /*  This hides the oldNextSteps and inserts an empty nextStepsBox that is populated with content later in the nextStepsBox exists function */
	  $(".oldNextSteps").hide().after('<div id="nextStepsBox"></div>');
	  
	  /*  This hides the oldFinalSteps box and inserts an empty finalStepsBox that is populated with content later in the finalStepsBox exists function */
	  $(".oldFinalSteps").hide().after('<div id="finalStepsBox"></div>');	 
	}
	
	  /*  This function searches the 'tableless_table' objects (above) and locates the old OTHER COURSES table, gives it class '.oldOtherCourses' */
	 $(".tableless_table:contains('Other Online Courses')").each(function(){
		  $(this).addClass('oldOtherCourses');
	  });
	 $(".tableless_table:contains('Other Courses')").each(function(){
		  $(this).addClass('oldOtherCourses');
	  });	
	  $(".oldOtherCourses blockquote").contents().unwrap();	 
	  $(".oldOtherCourses strong:contains('Other Courses')").remove();
	  
	  otherCourses_innerHTML = '<p class="otherCoursesBar_global"><strong>Other Courses</strong></p><img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png" alt="">'+ $('.oldOtherCourses td:contains("this course")').html();
	  
	  
	  
	  
	/* Hide the old 'other courses' table */
	}
	  $(".oldOtherCourses").hide();

}
/* -------------- TABLE CHECK STOP -------------------- */



	/* Locates empty nextStepsBox and populates it with new info */

	if($('#nextStepsBox_SPT').exists()) {
		$('#nextStepsBox_SPT').html(nextSteps_innerHTML_with_container_SPT);
	}
	else if($('#nextStepsBox').exists()) {
		$('#nextStepsBox').html(nextSteps_innerHTML_with_container);
	};

	if($('#finalStepsBox_no_rr').exists()) {
		$('#finalStepsBox_no_rr').html(finalSteps_innerHTML_with_container_no_rr);
		if($('.oldOtherCourses').exists()){
			$('.finalstepsrounded_global').append(otherCourses_innerHTML);
		}
	}
	else if($('#finalStepsBox_SPT').exists()) {
		finalSteps_innerHTML_with_container_SPT = '<div style="text-align: center;"><div class="finalstepsrounded_global">'+finalSteps_innerHTML_SPT+'</div></div>';	
		$('#finalStepsBox_SPT').html(finalSteps_innerHTML_with_container_SPT);
	}
	
	/* Locates empty finalStepsBox and populates it with new info */
	else if($('#finalStepsBox').exists() && !finalSteps_no_rr) {
		$('#finalStepsBox').html(finalSteps_innerHTML_with_container);
		if($('.oldOtherCourses').exists()){
			$('.finalstepsrounded_global').append(otherCourses_innerHTML);
		}
	}
	/* Locates empty finalStepsBox with no reccomended resources and populates it with new info */
	else if($('#finalStepsBox').exists() && finalSteps_no_rr) {
		$('#finalStepsBox').html(finalSteps_innerHTML_with_container_no_rr);
		if($('.oldOtherCourses').exists()){
			$('.finalstepsrounded_global').append(otherCourses_innerHTML);
		}
	};

	/* Checks to see if other courses box div and class is present, adds div to final steps box */
	if($('#otherCoursesBox').exists() && !$('.otherCoursesBar_global').exists()) {
		$('.finalstepsrounded_global').append('<p class="otherCoursesBar_global"><strong>Other Courses</strong></p><img class="otherCoursesIcon_global" src="'+globalURL+'nextsteps/other_courses_icon.png" alt=""><p>If you enjoyed this course, here are a few other online courses you might be interested in:</p>');
		$('#otherCoursesBox').appendTo('.finalstepsrounded_global').removeClass('other-courses');
	}
	else if($('#otherCoursesBox').exists() && $('.otherCoursesBar_global').exists()) {
		$('#otherCoursesBox').appendTo('.finalstepsrounded_global').removeClass('other-courses');
	};
	
	/* The following 3 if statements cleanup issues found in varous versions of the final steps tables */
	if($("img[src$='spacer.gif']").exists()){
		$("img[src$='spacer.gif']").hide();
	}
	/* Remove table container from content inside other courses box, if it exists  */
	if($('.finalstepsrounded_global:has(table)')){
		tempTableContent = $('.finalstepsrounded_global td:contains("If you enjoyed this course")').html();
		$('.finalstepsrounded_global table').remove();
		$('.finalstepsrounded_global').append(tempTableContent);
		$('.finalstepsrounded_global blockquote').contents().unwrap();
	}
	/* Remove break tag above other courses paragraph, if it exists */
	if($('.finalstepsrounded_global p:contains("If you enjoyed this course")').prev().is('br')){
		$('.finalstepsrounded_global p:contains("If you enjoyed this course")').prev().remove();
	}

	
	if($('.finalstepsrounded_global').exists()){
	/* Removes hyperlinks from final steps and other courses box */
		//$('.finalstepsrounded_global a :not(.temp_catalog_link)').contents().unwrap(); //updated the 'not' in v49
		$('.finalstepsrounded_global a:not(.temp_catalog_link, .temp_catalog_title_link)').contents().unwrap(); //updated the 'not' in v49
		/* Remove ed2go from final steps box */
		if($('.finalstepsrounded_global *:contains(ed2go)').exists()){
			ed2goTextCleanup = $('.finalstepsrounded_global *:contains(ed2go)').html();
			ed2goTextCleanup = ed2goTextCleanup.replace('ed2go ','');
			$('.finalstepsrounded_global *:contains(ed2go)').html(ed2goTextCleanup);
					
			
			/* Hide any existing images */
			$('.finalstepsrounded_global img:not(.otherCoursesIcon_global, .next_steps_icon, .next_steps_icon_SPT, .final_steps_icon, .final_steps_icon_no_rr)').hide();
		}
		
	}

/* Code to hide or change different parts of the nextStepsBox list */

if($('#nextStepsBox').exists()){
		if($('#nextStepsBox').hasClass('no_quiz')){
			$('#nextSteps_item_quiz').hide();
		}
		if($('#nextStepsBox').hasClass('no_assignment')){
			$('#nextSteps_item_assignment').hide();
		}
		if($('#nextStepsBox').hasClass('no_faqs')){
			$('#nextSteps_item_faqs').hide();
		}
		if($('#nextStepsBox').hasClass('no_discussion')){
			$('#nextSteps_item_discussion').hide();
		}
		if($('#nextStepsBox').hasClass('no_index')){
			$('#nextSteps_item_index').hide();
		}
		if($('#nextStepsBox').hasClass('no_resources')){
			$('#nextSteps_item_resources').hide();
		}
	}

/* Code to hide or change different parts of the finalStepsBox list */

var finalStepsBox_modification_no_quiz = "<p><strong>Assignment and FAQs:</strong> You still have an assignment for this lesson so be sure to do that. Also, check out the FAQs for this lesson—you might find the answer to something you're wondering about here.</p>";

var finalStepsBox_modification_no_assignment = "<p><strong>Quiz and FAQs:</strong> You still have a quiz for this lesson, so be sure to try it out. Also, check out the FAQs for this lesson&mdash;you might find the answer to something you're wondering about here.</p>";

var finalStepsBox_modification_no_faqs = "<p><strong>Assignment and FAQs:</strong> You still have an assignment for this lesson, as well as a quiz, so be sure to do those.</p>";



if($('#finalStepsBox').exists()){
	if(
		$('#finalStepsBox').hasClass('no_faqs')&&
		$('#finalStepsBox').hasClass('no_assignment')&&
		$('#finalStepsBox').hasClass('no_quiz')
	){
		$('#finalSteps_item_quiz_assignment_faqs').hide();
	}
	else{
		if($('#finalStepsBox').hasClass('no_quiz')){
			$('#finalSteps_item_quiz_assignment_faqs').html(finalStepsBox_modification_no_quiz);
		}
		else if($('#finalStepsBox').hasClass('no_assignment')){
			$('#finalSteps_item_quiz_assignment_faqs').html(finalStepsBox_modification_no_assignment);
		}
		else if($('#finalStepsBox').hasClass('no_faqs')){
			$('#finalSteps_item_quiz_assignment_faqs').html(finalStepsBox_modification_no_faqs);
		}
	}
	
	if($('#finalStepsBox').hasClass('no_resources')){
		$('#finalSteps_item_resources').hide();
	}
	if($('#finalStepsBox').hasClass('no_exam')){
		$('#finalSteps_item_exam').hide();
	}
	if($('#finalStepsBox').hasClass('no_evaluation')){
		$('#finalSteps_item_evaluation').hide();
	}
	if($('#finalStepsBox').hasClass('no_discussion')){
		$('#finalSteps_item_discussion').hide();
	}
}

});

/* ------------------STOP NEXT/FINAL STEPS GLOBAL UPDATE---------------------------- */



/* ------------------ START WINDOW OPEN FUNCTION (Used for pop-up windows in some courses) ---------------------------- */

function openWindow(url, w, h, tool, scroll, resize) {
    var X = 0;
    var Y = 0;
    if (screen.availWidth) {
        X = (screen.availWidth / 2) - (w / 2);
        Y = (screen.availHeight / 2) - (h / 2);
    }

    popupWindow = window.open(url, 'popUp', 'left=' + X + 'screenX=' + X + 'screenY=' + Y + ',top=' + Y + ',toolbar=' + tool + ',scrollbars=' + scroll + ',resizable=' + resize + ',height=' + h + ',width=' + w);
    popupWindow.focus();
}

/* ------------------ STOP WINDOW OPEN FUNCTION (Used for pop-up windows in some courses) ---------------------------- */

/* ------------------ START VARIOUS OTHER FUNCTIONS FROM THE ORIGINAL CLASSROOM.JS FILE, USED IN CHAPTERS AND ASSIGNMENTS IN MANY COURSES  ---------------------------- */

function closeWindow() {
    self.close();
}

function goThere(myUrl) {
    opener.window.location = myUrl;
    window.close();
}

function shake_xy(n) {
    if (self.moveBy) {
        for (i = 4; i > 0; i--) {
            for (j = n; j > 0; j--) {
                self.moveBy(0, i);
                self.moveBy(i, 0);
                self.moveBy(0, -i);
                self.moveBy(-i, 0);
            }
        }
    }
}

function MM_findObj(n, d) {
    var p, i, x; if (!d) d = document; if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
        d = parent.frames[n.substring(p + 1)].document; n = n.substring(0, p);
    }
    if (!(x = d[n]) && d.all) x = d.all[n]; for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
    for (i = 0; !x && d.layers && i < d.layers.length; i++) x = MM_findObj(n, d.layers[i].document); return x;
}

function MM_swapImage() {
    var i, j = 0, x, a = MM_swapImage.arguments; document.MM_sr = new Array; for (i = 0; i < (a.length - 2); i += 3)
        if ((x = MM_findObj(a[i])) != null) { document.MM_sr[j++] = x; if (!x.oSrc) x.oSrc = x.src; x.src = a[i + 2]; }
}

function MM_swapImgRestore() {
    var i, x, a = document.MM_sr; for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}

function MM_preloadImages() {
    var d = document; if (d.images) {
        if (!d.MM_p) d.MM_p = new Array();
        var i, j = d.MM_p.length, a = MM_preloadImages.arguments; for (i = 0; i < a.length; i++)
            if (a[i].indexOf("#") != 0) { d.MM_p[j] = new Image; d.MM_p[j++].src = a[i]; }
    }
}

/* ------------------ STOP VARIOUS OTHER FUNCTIONS FROM THE ORIGINAL CLASSROOM.JS FILE, USED IN CHAPTERS AND ASSIGNMENTS IN MANY COURSES  ---------------------------- */

/* /////////////////////////////////////// START 2014 November remove  ////////////////////////////////////////////////////////////// */

/* ------------------ START Temp fix for old classroom's assignment alignment section. Delete after Septemeber 2013 STOP ------ 
$(document).ready(function(){
if($('.assignment_style').exists()){
//alert('Old Assignments Section');
$('a[name^="lesson"]').each(function() {
    $(this).css('float','left');
});
}
})
/* ------------------ STOP Temp fix for old classroom's assignment alignment section. Delete after Septemeber 2013  STOP ------ */
/* ------------------ START Temp fix for TH bolding until it's fixed in standards.css START ------ */
$(document).ready(function() {
    $('th').css('font-weight','bold');
});
/* ------------------ STOP Temp fix for TH bolding until it's fixed in standards.css STOP ------ */

/* ------------------ START Temp fix for OLD classroom FAQ links START ------ 
$(document).ready(function(){
	if($('.course-faq').exists()){
	  $("a[href^='UserControls/Old/']").each(function(){
		  tempFAQHref = $(this).attr('href');
		  tempFAQHref = tempFAQHref.replace('UserControls/Old/','');
		  $(this).attr('href',tempFAQHref);
	  })
	}
})
/* ------------------ STOP Temp fix for OLD classroom FAQ links STOP ------ */

/* /////////////////////////////////////// STOP 2014 November remove  ////////////////////////////////////////////////////////////// */


/////////////////////////////// GLOSSARY TOOLTIP START  ///////////////////////////////
var glossaryTooltipDisabled = false;

var glossaryTooltip_terms = ["glossaryTooltip terms should be located within the course.js file of each course."];
var glossaryTooltip_definitions = ["glossaryTooltip definitions should be located within the course.js file of each course."];
var definitionIndex;
$(document).ready(function(){
	if(!glossaryTooltipDisabled){
		for(i=0;i<glossaryTooltip_terms.length;i++){
			glossaryTooltip_terms[i] = glossaryTooltip_terms[i].toLowerCase();
		}; 
		if($('.main-content').exists()){
			if(!$('.pretest').exists() && !$('.lesson-quiz').exists() && !$('.final').exists()){
				$('.main-content').highlightTerm(glossaryTooltip_terms,{ wordsOnly: true,caseSensitive: false});
			}
		}
		else if($('#main-content').exists()){
			if(!$('.pretest').exists() && !$('.lesson-quiz').exists() && !$('.final').exists()){
				$('#main-content').highlightTerm(glossaryTooltip_terms,{ wordsOnly: true,caseSensitive: false});
			}
		}
		$(".highlightTerm").each(function(){
			if($(this).parents().is('a, h1, h2, h3, h4, h5')){
				$(this).removeClass('highlightTerm');
			}
			else{
			definitionIndex =  glossaryTooltip_terms.indexOf($(this).text().toLowerCase())
			$(this).wrap('<abbr rel="glossaryTooltip" title="'+glossaryTooltip_definitions[definitionIndex]+'"></abbr>');
			}
		});
		
		/*$(".highlightTerm").each(function(){
			definitionIndex =  glossaryTooltip_terms.indexOf($(this).text().toLowerCase())
			$(this).wrap('<abbr rel="glossaryTooltip" title="'+glossaryTooltip_definitions[definitionIndex]+'"></abbr>');
		});*/
	}
});

/////////////////////////////// HIGHLIGHT PLUGIN START  ///////////////////////////////

/*
 * jQuery Highlight plugin
 *
 * Based on highlightTerm v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlightTerm-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlightTerm only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlightTerm element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlightTerm'> (default options)
 *   $('#content').highlightTerm('lorem');
 *
 *   // search for and highlightTerm more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlightTerm(['lorem', 'ipsum']);
 *   $('#content').highlightTerm('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlightTerm('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlightTerm('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlightTerm('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlightTerm
 *   $('#content').unhighlightTerm();
 *
 *   // remove custom highlightTerm
 *   $('#content').unhighlightTerm({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */

jQuery.extend({
    highlightTerm: function (node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlightTerm = document.createElement(nodeName || 'span');
                highlightTerm.className = className || 'highlightTerm';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlightTerm.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlightTerm, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
                !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
                !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlightTermed
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlightTerm(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlightTerm = function (options) {
    var settings = { className: 'highlightTerm', element: 'span' };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function () {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlightTerm = function (words, options) {
    var settings = { className: 'highlightTerm', element: 'span', caseSensitive: false, wordsOnly: false };
    jQuery.extend(settings, options);
    
    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i){
      return word != '';
    });
    words = jQuery.map(words, function(word, i) {
      return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; };

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);
    
    return this.each(function () {
        jQuery.highlightTerm(this, re, settings.element, settings.className);
    });
};
/////////////////////////////// HIGHLIGHT PLUGIN STOP  ///////////////////////////////


/*/////////////////////////////// TOOLTIP START  ///////////////////////////////
*
*Copyright free jQuery plugin located at:
*http://osvaldas.info/elegant-css-and-jquery-glossaryTooltip-responsive-mobile-friendly
*
//////////////////////////////////////////////////////////////////////////////*/

$( document ).ready( function()
{
	if(!glossaryTooltipDisabled){
		var targets = $( '[rel~=glossaryTooltip]' ),
			target  = false,
			glossaryTooltip = false,
			title   = false;
	 
		targets.bind( 'mouseenter', function()
		{
			target  = $( this );
			tip     = target.attr( 'title' );
			glossaryTooltip = $( '<div id="glossaryTooltip"></div>' );
	 
			if( !tip || tip == '' )
				return false;
	 
			target.removeAttr( 'title' );
			glossaryTooltip.css( 'opacity', 0 )
				   .html( tip )
				   .appendTo( 'body' );
	 
			var init_glossaryTooltip = function()
			{
				if( $( window ).width() < glossaryTooltip.outerWidth() * 1.5 )
					glossaryTooltip.css( 'max-width', $( window ).width() / 2 );
				else
					glossaryTooltip.css( 'max-width', 340 );
	 
				var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( glossaryTooltip.outerWidth() / 2 ),
					pos_top  = target.offset().top - glossaryTooltip.outerHeight() - 20;
	 
				if( pos_left < 0 )
				{
					pos_left = target.offset().left + target.outerWidth() / 2 - 20;
					glossaryTooltip.addClass( 'left' );
				}
				else
					glossaryTooltip.removeClass( 'left' );
	 
				if( pos_left + glossaryTooltip.outerWidth() > $( window ).width() )
				{
					pos_left = target.offset().left - glossaryTooltip.outerWidth() + target.outerWidth() / 2 + 20;
					glossaryTooltip.addClass( 'right' );
				}
				else
					glossaryTooltip.removeClass( 'right' );
	 
				if( pos_top < 0 )
				{
					var pos_top  = target.offset().top + target.outerHeight();
					glossaryTooltip.addClass( 'top' );
				}
				else
					glossaryTooltip.removeClass( 'top' );
	 
				glossaryTooltip.css( { left: pos_left, top: pos_top } )
					   .animate( { top: '+=10', opacity: 1 }, 50 );
			};
	 
			init_glossaryTooltip();
			$( window ).resize( init_glossaryTooltip );
	 
			var remove_glossaryTooltip = function()
			{
				glossaryTooltip.animate( { top: '-=10', opacity: 0 }, 50, function()
				{
					$( this ).remove();
				});
	 
				target.attr( 'title', tip );
			};
	 
			target.bind( 'mouseleave', remove_glossaryTooltip );
			glossaryTooltip.bind( 'click', remove_glossaryTooltip );
		});

	};

});

/////////////////////////////// TOOLTIP STOP  ///////////////////////////////

/////////////////////////////// GLOSSARY TOOLTIP STOP  ///////////////////////////////




/////////////////////////////// FULLSCREEN-VIEW RESPONSIVE METATAG START  ///////////////////////////////
var mobileFriendlyFullscreen = true;

$(document).ready(function(){
	if(mobileFriendlyFullscreen){
		if($('.lesson-fullscreen').exists()){
			//$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />');
			$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1" />');
			$('.lesson-fullscreen img').css('max-width','100%');
		}
	}
});

/////////////////////////////// FULLSCREEN-VIEW RESPONSIVE METATAG STOP  ///////////////////////////////


/////////////////////////////// HTML5 AUDIO PLAYER START  ///////////////////////////////

var ILC_HTML5_audio_enabled = false; //Set this variable to true in the course.js file in order to use the player
var ILC_HTML5_audio_btn_playing_CSS = "ILC_HTML5_audio_btn_playing"; //*OPTIONAL: Change this class name in course.js to change the CSS style of the buttons
var ILC_HTML5_audio_btn_stopped_CSS = "ILC_HTML5_audio_btn_stopped"; //*OPTIONAL: Change this class name in course.js to change the CSS style of the buttons
var ILC_HTML5_playBtnText = "Play"; //*OPTIONAL: Change this text in course.js file
var ILC_HTML5_playingBtnText = "Loading..."; //*OPTIONAL: Change this text in course.js file
var ILC_HTML5_audio_html_text = false;

var ILC_HTML5_audio_tracks_array = []; // don't touch
var ILC_HTML5_audioBtnTarget = ""; // don't touch

$(document).ready(function(e) {
  if(ILC_HTML5_audio_enabled && $('.ILC_HTML5_audio_btn').exists()){
	var ILC_HTML5_current_audio_track = new Audio(); // don't touch
	var ILC_HTML5_newAudioTrack = new Audio; // don't touch
	var ILC_HTML5_audioBtnThis,ILC_HTML5_audioFolder;
	if(ILC_HTML5_audio_html_text){
		$('.ILC_HTML5_audio_btn').html(ILC_HTML5_playBtnText);
	}
	else{
		$('.ILC_HTML5_audio_btn').text(ILC_HTML5_playBtnText);
	}
	$('.ILC_HTML5_audio_btn').addClass(ILC_HTML5_audio_btn_stopped_CSS);
	
	$('.ILC_HTML5_audio_btn').each(function(e){
	  var ILC_HTML5_audioBtnThis = $(this).attr('id');
	  
	  if ($(this).attr("data-audio-folder") === undefined ) {
	  	ILC_HTML5_newAudioTrack = new Audio(courseURL+'audio/'+ILC_HTML5_audioBtnThis+'.mp3');
	  }
	  else{
	  	ILC_HTML5_audioFolder = $(this).attr('data-audio-folder');
		ILC_HTML5_newAudioTrack = new Audio(courseURL+'audio/'+ILC_HTML5_audioFolder+'/'+ILC_HTML5_audioBtnThis+'.mp3');
	  }
	  //ILC_HTML5_newAudioTrack = new Audio(courseURL+'audio/'+ILC_HTML5_audioBtnThis+'.mp3');
	  ILC_HTML5_audio_tracks_array.push(ILC_HTML5_newAudioTrack);
	});
	
	$('.ILC_HTML5_audio_btn').click(function(e){
	  e.preventDefault();
	  ILC_HTML5_current_audio_track.pause();
	  ILC_HTML5_audioBtnTarget = String(e.target.id);
	  $('.ILC_HTML5_audio_btn').removeClass(ILC_HTML5_audio_btn_playing_CSS);
	  $('.ILC_HTML5_audio_btn').addClass(ILC_HTML5_audio_btn_stopped_CSS);
	  $("#"+ILC_HTML5_audioBtnTarget).removeClass(ILC_HTML5_audio_btn_stopped_CSS);
	  $("#"+ILC_HTML5_audioBtnTarget).addClass(ILC_HTML5_audio_btn_playing_CSS);
	  ILC_HTML5_audio_btn_index = $('.ILC_HTML5_audio_btn').index(this);
	  
	  //ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index].currentTime=0;
	  ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index].play();
	  ILC_HTML5_current_audio_track = ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index];
	  if(ILC_HTML5_audio_html_text){
		  $('.ILC_HTML5_audio_btn').html(ILC_HTML5_playBtnText);
		  $("#"+ILC_HTML5_audioBtnTarget).html(ILC_HTML5_playingBtnText);
	  }
	  else{
		  $('.ILC_HTML5_audio_btn').text(ILC_HTML5_playBtnText);
		  $("#"+ILC_HTML5_audioBtnTarget).text(ILC_HTML5_playingBtnText);
	  }
	  
	  var ILC_HTML5_audio_onEnded = function() {
		  if(ILC_HTML5_audio_html_text){
			$("#"+ILC_HTML5_audioBtnTarget).html(ILC_HTML5_playBtnText);
		  }
		  else{
			$("#"+ILC_HTML5_audioBtnTarget).text(ILC_HTML5_playBtnText);
		  }
		$("#"+ILC_HTML5_audioBtnTarget).addClass(ILC_HTML5_audio_btn_stopped_CSS);
		$("#"+ILC_HTML5_audioBtnTarget).removeClass(ILC_HTML5_audio_btn_playing_CSS);
	  }
	  
	  ILC_HTML5_audio_tracks_array[ILC_HTML5_audio_btn_index].addEventListener('ended', ILC_HTML5_audio_onEnded, false);	
	});
  }
});

/////////////////////////////// HTML5 AUDIO PLAYER STOP  ///////////////////////////////

/*  ================== START -- gameEQ / textEQ -- START ================== */
	var EQskipCount = 0;
	var EQcount = 0;
	var textEQ_btn_label_show = "Show Text Equivalent";
	var textEQ_btn_label_hide = "Hide Text Equivalent";
//$(document).ready(function(){
function ed2go_wcag_toggle(){	
	if($('h5:contains("[#TOGGLE"),h5:contains("[#toggle")').exists()){
		$('h5:contains("[#TOGGLE"),h5:contains("[#toggle")').each(function(){
			//$(this).text('');
			var textEQ_tags_temp = $(this).text();
			textEQ_tags_temp = textEQ_tags_temp.replace(/TOGGLE/i,'');
			textEQ_tags_temp = textEQ_tags_temp.replace('[#','');
			textEQ_tags_temp = textEQ_tags_temp.replace('#]','');			
			textEQ_tags_temp = textEQ_tags_temp.trim();
			if(EQcount > 2){
				EQcount = 0;
			}
			EQcount ++;
			
			$(this).before('<div class="textEQ_'+EQcount+' '+textEQ_tags_temp+' automaking"></div>');
			$(this).remove();
		})
		
	$('.textEQ_2.automaking').toggle();
	
	$('.textEQ_1.automaking').each(function(){ 
		EQskipCount ++;
		var textEQ_btn_visibility = '';
		if($(this).hasClass('HIDDEN') || $(this).hasClass('hidden')){
			$(this).removeClass('HIDDEN');
			$(this).removeClass('hidden');
			textEQ_btn_visibility = 'wcag_hidden';
		}
		$(this).nextUntil('.textEQ_2.automaking').appendTo(this);
		$(this).before('<div class="textEQ_container automaking"><button class="textEQ_btn automaking '+textEQ_btn_visibility+'">Toggle</button></div>');
	});
	
	
	$('.textEQ_2.automaking').each(function(){ 
		$(this).append('<p align="center" class="caption">Text equivalent start.</p>');
		$(this).nextUntil('.textEQ_3.automaking').appendTo(this);
		$(this).append('<p align="center" class="caption">Text equivalent stop.</p>');
	});
	$('.textEQ_container.automaking').each(function(){
		$(this).nextUntil('.textEQ_3.automaking').appendTo(this);
		
		
	});
	$('.textEQ_3.automaking').each(function(){
		$(this).remove();
	});
	$('.skip_activity_anchor.automaking').each(function(){
		$(this).insertAfter($(this).parent('.textEQ_container.automaking'));
	});
	$('.textEQ_btn.automaking').text(textEQ_btn_label_show);
	
	
	$('.textEQ_container.automaking').find('.textEQ_btn.automaking').click(function(event){
			event.preventDefault();
			if($(this).siblings('.textEQ_1').is(':visible')){
				$(this).siblings('.textEQ_1').fadeToggle("fast",function(){
					$(this).siblings('.textEQ_2').fadeToggle("fast");
				});
			}
			else{
				$(this).siblings('.textEQ_2').fadeToggle("fast",function(){
					$(this).siblings('.textEQ_1').fadeToggle("fast");
				});
			}
			
			$(this).toggleClass('textEQ_btn_clicked');
			if($(this).hasClass('textEQ_btn_clicked')){
				$(this).text(textEQ_btn_label_hide);
			}
			else{
				$(this).text(textEQ_btn_label_show);
			}
		});
	}
	$('.automaking').each(function(){
		$(this).removeClass('automaking');
	});
	
//})
}
$(document).ready(function(){
	ed2go_wcag_toggle();
});
/*  ================== STOP -- gameEQ / textEQ -- STOP ================== */

/////////////////////////////// START -- AUTOMAKE CHECK -- START ///////////////////////////////

$(document).ready(function(){
	
	var automake_quiz_test;	
	var automake_reveal_test;
	
	$('#main-paragraph-text li, .main-paragraph-text li').each(function(){
		var automake_check = $(this).clone()
								.children()
								.remove()
								.end()
								.text();
		automake_check = automake_check.trim();
		var automake_test_start = automake_check.search(/\[#/gi);
		var automake_test_stop = automake_check.search(/\#]/gi);
		if(automake_test_start > -1 && automake_test_stop > -1){

			automake_check = automake_check.replace('[#','');
			automake_check = automake_check.replace('#]','');
			automake_check = automake_check.trim();
			
			if(automake_check.search(/automake_quiz/gi) === -1 && automake_check.search(/automake_reveal/gi) === -1 && automake_check.search(/automake_game/gi) === -1){
				//simplified tag used
				automake_check = 'automake '+automake_check+' automake-2';
				$(this).addClass('automake_tag').parent().wrap('<div class="'+automake_check+'"></div>');
			}
			else{
				//original tag used
				automake_check = automake_check+' automake';
				$(this).addClass('automake_tag').parent().wrap('<div class="'+automake_check+'"></div>');
			}
			
			automake_quiz_test = automake_check.search(/quiz/gi);
			automake_reveal_test = automake_check.search(/reveal/gi);
			
			
			
			if(automake_quiz_test > -1){
				$(this).next().wrap('<ul class="automake_quiz_group"></ul>');
			}
			else if(automake_reveal_test === -1){
				$(this).parent('ul').addClass('automake-game-list');
				$(this).remove();
			}
		}
		else if((automake_check.charAt(0) === ',' || automake_check.charAt(0) === '.') && automake_quiz_test > -1){
			$(this).next('li').wrap('<ul class="automake_quiz_group"></ul>');
			$(this).remove();
		}
		automake_check = null;
	});
	if($('.automake:not(.automake_quiz,.automake_reveal)').length > 0){
		$('.automake:not(.automake_quiz,.automake_reveal)').each(function(){
			//$(this).addClass('automake-checked');
			
			if($(this).hasClass('quiz')){
				$(this).addClass('automake_quiz');
				$(this).removeClass('quiz');
			}
			else if($(this).hasClass('reveal')){
				$(this).addClass('automake_reveal');
				$(this).removeClass('reveal');
			}
			else{
				$(this).addClass('automake_game');
			}
		});
	}
	if($('.automake_quiz').length > 0){
		$('.automake_quiz').hide();
		$('head').append('<link rel="stylesheet" type="text/css" href="'+globalURL+'automake/automake_quiz/automake_quiz.css" />');
		$.getScript(globalURL+"automake/automake_quiz/automake_quiz.js");
	}
	if($('.automake_reveal').length > 0){
		$('.automake_reveal').hide();
		$('head').append('<link rel="stylesheet" type="text/css" href="'+globalURL+'automake/automake_reveal/automake_reveal.css" />');
		$.getScript(globalURL+"automake/automake_reveal/automake_reveal.js");
	}
	if($('.automake_game').length > 0){
		$('.automake_game').children('ul').hide();
		var automake_games_loaded = [];
		var automake_game_name;
		$('.automake_game').each(function(){
			var classNames = $(this).attr("class").toString().split(' ');
			automake_game_name = classNames[1];
			var gameCheck = automake_games_loaded.indexOf(automake_game_name);
			if(gameCheck === -1){
				
				automake_games_loaded.push(automake_game_name);
				
				$('head').append('<link rel="stylesheet" type="text/css" href="'+globalURL+'automake/automake_game/'+automake_game_name+'/game.css?'+e2g_randomNumber+'" />');
				$.getScript(globalURL+'automake/automake_game/'+automake_game_name+'/game.js?'+e2g_randomNumber);		
			}
		});		
			
	}
	$('.automake.custom').each(function(){
		$(this).removeClass('custom').addClass('automake-custom');
	});
	$('.automake-2:not(.custom, .automake-custom)').each(function(){
		$(this).addClass('automake-default');
	});
});

/////////////////////////////// STOP -- AUTOMAKE CHECK -- STOP ///////////////////////////////


/////////////////////////////// START -- QUIZ BUTTON FIXIT -- START ///////////////////////////////
/* This disables the 'screwDefaultButtons.js effect in the quizzes, pretest and finals to make them accessible to screen readers. It also hides the 'retake quiz' image and replaces it with a plain text link.  */

IE_pre8 = true;
$(document).ready(function(){
	if($('#ctl00_cphMain_ctl00_rptResults_ctl06_quiz_submit_btn').exists()){
		$('#ctl00_cphMain_ctl00_rptResults_ctl06_quiz_submit_btn').hide();	
		$('#ctl00_cphMain_ctl00_rptResults_ctl06_hlkRetake').text('Retake Quiz');
	}
});
/////////////////////////////// STOP -- QUIZ BUTTON FIXIT -- STOP ///////////////////////////////

/*  ================== START -- PRESTO CHANGO -- START ================== */
$(document).ready(function(){
	if(($('.presto').exists() && $('.chango').exists())||($('.presto').exists() && $('.changeo').exists())){
		
		if($('.changeo').exists()){
			$('.changeo').each(function(){
				$(this).addClass('chango');
			});
		}
		$('.presto,.chango').css('cursor','pointer');
		$('.chango').fadeTo(0,0).hide();
		$('.presto').click(function(event){
			event.preventDefault();
			var prestoIndex = $(this).index('.presto');
			$(this).fadeTo('fast',0,function(){
				$(this).hide();
				$('.chango:eq('+prestoIndex+')').show().fadeTo('fast',1.0);
			});
			
			
		})
		$('.chango').click(function(event){
			event.preventDefault();
			var changoIndex = $(this).index('.chango');
			$(this).fadeTo('fast',0,function(){
				$(this).hide();
				$('.presto:eq('+changoIndex+')').show().fadeTo('fast',1.0);
			})
		})
	}
})
/*  ================== STOP -- PRESTO CHANGO -- STOP ================== */

/*  ================== START -- AUTO VIDEO -- START ================== */

$(document).ready(function(){
	$('.courseVideo,.courseVideoTemp').hide();
	
	$('#main-content,.main-content').find('.courseVideo').each(function(){
		var courseVideo_var = window[$(this).text()];
		var courseVideoTranscript_var = window[$(this).text()+'_TRANS'];
		var courseVideoTranscript_img = 'https://api.ed2go.com/CourseBuilder/2.0/images/resources/dev/global/video/transcript.png';
		var courseVideo_container = '';
		if(courseVideoTranscript_var == ''){
			courseVideo_container = '<div class="courseVideoSection">'+courseVideo_var+'</div>'
		}
		else{
			courseVideo_container = '<div class="courseVideoSection">'+courseVideo_var+'<div class="courseTranscriptArea"><a href="'+courseVideoTranscript_var+'" target="_blank"><div class="courseTranscriptIcon"><img src="'+courseVideoTranscript_img+'" alt=""></div><div class="courseTranscriptText">DOWNLOAD VIDEO TRANSCRIPT</div></a></div></div>'
		}

		$(this).after(courseVideo_container);
	});
});

/*  ================== STOP -- AUTO VIDEO -- STOP ================== */


/* =================== START -- 100% IMAGE ALT -- START =================== */

$(document).ready(function(){
	$("img").each(function() {
    var altCheckImg = $(this);
   //if (!altCheckImg.attr("alt") || altCheckImg.attr("alt") === "")
    if (!altCheckImg.attr("alt"))
        altCheckImg.attr("alt", "");
    });
})

/* =================== STOP -- 100% IMAGE ALT -- STOP =================== */
/////////////////////////////// CB NOTES START  ///////////////////////////////

$(document).ready(function() {
	$('.main-paragraph-text h5,#main-paragraph-text h5').hide();
});

/////////////////////////////// CB NOTES STOP  ///////////////////////////////
$(document).ready(function(){
	var e2g_enlarge_checked = 0;
	$('.e2g-enlarge').each(function(){
		e2g_enlarge_checked ++;
		$(this).clone().toggleClass('e2g-enlarge e2g-enlarge-clone wcag_hidden').insertBefore(this);
		var temp_img_src = $(this).attr('src');
		var temp_img_src_LG = temp_img_src;
		temp_img_src_LG = temp_img_src_LG.replace(/.jpg/i,'_LG.jpg');
		temp_img_src_LG = temp_img_src_LG.replace(/.png/i,'_LG.png');
		temp_img_src_LG = temp_img_src_LG.replace(/.gif/i,'_LG.gif');
		$(this).wrap('<a href="'+temp_img_src_LG+'" class="popupimage_butterfly e2g-enlarge-container e2g-enlarge-check"  aria-hidden="true"></a>');
		if(e2g_enlarge_checked === $('.e2g-enlarge').length){
			automake_enlarge_icons();
		}
	});
	
	
	function automake_enlarge_icons(){
		$('.popupimage-container').each(function(){
			$(this).remove();
		});
		$('.e2g-enlarge.wcag_hidden').removeClass('wcag_hidden');
		
		$('.e2g-enlarge-container').each(function(){
			var temp_img, temp_img_src, temp_alt, temp_w, temp_h, temp_margin_top,temp_link;
			
				temp_img = $(this).find('img:not(.pf_placeholder_image)');
				temp_img_src = temp_img.attr('src');
				temp_alt = temp_img.attr('alt');
				temp_w = temp_img.width();
				temp_h = temp_img.height();
				temp_margin_top = temp_h - 40;
				temp_link = $(this).attr('href');
				
				if(temp_h == 0 || temp_h == null){
					$(this).addClass('e2g-enlarge-check');
				}
				else{
					$(this).removeClass('e2g-enlarge-check');
				}
			
			$(this).find('img:not(.pf_placeholder_image)').addClass('wcag_hidden');
			$(this).append('<div class="popupimage-container" style="width:'+temp_w+'px; height:'+temp_h+'px; background-image:url('+temp_img_src+');"><img class="e2g-icon-enlarge" style="margin-top:'+temp_margin_top+'px" src="'+globalURL+'e2g-icon/basic/e2g-icon-enlarge.png" alt="Click to Enlarge Image"/></div>');
			
		});
	}
	$(window).resize(function(){
		automake_enlarge_icons();
	});
	
	var e2g_enlarge_check;
	function e2g_enlarge_checking(){
		if($('.e2g-enlarge-check').length > 0){
			automake_enlarge_icons();
		}
		else{
			e2g_enlarge_timer_complete()
		}
	}
	function e2g_enlarge_timer() {
		e2g_enlarge_check = setInterval(e2g_enlarge_checking, 1000);
	}
	
	function e2g_enlarge_timer_complete() {
		clearTimeout(e2g_enlarge_check);
	}	
	e2g_enlarge_timer();
});
