var ComponentConverter = (function () {
    function ComponentConverter(definition) {
        this.definition = definition;
    }
    ComponentConverter.prototype.convert = function (componentClass) {
        var directiveDefinition = {
            bindToController: true,
            scope: this.buildScope(),
            restrict: 'E',
            name: this.definition.selector,
            template: this.definition.template,
            templateUrl: this.definition.templateUrl,
            priority: this.definition.priority,
            transclude: this.definition.transclude,
            controller: componentClass,
            controllerAs: this.definition.controllerAs,
            link: function (scope, element, attr, ctrl) {
                if (ctrl.link) {
                    ctrl.link(scope, element, attr);
                }
            }
        };
        directiveDefinition['componentBridgeInfo'] = this.definition;
        return directiveDefinition;
    };
    ComponentConverter.prototype.buildScope = function () {
        var scope;
        if (this.definition.properties && this.definition.properties.length > 0) {
            scope = scope || {};
            this.addProperties(scope, this.definition.properties, '=');
        }
        if (this.definition.events && this.definition.events.length > 0) {
            scope = scope || {};
            this.addProperties(scope, this.definition.events, '&');
        }
        if (this.definition.strProperties && this.definition.strProperties.length > 0) {
            scope = scope || {};
            this.addProperties(scope, this.definition.strProperties, '@');
        }
        return scope;
    };
    ComponentConverter.prototype.addProperties = function (obj, properties, prefix) {
        properties.forEach(function (prop) {
            obj[prop] = prefix + prop;
        });
    };
    return ComponentConverter;
})();
exports.ComponentConverter = ComponentConverter;
