import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
  form: FormGroup;
  firstName = new FormControl("", Validators.required);
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password": ["", Validators.required, Validators.minLength(3)]
    });
  }

  onSubmit() {
    // debugger;
    console.log("model-based form submitted");
    console.log(this.form);
  }

  fullUpdate() {
    this.form.setValue({ firstName: 'Partial', password: 'monkey' });
  }

  partialUpdate() {
    this.form.patchValue({ firstName: 'Partial' });
  }
  reset() {
    this.form.reset();
  }

}
