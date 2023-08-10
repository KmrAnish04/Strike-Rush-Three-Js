(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="153",Ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wu=0,Ga=1,Eu=2,dh=1,fh=2,On=3,Xn=0,jt=1,mn=2,si=0,rs=1,Wa=2,Xa=3,qa=4,bu=5,ts=100,Su=101,Au=102,ja=103,Ya=104,Tu=200,Ru=201,Cu=202,Lu=203,ph=204,mh=205,Pu=206,Iu=207,Du=208,Fu=209,Nu=210,Uu=0,Bu=1,Ou=2,ta=3,zu=4,ku=5,Vu=6,Hu=7,Wr=0,Gu=1,Wu=2,Gn=0,Xu=1,qu=2,gh=3,ju=4,Yu=5,_h=300,ls=301,cs=302,Nr=303,na=304,Xr=306,An=1e3,qt=1001,Ur=1002,Ct=1003,ia=1004,Dr=1005,Xt=1006,vh=1007,Ti=1008,ri=1009,Ku=1010,$u=1011,va=1012,xh=1013,ni=1014,zn=1015,zs=1016,yh=1017,Mh=1018,Ei=1020,Zu=1021,tn=1023,Ju=1024,Qu=1025,bi=1026,hs=1027,ed=1028,wh=1029,td=1030,Eh=1031,bh=1033,so=33776,ro=33777,oo=33778,ao=33779,Ka=35840,$a=35841,Za=35842,Ja=35843,nd=36196,Qa=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,lo=36492,id=36283,ml=36284,gl=36285,_l=36286,sd=2200,rd=2201,od=2202,ks=2300,us=2301,co=2302,ns=2400,is=2401,Br=2402,xa=2500,ad=2501,ld=0,Sh=1,sa=2,Ah=3e3,Si=3001,cd=3200,hd=3201,qr=0,ud=1,Ai="",Ee="srgb",Tn="srgb-linear",Th="display-p3",ho=7680,dd=519,fd=512,pd=513,md=514,gd=515,_d=516,vd=517,xd=518,yd=519,ra=35044,vl="300 es",oa=1035,kn=2e3,Or=2001;class ai{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const Ns=Math.PI/180,ds=180/Math.PI;function gn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[o&255]+Nt[o>>8&255]+Nt[o>>16&255]+Nt[o>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function vt(o,e,t){return Math.max(e,Math.min(t,o))}function ya(o,e){return(o%e+e)%e}function Md(o,e,t,n,i){return n+(o-e)*(i-n)/(t-e)}function wd(o,e,t){return o!==e?(t-o)/(e-o):0}function Us(o,e,t){return(1-t)*o+t*e}function Ed(o,e,t,n){return Us(o,e,1-Math.exp(-t*n))}function bd(o,e=1){return e-Math.abs(ya(o,e*2)-e)}function Sd(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Ad(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Td(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Rd(o,e){return o+Math.random()*(e-o)}function Cd(o){return o*(.5-Math.random())}function Ld(o){o!==void 0&&(xl=o);let e=xl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pd(o){return o*Ns}function Id(o){return o*ds}function aa(o){return(o&o-1)===0&&o!==0}function Rh(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function zr(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Dd(o,e,t,n,i){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),d=r((e-n)/2),f=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*m,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*m,a*c);break;case"ZYZ":o.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function nt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const nn={DEG2RAD:Ns,RAD2DEG:ds,generateUUID:gn,clamp:vt,euclideanModulo:ya,mapLinear:Md,inverseLerp:wd,lerp:Us,damp:Ed,pingpong:bd,smoothstep:Sd,smootherstep:Ad,randInt:Td,randFloat:Rd,randFloatSpread:Cd,seededRandom:Ld,degToRad:Pd,radToDeg:Id,isPowerOfTwo:aa,ceilPowerOfTwo:Rh,floorPowerOfTwo:zr,setQuaternionFromProperEuler:Dd,normalize:nt,denormalize:Vn};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,s,r,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c)}set(e,t,n,i,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=i[0],g=i[3],p=i[6],v=i[1],x=i[4],w=i[7],M=i[2],b=i[5],C=i[8];return s[0]=r*_+a*v+l*M,s[3]=r*g+a*x+l*b,s[6]=r*p+a*w+l*C,s[1]=c*_+h*v+u*M,s[4]=c*g+h*x+u*b,s[7]=c*p+h*w+u*C,s[2]=d*_+f*v+m*M,s[5]=d*g+f*x+m*b,s[8]=d*p+f*w+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*s*h+n*a*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*r)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new ze;function Ch(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Vs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const yl={};function Bs(o){o in yl||(yl[o]=!0,console.warn(o))}function os(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Fd=new ze().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Nd=new ze().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ud(o){return o.convertSRGBToLinear().applyMatrix3(Nd)}function Bd(o){return o.applyMatrix3(Fd).convertLinearToSRGB()}const Od={[Tn]:o=>o,[Ee]:o=>o.convertSRGBToLinear(),[Th]:Ud},zd={[Tn]:o=>o,[Ee]:o=>o.convertLinearToSRGB(),[Th]:Bd},cn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Tn},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.enabled===!1||e===t||!e||!t)return o;const n=Od[e],i=zd[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let Fi;class Lh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fi===void 0&&(Fi=Vs("canvas")),Fi.width=e.width,Fi.height=e.height;const n=Fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=os(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kd=0;class Ph{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?s.push(po(i[r].image)):s.push(po(i[r]))}else s=po(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function po(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Lh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vd=0;class wt extends ai{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=qt,i=qt,s=Xt,r=Ti,a=tn,l=ri,c=wt.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=gn(),this.name="",this.source=new Ph(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Si?Ee:Ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_h)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?Si:Ah}set encoding(e){Bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Si?Ee:Ai}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=_h;wt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(f+1)/2,M=(p+1)/2,b=(h+d)/4,C=(u+_)/4,R=(m+g)/4;return x>w&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=b/n,s=C/n):w>M?w<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(w),n=b/i,s=R/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=C/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ri extends ai{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Si?Ee:Ai),this.texture=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ph(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ih extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hd extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Lt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[r+0],f=s[r+1],m=s[r+2],_=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-a;const p=l*d+c*f+h*m+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const M=Math.sqrt(x),b=Math.atan2(M,p*v);g=Math.sin(g*b)/M,a=Math.sin(a*b)/M}const w=a*v;if(l=l*g+d*w,c=c*g+f*w,h=h*g+m*w,u=u*g+_*w,g===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[r],d=s[r+1],f=s[r+2],m=s[r+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-s*l,this._y=i*h+r*l+s*a-n*c,this._z=s*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-r*t,d=-s*t-r*n-a*i;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new N,Ml=new Lt;class _n{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)In.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(In)}else i.boundingBox===null&&i.computeBoundingBox(),Ni.copy(i.boundingBox),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Zs.subVectors(this.max,Es),Ui.subVectors(e.a,Es),Bi.subVectors(e.b,Es),Oi.subVectors(e.c,Es),qn.subVectors(Bi,Ui),jn.subVectors(Oi,Bi),di.subVectors(Ui,Oi);let t=[0,-qn.z,qn.y,0,-jn.z,jn.y,0,-di.z,di.y,qn.z,0,-qn.x,jn.z,0,-jn.x,di.z,0,-di.x,-qn.y,qn.x,0,-jn.y,jn.x,0,-di.y,di.x,0];return!go(t,Ui,Bi,Oi,Zs)||(t=[1,0,0,0,1,0,0,0,1],!go(t,Ui,Bi,Oi,Zs))?!1:(Js.crossVectors(qn,jn),t=[Js.x,Js.y,Js.z],go(t,Ui,Bi,Oi,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new N,new N,new N,new N,new N,new N,new N,new N],In=new N,Ni=new _n,Ui=new N,Bi=new N,Oi=new N,qn=new N,jn=new N,di=new N,Es=new N,Zs=new N,Js=new N,fi=new N;function go(o,e,t,n,i){for(let s=0,r=o.length-3;s<=r;s+=3){fi.fromArray(o,s);const a=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Gd=new _n,bs=new N,_o=new N;let Rn=class{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const t=bs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(_o)),this.expandByPoint(bs.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Dn=new N,vo=new N,Qs=new N,Yn=new N,xo=new N,er=new N,yo=new N;let jr=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vo.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(vo);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Qs),a=Yn.dot(this.direction),l=-Yn.dot(Qs),c=Yn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*l-a,d=r*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(vo).addScaledVector(Qs,d),f}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,s){xo.subVectors(t,e),er.subVectors(n,e),yo.crossVectors(xo,er);let r=this.direction.dot(yo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(er.crossVectors(Yn,er));if(l<0)return null;const c=a*this.direction.dot(xo.cross(Yn));if(c<0||l+c>r)return null;const h=-a*Yn.dot(yo);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ve{constructor(e,t,n,i,s,r,a,l,c,h,u,d,f,m,_,g){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,a,l,c,h,u,d,f,m,_,g)}set(e,t,n,i,s,r,a,l,c,h,u,d,f,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),s=1/zi.setFromMatrixColumn(e,1).length(),r=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*a,t[4]=-r*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=r*h,t[9]=_-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){const d=r*l,f=r*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,Xd)}lookAt(e,t,n){const i=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Kn.crossVectors(n,Kt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Kn.crossVectors(n,Kt)),Kn.normalize(),tr.crossVectors(Kt,Kn),i[0]=Kn.x,i[4]=tr.x,i[8]=Kt.x,i[1]=Kn.y,i[5]=tr.y,i[9]=Kt.y,i[2]=Kn.z,i[6]=tr.z,i[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],v=n[3],x=n[7],w=n[11],M=n[15],b=i[0],C=i[4],R=i[8],y=i[12],E=i[1],B=i[5],z=i[9],A=i[13],I=i[2],D=i[6],U=i[10],V=i[14],G=i[3],Y=i[7],Z=i[11],ae=i[15];return s[0]=r*b+a*E+l*I+c*G,s[4]=r*C+a*B+l*D+c*Y,s[8]=r*R+a*z+l*U+c*Z,s[12]=r*y+a*A+l*V+c*ae,s[1]=h*b+u*E+d*I+f*G,s[5]=h*C+u*B+d*D+f*Y,s[9]=h*R+u*z+d*U+f*Z,s[13]=h*y+u*A+d*V+f*ae,s[2]=m*b+_*E+g*I+p*G,s[6]=m*C+_*B+g*D+p*Y,s[10]=m*R+_*z+g*U+p*Z,s[14]=m*y+_*A+g*V+p*ae,s[3]=v*b+x*E+w*I+M*G,s[7]=v*C+x*B+w*D+M*Y,s[11]=v*R+x*z+w*U+M*Z,s[15]=v*y+x*A+w*V+M*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+s*r*d-i*r*f+i*c*h-s*l*h)+g*(+t*c*u-t*a*f-s*r*u+n*r*f+s*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,x=m*d*c-h*g*c-m*l*f+r*g*f+h*l*p-r*d*p,w=h*_*c-m*u*c+m*a*f-r*_*f-h*a*p+r*u*p,M=m*u*l-h*_*l-m*a*d+r*_*d+h*a*g-r*u*g,b=t*v+n*x+i*w+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(_*d*s-u*g*s-_*i*f+n*g*f+u*i*p-n*d*p)*C,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*C,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*C,e[4]=x*C,e[5]=(h*g*s-m*d*s+m*i*f-t*g*f-h*i*p+t*d*p)*C,e[6]=(m*l*s-r*g*s-m*i*c+t*g*c+r*i*p-t*l*p)*C,e[7]=(r*d*s-h*l*s+h*i*c-t*d*c-r*i*f+t*l*f)*C,e[8]=w*C,e[9]=(m*u*s-h*_*s-m*n*f+t*_*f+h*n*p-t*u*p)*C,e[10]=(r*_*s-m*a*s+m*n*c-t*_*c-r*n*p+t*a*p)*C,e[11]=(h*a*s-r*u*s-h*n*c+t*u*c+r*n*f-t*a*f)*C,e[12]=M*C,e[13]=(h*_*i-m*u*i+m*n*d-t*_*d-h*n*g+t*u*g)*C,e[14]=(m*a*i-r*_*i-m*n*l+t*_*l+r*n*g-t*a*g)*C,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,m=s*u,_=r*h,g=r*u,p=a*u,v=l*c,x=l*h,w=l*u,M=n.x,b=n.y,C=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+w)*M,i[2]=(m-x)*M,i[3]=0,i[4]=(f-w)*b,i[5]=(1-(d+p))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(m+x)*C,i[9]=(g-v)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=zi.set(i[0],i[1],i[2]).length();const r=zi.set(i[4],i[5],i[6]).length(),a=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/s,h=1/r,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=s,n.y=r,n.z=a,this}makePerspective(e,t,n,i,s,r,a=kn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,m;if(a===kn)f=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===Or)f=-r/(r-s),m=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,a=kn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-s),d=(t+e)*c,f=(n+i)*h;let m,_;if(a===kn)m=(r+s)*u,_=-2*u;else if(a===Or)m=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new N,hn=new ve,Wd=new N(0,0,0),Xd=new N(1,1,1),Kn=new N,tr=new N,Kt=new N,wl=new ve,El=new Lt;class rn{constructor(e=0,t=0,n=0,i=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qd=0;const bl=new N,ki=new Lt,Fn=new ve,nr=new N,Ss=new N,jd=new N,Yd=new Lt,Sl=new N(1,0,0),Al=new N(0,1,0),Tl=new N(0,0,1),Kd={type:"added"},Rl={type:"removed"};class it extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new N,t=new rn,n=new Lt,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ve},normalMatrix:{value:new ze}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Sl,e)}rotateY(e){return this.rotateOnAxis(Al,e)}rotateZ(e){return this.rotateOnAxis(Tl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sl,e)}translateY(e){return this.translateOnAxis(Al,e)}translateZ(e){return this.translateOnAxis(Tl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nr.copy(e):nr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ss,nr,this.up):Fn.lookAt(nr,Ss,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Fn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Rl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}it.DEFAULT_UP=new N(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new N,Nn=new N,Mo=new N,Un=new N,Vi=new N,Hi=new N,Cl=new N,wo=new N,Eo=new N,bo=new N;let ir=!1;class en{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){un.subVectors(i,t),Nn.subVectors(n,t),Mo.subVectors(e,t);const r=un.dot(un),a=un.dot(Nn),l=un.dot(Mo),c=Nn.dot(Nn),h=Nn.dot(Mo),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(r*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un),Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getUV(e,t,n,i,s,r,a,l){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),this.getInterpolation(e,t,n,i,s,r,a,l)}static getInterpolation(e,t,n,i,s,r,a,l){return this.getBarycoord(e,t,n,i,Un),l.setScalar(0),l.addScaledVector(s,Un.x),l.addScaledVector(r,Un.y),l.addScaledVector(a,Un.z),l}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ir===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ir=!0),en.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,a;Vi.subVectors(i,n),Hi.subVectors(s,n),wo.subVectors(e,n);const l=Vi.dot(wo),c=Hi.dot(wo);if(l<=0&&c<=0)return t.copy(n);Eo.subVectors(e,i);const h=Vi.dot(Eo),u=Hi.dot(Eo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Vi,r);bo.subVectors(e,s);const f=Vi.dot(bo),m=Hi.dot(bo);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Hi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Cl.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Cl,a);const p=1/(g+_+d);return r=_*p,a=d*p,t.copy(n).addScaledVector(Vi,r).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $d=0,an=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=rs,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function So(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ee){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=cn.workingColorSpace){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=cn.workingColorSpace){if(e=ya(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=So(r,s,e+1/3),this.g=So(r,s,e),this.b=So(r,s,e-1/3)}return cn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ee){const n=Fh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ee){return cn.fromWorkingColorSpace(Ut.copy(this),e),Math.round(vt(Ut.r*255,0,255))*65536+Math.round(vt(Ut.g*255,0,255))*256+Math.round(vt(Ut.b*255,0,255))}getHexString(e=Ee){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=cn.workingColorSpace){cn.fromWorkingColorSpace(Ut.copy(this),t);const n=Ut.r,i=Ut.g,s=Ut.b,r=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=cn.workingColorSpace){return cn.fromWorkingColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ee){cn.fromWorkingColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,i=Ut.b;return e!==Ee?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(dn),dn.h+=e,dn.s+=t,dn.l+=n,this.setHSL(dn.h,dn.s,dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(sr);const n=Us(dn.h,sr.h,t),i=Us(dn.s,sr.s,t),s=Us(dn.l,sr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Me;Me.NAMES=Fh;class _t extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new N,rr=new Te;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this.updateRange={offset:0,count:-1},this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rr.fromBufferAttribute(this,t),rr.applyMatrix3(e),this.setXY(t,rr.x,rr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ma extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nh extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zd=0;const Jt=new ve,Ao=new it,Gi=new N,$t=new _n,As=new _n,Tt=new N;let Pt=class Uh extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ch(e)?Nh:Ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];As.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors($t.min,As.min),$t.expandByPoint(Tt),Tt.addVectors($t.max,As.max),$t.expandByPoint(Tt)):($t.expandByPoint(As.min),$t.expandByPoint(As.max))}$t.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Tt.fromBufferAttribute(a,c),l&&(Gi.fromBufferAttribute(e,c),Tt.add(Gi)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new N,h[E]=new N;const u=new N,d=new N,f=new N,m=new Te,_=new Te,g=new Te,p=new N,v=new N;function x(E,B,z){u.fromArray(i,E*3),d.fromArray(i,B*3),f.fromArray(i,z*3),m.fromArray(r,E*2),_.fromArray(r,B*2),g.fromArray(r,z*2),d.sub(u),f.sub(u),_.sub(m),g.sub(m);const A=1/(_.x*g.y-g.x*_.y);isFinite(A)&&(p.copy(d).multiplyScalar(g.y).addScaledVector(f,-_.y).multiplyScalar(A),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-g.x).multiplyScalar(A),c[E].add(p),c[B].add(p),c[z].add(p),h[E].add(v),h[B].add(v),h[z].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,B=w.length;E<B;++E){const z=w[E],A=z.start,I=z.count;for(let D=A,U=A+I;D<U;D+=3)x(n[D+0],n[D+1],n[D+2])}const M=new N,b=new N,C=new N,R=new N;function y(E){C.fromArray(s,E*3),R.copy(C);const B=c[E];M.copy(B),M.sub(C.multiplyScalar(C.dot(B))).normalize(),b.crossVectors(R,B);const A=b.dot(h[E])<0?-1:1;l[E*4]=M.x,l[E*4+1]=M.y,l[E*4+2]=M.z,l[E*4+3]=A}for(let E=0,B=w.length;E<B;++E){const z=w[E],A=z.start,I=z.count;for(let D=A,U=A+I;D<U;D+=3)y(n[D+0]),y(n[D+1]),y(n[D+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,r=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Uh,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Ll=new ve,pi=new jr,or=new Rn,Pl=new N,Wi=new N,Xi=new N,qi=new N,To=new N,ar=new N,lr=new Te,cr=new Te,hr=new Te,Il=new N,Dl=new N,Fl=new N,ur=new N,dr=new N;class Ve extends it{constructor(e=new Pt,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ar.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(To.fromBufferAttribute(u,e),r?ar.addScaledVector(To,h):ar.addScaledVector(To.sub(t),h))}t.add(ar)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),pi.copy(e.ray).recast(e.near),!(or.containsPoint(pi.origin)===!1&&(pi.intersectSphere(or,Pl)===null||pi.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Ll.copy(s).invert(),pi.copy(e.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=v,M=x;w<M;w+=3){const b=a.getX(w),C=a.getX(w+1),R=a.getX(w+2);i=fr(this,p,e,n,c,h,u,b,C,R),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),x=a.getX(g+1),w=a.getX(g+2);i=fr(this,r,e,n,c,h,u,v,x,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let w=v,M=x;w<M;w+=3){const b=w,C=w+1,R=w+2;i=fr(this,p,e,n,c,h,u,b,C,R),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const v=g,x=g+1,w=g+2;i=fr(this,r,e,n,c,h,u,v,x,w),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Jd(o,e,t,n,i,s,r,a){let l;if(e.side===jt?l=n.intersectTriangle(r,s,i,!0,a):l=n.intersectTriangle(i,s,r,e.side===Xn,a),l===null)return null;dr.copy(a),dr.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(dr);return c<t.near||c>t.far?null:{distance:c,point:dr.clone(),object:o}}function fr(o,e,t,n,i,s,r,a,l,c){o.getVertexPosition(a,Wi),o.getVertexPosition(l,Xi),o.getVertexPosition(c,qi);const h=Jd(o,e,t,n,Wi,Xi,qi,ur);if(h){i&&(lr.fromBufferAttribute(i,a),cr.fromBufferAttribute(i,l),hr.fromBufferAttribute(i,c),h.uv=en.getInterpolation(ur,Wi,Xi,qi,lr,cr,hr,new Te)),s&&(lr.fromBufferAttribute(s,a),cr.fromBufferAttribute(s,l),hr.fromBufferAttribute(s,c),h.uv1=en.getInterpolation(ur,Wi,Xi,qi,lr,cr,hr,new Te),h.uv2=h.uv1),r&&(Il.fromBufferAttribute(r,a),Dl.fromBufferAttribute(r,l),Fl.fromBufferAttribute(r,c),h.normal=en.getInterpolation(ur,Wi,Xi,qi,Il,Dl,Fl,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new N,materialIndex:0};en.getNormal(Wi,Xi,qi,u.normal),h.face=u}return h}class Dt extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function m(_,g,p,v,x,w,M,b,C,R,y){const E=w/C,B=M/R,z=w/2,A=M/2,I=b/2,D=C+1,U=R+1;let V=0,G=0;const Y=new N;for(let Z=0;Z<U;Z++){const ae=Z*B-A;for(let O=0;O<D;O++){const Q=O*E-z;Y[_]=Q*v,Y[g]=ae*x,Y[p]=I,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[g]=0,Y[p]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(O/C),u.push(1-Z/R),V+=1}}for(let Z=0;Z<R;Z++)for(let ae=0;ae<C;ae++){const O=d+ae+D*Z,Q=d+ae+D*(Z+1),te=d+(ae+1)+D*(Z+1),le=d+(ae+1)+D*Z;l.push(O,Q,le),l.push(Q,te,le),G+=6}a.addGroup(f,G,y),f+=G,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Vt(o){const e={};for(let t=0;t<o.length;t++){const n=fs(o[t]);for(const i in n)e[i]=n[i]}return e}function Qd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Bh(o){return o.getRenderTarget()===null?o.outputColorSpace:Tn}const ef={clone:fs,merge:Vt};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let Oh=class extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class Bt extends Oh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Yi=1;class sf extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new Bt(ji,Yi,e,t);i.layers=this.layers,this.add(i);const s=new Bt(ji,Yi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(ji,Yi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(ji,Yi,e,t);a.layers=this.layers,this.add(a);const l=new Bt(ji,Yi,e,t);l.layers=this.layers,this.add(l);const c=new Bt(ji,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Gn,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class wa extends wt{constructor(e,t,n,i,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,n,i,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rf extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Si?Ee:Ai),this.texture=new wa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dt(5,5,5),s=new Ci({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:si});s.uniforms.tEquirect.value=t;const r=new Ve(i,s),a=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Xt),new sf(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Ro=new N,of=new N,af=new ze;class ei{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ro.subVectors(n,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||af.getNormalMatrix(e),i=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Rn,pr=new N;class Ea{constructor(e=new ei,t=new ei,n=new ei,i=new ei,s=new ei,r=new ei){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,i=e.elements,s=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],_=i[10],g=i[11],p=i[12],v=i[13],x=i[14],w=i[15];if(n[0].setComponents(l-s,d-c,g-f,w-p).normalize(),n[1].setComponents(l+s,d+c,g+f,w+p).normalize(),n[2].setComponents(l+r,d+h,g+m,w+v).normalize(),n[3].setComponents(l-r,d-h,g-m,w-v).normalize(),n[4].setComponents(l-a,d-u,g-_,w-x).normalize(),t===kn)n[5].setComponents(l+a,d+u,g+_,w+x).normalize();else if(t===Or)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(pr.x=i.normal.x>0?e.max.x:e.min.x,pr.y=i.normal.y>0?e.max.y:e.min.y,pr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(pr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let o=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function lf(o,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=o.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=o.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=o.SHORT;else if(u instanceof Uint32Array)m=o.UNSIGNED_INT;else if(u instanceof Int32Array)m=o.INT;else if(u instanceof Int8Array)m=o.BYTE;else if(u instanceof Uint8Array)m=o.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class Hs extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const v=p*d-r;for(let x=0;x<c;x++){const w=x*u-s;m.push(w,-v,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const x=v+c*p,w=v+c*(p+1),M=v+1+c*(p+1),b=v+1+c*p;f.push(x,w,b),f.push(w,M,b)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf="vec3 transformed = vec3( position );",gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Em=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:cf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:vf,bumpmap_pars_fragment:xf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Ef,color_fragment:bf,color_pars_fragment:Sf,color_pars_vertex:Af,color_vertex:Tf,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Pf,displacementmap_vertex:If,emissivemap_fragment:Df,emissivemap_pars_fragment:Ff,encodings_fragment:Nf,encodings_pars_fragment:Uf,envmap_fragment:Bf,envmap_common_pars_fragment:Of,envmap_pars_fragment:zf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:Jf,envmap_vertex:Vf,fog_vertex:Hf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_fragment:jf,lightmap_pars_fragment:Yf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:$f,lights_pars_begin:Zf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:op,lights_fragment_end:ap,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphcolor_vertex:vp,morphnormal_vertex:xp,morphtarget_pars_vertex:yp,morphtarget_vertex:Mp,normal_fragment_begin:wp,normal_fragment_maps:Ep,normal_pars_fragment:bp,normal_pars_vertex:Sp,normal_vertex:Ap,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Pp,output_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Fp,project_vertex:Np,dithering_fragment:Up,dithering_pars_fragment:Bp,roughnessmap_fragment:Op,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:jp,specularmap_fragment:Yp,specularmap_pars_fragment:Kp,tonemapping_fragment:$p,tonemapping_pars_fragment:Zp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:vm,meshbasic_frag:xm,meshlambert_vert:ym,meshlambert_frag:Mm,meshmatcap_vert:wm,meshmatcap_frag:Em,meshnormal_vert:bm,meshnormal_frag:Sm,meshphong_vert:Am,meshphong_frag:Tm,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Lm,meshtoon_frag:Pm,points_vert:Im,points_frag:Dm,shadow_vert:Fm,shadow_frag:Nm,sprite_vert:Um,sprite_frag:Bm},oe={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},En={basic:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Me(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Vt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Vt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Vt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Me(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Vt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Vt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Vt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Vt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Vt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Vt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Vt([oe.lights,oe.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};En.physical={uniforms:Vt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const mr={r:0,b:0,g:0};function Om(o,e,t,n,i,s,r){const a=new Me(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(g,p){let v=!1,x=p.isScene===!0?p.background:null;switch(x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0),o.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,r),v=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,r),v=!0;break}(o.autoClear||v)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Xr)?(h===void 0&&(h=new Ve(new Dt(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:fs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Ee,(u!==x||d!==x.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ve(new Hs(2,2),new Ci({name:"BackgroundMaterial",uniforms:fs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Ee,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=o.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function _(g,p){g.getRGB(mr,Bh(o)),n.buffers.color.setClear(mr.r,mr.g,mr.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(g,p=1){a.set(g),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,_(a,l)},render:m}}function zm(o,e,t,n){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,a={},l=g(null);let c=l,h=!1;function u(I,D,U,V,G){let Y=!1;if(r){const Z=_(V,U,D);c!==Z&&(c=Z,f(c.object)),Y=p(I,V,U,G),Y&&v(I,V,U,G)}else{const Z=D.wireframe===!0;(c.geometry!==V.id||c.program!==U.id||c.wireframe!==Z)&&(c.geometry=V.id,c.program=U.id,c.wireframe=Z,Y=!0)}G!==null&&t.update(G,o.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,R(I,D,U,V),G!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function d(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(I){return n.isWebGL2?o.bindVertexArray(I):s.bindVertexArrayOES(I)}function m(I){return n.isWebGL2?o.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function _(I,D,U){const V=U.wireframe===!0;let G=a[I.id];G===void 0&&(G={},a[I.id]=G);let Y=G[D.id];Y===void 0&&(Y={},G[D.id]=Y);let Z=Y[V];return Z===void 0&&(Z=g(d()),Y[V]=Z),Z}function g(I){const D=[],U=[],V=[];for(let G=0;G<i;G++)D[G]=0,U[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:V,object:I,attributes:{},index:null}}function p(I,D,U,V){const G=c.attributes,Y=D.attributes;let Z=0;const ae=U.getAttributes();for(const O in ae)if(ae[O].location>=0){const te=G[O];let le=Y[O];if(le===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(le=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(le=I.instanceColor)),te===void 0||te.attribute!==le||le&&te.data!==le.data)return!0;Z++}return c.attributesNum!==Z||c.index!==V}function v(I,D,U,V){const G={},Y=D.attributes;let Z=0;const ae=U.getAttributes();for(const O in ae)if(ae[O].location>=0){let te=Y[O];te===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const le={};le.attribute=te,te&&te.data&&(le.data=te.data),G[O]=le,Z++}c.attributes=G,c.attributesNum=Z,c.index=V}function x(){const I=c.newAttributes;for(let D=0,U=I.length;D<U;D++)I[D]=0}function w(I){M(I,0)}function M(I,D){const U=c.newAttributes,V=c.enabledAttributes,G=c.attributeDivisors;U[I]=1,V[I]===0&&(o.enableVertexAttribArray(I),V[I]=1),G[I]!==D&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,D),G[I]=D)}function b(){const I=c.newAttributes,D=c.enabledAttributes;for(let U=0,V=D.length;U<V;U++)D[U]!==I[U]&&(o.disableVertexAttribArray(U),D[U]=0)}function C(I,D,U,V,G,Y,Z){Z===!0?o.vertexAttribIPointer(I,D,U,G,Y):o.vertexAttribPointer(I,D,U,V,G,Y)}function R(I,D,U,V){if(n.isWebGL2===!1&&(I.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=V.attributes,Y=U.getAttributes(),Z=D.defaultAttributeValues;for(const ae in Y){const O=Y[ae];if(O.location>=0){let Q=G[ae];if(Q===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const te=Q.normalized,le=Q.itemSize,he=t.get(Q);if(he===void 0)continue;const ye=he.buffer,De=he.type,Re=he.bytesPerElement,ut=n.isWebGL2===!0&&(De===o.INT||De===o.UNSIGNED_INT||Q.gpuType===xh);if(Q.isInterleavedBufferAttribute){const He=Q.data,W=He.stride,xt=Q.offset;if(He.isInstancedInterleavedBuffer){for(let be=0;be<O.locationSize;be++)M(O.location+be,He.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let be=0;be<O.locationSize;be++)w(O.location+be);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let be=0;be<O.locationSize;be++)C(O.location+be,le/O.locationSize,De,te,W*Re,(xt+le/O.locationSize*be)*Re,ut)}else{if(Q.isInstancedBufferAttribute){for(let He=0;He<O.locationSize;He++)M(O.location+He,Q.meshPerAttribute);I.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let He=0;He<O.locationSize;He++)w(O.location+He);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let He=0;He<O.locationSize;He++)C(O.location+He,le/O.locationSize,De,te,le*Re,le/O.locationSize*He*Re,ut)}}else if(Z!==void 0){const te=Z[ae];if(te!==void 0)switch(te.length){case 2:o.vertexAttrib2fv(O.location,te);break;case 3:o.vertexAttrib3fv(O.location,te);break;case 4:o.vertexAttrib4fv(O.location,te);break;default:o.vertexAttrib1fv(O.location,te)}}}}b()}function y(){z();for(const I in a){const D=a[I];for(const U in D){const V=D[U];for(const G in V)m(V[G].object),delete V[G];delete D[U]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const D=a[I.id];for(const U in D){const V=D[U];for(const G in V)m(V[G].object),delete V[G];delete D[U]}delete a[I.id]}function B(I){for(const D in a){const U=a[D];if(U[I.id]===void 0)continue;const V=U[I.id];for(const G in V)m(V[G].object),delete V[G];delete U[I.id]}}function z(){A(),h=!0,c!==l&&(c=l,f(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:z,resetDefaultState:A,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:B,initAttributes:x,enableAttribute:w,disableUnusedAttributes:b}}function km(o,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function Vm(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),d=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),p=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,w=r||e.has("OES_texture_float"),M=x&&w,b=r?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:M,maxSamples:b}}function Hm(o){const e=this;let t=null,n=0,i=!1,s=!1;const r=new ei,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=o.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):c();else{const v=s?0:n,x=v*4;let w=p.clippingState||null;l.value=w,w=h(m,d,x,f);for(let M=0;M!==x;++M)w[M]=t[M];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,w=f;x!==_;++x,w+=4)r.copy(u[x]).applyMatrix4(v,a),r.normal.toArray(g,w),g[w+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Gm(o){let e=new WeakMap;function t(r,a){return a===Nr?r.mapping=ls:a===na&&(r.mapping=cs),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===Nr||a===na)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new rf(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Yr extends Oh{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Nl=[.125,.215,.35,.446,.526,.582],Mi=20,Co=new Yr,Ul=new Me;let Lo=null;const yi=(1+Math.sqrt(5))/2,Ki=1/yi,Bl=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,yi,Ki),new N(0,yi,-Ki),new N(Ki,0,yi),new N(-Ki,0,yi),new N(yi,Ki,0),new N(-yi,Ki,0)];class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lo),e.scissorTest=!1,gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:zs,format:tn,colorSpace:Tn,depthBuffer:!1},i=zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(s)),this._blurMaterial=Xm(s,e,t)}return i}_compileMaterial(e){const t=new Ve(this._lodPlanes[0],e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,i){const a=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ul),h.toneMapping=Gn,h.autoClear=!1;const f=new _t({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new Ve(new Dt,f);let _=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,_=!0):(f.color.copy(Ul),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const x=this._cubeSize;gr(i,v*x,p>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ls||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ve(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Bl[(i-1)%Bl.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ve(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Mi-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):Mi;g>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Mi}`);const p=[];let v=0;for(let C=0;C<Mi;++C){const R=C/_,y=Math.exp(-R*R/2);p.push(y),C===0?v+=y:C<g&&(v+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const w=this._sizeLods[i],M=3*w*(i>x-ss?i-x+ss:0),b=4*(this._cubeSize-w);gr(t,M,b,3*w,2*w),l.setRenderTarget(t),l.render(u,Co)}}function Wm(o){const e=[],t=[],n=[];let i=o;const s=o-ss+1+Nl.length;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>o-ss?l=Nl[r-o+ss-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*f),x=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let b=0;b<f;b++){const C=b%3*2/3-1,R=b>2?0:-1,y=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];v.set(y,_*m*b),x.set(d,g*m*b);const E=[b,b,b,b,b,b];w.set(E,p*m*b)}const M=new Pt;M.setAttribute("position",new Ft(v,_)),M.setAttribute("uv",new Ft(x,g)),M.setAttribute("faceIndex",new Ft(w,p)),e.push(M),i>ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zl(o,e,t){const n=new Ri(o,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gr(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function Xm(o,e,t){const n=new Float32Array(Mi),i=new N(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function kl(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Vl(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Nr||l===na,h=l===ls||l===cs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Ol(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ol(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function jm(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ym(o,e,t,n){const i={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)e.remove(_[g])}d.removeEventListener("dispose",r),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)e.update(_[g],o.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let x=0,w=v.length;x<w;x+=3){const M=v[x+0],b=v[x+1],C=v[x+2];d.push(M,b,b,C,C,M)}}else{const v=m.array;_=m.version;for(let x=0,w=v.length/3-1;x<w;x+=3){const M=x+0,b=x+1,C=x+2;d.push(M,b,b,C,C,M)}}const g=new(Ch(d)?Nh:Ma)(d,1);g.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Km(o,e,t,n){const i=n.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,m){if(m===0)return;let _,g;if(i)_=o,g="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,f,a,d*l,m),t.update(f,s,m)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function $m(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zm(o,e){return o[0]-e[0]}function Jm(o,e){return Math.abs(e[1])-Math.abs(o[1])}function Qm(o,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Qe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let D=function(){A.dispose(),s.delete(h),h.removeEventListener("dispose",D)};var f=D;g!==void 0&&g.texture.dispose();const x=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let y=0;x===!0&&(y=1),w===!0&&(y=2),M===!0&&(y=3);let E=h.attributes.position.count*y,B=1;E>e.maxTextureSize&&(B=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const z=new Float32Array(E*B*4*_),A=new Ih(z,E,B,_);A.type=zn,A.needsUpdate=!0;const I=y*4;for(let U=0;U<_;U++){const V=b[U],G=C[U],Y=R[U],Z=E*B*4*U;for(let ae=0;ae<V.count;ae++){const O=ae*I;x===!0&&(r.fromBufferAttribute(V,ae),z[Z+O+0]=r.x,z[Z+O+1]=r.y,z[Z+O+2]=r.z,z[Z+O+3]=0),w===!0&&(r.fromBufferAttribute(G,ae),z[Z+O+4]=r.x,z[Z+O+5]=r.y,z[Z+O+6]=r.z,z[Z+O+7]=0),M===!0&&(r.fromBufferAttribute(Y,ae),z[Z+O+8]=r.x,z[Z+O+9]=r.y,z[Z+O+10]=r.z,z[Z+O+11]=Y.itemSize===4?r.w:1)}}g={count:_,texture:A,size:new Te(E,B)},s.set(h,g),h.addEventListener("dispose",D)}let p=0;for(let x=0;x<d.length;x++)p+=d[x];const v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(o,"morphTargetBaseInfluence",v),u.getUniforms().setValue(o,"morphTargetInfluences",d),u.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),u.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==m){_=[];for(let w=0;w<m;w++)_[w]=[w,0];n[h.id]=_}for(let w=0;w<m;w++){const M=_[w];M[0]=w,M[1]=d[w]}_.sort(Jm);for(let w=0;w<8;w++)w<m&&_[w][1]?(a[w][0]=_[w][0],a[w][1]=_[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(Zm);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const M=a[w],b=M[0],C=M[1];b!==Number.MAX_SAFE_INTEGER&&C?(g&&h.getAttribute("morphTarget"+w)!==g[b]&&h.setAttribute("morphTarget"+w,g[b]),p&&h.getAttribute("morphNormal"+w)!==p[b]&&h.setAttribute("morphNormal"+w,p[b]),i[w]=C,v+=C):(g&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),p&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),i[w]=0)}const x=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(o,"morphTargetBaseInfluence",x),u.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function eg(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER)),u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const kh=new wt,Vh=new Ih,Hh=new Hd,Gh=new wa,Hl=[],Gl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function xs(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=Hl[i];if(s===void 0&&(s=new Float32Array(i),Hl[i]=s),e!==0){n.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function Et(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function bt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function Kr(o,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function tg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function ng(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2fv(this.addr,e),bt(t,e)}}function ig(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;o.uniform3fv(this.addr,e),bt(t,e)}}function sg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4fv(this.addr,e),bt(t,e)}}function rg(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;ql.set(n),o.uniformMatrix2fv(this.addr,!1,ql),bt(t,n)}}function og(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Xl.set(n),o.uniformMatrix3fv(this.addr,!1,Xl),bt(t,n)}}function ag(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;Wl.set(n),o.uniformMatrix4fv(this.addr,!1,Wl),bt(t,n)}}function lg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function cg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2iv(this.addr,e),bt(t,e)}}function hg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;o.uniform3iv(this.addr,e),bt(t,e)}}function ug(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4iv(this.addr,e),bt(t,e)}}function dg(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function fg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;o.uniform2uiv(this.addr,e),bt(t,e)}}function pg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;o.uniform3uiv(this.addr,e),bt(t,e)}}function mg(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;o.uniform4uiv(this.addr,e),bt(t,e)}}function gg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||kh,i)}function _g(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hh,i)}function vg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Gh,i)}function xg(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vh,i)}function yg(o){switch(o){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}function Mg(o,e){o.uniform1fv(this.addr,e)}function wg(o,e){const t=xs(e,this.size,2);o.uniform2fv(this.addr,t)}function Eg(o,e){const t=xs(e,this.size,3);o.uniform3fv(this.addr,t)}function bg(o,e){const t=xs(e,this.size,4);o.uniform4fv(this.addr,t)}function Sg(o,e){const t=xs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Ag(o,e){const t=xs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Tg(o,e){const t=xs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Rg(o,e){o.uniform1iv(this.addr,e)}function Cg(o,e){o.uniform2iv(this.addr,e)}function Lg(o,e){o.uniform3iv(this.addr,e)}function Pg(o,e){o.uniform4iv(this.addr,e)}function Ig(o,e){o.uniform1uiv(this.addr,e)}function Dg(o,e){o.uniform2uiv(this.addr,e)}function Fg(o,e){o.uniform3uiv(this.addr,e)}function Ng(o,e){o.uniform4uiv(this.addr,e)}function Ug(o,e,t){const n=this.cache,i=e.length,s=Kr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||kh,s[r])}function Bg(o,e,t){const n=this.cache,i=e.length,s=Kr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Hh,s[r])}function Og(o,e,t){const n=this.cache,i=e.length,s=Kr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Gh,s[r])}function zg(o,e,t){const n=this.cache,i=e.length,s=Kr(t,i);Et(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Vh,s[r])}function kg(o){switch(o){case 5126:return Mg;case 35664:return wg;case 35665:return Eg;case 35666:return bg;case 35674:return Sg;case 35675:return Ag;case 35676:return Tg;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Lg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Dg;case 36295:return Fg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return zg}}class Vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=yg(t.type)}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=kg(t.type)}}class Gg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function jl(o,e){o.seq.push(e),o.map[e.id]=e}function Wg(o,e,t){const n=o.name,i=n.length;for(Po.lastIndex=0;;){const s=Po.exec(n),r=Po.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){jl(t,c===void 0?new Vg(a,o,e):new Hg(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Gg(a),jl(t,u)),t=u}}}class Fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Wg(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function Yl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let Xg=0;function qg(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}function jg(o){switch(o){case Tn:return["Linear","( value )"];case Ee:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function Kl(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+qg(o.getShaderSource(e),r)}else return i}function Yg(o,e){const t=jg(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Kg(o,e){let t;switch(e){case Xu:t="Linear";break;case qu:t="Reinhard";break;case gh:t="OptimizedCineon";break;case ju:t="ACESFilmic";break;case Yu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $g(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function Zg(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Ds(o){return o!==""}function $l(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(o){return o.replace(Qg,e_)}function e_(o,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return la(t)}const t_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(o){return o.replace(t_,n_)}function n_(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ql(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function i_(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===fh?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function s_(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function r_(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function o_(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Wr:e="ENVMAP_BLENDING_MULTIPLY";break;case Gu:e="ENVMAP_BLENDING_MIX";break;case Wu:e="ENVMAP_BLENDING_ADD";break}return e}function a_(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function l_(o,e,t,n){const i=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=i_(t),c=s_(t),h=r_(t),u=o_(t),d=a_(t),f=t.isWebGL2?"":$g(t),m=Zg(s),_=i.createProgram();let g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ds).join(`
`),g.length>0&&(g+=`
`),p=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ds).join(`
`),p.length>0&&(p+=`
`)):(g=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),p=[f,Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),r=la(r),r=$l(r,t),r=Zl(r,t),a=la(a),a=$l(a,t),a=Zl(a,t),r=Jl(r),a=Jl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+g+r,w=v+p+a,M=Yl(i,i.VERTEX_SHADER,x),b=Yl(i,i.FRAGMENT_SHADER,w);if(i.attachShader(_,M),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),o.debug.checkShaderErrors){const y=i.getProgramInfoLog(_).trim(),E=i.getShaderInfoLog(M).trim(),B=i.getShaderInfoLog(b).trim();let z=!0,A=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,_,M,b);else{const I=Kl(i,M,"vertex"),D=Kl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+I+`
`+D)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(E===""||B==="")&&(A=!1);A&&(this.diagnostics={runnable:z,programLog:y,vertexShader:{log:E,prefix:g},fragmentShader:{log:B,prefix:p}})}i.deleteShader(M),i.deleteShader(b);let C;this.getUniforms=function(){return C===void 0&&(C=new Fr(i,_)),C};let R;return this.getAttributes=function(){return R===void 0&&(R=Jg(i,_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let c_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new u_(e),t.set(e,n)),n}}class u_{constructor(e){this.id=c_++,this.code=e,this.usedTimes=0}}function d_(o,e,t,n,i,s,r){const a=new Dh,l=new h_,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function g(y,E,B,z,A){const I=z.fog,D=A.geometry,U=y.isMeshStandardMaterial?z.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),G=V&&V.mapping===Xr?V.image.height:null,Y=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Z=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=Z!==void 0?Z.length:0;let O=0;D.morphAttributes.position!==void 0&&(O=1),D.morphAttributes.normal!==void 0&&(O=2),D.morphAttributes.color!==void 0&&(O=3);let Q,te,le,he;if(Y){const pt=En[Y];Q=pt.vertexShader,te=pt.fragmentShader}else Q=y.vertexShader,te=y.fragmentShader,l.update(y),le=l.getVertexShaderID(y),he=l.getFragmentShaderID(y);const ye=o.getRenderTarget(),De=A.isInstancedMesh===!0,Re=!!y.map,ut=!!y.matcap,He=!!V,W=!!y.aoMap,xt=!!y.lightMap,be=!!y.bumpMap,Ne=!!y.normalMap,Se=!!y.displacementMap,tt=!!y.emissiveMap,ke=!!y.metalnessMap,Ie=!!y.roughnessMap,Je=y.anisotropy>0,yt=y.clearcoat>0,St=y.iridescence>0,P=y.sheen>0,T=y.transmission>0,K=Je&&!!y.anisotropyMap,se=yt&&!!y.clearcoatMap,ie=yt&&!!y.clearcoatNormalMap,F=yt&&!!y.clearcoatRoughnessMap,ee=St&&!!y.iridescenceMap,ne=St&&!!y.iridescenceThicknessMap,j=P&&!!y.sheenColorMap,pe=P&&!!y.sheenRoughnessMap,we=!!y.specularMap,xe=!!y.specularColorMap,me=!!y.specularIntensityMap,de=T&&!!y.transmissionMap,Ce=T&&!!y.thicknessMap,qe=!!y.gradientMap,k=!!y.alphaMap,ce=y.alphaTest>0,q=!!y.extensions,re=!!D.attributes.uv1,ue=!!D.attributes.uv2,$e=!!D.attributes.uv3;return{isWebGL2:h,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:Q,fragmentShader:te,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:De,instancingColor:De&&A.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?o.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Tn,map:Re,matcap:ut,envMap:He,envMapMode:He&&V.mapping,envMapCubeUVHeight:G,aoMap:W,lightMap:xt,bumpMap:be,normalMap:Ne,displacementMap:d&&Se,emissiveMap:tt,normalMapObjectSpace:Ne&&y.normalMapType===ud,normalMapTangentSpace:Ne&&y.normalMapType===qr,metalnessMap:ke,roughnessMap:Ie,anisotropy:Je,anisotropyMap:K,clearcoat:yt,clearcoatMap:se,clearcoatNormalMap:ie,clearcoatRoughnessMap:F,iridescence:St,iridescenceMap:ee,iridescenceThicknessMap:ne,sheen:P,sheenColorMap:j,sheenRoughnessMap:pe,specularMap:we,specularColorMap:xe,specularIntensityMap:me,transmission:T,transmissionMap:de,thicknessMap:Ce,gradientMap:qe,opaque:y.transparent===!1&&y.blending===rs,alphaMap:k,alphaTest:ce,combine:y.combine,mapUv:Re&&_(y.map.channel),aoMapUv:W&&_(y.aoMap.channel),lightMapUv:xt&&_(y.lightMap.channel),bumpMapUv:be&&_(y.bumpMap.channel),normalMapUv:Ne&&_(y.normalMap.channel),displacementMapUv:Se&&_(y.displacementMap.channel),emissiveMapUv:tt&&_(y.emissiveMap.channel),metalnessMapUv:ke&&_(y.metalnessMap.channel),roughnessMapUv:Ie&&_(y.roughnessMap.channel),anisotropyMapUv:K&&_(y.anisotropyMap.channel),clearcoatMapUv:se&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(y.sheenRoughnessMap.channel),specularMapUv:we&&_(y.specularMap.channel),specularColorMapUv:xe&&_(y.specularColorMap.channel),specularIntensityMapUv:me&&_(y.specularIntensityMap.channel),transmissionMapUv:de&&_(y.transmissionMap.channel),thicknessMapUv:Ce&&_(y.thicknessMap.channel),alphaMapUv:k&&_(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ne||Je),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:re,vertexUv2s:ue,vertexUv3s:$e,pointsUvs:A.isPoints===!0&&!!D.attributes.uv&&(Re||k),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:A.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:O,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:y.toneMapped?o.toneMapping:Gn,useLegacyLights:o.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===mn,flipSided:y.side===jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:q&&y.extensions.derivatives===!0,extensionFragDepth:q&&y.extensions.fragDepth===!0,extensionDrawBuffers:q&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:q&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)E.push(B),E.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(v(E,y),x(E,y),E.push(o.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),y.push(a.mask)}function w(y){const E=m[y.type];let B;if(E){const z=En[E];B=ef.clone(z.uniforms)}else B=y.uniforms;return B}function M(y,E){let B;for(let z=0,A=c.length;z<A;z++){const I=c[z];if(I.cacheKey===E){B=I,++B.usedTimes;break}}return B===void 0&&(B=new l_(o,E,y,s),c.push(B)),B}function b(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function C(y){l.remove(y)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:R}}function f_(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function n(s,r,a){o.get(s)[r]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function p_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ec(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function tc(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,m,_,g){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||p_),n.length>1&&n.sort(d||ec),i.length>1&&i.sort(d||ec)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function m_(){let o=new WeakMap;function e(n,i){const s=o.get(n);let r;return s===void 0?(r=new tc,o.set(n,[r])):i>=s.length?(r=new tc,s.push(r)):r=s[i],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function g_(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Me};break;case"SpotLight":t={position:new N,direction:new N,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new N,halfWidth:new N,halfHeight:new N};break}return o[e.id]=t,t}}}function __(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let v_=0;function x_(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function y_(o,e){const t=new g_,n=__(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new N);const s=new N,r=new ve,a=new ve;function l(h,u){let d=0,f=0,m=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let _=0,g=0,p=0,v=0,x=0,w=0,M=0,b=0,C=0,R=0;h.sort(x_);const y=u===!0?Math.PI:1;for(let B=0,z=h.length;B<z;B++){const A=h[B],I=A.color,D=A.intensity,U=A.distance,V=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=I.r*D*y,f+=I.g*D*y,m+=I.b*D*y;else if(A.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(A.sh.coefficients[G],D);else if(A.isDirectionalLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity*y),A.castShadow){const Y=A.shadow,Z=n.get(A);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=V,i.directionalShadowMatrix[_]=A.shadow.matrix,w++}i.directional[_]=G,_++}else if(A.isSpotLight){const G=t.get(A);G.position.setFromMatrixPosition(A.matrixWorld),G.color.copy(I).multiplyScalar(D*y),G.distance=U,G.coneCos=Math.cos(A.angle),G.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),G.decay=A.decay,i.spot[p]=G;const Y=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,Y.updateMatrices(A),A.castShadow&&R++),i.spotLightMatrix[p]=Y.matrix,A.castShadow){const Z=n.get(A);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,i.spotShadow[p]=Z,i.spotShadowMap[p]=V,b++}p++}else if(A.isRectAreaLight){const G=t.get(A);G.color.copy(I).multiplyScalar(D),G.halfWidth.set(A.width*.5,0,0),G.halfHeight.set(0,A.height*.5,0),i.rectArea[v]=G,v++}else if(A.isPointLight){const G=t.get(A);if(G.color.copy(A.color).multiplyScalar(A.intensity*y),G.distance=A.distance,G.decay=A.decay,A.castShadow){const Y=A.shadow,Z=n.get(A);Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,i.pointShadow[g]=Z,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=G,g++}else if(A.isHemisphereLight){const G=t.get(A);G.skyColor.copy(A.color).multiplyScalar(D*y),G.groundColor.copy(A.groundColor).multiplyScalar(D*y),i.hemi[x]=G,x++}}v>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const E=i.hash;(E.directionalLength!==_||E.pointLength!==g||E.spotLength!==p||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==w||E.numPointShadows!==M||E.numSpotShadows!==b||E.numSpotMaps!==C)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,E.directionalLength=_,E.pointLength=g,E.spotLength=p,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=w,E.numPointShadows=M,E.numSpotShadows=b,E.numSpotMaps=C,i.version=v_++)}function c(h,u){let d=0,f=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){const w=h[v];if(w.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(w.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const M=i.hemi[g];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:l,setupView:c,state:i}}function nc(o,e){const t=new y_(o,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function M_(o,e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new nc(o,e),t.set(s,[l])):r>=a.length?(l=new nc(o,e),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class w_ extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class E_ extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function A_(o,e,t){let n=new Ea;const i=new Te,s=new Te,r=new Qe,a=new w_({depthPacking:hd}),l=new E_,c={},h=t.maxTextureSize,u={[Xn]:jt,[jt]:Xn,[mn]:mn},d=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:b_,fragmentShader:S_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Pt;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ve(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dh;let p=this.type;this.render=function(M,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;const R=o.getRenderTarget(),y=o.getActiveCubeFace(),E=o.getActiveMipmapLevel(),B=o.state;B.setBlending(si),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=p!==On&&this.type===On,A=p===On&&this.type!==On;for(let I=0,D=M.length;I<D;I++){const U=M[I],V=U.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const G=V.getFrameExtents();if(i.multiply(G),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/G.x),i.x=s.x*G.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/G.y),i.y=s.y*G.y,V.mapSize.y=s.y)),V.map===null||z===!0||A===!0){const Z=this.type!==On?{minFilter:Ct,magFilter:Ct}:{};V.map!==null&&V.map.dispose(),V.map=new Ri(i.x,i.y,Z),V.map.texture.name=U.name+".shadowMap",V.camera.updateProjectionMatrix()}o.setRenderTarget(V.map),o.clear();const Y=V.getViewportCount();for(let Z=0;Z<Y;Z++){const ae=V.getViewport(Z);r.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),B.viewport(r),V.updateMatrices(U,Z),n=V.getFrustum(),w(b,C,V.camera,U,this.type)}V.isPointLightShadow!==!0&&this.type===On&&v(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,o.setRenderTarget(R,y,E)};function v(M,b){const C=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Ri(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,o.setRenderTarget(M.mapPass),o.clear(),o.renderBufferDirect(b,null,C,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,o.setRenderTarget(M.map),o.clear(),o.renderBufferDirect(b,null,C,f,_,null)}function x(M,b,C,R){let y=null;const E=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0)y=E;else if(y=C.isPointLight===!0?l:a,o.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=y.uuid,z=b.uuid;let A=c[B];A===void 0&&(A={},c[B]=A);let I=A[z];I===void 0&&(I=y.clone(),A[z]=I),y=I}if(y.visible=b.visible,y.wireframe=b.wireframe,R===On?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=o.properties.get(y);B.light=C}return y}function w(M,b,C,R,y){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===On)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const z=e.update(M),A=M.material;if(Array.isArray(A)){const I=z.groups;for(let D=0,U=I.length;D<U;D++){const V=I[D],G=A[V.materialIndex];if(G&&G.visible){const Y=x(M,G,R,y);o.renderBufferDirect(C,null,z,Y,M,V)}}}else if(A.visible){const I=x(M,A,R,y);o.renderBufferDirect(C,null,z,I,M,null)}}const B=M.children;for(let z=0,A=B.length;z<A;z++)w(B[z],b,C,R,y)}}function T_(o,e,t){const n=t.isWebGL2;function i(){let k=!1;const ce=new Qe;let q=null;const re=new Qe(0,0,0,0);return{setMask:function(ue){q!==ue&&!k&&(o.colorMask(ue,ue,ue,ue),q=ue)},setLocked:function(ue){k=ue},setClear:function(ue,$e,lt,pt,ci){ci===!0&&(ue*=pt,$e*=pt,lt*=pt),ce.set(ue,$e,lt,pt),re.equals(ce)===!1&&(o.clearColor(ue,$e,lt,pt),re.copy(ce))},reset:function(){k=!1,q=null,re.set(-1,0,0,0)}}}function s(){let k=!1,ce=null,q=null,re=null;return{setTest:function(ue){ue?ye(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(ue){ce!==ue&&!k&&(o.depthMask(ue),ce=ue)},setFunc:function(ue){if(q!==ue){switch(ue){case Uu:o.depthFunc(o.NEVER);break;case Bu:o.depthFunc(o.ALWAYS);break;case Ou:o.depthFunc(o.LESS);break;case ta:o.depthFunc(o.LEQUAL);break;case zu:o.depthFunc(o.EQUAL);break;case ku:o.depthFunc(o.GEQUAL);break;case Vu:o.depthFunc(o.GREATER);break;case Hu:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}q=ue}},setLocked:function(ue){k=ue},setClear:function(ue){re!==ue&&(o.clearDepth(ue),re=ue)},reset:function(){k=!1,ce=null,q=null,re=null}}}function r(){let k=!1,ce=null,q=null,re=null,ue=null,$e=null,lt=null,pt=null,ci=null;return{setTest:function(ct){k||(ct?ye(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(ct){ce!==ct&&!k&&(o.stencilMask(ct),ce=ct)},setFunc:function(ct,vn,Ot){(q!==ct||re!==vn||ue!==Ot)&&(o.stencilFunc(ct,vn,Ot),q=ct,re=vn,ue=Ot)},setOp:function(ct,vn,Ot){($e!==ct||lt!==vn||pt!==Ot)&&(o.stencilOp(ct,vn,Ot),$e=ct,lt=vn,pt=Ot)},setLocked:function(ct){k=ct},setClear:function(ct){ci!==ct&&(o.clearStencil(ct),ci=ct)},reset:function(){k=!1,ce=null,q=null,re=null,ue=null,$e=null,lt=null,pt=null,ci=null}}}const a=new i,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,w=null,M=null,b=null,C=null,R=null,y=!1,E=null,B=null,z=null,A=null,I=null;const D=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,V=0;const G=o.getParameter(o.VERSION);G.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(G)[1]),U=V>=1):G.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),U=V>=2);let Y=null,Z={};const ae=o.getParameter(o.SCISSOR_BOX),O=o.getParameter(o.VIEWPORT),Q=new Qe().fromArray(ae),te=new Qe().fromArray(O);function le(k,ce,q,re){const ue=new Uint8Array(4),$e=o.createTexture();o.bindTexture(k,$e),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let lt=0;lt<q;lt++)n&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(ce,0,o.RGBA,1,1,re,0,o.RGBA,o.UNSIGNED_BYTE,ue):o.texImage2D(ce+lt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ue);return $e}const he={};he[o.TEXTURE_2D]=le(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=le(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(he[o.TEXTURE_2D_ARRAY]=le(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=le(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ye(o.DEPTH_TEST),l.setFunc(ta),Se(!1),tt(Ga),ye(o.CULL_FACE),be(si);function ye(k){d[k]!==!0&&(o.enable(k),d[k]=!0)}function De(k){d[k]!==!1&&(o.disable(k),d[k]=!1)}function Re(k,ce){return f[k]!==ce?(o.bindFramebuffer(k,ce),f[k]=ce,n&&(k===o.DRAW_FRAMEBUFFER&&(f[o.FRAMEBUFFER]=ce),k===o.FRAMEBUFFER&&(f[o.DRAW_FRAMEBUFFER]=ce)),!0):!1}function ut(k,ce){let q=_,re=!1;if(k)if(q=m.get(ce),q===void 0&&(q=[],m.set(ce,q)),k.isWebGLMultipleRenderTargets){const ue=k.texture;if(q.length!==ue.length||q[0]!==o.COLOR_ATTACHMENT0){for(let $e=0,lt=ue.length;$e<lt;$e++)q[$e]=o.COLOR_ATTACHMENT0+$e;q.length=ue.length,re=!0}}else q[0]!==o.COLOR_ATTACHMENT0&&(q[0]=o.COLOR_ATTACHMENT0,re=!0);else q[0]!==o.BACK&&(q[0]=o.BACK,re=!0);re&&(t.isWebGL2?o.drawBuffers(q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(q))}function He(k){return g!==k?(o.useProgram(k),g=k,!0):!1}const W={[ts]:o.FUNC_ADD,[Su]:o.FUNC_SUBTRACT,[Au]:o.FUNC_REVERSE_SUBTRACT};if(n)W[ja]=o.MIN,W[Ya]=o.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(W[ja]=k.MIN_EXT,W[Ya]=k.MAX_EXT)}const xt={[Tu]:o.ZERO,[Ru]:o.ONE,[Cu]:o.SRC_COLOR,[ph]:o.SRC_ALPHA,[Nu]:o.SRC_ALPHA_SATURATE,[Du]:o.DST_COLOR,[Pu]:o.DST_ALPHA,[Lu]:o.ONE_MINUS_SRC_COLOR,[mh]:o.ONE_MINUS_SRC_ALPHA,[Fu]:o.ONE_MINUS_DST_COLOR,[Iu]:o.ONE_MINUS_DST_ALPHA};function be(k,ce,q,re,ue,$e,lt,pt){if(k===si){p===!0&&(De(o.BLEND),p=!1);return}if(p===!1&&(ye(o.BLEND),p=!0),k!==bu){if(k!==v||pt!==y){if((x!==ts||b!==ts)&&(o.blendEquation(o.FUNC_ADD),x=ts,b=ts),pt)switch(k){case rs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wa:o.blendFunc(o.ONE,o.ONE);break;case Xa:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qa:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case rs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Wa:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Xa:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case qa:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,M=null,C=null,R=null,v=k,y=pt}return}ue=ue||ce,$e=$e||q,lt=lt||re,(ce!==x||ue!==b)&&(o.blendEquationSeparate(W[ce],W[ue]),x=ce,b=ue),(q!==w||re!==M||$e!==C||lt!==R)&&(o.blendFuncSeparate(xt[q],xt[re],xt[$e],xt[lt]),w=q,M=re,C=$e,R=lt),v=k,y=!1}function Ne(k,ce){k.side===mn?De(o.CULL_FACE):ye(o.CULL_FACE);let q=k.side===jt;ce&&(q=!q),Se(q),k.blending===rs&&k.transparent===!1?be(si):be(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const re=k.stencilWrite;c.setTest(re),re&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ie(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){E!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),E=k)}function tt(k){k!==wu?(ye(o.CULL_FACE),k!==B&&(k===Ga?o.cullFace(o.BACK):k===Eu?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),B=k}function ke(k){k!==z&&(U&&o.lineWidth(k),z=k)}function Ie(k,ce,q){k?(ye(o.POLYGON_OFFSET_FILL),(A!==ce||I!==q)&&(o.polygonOffset(ce,q),A=ce,I=q)):De(o.POLYGON_OFFSET_FILL)}function Je(k){k?ye(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function yt(k){k===void 0&&(k=o.TEXTURE0+D-1),Y!==k&&(o.activeTexture(k),Y=k)}function St(k,ce,q){q===void 0&&(Y===null?q=o.TEXTURE0+D-1:q=Y);let re=Z[q];re===void 0&&(re={type:void 0,texture:void 0},Z[q]=re),(re.type!==k||re.texture!==ce)&&(Y!==q&&(o.activeTexture(q),Y=q),o.bindTexture(k,ce||he[k]),re.type=k,re.texture=ce)}function P(){const k=Z[Y];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ee(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(k){Q.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function me(k){te.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function de(k,ce){let q=u.get(ce);q===void 0&&(q=new WeakMap,u.set(ce,q));let re=q.get(k);re===void 0&&(re=o.getUniformBlockIndex(ce,k.name),q.set(k,re))}function Ce(k,ce){const re=u.get(ce).get(k);h.get(ce)!==re&&(o.uniformBlockBinding(ce,re,k.__bindingPointIndex),h.set(ce,re))}function qe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),n===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},Y=null,Z={},f={},m=new WeakMap,_=[],g=null,p=!1,v=null,x=null,w=null,M=null,b=null,C=null,R=null,y=!1,E=null,B=null,z=null,A=null,I=null,Q.set(0,0,o.canvas.width,o.canvas.height),te.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ye,disable:De,bindFramebuffer:Re,drawBuffers:ut,useProgram:He,setBlending:be,setMaterial:Ne,setFlipSided:Se,setCullFace:tt,setLineWidth:ke,setPolygonOffset:Ie,setScissorTest:Je,activeTexture:yt,bindTexture:St,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:pe,texImage3D:we,updateUBOMapping:de,uniformBlockBinding:Ce,texStorage2D:ne,texStorage3D:j,texSubImage2D:se,texSubImage3D:ie,compressedTexSubImage2D:F,compressedTexSubImage3D:ee,scissor:xe,viewport:me,reset:qe}}function R_(o,e,t,n,i,s,r){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let _;const g=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,T){return p?new OffscreenCanvas(P,T):Vs("canvas")}function x(P,T,K,se){let ie=1;if((P.width>se||P.height>se)&&(ie=se/Math.max(P.width,P.height)),ie<1||T===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const F=T?zr:Math.floor,ee=F(ie*P.width),ne=F(ie*P.height);_===void 0&&(_=v(ee,ne));const j=K?v(ee,ne):_;return j.width=ee,j.height=ne,j.getContext("2d").drawImage(P,0,0,ee,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+ee+"x"+ne+")."),j}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function w(P){return aa(P.width)&&aa(P.height)}function M(P){return a?!1:P.wrapS!==qt||P.wrapT!==qt||P.minFilter!==Ct&&P.minFilter!==Xt}function b(P,T){return P.generateMipmaps&&T&&P.minFilter!==Ct&&P.minFilter!==Xt}function C(P){o.generateMipmap(P)}function R(P,T,K,se,ie=!1){if(a===!1)return T;if(P!==null){if(o[P]!==void 0)return o[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let F=T;return T===o.RED&&(K===o.FLOAT&&(F=o.R32F),K===o.HALF_FLOAT&&(F=o.R16F),K===o.UNSIGNED_BYTE&&(F=o.R8)),T===o.RG&&(K===o.FLOAT&&(F=o.RG32F),K===o.HALF_FLOAT&&(F=o.RG16F),K===o.UNSIGNED_BYTE&&(F=o.RG8)),T===o.RGBA&&(K===o.FLOAT&&(F=o.RGBA32F),K===o.HALF_FLOAT&&(F=o.RGBA16F),K===o.UNSIGNED_BYTE&&(F=se===Ee&&ie===!1?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(F=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(F=o.RGB5_A1)),(F===o.R16F||F===o.R32F||F===o.RG16F||F===o.RG32F||F===o.RGBA16F||F===o.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function y(P,T,K){return b(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==Xt?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function E(P){return P===Ct||P===ia||P===Dr?o.NEAREST:o.LINEAR}function B(P){const T=P.target;T.removeEventListener("dispose",B),A(T),T.isVideoTexture&&m.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),D(T)}function A(P){const T=n.get(P);if(T.__webglInit===void 0)return;const K=P.source,se=g.get(K);if(se){const ie=se[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&I(P),Object.keys(se).length===0&&g.delete(K)}n.remove(P)}function I(P){const T=n.get(P);o.deleteTexture(T.__webglTexture);const K=P.source,se=g.get(K);delete se[T.__cacheKey],r.memory.textures--}function D(P){const T=P.texture,K=n.get(P),se=n.get(T);if(se.__webglTexture!==void 0&&(o.deleteTexture(se.__webglTexture),r.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)o.deleteFramebuffer(K.__webglFramebuffer[ie]),K.__webglDepthbuffer&&o.deleteRenderbuffer(K.__webglDepthbuffer[ie]);else{if(o.deleteFramebuffer(K.__webglFramebuffer),K.__webglDepthbuffer&&o.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&o.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ie=0;ie<K.__webglColorRenderbuffer.length;ie++)K.__webglColorRenderbuffer[ie]&&o.deleteRenderbuffer(K.__webglColorRenderbuffer[ie]);K.__webglDepthRenderbuffer&&o.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let ie=0,F=T.length;ie<F;ie++){const ee=n.get(T[ie]);ee.__webglTexture&&(o.deleteTexture(ee.__webglTexture),r.memory.textures--),n.remove(T[ie])}n.remove(T),n.remove(P)}let U=0;function V(){U=0}function G(){const P=U;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),U+=1,P}function Y(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Z(P,T){const K=n.get(P);if(P.isVideoTexture&&yt(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(K,P,T);return}}t.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+T)}function ae(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){Re(K,P,T);return}t.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+T)}function O(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){Re(K,P,T);return}t.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+T)}function Q(P,T){const K=n.get(P);if(P.version>0&&K.__version!==P.version){ut(K,P,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+T)}const te={[An]:o.REPEAT,[qt]:o.CLAMP_TO_EDGE,[Ur]:o.MIRRORED_REPEAT},le={[Ct]:o.NEAREST,[ia]:o.NEAREST_MIPMAP_NEAREST,[Dr]:o.NEAREST_MIPMAP_LINEAR,[Xt]:o.LINEAR,[vh]:o.LINEAR_MIPMAP_NEAREST,[Ti]:o.LINEAR_MIPMAP_LINEAR},he={[fd]:o.NEVER,[yd]:o.ALWAYS,[pd]:o.LESS,[gd]:o.LEQUAL,[md]:o.EQUAL,[xd]:o.GEQUAL,[_d]:o.GREATER,[vd]:o.NOTEQUAL};function ye(P,T,K){if(K?(o.texParameteri(P,o.TEXTURE_WRAP_S,te[T.wrapS]),o.texParameteri(P,o.TEXTURE_WRAP_T,te[T.wrapT]),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,te[T.wrapR]),o.texParameteri(P,o.TEXTURE_MAG_FILTER,le[T.magFilter]),o.texParameteri(P,o.TEXTURE_MIN_FILTER,le[T.minFilter])):(o.texParameteri(P,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(P,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(P===o.TEXTURE_3D||P===o.TEXTURE_2D_ARRAY)&&o.texParameteri(P,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(T.wrapS!==qt||T.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(P,o.TEXTURE_MAG_FILTER,E(T.magFilter)),o.texParameteri(P,o.TEXTURE_MIN_FILTER,E(T.minFilter)),T.minFilter!==Ct&&T.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(o.texParameteri(P,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(P,o.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ct||T.minFilter!==Dr&&T.minFilter!==Ti||T.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===zs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(o.texParameterf(P,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function De(P,T){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const se=T.source;let ie=g.get(se);ie===void 0&&(ie={},g.set(se,ie));const F=Y(T);if(F!==P.__cacheKey){ie[F]===void 0&&(ie[F]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,K=!0),ie[F].usedTimes++;const ee=ie[P.__cacheKey];ee!==void 0&&(ie[P.__cacheKey].usedTimes--,ee.usedTimes===0&&I(T)),P.__cacheKey=F,P.__webglTexture=ie[F].texture}return K}function Re(P,T,K){let se=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(se=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(se=o.TEXTURE_3D);const ie=De(P,T),F=T.source;t.bindTexture(se,P.__webglTexture,o.TEXTURE0+K);const ee=n.get(F);if(F.version!==ee.__version||ie===!0){t.activeTexture(o.TEXTURE0+K),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const ne=M(T)&&w(T.image)===!1;let j=x(T.image,ne,!1,h);j=St(T,j);const pe=w(j)||a,we=s.convert(T.format,T.colorSpace);let xe=s.convert(T.type),me=R(T.internalFormat,we,xe,T.colorSpace);ye(se,T,pe);let de;const Ce=T.mipmaps,qe=a&&T.isVideoTexture!==!0,k=ee.__version===void 0||ie===!0,ce=y(T,j,pe);if(T.isDepthTexture)me=o.DEPTH_COMPONENT,a?T.type===zn?me=o.DEPTH_COMPONENT32F:T.type===ni?me=o.DEPTH_COMPONENT24:T.type===Ei?me=o.DEPTH24_STENCIL8:me=o.DEPTH_COMPONENT16:T.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===bi&&me===o.DEPTH_COMPONENT&&T.type!==va&&T.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ni,xe=s.convert(T.type)),T.format===hs&&me===o.DEPTH_COMPONENT&&(me=o.DEPTH_STENCIL,T.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ei,xe=s.convert(T.type))),k&&(qe?t.texStorage2D(o.TEXTURE_2D,1,me,j.width,j.height):t.texImage2D(o.TEXTURE_2D,0,me,j.width,j.height,0,we,xe,null));else if(T.isDataTexture)if(Ce.length>0&&pe){qe&&k&&t.texStorage2D(o.TEXTURE_2D,ce,me,Ce[0].width,Ce[0].height);for(let q=0,re=Ce.length;q<re;q++)de=Ce[q],qe?t.texSubImage2D(o.TEXTURE_2D,q,0,0,de.width,de.height,we,xe,de.data):t.texImage2D(o.TEXTURE_2D,q,me,de.width,de.height,0,we,xe,de.data);T.generateMipmaps=!1}else qe?(k&&t.texStorage2D(o.TEXTURE_2D,ce,me,j.width,j.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,j.width,j.height,we,xe,j.data)):t.texImage2D(o.TEXTURE_2D,0,me,j.width,j.height,0,we,xe,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&k&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ce,me,Ce[0].width,Ce[0].height,j.depth);for(let q=0,re=Ce.length;q<re;q++)de=Ce[q],T.format!==tn?we!==null?qe?t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,j.depth,we,de.data,0,0):t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,q,me,de.width,de.height,j.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,0,de.width,de.height,j.depth,we,xe,de.data):t.texImage3D(o.TEXTURE_2D_ARRAY,q,me,de.width,de.height,j.depth,0,we,xe,de.data)}else{qe&&k&&t.texStorage2D(o.TEXTURE_2D,ce,me,Ce[0].width,Ce[0].height);for(let q=0,re=Ce.length;q<re;q++)de=Ce[q],T.format!==tn?we!==null?qe?t.compressedTexSubImage2D(o.TEXTURE_2D,q,0,0,de.width,de.height,we,de.data):t.compressedTexImage2D(o.TEXTURE_2D,q,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(o.TEXTURE_2D,q,0,0,de.width,de.height,we,xe,de.data):t.texImage2D(o.TEXTURE_2D,q,me,de.width,de.height,0,we,xe,de.data)}else if(T.isDataArrayTexture)qe?(k&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ce,me,j.width,j.height,j.depth),t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,we,xe,j.data)):t.texImage3D(o.TEXTURE_2D_ARRAY,0,me,j.width,j.height,j.depth,0,we,xe,j.data);else if(T.isData3DTexture)qe?(k&&t.texStorage3D(o.TEXTURE_3D,ce,me,j.width,j.height,j.depth),t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,we,xe,j.data)):t.texImage3D(o.TEXTURE_3D,0,me,j.width,j.height,j.depth,0,we,xe,j.data);else if(T.isFramebufferTexture){if(k)if(qe)t.texStorage2D(o.TEXTURE_2D,ce,me,j.width,j.height);else{let q=j.width,re=j.height;for(let ue=0;ue<ce;ue++)t.texImage2D(o.TEXTURE_2D,ue,me,q,re,0,we,xe,null),q>>=1,re>>=1}}else if(Ce.length>0&&pe){qe&&k&&t.texStorage2D(o.TEXTURE_2D,ce,me,Ce[0].width,Ce[0].height);for(let q=0,re=Ce.length;q<re;q++)de=Ce[q],qe?t.texSubImage2D(o.TEXTURE_2D,q,0,0,we,xe,de):t.texImage2D(o.TEXTURE_2D,q,me,we,xe,de);T.generateMipmaps=!1}else qe?(k&&t.texStorage2D(o.TEXTURE_2D,ce,me,j.width,j.height),t.texSubImage2D(o.TEXTURE_2D,0,0,0,we,xe,j)):t.texImage2D(o.TEXTURE_2D,0,me,we,xe,j);b(T,pe)&&C(se),ee.__version=F.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ut(P,T,K){if(T.image.length!==6)return;const se=De(P,T),ie=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,P.__webglTexture,o.TEXTURE0+K);const F=n.get(ie);if(ie.version!==F.__version||se===!0){t.activeTexture(o.TEXTURE0+K),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.NONE);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,ne=T.image[0]&&T.image[0].isDataTexture,j=[];for(let q=0;q<6;q++)!ee&&!ne?j[q]=x(T.image[q],!1,!0,c):j[q]=ne?T.image[q].image:T.image[q],j[q]=St(T,j[q]);const pe=j[0],we=w(pe)||a,xe=s.convert(T.format,T.colorSpace),me=s.convert(T.type),de=R(T.internalFormat,xe,me,T.colorSpace),Ce=a&&T.isVideoTexture!==!0,qe=F.__version===void 0||se===!0;let k=y(T,pe,we);ye(o.TEXTURE_CUBE_MAP,T,we);let ce;if(ee){Ce&&qe&&t.texStorage2D(o.TEXTURE_CUBE_MAP,k,de,pe.width,pe.height);for(let q=0;q<6;q++){ce=j[q].mipmaps;for(let re=0;re<ce.length;re++){const ue=ce[re];T.format!==tn?xe!==null?Ce?t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,de,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,0,0,ue.width,ue.height,xe,me,ue.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re,de,ue.width,ue.height,0,xe,me,ue.data)}}}else{ce=T.mipmaps,Ce&&qe&&(ce.length>0&&k++,t.texStorage2D(o.TEXTURE_CUBE_MAP,k,de,j[0].width,j[0].height));for(let q=0;q<6;q++)if(ne){Ce?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,j[q].width,j[q].height,xe,me,j[q].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,j[q].width,j[q].height,0,xe,me,j[q].data);for(let re=0;re<ce.length;re++){const $e=ce[re].image[q].image;Ce?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,$e.width,$e.height,xe,me,$e.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,de,$e.width,$e.height,0,xe,me,$e.data)}}else{Ce?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,xe,me,j[q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,xe,me,j[q]);for(let re=0;re<ce.length;re++){const ue=ce[re];Ce?t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,0,0,xe,me,ue.image[q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+q,re+1,de,xe,me,ue.image[q])}}}b(T,we)&&C(o.TEXTURE_CUBE_MAP),F.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function He(P,T,K,se,ie){const F=s.convert(K.format,K.colorSpace),ee=s.convert(K.type),ne=R(K.internalFormat,F,ee,K.colorSpace);n.get(T).__hasExternalTextures||(ie===o.TEXTURE_3D||ie===o.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,ne,T.width,T.height,T.depth,0,F,ee,null):t.texImage2D(ie,0,ne,T.width,T.height,0,F,ee,null)),t.bindFramebuffer(o.FRAMEBUFFER,P),Je(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,se,ie,n.get(K).__webglTexture,0,Ie(T)):(ie===o.TEXTURE_2D||ie>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,se,ie,n.get(K).__webglTexture,0),t.bindFramebuffer(o.FRAMEBUFFER,null)}function W(P,T,K){if(o.bindRenderbuffer(o.RENDERBUFFER,P),T.depthBuffer&&!T.stencilBuffer){let se=o.DEPTH_COMPONENT16;if(K||Je(T)){const ie=T.depthTexture;ie&&ie.isDepthTexture&&(ie.type===zn?se=o.DEPTH_COMPONENT32F:ie.type===ni&&(se=o.DEPTH_COMPONENT24));const F=Ie(T);Je(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,F,se,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,F,se,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,se,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,P)}else if(T.depthBuffer&&T.stencilBuffer){const se=Ie(T);K&&Je(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,se,o.DEPTH24_STENCIL8,T.width,T.height):Je(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,se,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,P)}else{const se=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0;ie<se.length;ie++){const F=se[ie],ee=s.convert(F.format,F.colorSpace),ne=s.convert(F.type),j=R(F.internalFormat,ee,ne,F.colorSpace),pe=Ie(T);K&&Je(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,j,T.width,T.height):Je(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,j,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,j,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function xt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const se=n.get(T.depthTexture).__webglTexture,ie=Ie(T);if(T.depthTexture.format===bi)Je(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,se,0,ie):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,se,0);else if(T.depthTexture.format===hs)Je(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,se,0,ie):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function be(P){const T=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");xt(T.__webglFramebuffer,P)}else if(K){T.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[se]),T.__webglDepthbuffer[se]=o.createRenderbuffer(),W(T.__webglDepthbuffer[se],P,!1)}else t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),W(T.__webglDepthbuffer,P,!1);t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ne(P,T,K){const se=n.get(P);T!==void 0&&He(se.__webglFramebuffer,P,P.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D),K!==void 0&&be(P)}function Se(P){const T=P.texture,K=n.get(P),se=n.get(T);P.addEventListener("dispose",z),P.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=o.createTexture()),se.__version=T.version,r.memory.textures++);const ie=P.isWebGLCubeRenderTarget===!0,F=P.isWebGLMultipleRenderTargets===!0,ee=w(P)||a;if(ie){K.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)K.__webglFramebuffer[ne]=o.createFramebuffer()}else{if(K.__webglFramebuffer=o.createFramebuffer(),F)if(i.drawBuffers){const ne=P.texture;for(let j=0,pe=ne.length;j<pe;j++){const we=n.get(ne[j]);we.__webglTexture===void 0&&(we.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Je(P)===!1){const ne=F?T:[T];K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){const pe=ne[j];K.__webglColorRenderbuffer[j]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[j]);const we=s.convert(pe.format,pe.colorSpace),xe=s.convert(pe.type),me=R(pe.internalFormat,we,xe,pe.colorSpace,P.isXRRenderTarget===!0),de=Ie(P);o.renderbufferStorageMultisample(o.RENDERBUFFER,de,me,P.width,P.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+j,o.RENDERBUFFER,K.__webglColorRenderbuffer[j])}o.bindRenderbuffer(o.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),W(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ie){t.bindTexture(o.TEXTURE_CUBE_MAP,se.__webglTexture),ye(o.TEXTURE_CUBE_MAP,T,ee);for(let ne=0;ne<6;ne++)He(K.__webglFramebuffer[ne],P,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ne);b(T,ee)&&C(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){const ne=P.texture;for(let j=0,pe=ne.length;j<pe;j++){const we=ne[j],xe=n.get(we);t.bindTexture(o.TEXTURE_2D,xe.__webglTexture),ye(o.TEXTURE_2D,we,ee),He(K.__webglFramebuffer,P,we,o.COLOR_ATTACHMENT0+j,o.TEXTURE_2D),b(we,ee)&&C(o.TEXTURE_2D)}t.unbindTexture()}else{let ne=o.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?ne=P.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,se.__webglTexture),ye(ne,T,ee),He(K.__webglFramebuffer,P,T,o.COLOR_ATTACHMENT0,ne),b(T,ee)&&C(ne),t.unbindTexture()}P.depthBuffer&&be(P)}function tt(P){const T=w(P)||a,K=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let se=0,ie=K.length;se<ie;se++){const F=K[se];if(b(F,T)){const ee=P.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ne=n.get(F).__webglTexture;t.bindTexture(ee,ne),C(ee),t.unbindTexture()}}}function ke(P){if(a&&P.samples>0&&Je(P)===!1){const T=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],K=P.width,se=P.height;let ie=o.COLOR_BUFFER_BIT;const F=[],ee=P.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ne=n.get(P),j=P.isWebGLMultipleRenderTargets===!0;if(j)for(let pe=0;pe<T.length;pe++)t.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+pe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let pe=0;pe<T.length;pe++){F.push(o.COLOR_ATTACHMENT0+pe),P.depthBuffer&&F.push(ee);const we=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(we===!1&&(P.depthBuffer&&(ie|=o.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ie|=o.STENCIL_BUFFER_BIT)),j&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]),we===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[ee]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[ee])),j){const xe=n.get(T[pe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xe,0)}o.blitFramebuffer(0,0,K,se,0,0,K,se,ie,o.NEAREST),f&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F)}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),j)for(let pe=0;pe<T.length;pe++){t.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+pe,o.RENDERBUFFER,ne.__webglColorRenderbuffer[pe]);const we=n.get(T[pe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+pe,o.TEXTURE_2D,we,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Ie(P){return Math.min(u,P.samples)}function Je(P){const T=n.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(P){const T=r.render.frame;m.get(P)!==T&&(m.set(P,T),P.update())}function St(P,T){const K=P.colorSpace,se=P.format,ie=P.type;return P.isCompressedTexture===!0||P.format===oa||K!==Tn&&K!==Ai&&(K===Ee?a===!1?e.has("EXT_sRGB")===!0&&se===tn?(P.format=oa,P.minFilter=Xt,P.generateMipmaps=!1):T=Lh.sRGBToLinear(T):(se!==tn||ie!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=ae,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=Ne,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Je}function C_(o,e,t){const n=t.isWebGL2;function i(s,r=Ai){let a;if(s===ri)return o.UNSIGNED_BYTE;if(s===yh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Mh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ku)return o.BYTE;if(s===$u)return o.SHORT;if(s===va)return o.UNSIGNED_SHORT;if(s===xh)return o.INT;if(s===ni)return o.UNSIGNED_INT;if(s===zn)return o.FLOAT;if(s===zs)return n?o.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zu)return o.ALPHA;if(s===tn)return o.RGBA;if(s===Ju)return o.LUMINANCE;if(s===Qu)return o.LUMINANCE_ALPHA;if(s===bi)return o.DEPTH_COMPONENT;if(s===hs)return o.DEPTH_STENCIL;if(s===oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ed)return o.RED;if(s===wh)return o.RED_INTEGER;if(s===td)return o.RG;if(s===Eh)return o.RG_INTEGER;if(s===bh)return o.RGBA_INTEGER;if(s===so||s===ro||s===oo||s===ao)if(r===Ee)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===so)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ro)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===so)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ro)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===oo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ao)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ka||s===$a||s===Za||s===Ja)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ka)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$a)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ja)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qa||s===el)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Qa)return r===Ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===el)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tl||s===nl||s===il||s===sl||s===rl||s===ol||s===al||s===ll||s===cl||s===hl||s===ul||s===dl||s===fl||s===pl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===tl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===il)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ol)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===al)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ll)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ul)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pl)return r===Ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===lo)return r===Ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===id||s===ml||s===gl||s===_l)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===lo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ml)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?n?o.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}class L_ extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class on extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const P_={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class I_ extends wt{constructor(e,t,n,i,s,r,a,l,c,h){if(h=h!==void 0?h:bi,h!==bi&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=ni),n===void 0&&h===hs&&(n=Ei),super(null,i,s,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class D_ extends ai{constructor(e,t){super();const n=this;let i=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=t.getContextAttributes();let g=null,p=null;const v=[],x=[];let w=null;const M=new Bt;M.layers.enable(1),M.viewport=new Qe;const b=new Bt;b.layers.enable(2),b.viewport=new Qe;const C=[M,b],R=new L_;R.layers.enable(1),R.layers.enable(2);let y=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(O){w=O},this.getController=function(O){let Q=v[O];return Q===void 0&&(Q=new Io,v[O]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(O){let Q=v[O];return Q===void 0&&(Q=new Io,v[O]=Q),Q.getGripSpace()},this.getHand=function(O){let Q=v[O];return Q===void 0&&(Q=new Io,v[O]=Q),Q.getHandSpace()};function B(O){const Q=x.indexOf(O.inputSource);if(Q===-1)return;const te=v[Q];te!==void 0&&(te.update(O.inputSource,O.frame,c||r),te.dispatchEvent({type:O.type,data:O.inputSource}))}function z(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",A);for(let O=0;O<v.length;O++){const Q=x[O];Q!==null&&(x[O]=null,v[O].disconnect(Q))}y=null,E=null,e.setRenderTarget(g),f=null,d=null,u=null,i=null,p=null,ae.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",z),i.addEventListener("inputsourceschange",A),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),p=new Ri(f.framebufferWidth,f.framebufferHeight,{format:tn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Q=null,te=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=_.stencil?hs:bi,te=_.stencil?Ei:ni);const he={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(he),i.updateRenderState({layers:[d]}),p=new Ri(d.textureWidth,d.textureHeight,{format:tn,type:ri,depthTexture:new I_(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const ye=e.properties.get(p);ye.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function A(O){for(let Q=0;Q<O.removed.length;Q++){const te=O.removed[Q],le=x.indexOf(te);le>=0&&(x[le]=null,v[le].disconnect(te))}for(let Q=0;Q<O.added.length;Q++){const te=O.added[Q];let le=x.indexOf(te);if(le===-1){for(let ye=0;ye<v.length;ye++)if(ye>=x.length){x.push(te),le=ye;break}else if(x[ye]===null){x[ye]=te,le=ye;break}if(le===-1)break}const he=v[le];he&&he.connect(te)}}const I=new N,D=new N;function U(O,Q,te){I.setFromMatrixPosition(Q.matrixWorld),D.setFromMatrixPosition(te.matrixWorld);const le=I.distanceTo(D),he=Q.projectionMatrix.elements,ye=te.projectionMatrix.elements,De=he[14]/(he[10]-1),Re=he[14]/(he[10]+1),ut=(he[9]+1)/he[5],He=(he[9]-1)/he[5],W=(he[8]-1)/he[0],xt=(ye[8]+1)/ye[0],be=De*W,Ne=De*xt,Se=le/(-W+xt),tt=Se*-W;Q.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(tt),O.translateZ(Se),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const ke=De+Se,Ie=Re+Se,Je=be-tt,yt=Ne+(le-tt),St=ut*Re/Ie*ke,P=He*Re/Ie*ke;O.projectionMatrix.makePerspective(Je,yt,St,P,ke,Ie),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function V(O,Q){Q===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Q.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCameraXR=function(O){if(i===null)return O;w&&(O=w),R.near=b.near=M.near=O.near,R.far=b.far=M.far=O.far,(y!==R.near||E!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),y=R.near,E=R.far);const Q=O.parent,te=R.cameras;V(R,Q);for(let le=0;le<te.length;le++)V(te[le],Q);return te.length===2?U(R,M,b):R.projectionMatrix.copy(M.projectionMatrix),w&&G(R,Q),R};function G(O,Q){const te=w;Q===null?te.matrix.copy(O.matrixWorld):(te.matrix.copy(Q.matrixWorld),te.matrix.invert(),te.matrix.multiply(O.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0);const le=te.children;for(let he=0,ye=le.length;he<ye;he++)le[he].updateMatrixWorld(!0);te.projectionMatrix.copy(O.projectionMatrix),te.projectionMatrixInverse.copy(O.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ds*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let Y=null;function Z(O,Q){if(h=Q.getViewerPose(c||r),m=Q,h!==null){const te=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let le=!1;te.length!==R.cameras.length&&(R.cameras.length=0,le=!0);for(let he=0;he<te.length;he++){const ye=te[he];let De=null;if(f!==null)De=f.getViewport(ye);else{const ut=u.getViewSubImage(d,ye);De=ut.viewport,he===0&&(e.setRenderTargetTextures(p,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(p))}let Re=C[he];Re===void 0&&(Re=new Bt,Re.layers.enable(he),Re.viewport=new Qe,C[he]=Re),Re.matrix.fromArray(ye.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(ye.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(De.x,De.y,De.width,De.height),he===0&&(R.matrix.copy(Re.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),le===!0&&R.cameras.push(Re)}}for(let te=0;te<v.length;te++){const le=x[te],he=v[te];le!==null&&he!==void 0&&he.update(le,Q,c||r)}Y&&Y(O,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const ae=new zh;ae.setAnimationLoop(Z),this.setAnimationLoop=function(O){Y=O},this.dispose=function(){}}}function F_(o,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Bh(o)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===jt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===jt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const x=o.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function N_(o,e,t,n){let i={},s={},r=[];const a=t.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const w=x.program;n.uniformBlockBinding(v,w)}function c(v,x){let w=i[v.id];w===void 0&&(m(v),w=h(v),i[v.id]=w,v.addEventListener("dispose",g));const M=x.program;n.updateUBOMapping(v,M);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function h(v){const x=u();v.__bindingPointIndex=x;const w=o.createBuffer(),M=v.__size,b=v.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,M,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,x,w),w}function u(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],w=v.uniforms,M=v.__cache;o.bindBuffer(o.UNIFORM_BUFFER,x);for(let b=0,C=w.length;b<C;b++){const R=w[b];if(f(R,b,M)===!0){const y=R.__offset,E=Array.isArray(R.value)?R.value:[R.value];let B=0;for(let z=0;z<E.length;z++){const A=E[z],I=_(A);typeof A=="number"?(R.__data[0]=A,o.bufferSubData(o.UNIFORM_BUFFER,y+B,R.__data)):A.isMatrix3?(R.__data[0]=A.elements[0],R.__data[1]=A.elements[1],R.__data[2]=A.elements[2],R.__data[3]=A.elements[0],R.__data[4]=A.elements[3],R.__data[5]=A.elements[4],R.__data[6]=A.elements[5],R.__data[7]=A.elements[0],R.__data[8]=A.elements[6],R.__data[9]=A.elements[7],R.__data[10]=A.elements[8],R.__data[11]=A.elements[0]):(A.toArray(R.__data,B),B+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,y,R.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(v,x,w){const M=v.value;if(w[x]===void 0){if(typeof M=="number")w[x]=M;else{const b=Array.isArray(M)?M:[M],C=[];for(let R=0;R<b.length;R++)C.push(b[R].clone());w[x]=C}return!0}else if(typeof M=="number"){if(w[x]!==M)return w[x]=M,!0}else{const b=Array.isArray(w[x])?w[x]:[w[x]],C=Array.isArray(M)?M:[M];for(let R=0;R<b.length;R++){const y=b[R];if(y.equals(C[R])===!1)return y.copy(C[R]),!0}}return!1}function m(v){const x=v.uniforms;let w=0;const M=16;let b=0;for(let C=0,R=x.length;C<R;C++){const y=x[C],E={boundary:0,storage:0},B=Array.isArray(y.value)?y.value:[y.value];for(let z=0,A=B.length;z<A;z++){const I=B[z],D=_(I);E.boundary+=D.boundary,E.storage+=D.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=w,C>0){b=w%M;const z=M-b;b!==0&&z-E.boundary<0&&(w+=M-b,y.__offset=w)}w+=E.storage}return b=w%M,b>0&&(w+=M-b),v.__size=w,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const w=r.indexOf(x.__bindingPointIndex);r.splice(w,1),o.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)o.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}function U_(){const o=Vs("canvas");return o.style.display="block",o}class Wh{constructor(e={}){const{canvas:t=U_(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=r;const f=new Uint32Array(4),m=new Int32Array(4);let _=null,g=null;const p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ee,this.useLegacyLights=!0,this.toneMapping=Gn,this.toneMappingExposure=1;const x=this;let w=!1,M=0,b=0,C=null,R=-1,y=null;const E=new Qe,B=new Qe;let z=null;const A=new Me(0);let I=0,D=t.width,U=t.height,V=1,G=null,Y=null;const Z=new Qe(0,0,D,U),ae=new Qe(0,0,D,U);let O=!1;const Q=new Ea;let te=!1,le=!1,he=null;const ye=new ve,De=new Te,Re=new N,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return C===null?V:1}let W=n;function xt(L,X){for(let $=0;$<L.length;$++){const H=L[$],J=t.getContext(H,X);if(J!==null)return J}return null}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_a}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",re,!1),W===null){const X=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&X.shift(),W=xt(X,L),W===null)throw xt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,Ne,Se,tt,ke,Ie,Je,yt,St,P,T,K,se,ie,F,ee,ne,j,pe,we,xe,me,de,Ce;function qe(){be=new jm(W),Ne=new Vm(W,be,e),be.init(Ne),me=new C_(W,be,Ne),Se=new T_(W,be,Ne),tt=new $m(W),ke=new f_,Ie=new R_(W,be,Se,ke,Ne,me,tt),Je=new Gm(x),yt=new qm(x),St=new lf(W,Ne),de=new zm(W,be,St,Ne),P=new Ym(W,St,tt,de),T=new eg(W,P,St,tt),pe=new Qm(W,Ne,Ie),ee=new Hm(ke),K=new d_(x,Je,yt,be,Ne,de,ee),se=new F_(x,ke),ie=new m_,F=new M_(be,Ne),j=new Om(x,Je,yt,Se,T,d,l),ne=new A_(x,T,Ne),Ce=new N_(W,tt,Ne,Se),we=new km(W,be,tt,Ne),xe=new Km(W,be,tt,Ne),tt.programs=K.programs,x.capabilities=Ne,x.extensions=be,x.properties=ke,x.renderLists=ie,x.shadowMap=ne,x.state=Se,x.info=tt}qe();const k=new D_(x,W);this.xr=k,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(D,U,!1))},this.getSize=function(L){return L.set(D,U)},this.setSize=function(L,X,$=!0){if(k.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=L,U=X,t.width=Math.floor(L*V),t.height=Math.floor(X*V),$===!0&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(D*V,U*V).floor()},this.setDrawingBufferSize=function(L,X,$){D=L,U=X,V=$,t.width=Math.floor(L*$),t.height=Math.floor(X*$),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(Z)},this.setViewport=function(L,X,$,H){L.isVector4?Z.set(L.x,L.y,L.z,L.w):Z.set(L,X,$,H),Se.viewport(E.copy(Z).multiplyScalar(V).floor())},this.getScissor=function(L){return L.copy(ae)},this.setScissor=function(L,X,$,H){L.isVector4?ae.set(L.x,L.y,L.z,L.w):ae.set(L,X,$,H),Se.scissor(B.copy(ae).multiplyScalar(V).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(L){Se.setScissorTest(O=L)},this.setOpaqueSort=function(L){G=L},this.setTransparentSort=function(L){Y=L},this.getClearColor=function(L){return L.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(L=!0,X=!0,$=!0){let H=0;if(L){let J=!1;if(C!==null){const fe=C.texture.format;J=fe===bh||fe===Eh||fe===wh}if(J){const fe=C.texture.type,Ae=fe===ri||fe===ni||fe===va||fe===Ei||fe===yh||fe===Mh,Le=j.getClearColor(),Pe=j.getClearAlpha(),Ge=Le.r,Fe=Le.g,Ue=Le.b,st=ke.get(C).__webglFramebuffer;Ae?(f[0]=Ge,f[1]=Fe,f[2]=Ue,f[3]=Pe,W.clearBufferuiv(W.COLOR,st,f)):(m[0]=Ge,m[1]=Fe,m[2]=Ue,m[3]=Pe,W.clearBufferiv(W.COLOR,st,m))}else H|=W.COLOR_BUFFER_BIT}X&&(H|=W.DEPTH_BUFFER_BIT),$&&(H|=W.STENCIL_BUFFER_BIT),W.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ie.dispose(),F.dispose(),ke.dispose(),Je.dispose(),yt.dispose(),T.dispose(),de.dispose(),Ce.dispose(),K.dispose(),k.dispose(),k.removeEventListener("sessionstart",ct),k.removeEventListener("sessionend",vn),he&&(he.dispose(),he=null),Ot.stop()};function ce(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=tt.autoReset,X=ne.enabled,$=ne.autoUpdate,H=ne.needsUpdate,J=ne.type;qe(),tt.autoReset=L,ne.enabled=X,ne.autoUpdate=$,ne.needsUpdate=H,ne.type=J}function re(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ue(L){const X=L.target;X.removeEventListener("dispose",ue),$e(X)}function $e(L){lt(L),ke.remove(L)}function lt(L){const X=ke.get(L).programs;X!==void 0&&(X.forEach(function($){K.releaseProgram($)}),L.isShaderMaterial&&K.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,$,H,J,fe){X===null&&(X=ut);const Ae=J.isMesh&&J.matrixWorld.determinant()<0,Le=vu(L,X,$,H,J);Se.setMaterial(H,Ae);let Pe=$.index,Ge=1;H.wireframe===!0&&(Pe=P.getWireframeAttribute($),Ge=2);const Fe=$.drawRange,Ue=$.attributes.position;let st=Fe.start*Ge,dt=(Fe.start+Fe.count)*Ge;fe!==null&&(st=Math.max(st,fe.start*Ge),dt=Math.min(dt,(fe.start+fe.count)*Ge)),Pe!==null?(st=Math.max(st,0),dt=Math.min(dt,Pe.count)):Ue!=null&&(st=Math.max(st,0),dt=Math.min(dt,Ue.count));const ln=dt-st;if(ln<0||ln===1/0)return;de.setup(J,H,Le,$,Pe);let Ln,mt=we;if(Pe!==null&&(Ln=St.get(Pe),mt=xe,mt.setIndex(Ln)),J.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*He()),mt.setMode(W.LINES)):mt.setMode(W.TRIANGLES);else if(J.isLine){let Ye=H.linewidth;Ye===void 0&&(Ye=1),Se.setLineWidth(Ye*He()),J.isLineSegments?mt.setMode(W.LINES):J.isLineLoop?mt.setMode(W.LINE_LOOP):mt.setMode(W.LINE_STRIP)}else J.isPoints?mt.setMode(W.POINTS):J.isSprite&&mt.setMode(W.TRIANGLES);if(J.isInstancedMesh)mt.renderInstances(st,ln,J.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,eo=Math.min($.instanceCount,Ye);mt.renderInstances(st,ln,eo)}else mt.render(st,ln)},this.compile=function(L,X){function $(H,J,fe){H.transparent===!0&&H.side===mn&&H.forceSinglePass===!1?(H.side=jt,H.needsUpdate=!0,$s(H,J,fe),H.side=Xn,H.needsUpdate=!0,$s(H,J,fe),H.side=mn):$s(H,J,fe)}g=F.get(L),g.init(),v.push(g),L.traverseVisible(function(H){H.isLight&&H.layers.test(X.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights(x.useLegacyLights),L.traverse(function(H){const J=H.material;if(J)if(Array.isArray(J))for(let fe=0;fe<J.length;fe++){const Ae=J[fe];$(Ae,L,H)}else $(J,L,H)}),v.pop(),g=null};let pt=null;function ci(L){pt&&pt(L)}function ct(){Ot.stop()}function vn(){Ot.start()}const Ot=new zh;Ot.setAnimationLoop(ci),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(L){pt=L,k.setAnimationLoop(L),L===null?Ot.stop():Ot.start()},k.addEventListener("sessionstart",ct),k.addEventListener("sessionend",vn),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(X=k.updateCameraXR(X)),L.isScene===!0&&L.onBeforeRender(x,L,X,C),g=F.get(L,v.length),g.init(),v.push(g),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(ye),le=this.localClippingEnabled,te=ee.init(this.clippingPlanes,le),_=ie.get(L,p.length),_.init(),p.push(_),Ba(L,X,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,Y),te===!0&&ee.beginShadows();const $=g.state.shadowsArray;if(ne.render($,L,X),te===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,j.render(_,L),g.setupLights(x.useLegacyLights),X.isArrayCamera){const H=X.cameras;for(let J=0,fe=H.length;J<fe;J++){const Ae=H[J];Oa(_,L,Ae,Ae.viewport)}}else Oa(_,L,X);C!==null&&(Ie.updateMultisampleRenderTarget(C),Ie.updateRenderTargetMipmap(C)),L.isScene===!0&&L.onAfterRender(x,L,X),de.resetDefaultState(),R=-1,y=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ba(L,X,$,H){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)$=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){H&&Re.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ye);const Ae=T.update(L),Le=L.material;Le.visible&&_.push(L,Ae,Le,$,Re.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){L.isSkinnedMesh&&L.skeleton.frame!==tt.render.frame&&(L.skeleton.update(),L.skeleton.frame=tt.render.frame);const Ae=T.update(L),Le=L.material;if(H&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Re.copy(L.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Re.copy(Ae.boundingSphere.center)),Re.applyMatrix4(L.matrixWorld).applyMatrix4(ye)),Array.isArray(Le)){const Pe=Ae.groups;for(let Ge=0,Fe=Pe.length;Ge<Fe;Ge++){const Ue=Pe[Ge],st=Le[Ue.materialIndex];st&&st.visible&&_.push(L,Ae,st,$,Re.z,Ue)}}else Le.visible&&_.push(L,Ae,Le,$,Re.z,null)}}const fe=L.children;for(let Ae=0,Le=fe.length;Ae<Le;Ae++)Ba(fe[Ae],X,$,H)}function Oa(L,X,$,H){const J=L.opaque,fe=L.transmissive,Ae=L.transparent;g.setupLightsView($),te===!0&&ee.setGlobalState(x.clippingPlanes,$),fe.length>0&&_u(J,fe,X,$),H&&Se.viewport(E.copy(H)),J.length>0&&Ks(J,X,$),fe.length>0&&Ks(fe,X,$),Ae.length>0&&Ks(Ae,X,$),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function _u(L,X,$,H){const J=Ne.isWebGL2;he===null&&(he=new Ri(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?zs:ri,minFilter:Ti,samples:J&&a===!0?4:0})),x.getDrawingBufferSize(De),J?he.setSize(De.x,De.y):he.setSize(zr(De.x),zr(De.y));const fe=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(A),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Ae=x.toneMapping;x.toneMapping=Gn,Ks(L,$,H),Ie.updateMultisampleRenderTarget(he),Ie.updateRenderTargetMipmap(he);let Le=!1;for(let Pe=0,Ge=X.length;Pe<Ge;Pe++){const Fe=X[Pe],Ue=Fe.object,st=Fe.geometry,dt=Fe.material,ln=Fe.group;if(dt.side===mn&&Ue.layers.test(H.layers)){const Ln=dt.side;dt.side=jt,dt.needsUpdate=!0,za(Ue,$,H,st,dt,ln),dt.side=Ln,dt.needsUpdate=!0,Le=!0}}Le===!0&&(Ie.updateMultisampleRenderTarget(he),Ie.updateRenderTargetMipmap(he)),x.setRenderTarget(fe),x.setClearColor(A,I),x.toneMapping=Ae}function Ks(L,X,$){const H=X.isScene===!0?X.overrideMaterial:null;for(let J=0,fe=L.length;J<fe;J++){const Ae=L[J],Le=Ae.object,Pe=Ae.geometry,Ge=H===null?Ae.material:H,Fe=Ae.group;Le.layers.test($.layers)&&za(Le,X,$,Pe,Ge,Fe)}}function za(L,X,$,H,J,fe){L.onBeforeRender(x,X,$,H,J,fe),L.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(x,X,$,H,L,fe),J.transparent===!0&&J.side===mn&&J.forceSinglePass===!1?(J.side=jt,J.needsUpdate=!0,x.renderBufferDirect($,X,H,J,L,fe),J.side=Xn,J.needsUpdate=!0,x.renderBufferDirect($,X,H,J,L,fe),J.side=mn):x.renderBufferDirect($,X,H,J,L,fe),L.onAfterRender(x,X,$,H,J,fe)}function $s(L,X,$){X.isScene!==!0&&(X=ut);const H=ke.get(L),J=g.state.lights,fe=g.state.shadowsArray,Ae=J.state.version,Le=K.getParameters(L,J.state,fe,X,$),Pe=K.getProgramCacheKey(Le);let Ge=H.programs;H.environment=L.isMeshStandardMaterial?X.environment:null,H.fog=X.fog,H.envMap=(L.isMeshStandardMaterial?yt:Je).get(L.envMap||H.environment),Ge===void 0&&(L.addEventListener("dispose",ue),Ge=new Map,H.programs=Ge);let Fe=Ge.get(Pe);if(Fe!==void 0){if(H.currentProgram===Fe&&H.lightsStateVersion===Ae)return ka(L,Le),Fe}else Le.uniforms=K.getUniforms(L),L.onBuild($,Le,x),L.onBeforeCompile(Le,x),Fe=K.acquireProgram(Le,Pe),Ge.set(Pe,Fe),H.uniforms=Le.uniforms;const Ue=H.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ue.clippingPlanes=ee.uniform),ka(L,Le),H.needsLights=yu(L),H.lightsStateVersion=Ae,H.needsLights&&(Ue.ambientLightColor.value=J.state.ambient,Ue.lightProbe.value=J.state.probe,Ue.directionalLights.value=J.state.directional,Ue.directionalLightShadows.value=J.state.directionalShadow,Ue.spotLights.value=J.state.spot,Ue.spotLightShadows.value=J.state.spotShadow,Ue.rectAreaLights.value=J.state.rectArea,Ue.ltc_1.value=J.state.rectAreaLTC1,Ue.ltc_2.value=J.state.rectAreaLTC2,Ue.pointLights.value=J.state.point,Ue.pointLightShadows.value=J.state.pointShadow,Ue.hemisphereLights.value=J.state.hemi,Ue.directionalShadowMap.value=J.state.directionalShadowMap,Ue.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ue.spotShadowMap.value=J.state.spotShadowMap,Ue.spotLightMatrix.value=J.state.spotLightMatrix,Ue.spotLightMap.value=J.state.spotLightMap,Ue.pointShadowMap.value=J.state.pointShadowMap,Ue.pointShadowMatrix.value=J.state.pointShadowMatrix);const st=Fe.getUniforms(),dt=Fr.seqWithValue(st.seq,Ue);return H.currentProgram=Fe,H.uniformsList=dt,Fe}function ka(L,X){const $=ke.get(L);$.outputColorSpace=X.outputColorSpace,$.instancing=X.instancing,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function vu(L,X,$,H,J){X.isScene!==!0&&(X=ut),Ie.resetTextureUnits();const fe=X.fog,Ae=H.isMeshStandardMaterial?X.environment:null,Le=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Tn,Pe=(H.isMeshStandardMaterial?yt:Je).get(H.envMap||Ae),Ge=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!$.morphAttributes.position,st=!!$.morphAttributes.normal,dt=!!$.morphAttributes.color,ln=H.toneMapped?x.toneMapping:Gn,Ln=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,mt=Ln!==void 0?Ln.length:0,Ye=ke.get(H),eo=g.state.lights;if(te===!0&&(le===!0||L!==y)){const Yt=L===y&&H.id===R;ee.setState(H,L,Yt)}let At=!1;H.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==eo.state.version||Ye.outputColorSpace!==Le||J.isInstancedMesh&&Ye.instancing===!1||!J.isInstancedMesh&&Ye.instancing===!0||J.isSkinnedMesh&&Ye.skinning===!1||!J.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Pe||H.fog===!0&&Ye.fog!==fe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ee.numPlanes||Ye.numIntersection!==ee.numIntersection)||Ye.vertexAlphas!==Ge||Ye.vertexTangents!==Fe||Ye.morphTargets!==Ue||Ye.morphNormals!==st||Ye.morphColors!==dt||Ye.toneMapping!==ln||Ne.isWebGL2===!0&&Ye.morphTargetsCount!==mt)&&(At=!0):(At=!0,Ye.__version=H.version);let hi=Ye.currentProgram;At===!0&&(hi=$s(H,X,J));let Va=!1,ws=!1,to=!1;const zt=hi.getUniforms(),ui=Ye.uniforms;if(Se.useProgram(hi.program)&&(Va=!0,ws=!0,to=!0),H.id!==R&&(R=H.id,ws=!0),Va||y!==L){if(zt.setValue(W,"projectionMatrix",L.projectionMatrix),Ne.logarithmicDepthBuffer&&zt.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),y!==L&&(y=L,ws=!0,to=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const Yt=zt.map.cameraPosition;Yt!==void 0&&Yt.setValue(W,Re.setFromMatrixPosition(L.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&zt.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||J.isSkinnedMesh)&&zt.setValue(W,"viewMatrix",L.matrixWorldInverse)}if(J.isSkinnedMesh){zt.setOptional(W,J,"bindMatrix"),zt.setOptional(W,J,"bindMatrixInverse");const Yt=J.skeleton;Yt&&(Ne.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),zt.setValue(W,"boneTexture",Yt.boneTexture,Ie),zt.setValue(W,"boneTextureSize",Yt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const no=$.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&Ne.isWebGL2===!0)&&pe.update(J,$,hi),(ws||Ye.receiveShadow!==J.receiveShadow)&&(Ye.receiveShadow=J.receiveShadow,zt.setValue(W,"receiveShadow",J.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ui.envMap.value=Pe,ui.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),ws&&(zt.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&xu(ui,to),fe&&H.fog===!0&&se.refreshFogUniforms(ui,fe),se.refreshMaterialUniforms(ui,H,V,U,he),Fr.upload(W,Ye.uniformsList,ui,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Fr.upload(W,Ye.uniformsList,ui,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&zt.setValue(W,"center",J.center),zt.setValue(W,"modelViewMatrix",J.modelViewMatrix),zt.setValue(W,"normalMatrix",J.normalMatrix),zt.setValue(W,"modelMatrix",J.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Yt=H.uniformsGroups;for(let io=0,Mu=Yt.length;io<Mu;io++)if(Ne.isWebGL2){const Ha=Yt[io];Ce.update(Ha,hi),Ce.bind(Ha,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function xu(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function yu(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(L,X,$){ke.get(L.texture).__webglTexture=X,ke.get(L.depthTexture).__webglTexture=$;const H=ke.get(L);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=$===void 0,H.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,X){const $=ke.get(L);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,$=0){C=L,M=X,b=$;let H=!0,J=null,fe=!1,Ae=!1;if(L){const Pe=ke.get(L);Pe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(W.FRAMEBUFFER,null),H=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(L):Pe.__hasExternalTextures&&Ie.rebindTextures(L,ke.get(L.texture).__webglTexture,ke.get(L.depthTexture).__webglTexture);const Ge=L.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const Fe=ke.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(J=Fe[X],fe=!0):Ne.isWebGL2&&L.samples>0&&Ie.useMultisampledRTT(L)===!1?J=ke.get(L).__webglMultisampledFramebuffer:J=Fe,E.copy(L.viewport),B.copy(L.scissor),z=L.scissorTest}else E.copy(Z).multiplyScalar(V).floor(),B.copy(ae).multiplyScalar(V).floor(),z=O;if(Se.bindFramebuffer(W.FRAMEBUFFER,J)&&Ne.drawBuffers&&H&&Se.drawBuffers(L,J),Se.viewport(E),Se.scissor(B),Se.setScissorTest(z),fe){const Pe=ke.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,$)}else if(Ae){const Pe=ke.get(L.texture),Ge=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pe.__webglTexture,$||0,Ge)}R=-1},this.readRenderTargetPixels=function(L,X,$,H,J,fe,Ae){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ke.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){Se.bindFramebuffer(W.FRAMEBUFFER,Le);try{const Pe=L.texture,Ge=Pe.format,Fe=Pe.type;if(Ge!==tn&&me.convert(Ge)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Fe===zs&&(be.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&be.has("EXT_color_buffer_float"));if(Fe!==ri&&me.convert(Fe)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===zn&&(Ne.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-H&&$>=0&&$<=L.height-J&&W.readPixels(X,$,H,J,me.convert(Ge),me.convert(Fe),fe)}finally{const Pe=C!==null?ke.get(C).__webglFramebuffer:null;Se.bindFramebuffer(W.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(L,X,$=0){const H=Math.pow(2,-$),J=Math.floor(X.image.width*H),fe=Math.floor(X.image.height*H);Ie.setTexture2D(X,0),W.copyTexSubImage2D(W.TEXTURE_2D,$,0,0,L.x,L.y,J,fe),Se.unbindTexture()},this.copyTextureToTexture=function(L,X,$,H=0){const J=X.image.width,fe=X.image.height,Ae=me.convert($.format),Le=me.convert($.type);Ie.setTexture2D($,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment),X.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,H,L.x,L.y,J,fe,Ae,Le,X.image.data):X.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,H,L.x,L.y,X.mipmaps[0].width,X.mipmaps[0].height,Ae,X.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,H,L.x,L.y,Ae,Le,X.image),H===0&&$.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(L,X,$,H,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=L.max.x-L.min.x+1,Ae=L.max.y-L.min.y+1,Le=L.max.z-L.min.z+1,Pe=me.convert(H.format),Ge=me.convert(H.type);let Fe;if(H.isData3DTexture)Ie.setTexture3D(H,0),Fe=W.TEXTURE_3D;else if(H.isDataArrayTexture)Ie.setTexture2DArray(H,0),Fe=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,H.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,H.unpackAlignment);const Ue=W.getParameter(W.UNPACK_ROW_LENGTH),st=W.getParameter(W.UNPACK_IMAGE_HEIGHT),dt=W.getParameter(W.UNPACK_SKIP_PIXELS),ln=W.getParameter(W.UNPACK_SKIP_ROWS),Ln=W.getParameter(W.UNPACK_SKIP_IMAGES),mt=$.isCompressedTexture?$.mipmaps[0]:$.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,mt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,L.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,L.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,L.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Fe,J,X.x,X.y,X.z,fe,Ae,Le,Pe,Ge,mt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Fe,J,X.x,X.y,X.z,fe,Ae,Le,Pe,mt.data)):W.texSubImage3D(Fe,J,X.x,X.y,X.z,fe,Ae,Le,Pe,Ge,mt),W.pixelStorei(W.UNPACK_ROW_LENGTH,Ue),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,st),W.pixelStorei(W.UNPACK_SKIP_PIXELS,dt),W.pixelStorei(W.UNPACK_SKIP_ROWS,ln),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ln),J===0&&H.generateMipmaps&&W.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?Ie.setTextureCube(L,0):L.isData3DTexture?Ie.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ie.setTexture2DArray(L,0):Ie.setTexture2D(L,0),Se.unbindTexture()},this.resetState=function(){M=0,b=0,C=null,Se.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?Si:Ah}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Si?Ee:Tn}}class B_ extends Wh{}B_.prototype.isWebGL1Renderer=!0;class O_ extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class z_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ra,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new N;class Sa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ic=new N,sc=new Qe,rc=new Qe,k_=new N,oc=new ve,$i=new N,Do=new Rn,ac=new ve,Fo=new jr;class Xh extends Ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ve,this.bindMatrixInverse=new ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)$i.fromBufferAttribute(t,n),this.applyBoneTransform(n,$i),this.boundingBox.expandByPoint($i)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)$i.fromBufferAttribute(t,n),this.applyBoneTransform(n,$i),this.boundingSphere.expandByPoint($i)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1&&(ac.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(ac),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sc.fromBufferAttribute(i.attributes.skinIndex,e),rc.fromBufferAttribute(i.attributes.skinWeight,e),ic.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=rc.getComponent(s);if(r!==0){const a=sc.getComponent(s);oc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(k_.copy(ic).applyMatrix4(oc),r)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class kr extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class V_ extends wt{constructor(e=null,t=1,n=1,i,s,r,a,l,c=Ct,h=Ct,u,d){super(null,r,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=new ve,H_=new ve;class $r{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:H_;lc.multiplyMatrices(a,t[s]),lc.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Rh(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new V_(t,e,e,tn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new kr),this.bones.push(r),this.boneInverses.push(new ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class cc extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zi=new ve,hc=new ve,_r=[],uc=new _n,G_=new ve,Ts=new Ve,Rs=new Rn;class W_ extends Ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,G_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),uc.copy(e.boundingBox).applyMatrix4(Zi),this.boundingBox.union(uc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zi),Rs.copy(e.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Rs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ts.geometry=this.geometry,Ts.material=this.material,Ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(n),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Zi),hc.multiplyMatrices(n,Zi),Ts.matrixWorld=hc,Ts.raycast(e,_r);for(let r=0,a=_r.length;r<a;r++){const l=_r[r];l.instanceId=s,l.object=this,t.push(l)}_r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Aa extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new N,fc=new N,pc=new ve,No=new jr,vr=new Rn;class Zr extends it{constructor(e=new Pt,t=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)dc.fromBufferAttribute(t,i-1),fc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dc.distanceTo(fc);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(i),vr.radius+=s,e.ray.intersectsSphere(vr)===!1)return;pc.copy(i).invert(),No.copy(e.ray).applyMatrix4(pc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,h=new N,u=new N,d=new N,f=this.isLineSegments?2:1,m=n.index,g=n.attributes.position;if(m!==null){const p=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let x=p,w=v-1;x<w;x+=f){const M=m.getX(x),b=m.getX(x+1);if(c.fromBufferAttribute(g,M),h.fromBufferAttribute(g,b),No.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let x=p,w=v-1;x<w;x+=f){if(c.fromBufferAttribute(g,x),h.fromBufferAttribute(g,x+1),No.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const mc=new N,gc=new N;class X_ extends Zr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)mc.fromBufferAttribute(t,i),gc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mc.distanceTo(gc);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class q_ extends Zr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qh extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _c=new ve,ca=new jr,xr=new Rn,yr=new N;class j_ extends it{constructor(e=new Pt,t=new qh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=s,e.ray.intersectsSphere(xr)===!1)return;_c.copy(i).invert(),ca.copy(e.ray).applyMatrix4(_c);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=d,_=f;m<_;m++){const g=c.getX(m);yr.fromBufferAttribute(u,g),vc(yr,g,l,i,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,_=f;m<_;m++)yr.fromBufferAttribute(u,m),vc(yr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function vc(o,e,t,n,i,s,r){const a=ca.distanceSqToPoint(o);if(a<t){const l=new N;ca.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class Y_{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-r,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(r-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),a=this.getPoint(s),l=t||(r.isVector2?new Te:new N);return l.copy(a).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,i=[],s=[],r=[],a=new N,l=new ve;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new N)}s[0]=new N,r[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(vt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(vt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jr extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;v(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function v(){const w=new N,M=new N;let b=0;const C=(t-e)/n;for(let R=0;R<=s;R++){const y=[],E=R/s,B=E*(t-e)+e;for(let z=0;z<=i;z++){const A=z/i,I=A*l+a,D=Math.sin(I),U=Math.cos(I);M.x=B*D,M.y=-E*n+g,M.z=B*U,u.push(M.x,M.y,M.z),w.set(D,C,U).normalize(),d.push(w.x,w.y,w.z),f.push(A,1-E),y.push(m++)}_.push(y)}for(let R=0;R<i;R++)for(let y=0;y<s;y++){const E=_[y][R],B=_[y+1][R],z=_[y+1][R+1],A=_[y][R+1];h.push(E,B,A),h.push(B,z,A),b+=6}c.addGroup(p,b,0),p+=b}function x(w){const M=m,b=new Te,C=new N;let R=0;const y=w===!0?e:t,E=w===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),m++;const B=m;for(let z=0;z<=i;z++){const I=z/i*l+a,D=Math.cos(I),U=Math.sin(I);C.x=y*U,C.y=g*E,C.z=y*D,u.push(C.x,C.y,C.z),d.push(0,E,0),b.x=D*.5+.5,b.y=U*.5*E+.5,f.push(b.x,b.y),m++}for(let z=0;z<i;z++){const A=M+z,I=B+z;w===!0?h.push(I,I+1,A):h.push(I+1,I,A),R+=3}c.addGroup(p,R,w===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ps extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new N,d=new N,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const v=[],x=p/n;let w=0;p===0&&r===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let M=0;M<=t;M++){const b=M/t;u.x=-e*Math.cos(i+b*s)*Math.sin(r+x*a),u.y=e*Math.cos(r+x*a),u.z=e*Math.sin(i+b*s)*Math.sin(r+x*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(b+w,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const x=h[p][v+1],w=h[p][v],M=h[p+1][v],b=h[p+1][v+1];(p!==0||r>0)&&f.push(x,w,b),(p!==n-1||l<Math.PI)&&f.push(w,M,b)}this.setIndex(f),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ws extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends Ws{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Uo extends an{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Me(16777215),this.specular=new Me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function $n(o,e,t){return jh(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Mr(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function jh(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function $_(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xc(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,r=0;r!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[r++]=o[a+l]}return i}function Yh(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=o[i++];while(s!==void 0)}class Xs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z_ extends Xs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ns,endingEnd:ns}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,a=i[s],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case is:s=e,a=2*t-n;break;case Br:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case is:r=e,l=2*n-t;break;case Br:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,v=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,x=(-1-f)*g+(1.5+f)*_+.5*m,w=f*g-f*_;for(let M=0;M!==a;++M)s[M]=p*r[h+M]+v*r[c+M]+x*r[l+M]+w*r[u+M];return s}}class Kh extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class J_ extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mr(t,this.TimeBufferType),this.values=Mr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Mr(e.times,Array),values:Mr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new J_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Z_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=$n(n,s,r),this.values=$n(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&jh(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=$n(this.times),t=$n(this.values),n=this.getValueSize(),i=this.getInterpolation()===co,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=$n(e,0,r),this.values=$n(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=$n(this.times,0),t=$n(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=us;class ys extends Cn{}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ks;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class $h extends Cn{}$h.prototype.ValueTypeName="color";class ms extends Cn{}ms.prototype.ValueTypeName="number";class Q_ extends Xs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Lt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class oi extends Cn{InterpolantFactoryMethodLinear(e){return new Q_(this.times,this.values,this.getValueSize(),e)}}oi.prototype.ValueTypeName="quaternion";oi.prototype.DefaultInterpolation=us;oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends Cn{}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=ks;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends Cn{}gs.prototype.ValueTypeName="vector";class Vr{constructor(e,t=-1,n,i=xa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(tv(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Cn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=$_(l);l=xc(l,1,h),c=xc(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,_){if(f.length!==0){const g=[],p=[];Yh(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},i=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(const _ in f){const g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){const x=d[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new ms(".morphTargetInfluence["+_+"]",g,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(gs,f+".position",d,"pos",i),n(oi,f+".quaternion",d,"rot",i),n(gs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ev(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return gs;case"color":return $h;case"quaternion":return oi;case"bool":case"boolean":return ys;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function tv(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ev(o.type);if(o.times===void 0){const t=[],n=[];Yh(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const _s={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class nv{constructor(e,t,n){const i=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,a),r===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const iv=new nv;class Li{constructor(e){this.manager=e!==void 0?e:iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Bn={};class sv extends Error{constructor(e,t){super(e),this.response=t}}class Ta extends Li{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=_s.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Bn[e]!==void 0){Bn[e].push({onLoad:t,onProgress:n,onError:i});return}Bn[e]=[],Bn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Bn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let _=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:x,value:w})=>{if(x)p.close();else{_+=w.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let b=0,C=h.length;b<C;b++){const R=h[b];R.onProgress&&R.onProgress(M)}p.enqueue(w),v()}})}}});return new Response(g)}else throw new sv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_s.add(e,c);const h=Bn[e];delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Bn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Bn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Zh extends Li{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=_s.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=Vs("img");function l(){h(),_s.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class rv extends Li{constructor(e){super(e)}load(e,t,n,i){const s=new wa;s.colorSpace=Ee;const r=new Zh(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let a=0;function l(c){r.load(e[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return s}}class Ra extends Li{constructor(e){super(e)}load(e,t,n,i){const s=new wt,r=new Zh(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Qr extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Bo=new ve,yc=new N,Mc=new N;class Ca{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),Mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mc),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ov extends Ca{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ds*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jh extends Qr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new ov}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wc=new ve,Cs=new N,Oo=new N;class av extends Ca{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cs),Oo.copy(n.position),Oo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oo),n.updateMatrixWorld(),i.makeTranslation(-Cs.x,-Cs.y,-Cs.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class ha extends Qr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new av}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lv extends Ca{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class La extends Qr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new lv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qh extends Qr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class cv extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=_s.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){_s.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class hv{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[s+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Lt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const r=this._workIndex*s;Lt.multiplyQuaternionsFlat(e,r,e,t,e,n),Lt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){const r=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const Pa="\\[\\]\\.:\\/",uv=new RegExp("["+Pa+"]","g"),Ia="[^"+Pa+"]",dv="[^"+Pa.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Ia),pv=/(WCOD+)?/.source.replace("WCOD",dv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ia),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ia),_v=new RegExp("^"+fv+pv+mv+gv+"$"),vv=["material","materials","bones","map"];class xv{constructor(e,t,n){const i=n||Ke.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ke{constructor(e,t,n){this.path=t,this.parsedPath=n||Ke.parseTrackName(t),this.node=Ke.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ke.Composite(e,t,n):new Ke(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(e){const t=_v.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);vv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ke.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ke.Composite=xv;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:ns,endingEnd:ns};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=rd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,r=s/i,a=i/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ad:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case xa:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const r=n===od;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===sd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=is,i.endingEnd=is):(e?i.endingStart=this.zeroSlopeAtStart?is:ns:i.endingStart=Br,t?i.endingEnd=this.zeroSlopeAtEnd?is:ns:i.endingEnd=Br)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const Mv=new Float32Array(1);class wv extends ai{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,r[u]=m;else{if(m=r[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;m=new hv(Ke.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),r[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Kh(new Float32Array(2),new Float32Array(2),1,Mv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let r=typeof e=="string"?Vr.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=xa),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new yv(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Vr.findByName(n,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ec{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bc=new N,wr=new N;class Ev{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bc.subVectors(e,this.start),wr.subVectors(this.end,this.start);const n=wr.dot(wr);let s=wr.dot(bc)/n;return t&&(s=vt(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);class bn{constructor(e=[0,0,0,0,0,0,0,0,0]){this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e=new S){const t=this.elements;e.x=t[0],e.y=t[4],e.z=t[8]}vmult(e,t=new S){const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t=new bn){const{elements:n}=e;for(let i=0;i<3;i++)for(let s=0;s<3;s++){let r=0;for(let a=0;a<3;a++)r+=n[i+a*3]*this.elements[a+s*3];t.elements[i+s*3]=r}return t}scale(e,t=new bn){const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t=new S){const s=[];let r,a;for(r=0;r<3*4;r++)s.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)s[r+4*a]=this.elements[r+3*a];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(r=c-l,s[r+4*r]===0){for(a=r+1;a<c;a++)if(s[r+4*a]!==0){h=u;do d=u-h,s[d+4*r]+=s[d+4*a];while(--h);break}}if(s[r+4*r]!==0)for(a=r+1;a<c;a++){const f=s[r+4*a]/s[r+4*r];h=u;do d=u-h,s[d+4*a]=d<=r?0:s[d+4*a]-s[d+4*r]*f;while(--h)}}while(--l);if(t.z=s[2*4+3]/s[2*4+2],t.y=(s[1*4+3]-s[1*4+2]*t.z)/s[1*4+1],t.x=(s[0*4+3]-s[0*4+2]*t.z-s[0*4+1]*t.y)/s[0*4+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw"Could not solve equation! Got x=["+t.toString()+"], b=["+e.toString()+"], A=["+this.toString()+"]";return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e=new bn){const i=[];let s,r;for(s=0;s<3*6;s++)i.push(0);for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+6*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const l=a;let c;const h=6;let u;do{if(s=l-a,i[s+6*s]===0){for(r=s+1;r<l;r++)if(i[s+6*r]!==0){c=h;do u=h-c,i[u+6*s]+=i[u+6*r];while(--c);break}}if(i[s+6*s]!==0)for(r=s+1;r<l;r++){const d=i[s+6*r]/i[s+6*s];c=h;do u=h-c,i[u+6*r]=u<=s?0:i[u+6*r]-i[u+6*s]*d;while(--c)}}while(--a);s=2;do{r=s-1;do{const d=i[s+6*r]/i[s+6*s];c=6;do u=6-c,i[u+6*r]=i[u+6*r]-i[u+6*s]*d;while(--c)}while(r--)}while(--s);s=2;do{const d=1/i[s+6*s];c=6;do u=6-c,i[u+6*s]=i[u+6*s]*d;while(--c)}while(s--);s=2;do{r=2;do{if(u=i[3+r+6*s],isNaN(u)||u===1/0)throw"Could not reverse! A=["+this.toString()+"]";e.e(s,r,u)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,a=n+n,l=i+i,c=t*r,h=t*a,u=t*l,d=n*a,f=n*l,m=i*l,_=s*r,g=s*a,p=s*l,v=this.elements;return v[3*0+0]=1-(d+m),v[3*0+1]=h-p,v[3*0+2]=u+g,v[3*1+0]=h+p,v[3*1+1]=1-(c+m),v[3*1+2]=f-_,v[3*2+0]=u-g,v[3*2+1]=f+_,v[3*2+2]=1-(c+d),this}transpose(e=new bn){const t=e.elements,n=this.elements;for(let i=0;i!==3;i++)for(let s=0;s!==3;s++)t[3*i+s]=n[3*s+i];return e}}class S{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}cross(e,t=new S){const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-r*s,t.z=r*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new S(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new S(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new bn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e=new S){const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,a=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(a-i)*(a-i)}scale(e,t=new S){const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t=new S){return t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n=new S){return n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e=new S){return e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=bv,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=Sv;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return this.x+","+this.y+","+this.z}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t=1e-6){return!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e=1e-6){return!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Sc),Sc.almostEquals(e,t)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const bv=new S,Sv=new S,Sc=new S;class ot{constructor(e={}){this.lowerBound=new S,this.upperBound=new S,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),r.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Ac),c=Ac),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new ot().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=Tc,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,r,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Tc,i=n[0],s=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,r,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*r,d=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(m<0||f>m)}}const Ac=new S,Tc=[new S,new S,new S,new S,new S,new S,new S,new S];class Rc{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class eu{constructor(){}addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class ht{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return this.x+","+this.y+","+this.z+","+this.w}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e=new S){this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Av,i=Tv;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t=new ht){const n=this.x,i=this.y,s=this.z,r=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+r*a+i*c-s*l,t.y=i*h+r*l+s*a-n*c,t.z=s*h+r*c+n*l-i*a,t.w=r*h-n*a-i*l-s*c,t}inverse(e=new ht){const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e=new ht){return e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t=new S){const n=e.x,i=e.y,s=e.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-r*s,d=c*s+r*i-a*n,f=-r*n-a*i-l*s;return t.x=h*c+f*-r+u*-l-d*-a,t.y=u*c+f*-a+d*-r-h*-l,t.z=d*c+f*-l+h*-a-u*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t="YZX"){let n,i,s;const r=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const u=r*r,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*r*c-2*a*l,1-2*u-2*f)}break;default:throw new Error("Euler order "+t+" not supported yet.")}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i="XYZ"){const s=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="YXZ"?(this.x=l*r*a+s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="ZXY"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a-l*c*h):i==="ZYX"?(this.x=l*r*a-s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a+l*c*h):i==="YZX"?(this.x=l*r*a+s*c*h,this.y=s*c*a+l*r*h,this.z=s*r*h-l*c*a,this.w=s*r*a-l*c*h):i==="XZY"&&(this.x=l*r*a-s*c*h,this.y=s*c*a-l*r*h,this.z=s*r*h+l*c*a,this.w=s*r*a+l*c*h),this}clone(){return new ht(this.x,this.y,this.z,this.w)}slerp(e,t,n=new ht){const i=this.x,s=this.y,r=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,f,m,_,g;return f=i*l+s*c+r*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),_=Math.sin((1-t)*d)/m,g=Math.sin(t*d)/m):(_=1-t,g=t),n.x=_*i+g*l,n.y=_*s+g*c,n.z=_*r+g*h,n.w=_*a+g*u,n}integrate(e,t,n,i=new ht){const s=e.x*n.x,r=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+r*h-a*c),i.y+=d*(r*u+a*l-s*h),i.z+=d*(a*u+s*c-r*l),i.w+=d*(-s*l-r*c-a*h),i}}const Av=new S,Tv=new S,Rv={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ge{constructor(e={}){this.id=ge.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type}volume(){throw"volume() not implemented for shape type "+this.type}calculateLocalInertia(e,t){throw"calculateLocalInertia() not implemented for shape type "+this.type}calculateWorldAABB(e,t,n,i){throw"calculateWorldAABB() not implemented for shape type "+this.type}}ge.idCounter=0;ge.types=Rv;class Ze{constructor(e={}){this.position=new S,this.quaternion=new ht,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return Ze.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return Ze.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t=new S){return this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i=new S){return n.vsub(e,i),t.conjugate(Cc),Cc.vmult(i,i),i}static pointToWorldFrame(e,t,n,i=new S){return t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n=new S){return e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i=new S){return t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Cc=new ht;class Wn extends ge{constructor(e={}){const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:ge.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==e.length;s++){const r=e[s],a=r.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[r[l]].vsub(t[r[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error("Vertex "+this.faces[e][i]+" not found!");const t=this.faceNormals[e]||new S;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(".faceNormals["+e+"] = Vec3("+t.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(let i=0;i<this.faces[e].length;i++)console.warn(".vertices["+this.faces[e][i]+"] = Vec3("+this.vertices[this.faces[e][i]].toString()+")")}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Wn.computeNormal(i,s,r,t)}clipAgainstHull(e,t,n,i,s,r,a,l,c){const h=new S;let u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const _=h.dot(r);_>d&&(d=_,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const _=n.vertices[n.faces[u][m]],g=new S;g.copy(_),s.vmult(g,g),i.vadd(g,g),f.push(g)}u>=0&&this.clipFaceAgainstHull(r,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,r,a,l){const c=new S,h=new S,u=new S,d=new S,f=new S,m=new S;let _=Number.MAX_VALUE;const g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);const v=g.testSepAxis(c,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(c))}else{const p=a?a.length:g.faces.length;for(let v=0;v<p;v++){const x=a?a[v]:v;c.copy(g.faceNormals[x]),n.vmult(c,c);const w=g.testSepAxis(c,e,t,n,i,s);if(w===!1)return!1;w<_&&(_=w,r.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){s.vmult(e.uniqueAxes[p],h);const v=g.testSepAxis(h,e,t,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(h))}else{const p=l?l.length:e.faces.length;for(let v=0;v<p;v++){const x=l?l[v]:v;h.copy(e.faceNormals[x]),s.vmult(h,h);const w=g.testSepAxis(h,e,t,n,i,s);if(w===!1)return!1;w<_&&(_=w,r.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],d);for(let v=0;v!==e.uniqueEdges.length;v++)if(s.vmult(e.uniqueEdges[v],f),d.cross(f,m),!m.almostZero()){m.normalize();const x=g.testSepAxis(m,e,t,n,i,s);if(x===!1)return!1;x<_&&(_=x,r.copy(m))}}return i.vsub(t,u),u.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const a=this;Wn.project(a,e,n,i,zo),Wn.project(t,e,s,r,ko);const l=zo[0],c=zo[1],h=ko[0],u=ko[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(e,t){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,a){const l=new S,c=new S,h=new S,u=new S,d=new S,f=new S,m=new S,_=new S,g=this,p=[],v=i,x=p;let w=-1,M=Number.MAX_VALUE;for(let E=0;E<g.faces.length;E++){l.copy(g.faceNormals[E]),n.vmult(l,l);const B=l.dot(e);B<M&&(M=B,w=E)}if(w<0)return;const b=g.faces[w];b.connectedFaces=[];for(let E=0;E<g.faces.length;E++)for(let B=0;B<g.faces[E].length;B++)b.indexOf(g.faces[E][B])!==-1&&E!==w&&b.connectedFaces.indexOf(E)===-1&&b.connectedFaces.push(E);const C=b.length;for(let E=0;E<C;E++){const B=g.vertices[b[E]],z=g.vertices[b[(E+1)%C]];B.vsub(z,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[w]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(B),n.vmult(f,f),t.vadd(f,f);const A=b.connectedFaces[E];m.copy(this.faceNormals[A]);const I=this.getPlaneConstantOfFace(A);_.copy(m),n.vmult(_,_);const D=I-_.dot(t);for(this.clipFaceAgainstPlane(v,x,_,D);v.length;)v.shift();for(;x.length;)v.push(x.shift())}m.copy(this.faceNormals[w]);const R=this.getPlaneConstantOfFace(w);_.copy(m),n.vmult(_,_);const y=R-_.dot(t);for(let E=0;E<v.length;E++){let B=_.dot(v[E])+y;if(B<=s&&(console.log("clamped: depth="+B+" to minDist="+s),B=s),B<=r){const z=v[E];if(B<=1e-6){const A={point:z,normal:_,depth:B};a.push(A)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],r=n.dot(c)+i,s<0)if(r<0){const u=new S;u.copy(c),t.push(u)}else{const u=new S;l.lerp(c,s/(s-r),u),t.push(u)}else if(r<0){const u=new S;l.lerp(c,s/(s-r),u),t.push(u),t.push(c)}l=c,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,a,l,c,h,u,d=new S;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const m=d;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(r,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e=new S){const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new S;this.getAveragePointLocal(s);for(let r=0;r<this.faces.length;r++){let a=i[r];const l=t[n[r][0]],c=new S;e.vsub(l,c);const h=a.dot(c),u=new S;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}}Wn.computeNormal=(o,e,t,n)=>{const i=new S,s=new S;e.vsub(o,s),t.vsub(e,i),i.cross(s,n),n.isZero()||n.normalize()};const zo=[],ko=[];Wn.project=(o,e,t,n,i)=>{const s=o.vertices.length,r=new S;let a=0,l=0;const c=new S,h=o.vertices;c.setZero(),Ze.vectorToLocalFrame(t,n,e,r),Ze.pointToLocalFrame(t,n,c,c);const u=c.dot(r);l=a=h[0].dot(r);for(let d=1;d<s;d++){const f=h[d].dot(r);f>a&&(a=f),f<l&&(l=f)}if(l-=u,a-=u,l>a){const d=l;l=a,a=d}i[0]=a,i[1]=l};class Pi extends ge{constructor(e){super({type:ge.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Wn({vertices:s,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t=new S){return Pi.calculateInertia(this.halfExtents,e,t),t}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Zn.set(s[r][0],s[r][1],s[r][2]),t.vmult(Zn,Zn),e.vadd(Zn,Zn),n(Zn.x,Zn.y,Zn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;xn[0].set(s.x,s.y,s.z),xn[1].set(-s.x,s.y,s.z),xn[2].set(-s.x,-s.y,s.z),xn[3].set(-s.x,-s.y,-s.z),xn[4].set(s.x,-s.y,-s.z),xn[5].set(s.x,s.y,-s.z),xn[6].set(-s.x,s.y,-s.z),xn[7].set(s.x,-s.y,s.z);const r=xn[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let a=1;a<8;a++){const l=xn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}Pi.calculateInertia=(o,e,t)=>{const n=o;t.x=1/12*e*(2*n.y*2*n.y+2*n.z*2*n.z),t.y=1/12*e*(2*n.x*2*n.x+2*n.z*2*n.z),t.z=1/12*e*(2*n.y*2*n.y+2*n.x*2*n.x)};const Zn=new S,xn=[new S,new S,new S,new S,new S,new S,new S,new S],Da={AWAKE:0,SLEEPY:1,SLEEPING:2};class _e extends eu{constructor(e={}){super(),this.id=_e.idCounter++,this.index=-1,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new S,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new S,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new S,this.force=new S;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?_e.STATIC:_e.DYNAMIC,typeof e.type==typeof _e.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new ht,this.initQuaternion=new ht,this.previousQuaternion=new ht,this.interpolatedQuaternion=new ht,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new S,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new bn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new bn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new S(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new S(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new ot,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=0,this.wakeUpAfterNarrowphase=!1,e===_e.SLEEPING&&this.dispatchEvent(_e.wakeupEvent)}sleep(){this.sleepState=_e.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===_e.AWAKE&&n<i?(this.sleepState=_e.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(_e.sleepyEvent)):t===_e.SLEEPY&&n>i?this.wakeUp():t===_e.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(_e.sleepEvent))}}updateSolveMassProperties(){this.sleepState===_e.SLEEPING||this.type===_e.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t=new S){return e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t=new S){return this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t=new S){return this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t=new S){return this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new S,s=new ht;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const a=t[s].length(),l=r.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}computeAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=Cv,r=Lv,a=this.quaternion,l=this.aabb,c=Pv;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],r),u.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Iv,i=Dv;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(this.type!==_e.DYNAMIC)return;const n=Fv;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(this.type!==_e.DYNAMIC)return;const n=Nv,i=Uv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyImpulse(e,t){if(this.type!==_e.DYNAMIC)return;const n=t,i=Bv;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Ov;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(this.type!==_e.DYNAMIC)return;const n=zv,i=kv;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Vv;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.computeAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Pi.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new S;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===_e.DYNAMIC||this.type===_e.KINEMATIC)||this.sleepState===_e.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const m=u.elements,_=this.angularFactor,g=l.x*_.x,p=l.y*_.y,v=l.z*_.z;s.x+=e*(m[0]*g+m[1]*p+m[2]*v),s.y+=e*(m[3]*g+m[4]*p+m[5]*v),s.z+=e*(m[6]*g+m[7]*p+m[8]*v),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}_e.COLLIDE_EVENT_NAME="collide";_e.DYNAMIC=1;_e.STATIC=2;_e.KINEMATIC=4;_e.AWAKE=Da.AWAKE;_e.SLEEPY=Da.SLEEPY;_e.SLEEPING=Da.SLEEPING;_e.idCounter=0;_e.wakeupEvent={type:"wakeup"};_e.sleepyEvent={type:"sleepy"};_e.sleepEvent={type:"sleep"};const Cv=new S,Lv=new ht,Pv=new ot,Iv=new bn,Dv=new bn,Fv=new S,Nv=new S,Uv=new S,Bv=new S,Ov=new S,zv=new S,kv=new S,Vv=new S;class Fa{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&_e.STATIC||e.sleepState===_e.SLEEPING)&&(t.type&_e.STATIC||t.sleepState===_e.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=Hv;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.computeAABB(),t.aabbNeedsUpdate&&t.computeAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Gv,i=Wv,s=Xv,r=e.length;for(let a=0;a!==r;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==r;a++){const l=i[a].id,c=s[a].id,h=l<c?l+","+c:c+","+l;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Hv=new S,Gv={keys:[]},Wv=[],Xv=[];Fa.boundingSphereCheck=(o,e)=>{const t=new S;o.position.vsub(e.position,t);const n=o.shapes[0],i=e.shapes[0];return Math.pow(n.boundingSphereRadius+i.boundingSphereRadius,2)>t.lengthSquared()};class qv extends Fa{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],a=i[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,t,n)}aabbQuery(e,t,n=[]){for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.computeAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class ua{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=a}}class et{constructor(e=new S,t=new S){this.from=e.clone(),this.to=t.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=et.ANY,this.result=new ua,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||et.ANY,this.result=t.result||new ua,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Lc),Vo.length=0,e.broadphase.aabbQuery(e,Lc,Vo),this.intersectBodies(Vo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const i=jv,s=Yv;for(let r=0,a=e.shapes.length;r<a;r++){const l=e.shapes[r];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(l0(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,a=this.to,l=this.direction,c=new S(0,0,1);t.vmult(c,c);const h=new S;r.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||r.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new S,_=new S,g=new S;r.vsub(n,m);const p=-c.dot(m)/f;l.scale(p,_),r.vadd(_,g),this.reportIntersection(c,g,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=Kv;r.from.copy(this.from),r.to.copy(this.to),Ze.pointToLocalFrame(n,t,r.from,r.from),Ze.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const a=$v;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new ot;r.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,d),!!d.overlapsRay(r)){if(e.getConvexTrianglePillar(f,m,!1),Ze.pointToWorldFrame(n,t,e.pillarOffset,Er),this._intersectConvex(e.pillarConvex,t,Er,i,s,Pc),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),Ze.pointToWorldFrame(n,t,e.pillarOffset,Er),this._intersectConvex(e.pillarConvex,t,Er,i,s,Pc)}}}_intersectSphere(e,t,n,i,s){const r=this.from,a=this.to,l=e.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),u=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,d=h**2-4*c*u,f=Zv,m=Jv;if(!(d<0))if(d===0)r.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const _=(-h-Math.sqrt(d))/(2*c),g=(-h+Math.sqrt(d))/(2*c);if(_>=0&&_<=1&&(r.lerp(a,_,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const a=Qv,l=Ic,c=r&&r.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,m=this.from,_=this.to,g=m.distanceTo(_),p=c?c.length:h.length,v=this.result;for(let x=0;!v.shouldStop&&x<p;x++){const w=c?c[x]:x,M=h[w],b=d[w],C=t,R=n;l.copy(u[M[0]]),C.vmult(l,l),l.vadd(R,l),l.vsub(m,l),C.vmult(b,a);const y=f.dot(a);if(Math.abs(y)<this.precision)continue;const E=a.dot(l)/y;if(!(E<0)){f.scale(E,Gt),Gt.vadd(m,Gt),fn.copy(u[M[0]]),C.vmult(fn,fn),R.vadd(fn,fn);for(let B=1;!v.shouldStop&&B<M.length-1;B++){yn.copy(u[M[B]]),Mn.copy(u[M[B+1]]),C.vmult(yn,yn),C.vmult(Mn,Mn),R.vadd(yn,yn),R.vadd(Mn,Mn);const z=Gt.distanceTo(m);!(Fs(Gt,fn,yn,Mn)||Fs(Gt,yn,fn,Mn))||z>g||this.reportIntersection(a,Gt,s,i,w)}}}}_intersectTrimesh(e,t,n,i,s,r){const a=e0,l=o0,c=a0,h=Ic,u=t0,d=n0,f=i0,m=r0,_=s0;r&&r.faceList;const g=e.indices;e.vertices;const p=this.from,v=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),Ze.vectorToLocalFrame(n,t,x,u),Ze.pointToLocalFrame(n,t,p,d),Ze.pointToLocalFrame(n,t,v,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const w=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,b=l.length;!this.result.shouldStop&&M!==b;M++){const C=l[M];e.getNormal(C,a),e.getVertex(g[C*3],fn),fn.vsub(d,h);const R=u.dot(a),y=a.dot(h)/R;if(y<0)continue;u.scale(y,Gt),Gt.vadd(d,Gt),e.getVertex(g[C*3+1],yn),e.getVertex(g[C*3+2],Mn);const E=Gt.distanceSquared(d);!(Fs(Gt,yn,fn,Mn)||Fs(Gt,fn,yn,Mn))||E>w||(Ze.vectorToWorldFrame(t,a,_),Ze.pointToWorldFrame(n,t,Gt,m),this.reportIntersection(_,m,s,i,C))}l.length=0}reportIntersection(e,t,n,i,s){const r=this.from,a=this.to,l=r.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case et.ALL:this.hasHit=!0,c.set(r,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case et.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,n,i,l));break;case et.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,e,t,n,i,l),c.shouldStop=!0;break}}}et.CLOSEST=1;et.ANY=2;et.ALL=4;const Lc=new ot,Vo=[],Ls=new S,Ho=new S;et.pointInTriangle=Fs;function Fs(o,e,t,n){n.vsub(e,wi),t.vsub(e,Ls),o.vsub(e,Ho);const i=wi.dot(wi),s=wi.dot(Ls),r=wi.dot(Ho),a=Ls.dot(Ls),l=Ls.dot(Ho);let c,h;return(c=a*r-s*l)>=0&&(h=i*l-s*r)>=0&&c+h<i*a-s*s}const jv=new S,Yv=new ht,Gt=new S,fn=new S,yn=new S,Mn=new S;et.prototype[ge.types.BOX]=et.prototype._intersectBox;et.prototype[ge.types.PLANE]=et.prototype._intersectPlane;const Pc={faceList:[0]},Er=new S,Kv=new et,$v=[];et.prototype[ge.types.HEIGHTFIELD]=et.prototype._intersectHeightfield;const Zv=new S,Jv=new S;et.prototype[ge.types.SPHERE]=et.prototype._intersectSphere;const Qv=new S,Ic=new S;et.prototype[ge.types.CONVEXPOLYHEDRON]=et.prototype._intersectConvex;const e0=new S,t0=new S,n0=new S,i0=new S,s0=new S,r0=new S;new ot;const o0=[],a0=new Ze;et.prototype[ge.types.TRIMESH]=et.prototype._intersectTrimesh;const wi=new S,br=new S;function l0(o,e,t){t.vsub(o,wi);const n=wi.dot(e);return e.scale(n,br),br.vadd(o,br),t.distanceTo(br)}class Hn extends Fa{constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,r=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Hn.checkBounds(c,h,r))break;this.intersectionTest(c,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.computeAABB()}t===0?Hn.insertionSortX(e):t===1?Hn.insertionSortY(e):t===2&&Hn.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,r=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const m=a[f],_=m.position.x;e+=_,t+=_*_;const g=m.position.y;n+=g,i+=g*g;const p=m.position.z;s+=p,r+=p*p}const h=t-e*e*c,u=i-n*n*c,d=r-s*s*c;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n=[]){this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;t.lowerBound[s],t.upperBound[s];for(let a=0;a<r.length;a++){const l=r[a];l.aabbNeedsUpdate&&l.computeAABB(),l.aabb.overlaps(t)&&n.push(l)}return n}}Hn.insertionSortX=o=>{for(let e=1,t=o.length;e<t;e++){const n=o[e];let i;for(i=e-1;i>=0&&!(o[i].aabb.lowerBound.x<=n.aabb.lowerBound.x);i--)o[i+1]=o[i];o[i+1]=n}return o};Hn.insertionSortY=o=>{for(let e=1,t=o.length;e<t;e++){const n=o[e];let i;for(i=e-1;i>=0&&!(o[i].aabb.lowerBound.y<=n.aabb.lowerBound.y);i--)o[i+1]=o[i];o[i+1]=n}return o};Hn.insertionSortZ=o=>{for(let e=1,t=o.length;e<t;e++){const n=o[e];let i;for(i=e-1;i>=0&&!(o[i].aabb.lowerBound.z<=n.aabb.lowerBound.z);i--)o[i+1]=o[i];o[i+1]=n}return o};Hn.checkBounds=(o,e,t)=>{let n,i;t===0?(n=o.position.x,i=e.position.x):t===1?(n=o.position.y,i=e.position.y):t===2&&(n=o.position.z,i=e.position.z);const s=o.boundingRadius,r=e.boundingRadius,a=n+s;return i-r<a};function tu(){}tu.defaults=(o={},e)=>{for(let t in e)t in o||(o[t]=e[t]);return o};class Dc{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class qs{constructor(e,t,n=-1e6,i=1e6){this.id=qs.id++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Dc,this.jacobianElementB=new Dc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(r,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Fc),a.scale(h,Nc),n.invInertiaWorldSolve.vmult(r,Uc),i.invInertiaWorldSolve.vmult(l,Bc),e.multiplyVectors(Fc,Uc)+t.multiplyVectors(Nc,Bc)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return a.vmult(e.rotational,Sr),c+=Sr.dot(e.rotational),l.vmult(t.rotational,Sr),c+=Sr.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=c0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}qs.id=0;const Fc=new S,Nc=new S,Uc=new S,Bc=new S,Sr=new S,c0=new S;class h0 extends qs{constructor(e,t,n=1e6){super(e,t,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,a=this.rj,l=u0,c=d0,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=f0,_=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(r,m);const v=p.dot(m),x=this.restitution+1,w=x*d.dot(p)-x*h.dot(p)+f.dot(c)-u.dot(l),M=this.computeGiMf();return-v*t-w*n-e*M}getImpactVelocityAlongNormal(){const e=p0,t=m0,n=g0,i=_0,s=v0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const u0=new S,d0=new S,f0=new S,p0=new S,m0=new S,g0=new S,_0=new S,v0=new S;class Oc extends qs{constructor(e,t,n){super(e,t,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=x0,r=y0,a=this.t;n.cross(a,s),i.cross(a,r);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const x0=new S,y0=new S;class js{constructor(e,t,n){n=tu.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=js.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}js.idCounter=0;class Zt{constructor(e={}){let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Zt.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Zt.idCounter=0;new et;class M0 extends ge{constructor(e){if(super({type:ge.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t=new S){const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){const l=r[a];n[l]=e[l]-s,i[l]=e[l]+s}}}class w0 extends Wn{constructor(e,t,n,i){const s=i,r=[],a=[],l=[],c=[],h=[],u=Math.cos,d=Math.sin;r.push(new S(-t*d(0),-n*.5,t*u(0))),c.push(0),r.push(new S(-e*d(0),n*.5,e*u(0))),h.push(1);for(let m=0;m<s;m++){const _=2*Math.PI/s*(m+1),g=2*Math.PI/s*(m+.5);m<s-1?(r.push(new S(-t*d(_),-n*.5,t*u(_))),c.push(2*m+2),r.push(new S(-e*d(_),n*.5,e*u(_))),h.push(2*m+3),l.push([2*m,2*m+1,2*m+3,2*m+2])):l.push([2*m,2*m+1,1,0]),(s%2===1||m<s/2)&&a.push(new S(-d(g),0,u(g)))}l.push(c),a.push(new S(0,1,0));const f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);l.push(f),super({vertices:r,faces:l,axes:a})}}class wn{constructor(e={}){this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new ot,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n=0){const i=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,r=this.maxDepth||this.root.maxDepth;if(n<r){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(e,t,n+1))return!0;a&&(s.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new wn({aabb:new ot({lowerBound:new S(0,0,0)})}),new wn({aabb:new ot({lowerBound:new S(1,0,0)})}),new wn({aabb:new ot({lowerBound:new S(1,1,0)})}),new wn({aabb:new ot({lowerBound:new S(1,1,1)})}),new wn({aabb:new ot({lowerBound:new S(0,1,1)})}),new wn({aabb:new ot({lowerBound:new S(0,0,1)})}),new wn({aabb:new ot({lowerBound:new S(1,0,1)})}),new wn({aabb:new ot({lowerBound:new S(0,1,0)})})),n.vsub(t,gi),gi.scale(.5,gi);const s=this.root||this;for(let r=0;r!==8;r++){const a=i[r];a.root=s;const l=a.aabb.lowerBound;l.x*=gi.x,l.y*=gi.y,l.z*=gi.z,l.vadd(t,l),l.vadd(gi,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(Ar),Ar.toLocalFrame(t,Ar),this.aabbQuery(Ar,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class E0 extends wn{constructor(e,t={}){super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const gi=new S,Ar=new ot;class vs extends ge{constructor(e,t){super({type:ge.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new ot,this.edges=null,this.scale=new S(1,1,1),this.tree=new E0,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new ot,i=new S,s=new S,r=new S,a=[i,s,r];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],r),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){Tr.copy(e);const n=this.scale,i=n.x,s=n.y,r=n.z,a=Tr.lowerBound,l=Tr.upperBound;return a.x/=i,a.y/=s,a.z/=r,l.x/=i,l.y/=s,l.z/=r,this.tree.aabbQuery(Tr,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=b0,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],r=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,Vc),this.getVertex(r,Hc),this.getVertex(a,Gc),vs.computeNormal(Hc,Vc,Gc,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,s)=>{const r=i<s?i+"_"+s:s+"_"+i;e[r]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,r=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];t(r,a),t(a,l),t(l,r)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=S0,i=A0;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),Ze.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(_i);const n=_i.upperBound.x-_i.lowerBound.x,i=_i.upperBound.y-_i.lowerBound.y,s=_i.upperBound.z-_i.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const s=T0;this.getVertex(0,s),t.copy(s),n.copy(s);for(let r=0;r!==i;r++)this.getVertex(r,s),s.x<t.x?t.x=s.x:s.x>n.x&&(n.x=s.x),s.y<t.y?t.y=s.y:s.y>n.y&&(n.y=s.y),s.z<t.z?t.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new S;for(let i=0,s=t.length/3;i!==s;i++){this.getVertex(i,n);const r=n.lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=R0,r=C0;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,r),n.copy(r.lowerBound),i.copy(r.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}}const b0=new S,Tr=new ot,S0=new S,A0=new S,zc=new S,kc=new S;vs.computeNormal=(o,e,t,n)=>{e.vsub(o,kc),t.vsub(e,zc),zc.cross(kc,n),n.isZero()||n.normalize()};const Vc=new S,Hc=new S,Gc=new S,_i=new ot,T0=new S,R0=new Ze,C0=new ot;vs.createTorus=(o=1,e=.5,t=8,n=6,i=Math.PI*2)=>{const s=[],r=[];for(let a=0;a<=t;a++)for(let l=0;l<=n;l++){const c=l/n*i,h=a/t*Math.PI*2,u=(o+e*Math.cos(h))*Math.cos(c),d=(o+e*Math.cos(h))*Math.sin(c),f=e*Math.sin(h);s.push(u,d,f)}for(let a=1;a<=t;a++)for(let l=1;l<=n;l++){const c=(n+1)*a+l-1,h=(n+1)*(a-1)+l-1,u=(n+1)*(a-1)+l,d=(n+1)*a+l;r.push(c,h,d),r.push(h,u,d)}return new vs(s,r)};class L0{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class P0 extends L0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=t.bodies,c=l.length,h=e;let u,d,f,m,_,g;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();const p=D0,v=F0,x=I0;p.length=a,v.length=a,x.length=a;for(let w=0;w!==a;w++){const M=r[w];x[w]=0,v[w]=M.computeB(h),p[w]=1/M.computeC()}if(a!==0){for(let b=0;b!==c;b++){const C=l[b],R=C.vlambda,y=C.wlambda;R.set(0,0,0),y.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let b=0;b!==a;b++){const C=r[b];u=v[b],d=p[b],g=x[b],_=C.computeGWlambda(),f=d*(u-_-C.eps*g),g+f<C.minForce?f=C.minForce-g:g+f>C.maxForce&&(f=C.maxForce-g),x[b]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<s)break}for(let b=0;b!==c;b++){const C=l[b],R=C.velocity,y=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),R.vadd(C.vlambda,R),C.wlambda.vmul(C.angularFactor,C.wlambda),y.vadd(C.wlambda,y)}let w=r.length;const M=1/h;for(;w--;)r[w].multiplier=x[w]*M}return n}}const I0=[],D0=[],F0=[];_e.STATIC;class N0{constructor(){this.objects=[],this.type=Object}release(...e){const t=e.length;for(let n=0;n!==t;n++)this.objects.push(e[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class U0 extends N0{constructor(){super(),this.type=S}constructObject(){return new S}}const It={sphereSphere:ge.types.SPHERE,spherePlane:ge.types.SPHERE|ge.types.PLANE,boxBox:ge.types.BOX|ge.types.BOX,sphereBox:ge.types.SPHERE|ge.types.BOX,planeBox:ge.types.PLANE|ge.types.BOX,convexConvex:ge.types.CONVEXPOLYHEDRON,sphereConvex:ge.types.SPHERE|ge.types.CONVEXPOLYHEDRON,planeConvex:ge.types.PLANE|ge.types.CONVEXPOLYHEDRON,boxConvex:ge.types.BOX|ge.types.CONVEXPOLYHEDRON,sphereHeightfield:ge.types.SPHERE|ge.types.HEIGHTFIELD,boxHeightfield:ge.types.BOX|ge.types.HEIGHTFIELD,convexHeightfield:ge.types.CONVEXPOLYHEDRON|ge.types.HEIGHTFIELD,sphereParticle:ge.types.PARTICLE|ge.types.SPHERE,planeParticle:ge.types.PLANE|ge.types.PARTICLE,boxParticle:ge.types.BOX|ge.types.PARTICLE,convexParticle:ge.types.PARTICLE|ge.types.CONVEXPOLYHEDRON,sphereTrimesh:ge.types.SPHERE|ge.types.TRIMESH,planeTrimesh:ge.types.PLANE|ge.types.TRIMESH};class Xe{constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new U0,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new h0(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=r||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=r.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*a.gravity.length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,_=m.length?m.pop():new Oc(n,i,d*f),g=m.length?m.pop():new Oc(n,i,d*f);return _.bi=g.bi=n,_.bj=g.bj=i,_.minForce=g.minForce=-d*f,_.maxForce=g.maxForce=d*f,_.ri.copy(e.ri),_.rj.copy(e.rj),g.ri.copy(e.ri),g.rj.copy(e.rj),e.ni.tangents(_.t,g.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=g.enabled=e.enabled,t.push(_,g),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];vi.setZero(),Ji.setZero(),Qi.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(vi.vadd(t.ni,vi),Ji.vadd(t.ri,Ji),Qi.vadd(t.rj,Qi)):(vi.vsub(t.ni,vi),Ji.vadd(t.rj,Ji),Qi.vadd(t.ri,Qi));const r=1/e;Ji.scale(r,n.ri),Qi.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),vi.normalize(),vi.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=r;const l=z0,c=k0,h=B0,u=O0;for(let d=0,f=e.length;d!==f;d++){const m=e[d],_=t[d];let g=null;m.material&&_.material&&(g=n.getContactMaterial(m.material,_.material)||null);const p=m.type&_e.KINEMATIC&&_.type&_e.STATIC||m.type&_e.STATIC&&_.type&_e.KINEMATIC||m.type&_e.KINEMATIC&&_.type&_e.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);const x=m.shapes[v];for(let w=0;w<_.shapes.length;w++){_.quaternion.mult(_.shapeOrientations[w],c),_.quaternion.vmult(_.shapeOffsets[w],u),u.vadd(_.position,u);const M=_.shapes[w];if(!(x.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(u)>x.boundingSphereRadius+M.boundingSphereRadius)continue;let b=null;x.material&&M.material&&(b=n.getContactMaterial(x.material,M.material)||null),this.currentContactMaterial=b||g||n.defaultContactMaterial;const C=x.type|M.type,R=this[C];if(R){let y=!1;x.type<M.type?y=R.call(this,x,M,h,u,l,c,m,_,x,M,p):y=R.call(this,M,x,u,h,c,l,_,m,x,M,p),y&&p&&(n.shapeOverlapKeeper.set(x.id,M.id),n.bodyOverlapKeeper.set(m.id,_.id))}}}}}sphereSphere(e,t,n,i,s,r,a,l,c,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,r,a,l,c,h,u){const d=this.createContactEquation(a,l,e,t,c,h);if(d.ni.set(0,0,1),r.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,Rr),d.ni.scale(d.ni.dot(Rr),Wc),Rr.vsub(Wc,d.rj),-Rr.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,a,l,e,t,u)}sphereBox(e,t,n,i,s,r,a,l,c,h,u){const d=this.v3pool,f=dx;n.vsub(i,Cr),t.getSideNormals(f,r);const m=e.radius;let _=!1;const g=px,p=mx,v=gx;let x=null,w=0,M=0,b=0,C=null;for(let U=0,V=f.length;U!==V&&_===!1;U++){const G=cx;G.copy(f[U]);const Y=G.length();G.normalize();const Z=Cr.dot(G);if(Z<Y+m&&Z>0){const ae=hx,O=ux;ae.copy(f[(U+1)%3]),O.copy(f[(U+2)%3]);const Q=ae.length(),te=O.length();ae.normalize(),O.normalize();const le=Cr.dot(ae),he=Cr.dot(O);if(le<Q&&le>-Q&&he<te&&he>-te){const ye=Math.abs(Z-Y-m);if((C===null||ye<C)&&(C=ye,M=le,b=he,x=Y,g.copy(G),p.copy(ae),v.copy(O),w++,u))return!0}}}if(w){_=!0;const U=this.createContactEquation(a,l,e,t,c,h);g.scale(-m,U.ri),U.ni.copy(g),U.ni.negate(U.ni),g.scale(x,g),p.scale(M,p),g.vadd(p,g),v.scale(b,v),g.vadd(v,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let R=d.get();const y=fx;for(let U=0;U!==2&&!_;U++)for(let V=0;V!==2&&!_;V++)for(let G=0;G!==2&&!_;G++)if(R.set(0,0,0),U?R.vadd(f[0],R):R.vsub(f[0],R),V?R.vadd(f[1],R):R.vsub(f[1],R),G?R.vadd(f[2],R):R.vsub(f[2],R),i.vadd(R,y),y.vsub(n,y),y.lengthSquared()<m*m){if(u)return!0;_=!0;const Y=this.createContactEquation(a,l,e,t,c,h);Y.ri.copy(y),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(m,Y.ri),Y.rj.copy(R),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(l.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}d.release(R),R=null;const E=d.get(),B=d.get(),z=d.get(),A=d.get(),I=d.get(),D=f.length;for(let U=0;U!==D&&!_;U++)for(let V=0;V!==D&&!_;V++)if(U%3!==V%3){f[V].cross(f[U],E),E.normalize(),f[U].vadd(f[V],B),z.copy(n),z.vsub(B,z),z.vsub(i,z);const G=z.dot(E);E.scale(G,A);let Y=0;for(;Y===U%3||Y===V%3;)Y++;I.copy(n),I.vsub(A,I),I.vsub(B,I),I.vsub(i,I);const Z=Math.abs(G),ae=I.length();if(Z<f[Y].length()&&ae<m){if(u)return!0;_=!0;const O=this.createContactEquation(a,l,e,t,c,h);B.vadd(A,O.rj),O.rj.copy(O.rj),I.negate(O.ni),O.ni.normalize(),O.ri.copy(O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(n,O.ri),O.ri.normalize(),O.ri.scale(m,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}d.release(E,B,z,A,I)}planeBox(e,t,n,i,s,r,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,a,l,e,t,u)}convexConvex(e,t,n,i,s,r,a,l,c,h,u,d,f){const m=Px;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,m,d,f)){const _=[],g=Ix;e.clipAgainstHull(n,s,t,i,r,m,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(u)return!0;const x=this.createContactEquation(a,l,e,t,c,h),w=x.ri,M=x.rj;m.negate(x.ni),_[v].normal.negate(g),g.scale(_[v].depth,g),_[v].point.vadd(g,w),M.copy(_[v].point),w.vsub(n,w),M.vsub(i,M),w.vadd(n,w),w.vsub(a.position,w),M.vadd(i,M),M.vsub(l.position,M),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,n,i,s,r,a,l,c,h,u){const d=this.v3pool;n.vsub(i,_x);const f=t.faceNormals,m=t.faces,_=t.vertices,g=e.radius;let p=!1;for(let v=0;v!==_.length;v++){const x=_[v],w=Mx;r.vmult(x,w),i.vadd(w,w);const M=yx;if(w.vsub(n,M),M.lengthSquared()<g*g){if(u)return!0;p=!0;const b=this.createContactEquation(a,l,e,t,c,h);b.ri.copy(M),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(g,b.ri),w.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,x=m.length;v!==x&&p===!1;v++){const w=f[v],M=m[v],b=wx;r.vmult(w,b);const C=Ex;r.vmult(_[M[0]],C),C.vadd(i,C);const R=bx;b.scale(-g,R),n.vadd(R,R);const y=Sx;R.vsub(C,y);const E=y.dot(b),B=Ax;if(n.vsub(C,B),E<0&&B.dot(b)>0){const z=[];for(let A=0,I=M.length;A!==I;A++){const D=d.get();r.vmult(_[M[A]],D),i.vadd(D,D),z.push(D)}if(lx(z,b,n)){if(u)return!0;p=!0;const A=this.createContactEquation(a,l,e,t,c,h);b.scale(-g,A.ri),b.negate(A.ni);const I=d.get();b.scale(-E,I);const D=d.get();b.scale(-g,D),n.vsub(i,A.rj),A.rj.vadd(D,A.rj),A.rj.vadd(I,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),d.release(I),d.release(D),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let U=0,V=z.length;U!==V;U++)d.release(z[U]);return}else for(let A=0;A!==M.length;A++){const I=d.get(),D=d.get();r.vmult(_[M[(A+1)%M.length]],I),r.vmult(_[M[(A+2)%M.length]],D),i.vadd(I,I),i.vadd(D,D);const U=vx;D.vsub(I,U);const V=xx;U.unit(V);const G=d.get(),Y=d.get();n.vsub(I,Y);const Z=Y.dot(V);V.scale(Z,G),G.vadd(I,G);const ae=d.get();if(G.vsub(n,ae),Z>0&&Z*Z<U.lengthSquared()&&ae.lengthSquared()<g*g){if(u)return!0;const O=this.createContactEquation(a,l,e,t,c,h);G.vsub(i,O.rj),G.vsub(n,O.ni),O.ni.normalize(),O.ni.scale(g,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let Q=0,te=z.length;Q!==te;Q++)d.release(z[Q]);d.release(I),d.release(D),d.release(G),d.release(ae),d.release(Y);return}d.release(I),d.release(D),d.release(G),d.release(ae),d.release(Y)}for(let A=0,I=z.length;A!==I;A++)d.release(z[A])}}}planeConvex(e,t,n,i,s,r,a,l,c,h,u){const d=Tx,f=Rx;f.set(0,0,1),s.vmult(f,f);let m=0;const _=Cx;for(let g=0;g!==t.vertices.length;g++)if(d.copy(t.vertices[g]),r.vmult(d,d),i.vadd(d,d),d.vsub(n,_),f.dot(_)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h),x=Lx;f.scale(f.dot(_),x),d.vsub(x,x),x.vsub(n,v.ri),v.ni.copy(f),d.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,u)}sphereHeightfield(e,t,n,i,s,r,a,l,c,h,u){const d=t.data,f=e.radius,m=t.elementSize,_=Wx,g=Gx;Ze.pointToLocalFrame(i,r,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,x=Math.floor((g.y-f)/m)-1,w=Math.ceil((g.y+f)/m)+1;if(v<0||w<0||p>d.length||x>d[0].length)return;p<0&&(p=0),v<0&&(v=0),x<0&&(x=0),w<0&&(w=0),p>=d.length&&(p=d.length-1),v>=d.length&&(v=d.length-1),w>=d[0].length&&(w=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const M=[];t.getRectMinMax(p,x,v,w,M);const b=M[0],C=M[1];if(g.z-f>C||g.z+f<b)return;const R=this.result;for(let y=p;y<v;y++)for(let E=x;E<w;E++){const B=R.length;let z=!1;if(t.getConvexTrianglePillar(y,E,!1),Ze.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,l,e,t,u)),u&&z||(t.getConvexTrianglePillar(y,E,!0),Ze.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(z=this.sphereConvex(e,t.pillarConvex,n,_,s,r,a,l,e,t,u)),u&&z))return!0;if(R.length-B>2)return}}boxHeightfield(e,t,n,i,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,u)}convexHeightfield(e,t,n,i,s,r,a,l,c,h,u){const d=t.data,f=t.elementSize,m=e.boundingSphereRadius,_=Vx,g=Hx,p=kx;Ze.pointToLocalFrame(i,r,n,p);let v=Math.floor((p.x-m)/f)-1,x=Math.ceil((p.x+m)/f)+1,w=Math.floor((p.y-m)/f)-1,M=Math.ceil((p.y+m)/f)+1;if(x<0||M<0||v>d.length||w>d[0].length)return;v<0&&(v=0),x<0&&(x=0),w<0&&(w=0),M<0&&(M=0),v>=d.length&&(v=d.length-1),x>=d.length&&(x=d.length-1),M>=d[0].length&&(M=d[0].length-1),w>=d[0].length&&(w=d[0].length-1);const b=[];t.getRectMinMax(v,w,x,M,b);const C=b[0],R=b[1];if(!(p.z-m>R||p.z+m<C))for(let y=v;y<x;y++)for(let E=w;E<M;E++){let B=!1;if(t.getConvexTrianglePillar(y,E,!1),Ze.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,l,null,null,u,g,null)),u&&B||(t.getConvexTrianglePillar(y,E,!0),Ze.pointToWorldFrame(i,r,t.pillarOffset,_),n.distanceTo(_)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,_,s,r,a,l,null,null,u,g,null)),u&&B))return!0}}sphereParticle(e,t,n,i,s,r,a,l,c,h,u){const d=Ux;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const m=this.createContactEquation(l,a,t,e,c,h);d.normalize(),m.rj.copy(d),m.rj.scale(e.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,r,a,l,c,h,u){const d=Dx;d.set(0,0,1),a.quaternion.vmult(d,d);const f=Fx;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const _=this.createContactEquation(l,a,t,e,c,h);_.ni.copy(d),_.ni.negate(_.ni),_.ri.set(0,0,0);const g=Nx;d.scale(d.dot(i),g),i.vsub(g,g),_.rj.copy(g),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(e,t,n,i,s,r,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,a,l,e,t,u)}convexParticle(e,t,n,i,s,r,a,l,c,h,u){let d=-1;const f=Ox,m=zx;let _=null;const g=Bx;if(g.copy(i),g.vsub(n,g),s.conjugate(Xc),Xc.vmult(g,g),e.pointIsInside(g)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let p=0,v=e.faces.length;p!==v;p++){const x=[e.worldVertices[e.faces[p][0]]],w=e.worldFaceNormals[p];i.vsub(x[0],qc);const M=-w.dot(qc);if(_===null||Math.abs(M)<Math.abs(_)){if(u)return!0;_=M,d=p,f.copy(w)}}if(d!==-1){const p=this.createContactEquation(l,a,t,e,c,h);f.scale(_,m),m.vadd(i,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,x=p.rj;v.vadd(i,v),v.vsub(l.position,v),x.vadd(n,x),x.vsub(a.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}sphereTrimesh(e,t,n,i,s,r,a,l,c,h,u){const d=Y0,f=K0,m=$0,_=Z0,g=J0,p=Q0,v=ix,x=j0,w=X0,M=sx;Ze.pointToLocalFrame(i,r,n,g);const b=e.radius;v.lowerBound.set(g.x-b,g.y-b,g.z-b),v.upperBound.set(g.x+b,g.y+b,g.z+b),t.getTrianglesInAABB(v,M);const C=q0,R=e.radius*e.radius;for(let A=0;A<M.length;A++)for(let I=0;I<3;I++)if(t.getVertex(t.indices[M[A]*3+I],C),C.vsub(g,w),w.lengthSquared()<=R){if(x.copy(C),Ze.pointToWorldFrame(i,r,x,C),C.vsub(n,w),u)return!0;let D=this.createContactEquation(a,l,e,t,c,h);D.ni.copy(w),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.copy(C),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let A=0;A<M.length;A++)for(let I=0;I<3;I++){t.getVertex(t.indices[M[A]*3+I],d),t.getVertex(t.indices[M[A]*3+(I+1)%3],f),f.vsub(d,m),g.vsub(f,p);const D=p.dot(m);g.vsub(d,p);let U=p.dot(m);if(U>0&&D<0&&(g.vsub(d,p),_.copy(m),_.normalize(),U=p.dot(_),_.scale(U,p),p.vadd(d,p),p.distanceTo(g)<e.radius)){if(u)return!0;const G=this.createContactEquation(a,l,e,t,c,h);p.vsub(g,G.ni),G.ni.normalize(),G.ni.scale(e.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),Ze.pointToWorldFrame(i,r,p,p),p.vsub(l.position,G.rj),Ze.vectorToWorldFrame(r,G.ni,G.ni),Ze.vectorToWorldFrame(r,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const y=ex,E=tx,B=nx,z=W0;for(let A=0,I=M.length;A!==I;A++){t.getTriangleVertices(M[A],y,E,B),t.getNormal(M[A],z),g.vsub(y,p);let D=p.dot(z);if(z.scale(D,p),g.vsub(p,p),D=p.distanceTo(g),et.pointInTriangle(p,y,E,B)&&D<e.radius){if(u)return!0;let U=this.createContactEquation(a,l,e,t,c,h);p.vsub(g,U.ni),U.ni.normalize(),U.ni.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),Ze.pointToWorldFrame(i,r,p,p),p.vsub(l.position,U.rj),Ze.vectorToWorldFrame(r,U.ni,U.ni),Ze.vectorToWorldFrame(r,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,s,r,a,l,c,h,u){const d=new S,f=V0;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,d);const _=new S;_.copy(d),Ze.pointToWorldFrame(i,r,_,d);const g=H0;if(d.vsub(n,g),f.dot(g)<=0){if(u)return!0;const v=this.createContactEquation(a,l,e,t,c,h);v.ni.copy(f);const x=G0;f.scale(g.dot(f),x),d.vsub(x,x),v.ri.copy(x),v.ri.vsub(a.position,v.ri),v.rj.copy(d),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const vi=new S,Ji=new S,Qi=new S,B0=new S,O0=new S,z0=new ht,k0=new ht;Xe.prototype[It.boxBox]=Xe.prototype.boxBox;Xe.prototype[It.boxConvex]=Xe.prototype.boxConvex;Xe.prototype[It.boxParticle]=Xe.prototype.boxParticle;Xe.prototype[It.sphereSphere]=Xe.prototype.sphereSphere;const V0=new S,H0=new S,G0=new S;Xe.prototype[It.planeTrimesh]=Xe.prototype.planeTrimesh;const W0=new S,X0=new S,q0=new S,j0=new S,Y0=new S,K0=new S,$0=new S,Z0=new S,J0=new S,Q0=new S,ex=new S,tx=new S,nx=new S,ix=new ot,sx=[];Xe.prototype[It.sphereTrimesh]=Xe.prototype.sphereTrimesh;const Rr=new S,Wc=new S;Xe.prototype[It.spherePlane]=Xe.prototype.spherePlane;const rx=new S,ox=new S,ax=new S;function lx(o,e,t){let n=null;const i=o.length;for(let s=0;s!==i;s++){const r=o[s],a=rx;o[(s+1)%i].vsub(r,a);const l=ox;a.cross(e,l);const c=ax;t.vsub(r,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const Cr=new S,cx=new S,hx=new S,ux=new S,dx=[new S,new S,new S,new S,new S,new S],fx=new S,px=new S,mx=new S,gx=new S;Xe.prototype[It.sphereBox]=Xe.prototype.sphereBox;const _x=new S,vx=new S,xx=new S,yx=new S,Mx=new S,wx=new S,Ex=new S,bx=new S,Sx=new S,Ax=new S;Xe.prototype[It.sphereConvex]=Xe.prototype.sphereConvex;Xe.prototype[It.planeBox]=Xe.prototype.planeBox;const Tx=new S,Rx=new S,Cx=new S,Lx=new S;Xe.prototype[It.planeConvex]=Xe.prototype.planeConvex;const Px=new S,Ix=new S;Xe.prototype[It.convexConvex]=Xe.prototype.convexConvex;const Dx=new S,Fx=new S,Nx=new S;Xe.prototype[It.planeParticle]=Xe.prototype.planeParticle;const Ux=new S;Xe.prototype[It.sphereParticle]=Xe.prototype.sphereParticle;const Xc=new ht,Bx=new S,Ox=new S,qc=new S,zx=new S;Xe.prototype[It.convexParticle]=Xe.prototype.convexParticle;Xe.prototype[It.boxHeightfield]=Xe.prototype.boxHeightfield;const kx=new S,Vx=new S,Hx=[0];Xe.prototype[It.convexHeightfield]=Xe.prototype.convexHeightfield;const Gx=new S,Wx=new S;Xe.prototype[It.sphereHeightfield]=Xe.prototype.sphereHeightfield;class jc{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||Yc(e,h)}a=0;for(let l=0;l<r;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||Yc(t,h)}}}function Yc(o,e){o.push((e&4294901760)>>16,e&65535)}class Xx{constructor(){this.data={keys:[]}}get(e,t){if(e>t){const n=t;t=e,e=n}return this.data[e+"-"+t]}set(e,t,n){if(e>t){const s=t;t=e,e=s}const i=e+"-"+t;this.get(e,t)||this.data.keys.push(i),this.data[i]=n}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}let nu=class extends eu{constructor(e={}){super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,e.gravity&&this.gravity.copy(e.gravity),this.broadphase=e.broadphase!==void 0?e.broadphase:new qv,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new P0,this.constraints=[],this.narrowphase=new Xe(this),this.collisionMatrix=new Rc,this.collisionMatrixPrevious=new Rc,this.bodyOverlapKeeper=new jc,this.shapeOverlapKeeper=new jc,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new Xx,this.defaultMaterial=new Zt("default"),this.defaultContactMaterial=new js(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}numObjects(){return this.bodies.length}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof ua?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n={},i){return n.mode=et.ALL,n.from=e,n.to=t,n.callback=i,Go.intersectWorld(this,n)}raycastAny(e,t,n={},i){return n.mode=et.ANY,n.from=e,n.to=t,n.result=i,Go.intersectWorld(this,n)}raycastClosest(e,t,n={},i){return n.mode=et.CLOSEST,n.from=e,n.to=t,n.result=i,Go.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof _e&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0,i=t.length;n<i;n++){const s=t[n].shapes;for(let r=0,a=s.length;r<a;r++){const l=s[r];if(l.id===e)return l}}}addMaterial(e){this.materials.push(e)}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}step(e,t,n=10){if(t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Rt.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Rt.now()-i>e*2*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=$x,i=Zx,s=this.numObjects(),r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=_e.DYNAMIC;let d=-1/0;const f=this.constraints,m=Kx;l.length();const _=l.x,g=l.y,p=l.z;let v=0;for(c&&(d=Rt.now()),v=0;v!==s;v++){const A=r[v];if(A.type===u){const I=A.force,D=A.mass;I.x+=D*_,I.y+=D*g,I.z+=D*p}}for(let A=0,I=this.subsystems.length;A!==I;A++)this.subsystems[A].update();c&&(d=Rt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Rt.now()-d);let x=f.length;for(v=0;v!==x;v++){const A=f[v];if(!A.collideConnected)for(let I=n.length-1;I>=0;I-=1)(A.bodyA===n[I]&&A.bodyB===i[I]||A.bodyB===n[I]&&A.bodyA===i[I])&&(n.splice(I,1),i.splice(I,1))}this.collisionMatrixTick(),c&&(d=Rt.now());const w=Yx,M=t.length;for(v=0;v!==M;v++)w.push(t[v]);t.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,w,this.frictionEquations,m),c&&(h.narrowphase=Rt.now()-d),c&&(d=Rt.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);const C=t.length;for(let A=0;A!==C;A++){const I=t[A],D=I.bi,U=I.bj,V=I.si,G=I.sj;let Y;if(D.material&&U.material?Y=this.getContactMaterial(D.material,U.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,D.material&&U.material&&(D.material.friction>=0&&U.material.friction>=0&&D.material.friction*U.material.friction,D.material.restitution>=0&&U.material.restitution>=0&&(I.restitution=D.material.restitution*U.material.restitution)),a.addEquation(I),D.allowSleep&&D.type===_e.DYNAMIC&&D.sleepState===_e.SLEEPING&&U.sleepState===_e.AWAKE&&U.type!==_e.STATIC){const Z=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ae=U.sleepSpeedLimit**2;Z>=ae*2&&(D.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===_e.DYNAMIC&&U.sleepState===_e.SLEEPING&&D.sleepState===_e.AWAKE&&D.type!==_e.STATIC){const Z=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),ae=D.sleepSpeedLimit**2;Z>=ae*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,U,!0),this.collisionMatrixPrevious.get(D,U)||(Ps.body=U,Ps.contact=I,D.dispatchEvent(Ps),Ps.body=D,U.dispatchEvent(Ps)),this.bodyOverlapKeeper.set(D.id,U.id),this.shapeOverlapKeeper.set(V.id,G.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Rt.now()-d,d=Rt.now()),v=0;v!==s;v++){const A=r[v];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(x=f.length,v=0;v!==x;v++){const A=f[v];A.update();for(let I=0,D=A.equations.length;I!==D;I++){const U=A.equations[I];a.addEquation(U)}}a.solve(e,this),c&&(h.solve=Rt.now()-d),a.removeAllEquations();const R=Math.pow;for(v=0;v!==s;v++){const A=r[v];if(A.type&u){const I=R(1-A.linearDamping,e),D=A.velocity;D.scale(I,D);const U=A.angularVelocity;if(U){const V=R(1-A.angularDamping,e);U.scale(V,U)}}}for(this.dispatchEvent(jx),v=0;v!==s;v++){const A=r[v];A.preStep&&A.preStep.call(A)}c&&(d=Rt.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(e,E,B);for(this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Rt.now()-d),this.time+=e,this.stepnumber+=1,this.dispatchEvent(qx),v=0;v!==s;v++){const A=r[v],I=A.postStep;I&&I.call(A)}let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==s;v++){const A=r[v];A.sleepTick(this.time),A.sleepState!==_e.SLEEPING&&(z=!0)}this.hasActiveBodies=z}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new ot;const Go=new et,Rt=globalThis.performance||{};if(!Rt.now){let o=Date.now();Rt.timing&&Rt.timing.navigationStart&&(o=Rt.timing.navigationStart),Rt.now=()=>Date.now()-o}const qx={type:"postStep"},jx={type:"preStep"},Ps={type:_e.COLLIDE_EVENT_NAME,body:null,contact:null},Yx=[],Kx=[],$x=[],Zx=[];nu.prototype.emitContactEvents=(()=>{const o=[],e=[],t={type:"beginContact",bodyA:null,bodyB:null},n={type:"endContact",bodyA:null,bodyB:null},i={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},s={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};return function(){const r=this.hasAnyEventListener("beginContact"),a=this.hasAnyEventListener("endContact");if((r||a)&&this.bodyOverlapKeeper.getDiff(o,e),r){for(let h=0,u=o.length;h<u;h+=2)t.bodyA=this.getBodyById(o[h]),t.bodyB=this.getBodyById(o[h+1]),this.dispatchEvent(t);t.bodyA=t.bodyB=null}if(a){for(let h=0,u=e.length;h<u;h+=2)n.bodyA=this.getBodyById(e[h]),n.bodyB=this.getBodyById(e[h+1]),this.dispatchEvent(n);n.bodyA=n.bodyB=null}o.length=e.length=0;const l=this.hasAnyEventListener("beginShapeContact"),c=this.hasAnyEventListener("endShapeContact");if((l||c)&&this.shapeOverlapKeeper.getDiff(o,e),l){for(let h=0,u=o.length;h<u;h+=2){const d=this.getShapeById(o[h]),f=this.getShapeById(o[h+1]);i.shapeA=d,i.shapeB=f,i.bodyA=d.body,i.bodyB=f.body,this.dispatchEvent(i)}i.bodyA=i.bodyB=i.shapeA=i.shapeB=null}if(c){for(let h=0,u=e.length;h<u;h+=2){const d=this.getShapeById(e[h]),f=this.getShapeById(e[h+1]);s.shapeA=d,s.shapeB=f,s.bodyA=d.body,s.bodyB=f.body,this.dispatchEvent(s)}s.bodyA=s.bodyB=s.shapeA=s.shapeB=null}}})();function Jx(o,e,t){let{color:n=65280,scale:i=1,onInit:s,onUpdate:r}=t===void 0?{}:t;const a=[],l=new _t({color:n??65280,wireframe:!0}),c=new S,h=new S,u=new S,d=new ht,f=new ps(1),m=new Dt(1,1,1),_=new Hs(10,10,10,10);_.translate(0,0,1e-4);function g(R){const y=new Pt,E=[];for(let z=0;z<R.vertices.length;z++){const A=R.vertices[z];E.push(A.x,A.y,A.z)}y.setAttribute("position",new at(E,3));const B=[];for(let z=0;z<R.faces.length;z++){const A=R.faces[z],I=A[0];for(let D=1;D<A.length-1;D++){const U=A[D],V=A[D+1];B.push(I,U,V)}}return y.setIndex(B),y.computeBoundingSphere(),y.computeVertexNormals(),y}function p(R){const y=new Pt,E=[],B=c,z=h,A=u;for(let I=0;I<R.indices.length/3;I++)R.getTriangleVertices(I,B,z,A),E.push(B.x,B.y,B.z),E.push(z.x,z.y,z.z),E.push(A.x,A.y,A.z);return y.setAttribute("position",new at(E,3)),y.computeBoundingSphere(),y.computeVertexNormals(),y}function v(R){const y=new Pt,E=R.elementSize||1,B=R.data.flatMap((A,I)=>A.flatMap((D,U)=>[I*E,U*E,D])),z=[];for(let A=0;A<R.data.length-1;A++)for(let I=0;I<R.data[A].length-1;I++){const D=R.data[A].length,U=A*D+I;z.push(U+1,U+D,U+D+1),z.push(U+D,U+1,U)}return y.setIndex(z),y.setAttribute("position",new at(B,3)),y.computeBoundingSphere(),y.computeVertexNormals(),y}function x(R){let y=new Ve;const{SPHERE:E,BOX:B,PLANE:z,CYLINDER:A,CONVEXPOLYHEDRON:I,TRIMESH:D,HEIGHTFIELD:U}=ge.types;switch(R.type){case E:{y=new Ve(f,l);break}case B:{y=new Ve(m,l);break}case z:{y=new Ve(_,l);break}case A:{const V=new Jr(R.radiusTop,R.radiusBottom,R.height,R.numSegments);y=new Ve(V,l),R.geometryId=V.id;break}case I:{const V=g(R);y=new Ve(V,l),R.geometryId=V.id;break}case D:{const V=p(R);y=new Ve(V,l),R.geometryId=V.id;break}case U:{const V=v(R);y=new Ve(V,l),R.geometryId=V.id;break}}return o.add(y),y}function w(R,y){const{SPHERE:E,BOX:B,PLANE:z,CYLINDER:A,CONVEXPOLYHEDRON:I,TRIMESH:D,HEIGHTFIELD:U}=ge.types;switch(y.type){case E:{const{radius:V}=y;R.scale.set(V*i,V*i,V*i);break}case B:{R.scale.copy(y.halfExtents),R.scale.multiplyScalar(2*i);break}case z:break;case A:{R.scale.set(1*i,1*i,1*i);break}case I:{R.scale.set(1*i,1*i,1*i);break}case D:{R.scale.copy(y.scale).multiplyScalar(i);break}case U:{R.scale.set(1*i,1*i,1*i);break}}}function M(R,y){if(!R)return!1;const{geometry:E}=R;return E instanceof ps&&y.type===ge.types.SPHERE||E instanceof Dt&&y.type===ge.types.BOX||E instanceof Hs&&y.type===ge.types.PLANE||E.id===y.geometryId&&y.type===ge.types.CYLINDER||E.id===y.geometryId&&y.type===ge.types.CONVEXPOLYHEDRON||E.id===y.geometryId&&y.type===ge.types.TRIMESH||E.id===y.geometryId&&y.type===ge.types.HEIGHTFIELD}function b(R,y){let E=a[R],B=!1;return M(E,y)||(E&&o.remove(E),a[R]=E=x(y),B=!0),w(E,y),B}function C(){const R=a,y=c,E=d;let B=0;for(const z of e.bodies)for(let A=0;A!==z.shapes.length;A++){const I=z.shapes[A],D=b(B,I),U=R[B];U&&(z.quaternion.vmult(z.shapeOffsets[A],y),z.position.vadd(y,y),z.quaternion.mult(z.shapeOrientations[A],E),U.position.copy(y),U.quaternion.copy(E),D&&s instanceof Function&&s(z,U,I),!D&&r instanceof Function&&r(z,U,I)),B++}for(let z=B;z<R.length;z++){const A=R[z];A&&o.remove(A)}R.length=B}return{update:C}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class Sn{constructor(e,t,n,i,s="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Sn.nextNameID=Sn.nextNameID||0,this.$name.id=`lil-gui-name-${++Sn.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",r=>r.stopPropagation()),this.domElement.addEventListener("keyup",r=>r.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Qx extends Sn{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function da(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ey={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:da,toHexString:da},Gs={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},ty={isPrimitive:!1,match:o=>Array.isArray(o),fromHexString(o,e,t=1){const n=Gs.fromHexString(o);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(n&255)/255*t},toHexString([o,e,t],n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Gs.toHexString(i)}},ny={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const n=Gs.fromHexString(o);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(n&255)/255*t},toHexString({r:o,g:e,b:t},n=1){n=255/n;const i=o*n<<16^e*n<<8^t*n<<0;return Gs.toHexString(i)}},iy=[ey,Gs,ty,ny];function sy(o){return iy.find(e=>e.match(o))}class ry extends Sn{constructor(e,t,n,i){super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=sy(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=da(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Wo extends Sn{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class oy extends Sn{constructor(e,t,n,i,s,r){super(e,t,n,"number"),this._initInput(),this.min(i),this.max(s);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let v=parseFloat(this.$input.value);isNaN(v)||(this._stepExplicit&&(v=this._snap(v)),this.setValue(this._clamp(v)))},n=v=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+v),this.$input.value=this.getValue())},i=v=>{v.key==="Enter"&&this.$input.blur(),v.code==="ArrowUp"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v))),v.code==="ArrowDown"&&(v.preventDefault(),n(this._step*this._arrowKeyMultiplier(v)*-1))},s=v=>{this._inputFocused&&(v.preventDefault(),n(this._step*this._normalizeMouseWheel(v)))};let r=!1,a,l,c,h,u;const d=5,f=v=>{a=v.clientX,l=c=v.clientY,r=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)},m=v=>{if(r){const x=v.clientX-a,w=v.clientY-l;Math.abs(w)>d?(v.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!r){const x=v.clientY-c;u-=x*this._step*this._arrowKeyMultiplier(v),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=v.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(p,v,x,w,M)=>(p-v)/(x-v)*(M-w)+w,t=p=>{const v=this.$slider.getBoundingClientRect();let x=e(p,v.left,v.right,this._min,this._max);this._snapClampSetValue(x)},n=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let r=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),r=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,r=!0):c(p),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=p=>{if(r){const v=p.touches[0].clientX-a,x=p.touches[0].clientY-l;Math.abs(v)>Math.abs(x)?c(p):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else p.preventDefault(),t(p.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),m=400;let _;const g=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const x=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,m)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ay extends Sn{constructor(e,t,n,i){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class ly extends Sn{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const cy=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function hy(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Kc=!1;class Na{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:i,title:s="Controls",closeFolders:r=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Kc&&a&&(hy(cy),Kc=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=r}add(e,t,n,i,s){if(Object(n)===n)return new ay(this,e,t,n);const r=e[t];switch(typeof r){case"number":return new oy(this,e,t,n,i,s);case"boolean":return new Qx(this,e,t);case"string":return new ly(this,e,t);case"function":return new Wo(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,n=1){return new ry(this,e,t,n)}addFolder(e){const t=new Na({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof Wo||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Wo)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class uy{constructor(){this.active=window.location.hash==="#debug",this.active&&(this.ui=new Na)}}class Ua{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const s=this.resolveName(i);this.callbacks[s.namespace]instanceof Object||(this.callbacks[s.namespace]={}),this.callbacks[s.namespace][s.value]instanceof Array||(this.callbacks[s.namespace][s.value]=[]),this.callbacks[s.namespace][s.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(n=>{const i=this.resolveName(n);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const s in this.callbacks)this.callbacks[s]instanceof Object&&this.callbacks[s][i.value]instanceof Array&&(delete this.callbacks[s][i.value],Object.keys(this.callbacks[s]).length===0&&delete this.callbacks[s]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let n=null;const i=t instanceof Array?t:[];let s=this.resolveNames(e);if(s=this.resolveName(s[0]),s.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][s.value]instanceof Array&&this.callbacks[r][s.value].forEach(function(a){a.apply(this,i)});else if(this.callbacks[s.namespace]instanceof Object){if(s.value==="")return console.warn("wrong name"),this;this.callbacks[s.namespace][s.value].forEach(function(r){r.apply(this,i)})}return n}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class dy extends Ua{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class fy extends Ua{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,window.requestAnimationFrame(()=>{this.tick()})}tick(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.trigger("tick"),window.requestAnimationFrame(()=>{this.tick()})}}const $c={type:"change"},Xo={type:"start"},Zc={type:"end"};class py extends ai{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",Je),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Je),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent($c),n.update(),s=i.NONE},this.update=function(){const F=new N,ee=new Lt().setFromUnitVectors(e.up,new N(0,1,0)),ne=ee.clone().invert(),j=new N,pe=new Lt,we=new N,xe=2*Math.PI;return function(){const de=n.object.position;F.copy(de).sub(n.target),F.applyQuaternion(ee),a.setFromVector3(F),n.autoRotate&&s===i.NONE&&y(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ce=n.minAzimuthAngle,qe=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(qe)&&(Ce<-Math.PI?Ce+=xe:Ce>Math.PI&&(Ce-=xe),qe<-Math.PI?qe+=xe:qe>Math.PI&&(qe-=xe),Ce<=qe?a.theta=Math.max(Ce,Math.min(qe,a.theta)):a.theta=a.theta>(Ce+qe)/2?Math.max(Ce,a.theta):Math.min(qe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),F.setFromSpherical(a),F.applyQuaternion(ne),de.copy(n.target).add(F),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||j.distanceToSquared(n.object.position)>r||8*(1-pe.dot(n.object.quaternion))>r||we.distanceToSquared(n.target)>0?(n.dispatchEvent($c),j.copy(n.object.position),pe.copy(n.object.quaternion),we.copy(n.target),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",be),n.domElement.removeEventListener("pointercancel",Se),n.domElement.removeEventListener("wheel",Ie),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",Se),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Je),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,a=new Ec,l=new Ec;let c=1;const h=new N;let u=!1;const d=new Te,f=new Te,m=new Te,_=new Te,g=new Te,p=new Te,v=new Te,x=new Te,w=new Te,M=[],b={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function y(F){l.theta-=F}function E(F){l.phi-=F}const B=function(){const F=new N;return function(ne,j){F.setFromMatrixColumn(j,0),F.multiplyScalar(-ne),h.add(F)}}(),z=function(){const F=new N;return function(ne,j){n.screenSpacePanning===!0?F.setFromMatrixColumn(j,1):(F.setFromMatrixColumn(j,0),F.crossVectors(n.object.up,F)),F.multiplyScalar(ne),h.add(F)}}(),A=function(){const F=new N;return function(ne,j){const pe=n.domElement;if(n.object.isPerspectiveCamera){const we=n.object.position;F.copy(we).sub(n.target);let xe=F.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ne*xe/pe.clientHeight,n.object.matrix),z(2*j*xe/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ne*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),z(j*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function I(F){n.object.isPerspectiveCamera?c/=F:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*F)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(F){n.object.isPerspectiveCamera?c*=F:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/F)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(F){d.set(F.clientX,F.clientY)}function V(F){v.set(F.clientX,F.clientY)}function G(F){_.set(F.clientX,F.clientY)}function Y(F){f.set(F.clientX,F.clientY),m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const ee=n.domElement;y(2*Math.PI*m.x/ee.clientHeight),E(2*Math.PI*m.y/ee.clientHeight),d.copy(f),n.update()}function Z(F){x.set(F.clientX,F.clientY),w.subVectors(x,v),w.y>0?I(R()):w.y<0&&D(R()),v.copy(x),n.update()}function ae(F){g.set(F.clientX,F.clientY),p.subVectors(g,_).multiplyScalar(n.panSpeed),A(p.x,p.y),_.copy(g),n.update()}function O(F){F.deltaY<0?D(R()):F.deltaY>0&&I(R()),n.update()}function Q(F){let ee=!1;switch(F.code){case n.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(-n.keyPanSpeed,0),ee=!0;break}ee&&(F.preventDefault(),n.update())}function te(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const F=.5*(M[0].pageX+M[1].pageX),ee=.5*(M[0].pageY+M[1].pageY);d.set(F,ee)}}function le(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const F=.5*(M[0].pageX+M[1].pageX),ee=.5*(M[0].pageY+M[1].pageY);_.set(F,ee)}}function he(){const F=M[0].pageX-M[1].pageX,ee=M[0].pageY-M[1].pageY,ne=Math.sqrt(F*F+ee*ee);v.set(0,ne)}function ye(){n.enableZoom&&he(),n.enablePan&&le()}function De(){n.enableZoom&&he(),n.enableRotate&&te()}function Re(F){if(M.length==1)f.set(F.pageX,F.pageY);else{const ne=ie(F),j=.5*(F.pageX+ne.x),pe=.5*(F.pageY+ne.y);f.set(j,pe)}m.subVectors(f,d).multiplyScalar(n.rotateSpeed);const ee=n.domElement;y(2*Math.PI*m.x/ee.clientHeight),E(2*Math.PI*m.y/ee.clientHeight),d.copy(f)}function ut(F){if(M.length===1)g.set(F.pageX,F.pageY);else{const ee=ie(F),ne=.5*(F.pageX+ee.x),j=.5*(F.pageY+ee.y);g.set(ne,j)}p.subVectors(g,_).multiplyScalar(n.panSpeed),A(p.x,p.y),_.copy(g)}function He(F){const ee=ie(F),ne=F.pageX-ee.x,j=F.pageY-ee.y,pe=Math.sqrt(ne*ne+j*j);x.set(0,pe),w.set(0,Math.pow(x.y/v.y,n.zoomSpeed)),I(w.y),v.copy(x)}function W(F){n.enableZoom&&He(F),n.enablePan&&ut(F)}function xt(F){n.enableZoom&&He(F),n.enableRotate&&Re(F)}function be(F){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(F.pointerId),n.domElement.addEventListener("pointermove",Ne),n.domElement.addEventListener("pointerup",Se)),T(F),F.pointerType==="touch"?yt(F):tt(F))}function Ne(F){n.enabled!==!1&&(F.pointerType==="touch"?St(F):ke(F))}function Se(F){K(F),M.length===0&&(n.domElement.releasePointerCapture(F.pointerId),n.domElement.removeEventListener("pointermove",Ne),n.domElement.removeEventListener("pointerup",Se)),n.dispatchEvent(Zc),s=i.NONE}function tt(F){let ee;switch(F.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case Ii.DOLLY:if(n.enableZoom===!1)return;V(F),s=i.DOLLY;break;case Ii.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enablePan===!1)return;G(F),s=i.PAN}else{if(n.enableRotate===!1)return;U(F),s=i.ROTATE}break;case Ii.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(n.enableRotate===!1)return;U(F),s=i.ROTATE}else{if(n.enablePan===!1)return;G(F),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Xo)}function ke(F){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(F);break;case i.DOLLY:if(n.enableZoom===!1)return;Z(F);break;case i.PAN:if(n.enablePan===!1)return;ae(F);break}}function Ie(F){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(F.preventDefault(),n.dispatchEvent(Xo),O(F),n.dispatchEvent(Zc))}function Je(F){n.enabled===!1||n.enablePan===!1||Q(F)}function yt(F){switch(se(F),M.length){case 1:switch(n.touches.ONE){case Di.ROTATE:if(n.enableRotate===!1)return;te(),s=i.TOUCH_ROTATE;break;case Di.PAN:if(n.enablePan===!1)return;le(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ye(),s=i.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Xo)}function St(F){switch(se(F),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(F),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ut(F),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(F),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(F),n.update();break;default:s=i.NONE}}function P(F){n.enabled!==!1&&F.preventDefault()}function T(F){M.push(F)}function K(F){delete b[F.pointerId];for(let ee=0;ee<M.length;ee++)if(M[ee].pointerId==F.pointerId){M.splice(ee,1);return}}function se(F){let ee=b[F.pointerId];ee===void 0&&(ee=new Te,b[F.pointerId]=ee),ee.set(F.pageX,F.pageY)}function ie(F){const ee=F.pointerId===M[0].pointerId?M[1]:M[0];return b[ee.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",be),n.domElement.addEventListener("pointercancel",Se),n.domElement.addEventListener("wheel",Ie,{passive:!1}),this.update()}}class my{constructor(){this.experience=new Ht,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setControls()}setInstance(){this.instance=new Bt(35,this.sizes.width/this.sizes.height,.1,1e3),this.instance.position.set(0,25,50),this.scene.add(this.instance)}setControls(){this.controls=new py(this.instance,this.canvas),this.controls.enableDamping=!0}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}class gy{constructor(){this.experience=new Ht,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new Wh({canvas:this.canvas,antialias:!0}),this.instance.useLegacyLights=!0,this.instance.toneMapping=gh,this.instance.toneMappingExposure=1.75,this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=fh,this.instance.setClearColor("#f47de9"),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}class _y{constructor(){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("environment")),this.setSunLight(),this.setEnvironmentMap()}setSunLight(){this.ambient=new Qh("#ffffff",1),this.scene.add(this.ambient),this.sunLight=new La("#ffffff",4),this.sunLight.castShadow=!0,this.sunLight.shadow.camera.far=15,this.sunLight.shadow.mapSize.set(1024,1024),this.sunLight.shadow.normalBias=.05,this.sunLight.position.set(3.5,2,-1.25),this.scene.add(this.sunLight),this.debug.active&&(this.debugFolder.add(this.sunLight,"intensity").name("sunLightIntensity").min(0).max(10).step(.001),this.debugFolder.add(this.sunLight.position,"x").name("sunLightX").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.position,"y").name("sunLightY").min(-5).max(5).step(.001),this.debugFolder.add(this.sunLight.position,"z").name("sunLightZ").min(-5).max(5).step(.001))}setEnvironmentMap(){this.environmentMap={},this.environmentMap.intensity=.4,this.environmentMap.texture=this.resources.items.environmentMapTexture,this.environmentMap.texture.colorSpace=Ee,this.scene.environment=this.environmentMap.texture,this.environmentMap.updateMaterials=()=>{this.scene.traverse(e=>{e instanceof Ve&&e.material instanceof Ws&&(e.material.envMap=this.environmentMap.texture,e.material.envMapIntensity=this.environmentMap.intensity,e.material.needsUpdate=!0)})},this.environmentMap.updateMaterials(),this.debug.active&&this.debugFolder.add(this.environmentMap,"intensity").name("envMapIntensity").min(0).max(4).step(.001).onChange(this.environmentMap.updateMaterials)}}class vy{constructor(e=5,t){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.physicsWorld=this.experience.physicsWorld,this.pathMaterial=t,this.setTextures(),this.setMaterial(),this.setUpTrack(e)}setGeometry(){return this.width=10,this.height=1,this.depth=20,new Dt(this.width,this.height,this.depth)}setTextures(){this.textures={},this.woodTexture=this.resources.items.groundTexture,this.woodTexture.colorSpace=Ee,this.woodTexture.wrapS=An,this.woodTexture.wrapT=An}setMaterial(){this.material=new Ws({map:this.woodTexture})}setMesh(e){let t=new Ve(e,this.material);return this.scene.add(t),t}setUpTrack(e){this.trackTiles=[];let t=this.setGeometry(),n=this.setMesh(t),i=this.addPhysicsProperties(t);i.position.set(0,0-.5,0),n.position.copy(i.position),this.trackTiles.push(i),e--;for(let s=0;s<e;s++){t=this.setGeometry(),n=this.setMesh(t),s%2==0&&(n.material.color=new Me(8947848)),i=this.addPhysicsProperties(t);let r=this.trackTiles[this.trackTiles.length-1];console.log(r),i.position.set(0,0-.5,r.position.z-20),n.position.copy(i.position),this.trackTiles.push(i)}}addPhysicsProperties(e){const t=new Pi(new S(this.width/2,this.height/2,this.depth/2)),n=new _e({shape:t,mass:0,allowSleep:!1,material:this.pathMaterial});return this.physicsWorld.addBody(n),n}}var xy=function(){var o=0,e=1,t=new N;function n(){this.tolerance=-1,this.faces=[],this.newFaces=[],this.assigned=new a,this.unassigned=new a,this.vertices=[]}Object.assign(n.prototype,{toJSON:function(){const l=this.faces.map(f=>f.toArray()),c=Array.from(new Set(l.flat())).sort(),h=[];for(let f=0;f<c.length;f++)h.push(this.vertices[c[f]].point.x,this.vertices[c[f]].point.y,this.vertices[c[f]].point.z);const u=new Map;for(let f=0;f<c.length;f++)u.set(c[f],f);const d=[];for(let f=0;f<l.length;f++)d.push([u.get(l[f][0]),u.get(l[f][1]),u.get(l[f][2])]);return[h,d]},setFromPoints:function(l){Array.isArray(l)!==!0&&console.error("THREE.ConvexHull: Points parameter is not an array."),l.length<4&&console.error("THREE.ConvexHull: The algorithm needs at least four points."),this.makeEmpty();for(var c=0,h=l.length;c<h;c++)this.vertices.push(new r(l[c],c));return this.compute(),this},setFromObject:function(l){var c=[];return l.updateMatrixWorld(!0),l.traverse(function(h){var u,d,f,m=h.geometry;if(m!==void 0&&(m.isGeometry&&(m=m.toBufferGeometry?m.toBufferGeometry():new BufferGeometry().fromGeometry(m)),m.isBufferGeometry)){var _=m.attributes.position;if(_!==void 0)for(u=0,d=_.count;u<d;u++)f=new N,f.fromBufferAttribute(_,u).applyMatrix4(h.matrixWorld),c.push(f)}}),this.setFromPoints(c)},containsPoint:function(l){for(var c=this.faces,h=0,u=c.length;h<u;h++){var d=c[h];if(d.distanceToPoint(l)>this.tolerance)return!1}return!0},intersectRay:function(l,c){for(var h=this.faces,u=-1/0,d=1/0,f=0,m=h.length;f<m;f++){var _=h[f],g=_.distanceToPoint(l.origin),p=_.normal.dot(l.direction);if(g>0&&p>=0)return null;var v=p!==0?-g/p:0;if(!(v<=0)&&(p>0?d=Math.min(v,d):u=Math.max(v,u),u>d))return null}return u!==-1/0?l.at(u,c):l.at(d,c),c},intersectsRay:function(l){return this.intersectRay(l,t)!==null},makeEmpty:function(){return this.faces=[],this.vertices=[],this},addVertexToFace:function(l,c){return l.face=c,c.outside===null?this.assigned.append(l):this.assigned.insertBefore(c.outside,l),c.outside=l,this},removeVertexFromFace:function(l,c){return l===c.outside&&(l.next!==null&&l.next.face===c?c.outside=l.next:c.outside=null),this.assigned.remove(l),this},removeAllVerticesFromFace:function(l){if(l.outside!==null){for(var c=l.outside,h=l.outside;h.next!==null&&h.next.face===l;)h=h.next;return this.assigned.removeSubList(c,h),c.prev=h.next=null,l.outside=null,c}},deleteFaceVertices:function(l,c){var h=this.removeAllVerticesFromFace(l);if(h!==void 0)if(c===void 0)this.unassigned.appendChain(h);else{var u=h;do{var d=u.next,f=c.distanceToPoint(u.point);f>this.tolerance?this.addVertexToFace(u,c):this.unassigned.append(u),u=d}while(u!==null)}return this},resolveUnassignedPoints:function(l){if(this.unassigned.isEmpty()===!1){var c=this.unassigned.first();do{for(var h=c.next,u=this.tolerance,d=null,f=0;f<l.length;f++){var m=l[f];if(m.mark===o){var _=m.distanceToPoint(c.point);if(_>u&&(u=_,d=m),u>1e3*this.tolerance)break}}d!==null&&this.addVertexToFace(c,d),c=h}while(c!==null)}return this},computeExtremes:function(){var l=new N,c=new N,h=[],u=[],d,f,m;for(d=0;d<3;d++)h[d]=u[d]=this.vertices[0];for(l.copy(this.vertices[0].point),c.copy(this.vertices[0].point),d=0,f=this.vertices.length;d<f;d++){var _=this.vertices[d],g=_.point;for(m=0;m<3;m++)g.getComponent(m)<l.getComponent(m)&&(l.setComponent(m,g.getComponent(m)),h[m]=_);for(m=0;m<3;m++)g.getComponent(m)>c.getComponent(m)&&(c.setComponent(m,g.getComponent(m)),u[m]=_)}return this.tolerance=3*Number.EPSILON*(Math.max(Math.abs(l.x),Math.abs(c.x))+Math.max(Math.abs(l.y),Math.abs(c.y))+Math.max(Math.abs(l.z),Math.abs(c.z))),{min:h,max:u}},computeInitialHull:function(){var l,c,h;return function(){l===void 0&&(l=new Ev,c=new ei,h=new N);var d,f=this.vertices,m=this.computeExtremes(),_=m.min,g=m.max,p,v,x,w,M,b,C,R,y=0,E=0;for(M=0;M<3;M++)R=g[M].point.getComponent(M)-_[M].point.getComponent(M),R>y&&(y=R,E=M);for(p=_[E],v=g[E],y=0,l.set(p.point,v.point),M=0,b=this.vertices.length;M<b;M++)d=f[M],d!==p&&d!==v&&(l.closestPointToPoint(d.point,!0,h),R=h.distanceToSquared(d.point),R>y&&(y=R,x=d));for(y=-1,c.setFromCoplanarPoints(p.point,v.point,x.point),M=0,b=this.vertices.length;M<b;M++)d=f[M],d!==p&&d!==v&&d!==x&&(R=Math.abs(c.distanceToPoint(d.point)),R>y&&(y=R,w=d));var B=[];if(c.distanceToPoint(w.point)<0)for(B.push(i.create(p,v,x),i.create(w,v,p),i.create(w,x,v),i.create(w,p,x)),M=0;M<3;M++)C=(M+1)%3,B[M+1].getEdge(2).setTwin(B[0].getEdge(C)),B[M+1].getEdge(1).setTwin(B[C+1].getEdge(0));else for(B.push(i.create(p,x,v),i.create(w,p,v),i.create(w,v,x),i.create(w,x,p)),M=0;M<3;M++)C=(M+1)%3,B[M+1].getEdge(2).setTwin(B[0].getEdge((3-M)%3)),B[M+1].getEdge(0).setTwin(B[C+1].getEdge(1));for(M=0;M<4;M++)this.faces.push(B[M]);for(M=0,b=f.length;M<b;M++)if(d=f[M],d!==p&&d!==v&&d!==x&&d!==w){y=this.tolerance;var z=null;for(C=0;C<4;C++)R=this.faces[C].distanceToPoint(d.point),R>y&&(y=R,z=this.faces[C]);z!==null&&this.addVertexToFace(d,z)}return this}}(),reindexFaces:function(){for(var l=[],c=0;c<this.faces.length;c++){var h=this.faces[c];h.mark===o&&l.push(h)}return this.faces=l,this},nextVertexToAdd:function(){if(this.assigned.isEmpty()===!1){var l,c=0,h=this.assigned.first().face,u=h.outside;do{var d=h.distanceToPoint(u.point);d>c&&(c=d,l=u),u=u.next}while(u!==null&&u.face===h);return l}},computeHorizon:function(l,c,h,u){this.deleteFaceVertices(h),h.mark=e;var d;c===null?d=c=h.getEdge(0):d=c.next;do{var f=d.twin,m=f.face;m.mark===o&&(m.distanceToPoint(l)>this.tolerance?this.computeHorizon(l,f,m,u):u.push(d)),d=d.next}while(d!==c);return this},addAdjoiningFace:function(l,c){var h=i.create(l,c.tail(),c.head());return this.faces.push(h),h.getEdge(-1).setTwin(c.twin),h.getEdge(0)},addNewFaces:function(l,c){this.newFaces=[];for(var h=null,u=null,d=0;d<c.length;d++){var f=c[d],m=this.addAdjoiningFace(l,f);h===null?h=m:m.next.setTwin(u),this.newFaces.push(m.face),u=m}return h.next.setTwin(u),this},addVertexToHull:function(l){var c=[];return this.unassigned.clear(),this.removeVertexFromFace(l,l.face),this.computeHorizon(l.point,null,l.face,c),this.addNewFaces(l,c),this.resolveUnassignedPoints(this.newFaces),this},cleanup:function(){return this.assigned.clear(),this.unassigned.clear(),this.newFaces=[],this},compute:function(){var l;for(this.computeInitialHull();(l=this.nextVertexToAdd())!==void 0;)this.addVertexToHull(l);return this.reindexFaces(),this.cleanup(),this}});function i(){this.normal=new N,this.midpoint=new N,this.area=0,this.constant=0,this.outside=null,this.mark=o,this.edge=null}Object.assign(i,{create:function(l,c,h){var u=new i,d=new s(l,u),f=new s(c,u),m=new s(h,u);return d.next=m.prev=f,f.next=d.prev=m,m.next=f.prev=d,u.edge=d,u.compute()}}),Object.assign(i.prototype,{toArray:function(){const l=[];let c=this.edge;do l.push(c.head().index),c=c.next;while(c!==this.edge);return l},getEdge:function(l){for(var c=this.edge;l>0;)c=c.next,l--;for(;l<0;)c=c.prev,l++;return c},compute:function(){var l;return function(){l===void 0&&(l=new en);var h=this.edge.tail(),u=this.edge.head(),d=this.edge.next.head();return l.set(h.point,u.point,d.point),l.getNormal(this.normal),l.getMidpoint(this.midpoint),this.area=l.getArea(),this.constant=this.normal.dot(this.midpoint),this}}(),distanceToPoint:function(l){return this.normal.dot(l)-this.constant}});function s(l,c){this.vertex=l,this.prev=null,this.next=null,this.twin=null,this.face=c}Object.assign(s.prototype,{head:function(){return this.vertex},tail:function(){return this.prev?this.prev.vertex:null},length:function(){var l=this.head(),c=this.tail();return c!==null?c.point.distanceTo(l.point):-1},lengthSquared:function(){var l=this.head(),c=this.tail();return c!==null?c.point.distanceToSquared(l.point):-1},setTwin:function(l){return this.twin=l,l.twin=this,this}});function r(l,c){this.point=l,this.index=c,this.prev=null,this.next=null,this.face=null}function a(){this.head=null,this.tail=null}return Object.assign(a.prototype,{first:function(){return this.head},last:function(){return this.tail},clear:function(){return this.head=this.tail=null,this},insertBefore:function(l,c){return c.prev=l.prev,c.next=l,c.prev===null?this.head=c:c.prev.next=c,l.prev=c,this},insertAfter:function(l,c){return c.prev=l,c.next=l.next,c.next===null?this.tail=c:c.next.prev=c,l.next=c,this},append:function(l){return this.head===null?this.head=l:this.tail.next=l,l.prev=this.tail,l.next=null,this.tail=l,this},appendChain:function(l){for(this.head===null?this.head=l:this.tail.next=l,l.prev=this.tail;l.next!==null;)l=l.next;return this.tail=l,this},remove:function(l){return l.prev===null?this.head=l.next:l.prev.next=l.next,l.next===null?this.tail=l.prev:l.next.prev=l.prev,this},removeSubList:function(l,c){return l.prev===null?this.head=c.next:l.prev.next=c.next,c.next===null?this.tail=l.prev:c.next.prev=l.prev,this},isEmpty:function(){return this.head===null}}),n}();const yy=new N,Lr=new N,My=new Lt;function Gr(o){const e=Ey(o);if(e.length===0)return null;if(e.length===1)return Jc(e[0]);let t;const n=[];for(;t=e.pop();)n.push(by(Jc(t)));return wy(n)}function Jc(o){let e=o.geometry;return e.toBufferGeometry?e=e.toBufferGeometry():e=e.clone(),o.updateMatrixWorld(),o.matrixWorld.decompose(yy,My,Lr),e.scale(Lr.x,Lr.y,Lr.z),e}function wy(o){let e=0;for(let i=0;i<o.length;i++){const s=o[i].attributes.position;s&&s.itemSize===3&&(e+=s.count)}const t=new Float32Array(e*3);let n=0;for(let i=0;i<o.length;i++){const s=o[i].attributes.position;if(s&&s.itemSize===3)for(let r=0;r<s.count;r++)t[n++]=s.getX(r),t[n++]=s.getY(r),t[n++]=s.getZ(r)}return new Pt().setAttribute("position",new Ft(t,3))}function iu(o){const e=o.attributes.position,t=new Float32Array(e.count*3);for(let n=0;n<e.count;n++)t[n*3]=e.getX(n),t[n*3+1]=e.getY(n),t[n*3+2]=e.getZ(n);return t}function Ey(o){const e=[];return o.traverse(function(t){t.isMesh&&e.push(t)}),e}function Pr(o,e){switch(e){case"x":return o.x;case"y":return o.y;case"z":return o.z}throw new Error(`Unexpected component ${e}`)}function by(o,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=o.getIndex(),i=o.getAttribute("position"),s=n?n.count:i.count;let r=0;const a=[],l=[],c=Math.log10(1/e),h=Math.pow(10,c);for(let f=0;f<s;f++){const m=n?n.getX(f):f;let _="";_+=`${~~(i.getX(m)*h)},`,_+=`${~~(i.getY(m)*h)},`,_+=`${~~(i.getZ(m)*h)},`,_ in t?a.push(t[_]):(l.push(i.getX(m)),l.push(i.getY(m)),l.push(i.getZ(m)),t[_]=r,a.push(r),r++)}const u=new Ft(new Float32Array(l),i.itemSize,i.normalized),d=new Pt;return d.setAttribute("position",u),d.setIndex(a),d}const Qc=Math.PI/2;var Be;(function(o){o.BOX="Box",o.CYLINDER="Cylinder",o.SPHERE="Sphere",o.HULL="ConvexPolyhedron",o.MESH="Trimesh"})(Be||(Be={}));const Sy=function(e,t={}){let n;if(t.type===Be.BOX)return nh(e);if(t.type===Be.CYLINDER)return Dy(e,t);if(t.type===Be.SPHERE)return Uy(e,t);if(t.type===Be.HULL)return Py(e);if(t.type===Be.MESH)return n=Gr(e),n?By(n):null;if(t.type)throw new Error(`[CANNON.getShapeParameters] Invalid type "${t.type}".`);if(n=Gr(e),!n)return null;switch(n.type){case"BoxGeometry":case"BoxBufferGeometry":return th(n);case"CylinderGeometry":case"CylinderBufferGeometry":return Iy(n);case"PlaneGeometry":case"PlaneBufferGeometry":return Fy(n);case"SphereGeometry":case"SphereBufferGeometry":return Ny(n);case"TubeGeometry":case"BufferGeometry":return nh(e);default:return console.warn('Unrecognized geometry: "%s". Using bounding box as shape.',n.type),th(n)}},eh=function(e,t={}){const n=Sy(e,t);if(!n)return null;const{type:i,params:s,offset:r,orientation:a}=n;let l;return i===Be.BOX?l=Ay(s):i===Be.CYLINDER?l=Ty(s):i===Be.SPHERE?l=Ry(s):i===Be.HULL?l=Cy(s):l=Ly(s),{shape:l,offset:r,orientation:a}};function Ay(o){const{x:e,y:t,z:n}=o;return new Pi(new S(e,t,n))}function Ty(o){const{radiusTop:e,radiusBottom:t,height:n,segments:i}=o,s=new w0(e,t,n,i);return s.radiusTop=t,s.radiusBottom=t,s.height=n,s.numSegments=i,s}function Ry(o){return new M0(o.radius)}function Cy(o){const{faces:e,vertices:t}=o,n=[];for(let s=0;s<t.length;s+=3)n.push(new S(t[s],t[s+1],t[s+2]));return new Wn({faces:e,vertices:n})}function Ly(o){const{vertices:e,indices:t}=o;return new vs(e,t)}function th(o){if(!iu(o).length)return null;o.computeBoundingBox();const t=o.boundingBox;return{type:Be.BOX,params:{x:(t.max.x-t.min.x)/2,y:(t.max.y-t.min.y)/2,z:(t.max.z-t.min.z)/2}}}function nh(o){const e=o.clone();e.quaternion.set(0,0,0,1),e.updateMatrixWorld();const t=new _n().setFromObject(e);if(!isFinite(t.min.lengthSq()))return null;const n=t.translate(e.position.negate()).getCenter(new N);return{type:Be.BOX,params:{x:(t.max.x-t.min.x)/2,y:(t.max.y-t.min.y)/2,z:(t.max.z-t.min.z)/2},offset:n.lengthSq()?new S(n.x,n.y,n.z):void 0}}function Py(o){const e=Gr(o);if(!e)return null;const t=1e-4;for(let s=0;s<e.attributes.position.count;s++)e.attributes.position.setXYZ(s,e.attributes.position.getX(s)+(Math.random()-.5)*t,e.attributes.position.getY(s)+(Math.random()-.5)*t,e.attributes.position.getZ(s)+(Math.random()-.5)*t);const[n,i]=new xy().setFromObject(new Ve(e)).toJSON();return{type:Be.HULL,params:{vertices:new Float32Array(n),faces:i}}}function Iy(o){const e=o.parameters;return{type:Be.CYLINDER,params:{radiusTop:e.radiusTop,radiusBottom:e.radiusBottom,height:e.height,segments:e.radialSegments},orientation:new ht().setFromEuler(nn.degToRad(-90),0,0,"XYZ").normalize()}}function Dy(o,e){const t=["x","y","z"],n=e.cylinderAxis||"y",i=t.splice(t.indexOf(n),1)&&t,s=new _n().setFromObject(o);if(!isFinite(s.min.lengthSq()))return null;const r=s.max[n]-s.min[n],a=.5*Math.max(Pr(s.max,i[0])-Pr(s.min,i[0]),Pr(s.max,i[1])-Pr(s.min,i[1])),l=n==="y"?Qc:0,c=n==="z"?Qc:0;return{type:Be.CYLINDER,params:{radiusTop:a,radiusBottom:a,height:r,segments:12},orientation:new ht().setFromEuler(l,c,0,"XYZ").normalize()}}function Fy(o){o.computeBoundingBox();const e=o.boundingBox;return{type:Be.BOX,params:{x:(e.max.x-e.min.x)/2||.1,y:(e.max.y-e.min.y)/2||.1,z:(e.max.z-e.min.z)/2||.1}}}function Ny(o){return{type:Be.SPHERE,params:{radius:o.parameters.radius}}}function Uy(o,e){if(e.sphereRadius)return{type:Be.SPHERE,params:{radius:e.sphereRadius}};const t=Gr(o);return t?(t.computeBoundingSphere(),{type:Be.SPHERE,params:{radius:t.boundingSphere.radius}}):null}function By(o){const e=iu(o);if(!e.length)return null;const t=new Uint32Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;return{type:Be.MESH,params:{vertices:e,indices:t}}}function Mt(o,e,t,n=0){const i=t,s=o.quaternion.clone();o.quaternion.set(0,0,0,1);let r;e?r=eh(o,{type:e}):r=eh(o);const{shape:a,offset:l,quaternion:c}=r,h=new _e({mass:n,allowSleep:!1,material:i});return h.addShape(a,l,c),o.quaternion.copy(s),h.position.copy(o.position),h.quaternion.copy(o.quaternion),h}class qo{constructor(e,t,n,i){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.physicsWorld=this.experience.physicsWorld,this.obstacleMaterial=i,this.resource=e.clone(),this.rigidBodiesArray=[],this.meshesArray=[],this.setModel(t,n)}setModel(e,t){this.model=this.resource,this.model.position.set(0,10,0),console.log("modeliii: ",this.model),this.model.traverse(n=>{if(n instanceof Ve){console.log("livere: ",n),n.castShadow=!0,this.meshesArray.push(n);const i=Mt(n,Be.HULL,this.obstacleMaterial,0);console.log("hiiiimmmm: ",this.model.getWorldPosition(n.position)),console.log("hiiiimmmmsss : ",n.position),i.position.copy(this.model.getWorldPosition(n.position)),n.quaternion.copy(i.quaternion),this.rigidBodiesArray.push(i),this.physicsWorld.addBody(i)}this.scene.add(this.model)}),this.playAnimation()}playAnimation(){this.animation=this.model.animations[0],this.mixer=new wv(this.model),this.mixer.clipAction(this.animation).play()}update(){this.mixer.update(this.time.delta*.001);for(let e=0;e<this.rigidBodiesArray.length;e++)this.rigidBodiesArray[e].position.copy(this.meshesArray[e].position),this.rigidBodiesArray[e].quaternion.copy(this.meshesArray[e].quaternion)}}class Oy{constructor(e,t){this.experience=new Ht,this.scene=this.experience.scene,this.time=this.experience.time,this.playerMaterial=e,this.playerContactPathMaterial=t,this.camera=this.experience.camera.instance,this.cameraControls=this.experience.camera.controls,this.physicsWorld=this.experience.physicsWorld,this.physicsWorld.addContactMaterial(this.playerContactPathMaterial),this.meshes=[],this.rigidBodies=[],this.createPlayer(),this.checkCollision()}checkCollision(){this.rigidBodies[0]&&this.rigidBodies[0].addEventListener("collide",e=>{const t=e.body.material.name;t==="health"&&this.updateTail(),t==="gem"&&console.log(e.body),console.log(t)})}moveDirection(e){for(let t=0;t<this.rigidBodies.length;t++)this.rigidBodies[t].position.x=e.x*4}giveVelocity(){for(let e=0;e<this.rigidBodies.length;e++)this.rigidBodies[e].velocity.z=-5,this.rigidBodies[e].velocity.y=-.5}updateTail(){const i=new Ve(new ps(.5,32,32),new _t({color:34559})),s=Mt(i,Be.SPHERE,this.playerMaterial,1);s.position.z=this.rigidBodies[this.rigidBodies.length-1].position.z+1.1,s.position.y=2,i.position.copy(s.position),this.meshes.push(i),this.physicsWorld.addBody(s),this.rigidBodies.push(s),this.scene.add(i)}removeVelocity(){for(let e=0;e<this.rigidBodies.length;e++)this.rigidBodies[e].velocity.z=0,this.rigidBodies[e].velocity.y=0}update(){for(let e=0;e<this.meshes.length;e++)this.meshes[e].position.copy(this.rigidBodies[e].position);this.camera.position.z>-350&&(this.camera.lookAt(0,this.meshes[0].position.y,this.meshes[0].position.z),window.removeEventListener("mousemove",e=>{console.log(e)})),this.giveVelocity(),this.camera.lookAt(this.meshes[0].position)}createPlayer(){let i=new Ve(new ps(.5,32,32),new _t({color:34559}));this.meshes.push(i);const s=Mt(i,Be.SPHERE,this.playerMaterial,2);this.rigidBodies.push(s),this.scene.add(i),s.position.set(0,1,1),i.position.copy(s.position),this.physicsWorld.addBody(s)}}class zy{constructor(){this.experience=new Ht,this.camera=this.experience.camera.instance,this.camera.lookAt(0,0,0),this.mouse=new Te(0,0),this.startGame=!1,this.time=this.experience.time,this.player=this.experience.world.player,this.registerEvents()}registerEvents(){window.addEventListener("touchmove",e=>this.mousemove(e)),window.addEventListener("mousemove",e=>this.mousemove(e)),window.addEventListener("click",()=>{this.startGame||(this.startGame=!0,this.player.giveVelocity())})}mousemove(e){this.startGame===!0&&(this.mouse.x=(e.clientX/window.innerWidth-.5)*2,this.mouse.y=-(e.clientY/window.innerHeight-.5)*2,this.player.moveDirection(this.mouse))}movePlayer(){this.player.position.x=this.mouse.x*4}update(){this.time.delta,this.startGame===!0&&this.player.update()}}class ky{constructor(e,t,n,i){this.experience=new Ht,this.resources=this.experience.resources,this.scene=this.experience.scene,this.endBlockGroup=new on,this.physicsWorld=this.experience.physicsWorld,this.scoreX1Material=n,this.scoreX5Material=i,this.physicsObjects=[],this.winBox=this.resources.items.WinBox,this.winBox.scene.scale.set(.005,.015,.013),this.contructLastBlock(e,t),this.constructWinBox(e),this.scene.add(this.endBlockGroup)}constructWinBox(e){const t=new Pi(new S(2.35,1.5,1.5)),n=new _e({shape:t,mass:0,material:this.scoreX1Material}),i=new _e({shape:t,mass:0,material:this.scoreX5Material});this.physicsWorld.addBody(n),this.physicsWorld.addBody(i);const s=this.winBox.scene.clone();n.position.x=2.5,n.position.y=1.6,n.position.z=e+2.3,s.position.copy(n.position),s.rotation.y=Math.PI/180*90;const r=this.winBox.scene.clone();i.position.x=-2.5,i.position.y=1.6,i.position.z=e+2.3,r.position.copy(i.position),r.rotation.y=Math.PI/180*90,this.scene.add(s,r)}contructLastBlock(e,t){this.wallMaterial=t;const n=this.constructEndWall(10,e),i=this.constructWalls(e),s=this.constructCircularHit(16,e);this.endBlockGroup.add(n,i,s)}constructEndWall(e,t){const r=new Ve(new Dt(10,23,1),new _t({color:16776960})),a=Mt(r,Be.BOX,this.wallMaterial);return a.position.y=e,a.position.z=t,r.position.copy(a.position),this.physicsWorld.addBody(a),r}constructCircularHit(e,t){const a=new Ve(new Jr(1.2,1.2,4,64),new _t({color:14811593})),l=Mt(a,Be.CYLINDER,this.wallMaterial);return l.quaternion.setFromAxisAngle(new S(-1,0,0),Math.PI*.5),l.position.y=e,l.position.z=t,a.position.copy(l.position),a.quaternion.copy(l.quaternion),this.physicsWorld.addBody(l),a}constructWalls(e){const t=new on,n=this.createLeftWall(e),i=this.createRightWall(e),s=this.createBottomWall(e),r=this.createLeftDiagonalWall1(e),a=this.createLeftDiagonalWall2(e),l=this.createRightDiagonalWall1(e),c=this.createRightDiagonalWall2(e);return t.add(n,i,s,r,a,l,c),t}createLeftWall(e){const s=new Ve(new Dt(1,23,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.position.x=-5.5,r.position.y=10,r.position.z=1.5+e,s.position.copy(r.position),this.physicsWorld.addBody(r),s}createRightWall(e){const s=new Ve(new Dt(1,23,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.position.x=5.5,r.position.y=10,r.position.z=1.5+e,s.position.copy(r.position),this.physicsWorld.addBody(r),s}createBottomWall(e){const s=new Ve(new Dt(12,1,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.position.y=-.4,r.position.z=1.5+e,s.position.copy(r.position),this.physicsWorld.addBody(r),s}createLeftDiagonalWall1(e){const s=new Ve(new Dt(4,1,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.quaternion.setFromAxisAngle(new S(0,0,1),Math.PI*.25),r.position.set(-4,11.3,1.5+e),s.position.copy(r.position),s.quaternion.copy(r.quaternion),this.physicsWorld.addBody(r),s}createLeftDiagonalWall2(e){const s=new Ve(new Dt(4,1,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.quaternion.setFromAxisAngle(new S(0,0,1),Math.PI*.75),r.position.set(-4,13.5,1.5+e),s.position.copy(r.position),s.quaternion.copy(r.quaternion),this.physicsWorld.addBody(r),s}createRightDiagonalWall1(e){const s=new Ve(new Dt(4,1,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.quaternion.setFromAxisAngle(new S(0,0,1),Math.PI*.25),r.position.set(4,13.5,1.5+e),s.position.copy(r.position),s.quaternion.copy(r.quaternion),this.physicsWorld.addBody(r),s}createRightDiagonalWall2(e){const s=new Ve(new Dt(4,1,4),new _t({color:15263975})),r=Mt(s,Be.BOX,this.wallMaterial);return r.quaternion.setFromAxisAngle(new S(0,0,1),Math.PI*.75),r.position.set(4,11.3,1.5+e),s.position.copy(r.position),s.quaternion.copy(r.quaternion),this.physicsWorld.addBody(r),s}}class Vy{constructor(e,t,n,i){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.physicsWorld=this.experience.physicsWorld,this.obstacleMaterial=n,this.positionZ=i,this.resource=this.resources.items.ObstacleBowlingPin,this.setUpBallPinsObstacle(e,t)}setUpBallPinsObstacle(e,t){this.ballPins=this.createBallingPins(10,e,t),this.rigids=this.addPhysicsOnBallPins(this.ballPins),this.arrangePinsModel(),this.arrangePinsRigidBodies()}createBallingPins(e,t,n){let i=[],s=this.resource;s.children.pop();for(let r=0;r<e;r++)i.push(s.clone());return i.forEach((r,a)=>{r.scale.set(n.x,n.y,n.z),r.position.set(t.x,t.y,t.z+a),r.rotation.set(Math.PI/-2,0,0)}),i}arrangePinsRigidBodies(){const s=-.5249999999999999,r=-(4-1)*.35*.8;let a=this.rigids.length-1;for(let l=0;l<4;l++)for(let c=0;c<4-l;c++){const h=this.rigids[a],u=-(s+1+c*.35)*2+1,d=(r+l*.35)*2-1;h.position.set(u,.71,d+this.positionZ),this.ballPins[a].position.copy(h.position),this.ballPins[a].position.y=0,a--}}arrangePinsModel(){const e=new on;this.ballPins.forEach(t=>{e.add(t)}),this.scene.add(e)}addPhysicsOnBallPins(e){let t=[];return e.forEach(n=>{const i=Mt(n,Be.BOX,this.obstacleMaterial,1);t.push(i),n.position.copy(i.position),this.physicsWorld.addBody(i)}),t}update(){for(let e=0;e<this.ballPins.length;e++)this.ballPins[e].position.copy(this.rigids[e].position),this.ballPins[e].quaternion.copy(this.rigids[e].quaternion)}}class Hy{constructor(e,t,n,i,s){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.physicsWorld=this.experience.physicsWorld,this.rampMaterial=s,this.resource=e,this.setModel(n,i)}setModel(e,t){this.model=this.resource,this.model.children[0].scale.set(e.x+.02,e.y,e.z);const n=Mt(this.model.children[0],Be.HULL,this.rampMaterial,0);n.quaternion.setFromAxisAngle(new S(0,1,0),Math.PI),n.position.z=t,this.model.children[0].material.color=new Me(10932705),this.model.children[0].position.copy(n.position),this.model.children[0].quaternion.copy(n.quaternion),this.physicsWorld.addBody(n),this.scene.add(this.model)}addPhysicsProperties(e,t){rampObject.quaternion.setFromAxisAngle(new S(1,0,0),Math.PI*1.15),this.scene.add(rampObject),this.model.position.z=-6-t,this.model.quaternion.copy(rampObject.quaternion),this.model.quaternion.setFromAxisAngle(new S(0,1,0),Math.PI),this.physicsWorld.addBody(Mt(rampObject,Be.BOX,this.rampMaterial))}}class Gy{constructor(e,t){this.experience=new Ht,this.physicsWorld=this.experience.physicsWorld,this.scene=this.experience.scene,this.trackLength=e,this.wallMaterial=t,this.constructSideWalls()}constructSideWalls(){const n=this.trackLength,i=10,s=this.constructWallMesh(1,3,n),r=this.constructWallMesh(1,3,n),a=Mt(s,Be.BOX,this.wallMaterial),l=Mt(r,Be.BOX,this.wallMaterial);a.position.set(-i/2-1/2,.4,10+this.trackLength/2),l.position.set(i/2+1/2,.4,10+this.trackLength/2),s.position.copy(a.position),r.position.copy(l.position),this.physicsWorld.addBody(a),this.physicsWorld.addBody(l),this.scene.add(s,r)}constructWallMesh(e,t,n){return new Ve(new Dt(e,t,n),new _t({color:16777215,side:mn}))}}class Wy{constructor(e,t){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.physicsWorld=this.experience.physicsWorld,this.resource=this.resources.items.GemBall,this.gemMaterial=e,this.positionZ=t,this.diamondsMeshes=[],this.diamondsBodies=[],this.createGemBlock(5,new S(0,.25,0))}createGemBalls(e){const n=this.resource.clone().children.shift();this.diamondsMeshes.push(n),n.scale.set(.007,.007,.007),n.position.set(e.x,e.y,e.z);let i=Mt(n,Be.HULL,this.gemMaterial,0);return i.quaternion.setFromAxisAngle(new S(1,0,0),-Math.PI*.5),n.quaternion.copy(i.quaternion),i.quaternion.copy(n.quaternion),this.diamondsBodies.push(i),this.scene.add(n),this.physicsWorld.addBody(i),i}createGemBlock(e,t){let n=1,i=4,s=t.x-5,r=t.y,a=t.z-5+this.positionZ;for(let l=1;l<=e;l++){let c=s;for(let h=1;h<=e;h++){let u=new S(c+n,r,a);this.createGemBalls(u),c=u.x+n}a+=i}}update(){for(let e=0;e<this.diamondsMeshes.length;e++)this.diamondsMeshes[e].position.copy(this.diamondsBodies[e].position),this.diamondsMeshes[e].quaternion.copy(this.diamondsBodies[e].quaternion)}}class Xy{constructor(e,t){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.time=this.experience.time,this.debug=this.experience.debug,this.physicsWorld=this.experience.physicsWorld,this.resource=this.resources.items.HealthBall,this.healthMaterial=e,this.positionZ=t,this.createHealthBallsBlock(5,new S(1.5,.25,0))}createBalls(e){let t=this.resource.clone();t=t.children.shift(),t.scale.set(.007,.007,.007),t.position.set(e.x,e.y,e.z);let n=Mt(t,Be.SPHERE,this.healthMaterial,0);return n.position.y=1,t.position.copy(n.position),t.quaternion.copy(n.quaternion),this.scene.add(t),this.physicsWorld.addBody(n),n}createHealthBallsBlock(e,t){let n=.7,i=2,s=t.x-5,r=t.y,a=t.z-5+this.positionZ;for(let l=1;l<=e;l++){let c=s;for(let h=1;h<=e;h++){console.log("creating daimond");let u=new S(c+n,r,a);this.createBalls(u),c=u.x+n}a+=i}}}class qy{constructor(){this.experience=new Ht,this.scene=this.experience.scene,this.resources=this.experience.resources,this.physicsWorld=this.experience.physicsWorld,this.objectsToUpdate=[],this.resources.on("ready",()=>{this.environment=new _y,this.playerMaterial=new Zt("player"),this.healthMaterial=new Zt("health"),this.pathMaterial=new Zt("path"),this.wallMaterial=new Zt("wall"),this.rampMaterial=new Zt("ramp"),this.gemMaterial=new Zt("gem"),this.obstacleMaterial=new Zt("obstacle"),this.scoreX1Material=new Zt("score1"),this.scoreX5Material=new Zt("score5");const e=20;this.playerContactPathMaterial=new js(this.playerMaterial,this.pathMaterial,{friction:.3,restitution:.1}),this.physicsWorld.addContactMaterial(this.playerContactPathMaterial),this.obstacle1=new Vy(new N(-5,1.8,-7*20),new N(.009,.009,.009),this.obstacleMaterial,-e*4),this.obstacle2=new qo(this.resources.items.ObstacleArmLiverHammer,new N(-4.5,0,-6*20),new N(.009,.009,.009),this.obstacleMaterial),this.obstacle3=new qo(this.resources.items.ObstacleLegLiverHammer,new N(0,0,-10*20),new N(.009,.009,.009),this.obstacleMaterial),this.obstacle4=new qo(this.resources.items.ObstacleLiverAxe,new N(0,0,-14*20),new N(.009,.009,.009),this.obstacleMaterial),this.objectsToUpdate.push(this.obstacle3),this.objectsToUpdate.push(this.obstacle4),this.objectsToUpdate.push(this.obstacle2),this.objectsToUpdate.push(this.obstacle1),this.sideWall=new Gy(-e*20,this.wallMaterial),this.track=new vy(e,this.pathMaterial),this.player=new Oy(this.playerMaterial,this.playerContactPathMaterial),this.ramp=new Hy(this.resources.items.Ramp1,new N(0,0,-3),new N(.03,.03,.03),-19*e,this.rampMaterial),this.gemsBlock=new Wy(this.gemMaterial,-e*12),this.objectsToUpdate.push(this.gemsBlock),this.healthBlock=new Xy(this.healthMaterial,-e*7),this.controls=new zy,this.endBlock=new ky(-e*20+7,this.wallMaterial,this.scoreX1Material,this.scoreX5Material)})}update(){this.controls&&this.controls.update();for(const e in this.objectsToUpdate)this.objectsToUpdate[e]&&this.objectsToUpdate[e].update()}}function ih(o,e){if(e===ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===sa||e===Sh){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const n=t.count-2,i=[];if(e===sa)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}class jy extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jy(t)}),this.register(function(t){return new oM(t)}),this.register(function(t){return new aM(t)}),this.register(function(t){return new lM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new hM(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Hr.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ta(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===su){try{r[je.KHR_BINARY_GLTF]=new uM(e)}catch(u){i&&i(u);return}s=JSON.parse(r[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new bM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:r[u]=new $y;break;case je.KHR_DRACO_MESH_COMPRESSION:r[u]=new dM(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:r[u]=new fM;break;case je.KHR_MESH_QUANTIZATION:r[u]=new pM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(r),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Yy(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ky{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Me(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new La(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ha(h),c.distance=u;break;case"spot":c=new Jh(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class $y{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){const i=[];e.color=new Me(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ee))}return Promise.all(i)}}class Zy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Jy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(a,a)}return Promise.all(s)}}class Qy{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class eM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ee)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class tM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class nM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Me(a[0],a[1],a[2]),Promise.all(s)}}class iM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class sM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Me(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ee)),Promise.all(s)}}class rM{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(s)}}class oM{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class aM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lM{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=i.images[r.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class cM{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class hM{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Qt.TRIANGLES&&c.mode!==Qt.TRIANGLE_STRIP&&c.mode!==Qt.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const _=new ve,g=new N,p=new Lt,v=new N(1,1,1),x=new W_(m.geometry,m.material,d);for(let w=0;w<d;w++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,w),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,w),l.SCALE&&v.fromBufferAttribute(l.SCALE,w),x.setMatrixAt(w,_.compose(g,p,v));for(const w in l)w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&m.geometry.setAttribute(w,l[w]);it.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const su="glTF",Is=12,sh={JSON:1313821514,BIN:5130562};class uM{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Is),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==su)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Is,s=new DataView(e,Is);let r=0;for(;r<i;){const a=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===sh.JSON){const c=new Uint8Array(e,Is+r,a);this.content=n.decode(c)}else if(l===sh.BIN){const c=Is+r;this.body=e.slice(c,c+a)}r+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=fa[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=fa[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=as[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const f in d.attributes){const m=d.attributes[f],_=l[f];_!==void 0&&(m.normalized=_)}u(d)},a,c)})})}}class fM{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class pM{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class ru extends Xs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,g=-2*f+3*d,p=f-d,v=1-g,x=p-d+u;for(let w=0;w!==a;w++){const M=r[_+w+a],b=r[_+w+l]*h,C=r[m+w+a],R=r[m+w]*h;s[w]=v*M+x*b+g*C+p*R}return s}}const mM=new Lt;class gM extends ru{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return mM.fromArray(s).normalize().toArray(s),s}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},as={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rh={9728:Ct,9729:Xt,9984:ia,9985:vh,9986:Dr,9987:Ti},oh={33071:qt,33648:Ur,10497:An},jo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_M={CUBICSPLINE:void 0,LINEAR:us,STEP:ks},Yo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vM(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Ws({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xn})),o.DefaultMaterial}function xi(o,e,t){for(const n in t.extensions)o[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xM(o,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(o.morphAttributes.position=h),i&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function yM(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)o.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MM(o){let e;const t=o.extensions&&o.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ko(t.attributes):e=o.indices+":"+Ko(o.attributes)+":"+o.mode,o.targets!==void 0)for(let n=0,i=o.targets.length;n<i;n++)e+=":"+Ko(o.targets[n]);return e}function Ko(o){let e="";const t=Object.keys(o).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+o[t[n]]+";";return e}function pa(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function wM(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const EM=new ve;class bM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Yy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Ra(this.options.manager):this.textureLoader=new cv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const a={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};xi(s,a,i),ti(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Hr.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=jo[i.type],a=as[i.componentType],l=i.normalized===!0,c=new a(i.count*r);return Promise.resolve(new Ft(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=jo[i.type],c=as[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(f&&f!==u){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new c(a,p*f,i.count*f/h),x=new z_(_,f/h),t.cache.add(v,x)),g=new Sa(x,l,d%f/h,m)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),g=new Ft(_,l,m);if(i.sparse!==void 0){const p=jo.SCALAR,v=as[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,w=i.sparse.values.byteOffset||0,M=new v(r[1],x,i.sparse.count*p),b=new c(r[2],w,i.sparse.count*l);a!==null&&(g=new Ft(g.array.slice(),g.itemSize,g.normalized));for(let C=0,R=M.length;C<R;C++){const y=M[C];if(g.setX(y,b[C*l]),l>=2&&g.setY(y,b[C*l+1]),l>=3&&g.setZ(y,b[C*l+2]),l>=4&&g.setW(y,b[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=rh[d.magFilter]||Xt,h.minFilter=rh[d.minFilter]||Ti,h.wrapS=oh[d.wrapS]||An,h.wrapT=oh[d.wrapT]||An,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=i.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){const g=new wt(_);g.needsUpdate=!0,d(g)}),t.load(Hr.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||wM(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new qh,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Aa,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||r){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ws}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=i[je.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Me(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ee)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=mn);const h=s.alphaMode||Yo.OPAQUE;if(h===Yo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Yo.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==_t&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Te(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==_t&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==_t&&(a.emissive=new Me().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==_t&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ee)),Promise.all(c).then(function(){const u=new r(a);return s.name&&(u.name=s.name),ti(u,s),t.associations.set(u,{materials:e}),s.extensions&&xi(i,u,s),u})}createUniqueName(e){const t=Ke.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ah(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=MM(c),u=i[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=ah(new Pt,c,t),i[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?vM(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const _=h[f],g=r[f];let p;const v=c[f];if(g.mode===Qt.TRIANGLES||g.mode===Qt.TRIANGLE_STRIP||g.mode===Qt.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Xh(_,v):new Ve(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Qt.TRIANGLE_STRIP?p.geometry=ih(p.geometry,Sh):g.mode===Qt.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,sa));else if(g.mode===Qt.LINES)p=new X_(_,v);else if(g.mode===Qt.LINE_STRIP)p=new Zr(_,v);else if(g.mode===Qt.LINE_LOOP)p=new q_(_,v);else if(g.mode===Qt.POINTS)p=new j_(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&yM(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ti(p,s),g.extensions&&xi(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&xi(i,u[0],s),u[0];const d=new on;s.extensions&&xi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(nn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Yr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,a=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){a.push(u);const d=new ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $r(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],r=[],a=[],l=[],c=[];for(let h=0,u=n.channels.length;h<u;h++){const d=n.channels[h],f=n.samplers[d.sampler],m=d.target,_=m.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,p=n.parameters!==void 0?n.parameters[f.output]:f.output;m.node!==void 0&&(s.push(this.getDependency("node",_)),r.push(this.getDependency("accessor",g)),a.push(this.getDependency("accessor",p)),l.push(f),c.push(m))}return Promise.all([Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l),Promise.all(c)]).then(function(h){const u=h[0],d=h[1],f=h[2],m=h[3],_=h[4],g=[];for(let p=0,v=u.length;p<v;p++){const x=u[p],w=d[p],M=f[p],b=m[p],C=_[p];if(x===void 0)continue;x.updateMatrix();let R;switch(Jn[C.path]){case Jn.weights:R=ms;break;case Jn.rotation:R=oi;break;case Jn.position:case Jn.scale:default:R=gs;break}const y=x.name?x.name:x.uuid,E=b.interpolation!==void 0?_M[b.interpolation]:us,B=[];Jn[C.path]===Jn.weights?x.traverse(function(A){A.morphTargetInfluences&&B.push(A.name?A.name:A.uuid)}):B.push(y);let z=M.array;if(M.normalized){const A=pa(z.constructor),I=new Float32Array(z.length);for(let D=0,U=z.length;D<U;D++)I[D]=z[D]*A;z=I}for(let A=0,I=B.length;A<I;A++){const D=new R(B[A]+"."+Jn[C.path],w.array,z,E);b.interpolation==="CUBICSPLINE"&&(D.createInterpolant=function(V){const G=this instanceof oi?gM:ru;return new G(this.times,this.values,this.getValueSize()/3,V)},D.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(D)}}return new Vr(i,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)r.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,EM)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new kr:c.length>1?h=new on:c.length===1?h=c[0]:h=new it,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=r),ti(h,s),s.extensions&&xi(n,h,s),s.matrix!==void 0){const u=new ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new on;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&xi(t,s,n);const r=n.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(i.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof an||d instanceof wt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(s),s})}}function SM(o,e,t){const n=e.attributes,i=new _n;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const h=pa(as[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const _=pa(as[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}o.boundingBox=i;const r=new Rn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,o.boundingSphere=r}function ah(o,e,t){const n=e.attributes,i=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in n){const a=fa[r]||r.toLowerCase();a in o.attributes||i.push(s(n[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});i.push(r)}return ti(o,e),SM(o,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xM(o,e.targets,t):o})}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var lh=function(o){return URL.createObjectURL(new Blob([o],{type:"text/javascript"}))};try{URL.revokeObjectURL(lh(""))}catch{lh=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var sn=Uint8Array,ii=Uint16Array,ma=Uint32Array,ou=new sn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),au=new sn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),AM=new sn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),lu=function(o,e){for(var t=new ii(31),n=0;n<31;++n)t[n]=e+=1<<o[n-1];for(var i=new ma(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return[t,i]},cu=lu(ou,2),hu=cu[0],TM=cu[1];hu[28]=258,TM[258]=28;var RM=lu(au,0),CM=RM[0],ga=new ii(32768);for(var rt=0;rt<32768;++rt){var Qn=(rt&43690)>>>1|(rt&21845)<<1;Qn=(Qn&52428)>>>2|(Qn&13107)<<2,Qn=(Qn&61680)>>>4|(Qn&3855)<<4,ga[rt]=((Qn&65280)>>>8|(Qn&255)<<8)>>>1}var Os=function(o,e,t){for(var n=o.length,i=0,s=new ii(e);i<n;++i)++s[o[i]-1];var r=new ii(e);for(i=0;i<e;++i)r[i]=r[i-1]+s[i-1]<<1;var a;if(t){a=new ii(1<<e);var l=15-e;for(i=0;i<n;++i)if(o[i])for(var c=i<<4|o[i],h=e-o[i],u=r[o[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[ga[u]>>>l]=c}else for(a=new ii(n),i=0;i<n;++i)o[i]&&(a[i]=ga[r[o[i]-1]++]>>>15-o[i]);return a},Ys=new sn(288);for(var rt=0;rt<144;++rt)Ys[rt]=8;for(var rt=144;rt<256;++rt)Ys[rt]=9;for(var rt=256;rt<280;++rt)Ys[rt]=7;for(var rt=280;rt<288;++rt)Ys[rt]=8;var uu=new sn(32);for(var rt=0;rt<32;++rt)uu[rt]=5;var LM=Os(Ys,9,1),PM=Os(uu,5,1),$o=function(o){for(var e=o[0],t=1;t<o.length;++t)o[t]>e&&(e=o[t]);return e},pn=function(o,e,t){var n=e/8|0;return(o[n]|o[n+1]<<8)>>(e&7)&t},Zo=function(o,e){var t=e/8|0;return(o[t]|o[t+1]<<8|o[t+2]<<16)>>(e&7)},IM=function(o){return(o/8|0)+(o&7&&1)},DM=function(o,e,t){(e==null||e<0)&&(e=0),(t==null||t>o.length)&&(t=o.length);var n=new(o instanceof ii?ii:o instanceof ma?ma:sn)(t-e);return n.set(o.subarray(e,t)),n},FM=function(o,e,t){var n=o.length;if(!n||t&&!t.l&&n<5)return e||new sn(0);var i=!e||t,s=!t||t.i;t||(t={}),e||(e=new sn(n*3));var r=function(he){var ye=e.length;if(he>ye){var De=new sn(Math.max(ye*2,he));De.set(e),e=De}},a=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,d=t.m,f=t.n,m=n*8;do{if(!h){t.f=a=pn(o,l,1);var _=pn(o,l+1,3);if(l+=3,_)if(_==1)h=LM,u=PM,d=9,f=5;else if(_==2){var x=pn(o,l,31)+257,w=pn(o,l+10,15)+4,M=x+pn(o,l+5,31)+1;l+=14;for(var b=new sn(M),C=new sn(19),R=0;R<w;++R)C[AM[R]]=pn(o,l+R*3,7);l+=w*3;for(var y=$o(C),E=(1<<y)-1,B=Os(C,y,1),R=0;R<M;){var z=B[pn(o,l,E)];l+=z&15;var g=z>>>4;if(g<16)b[R++]=g;else{var A=0,I=0;for(g==16?(I=3+pn(o,l,3),l+=2,A=b[R-1]):g==17?(I=3+pn(o,l,7),l+=3):g==18&&(I=11+pn(o,l,127),l+=7);I--;)b[R++]=A}}var D=b.subarray(0,x),U=b.subarray(x);d=$o(D),f=$o(U),h=Os(D,d,1),u=Os(U,f,1)}else throw"invalid block type";else{var g=IM(l)+4,p=o[g-4]|o[g-3]<<8,v=g+p;if(v>n){if(s)throw"unexpected EOF";break}i&&r(c+p),e.set(o.subarray(g,v),c),t.b=c+=p,t.p=l=v*8;continue}if(l>m){if(s)throw"unexpected EOF";break}}i&&r(c+131072);for(var V=(1<<d)-1,G=(1<<f)-1,Y=l;;Y=l){var A=h[Zo(o,l)&V],Z=A>>>4;if(l+=A&15,l>m){if(s)throw"unexpected EOF";break}if(!A)throw"invalid length/literal";if(Z<256)e[c++]=Z;else if(Z==256){Y=l,h=null;break}else{var ae=Z-254;if(Z>264){var R=Z-257,O=ou[R];ae=pn(o,l,(1<<O)-1)+hu[R],l+=O}var Q=u[Zo(o,l)&G],te=Q>>>4;if(!Q)throw"invalid distance";l+=Q&15;var U=CM[te];if(te>3){var O=au[te];U+=Zo(o,l)&(1<<O)-1,l+=O}if(l>m){if(s)throw"unexpected EOF";break}i&&r(c+131072);for(var le=c+ae;c<le;c+=4)e[c]=e[c-U],e[c+1]=e[c+1-U],e[c+2]=e[c+2-U],e[c+3]=e[c+3-U];c=le}}t.l=h,t.p=Y,t.b=c,h&&(a=1,t.m=d,t.d=u,t.n=f)}while(!a);return c==e.length?e:DM(e,0,c)},NM=new sn(0),UM=function(o){if((o[0]&15)!=8||o[0]>>>4>7||(o[0]<<8|o[1])%31)throw"invalid zlib data";if(o[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function BM(o,e){return FM((UM(o),o.subarray(2,-4)),e)}var OM=typeof TextDecoder<"u"&&new TextDecoder,zM=0;try{OM.decode(NM,{stream:!0}),zM=1}catch{}function du(o,e,t){const n=t.length-o-1;if(e>=t[n])return n-1;if(e<=t[o])return o;let i=o,s=n,r=Math.floor((i+s)/2);for(;e<t[r]||e>=t[r+1];)e<t[r]?s=r:i=r,r=Math.floor((i+s)/2);return r}function kM(o,e,t,n){const i=[],s=[],r=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[o+1-a],r[a]=n[o+a]-e;let l=0;for(let c=0;c<a;++c){const h=r[c+1],u=s[a-c],d=i[c]/(h+u);i[c]=l+h*d,l=u*d}i[a]=l}return i}function VM(o,e,t,n){const i=du(o,n,e),s=kM(i,n,o,e),r=new Qe(0,0,0,0);for(let a=0;a<=o;++a){const l=t[i-o+a],c=s[a],h=l.w*c;r.x+=l.x*h,r.y+=l.y*h,r.z+=l.z*h,r.w+=l.w*c}return r}function HM(o,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const r=[];for(let u=0;u<=n;++u)r[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[o+1-u],c[u]=i[o+u]-e;let d=0;for(let f=0;f<u;++f){const m=c[f+1],_=l[u-f];a[u][f]=m+_;const g=a[f][u-1]/a[u][f];a[f][u]=d+m*g,d=_*g}a[u][u]=d}for(let u=0;u<=t;++u)r[0][u]=a[u][t];for(let u=0;u<=t;++u){let d=0,f=1;const m=[];for(let _=0;_<=t;++_)m[_]=s.slice(0);m[0][0]=1;for(let _=1;_<=n;++_){let g=0;const p=u-_,v=t-_;u>=_&&(m[f][0]=m[d][0]/a[v+1][p],g=m[f][0]*a[p][v]);const x=p>=-1?1:-p,w=u-1<=v?_-1:t-u;for(let b=x;b<=w;++b)m[f][b]=(m[d][b]-m[d][b-1])/a[v+1][p+b],g+=m[f][b]*a[p+b][v];u<=v&&(m[f][_]=-m[d][_-1]/a[v+1][u],g+=m[f][_]*a[u][v]),r[_][u]=g;const M=d;d=f,f=M}}let h=t;for(let u=1;u<=n;++u){for(let d=0;d<=t;++d)r[u][d]*=h;h*=t-u}return r}function GM(o,e,t,n,i){const s=i<o?i:o,r=[],a=du(o,n,e),l=HM(a,n,o,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-o].clone().multiplyScalar(l[h][0]);for(let d=1;d<=o;++d)u.add(c[a-o+d].clone().multiplyScalar(l[h][d]));r[h]=u}for(let h=s+1;h<=i+1;++h)r[h]=new Qe(0,0,0);return r}function WM(o,e){let t=1;for(let i=2;i<=o;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=o-e;++i)n*=i;return t/n}function XM(o){const e=o.length,t=[],n=[];for(let s=0;s<e;++s){const r=o[s];t[s]=new N(r.x,r.y,r.z),n[s]=r.w}const i=[];for(let s=0;s<e;++s){const r=t[s].clone();for(let a=1;a<=s;++a)r.sub(i[s-a].clone().multiplyScalar(WM(s,a)*n[a]));i[s]=r.divideScalar(n[0])}return i}function qM(o,e,t,n,i){const s=GM(o,e,t,n,i);return XM(s)}class jM extends Y_{constructor(e,t,n,i,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||this.knots.length-1;for(let r=0;r<n.length;++r){const a=n[r];this.controlPoints[r]=new Qe(a.x,a.y,a.z,a.w)}}getPoint(e,t=new N){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=VM(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new N){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=qM(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}}let We,ft,Wt;class YM extends Li{constructor(e){super(e)}load(e,t,n,i){const s=this,r=s.path===""?Hr.extractUrlBase(e):s.path,a=new Ta(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,r))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(ew(e))We=new QM().parse(e);else{const i=gu(e);if(!tw(i))throw new Error("THREE.FBXLoader: Unknown format.");if(hh(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+hh(i));We=new JM().parse(i)}const n=new Ra(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new KM(n,this.manager).parse(We)}}class KM{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){ft=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new $M().parse(i);return this.parseScene(i,s,n),Wt}parseConnections(){const e=new Map;return"Connections"in We&&We.Connections.connections.forEach(function(n){const i=n[0],s=n[1],r=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:r};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:r};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in We.Objects){const n=We.Objects.Video;for(const i in n){const s=n[i],r=parseInt(i);if(e[r]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const r=new Uint8Array(t);return window.URL.createObjectURL(new Blob([r],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in We.Objects){const n=We.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,r=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=r===0?An:qt,n.wrapT=a===0?An:qt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const i=this.textureLoader.path,s=ft.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let r;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),r=new wt):(l.setPath(this.textureLoader.path),r=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),r=new wt):r=this.textureLoader.load(n);return this.textureLoader.setPath(i),r}parseMaterials(e){const t=new Map;if("Material"in We.Objects){const n=We.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!ft.has(n))return null;const r=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new Uo;break;case"lambert":a=new K_;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Uo;break}return a.setValues(r),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=new Me().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=new Me().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=new Me().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=new Me().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(i.opacity=parseFloat(e.Opacity.value)),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=new Me().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=new Me().fromArray(e.SpecularColor.value).convertSRGBToLinear());const s=this;return ft.get(n).children.forEach(function(r){const a=r.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,r.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,r.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,r.ID),i.map!==void 0&&(i.map.colorSpace=Ee);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,r.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,r.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Ee);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,r.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,r.ID),i.envMap!==void 0&&(i.envMap.mapping=Nr,i.envMap.colorSpace=Ee);break;case"SpecularColor":i.specularMap=s.getTexture(t,r.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Ee);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,r.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in We.Objects&&t in We.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=ft.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in We.Objects){const n=We.Objects.Deformer;for(const i in n){const s=n[i],r=ft.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(r,n);a.ID=i,r.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=r.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(r,n),a.id=i,r.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const r={ID:i.ID,indices:[],weights:[],transformLink:new ve().fromArray(s.TransformLink.a)};"Indexes"in s&&(r.indices=s.Indexes.a,r.weights=s.Weights.a),n.push(r)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],r=t[s.ID],a={name:r.attrName,initialWeight:r.DeformPercent,id:r.id,fullWeights:r.FullWeights.a};if(r.attrType!=="BlendShapeChannel")return;a.geoID=ft.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Wt=new on;const i=this.parseModels(e.skeletons,t,n),s=We.Objects.Model,r=this;i.forEach(function(l){const c=s[l.ID];r.setLookAtProperties(l,c),ft.get(l.ID).parents.forEach(function(u){const d=i.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&Wt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.createAmbientLight(),Wt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=pu(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new ZM().parse();Wt.children.length===1&&Wt.children[0].isGroup&&(Wt.children[0].animations=a,Wt=Wt.children[0]),Wt.animations=a}parseModels(e,t,n){const i=new Map,s=We.Objects.Model;for(const r in s){const a=parseInt(r),l=s[r],c=ft.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new kr;break;case"Null":default:h=new on;break}h.name=l.attrName?Ke.sanitizeNodeName(l.attrName):"",h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(r){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===r.ID){const u=s;s=new kr,s.matrixWorld.copy(c.transformLink),s.name=i?Ke.sanitizeNodeName(i):"",s.ID=n,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=We.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new it;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let r=1e3;n.FarPlane!==void 0&&(r=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Bt(h,c,s,r),u!==null&&t.setFocalLength(u);break;case 1:t=new Yr(-a/2,a/2,l/2,-l/2,s,r);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new it;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=We.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new it;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Me().fromArray(n.Color.value).convertSRGBToLinear());let r=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(r=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new ha(s,r,a,l);break;case 1:t=new La(s,r);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=nn.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=nn.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new Jh(s,r,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new ha(s,r);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,r=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?r=a:a.length>0?r=a[0]:(r=new Uo({color:13421772}),a.push(r)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(i=new Xh(s,r),i.normalizeSkinWeights()):i=new Ve(s,r),i}createCurve(e,t){const n=e.children.reduce(function(s,r){return t.has(r.ID)&&(s=t.get(r.ID)),s},null),i=new Aa({color:3342591,linewidth:1});return new Zr(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=mu(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&ft.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=We.Objects.Model[i.ID];if("Lcl_Translation"in s){const r=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(r),Wt.add(e.target)):e.lookAt(new N().fromArray(r))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const r=e[s];ft.get(parseInt(r.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;ft.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new $r(r.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in We.Objects){const t=We.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new ve().fromArray(s.Matrix.a)}):e[i.Node]=new ve().fromArray(i.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in We&&"AmbientColor"in We.GlobalSettings){const e=We.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Me(t,n,i).convertSRGBToLinear();Wt.add(new Qh(s,1))}}}}class $M{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in We.Objects){const n=We.Objects.Geometry;for(const i in n){const s=ft.get(parseInt(i)),r=this.parseGeometry(s,n[i],e);t.set(parseInt(i),r)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],r=e.parents.map(function(u){return We.Objects.Model[u.ID]});if(r.length===0)return;const a=e.children.reduce(function(u,d){return i[d.ID]!==void 0&&(u=i[d.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=r[0],c={};"RotationOrder"in l&&(c.eulerOrder=mu(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=pu(c);return this.genGeometry(t,a,s,h)}genGeometry(e,t,n,i){const s=new Pt;e.attrName&&(s.name=e.attrName);const r=this.parseGeoNode(e,t),a=this.genBuffers(r),l=new at(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new at(a.colors,3)),t&&(s.setAttribute("skinIndex",new Ma(a.weightsIndices,4)),s.setAttribute("skinWeight",new at(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new ze().getNormalMatrix(i),h=new at(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;s.setAttribute(u,new at(a.uvs[h],2))}),r.material&&r.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,d){u!==c&&(s.addGroup(h,d-h,c),c=u,h=d)}),s.groups.length>0){const u=s.groups[s.groups.length-1],d=u.start+u.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(r,a){n.weightTable[r]===void 0&&(n.weightTable[r]=[]),n.weightTable[r].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,r=[],a=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,m){let _,g=!1;f<0&&(f=f^-1,g=!0);let p=[],v=[];if(r.push(f*3,f*3+1,f*3+2),e.color){const x=Ir(m,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){v.push(x.weight),p.push(x.id)}),v.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],w=[0,0,0,0];v.forEach(function(M,b){let C=M,R=p[b];w.forEach(function(y,E,B){if(C>y){B[E]=C,C=y;const z=x[E];x[E]=R,R=z}})}),p=x,v=w}for(;v.length<4;)v.push(0),p.push(0);for(let x=0;x<4;++x)h.push(v[x]),u.push(p[x])}if(e.normal){const x=Ir(m,n,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=Ir(m,n,f,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(x,w){const M=Ir(m,n,f,x);c[w]===void 0&&(c[w]=[]),c[w].push(M[0]),c[w].push(M[1])}),i++,g&&(i>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),d.genFace(t,e,r,_,a,l,c,h,u,i),n++,i=0,r=[],a=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,n,i,s,r,a,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(u-1)*3]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[n[u*3]]),e.vertex.push(t.vertexPositions[n[u*3+1]]),e.vertex.push(t.vertexPositions[n[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(r[0]),e.colors.push(r[1]),e.colors.push(r[2]),e.colors.push(r[(u-1)*3]),e.colors.push(r[(u-1)*3+1]),e.colors.push(r[(u-1)*3+2]),e.colors.push(r[u*3]),e.colors.push(r[u*3+1]),e.colors.push(r[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(u-1)*3]),e.normal.push(s[(u-1)*3+1]),e.normal.push(s[(u-1)*3+2]),e.normal.push(s[u*3]),e.normal.push(s[u*3+1]),e.normal.push(s[u*3+2])),t.uv&&t.uv.forEach(function(d,f){e.uvs[f]===void 0&&(e.uvs[f]=[]),e.uvs[f].push(a[f][0]),e.uvs[f].push(a[f][1]),e.uvs[f].push(a[f][(u-1)*2]),e.uvs[f].push(a[f][(u-1)*2+1]),e.uvs[f].push(a[f][u*2]),e.uvs[f].push(a[f][u*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(r){r.rawTargets.forEach(function(a){const l=We.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const r=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let m=0;m<l.length;m++){const _=l[m]*3;h[_]=a[m*3],h[_+1]=a[m*3+1],h[_+2]=a[m*3+2]}const u={vertexIndices:r,vertexPositions:h},d=this.genBuffers(u),f=new at(d.vertex,3);f.name=s||n.attrName,f.applyMatrix4(i),e.morphAttributes.position.push(f)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let r=0,a=new Me;r<i.length;r+=4)a.fromArray(i,r).convertSRGBToLinear().toArray(i,r);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let r=0;r<i.length;++r)s.push(r);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Pt;const n=t-1,i=e.KnotVector.a,s=[],r=e.Points.a;for(let u=0,d=r.length;u<d;u+=4)s.push(new Qe().fromArray(r,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)s.push(s[u])}const h=new jM(n,i,s,a,l).getPoints(s.length*12);return new Pt().setFromPoints(h)}}class ZM{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(We.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=We.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=We.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(nw),values:t[n].KeyValueFloat.a},s=ft.get(i.id);if(s!==void 0){const r=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(r).curves.x=i:a.match(/Y/)?e.get(r).curves.y=i:a.match(/Z/)?e.get(r).curves.z=i:a.match(/DeformPercent/)&&e.has(r)&&(e.get(r).curves.morph=i)}}}parseAnimationLayers(e){const t=We.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],r=ft.get(parseInt(i));r!==void 0&&(r.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=ft.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=We.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?Ke.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Wt.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new ve),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=ft.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,d=ft.get(u).parents[0].ID,f=ft.get(d).parents[0].ID,m=ft.get(f).parents[0].ID,_=We.Objects.Model[m],g={modelName:_.attrName?Ke.sanitizeNodeName(_.attrName):"",morphName:We.Objects.Deformer[u].attrName};s[c]=g}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=We.Objects.AnimationStack,n={};for(const i in t){const s=ft.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const r=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:r}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Vr(e.name,-1,t)}generateTracks(e){const t=[];let n=new N,i=new Lt,s=new N;if(e.transform&&e.transform.decompose(n,i,s),n=n.toArray(),i=new rn().setFromQuaternion(i,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,i,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),r=this.getKeyframeTrackValues(s,t,n);return new gs(e+"."+i,s,r)}generateRotationTrack(e,t,n,i,s,r){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(nn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(nn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(nn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);i!==void 0&&(i=i.map(nn.degToRad),i.push(r),i=new rn().fromArray(i),i=new Lt().setFromEuler(i)),s!==void 0&&(s=s.map(nn.degToRad),s.push(r),s=new rn().fromArray(s),s=new Lt().setFromEuler(s).invert());const c=new Lt,h=new rn,u=[];for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],r),c.setFromEuler(h),i!==void 0&&c.premultiply(i),s!==void 0&&c.multiply(s),c.toArray(u,d/3*4);return new oi(e+".quaternion",a,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=Wt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new ms(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const r=t[s];r!==i&&(t[n]=r,i=r,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let r=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(r=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),r!==-1){const h=t.x.values[r];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=t.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=t.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],i=e.values[t]-n,s=Math.abs(i);if(s>=180){const r=s/180,a=i/r;let l=n+a;const c=e.times[t-1],u=(e.times[t]-c)/r;let d=c+u;const f=[],m=[];for(;d<e.times[t];)f.push(d),d+=u,m.push(l),l+=a;e.times=uh(e.times,t,f),e.values=uh(e.values,t,m)}}}}class JM{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new fu,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const r=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(r||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},r=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),r.id!==""&&(a[n][r.id]=s)):typeof r.id=="number"?(a[n]={},a[n][r.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof r.id=="number"&&(s.id=r.id),r.name!==""&&(s.attrName=r.name),r.type!==""&&(s.attrType=r.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const r=this.getCurrentNode();if(r.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[c,h],sw(s,u),r[i]===void 0&&(r[i]=[])}i==="Node"&&(r.id=s),i in r&&Array.isArray(r[i])?r[i].push(s):i!=="a"?r[i]=s:r.a=s,this.setCurrentProp(r,i),i==="a"&&s.slice(-1)!==","&&(r.a=Qo(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Qo(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],r=i[1],a=i[2],l=i[3];let c=i[4];switch(r){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Qo(c);break}this.getPrevNode()[s]={type:r,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class QM{parse(e){const t=new ch(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new fu;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const r=e.getUint8(),a=e.getString(r);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,r){r!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const r=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:r,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),r=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=BM(new Uint8Array(e.getArrayBuffer(r))),l=new ch(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class ch{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class fu{add(e,t){this[e]=t}}function ew(o){const e="Kaydara FBX Binary  \0";return o.byteLength>=e.length&&e===gu(o,0,e.length)}function tw(o){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=o[i-1];return o=o.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function hh(o){const e=/FBXVersion: (\d+)/,t=o.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function nw(o){return o/46186158e3}const iw=[];function Ir(o,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=o;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,r=s+n.dataSize;return rw(iw,n.buffer,s,r)}const Jo=new rn,es=new N;function pu(o){const e=new ve,t=new ve,n=new ve,i=new ve,s=new ve,r=new ve,a=new ve,l=new ve,c=new ve,h=new ve,u=new ve,d=new ve,f=o.inheritType?o.inheritType:0;if(o.translation&&e.setPosition(es.fromArray(o.translation)),o.preRotation){const E=o.preRotation.map(nn.degToRad);E.push(o.eulerOrder||rn.DEFAULT_ORDER),t.makeRotationFromEuler(Jo.fromArray(E))}if(o.rotation){const E=o.rotation.map(nn.degToRad);E.push(o.eulerOrder||rn.DEFAULT_ORDER),n.makeRotationFromEuler(Jo.fromArray(E))}if(o.postRotation){const E=o.postRotation.map(nn.degToRad);E.push(o.eulerOrder||rn.DEFAULT_ORDER),i.makeRotationFromEuler(Jo.fromArray(E)),i.invert()}o.scale&&s.scale(es.fromArray(o.scale)),o.scalingOffset&&a.setPosition(es.fromArray(o.scalingOffset)),o.scalingPivot&&r.setPosition(es.fromArray(o.scalingPivot)),o.rotationOffset&&l.setPosition(es.fromArray(o.rotationOffset)),o.rotationPivot&&c.setPosition(es.fromArray(o.rotationPivot)),o.parentMatrixWorld&&(u.copy(o.parentMatrix),h.copy(o.parentMatrixWorld));const m=t.clone().multiply(n).multiply(i),_=new ve;_.extractRotation(h);const g=new ve;g.copyPosition(h);const p=g.clone().invert().multiply(h),v=_.clone().invert().multiply(p),x=s,w=new ve;if(f===0)w.copy(_).multiply(m).multiply(v).multiply(x);else if(f===1)w.copy(_).multiply(v).multiply(m).multiply(x);else{const B=new ve().scale(new N().setFromMatrixScale(u)).clone().invert(),z=v.clone().multiply(B);w.copy(_).multiply(m).multiply(z).multiply(x)}const M=c.clone().invert(),b=r.clone().invert();let C=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(M).multiply(a).multiply(r).multiply(s).multiply(b);const R=new ve().copyPosition(C),y=h.clone().multiply(R);return d.copyPosition(y),C=d.clone().multiply(w),C.premultiply(h.invert()),C}function mu(o){o=o||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return o===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[o]}function Qo(o){return o.split(",").map(function(t){return parseFloat(t)})}function gu(o,e,t){return e===void 0&&(e=0),t===void 0&&(t=o.byteLength),new TextDecoder().decode(new Uint8Array(o,e,t))}function sw(o,e){for(let t=0,n=o.length,i=e.length;t<i;t++,n++)o[n]=e[t]}function rw(o,e,t,n){for(let i=t,s=0;i<n;i++,s++)o[s]=e[i];return o}function uh(o,e,t){return o.slice(0,e).concat(t).concat(o.slice(e))}class ow extends Ua{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new jy,this.loaders.fbxLoader=new YM,this.loaders.textureLoader=new Ra,this.loaders.cubeTextureLoader=new rv}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="fbxModel"?this.loaders.fbxLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"&&this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad&&this.trigger("ready")}}const aw=[{name:"environmentMapTexture",type:"cubeTexture",path:["textures/environmentMap/px.jpg","textures/environmentMap/nx.jpg","textures/environmentMap/py.jpg","textures/environmentMap/ny.jpg","textures/environmentMap/pz.jpg","textures/environmentMap/nz.jpg"]},{name:"grassColorTexture",type:"texture",path:"textures/dirt/color.jpg"},{name:"grassNormalTexture",type:"texture",path:"textures/dirt/normal.jpg"},{name:"trackTexture",type:"texture",path:"textures/TrackTexture/WoodenTrack.jpg"},{name:"ObstacleArmLiverHammer",type:"fbxModel",path:"models/Obstacle/HammerOneSideAnimation.fbx"},{name:"ObstacleLegLiverHammer",type:"fbxModel",path:"models/Obstacle/HammerBothSide.fbx"},{name:"ObstacleLiverAxe",type:"fbxModel",path:"models/Obstacle/KnifeOneSideAnimation.fbx"},{name:"ObstacleBowlingPin",type:"fbxModel",path:"models/Obstacle/BowlingPin.FBX"},{name:"WinBox",type:"gltfModel",path:"models/wooden_box.glb"},{name:"Ramp1",type:"fbxModel",path:"models/Ramps/Ramp1.fbx"},{name:"Ramp2",type:"fbxModel",path:"models/Ramps/Ramp2.fbx"},{name:"Ramp3",type:"fbxModel",path:"models/Ramps/Ramp3.fbx"},{name:"Gem",type:"fbxModel",path:"models/Gem.FBX"},{name:"GemBall",type:"fbxModel",path:"models/Gem.FBX"},{name:"HealthBall",type:"fbxModel",path:"models/Ball.FBX"},{name:"groundTexture",type:"texture",path:"textures/ground.png"}];let ea=null;class Ht{constructor(e){if(ea)return ea;ea=this,window.experience=this,this.canvas=e,this.debug=new uy,this.sizes=new dy,this.time=new fy,this.scene=new O_,this.resources=new ow(aw),this.camera=new my,this.renderer=new gy,this.physicsWorld=new nu({gravity:new S(0,-.1,0)}),this.world=new qy,this.cannonDebugger=new Jx(this.scene,this.physicsWorld),this.sizes.on("resize",()=>{this.resize()}),this.time.on("tick",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){const e=this.time.delta;this.camera.update(),this.physicsWorld.step(1/60,e,3),this.world.update(),this.cannonDebugger.update(),this.renderer.update()}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse(e=>{if(e instanceof Ve){e.geometry.dispose();for(const t in e.material){const n=e.material[t];n&&typeof n.dispose=="function"&&n.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new Ht(document.querySelector("canvas.webgl"));
//# sourceMappingURL=index-320cc59d.js.map
