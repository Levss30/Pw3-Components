import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pw3-components';

  personagens = [
                  {"nome":"Luz Noceda", "palisman":"glifos", "ehPalisman":false, "nivel": 4},
                  {"nome":"Edalyn Clawthorne", "palisman":"corujuão","ehPalisman":true, "nivel": 1},
                  {"nome":"King Clawthorne", "palisman":"titan", "ehPalisman":false, "nivel": 3}
  ];
}
