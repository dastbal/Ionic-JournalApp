import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from 'src/app/services/journal.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  journals;

  constructor(private js: JournalService, private router: Router) {}

  async ionViewDidEnter() {
    this.journals = await this.js.getJournals();
  }

  async deleteJournal(id) {
    await this.js.deleteJournal(id);
    window.location.reload();

    console.log(id);
  }
}
