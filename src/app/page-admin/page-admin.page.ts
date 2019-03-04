import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.page.html',
  styleUrls: ['./page-admin.page.scss'],
})
export class PageAdminPage implements OnInit {

  items: Array<Object>;

  constructor(public storage: Storage, public router: Router, private file: File) {

  }

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


  stringToArray(str) {
    var utf8 = unescape(encodeURIComponent(str));

    var arr = [];
    for (var i = 0; i < utf8.length; i++) {
        arr.push(utf8.charCodeAt(i));
    }

    return arr;
  }

  savebase64AsFile(folderPath, fileName, base64, contentType) {
    var DataBlob = base64;
    try {
      (<any>window).resolveLocalFileSystemURL(folderPath, function (dir) {
        dir.getFile(fileName, { create: true }, function (file) {
          file.createWriter(function (fileWriter) {
            fileWriter.write(DataBlob);
            fileWriter.onwrite = function () {
              alert('Ficheir correctement sauvegardé à cette endroit ' + folderPath);
            }
          }, function () {
            alert('Unable to save file in path ' + folderPath);
          });
        });
      });
    } catch (err) {
      alert(err);
    }

  }

  exportData() {

    this.storage.get('reponse3').then((val) => {
      var texte = "";
      val.forEach(function (element1) {
        //texte += Object.values(element1);
        var textefinal = '      \
        {                       \n \
          "dateVisite" :  "' + element1.dateVisite + '",   \n \
          "question1" : "' + element1.question1 + '",   \n \
          "question2" : "' + element1.question2 + '",   \n \
          "question3" : "' + element1.question3 + '",   \n \
          "question4a" : "' + element1.question4a + '",   \n \
          "question4b" : "' + element1.question4b + '",   \n \
          "question5" : "' + element1.question5 + '",   \n \
          "question6" : "' + element1.question6 + '",   \n \
          "question7" : "' + element1.question7 + '",   \n \
          "question8" : "' + element1.question8 + '",   \n \
          "question9" : "' + element1.question9 + '",   \n \
          "question10" : "' + element1.question10 + '",   \n \
          "question11" : "' + element1.question11 + '",   \n \
          "question12" : "' + element1.question12 + '",   \n \
          "question12b" : "' + element1.question12b + '",   \n \
          "question13" : "' + element1.question13 + '",   \n \
          "question14" : "' + element1.question14 + '",   \n \
          "question15" : "' + element1.question15+ '",   \n \
          "question15b" : "' + element1.question15b + '",   \n \
          "question16" : "' + element1.question16 + '"   \n \
        }                       \n \
        ';

        if (texte != "") {
          texte += ",";
        }
        texte += textefinal;


      });
      this.savebase64AsFile(this.file.externalApplicationStorageDirectory, "donneesFormulaire.txt", texte, "application/json");
      //alert(texte);

    });

  }


}
