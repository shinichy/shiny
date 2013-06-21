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

define(["require","exports","module","../lib/oop","./text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e="break|do|else|elseif|end|for|function|if|in|local|repeat|return|then|until|while|or|and|not",t="true|false|nil|_G|_VERSION",n="string|xpcall|package|tostring|print|os|unpack|require|getfenv|setmetatable|next|assert|tonumber|io|rawequal|collectgarbage|getmetatable|module|rawset|math|debug|pcall|table|newproxy|type|coroutine|_G|select|gcinfo|pairs|rawget|loadstring|ipairs|_VERSION|dofile|setfenv|load|error|loadfile|sub|upper|len|gfind|rep|find|match|char|dump|gmatch|reverse|byte|format|gsub|lower|preload|loadlib|loaded|loaders|cpath|config|path|seeall|exit|setlocale|date|getenv|difftime|remove|time|clock|tmpname|rename|execute|lines|write|close|flush|open|output|type|read|stderr|stdin|input|stdout|popen|tmpfile|log|max|acos|huge|ldexp|pi|cos|tanh|pow|deg|tan|cosh|sinh|random|randomseed|frexp|ceil|floor|rad|abs|sqrt|modf|asin|min|mod|fmod|log10|atan2|exp|sin|atan|getupvalue|debug|sethook|getmetatable|gethook|setmetatable|setlocal|traceback|setfenv|getinfo|setupvalue|getlocal|getregistry|getfenv|setn|insert|getn|foreachi|maxn|foreach|concat|sort|remove|resume|yield|status|wrap|create|running|__add|__sub|__mod|__unm|__concat|__lt|__index|__call|__gc|__metatable|__mul|__div|__pow|__len|__eq|__le|__newindex|__tostring|__mode|__tonumber",r="string|package|os|io|math|debug|table|coroutine",i="",s="setn|foreach|foreachi|gcinfo|log10|maxn",o=this.createKeywordMapper({keyword:e,"support.function":n,"invalid.deprecated":s,"constant.library":r,"constant.language":t,"invalid.illegal":i,"variable.language":"this"},"identifier"),u="",a="(?:(?:[1-9]\\d*)|(?:0))",f="(?:0[xX][\\dA-Fa-f]+)",l="(?:"+a+"|"+f+")",c="(?:\\.\\d+)",h="(?:\\d+)",p="(?:(?:"+h+"?"+c+")|(?:"+h+"\\.))",d="(?:"+p+")",v=[];this.$rules={start:[{token:"comment",regex:u+"\\-\\-\\[\\[.*\\]\\]"},{token:"comment",regex:u+"\\-\\-\\[\\=\\[.*\\]\\=\\]"},{token:"comment",regex:u+"\\-\\-\\[\\={2}\\[.*\\]\\={2}\\]"},{token:"comment",regex:u+"\\-\\-\\[\\={3}\\[.*\\]\\={3}\\]"},{token:"comment",regex:u+"\\-\\-\\[\\={4}\\[.*\\]\\={4}\\]"},{token:"comment",regex:u+"\\-\\-\\[\\={5}\\=*\\[.*\\]\\={5}\\=*\\]"},{token:"comment",regex:u+"\\-\\-\\[\\[.*$",merge:!0,next:"qcomment"},{token:"comment",regex:u+"\\-\\-\\[\\=\\[.*$",merge:!0,next:"qcomment1"},{token:"comment",regex:u+"\\-\\-\\[\\={2}\\[.*$",merge:!0,next:"qcomment2"},{token:"comment",regex:u+"\\-\\-\\[\\={3}\\[.*$",merge:!0,next:"qcomment3"},{token:"comment",regex:u+"\\-\\-\\[\\={4}\\[.*$",merge:!0,next:"qcomment4"},{token:function(e){var t=/\-\-\[(\=+)\[/,n;return(n=t.exec(e))!=null&&(n=n[1])!=undefined&&v.push(n.length),"comment"},regex:u+"\\-\\-\\[\\={5}\\=*\\[.*$",merge:!0,next:"qcomment5"},{token:"comment",regex:"\\-\\-.*$"},{token:"string",regex:u+"\\[\\[.*\\]\\]"},{token:"string",regex:u+"\\[\\=\\[.*\\]\\=\\]"},{token:"string",regex:u+"\\[\\={2}\\[.*\\]\\={2}\\]"},{token:"string",regex:u+"\\[\\={3}\\[.*\\]\\={3}\\]"},{token:"string",regex:u+"\\[\\={4}\\[.*\\]\\={4}\\]"},{token:"string",regex:u+"\\[\\={5}\\=*\\[.*\\]\\={5}\\=*\\]"},{token:"string",regex:u+"\\[\\[.*$",merge:!0,next:"qstring"},{token:"string",regex:u+"\\[\\=\\[.*$",merge:!0,next:"qstring1"},{token:"string",regex:u+"\\[\\={2}\\[.*$",merge:!0,next:"qstring2"},{token:"string",regex:u+"\\[\\={3}\\[.*$",merge:!0,next:"qstring3"},{token:"string",regex:u+"\\[\\={4}\\[.*$",merge:!0,next:"qstring4"},{token:function(e){var t=/\[(\=+)\[/,n;return(n=t.exec(e))!=null&&(n=n[1])!=undefined&&v.push(n.length),"string"},regex:u+"\\[\\={5}\\=*\\[.*$",merge:!0,next:"qstring5"},{token:"string",regex:u+'"(?:[^\\\\]|\\\\.)*?"'},{token:"string",regex:u+"'(?:[^\\\\]|\\\\.)*?'"},{token:"constant.numeric",regex:d},{token:"constant.numeric",regex:l+"\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\.\\.\\.|\\.\\."},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+"}],qcomment:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment1:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\=\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment2:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={2}\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment3:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={3}\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment4:[{token:"comment",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={4}\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qcomment5:[{token:function(e){var t=/\](\=+)\]/,n=this.rules.qcomment5[0],r;n.next="start";if((r=t.exec(e))!=null&&(r=r[1])!=undefined){var i=r.length,s;(s=v.pop())!=i&&(v.push(s),n.next="qcomment5")}return"comment"},regex:"(?:[^\\\\]|\\\\.)*?\\]\\={5}\\=*\\]",next:"start"},{token:"comment",merge:!0,regex:".+"}],qstring:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring1:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\=\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring2:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={2}\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring3:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={3}\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring4:[{token:"string",regex:"(?:[^\\\\]|\\\\.)*?\\]\\={4}\\]",next:"start"},{token:"string",merge:!0,regex:".+"}],qstring5:[{token:function(e){var t=/\](\=+)\]/,n=this.rules.qstring5[0],r;n.next="start";if((r=t.exec(e))!=null&&(r=r[1])!=undefined){var i=r.length,s;(s=v.pop())!=i&&(v.push(s),n.next="qstring5")}return"string"},regex:"(?:[^\\\\]|\\\\.)*?\\]\\={5}\\=*\\]",next:"start"},{token:"string",merge:!0,regex:".+"}]}};r.inherits(s,i),t.LuaHighlightRules=s});