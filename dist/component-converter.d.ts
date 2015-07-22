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
export declare class ComponentConverter {
    private definition;
    constructor(definition: IComponent);
    convert(componentClass: any): ng.IDirective;
    private buildScope();
    private addProperties(obj, properties, prefix);
}
