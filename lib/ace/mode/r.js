/*
 * r.js
 *
 * Copyright (C) 2009-11 by RStudio, Inc.
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * This program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

define(["require","exports","module","ace/editor","ace/edit_session","ace/range","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/text_highlight_rules","./r_highlight_rules","ace/mode/matching_brace_outdent","ace/unicode"],function(e,t,n){var r=e("ace/editor").Editor,i=e("ace/edit_session").EditSession,s=e("ace/range").Range,o=e("ace/lib/oop"),u=e("ace/mode/text").Mode,a=e("ace/tokenizer").Tokenizer,f=e("ace/mode/text_highlight_rules").TextHighlightRules,l=e("./r_highlight_rules").RHighlightRules,c=e("ace/mode/matching_brace_outdent").MatchingBraceOutdent,h=e("ace/unicode"),p=function(){this.$tokenizer=new a((new l).getRules()),this.$outdent=new c};o.inherits(p,u),function(){this.tokenRe=new RegExp("^["+h.packages.L+h.packages.Mn+h.packages.Mc+h.packages.Nd+h.packages.Pc+"._]+","g"),this.nonTokenRe=new RegExp("^(?:[^"+h.packages.L+h.packages.Mn+h.packages.Mc+h.packages.Nd+h.packages.Pc+"._]|s])+","g"),this.$complements={"(":")","[":"]",'"':'"',"'":"'","{":"}"},this.$reOpen=/^[(["'{]$/,this.$reClose=/^[)\]"'}]$/,this.getNextLineIndent=function(e,t,n,r,i){return this.codeModel.getNextLineIndent(i,t,e,n,r)},this.allowAutoInsert=this.smartAllowAutoInsert,this.checkOutdent=function(e,t,n){return/^\s+$/.test(t)?/^\s*[\{\}\)]/.test(n):!1},this.getIndentForOpenBrace=function(e){return this.codeModel.getIndentForOpenBrace(e)},this.autoOutdent=function(e,t,n){if(n==0)return 0;var r=t.getLine(n),i=r.match(/^(\s*[\}\)])/);if(i){var o=i[1].length,u=t.findMatchingBracket({row:n,column:o});if(!u||u.row==n)return 0;var a=this.codeModel.getIndentForOpenBrace(u);t.replace(new s(n,0,n,o-1),a)}i=r.match(/^(\s*\{)/);if(i){var o=i[1].length,a=this.codeModel.getBraceIndent(n-1);t.replace(new s(n,0,n,o-1),a)}},this.$getIndent=function(e){var t=e.match(/^(\s+)/);return t?t[1]:""},this.transformAction=function(e,t,n,r,i){if(t==="insertion"&&i==="\n"){var s=n.getSelectionRange().start,o=/^((\s*#+')\s*)/.exec(r.doc.getLine(s.row));if(o&&n.getSelectionRange().start.column>=o[2].length)return{text:"\n"+o[1]}}return!1}}.call(p.prototype),t.Mode=p});