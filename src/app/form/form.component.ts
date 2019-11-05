import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SubmissionItems } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  buttonsDisabled = false;
  showModal = false;
  @Output() submission = new EventEmitter<SubmissionItems>();

  subscriptionLevels = ['Advanced', 'Pro', 'Basic'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      emailAddress: [
        '',
        {
          validators: [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
          ],
          updateOn: 'blur'
        }
      ],
      subscriptions: [this.subscriptionLevels[0]],
      password: [
        '',
        {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/(?=.*[|!"#*@$%&\/\\])(?=.*[a-z|0-9])^.*/)
          ],
          updateOn: 'blur'
        }
      ]
    });
  }

  get controls() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.submission.emit({
      email: this.controls.emailAddress.value,
      subscription: this.controls.subscriptions.value,
      password: this.controls.password.value,
      isSubmitted: true
    });
  }
  onReset() {
    if (this.controls.emailAddress.value || this.controls.password.value) {
      this.form.disable();
      this.buttonsDisabled = true;
      this.showModal = true;
    }
  }
  onModalSelection(value: boolean) {
    this.showModal = false;
    this.form.enable();
    this.buttonsDisabled = false;
    if (value) {
      this.form.reset({ subscriptions: [this.subscriptionLevels[0]] });
    }
  }
}
