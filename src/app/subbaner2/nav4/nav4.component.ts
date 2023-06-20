import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav4',
  templateUrl: './nav4.component.html',
  styleUrls: ['./nav4.component.css']
})
export class Nav4Component {
  public image="../assets/images (1).png"
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
