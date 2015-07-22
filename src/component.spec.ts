import { ComponentBridge, registerComponent } from './component';
import { IComponent } from './component-converter';

describe('component', () => {
	var definition: IComponent;
	
	beforeEach(() => {
		definition = {
			selector: 'test',
			controllerAs: 'ctrl'
		};
	});
	
	describe('ComponentBridge', () => {
		it('should be a function', () => {
			expect(typeof ComponentBridge).toEqual('function');
		});
	});
	
	describe('registerComponent', () => {
		it('should be a function', () => {
			expect(typeof registerComponent).toEqual('function');
		});
		
		it('should register an angular 1 directive', () => {
			var TestClass: any = function() {};
			TestClass.componentBridgeInfo = {
				selector: 'test'
			};
			
			var module = jasmine.createSpyObj('module', ['directive'])
			registerComponent(TestClass, module);
			expect(module.directive).toHaveBeenCalledWith('test', jasmine.any(Function));
		});
		
		it('should register an angular 1 directive (with proper rename)', () => {
			var TestClass: any = function() {};
			TestClass.componentBridgeInfo = {
				selector: 'test-component'
			};
			
			var module = jasmine.createSpyObj('module', ['directive'])
			registerComponent(TestClass, module);
			expect(module.directive).toHaveBeenCalledWith('testComponent', jasmine.any(Function));
		});
	});
});