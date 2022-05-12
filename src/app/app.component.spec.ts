import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [MatDialogModule]
    }).compileComponents();
  });

  it(`should reset selected note`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedNote = {id: '1', description: 'test', title: 'test'};
    app.resetNote();
    expect(app.selectedNote).toEqual({id: '', description: '', title: ''});
  });

});
