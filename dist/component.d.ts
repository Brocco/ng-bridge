import { IComponent } from './component-converter';
import { IView } from './view-converter';
export declare function ComponentBridge(definition: IComponent): any;
export declare function ViewBridge(definition: IView): any;
export declare function registerComponent<T>(T: any, ngModule: angular.IModule): void;
