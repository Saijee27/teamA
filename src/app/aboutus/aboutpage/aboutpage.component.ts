import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent {
  public images="../assets/Data/healthy.jpg"
  public image="../assets/images (1).png"
  constructor(private routes:Router){}
  onclick()
  {
    this.routes.navigateByUrl('contactus')
  }
  onclick1()
  {
    this.routes.navigateByUrl('login')
  }
}
