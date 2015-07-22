var component_converter_1 = require('./component-converter');
describe('Component Converter', function () {
    var definition = {
        selector: 'test-selector',
        controllerAs: 'ctrl'
    };
    function createInstance() {
        return new component_converter_1.ComponentConverter(definition);
    }
    it('should exist', function () {
        expect(component_converter_1.ComponentConverter).toBeDefined();
    });
    describe('constructor', function () {
        it('should create an instance', function () {
            var cc = new component_converter_1.ComponentConverter(definition);
            expect(cc).toBeDefined();
        });
    });
    describe('Instance methods', function () {
        it('should expose an instance function covnert', function () {
            var uut = createInstance();
            expect(typeof uut.convert).toEqual('function');
        });
    });
});
