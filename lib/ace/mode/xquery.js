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

define(["require","exports","module","../worker/worker_client","../lib/oop","./text","../tokenizer","./xquery_highlight_rules","../range","./behaviour/cstyle","./folding/cstyle"],function(e,t,n){var r=e("../worker/worker_client").WorkerClient,i=e("../lib/oop"),s=e("./text").Mode,o=e("../tokenizer").Tokenizer,u=e("./xquery_highlight_rules").XQueryHighlightRules,a=e("../range").Range,f=e("./behaviour/cstyle").CstyleBehaviour,l=e("./folding/cstyle").FoldMode,c=function(e){this.$tokenizer=new o((new u).getRules()),this.$behaviour=new f(e),this.foldingRules=new l};i.inherits(c,s),function(){this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=t.match(/\s*(?:then|else|return|[{\(]|<\w+>)\s*$/);return i&&(r+=n),r},this.checkOutdent=function(e,t,n){return/^\s+$/.test(t)?/^\s*[\}\)]/.test(n):!1},this.autoOutdent=function(e,t,n){var r=t.getLine(n),i=r.match(/^(\s*[\}\)])/);if(!i)return 0;var s=i[1].length,o=t.findMatchingBracket({row:n,column:s});if(!o||o.row==n)return 0;var u=this.$getIndent(t.getLine(o.row));t.replace(new a(n,0,n,s-1),u)},this.$getIndent=function(e){var t=e.match(/^(\s+)/);return t?t[1]:""},this.toggleCommentLines=function(e,t,n,r){var i,s,o=!0,u=/^\s*\(:(.*):\)/;for(i=n;i<=r;i++)if(!u.test(t.getLine(i))){o=!1;break}var f=new a(0,0,0,0);for(i=n;i<=r;i++)s=t.getLine(i),f.start.row=i,f.end.row=i,f.end.column=s.length,t.replace(f,o?s.match(u)[1]:"(:"+s+":)")},this.createWorker=function(e){this.$deltas=[];var t=new r(["ace"],"ace/mode/xquery_worker","XQueryWorker"),n=this;return e.getDocument().on("change",function(e){n.$deltas.push(e.data)}),t.attachToDocument(e.getDocument()),t.on("start",function(e){n.$deltas=[]}),t.on("error",function(t){e.setAnnotations([t.data])}),t.on("ok",function(t){e.clearAnnotations()}),t.on("highlight",function(t){var r=0,i=e.getLength()-1,s=t.data.lines,o=t.data.states;for(var u=0;u<n.$deltas.length;u++){var a=n.$deltas[u];if(a.action==="insertLines"){var f=a.lines.length;for(var u=0;u<f;u++)s.splice(a.range.start.row+u,0,undefined),o.splice(a.range.start.row+u,0,undefined)}else if(a.action==="insertText")e.getDocument().isNewLine(a.text)?(s.splice(a.range.end.row,0,undefined),o.splice(a.range.end.row,0,undefined)):(s[a.range.start.row]=undefined,o[a.range.start.row]=undefined);else if(a.action==="removeLines"){var l=a.lines.length;s.splice(a.range.start.row,l),o.splice(a.range.start.row,l)}else a.action==="removeText"&&(e.getDocument().isNewLine(a.text)?(s[a.range.start.row]=undefined,s.splice(a.range.end.row,1),o[a.range.start.row]=undefined,o.splice(a.range.end.row,1)):(s[a.range.start.row]=undefined,o[a.range.start.row]=undefined))}e.bgTokenizer.lines=s,e.bgTokenizer.states=o,e.bgTokenizer.fireUpdateEvent(r,i)}),t}}.call(c.prototype),t.Mode=c});