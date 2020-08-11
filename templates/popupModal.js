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
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"group\">\r\n        <h3>Cast</h3>\r\n        <span>"
    + container.escapeExpression((lookupProperty(helpers,"genersStr")||(depth0 && lookupProperty(depth0,"genersStr"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"castings") : depth0),{"name":"genersStr","hash":{},"data":data,"loc":{"start":{"line":27,"column":14},"end":{"line":27,"column":36}}}))
    + "</span>\r\n      </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"content\">\r\n  <img src=\"./public/icons/cancel.svg\" class=\"modal-close\" alt=\"close\" onclick=\"closeModal()\" />\r\n  <div class=\"title\">\r\n    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"ImageBaseURL") || (depth0 != null ? lookupProperty(depth0,"ImageBaseURL") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ImageBaseURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":14},"end":{"line":4,"column":30}}}) : helper)))
    + "w500"
    + alias4(((helper = (helper = lookupProperty(helpers,"backdrop_path") || (depth0 != null ? lookupProperty(depth0,"backdrop_path") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"backdrop_path","hash":{},"data":data,"loc":{"start":{"line":4,"column":34},"end":{"line":4,"column":51}}}) : helper)))
    + "\" />\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"tagline") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":4},"end":{"line":7,"column":11}}})) != null ? stack1 : "")
    + "  </div>\r\n  <div class=\"body\">\r\n    <div class=\"group\">\r\n      <h2>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":11,"column":10},"end":{"line":11,"column":19}}}) : helper)))
    + "</h2>\r\n      <div class=\"labels\">\r\n        <img src=\"./public/icons/star.svg\" class=\"icons\" alt=\"rating\" />\r\n        <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vote_average") || (depth0 != null ? lookupProperty(depth0,"vote_average") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_average","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":30}}}) : helper)))
    + "</span>\r\n      </div>\r\n      <div class=\"labels\">\r\n        <img src=\"./public/icons/list.svg\" class=\"icons\" alt=\"duration\" />\r\n        <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"release_date") || (depth0 != null ? lookupProperty(depth0,"release_date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"release_date","hash":{},"data":data,"loc":{"start":{"line":18,"column":14},"end":{"line":18,"column":30}}}) : helper)))
    + "</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"group\">\r\n      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"overview") || (depth0 != null ? lookupProperty(depth0,"overview") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overview","hash":{},"data":data,"loc":{"start":{"line":22,"column":9},"end":{"line":22,"column":21}}}) : helper)))
    + "</p>\r\n    </div>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"castings") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":4},"end":{"line":29,"column":11}}})) != null ? stack1 : "")
    + "    <div class=\"group\">\r\n      <h3>Genres</h3>\r\n      <span>"
    + alias4((lookupProperty(helpers,"genersStr")||(depth0 && lookupProperty(depth0,"genersStr"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"genres") : depth0),{"name":"genersStr","hash":{},"data":data,"loc":{"start":{"line":32,"column":12},"end":{"line":32,"column":32}}}))
    + "</span>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});
})();