/*
	UIZE JAVASCRIPT FRAMEWORK 2011-05-31

	http://www.uize.com/reference/Uize.html
	Available under MIT License or GNU General Public License -- http://www.uize.com/license.html
*/
(function(){var _a,_b='string',_c='object',_d='number',_e='boolean',_f=Function,_g=false,_h=true,_i=null;var _j=0,_k=[],_l={},_m={string:1,number:1,'boolean':1},_n='[#modulePath]',_o;function _p(_q){if(_q==_a)return _q;var _r=typeof _q;if(_r==_b||_r==_d||_r==_e||_s(_q))return _q;var _t=_q.constructor;if(_t==RegExp||_t==Date||_t==String||_t==Number||_t==Boolean)return new _t(_q.valueOf());var _u=_t==Object,_v= !_u&&_w(_q);if(_u||_v){var _x,_y,_z=_u?{}:[];if(_v)_z.length=_q.length;for(var _A in _q)_z[_A]=(_y=typeof(_x=_q[_A]))==_b||_y==_d||_y==_e||_x==_a?_x:_p(_x);return _z;}return _q;}function _B(){function _C(_D){var _E=_F(_D).moduleName,_G=_D.subclass;return('['+(_H(_D)||(!_G&& !_E)?_c:_G?'class':'package')+' '+(_E||'Function')+']');}var _z=_C(this);if(this.get){var _I=this.get(),_J=[];for(var _K in _I){var _L=_I[_K];_J.push(_K+' : '+(_L&&(_H(_L)||_s(_L))?_C(_L):_L));}_z+='\n\n'+_J.sort().join('\n');}return _z;}function _M(){return this[_N(this,'value')];}var _O=Uize=_P(function(){},function(){
this.instanceId=_Q();},function(_I){_I||(_I=_l);var _R={},_S=this.Class._S,_A,_T;for(_A in _S){if(_A in _I)_R[_A]=_I[_A];else if((_T=_S[_A])!==_a)_R[_A]=_T;}for(_A in _I)_A in _R||(_R[_A]=_I[_A]);this.set(_R);}),_U=_O.prototype,_V=_O.nonInheritableStatics;function _F(_W){return _W.Class||_W}var _X={},_Y={Uize:_O};function _Z(_E){var _0;return(_Y[_E]||(_E=='*'&&_Y)||((_0=(new _f('try {return '+_E+'} catch (e) {}'))())&&(_Y[_E]=_0)));}function _1(_0){var _2=_X[_0];if(_2){for(var _3= -1,_4=_2.length;++_3<_4;)_2[_3]();delete _X[_0];}}function _5(_6,_7){var _O=_F(_6);return(_O._8[_7]||_O._9[_7]);}function _N(_6,_7){var _ba=_5(_6,_7);return _ba?_ba._bb:_7;}_O._bc=_U._bc=function(_bd,_be){if(_bd.charCodeAt(0)==67&& !_bd.indexOf('Changed.')){var _6=this,_bf=_bd.slice(8),_ba=_5(_6,_bf);if(_ba&&_bf!=_ba._bg)_bd='Changed.'+(_bf=_ba._bg);_be(_bd);(_6._bh||(_6._bh={}))[_bf]=_6._bi&&_6._bi[_bd];}else{_be(_bd);}};_O.wire=_U.wire=function(_bj,_bk){var _6=this;if(arguments.length==2){_6._bc(_bj,function(_bd){
var _bi=_6._bi||(_6._bi=_6.eventHandlers={});(_bi[_bd]||(_bi[_bd]=[])).push({_bd:_bd,_bk:_s(_bk)?_bk:typeof _bk==_b?new _f(_bk):function(_bl){_bk.fire(_bl)},_bm:_bk});});}else if(typeof _bj==_c&&_bj){for(var _bd in _bj)this.wire(_bd,_bj[_bd]);}};_O.fire=_U.fire=function(_bl){if(typeof _bl!=_c)_bl={name:_bl};var _6=this,_bi=_6._bi;if(_bi){var _bn=_bi[_bl.name],_bo=_bi['*'];if(_bn||_bo){_bl.source||(_bl.source=_6);var _bp=_bo&&_bn?_bo.concat(_bn):_bo||_bn,_bq=_bp.length;if(_bq==1){_bp[0]._bk(_bl);}else if(_bq==2){var _br=_bp[0]._bk,_bs=_bp[1]._bk;_br(_bl);_bs(_bl);}else{if(!_bo|| !_bn)_bp=_bp.concat();for(var _bt= -1;++_bt<_bq;)_bp[_bt]._bk(_bl);}}}if(_bl.bubble&&_6.Class&&_6.parent){_bl.source||(_bl.source=_6);_6.parent.fire(_bl);}return _bl;};_O.unwire=_U.unwire=function(_bj,_bk){var _6=this,_bi=_6._bi;if(_bi){if(typeof _bj==_c&&_bj){for(var _bd in _bj)_6.unwire(_bd,_bj[_bd]);}else{_6._bc(_bj,function(_bd){var _bu=_bi[_bd];if(_bu){if(_bk){for(var _bt=_bu.length;--_bt>=0;)_bu[_bt]._bm==_bk&&_bu.splice(_bt,1);}
(_bk&&_bu.length)||delete _bi[_bd];}});}}};_O.get=_U.get=function(_A){if(typeof _A==_b){return this[_N(this,_A)];}else{var _6=this,_z={};if(!_A){var _O=_F(_6),_9=_O._9;for(var _bv in _9)_z[_9[_bv]._bg]=_6[_bv];}else if(_w(_A)){for(var _bw= -1,_bx=_A.length;++_bw<_bx;){var _by=_A[_bw];_z[_by]=_6[_N(_6,_by)];}}else{for(var _by in _A)_z[_by]=_6[_N(_6,_by)];}return _z;}};_O.registerProperties=function(_bz){var _6=this,_9=_6._9,_8=_6._8;for(var _bv in _bz){var _bA=_bz[_bv],_bB=typeof _bA==_c,_bf=(_bB?_bA.name:_bA)||_bv,_bC=_bf,_ba=_9[_bv]={_bb:_bv};if(_bf.indexOf('|')> -1){var _bD=_bf.split('|');_bC=_bD[0];for(var _bE= -1;++_bE<_bD.length;)_8[_bD[_bE]]=_ba;}else{_8[_bf]=_ba;}_ba._bg=_bC;if(_bB){if(_bA.onChange)_ba._bF=_bA.onChange;if(_bA.conformer)_ba._bG=_bA.conformer;_6[_bv]=_bA.value;}}_6._S=this.get();};_O.set=_U.set=function(_I){if(arguments.length==2)_I=_bH(_I,arguments[1]);var _6=this,_H= !!_6.Class,_O=_6.Class||_6,_8=_O._8,_9=_O._9,_ba,_bI,_bJ,_bK,_bh=_H&&_6._bh,_bL=_bh&&_bh['*'],_bM,_bN,_bv,_bf,_bO,_L,_bP
;for(var _7 in _I){_L=_I[_7];if(_ba=_8[_7]||_9[_7]){_bv=_ba._bb;_bf=_ba._bg;if(_H)(_bP||(_bP={}))[_bf]=_ba._bG?(_L=_ba._bG.call(_6,_L,_6[_bv])):_L;if(_L!==_6[_bv]){if(_H){_bL&&((_bM||(_bM={}))[_bf]=_L);_bh&&_bh[_bf]&&(_bN||(_bN=[])).push(_bf);function _bQ(_bK){if(_s(_bK)){if(!_bI){_bI=[];_bJ=_6.instanceId+'_handlerAlreadyAdded';}if(!_bK[_bJ]){_bK[_bJ]=1;_bI.push(_bK);}}else if(typeof _bK==_b){_bQ(_6[_bK]);}else if(_w(_bK)){for(var _bt= -1,_bR=_bK.length;++_bt<_bR;)_bQ(_bK[_bt]);}}_ba._bF&&_bQ(_ba._bF);}_6[_bv]=_L;}}else{_6[_7]=_L;(_bO||(_bO={}))[_7]=_7;}}_bO&&_O.registerProperties(_bO);if(_H){if(_bI){for(var _bt= -1,_bS=_bI.length;++_bt<_bS;){var _bK=_bI[_bt];delete _bK[_bJ];_bK.call(_6,_bP);}}_bM&&_6.fire({name:'Changed.*',properties:_bM});if(_bN){for(var _bT= -1,_bU=_bN.length;++_bT<_bU;)_6.fire('Changed.'+_bN[_bT]);}}else{_O._S=this.get();}};_O.toggle=_U.toggle=function(_K){var _q= !this.get(_K);this.set(_K,_q);return _q;};_U.kill=function(){var _bV=this.instanceId;
_bW('if(typeof '+_bV+'!=\'undefined\')'+_bV+'=null');};_O.capFirstChar=function(_bX){return _bX.charAt(0).toUpperCase()+_bX.slice(1);};_V.capFirstChar=1;_O.clone=_p;_V.clone=1;_O.constrain=function(_q,_bY,_bZ){return(_bY<_bZ?(_q<_bY?_bY:_q>_bZ?_bZ:_q):(_q<_bZ?_bZ:_q>_bY?_bY:_q));};_V.constrain=1;var _b0=_O.copyInto=function(_b1,_b2){if(_b1&&_b2&&typeof _b2==_c){for(var _K in _b2)_b1[_K]=_b2[_K];}if(arguments.length>2){for(var _b3=0;++_b3<arguments.length;)_b0(_b1,arguments[_b3]);}return _b1;};_V.copyInto=1;_O.callOn=function(_b4,_b5,_b6){if(_b4==_a)return;_b6||(_b6=_k);var _b7=typeof _b5==_b,_b8= !_b7&&_s(_b5);function _b9(_b4){if(_b4&&typeof _b4==_c){if(_w(_b4)){for(var _ca= -1,_cb=_b4.length;++_ca<_cb;)_b9(_b4[_ca]);}else{var _cc=_b7&&_s(_b4[_b5]);if(_H(_b4)){if(_b8||_cc)(_b8?_b5:_b4[_b5]).apply(_b4,_b6);}else{for(var _A in _b4)_b9(_b4[_A]);}}}}if(_b7||_b8)_b9(_b4);};_V.callOn=1;_O.defaultNull=function(_q,_cd){return _q!=_a?_q:_cd;};_V.defaultNull=1;_O.getModuleByName=_Z;_V.getModuleByName=1;
_O.indexIn=function(_ce,_q,_cf,_cg){if(_w(_ce)){_cg=_cg!==_g;for(var _ch=_ce.length-1,_ci=_ch+1,_z;--_ci>=0;){var _cj=_ce[_z=_cf?_ci:_ch-_ci];if(_cg?_cj===_q:_cj==_q)return _z;}}return-1;};_V.indexIn=1;var _w=_O.isArray=function(_D){return _D instanceof Array||(!!_D&&_s(_D.splice));};_V.isArray=1;var _s=_O.isFunction=function(_q){var _t=_q!=_a&&_q.constructor;return!!(_t&&_t==_t.constructor);};_V.isFunction=1;_O.isNumber=function(_q){return typeof _q==_d&& !isNaN(_q);};_V.isNumber=1;_O.isIn=function(_ce,_q,_cg){return _O.indexIn(_ce,_q,false,_cg)> -1;};_V.isIn=1;var _ck=_O.recordMatches=function(_cl,_cm){if(!_cl)return!_cm;for(var _K in _cm){if(_cl[_K]!==_cm[_K])return _g;}return _h;};_V.recordMatches=1;_O.findRecordNo=function(_cn,_cm,_co){if(_cn){for(var _cp= -1,_cq=_cn.length;++_cp<_cq;){if(_ck(_cn[_cp],_cm))return _cp;}}return _co==_i||isNaN(_co-=0)? -1:_co;};_V.findRecordNo=1;_O.findRecord=function(_cn,_cm,_co){return(_cn!=_i&&(_cp=_O.findRecordNo(_cn,_cm,_co))> -1?_cn[_cp]:null);};_V.findRecord=1;
var _Q=_O.getGuid=function(){return'uizeGuid'+_j++;};_V.getGuid=1;var _cr=_O.getPathToLibrary=function(_cs,_ct){if(typeof document!='undefined'&&document.getElementsByTagName){for(var _cu= -1,_cv=document.getElementsByTagName('SCRIPT'),_cw=_cv.length,_cx,_cy;++_cu<_cw;){if((_cy=(_cx=_cv[_cu].src).indexOf(_cs))> -1)return(_ct?_cx.replace(_cs,_ct):_cx.slice(0,_cx.lastIndexOf('/',_cy)+1));}}return'';};_V.getPathToLibrary=1;var _bW=_O.globalEval=new _f('toEval','return eval (toEval)');_V.globalEval=1;var _H=_O.isInstance=function(_D){return!!(_D&&_D.Class);};_V.isInstance=1;_O.module=function(_cz){var _cA=_cz.name||'',_cB=_cA.substr(0,_cA.lastIndexOf('.')),_cC=_cz.superclass||_cB,_cD=_cz.required||[],_cE=[];_X[_cA]||(_X[_cA]=[]);if(typeof _cD==_b)_cD=_cD.split(',');_cB&&_cD.push(_cB);_cC!=_cB&&_cD.push(_cC);for(var _cF= -1,_cG=_cD.length;++_cF<_cG;){var _cH=_cD[_cF];_cH&& !_Z(_cH)&&_cE.push(_cH);}function _cI(){var _cJ=_cz.builder,_0=_cJ&&_cJ(_Z(_cC));_cA&&(new _f('m',_cA+'=m'))(_0=_Y[_cA]=_0||function(){});
if(_s(_0)){_0.moduleName=_cA;if(!_0.subclass)_0.toString=_B;}_1(_cA);}var _cK=_cE.length;if(_cK){var _cL=_O.moduleLoader;if(_cL){var _cM= -1;function _cN(){_cM++;if(_cM<_cK){var _cO=_cE[_cM];_Z(_cO)?_cN():_X[_cO]?_X[_cO].push(_cN):_cL(_cO,function(_cP){if(_Z(_cO)){_cN();}else{_cP&&_bW(_cP);if(_Z(_cO)){_1(_cO);_cN();}else{(_X[_cO]||(_X[_cO]=[])).push(_cN);}}});}else{_cI();}}_cN();}else{_cI();}}else{_cI();}};_V.module=1;_O.moduleLoader=function(_cO,_cQ){_cQ();var _cR=document.createElement('script');_cR.type='text/javascript';_cR.src=_O.moduleUrlResolver(_cO);(_o||(_o=document.getElementsByTagName('HEAD')[0])).appendChild(_cR);};_V.moduleLoader=1;_O.moduleUrlResolver=function(_E){return _O.moduleUrlTemplate.replace(_n,_E+'.js');};_V.moduleUrlResolver=1;var _bH=_O.pairUp=function(_cS){var _z={},_b6=arguments.length==1&&_w(_cS)?_cS:arguments,_cT=_b6.length;if(_cT<3){_z[_b6[0]]=_b6[1];}else{for(var _cU= -2;(_cU+=2)<_cT;)_z[_b6[_cU]]=_b6[_cU+1];}return _z;};_V.pairUp=1;var _cV=_O.escapeRegExpLiteral=function(_cW){
return _cW.replace(/([\^\$\|\{\}\[\]\(\)\?\.\*\+\\])/g,'\\$1');};_V.escapeRegExpLiteral=1;var _cX=_O.substituteInto=function(_cY,_cZ,_c0){if(!(_cY=_cY==_a?'':_cY+'')||_cZ==_a)return _cY;if(_m[typeof _cZ])_cZ=[_cZ];var _c1=(_c0||'[#KEY]').split('KEY'),_c2=[];for(var _c3 in _cZ)_c2.push(_cV(_c3));return _cY.replace(new RegExp(_cV(_c1[0])+'('+_c2.join('|')+')'+_cV(_c1[1]),'g'),function(_c4,_c3){return _cZ[_c3]+''});};_V.substituteInto=1;function _P(_O,_c5,_c6){var _c7=function(){var _c8,_c9,_da;for(var _db in _dc){_c9=(_c8=_dc[_db]).length;for(var _dd= -1;++_dd<_c9;)if(_da=_c8[_dd])_da.apply(this,arguments);}return this;};var _U=_O.prototype;var _L,_de=_O.nonInheritableStatics||_l;for(var _A in _O)if(!_de[_A]&&(_L=_O[_A])!=_U&& !(_s(_L)&&_L.moduleName&&/[A-Z]/.test(_A.charAt(0))))_c7[_A]=_p(_L);var _df=_c7.prototype;for(var _A in _U)_df[_A]=_U[_A];_df.toString=_B;_df.valueOf=_M;_df.Class=_c7;_c7.nonInheritableStatics={nonInheritableStatics:1,toString:0,valueOf:0};_c7.superclass=_O;_c7.toString=_B;_c7.valueOf=_M;
var _dg=_O._dg||{alphastructor:_k,omegastructor:_k},_dc=_c7._dg={alphastructor:_dg.alphastructor.concat(_c5),omegastructor:_dg.omegastructor.concat(_c6)};_c7._9||(_c7._9={});_c7._8||(_c7._8={});return _c7;};_O.subclass=function(_c5,_c6){return _P(this,_c5,_c6);};_O.moduleName='Uize';_O.moduleUrlTemplate=_cr('Uize.js',_n);_V.moduleUrlTemplate=1;_O.pathToResources=_cr('Uize.js');_V.pathToResources=1;})();