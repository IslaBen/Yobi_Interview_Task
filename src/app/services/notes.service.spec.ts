import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new note', () => {
    const notesCount = service.getNotesValue.length;
    service.addNote({title: 'test', description: 'description 1'});
    expect(service.getNotesValue.length).toBeGreaterThan(notesCount);
  });

  it('should delete note', () => {
    service.addNote({title: 'test', description: 'description 1'});
    const notesCount = service.getNotesValue.length;
    service.deleteNote(service.getNotesValue[0].id as string);
    expect(service.getNotesValue.length).toBeLessThan(notesCount);
  });

  it('should edit note', () => {
    service.addNote({title: 'test', description: 'description 1'});
    const notesCount = service.getNotesValue.length;
    service.editNote({id: (service.getNotesValue[0].id as string), title: 'edited', description: 'test edited'});
    const editedNote = service.getNotesValue.find(({id}) => id === service.getNotesValue[0].id);
    expect(editedNote?.title).toBe('edited');
  });
});
