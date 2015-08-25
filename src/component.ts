import { ComponentConverter, IComponent } from './component-converter';
import { ViewConverter, IView } from './view-converter';

export function ComponentBridge(definition: IComponent): any {
  var componentConverter = new ComponentConverter(definition);
  return componentConverter.convert.bind(componentConverter);
}

export function ViewBridge(definition: IView): any{
  var viewConverter = new ViewConverter(definition);
  return viewConverter.convert.bind(viewConverter);
}

export function registerComponent<T>(T, ngModule: angular.IModule) {
  let directiveName = T.__componentBridge.selector.replace(/-\D/g, 
    match => match.substr(1).toUpperCase());
  ngModule.directive(directiveName, function(){return T.__ddo});
}
