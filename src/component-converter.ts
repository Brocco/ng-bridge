export interface IComponent {
  selector: string;
  controllerAs: string;
  /** 2-way bound properties */
  properties?: string[];
  /** parent scope reference properties */
  events?: string[];
  /** string reference properties */
  strProperties?: string[];
  priority?: number;
  transclude?: any;
}

export class ComponentConverter {
  constructor(private definition: IComponent) { }

  public convert(componentClass: any) {
    
    var ddo = componentClass.__ddo || {};

    ddo.bindToController = true;
    ddo.scope = this.buildScope();
    ddo.restrict = 'E', //todo: base restrict off of selector patter;
    ddo.name = this.definition.selector;
    ddo.priority = this.definition.priority;
    ddo.transclude = this.definition.transclude;
    ddo.controller = componentClass;
    ddo.controllerAs = this.definition.controllerAs;
    ddo.link = function(scope: angular.IScope,
      element: angular.IAugmentedJQuery,
      attr: any,
      ctrl: any) {
      if (ctrl.link) {
        ctrl.link(scope, element, attr);
      }
    };

    componentClass.__componentBridge = this.definition;
    componentClass.__ddo = ddo;
    
    return componentClass;
  }

  private buildScope() {
    var scope;

    if (this.definition.properties && this.definition.properties.length > 0) {
      scope = scope || {};
      this.addProperties(scope, this.definition.properties, '=');
    }

    if (this.definition.events && this.definition.events.length > 0) {
      scope = scope || {};
      this.addProperties(scope, this.definition.events, '&');
    }

    if (this.definition.strProperties && this.definition.strProperties.length > 0) {
      scope = scope || {};
      this.addProperties(scope, this.definition.strProperties, '@');
    }

    return scope;
  }

  private addProperties(obj: Object, properties: string[], prefix: string) {
    properties.forEach((prop) => {
      obj[prop] = prefix + prop;
    });
  }
}