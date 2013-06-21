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

define(["require","exports","module","../lib/oop","./html_highlight_rules","./java_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./html_highlight_rules").HtmlHighlightRules,s=e("./java_highlight_rules").JavaHighlightRules,o=function(){i.call(this);for(var e in this.$rules)this.$rules[e].unshift({token:"meta.tag",regex:"<%@?|<%=?|<jsp:[^>]+>",next:"jsp-start"});var t="request|response|out|session|application|config|pageContext|page|Exception",n="page|include|taglib";this.embedRules(s,"jsp-"),this.$rules.start.unshift({token:"comment",merge:!0,regex:"<%--",next:"comment"}),this.$rules["jsp-start"].unshift({token:"meta.tag",regex:"%>|<\\/jsp:[^>]+>",next:"start"},{token:"variable.language",regex:t},{token:"keyword",regex:n}),this.$rules.comment.unshift({token:"comment",regex:".*?--%>",next:"start"})};r.inherits(o,i),t.JspHighlightRules=o});