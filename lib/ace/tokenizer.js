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

define(["require","exports","module"],function(e,t,n){var r=function(e,t){t=t?"g"+t:"g",this.rules=e,this.regExps={},this.matchMappings={};for(var n in this.rules){var r=this.rules[n],i=r,s=[],o=0,u=this.matchMappings[n]={};for(var a=0;a<i.length;a++){i[a].regex instanceof RegExp&&(i[a].regex=i[a].regex.toString().slice(1,-1));var f=(new RegExp("(?:("+i[a].regex+")|(.))")).exec("a").length-2,l=i[a].regex.replace(/\\([0-9]+)/g,function(e,t){return"\\"+(parseInt(t,10)+o+1)});if(f>1&&i[a].token.length!==f-1)throw new Error("For "+i[a].regex+" the matching groups ("+(f-1)+") and length of the token array ("+i[a].token.length+") don't match (rule #"+a+" of state "+n+")");u[o]={rule:a,len:f},o+=f,s.push(l)}this.regExps[n]=new RegExp("(?:("+s.join(")|(")+")|(.))",t)}};(function(){this.getLineTokens=function(e,t){var n=t||"start",r=this.rules[n],i=this.matchMappings[n],s=this.regExps[n];s.lastIndex=0;var o,u=[],a=0,f={type:null,value:""};while(o=s.exec(e)){var l="text",c=null,h=[o[0]];for(var p=0;p<o.length-2;p++){if(o[p+1]===undefined)continue;c=r[i[p].rule],i[p].len>1&&(h=o.slice(p+2,p+1+i[p].len)),typeof c.token=="function"?l=c.token.apply(this,h):l=c.token;if(c.next){n=c.next,r=this.rules[n],i=this.matchMappings[n],a=s.lastIndex,s=this.regExps[n];if(s===undefined)throw new Error("You indicated a state of "+c.next+" to go to, but it doesn't exist!");s.lastIndex=a}break}if(h[0]){typeof l=="string"&&(h=[h.join("")],l=[l]);for(var p=0;p<h.length;p++){if(!h[p])continue;(!c||c.merge||l[p]==="text")&&f.type===l[p]?f.value+=h[p]:(f.type&&u.push(f),f={type:l[p],value:h[p]})}}if(a==e.length)break;a=s.lastIndex}return f.type&&u.push(f),{tokens:u,state:n}}}).call(r.prototype),t.Tokenizer=r});