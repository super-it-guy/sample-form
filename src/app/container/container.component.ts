import { Component} from '@angular/core';
import { SubmissionItems } from '../models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  isSubmitted = false;
  submission: SubmissionItems;
  constructor() { }

  onSubmission(value: SubmissionItems) {
    this.isSubmitted = value.isSubmitted;
    this.submission = value;
  }
}
