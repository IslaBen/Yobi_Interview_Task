import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../data/note';
import {v4 as uuid} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes$ = new BehaviorSubject<Note[]>([]);

  constructor() {
    this.loadNotes();
   }

  loadNotes() {
    let notes = localStorage.getItem('notes');
    if (!notes) return
    this.notes$.next(JSON.parse(notes))
  }

  get getNotesValue(): Note[]{
    return this.notes$.getValue();
  }

  get getNotes$(): Observable<Note[]>{
    return this.notes$;
  }

  addNote(note: Note): void {
    this.notes$.next([...this.notes$.getValue(), {id: uuid(), ...note}]);
    localStorage.setItem('notes', JSON.stringify(this.notes$.getValue()));
  }

  editNote(note: Note): void {
    this.notes$.next(this.notes$.getValue().map(item => item.id === note.id ? note: item));
    localStorage.setItem('notes', JSON.stringify(this.notes$.getValue()));
  }

  deleteNote(id: string): void {
    this.notes$.next(this.notes$.getValue().filter(item => item.id !== id));
    localStorage.setItem('notes', JSON.stringify(this.notes$.getValue()));
  }
}

