import { Component } from '@angular/core';
@Component({
  selector: 'app-navitems',
  templateUrl: './navitems.component.html',
  styleUrls: ['./navitems.component.css']
})
export class NavitemsComponent {
  
  navitems: Array<any>
  currentDate:any;
  countryList :any;
  country:any;
  cartTotal:any;
  constructor() {
    this.currentDate= new Date();
    this.country='';
    
    this.navitems = [{
      text: "Login",
      link: "login"
    }
  ]
  };

 

}