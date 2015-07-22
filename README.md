# ng-bridge
Bridging the gap of angular 1 to angular 2 for TypeScript

So... you've chosen to use angular and now you're faced with a question:

**Do I use angular v1 or v2?**

Easy answer... v2 isn't ready for production (as of now) so use v1.

Great! But I don't want my app to be outdated as soon as I release it.

**What can I do?**

1. use TypeScript (it is what v2 is written in)
1. Structure app using component-ized directives

**But the DDO (directive definition object) is dead and won't work in v2**

True, but that's why you're here looking at this project. We have an answer...

#### Angular 1 Directive in TypeScript:
``` javascript
class Person {
	public firstName: string;
	public lastName: string;
	
	public static factory(): ng.IDirective {
		var diretive = new Person();
		return {
			restrict: 'E',
			bindToController: true,
			controller: PersonController,
			controllerAs: 'p',
			link: directive.link.bind(directive),
			scope: { firstName: '=', lastName: '=' },
			template: `<div>{{p.firstName}} {{p.lastName}}</div>`
		};
	}
	
	public link(scope: ng.IScope, element: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: PersonController) {
		//linking logic, whether here or in controller
	} 
}
class PersonController {
	public firstName: string;
	public lastName: string;
	
	public greet () {
		alert('Hello ' + this.firstName + ' ' + this.lastName);
	}
}
```

#### Angular 2 Component in TypeScript:
``` javascript
@Component({
	selector: 'person',
	properties: ['firstName', 'lastName']
})
@View({
	template: `<div>{{firstName}} {{lastName}}</div>`
})
class Person {
	public firstName: string;
	public lastName: string;
	
	public greet () {
		alert('Hello ' + this.firstName + ' ' + this.lastName);
	}
}
```

#### Angular 1 Directive in TypeScript via ng-bridge:
``` javascript
@Component({
	selector: 'person',
	properties: ['firstName', 'lastName'],
	controllerAs: 'p',
	template: `<div>{{p.firstName}} {{p.lastName}}</div>`
})
class Person {
	public firstName: string;
	public lastName: string;
	
	public greet () {
		alert('Hello ' + this.firstName + ' ' + this.lastName);
	}
}
```

## How does it work
Simply stated, it maps the component decorator/attribute properties from angular 2 to the corresponding 
DDO properties used in angular 1, while providing a fatory method to allow for association to an
angular 1 module definition.

## Build
`npm run build`