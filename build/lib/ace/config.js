/* ***** BEGIN LICENSE BLOCK *****
 * Distributed under the BSD license:
 *
 * Copyright (c) 2010, Ajax.org B.V.
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Ajax.org B.V. nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL AJAX.ORG B.V. BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * ***** END LICENSE BLOCK ***** */

define(["require","exports","module","./lib/lang"],function(e,t,n){"no use strict";function o(e){return e.replace(/-(.)/g,function(e,t){return t.toUpperCase()})}var r=e("./lib/lang"),i=function(){return this}(),s={packaged:!1,workerPath:null,modePath:null,themePath:null,basePath:"",suffix:".js",$moduleUrls:{}};t.get=function(e){if(!s.hasOwnProperty(e))throw new Error("Unknown config key: "+e);return s[e]},t.set=function(e,t){if(!s.hasOwnProperty(e))throw new Error("Unknown config key: "+e);s[e]=t},t.all=function(){return r.copyObject(s)},t.moduleUrl=function(e,t){if(s.$moduleUrls[e])return s.$moduleUrls[e];var n=e.split("/");t=t||n[n.length-2]||"";var r=n[n.length-1].replace(t,"").replace(/(^[\-_])|([\-_]$)/,"");!r&&n.length>1&&(r=n[n.length-2]);var i=s[t+"Path"];return i==null&&(i=s.basePath),i&&i.slice(-1)!="/"&&(i+="/"),i+t+"-"+r+this.get("suffix")},t.setModuleUrl=function(e,t){return s.$moduleUrls[e]=t},t.init=function(){s.packaged=e.packaged||n.packaged||i.define&&define.packaged;if(!i.document)return"";var r={},u="",a=document.getElementsByTagName("script");for(var f=0;f<a.length;f++){var l=a[f],c=l.src||l.getAttribute("src");if(!c)continue;var h=l.attributes;for(var p=0,d=h.length;p<d;p++){var v=h[p];v.name.indexOf("data-ace-")===0&&(r[o(v.name.replace(/^data-ace-/,""))]=v.value)}var m=c.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);m&&(u=m[1])}u&&(r.base=r.base||u,r.packaged=!0),r.workerPath=r.workerPath||r.base,r.modePath=r.modePath||r.base,r.themePath=r.themePath||r.base,delete r.base;for(var g in r)typeof r[g]!="undefined"&&t.set(g,r[g])}});