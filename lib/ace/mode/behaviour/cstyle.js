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

define(["require","exports","module","../../lib/oop","../behaviour","../../token_iterator","../../lib/lang"],function(e,t,n){var r=e("../../lib/oop"),i=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,o=e("../../lib/lang"),u=["text","paren.rparen","punctuation.operator"],a=["text","paren.rparen","punctuation.operator","comment"],f=0,l=-1,c="",h=0,p=-1,d="",v="",m=function(){m.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",u)){var i=new s(t,n.row,n.column+1);if(!this.$matchTokenType(i.getCurrentToken()||"text",u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",a)},m.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},m.recordAutoInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isAutoInsertedClosing(r,i,c[0])||(f=0),l=r.row,c=n+i.substr(r.column),f++},m.recordMaybeInsert=function(e,t,n){var r=e.getCursorPosition(),i=t.doc.getLine(r.row);this.isMaybeInsertedClosing(r,i)||(h=0),p=r.row,d=i.substr(0,r.column)+n,v=i.substr(r.column),h++},m.isAutoInsertedClosing=function(e,t,n){return f>0&&e.row===l&&n===c[0]&&t.substr(e.column)===c},m.isMaybeInsertedClosing=function(e,t){return h>0&&e.row===p&&t.substr(e.column)===v&&t.substr(0,e.column)==d},m.popAutoInsertedClosing=function(){c=c.substr(1),f--},m.clearMaybeInsertedClosing=function(){h=0,p=-1},this.add("braces","insertion",function(e,t,n,r,i){var s=n.getCursorPosition(),u=r.doc.getLine(s.row);if(i=="{"){var a=n.getSelectionRange(),f=r.doc.getTextRange(a);if(f!==""&&f!=="{"&&n.getWrapBehavioursEnabled())return{text:"{"+f+"}",selection:!1};if(m.isSaneInsertion(n,r))return/[\]\}\)]/.test(u[s.column])?(m.recordAutoInsert(n,r,"}"),{text:"{}",selection:[1,1]}):(m.recordMaybeInsert(n,r,"{"),{text:"{",selection:[1,1]})}else if(i=="}"){var l=u.substring(s.column,s.column+1);if(l=="}"){var c=r.$findOpeningBracket("}",{column:s.column+1,row:s.row});if(c!==null&&m.isAutoInsertedClosing(s,u,i))return m.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else if(i=="\n"||i=="\r\n"){var p="";m.isMaybeInsertedClosing(s,u)&&(p=o.stringRepeat("}",h),m.clearMaybeInsertedClosing());var l=u.substring(s.column,s.column+1);if(l=="}"||p!==""){var d=r.findMatchingBracket({row:s.row,column:s.column},"}");if(!d)return null;var v=this.getNextLineIndent(e,u.substring(0,s.column),r.getTabString()),g=this.$getIndent(u);return{text:"\n"+v+"\n"+g+p,selection:[1,v.length,1,v.length]}}}}),this.add("braces","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="{"){var o=r.doc.getLine(i.start.row),u=o.substring(i.end.column,i.end.column+1);if(u=="}")return i.end.column++,i;h--}}),this.add("parens","insertion",function(e,t,n,r,i){if(i=="("){var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return{text:"("+o+")",selection:!1};if(m.isSaneInsertion(n,r))return m.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(i==")"){var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f==")"){var l=r.$findOpeningBracket(")",{column:u.column+1,row:u.row});if(l!==null&&m.isAutoInsertedClosing(u,a,i))return m.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="("){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u==")")return i.end.column++,i}}),this.add("brackets","insertion",function(e,t,n,r,i){if(i=="["){var s=n.getSelectionRange(),o=r.doc.getTextRange(s);if(o!==""&&n.getWrapBehavioursEnabled())return{text:"["+o+"]",selection:!1};if(m.isSaneInsertion(n,r))return m.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if(i=="]"){var u=n.getCursorPosition(),a=r.doc.getLine(u.row),f=a.substring(u.column,u.column+1);if(f=="]"){var l=r.$findOpeningBracket("]",{column:u.column+1,row:u.row});if(l!==null&&m.isAutoInsertedClosing(u,a,i))return m.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&s=="["){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u=="]")return i.end.column++,i}}),this.add("string_dquotes","insertion",function(e,t,n,r,i){if(i=='"'||i=="'"){var s=i,o=n.getSelectionRange(),u=r.doc.getTextRange(o);if(u!==""&&u!=="'"&&u!='"'&&n.getWrapBehavioursEnabled())return{text:s+u+s,selection:!1};var a=n.getCursorPosition(),f=r.doc.getLine(a.row),l=f.substring(a.column-1,a.column);if(l=="\\")return null;var c=r.getTokens(o.start.row),h=0,p,d=-1;for(var v=0;v<c.length;v++){p=c[v],p.type=="string"?d=-1:d<0&&(d=p.value.indexOf(s));if(p.value.length+h>o.start.column)break;h+=c[v].value.length}if(!p||d<0&&p.type!=="comment"&&(p.type!=="string"||o.start.column!==p.value.length+h-1&&p.value.lastIndexOf(s)===p.value.length-1)){if(!m.isSaneInsertion(n,r))return;return{text:s+s,selection:[1,1]}}if(p&&p.type==="string"){var g=f.substring(a.column,a.column+1);if(g==s)return{text:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,i){var s=r.doc.getTextRange(i);if(!i.isMultiLine()&&(s=='"'||s=="'")){var o=r.doc.getLine(i.start.row),u=o.substring(i.start.column+1,i.start.column+2);if(u=='"')return i.end.column++,i}})};r.inherits(m,i),t.CstyleBehaviour=m});