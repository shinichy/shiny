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

define(["require","exports","module","../lib/oop","../lib/dom","../lib/lang","../lib/useragent","../lib/event_emitter"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/dom"),s=e("../lib/lang"),o=e("../lib/useragent"),u=e("../lib/event_emitter").EventEmitter,a=function(e){this.element=i.createElement("div"),this.element.className="ace_layer ace_text-layer",e.appendChild(this.element),this.$characterSize={width:0,height:0},this.checkForSizeChanges(),this.$pollSizeChanges()};(function(){r.implement(this,u),this.EOF_CHAR="¶",this.EOL_CHAR="¬",this.TAB_CHAR="→",this.SPACE_CHAR="·",this.$padding=0,this.setPadding=function(e){this.$padding=e,this.element.style.padding="0 "+e+"px"},this.getLineHeight=function(){return this.$characterSize.height||1},this.getCharacterWidth=function(){return this.$characterSize.width||1},this.checkForSizeChanges=function(){var e=this.$measureSizes();if(e&&(this.$characterSize.width!==e.width||this.$characterSize.height!==e.height)){this.$measureNode.style.fontWeight="bold";var t=this.$measureSizes();this.$measureNode.style.fontWeight="",this.$characterSize=e,this.allowBoldFonts=t&&t.width===e.width&&t.height===e.height,this._emit("changeCharacterSize",{data:e})}},this.$pollSizeChanges=function(){var e=this;this.$pollSizeChangesTimer=setInterval(function(){e.checkForSizeChanges()},500)},this.$fontStyles={fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},this.$measureSizes=o.isIE||o.isOldGecko?function(){var e=1e3;if(!this.$measureNode){var t=this.$measureNode=i.createElement("div"),n=t.style;n.width=n.height="auto",n.left=n.top=-e*40+"px",n.visibility="hidden",n.position="fixed",n.overflow="visible",n.whiteSpace="nowrap",t.innerHTML=s.stringRepeat("Xy",e);if(this.element.ownerDocument.body)this.element.ownerDocument.body.appendChild(t);else{var r=this.element.parentNode;while(!i.hasCssClass(r,"ace_editor"))r=r.parentNode;r.appendChild(t)}}if(!this.element.offsetWidth)return null;var n=this.$measureNode.style,o=i.computedStyle(this.element);for(var u in this.$fontStyles)n[u]=o[u];var a={height:this.$measureNode.offsetHeight,width:this.$measureNode.offsetWidth/(e*2)};return a.width==0||a.height==0?null:a}:function(){if(!this.$measureNode){var e=this.$measureNode=i.createElement("div"),t=e.style;t.width=t.height="auto",t.left=t.top="-100px",t.visibility="hidden",t.position="fixed",t.overflow="visible",t.whiteSpace="nowrap",e.innerHTML="X";var n=this.element.parentNode;while(n&&!i.hasCssClass(n,"ace_editor"))n=n.parentNode;if(!n)return this.$measureNode=null;n.appendChild(e)}var r=this.$measureNode.getBoundingClientRect(),s={height:r.height,width:r.width};return s.width==0||s.height==0?null:s},this.setSession=function(e){this.session=e,this.$computeTabString()},this.showInvisibles=!1,this.setShowInvisibles=function(e){return this.showInvisibles==e?!1:(this.showInvisibles=e,this.$computeTabString(),!0)},this.displayIndentGuides=!0,this.setDisplayIndentGuides=function(e){return this.displayIndentGuides==e?!1:(this.displayIndentGuides=e,this.$computeTabString(),!0)},this.$tabStrings=[],this.onChangeTabSize=this.$computeTabString=function(){var e=this.session.getTabSize();this.tabSize=e;var t=this.$tabStrings=[0];for(var n=1;n<e+1;n++)this.showInvisibles?t.push("<span class='ace_invisible'>"+this.TAB_CHAR+Array(n).join("&#160;")+"</span>"):t.push((new Array(n+1)).join("&#160;"));if(this.displayIndentGuides){this.$indentGuideRe=/\s\S| \t|\t |\s$/;var r="ace_indent-guide",i=Array(this.tabSize+1).join("&#160;"),s=i;this.showInvisibles&&(r+=" ace_invisible",s=this.TAB_CHAR+i.substr(6)),this.$tabStrings[" "]="<span class='"+r+"'>"+i+"</span>",this.$tabStrings["	"]="<span class='"+r+"'>"+s+"</span>"}},this.updateLines=function(e,t,n){(this.config.lastRow!=e.lastRow||this.config.firstRow!=e.firstRow)&&this.scrollLines(e),this.config=e;var r=Math.max(t,e.firstRow),s=Math.min(n,e.lastRow),o=this.element.childNodes,u=0;for(var a=e.firstRow;a<r;a++){var f=this.session.getFoldLine(a);if(f){if(f.containsRow(r)){r=f.start.row;break}a=f.end.row}u++}var a=r,f=this.session.getNextFoldLine(a),l=f?f.start.row:Infinity;for(;;){a>l&&(a=f.end.row+1,f=this.session.getNextFoldLine(a,f),l=f?f.start.row:Infinity);if(a>s)break;var c=o[u++];if(c){var h=[];this.$renderLine(h,a,!this.$useLineGroups(),a==l?f:!1),i.setInnerHtml(c,h.join(""))}a++}},this.scrollLines=function(e){var t=this.config;this.config=e;if(!t||t.lastRow<e.firstRow)return this.update(e);if(e.lastRow<t.firstRow)return this.update(e);var n=this.element;if(t.firstRow<e.firstRow)for(var r=this.session.getFoldedRowCount(t.firstRow,e.firstRow-1);r>0;r--)n.removeChild(n.firstChild);if(t.lastRow>e.lastRow)for(var r=this.session.getFoldedRowCount(e.lastRow+1,t.lastRow);r>0;r--)n.removeChild(n.lastChild);if(e.firstRow<t.firstRow){var i=this.$renderLinesFragment(e,e.firstRow,t.firstRow-1);n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i)}if(e.lastRow>t.lastRow){var i=this.$renderLinesFragment(e,t.lastRow+1,e.lastRow);n.appendChild(i)}},this.$renderLinesFragment=function(e,t,n){var r=this.element.ownerDocument.createDocumentFragment(),s=t,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>n)break;var a=i.createElement("div"),f=[];this.$renderLine(f,s,!1,s==u?o:!1),a.innerHTML=f.join("");if(this.$useLineGroups())a.className="ace_line_group",r.appendChild(a);else{var l=a.childNodes;while(l.length)r.appendChild(l[0])}s++}return r},this.update=function(e){this.config=e;var t=[],n=e.firstRow,r=e.lastRow,s=n,o=this.session.getNextFoldLine(s),u=o?o.start.row:Infinity;for(;;){s>u&&(s=o.end.row+1,o=this.session.getNextFoldLine(s,o),u=o?o.start.row:Infinity);if(s>r)break;this.$useLineGroups()&&t.push("<div class='ace_line_group'>"),this.$renderLine(t,s,!1,s==u?o:!1),this.$useLineGroups()&&t.push("</div>"),s++}this.element=i.setInnerHtml(this.element,t.join(""))},this.$textToken={text:!0,rparen:!0,lparen:!0},this.$renderToken=function(e,t,n,r){var i=this,s=/\t|&|<|( +)|([\x00-\x1f\x80-\xa0\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\u3000\uFEFF])|[\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3000-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]/g,o=function(e,n,r,s,o){if(n)return(new Array(e.length+1)).join("&#160;");if(e=="&")return"&#38;";if(e=="<")return"&#60;";if(e=="	"){var u=i.session.getScreenTabSize(t+s);return t+=u-1,i.$tabStrings[u]}if(e=="　"){var a=i.showInvisibles?"ace_cjk ace_invisible":"ace_cjk",f=i.showInvisibles?i.SPACE_CHAR:"";return t+=1,"<span class='"+a+"' style='width:"+i.config.characterWidth*2+"px'>"+f+"</span>"}return r?"<span class='ace_invisible ace_invalid'>"+i.SPACE_CHAR+"</span>":(t+=1,"<span class='ace_cjk' style='width:"+i.config.characterWidth*2+"px'>"+e+"</span>")},u=r.replace(s,o);if(!this.$textToken[n.type]){var a="ace_"+n.type.replace(/\./g," ace_"),f="";n.type=="fold"&&(f=" style='width:"+n.value.length*this.config.characterWidth+"px;' "),e.push("<span class='",a,"'",f,">",u,"</span>")}else e.push(u);return t+r.length},this.renderIndentGuide=function(e,t){var n=t.search(this.$indentGuideRe);return n<=0?t:t[0]==" "?(n-=n%this.tabSize,e.push(Array(n/this.tabSize+1).join(this.$tabStrings[" "])),t.substr(n)):t[0]=="	"?(e.push(Array(n+1).join(this.$tabStrings["	"])),t.substr(n)):t},this.$renderWrappedLine=function(e,t,n,r){var i=0,s=0,o=n[0],u=0;for(var a=0;a<t.length;a++){var f=t[a],l=f.value;if(a==0&&this.displayIndentGuides){i=l.length,l=this.renderIndentGuide(e,l);if(!l)continue;i-=l.length}if(i+l.length<o)u=this.$renderToken(e,u,f,l),i+=l.length;else{while(i+l.length>=o)u=this.$renderToken(e,u,f,l.substring(0,o-i)),l=l.substring(o-i),i=o,r||e.push("</div>","<div class='ace_line' style='height:",this.config.lineHeight,"px'>"),s++,u=0,o=n[s]||Number.MAX_VALUE;l.length!=0&&(i+=l.length,u=this.$renderToken(e,u,f,l))}}},this.$renderSimpleLine=function(e,t){var n=0,r=t[0],i=r.value;this.displayIndentGuides&&(i=this.renderIndentGuide(e,i)),i&&(n=this.$renderToken(e,n,r,i));for(var s=1;s<t.length;s++)r=t[s],i=r.value,n=this.$renderToken(e,n,r,i)},this.$renderLine=function(e,t,n,r){!r&&r!=0&&(r=this.session.getFoldLine(t));if(r)var i=this.$getFoldLineTokens(t,r);else var i=this.session.getTokens(t);n||e.push("<div class='ace_line' style='height:",this.config.lineHeight,"px'>");if(i.length){var s=this.session.getRowSplitData(t);s&&s.length?this.$renderWrappedLine(e,i,s,n):this.$renderSimpleLine(e,i)}this.showInvisibles&&(r&&(t=r.end.row),e.push("<span class='ace_invisible'>",t==this.session.getLength()-1?this.EOF_CHAR:this.EOL_CHAR,"</span>")),n||e.push("</div>")},this.$getFoldLineTokens=function(e,t){function i(e,t,n){var i=0,s=0;while(s+e[i].value.length<t){s+=e[i].value.length,i++;if(i==e.length)return}if(s!=t){var o=e[i].value.substring(t-s);o.length>n-t&&(o=o.substring(0,n-t)),r.push({type:e[i].type,value:o}),s=t+o.length,i+=1}while(s<n&&i<e.length){var o=e[i].value;o.length+s>n?r.push({type:e[i].type,value:o.substring(0,n-s)}):r.push(e[i]),s+=o.length,i+=1}}var n=this.session,r=[],s=n.getTokens(e);return t.walk(function(e,t,o,u,a){e!=null?r.push({type:"fold",value:e}):(a&&(s=n.getTokens(t)),s.length&&i(s,u,o))},t.end.row,this.session.getLine(t.end.row).length),r},this.$useLineGroups=function(){return this.session.getUseWrapMode()},this.destroy=function(){clearInterval(this.$pollSizeChangesTimer),this.$measureNode&&this.$measureNode.parentNode.removeChild(this.$measureNode),delete this.$measureNode}}).call(a.prototype),t.Text=a});