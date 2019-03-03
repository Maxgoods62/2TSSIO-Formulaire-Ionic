import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage implements OnInit {

  items: Array<string>;

  public questionnaireForm: FormGroup;


  constructor(public formBuilder: FormBuilder, public router: Router, public storage: Storage) {
    this.questionnaireForm = this.formBuilder.group({
      question1: [''],
      question2: [''],
      question3: [''],
      question4a: [''],
      question4b: [''],
      question5: [''],
      question6: [''],
      question7: [''],
      question8: [''],
      question9: [''],
      question10: [''],
      question11: [''],
      question12: [''],
      question13: [''],
      question14: [''],
      question15: [''],
      question15b: [''],
      question16: [''],
      dateVisite: ['']
    })
  }


  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.items = ['Baincthum', 'Boulogne sur Mer', 'Condette', 'Conteville-les-Boulogne', 'Dannes', 'Echinghen', 'Equihen plage', 'Hesdigneul-les-Boulogne', 'Hesdin l\'abbé', 'Isques', 'La Capelle les Boulogne', 'Le Portel', 'Nesles', 'Neufchâtel Hardelot', 'Outreau', 'Pernes-les-Boulognes', 'Pittefaux', 'St Etienne-au-mont', 'St Léonard', 'St-Martin-Boulogne', 'Wimereux', 'Wimille'];
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function (item) {
        return item.toLowerCase().includes(val.toLowerCase());
      });
    }
  }



  sendQuestionnaire() {
    this.questionnaireForm.controls["dateVisite"].setValue(new Date());

    /*
    this.storage.get('counter')
      .then((val) => { })
      .catch((err) => {
        console.log(err);
        this.storage.set('counter', 0);
      }
      );

    this.storage.get('counter').then((val) => {
      var valeur = parseInt(val);
      if (typeof valeur != 'number') {
        valeur = 0;
      }
      valeur++;
      this.storage.set(valeur.toString(), this.questionnaireForm.value);
      this.storage.set('counter', valeur);
      console.log(valeur);
    });

    this.storage.get("1").then((val2) => {
      console.log(val2);
    });
    */

    this.storage.get('reponse3').then((val) => {
      var data = new Array();
      if (val === null) {
         data.push(this.questionnaireForm.value);
      } else {
        val.forEach(function (element1) {
          data.push(element1);
        });
        data.push(this.questionnaireForm.value);
      }

      this.storage.set('reponse3', data);

      /*
      data.forEach(function (element) {
        console.log(element);
      });
      */
    });



    this.router.navigateByUrl('remerciement');

  }


  questionValue(question, event) {

    this.questionnaireForm.controls[question].setValue(event.detail.value);

    console.log(question + " : " + event.detail.value);
  }

  checkboxValue(question, event) {
    let valueBase = this.questionnaireForm.value[question];

    let valueSend = new Array();

    if (valueBase != []) {
      valueBase.forEach(function (element) {
        valueSend.push(element);
      });
    }

    if (event.detail.checked) {
      // ajouter 
      valueSend.push(event.detail.value)
      //console.log(valueSend);
      this.questionnaireForm.controls[question].setValue(valueSend);
    } else {
      // enlever
      let pos = valueSend.indexOf(event.detail.value);
      valueSend.splice(pos, 1)
      this.questionnaireForm.controls[question].setValue(valueSend);
    }
    console.log(question + " : " + valueSend);
  }

  question6autre(event) {

    let valueBase = this.questionnaireForm.value["question6"];
    let valueSend = new Array();

    if (valueBase != []) {
      valueBase.forEach(function (element) {
        if (element == "BAFA" || element == "BNSSA" || element == "PSC1-AFGSU" || element == "PSE1-PSE1" || element == "TOEIC") {
          valueSend.push(element);
        }
      });
    }

    // Ajouter dans le tableau
    let valeur = event.detail.value;
    valueSend.push(valeur);

    this.questionnaireForm.controls["question6"].setValue(valueSend);
    console.log(valueSend);
  }

  question9autre(event) {

    let valueBase = this.questionnaireForm.value["question9"];
    let valueSend = new Array();

    if (valueBase != []) {
      valueBase.forEach(function (element) {
        if (element == "internet" || element == "affiche" || element == "presse" || element == "reseaux-sociaux" || element == "famille-amis") {
          valueSend.push(element);
        }
      });
    }

    // Ajouter dans le tableau
    let valeur = event.detail.value;
    valueSend.push(valeur);

    this.questionnaireForm.controls["question9"].setValue(valueSend);
    console.log(valueSend);
  }

  question10autre(event) {

    let valueBase = this.questionnaireForm.value["question10"];
    let valueSend = new Array();

    if (valueBase != []) {
      valueBase.forEach(function (element) {
        if (element == "restauration" || element == "animation" || element == "hotellerie" || element == "services-a-la-personne" || element == "vente") {
          valueSend.push(element);
        }
      });
    }

    // Ajouter dans le tableau
    let valeur = event.detail.value;
    valueSend.push(valeur);

    this.questionnaireForm.controls["question10"].setValue(valueSend);
    console.log(valueSend);
  }



}
