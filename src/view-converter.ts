export interface IView {
  template?: string;
  templateUrl?: string;
}

export class ViewConverter {
  constructor(private definition: IView) { }
  
  convert(viewClass: any){
    
    var ddo = viewClass.__ddo || {};
    
    if (this.definition.template) {
      ddo.template = this.definition.template;
    }
    if (this.definition.templateUrl) {
      ddo.templateUrl = this.definition.templateUrl;
    }
    
    viewClass.__viewBridgeInfo = this.definition;
    viewClass.__ddo = ddo;
    
    return viewClass;
  }
}