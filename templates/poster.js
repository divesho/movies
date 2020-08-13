(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['poster'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"posters") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":18,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"poster\" onclick=\"getMovieDetails('"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":3,"column":52},"end":{"line":3,"column":58}}}) : helper)))
    + "')\">\r\n          <div class=\"labels\">\r\n            <div class=\"left\">\r\n              <img src=\"./public/icons/star.svg\" class=\"icons\" alt=\"rating\" />\r\n              <span>"
    + alias4(((helper = (helper = lookupProperty(helpers,"vote_average") || (depth0 != null ? lookupProperty(depth0,"vote_average") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vote_average","hash":{},"data":data,"loc":{"start":{"line":8,"column":20},"end":{"line":8,"column":36}}}) : helper)))
    + "</span>\r\n            </div>\r\n            <div class=\"right\">\r\n              <img src=\"./public/icons/clock.svg\" class=\"icons\" alt=\"duration\" />\r\n              <span>"
    + alias4((lookupProperty(helpers,"duration")||(depth0 && lookupProperty(depth0,"duration"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"runtime") : depth0),{"name":"duration","hash":{},"data":data,"loc":{"start":{"line":12,"column":20},"end":{"line":12,"column":40}}}))
    + "</span>\r\n            </div>\r\n          </div>\r\n          "
    + alias4((lookupProperty(helpers,"loadImageBackdrop")||(depth0 && lookupProperty(depth0,"loadImageBackdrop"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"images") : depth0),"poster",{"name":"loadImageBackdrop","hash":{},"data":data,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":47}}}))
    + "\r\n      </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"error-message\"><h1>No data Found</h1></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"length") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();