define(["require","exports","module"],function(e,t,n){TabView=Backbone.View.extend({tagName:"li",events:{click:"activate"},initialize:function(e){},render:function(){return this.$el.html(_.template($("#tab-template").html(),{name:this.model.getName()})),this},activate:function(){this.model.set("isActivated",!0)}}),n.exports=TabView});