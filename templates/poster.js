(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['poster'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"posters") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":18,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"poster_path") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":4},"end":{"line":17,"column":11}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <div class=\"poster\" onclick=\"getMovieDetails('"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"id") : depth0), depth0))
    + "')\">\r\n        <img src=\""
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"ImageBaseURL") : depths[1]), depth0))
    + "w220_and_h330_face"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"poster_path") : depth0), depth0))
    + "\" alt=\"poster\" />\r\n        <div class=\"labels\">\r\n          <div class=\"left\">\r\n            <img src=\"./public/icons/star.svg\" class=\"icons\" alt=\"rating\" />\r\n            <span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"vote_average") : depth0), depth0))
    + "</span>\r\n          </div>\r\n          <div class=\"right\">\r\n            <img src=\"./public/icons/list.svg\" class=\"icons\" alt=\"duration\" />\r\n            <span>"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"release_date") : depth0), depth0))
    + "</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "<div class=\"error-message\"><h1>No data Found</h1></div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"posters") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(5, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":21,"column":7}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
})();