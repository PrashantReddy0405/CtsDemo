import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  sesn:Season = Season.Winter;

  constructor(){
    console.log(this.sesn)
  }

}
enum Season {
  Spring=1,
  Summer,
  Winter,
  Autumn
}
