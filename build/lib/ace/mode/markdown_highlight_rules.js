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

define(["require","exports","module","../lib/oop","./text_highlight_rules","./javascript_highlight_rules","./xml_highlight_rules","./html_highlight_rules","./css_highlight_rules"],function(e,t,n){function f(e,t){return{token:"support.function",regex:"^```"+e+"\\s*$",next:t+"start"}}var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=e("./javascript_highlight_rules").JavaScriptHighlightRules,o=e("./xml_highlight_rules").XmlHighlightRules,u=e("./html_highlight_rules").HtmlHighlightRules,a=e("./css_highlight_rules").CssHighlightRules,l=function(){this.$rules={start:[{token:"empty_line",regex:"^$"},{token:["support.function","support.function","support.function"],regex:"(`+)([^\\r]*?[^`])(\\1)"},{token:"support.function",regex:"^[ ]{4}.+"},{token:"markup.heading.1",regex:"^=+(?=\\s*$)"},{token:"markup.heading.2",regex:"^\\-+(?=\\s*$)"},{token:function(e){return"markup.heading."+e.search(/[^#]/)},regex:"^#{1,6}(?:[^ #].*| +.*(?:[^ #].*|[^ ]+.* +#+ *))$"},f("(?:javascript|js)","js-"),f("xml","xml-"),f("html","html-"),f("css","css-"),{token:"support.function",regex:"^```[a-zA-Z]*\\s*$",next:"githubblock"},{token:"string",regex:"^>[ ].+$",next:"blockquote"},{token:["text","constant","text","url","string","text"],regex:'^([ ]{0,3}\\[)([^\\]]+)(\\]:\\s*)([^ ]+)(\\s*(?:["][^"]+["])?(\\s*))$'},{token:["text","string","text","constant","text"],regex:"(\\[)((?:[[^\\]]*\\]|[^\\[\\]])*)(\\][ ]?(?:\\n[ ]*)?\\[)(.*?)(\\])"},{token:["text","string","text","markup.underline","string","text"],regex:'(\\[)(\\[[^\\]]*\\]|[^\\[\\]]*)(\\]\\([ \\t]*)(<?(?:(?:[^\\(]*?\\([^\\)]*?\\)\\S*?)|(?:.*?))>?)((?:[ 	]*"(?:.*?)"[ \\t]*)?)(\\))'},{token:"constant",regex:"^[ ]{0,2}(?:[ ]?\\*[ ]?){3,}\\s*$"},{token:"constant",regex:"^[ ]{0,2}(?:[ ]?\\-[ ]?){3,}\\s*$"},{token:"constant",regex:"^[ ]{0,2}(?:[ ]?\\_[ ]?){3,}\\s*$"},{token:"markup.list",regex:"^\\s{0,3}(?:[*+-]|\\d+\\.)\\s+",next:"listblock"},{token:["string","string","string"],regex:"([*]{2}|[_]{2}(?=\\S))([^\\r]*?\\S[*_]*)(\\1)"},{token:["string","string","string"],regex:"([*]|[_](?=\\S))([^\\r]*?\\S[*_]*)(\\1)"},{token:["text","url","text"],regex:"(<)((?:https?|ftp|dict):[^'\">\\s]+|(?:mailto:)?[-.\\w]+\\@[-a-z0-9]+(?:\\.[-a-z0-9]+)*\\.[a-z]+)(>)"},{token:"text",regex:"[^\\*_%$`\\[#<>]+"}],listblock:[{token:"empty_line",regex:"^$",next:"start"},{token:"markup.list",regex:".+"}],blockquote:[{token:"empty_line",regex:"^\\s*$",next:"start"},{token:"string",regex:".+"}],githubblock:[{token:"support.function",regex:"^```",next:"start"},{token:"support.function",regex:".+"}]},this.embedRules(s,"js-",[{token:"support.function",regex:"^```",next:"start"}]),this.embedRules(u,"html-",[{token:"support.function",regex:"^```",next:"start"}]),this.embedRules(a,"css-",[{token:"support.function",regex:"^```",next:"start"}]),this.embedRules(o,"xml-",[{token:"support.function",regex:"^```",next:"start"}])};r.inherits(l,i),t.MarkdownHighlightRules=l});