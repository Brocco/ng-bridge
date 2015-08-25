import {IView, ViewConverter} from './view-converter';

describe('View Converter', () => {
	var definition: IView = {
		template: '<the-template>'
	};
	
	function createInstance(){
		return new ViewConverter(definition);
	}
	
	it('should exist', () => {
		expect(ViewConverter).toBeDefined();
	});
	
	describe('constructor', () => {
		it('should create an instance', () => {
			var cc = new ViewConverter(definition);
			expect(cc).toBeDefined();
		});
	});
	
	describe('Instance methods', () => {
		it('should expose an instance function covnert', () => {
			let uut = createInstance();
			expect(typeof uut.convert).toEqual('function');
		});
    
    it('should copy over the template', () => {
      definition = {
        template: 'some template'
      };
      var obj: any = function(){}
      let uut = createInstance();
      uut.convert(obj);
      expect(obj.__ddo).toEqual({template: 'some template'});
    });
    
    it('should copy over the templateUrl', () => {
      definition = {
        templateUrl: 'some templateUrl'
      };
      var obj: any = function(){}
      let uut = createInstance();
      uut.convert(obj);
      expect(obj.__ddo).toEqual({templateUrl: 'some templateUrl'});
    });
	});
});