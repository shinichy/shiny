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

typeof process!="undefined"&&require("amd-loader"),define(["require","exports","module","./css","../test/assertions"],function(e,t,n){var r=e("./css").Mode,i=e("../test/assertions");n.exports={name:"CSS Tokenizer",setUp:function(){this.tokenizer=(new r).getTokenizer()},"test: tokenize pixel number":function(){var e="-12px",t=this.tokenizer.getLineTokens(e,"ruleset").tokens;i.equal(2,t.length),i.equal("constant.numeric",t[0].type)},"test: tokenize hex3 color":function(){var e=this.tokenizer.getLineTokens("#abc","ruleset").tokens;i.equal(1,e.length),i.equal("constant.numeric",e[0].type)},"test: tokenize hex6 color":function(){var e=this.tokenizer.getLineTokens("#abc012","ruleset").tokens;i.equal(1,e.length),i.equal("constant.numeric",e[0].type)},"test: tokenize parens":function(){var e=this.tokenizer.getLineTokens("{()}","start").tokens;i.equal(3,e.length),i.equal("paren.lparen",e[0].type),i.equal("text",e[1].type),i.equal("paren.rparen",e[2].type)},"test for last rule in ruleset to catch capturing group bugs":function(){var e=this.tokenizer.getLineTokens("top","ruleset").tokens;i.equal(1,e.length),i.equal("support.type",e[0].type)}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();