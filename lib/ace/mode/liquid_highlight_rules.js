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

define(["require","exports","module","../lib/oop","./css_highlight_rules","./javascript_highlight_rules","./xml_util","./text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./css_highlight_rules").CssHighlightRules,s=e("./javascript_highlight_rules").JavaScriptHighlightRules,o=e("./xml_util"),u=e("./text_highlight_rules").TextHighlightRules,a=function(){var e="date|capitalize|downcase|upcase|first|last|join|sort|map|size|escape|escape_once|strip_html|strip_newlines|newline_to_br|replace|replace_first|truncate|truncatewords|prepend|append|minus|plus|times|divided_by|split",t="capture|endcapture|case|endcase|when|comment|endcomment|cycle|for|endfor|in|reversed|if|endif|else|elsif|include|endinclude|unless|endunless|style|text|image|widget|plugin|marker|endmarker|tablerow|endtablerow",n="forloop|tablerowloop",r="assign",u=this.createKeywordMapper({"variable.language":n,keyword:t,"support.function":e,"keyword.definition":r},"identifier");this.$rules={start:[{token:"variable",regex:"{%",next:"liquid_start"},{token:"variable",regex:"{{",next:"liquid_start"},{token:"meta.tag",merge:!0,regex:"<\\!\\[CDATA\\[",next:"cdata"},{token:"xml-pe",regex:"<\\?.*?\\?>"},{token:"comment",merge:!0,regex:"<\\!--",next:"comment"},{token:"meta.tag",regex:"<(?=\\s*script\\b)",next:"script"},{token:"meta.tag",regex:"<(?=\\s*style\\b)",next:"style"},{token:"meta.tag",regex:"<\\/?",next:"tag"},{token:"text",regex:"\\s+"},{token:"text",regex:"[^<]+"}],cdata:[{token:"text",regex:"\\]\\]>",next:"start"},{token:"text",merge:!0,regex:"\\s+"},{token:"text",merge:!0,regex:".+"}],comment:[{token:"comment",regex:".*?-->",next:"start"},{token:"comment",merge:!0,regex:".+"}],liquid_start:[{token:"variable",regex:"}}",next:"start"},{token:"variable",regex:"%}",next:"start"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:u,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"/|\\*|\\-|\\+|=|!=|\\?\\:"},{token:"paren.lparen",regex:/[\[\({]/},{token:"paren.rparen",regex:/[\])}]/},{token:"text",regex:"\\s+"}]},o.tag(this.$rules,"tag","start"),o.tag(this.$rules,"style","css-start"),o.tag(this.$rules,"script","js-start"),this.embedRules(s,"js-",[{token:"comment",regex:"\\/\\/.*(?=<\\/script>)",next:"tag"},{token:"meta.tag",regex:"<\\/(?=script)",next:"tag"}]),this.embedRules(i,"css-",[{token:"meta.tag",regex:"<\\/(?=style)",next:"tag"}])};r.inherits(a,u),t.LiquidHighlightRules=a});