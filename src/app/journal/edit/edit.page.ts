import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { JournalService } from '../../services/journal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {
  journalForm: FormGroup = new FormGroup({});

  constructor(
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
  async editJournal() {
    const journal = this.journalForm.value;
    const id = history.state.id;

    await this.js.editJournal(id, journal);

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

  ionViewDidEnter() {
    console.log(history.state);
    const title = history.state.title;
    const content = history.state.content;
    this.journalForm.patchValue({ title, content });
  }
}
