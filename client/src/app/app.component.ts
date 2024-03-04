import { Component } from '@angular/core';
import { faSortAmountUp, faSortAmountDown, faCheck } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Icons */
  faSortAmountUp=faSortAmountUp;
  faSortAmountDown=faSortAmountDown;
  faCheck=faCheck
}
