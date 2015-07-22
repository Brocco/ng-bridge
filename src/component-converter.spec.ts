import {IComponent, ComponentConverter} from './component-converter';

describe('Component Converter', () => {
	var definition: IComponent = {
		selector: 'test-selector',
		controllerAs: 'ctrl'
	};
	
	function createInstance(){
		return new ComponentConverter(definition);
	}
	
	it('should exist', () => {
		expect(ComponentConverter).toBeDefined();
	});
	
	describe('constructor', () => {
		it('should create an instance', () => {
			var cc = new ComponentConverter(definition);
			expect(cc).toBeDefined();
		});
	});
	
	describe('Instance methods', () => {
		it('should expose an instance function covnert', () => {
			var uut = createInstance();
			expect(typeof uut.convert).toEqual('function');
		});
	});
});