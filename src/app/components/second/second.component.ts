import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ec-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
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
    const { name, email, phone } = this.form.value;
    console.log(name, email, phone);
  }

  buttonEventHandler(event: string): void {
    console.log(event);
  }

}
