define(["require","exports","module","../lib/oop","../lib/lang","./doc_comment_highlight_rules","./text_highlight_rules"],function(e,t,n){var r=e("../lib/oop"),i=e("../lib/lang"),s=e("./doc_comment_highlight_rules").DocCommentHighlightRules,o=e("./text_highlight_rules").TextHighlightRules,u=function(){var e=i.arrayToMap("break|do|instanceof|typeof|case|else|new|var|catch|finally|return|void|continue|for|switch|default|while|function|this|if|throw|delete|in|try|class|extends|super|import|from|into|implements|interface|static|mixin|override|abstract|final|number|int|string|boolean|variant|log|assert".split("|")),t=i.arrayToMap("null|true|false|NaN|Infinity|__FILE__|__LINE__|undefined".split("|")),n=i.arrayToMap("debugger|with|const|export|let|private|public|yield|protected|extern|native|as|operator|__fake__|__readonly__".split("|")),r="[a-zA-Z_][a-zA-Z0-9_]*\\b";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},s.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",merge:!0,next:"comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:["storage.type","text","entity.name.function"],regex:"(function)(\\s+)("+r+")"},{token:function(r){return r=="this"?"variable.language":r=="function"?"storage.type":e.hasOwnProperty(r)||n.hasOwnProperty(r)?"keyword":t.hasOwnProperty(r)?"constant.language":/^_?[A-Z][a-zA-Z0-9_]*$/.test(r)?"language.support.class":"identifier"},regex:r},{token:"keyword.operator",regex:"!|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|instanceof|new|delete|typeof|void)"},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({<]"},{token:"paren.rparen",regex:"[\\])}>]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",merge:!0,regex:".+"}]},this.embedRules(s,"doc-",[s.getEndRule("start")])};r.inherits(u,o),t.JsxHighlightRules=u});