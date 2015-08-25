var component_converter_1 = require('./component-converter');
var view_converter_1 = require('./view-converter');
function ComponentBridge(definition) {
    var componentConverter = new component_converter_1.ComponentConverter(definition);
    return componentConverter.convert.bind(componentConverter);
}
exports.ComponentBridge = ComponentBridge;
function ViewBridge(definition) {
    var viewConverter = new view_converter_1.ViewConverter(definition);
    return viewConverter.convert.bind(viewConverter);
}
exports.ViewBridge = ViewBridge;
function registerComponent(T, ngModule) {
    var directiveName = T.__componentBridge.selector.replace(/-\D/g, function (match) { return match.substr(1).toUpperCase(); });
    ngModule.directive(directiveName, function () { return T.__ddo; });
}
exports.registerComponent = registerComponent;
