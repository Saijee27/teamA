import { Component } from '@angular/core';
import { Eye } from 'src/app/models/eye';
import { EyeservicesService } from 'src/app/services/eyeservices.service';


@Component({
  selector: 'app-maincards',
  templateUrl: './maincards.component.html',
  styleUrls: ['./maincards.component.css']
})
export class MaincardsComponent {
  public foods!:Eye[];
  constructor(private service:EyeservicesService){}
 
  ngOnInit(){
   this.service.geteye().subscribe(data => this.foods=data);
  }
  getRoute(category: string): string {
    // Return the appropriate route based on the food category
    if (category === 'ear') {
      return '../subbanner'; // Change this to the desired route for vegetables
    } else if (category === 'brain') {
      return '../subbaner2'; // Change this to the desired route for fruits
    } 
    else if (category === 'hair') {
      return '../subbaner1'; // Change this to the desired route for fruits
    } 
    else if (category === 'tongue') {
      return '../subbaner3'; // Change this to the desired route for fruits
    } 
    else if (category === 'mouth') {
      return '../subbaner4'; // Change this to the desired route for fruits
    } 
    else if (category === 'nose') {
      return '../subbaner5'; // Change this to the desired route for fruits
    } 
    else if (category === 'lungs') {
      return '../subbaner6'; // Change this to the desired route for fruits
    } 
    else if (category === 'liver') {
      return '../subbaner7'; // Change this to the desired route for fruits
    } 
    else if (category === 'kidney') {
      return '../subbaner8'; // Change this to the desired route for fruits
    } 
    else if (category === 'pancreas') {
      return '../subbaner9'; // Change this to the desired route for fruits
    } 
    else if (category === 'intestine') {
      return '../subbaner10'; // Change this to the desired route for fruits
    } 
    else if (category === 'bones') {
      return '../subbaner11'; // Change this to the desired route for fruits
    } 
    else  {
      return ''; // Handle other categories if needed
    }
  }

}
