import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.page.html',
  styleUrls: ['./page-admin.page.scss'],
})
export class PageAdminPage implements OnInit {

  items: Array<Object>;

  constructor(public storage: Storage, public router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.voirData();
    console.log(this.items);
  }

  voirData() {
    return new Promise((resolve, reject) => {

      this.storage.get('reponse3').then((val) => {
        this.items = val;
       // console.log(val);
        resolve(true);
      })
        .catch((err) => {
          reject(false)
        });
    });
}

}
