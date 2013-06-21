/*
 * rdoc.js
 *
 * Copyright (C) 2009-11 by RStudio, Inc.
 *
 * This program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

define(["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/text_highlight_rules","./rdoc_highlight_rules","ace/mode/matching_brace_outdent"],function(e,t,n){var r=e("ace/lib/oop"),i=e("ace/mode/text").Mode,s=e("ace/tokenizer").Tokenizer,o=e("ace/mode/text_highlight_rules").TextHighlightRules,u=e("./rdoc_highlight_rules").RDocHighlightRules,a=e("ace/mode/matching_brace_outdent").MatchingBraceOutdent,f=function(e){this.$tokenizer=new s((new u).getRules()),this.$outdent=new a};r.inherits(f,i),function(){this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)}}.call(f.prototype),t.Mode=f});