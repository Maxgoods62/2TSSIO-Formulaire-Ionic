import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

  constructor() { }

  items: Array<string>;

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Baincthum', 'Boulogne sur Mer', 'Condette', 'Conteville-les-Boulogne', 'Dannes', 'Echinghen', 'Equihen plage', 'Hesdigneul-les-Boulogne', 'Hesdin l\'abbé', 'Isques', 'La Cappelle les Boulogne'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  question3autre(ev: any) {
    let val = ev.target.value;
  }

  question6autre(ev: any) {
    let val = ev.target.value;
  }

}
