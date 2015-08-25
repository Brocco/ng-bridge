var view_converter_1 = require('./view-converter');
describe('View Converter', function () {
    var definition = {
        template: '<the-template>'
    };
    function createInstance() {
        return new view_converter_1.ViewConverter(definition);
    }
    it('should exist', function () {
        expect(view_converter_1.ViewConverter).toBeDefined();
    });
    describe('constructor', function () {
        it('should create an instance', function () {
            var cc = new view_converter_1.ViewConverter(definition);
            expect(cc).toBeDefined();
        });
    });
    describe('Instance methods', function () {
        it('should expose an instance function covnert', function () {
            var uut = createInstance();
            expect(typeof uut.convert).toEqual('function');
        });
        it('should copy over the template', function () {
            definition = {
                template: 'some template'
            };
            var obj = function () { };
            var uut = createInstance();
            uut.convert(obj);
            expect(obj.__ddo).toEqual({ template: 'some template' });
        });
        it('should copy over the templateUrl', function () {
            definition = {
                templateUrl: 'some templateUrl'
            };
            var obj = function () { };
            var uut = createInstance();
            uut.convert(obj);
            expect(obj.__ddo).toEqual({ templateUrl: 'some templateUrl' });
        });
    });
});
