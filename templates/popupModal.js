(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['popupModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <h2>\""
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"tagline") || (depth0 != null ? lookupProperty(depth0,"tagline") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tagline","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":22}}}) : helper)))
    + "\"</h2>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"group\">\r\n        <h3>Cast</h3>\r\n        <span>"
    + container.escapeExpression((lookupProperty(helpers,"arrToStr")||(depth0 && lookupProperty(depth0,"arrToStr"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"credits") : depth0)) != null ? lookupProperty(stack1,"cast") : stack1),{"name":"arrToStr","hash":{},"data":data,"loc":{"start":{"line":27,"column":14},"end":{"line":27,"column":39}}}))
    + "</span>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"content\">\r\n  <img src=\"./public/icons/cancel.svg\" class=\"modal-close\" alt=\"close\" onclick=\"closeModal()\" />\r\n  <div class=\"title\">\r\n    "
    + alias3((lookupProperty(helpers,"loadImageBackdrop")||(depth0 && lookupProperty(depth0,"loadImageBackdrop"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"images") : depth0),"backdrop",{"name":"loadImageBackdrop","hash":{},"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":4,"column":43}}}))
    + "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tagline") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"body\">\r\n    <div class=\"group\">\r\n      <h2>"
    + alias3(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":19}}}) : helper)))
    + "</h2>\r\n      <div class=\"labels\">\r\n        <img src=\"./public/icons/star.svg\" class=\"icons\" alt=\"rating\" />\r\n        <span>"
    + alias3(((helper = (helper = lookupProperty(helpers,"vote_average") || (depth0 != null ? lookupProperty(depth0,"vote_average") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"vote_average","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":30}}}) : helper)))
    + "</span>\r\n      </div>\r\n      <div class=\"labels\">\r\n        <img src=\"./public/icons/clock.svg\" class=\"icons\" alt=\"duration\" />\r\n        <span>"
    + alias3((lookupProperty(helpers,"duration")||(depth0 && lookupProperty(depth0,"duration"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"runtime") : depth0),{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":18,"column":14},"end":{"line":18,"column":34}}}))
    + "</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"group\">\r\n      <p>"
    + alias3(((helper = (helper = lookupProperty(helpers,"overview") || (depth0 != null ? lookupProperty(depth0,"overview") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"overview","hash":{},"data":data,"loc":{"start":{"line":22,"column":9},"end":{"line":22,"column":21}}}) : helper)))
    + "</p>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"credits") : depth0)) != null ? lookupProperty(stack1,"cast") : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"group\">\r\n      <h3>Genres</h3>\r\n      <span>"
    + alias3((lookupProperty(helpers,"arrToStr")||(depth0 && lookupProperty(depth0,"arrToStr"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"arrToStr","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":31}}}))
    + "</span>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});
})();