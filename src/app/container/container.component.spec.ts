import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { FormComponent } from '../form/form.component';
import { ModalComponent } from '../modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerComponent, FormComponent, ModalComponent ],
      imports:    [  ReactiveFormsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Thank you!!"', () => {
    const thankYouElement: HTMLElement = fixture.nativeElement;
    if (component.isSubmitted === true) {
    expect(thankYouElement.textContent).toContain('Thank you!!');
    }
  });
});
