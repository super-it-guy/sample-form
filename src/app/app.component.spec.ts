import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        FormComponent,
        ModalComponent
      ],
      imports:    [  ReactiveFormsModule  ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fizerv-excersize'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('fizerv-excersize');
  });

});
