var component_converter_1 = require('./component-converter');
function ComponentBridge(definition) {
    var componentConverter = new component_converter_1.ComponentConverter(definition);
    return componentConverter.convert.bind(componentConverter);
}
exports.ComponentBridge = ComponentBridge;
function registerComponent(T, ngModule) {
    var directiveName = T.componentBridgeInfo.selector.replace(/-\D/g, function (match) { return match.substr(1).toUpperCase(); });
    ngModule.directive(directiveName, function () { return T; });
}
exports.registerComponent = registerComponent;
