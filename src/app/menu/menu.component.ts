import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public pays=[];
  constructor() {
    this.pays=[{
      "pays": "France",
      "url": "/pays/France"
  }, {
      "pays": "Autre",
      "url": "/pays/Autres"
  }, {
      "pays": "Argentine",
      "url": "/pays/Argentine"
  }, {
      "pays": "Chili",
      "url": "/pays/Chili"
  }, {
      "pays": "Bolivie",
      "url": "/pays/Bolivie"
  }, {
      "pays": "Perou",
      "url": "/pays/Perou"
  }, {
      "pays": "Brasil",
      "url": "/pays/Brasil"
  }, {
      "pays": "Italie",
      "url": "/pays/Italie"
  }, {
      "pays": "Autriche",
      "url": "/pays/Autriche"
  }, {
      "pays": "Slovenie",
      "url": "/pays/slovenie"
  }, {
      "pays": "Croatie",
      "url": "/pays/Croatie"
  }, {
      "pays": "Montenegro",
      "url": "/pays/Montenegro"
  }, {
      "pays": "Grece",
      "url": "/pays/Grece"
  }, {
      "pays": "Turquie",
      "url": "/pays/Turquie"
  }, {
      "pays": "Iran",
      "url": "/pays/Iran"
  }, {
      "pays": "Kazakstan",
      "url": "/pays/Kazakstan"
  }, {
      "pays": "Georgie",
      "url": "/pays/Georgie"
  }, {
      "pays": "Albanie",
      "url": "/pays/Albanie"
  }, {
      "pays": "Uzbekistan",
      "url": "/pays/Uzbekistan"
  }, {
      "pays": "France",
      "url": "/pays/France"
  }, {
      "pays": "Armenie",
      "url": "/pays/Armenie"
  }, {
      "pays": "Turkmenistan",
      "url": "/pays/Turkmenistan"
  }, {
      "pays": "Tadjikistan",
      "url": "/pays/Tadjikistan"
  }, {
      "pays": "Kirgizstan",
      "url": "/pays/Kirgizstan"
  }, {
      "pays": "Russie",
      "url": "/pays/Russie"
  }, {
      "pays": "Norvege",
      "url": "/pays/Norvege"
  }, {
      "pays": "Suede",
      "url": "/pays/Suede"
  }, {
      "pays": "Finlande",
      "url": "/pays/Finlande"
  },
]

   }

  ngOnInit(): void {
  }
  getPayslUrl(pays:string){
    return `/pays/${pays}`;
  }
}
