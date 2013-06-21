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

typeof process!="undefined"&&require("amd-loader"),define(["require","exports","module","./ruby","../test/assertions"],function(e,t,n){function s(e,t,n){for(var r=0,s=n.length;r<s;r++){var o=n[r],u=e.getLineTokens(o,"start").tokens;i.equal(u[0].value,o,'"'+o+'" should be one token'),i.equal(u[0].type,t,'"'+o+'" should be a "'+t+'" token')}}function o(e,t,n){for(var r=0,s=n.length;r<s;r++){var o=n[r],u=e.getLineTokens(o,"start").tokens;i.ok(u[0].type!==t||u[0].value!==o,'"'+o+'" is not a valid "'+t+'"')}}var r=e("./ruby").Mode,i=e("../test/assertions");n.exports={name:"Ruby Tokenizer",setUp:function(){this.tokenizer=(new r).getTokenizer()},"test: symbol tokenizer":function(){s(this.tokenizer,"constant.other.symbol.ruby",[":@thing",":$thing",":_thing",":thing",":Thing",":thing1",":thing_a",":THING",":thing!",":thing=",":thing?",":t?"]),o(this.tokenizer,"constant.other.symbol.ruby",[":",":@",":$",":1",":1thing",":th?ing",":thi=ng",":1thing",":th!ing",":thing#"])},"test: namespaces aren't symbols":function(){var e="Namespaced::Class",t=this.tokenizer.getLineTokens(e,"start").tokens;i.equal(3,t.length),i.equal("support.class",t[0].type),i.equal("text",t[1].type),i.equal("support.class",t[2].type)},"test: hex tokenizer":function(){s(this.tokenizer,"constant.numeric",["0x9a","0XA1","0x9_a"]),o(this.tokenizer,"constant.numeric",["0x","0x_9a","0x9a_"])},"test: float tokenizer":function(){s(this.tokenizer,"constant.numeric",["1","+1","-1","12_345","0.000_1"]),o(this.tokenizer,"constant.numeric",["_","_1","1_","1_.0","0._1"])}}}),typeof module!="undefined"&&module===require.main&&require("asyncjs").test.testcase(module.exports).exec();