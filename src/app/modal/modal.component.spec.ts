import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let yesButton: DebugElement;
  let yesElement: Element;
  let noButton: DebugElement;
  let noElement: Element;
  let expectedSelection: boolean;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    yesButton = fixture.debugElement.query(By.css('.left-button'));
    yesElement = yesButton.nativeElement;
    noButton = fixture.debugElement.query(By.css('.right-button'));
    noElement = yesButton.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send yes event upon click', () => {
    expectedSelection = true;
    let yesSelection: boolean;
    component.click.subscribe(
      (selection: boolean) => (yesSelection = selection)
    );
    yesButton.triggerEventHandler('click', null);
    expect(yesSelection).toBe(expectedSelection);
  });

  it('should send no event upon click', () => {
    expectedSelection = false;
    let noSelection: boolean;
    component.click.subscribe(
      (selection: boolean) => (noSelection = selection)
    );
    noButton.triggerEventHandler('click', null);
    expect(noSelection).toBe(expectedSelection);
  });
});
