export class Customer {

	public 	id:number;
	public	name:string;
	public	mobile:string;
	public	email:string;
	public	measurement:string;
	public	avatar:string;
	public	complete: boolean = false;


		constructor(values: Object = {}) {
    	Object.assign(this, values);
  }
		 // public role :Ingredient[]) {

}
