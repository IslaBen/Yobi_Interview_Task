import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/data/note';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesFormComponent implements OnInit {
  @Input() data: Note = {
    title: '',
    description: ''
  };
  @Output() create = new EventEmitter<Note>();
  @Output() edit = new EventEmitter<Note>();
  @Output() reset = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submit(value: {title: string; description: string}) {
    if (this.data.id) {
      this.edit.emit({id: this.data.id, ...value});
    } else {
      this.create.emit(value);
    }
  }
}
