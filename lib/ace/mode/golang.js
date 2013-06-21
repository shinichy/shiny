define(["require","exports","module","../lib/oop","./text","../tokenizer","./golang_highlight_rules","./matching_brace_outdent","./behaviour/cstyle","./folding/cstyle"],function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,s=e("../tokenizer").Tokenizer,o=e("./golang_highlight_rules").GolangHighlightRules,u=e("./matching_brace_outdent").MatchingBraceOutdent,a=e("./behaviour/cstyle").CstyleBehaviour,f=e("./folding/cstyle").FoldMode,l=function(){this.$tokenizer=new s((new o).getRules()),this.$outdent=new u,this.foldingRules=new f};r.inherits(l,i),function(){this.toggleCommentLines=function(e,t,n,r){var i=!0,s=/^(\s*)\/\//;for(var o=n;o<=r;o++)if(!s.test(t.getLine(o))){i=!1;break}if(i){var u=new Range(0,0,0,0);for(var o=n;o<=r;o++){var a=t.getLine(o),f=a.match(s);u.start.row=o,u.end.row=o,u.end.column=f[0].length,t.replace(u,f[1])}}else t.indentRows(n,r,"//")},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.$tokenizer.getLineTokens(t,e),s=i.tokens,o=i.state;if(s.length&&s[s.length-1].type=="comment")return r;if(e=="start"){var u=t.match(/^.*[\{\(\[]\s*$/);u&&(r+=n)}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)}}.call(l.prototype),t.Mode=l});