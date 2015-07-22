export interface IComponent {
  selector: string;
  controllerAs: string;
  /** 2-way bound properties */
  properties?: string[];
  /** parent scope reference properties */
  events?: string[];
  /** string reference properties */
  strProperties?: string[];
  template?: string;
  templateUrl?: string;
  priority?: number;
  transclude?: any;
}

export class ComponentConverter {
  constructor(private definition: IComponent) { }

  public convert(componentClass: any) {

    var directiveDefinition: angular.IDirective = {
      bindToController: true,
      scope: this.buildScope(),
      restrict: 'E', //todo: base restrict off of selector pattern
      name: this.definition.selector,
      template: this.definition.template,
      templateUrl: this.definition.templateUrl,
      priority: this.definition.priority,
      transclude: this.definition.transclude,
      controller: componentClass,
      controllerAs: this.definition.controllerAs,
      link: function(scope: angular.IScope,
        element: angular.IAugmentedJQuery,
        attr: any,
        ctrl: any) {
        if (ctrl.link) {
          ctrl.link(scope, element, attr);
        }
      }
    };

    directiveDefinition['componentBridgeInfo'] = this.definition;

    return directiveDefinition;
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