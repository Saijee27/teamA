import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component {
  constructor(private routes:Router){}
  onclick(){
    this.routes.navigateByUrl('doctors')
  }
}
