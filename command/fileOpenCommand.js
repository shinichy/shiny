define(["require","exports","module","fileOpenDialog","sessionManager"],function(e,t){var n=e("fileOpenDialog"),r=e("sessionManager"),i=function(){n.open(function(e){var t=new FileReader;(function(e){t.onload=function(){r.setContent(e,t.result)}})(e[0].name),t.onerror=function(){console.log(t.error)},t.readAsText(e[0])})};t.execute=i});