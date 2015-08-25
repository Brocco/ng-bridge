var ComponentConverter = (function () {
    function ComponentConverter(definition) {
        this.definition = definition;
    }
    ComponentConverter.prototype.convert = function (componentClass) {
        var ddo = componentClass.__ddo || {};
        ddo.bindToController = true;
        ddo.scope = this.buildScope();
        ddo.restrict = 'E',
            ddo.name = this.definition.selector;
        ddo.priority = this.definition.priority;
        ddo.transclude = this.definition.transclude;
        ddo.controller = componentClass;
        ddo.controllerAs = this.definition.controllerAs;
        ddo.link = function (scope, element, attr, ctrl) {
            if (ctrl.link) {
                ctrl.link(scope, element, attr);
            }
        };
        componentClass.__componentBridge = this.definition;
        componentClass.__ddo = ddo;
        return componentClass;
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
