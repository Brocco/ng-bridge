var ViewConverter = (function () {
    function ViewConverter(definition) {
        this.definition = definition;
    }
    ViewConverter.prototype.convert = function (viewClass) {
        var ddo = viewClass.__ddo || {};
        if (this.definition.template) {
            ddo.template = this.definition.template;
        }
        if (this.definition.templateUrl) {
            ddo.templateUrl = this.definition.templateUrl;
        }
        viewClass.__viewBridgeInfo = this.definition;
        viewClass.__ddo = ddo;
        return viewClass;
    };
    return ViewConverter;
})();
exports.ViewConverter = ViewConverter;
