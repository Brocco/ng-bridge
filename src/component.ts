import { ComponentConverter, IComponent } from './component-converter';

export function ComponentBridge(definition: IComponent): any {
  var componentConverter = new ComponentConverter(definition)
  return componentConverter.convert.bind(componentConverter);
}

export function registerComponent<T>(T, ngModule: angular.IModule) {
  let directiveName = T.componentBridgeInfo.selector.replace(/-\D/g, 
    match => match.substr(1).toUpperCase());
  ngModule.directive(directiveName, function(){return T});
}
