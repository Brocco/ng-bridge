export interface IView {
    template?: string;
    templateUrl?: string;
}
export declare class ViewConverter {
    private definition;
    constructor(definition: IView);
    convert(viewClass: any): any;
}
