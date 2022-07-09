import { Injectable } from '@angular/core';
import { StoreJournalsService } from './store-journals.service';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private storeJournalsService: StoreJournalsService) {}
  newJournal(userid, data) {
    const payload = { userid, ...data };
    // console.log(payload);
    this.storeJournalsService
      .createNewJournal(payload)
      .subscribe((res) => console.log('created'));
  }
  async getJournals(userid) {
    return this.storeJournalsService.getJournals(userid);
  }

  deleteJournal(id) {
    this.storeJournalsService
      .deleteJournal(id)
      .subscribe((res) => console.log('deleted', res));
  }
  editJournal(id, editedJournal) {
    this.storeJournalsService
      .editJournal(id, editedJournal)
      .subscribe((res) => console.log('updated'));
  }
}
