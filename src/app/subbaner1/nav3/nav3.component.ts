import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav3',
  templateUrl: './nav3.component.html',
  styleUrls: ['./nav3.component.css']
})
export class Nav3Component {
  public image="../assets/images (1).png"
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('search')
  }

}
