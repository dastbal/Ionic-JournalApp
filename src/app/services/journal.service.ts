import { Injectable } from '@angular/core';
import { StoreJournalsService } from './store-journals.service';

@Injectable({
  providedIn: 'root',
})
export class JournalService {
  constructor(private storeJournalsService: StoreJournalsService) {}
  async newJournal(data) {
    await this.storeJournalsService.createNewJournal(data);
  }
  async getJournals() {
    return await this.storeJournalsService.getJournals();
  }

  async deleteJournal(id) {
    await this.storeJournalsService.deleteJournal(id);
  }
  async editJournal(id, editedJournal) {
    await this.storeJournalsService.editJournal(id, editedJournal);
  }
}
