import { Component, OnInit } from '@angular/core';
import { Entry } from '../shared/entry.model';
import { EntryService } from '../shared/entrie.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  Entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(
      Entries => this.Entries = Entries,
      error => alert('Ops, error loading list')
    );
  }

  public deleteEntry(entry) {
    const mustDelete = confirm('Deseja realmente excluir essa categoria?');

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () => this.Entries = this.Entries.filter(element => element !== entry),
          error => alert('Ops, error at delet entry')
        );
    }
  }
}
