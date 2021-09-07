import { Injectable } from "@angular/core";
@Injectable()
export class DataService {
    
    private countryList: any
    private products: any;
    constructor() {
        this.countryList = [{ name: "India", code: "IN" },
        { name: 'United States', code: "USA" }];
    }
       
    getCountryList(){
        return this.countryList;
    }
}
