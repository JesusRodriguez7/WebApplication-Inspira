import {Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule,MatIconModule,RouterLink,MatCardModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',

})
export class ReviewComponent {

}
