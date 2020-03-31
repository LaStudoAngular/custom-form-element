import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ec-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.buttonEventHandler();
  }

  buttonEventHandler(event?: string): void {
    const { name, email, phone } = this.form.value;
    console.log(name, email, phone);
  }

}
