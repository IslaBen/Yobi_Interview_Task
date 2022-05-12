import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/data/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesListComponent implements OnInit {

  @Input() notes: Note[] | null = [];
  @Output() edit = new EventEmitter<Note>();
  @Output() delete = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
