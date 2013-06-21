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

define(["require","exports","module"],function(e,t,n){var r=function(e,t){t=t?"g"+t:"g",this.rules=e,this.regExps={},this.matchMappings={};for(var n in this.rules){var r=this.rules[n],i=r,s=[],o=0,u=this.matchMappings[n]={};for(var a=0;a<i.length;a++){i[a].regex instanceof RegExp&&(i[a].regex=i[a].regex.toString().slice(1,-1));var f=(new RegExp("(?:("+i[a].regex+")|(.))")).exec("a").length-2,l=i[a].regex.replace(/\\([0-9]+)/g,function(e,t){return"\\"+(parseInt(t,10)+o+1)});if(f>1&&i[a].token.length!==f-1)throw new Error("For "+i[a].regex+" the matching groups and length of the token array don't match (rule #"+a+" of state "+n+")");u[o]={rule:a,len:f},o+=f,s.push(l)}this.regExps[n]=new RegExp("(?:("+s.join(")|(")+")|(.))",t)}};(function(){this.getLineTokens=function(e,t){function l(){f.push(t+"@"+a)}function c(){l(),f=[],l()}var n=t||"start",r=this.rules[n],i=this.matchMappings[n],s=this.regExps[n];s.lastIndex=0;var o,u=[],a=0,f=[],h={type:null,value:"",state:n};c();var p=1e4;while(o=s.exec(e)){var d="default.text",v=null,m=[o[0]];for(var g=0;g<o.length-2;g++){if(o[g+1]===undefined)continue;if(!(p--))throw"infinite"+i[g].rule+n;v=r[i[g].rule],i[g].len>1&&(m=o.slice(g+2,g+1+i[g].len)),typeof v.token=="function"?d=v.token.apply(this,m):d=v.token;if(v.next){n=v.next,r=this.rules[n],i=this.matchMappings[n],a=s.lastIndex,s=this.regExps[n];if(s===undefined)throw new Error("You indicated a state of "+v.next+" to go to, but it doesn't exist!");s.lastIndex=a,l()}break}if(m[0]){typeof d=="string"&&(m=[m.join("")],d=[d]);for(var g=0;g<m.length;g++){if(!m[g])continue;var y=(!v||v.merge||d[g]==="text")&&h.type===d[g];h.type&&(h.stateTransitions=f,u.push(h),c()),h={type:d[g],value:m[g],state:n,mergeable:y}}}if(a==e.length)break;a=s.lastIndex}return h.type&&(h.stateTransitions=f,u.push(h)),{tokens:u,state:n}}}).call(r.prototype),t.Tokenizer=r});