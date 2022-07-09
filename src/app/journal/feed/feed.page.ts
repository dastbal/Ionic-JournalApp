import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  journals;

  constructor(
    private js: JournalService,
    private router: Router,
    private authSAervice: AuthService
  ) {}

  async ionViewDidEnter() {
    const userLogged = await this.authSAervice.getUser();

    const jns = await this.js.getJournals(userLogged.id);
    jns.subscribe((jn) => {
      console.log(jn);
      this.journals = jn;
    });
  }

  deleteJournal(id) {
    // conso
    this.js.deleteJournal(id);
    window.location.reload();

    console.log(id);
  }
}
