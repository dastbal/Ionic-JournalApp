import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Journal {
  id: number;
  title: string;
  content: string;
}
@Injectable({
  providedIn: 'root',
})
export class StoreJournalsService {
  journals: any;
  startId = 1;
  constructor(private storage: Storage) {
    this.storage.create();
  }

  async createNewJournal(data) {
    const savedJournals = await this.getJournals();
    this.journals = savedJournals;
    if (this.journals.length === 0) {
      data = { id: 1, ...data };
    } else {
      const id = await this.getJournals();
      const newId = id.pop().id + 1;
      data = { id: newId, ...data };
    }

    this.journals.push(data);
    this.saveJournal(this.journals);
  }

  async saveJournal(journal) {
    this.storage.set('j', journal);
  }
  async getJournals() {
    const journals = await this.storage.get('j');
    console.log('journals', journals);

    if (journals === null) {
      return [];
    }
    return journals;
  }

  findAndDeleteJournal = (journal, id) => journal.id !== id;

  async deleteJournal(id) {
    const savedJournals = await this.getJournals();
    const newJournals = savedJournals.filter((journal) =>
      this.findAndDeleteJournal(journal, id)
    );
    console.log(newJournals);
    this.saveJournal(newJournals);
  }

  async editJournal(id, journalEdited) {
    const savedJournals = await this.getJournals();
    savedJournals.map((journal) => {
      if (journal.id === id) {
        console.log(journal);

        journal.title = journalEdited.title;
        journal.content = journalEdited.content;
      }
    });
    this.saveJournal(savedJournals);
  }
}
