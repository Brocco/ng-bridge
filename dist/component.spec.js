var component_1 = require('./component');
describe('component', function () {
    var definition;
    beforeEach(function () {
        definition = {
            selector: 'test',
            controllerAs: 'ctrl'
        };
    });
    describe('ComponentBridge', function () {
        it('should be a function', function () {
            expect(typeof component_1.ComponentBridge).toEqual('function');
        });
    });
    describe('registerComponent', function () {
        it('should be a function', function () {
            expect(typeof component_1.registerComponent).toEqual('function');
        });
        it('should register an angular 1 directive', function () {
            var TestClass = function () { };
            TestClass.componentBridgeInfo = {
                selector: 'test'
            };
            var module = jasmine.createSpyObj('module', ['directive']);
            component_1.registerComponent(TestClass, module);
            expect(module.directive).toHaveBeenCalledWith('test', jasmine.any(Function));
        });
        it('should register an angular 1 directive (with proper rename)', function () {
            var TestClass = function () { };
            TestClass.componentBridgeInfo = {
                selector: 'test-component'
            };
            var module = jasmine.createSpyObj('module', ['directive']);
            component_1.registerComponent(TestClass, module);
            expect(module.directive).toHaveBeenCalledWith('testComponent', jasmine.any(Function));
        });
    });
});
