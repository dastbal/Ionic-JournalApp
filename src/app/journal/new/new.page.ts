import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage {
  journalForm: FormGroup = new FormGroup({});

  constructor(
    private authSAervice: AuthService,
    private fb: FormBuilder,
    private route: Router,
    private js: JournalService,
    private toastController: ToastController
  ) {
    this.journalForm = this.initForm();
  }
  initForm() {
    return this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      content: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  async createNewJournal() {
    const userLogged = await this.authSAervice.getUser();

    const journal = this.journalForm.value;
    console.log(journal);
    console.log(userLogged.id);
    console.log(userLogged);
    await this.js.newJournal(userLogged.id, journal);

    this.route.navigate(['tabs']);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Saved.',
      duration: 2000,
      position: 'middle',
    });
    toast.present();
  }
}
