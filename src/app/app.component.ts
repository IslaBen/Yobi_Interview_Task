import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { Note } from './data/note';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YobiNotes';
  notes$ = this.service.getNotes$;
  selectedNote: Note = {
    title: '',
    description: ''
  };
  constructor(
    private service: NotesService,
    private dialog: MatDialog) {
  }

  selectNote(note: Note): void {
    this.selectedNote = {...note};
  }

  deleteNote(id: string): void {
    this.dialog.open(DeletePopupComponent).afterClosed().subscribe((response: boolean) => {
      if (response) {
        if(id === this.selectedNote.id) this.resetNote();
        this.service.deleteNote(id);
      }
    })
  }

  editNote(note: Note): void {
    this.service.editNote(note);
  }

  createNote(note: Note): void {
    this.service.addNote(note);
    this.resetNote();
  }

  resetNote() {
    this.selectedNote = {
      id: '',
      title: '',
      description: ''
    }
  }
}
