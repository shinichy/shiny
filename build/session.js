define(["require","exports","module","ace/edit_session","modeMapping"],function(e,t,n){var r=e("ace/edit_session").EditSession,i=e("modeMapping");n.exports=Backbone.Model.extend({defaults:{isActivated:!1},initialize:function(e){this.set("path",e.path),this.set("editSession",new r(e.content,i.getMode(e.path))),delete e.path,delete e.content}})});