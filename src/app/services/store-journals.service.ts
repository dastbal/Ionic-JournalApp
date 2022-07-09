import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StoreJournalsService {
  journals: any;
  startId = 1;
  apiNest = environment.api;
  constructor(private http: HttpClient) {
    // this.storage.create();
  }

  createNewJournal(data) {
    const request = `${this.apiNest}/journal/`;
    console.log(data);

    return this.http.post(request, data);
  }

  // async saveJournal(journal) {
  //   this.storage.set('j', journal);
  // }
  getJournals(userid) {
    const request = `${this.apiNest}/journal/${userid}`;
    return this.http.get(request);
  }

  // findAndDeleteJournal = (journal, id) => journal.id !== id;

  deleteJournal(id) {
    const request = `${this.apiNest}/journal/${id}`;

    return this.http.delete(request);
    // const savedJournals = await this.getJournals();
    // const newJournals = savedJournals.filter((journal) =>
    //   this.findAndDeleteJournal(journal, id)
    // );
    // console.log(newJournals);
    // this.saveJournal(newJournals);
  }

  editJournal(id, journalEdited) {
    const request = `${this.apiNest}/journal/${id}`;
    return this.http.put(request, journalEdited);
    // const savedJournals = await this.getJournals();
    // savedJournals.map((journal) => {
    //   if (journal.id === id) {
    //     console.log(journal);

    //     journal.title = journalEdited.title;
    //     journal.content = journalEdited.content;
    //   }
    // });
    // this.saveJournal(savedJournals);
  }
}
