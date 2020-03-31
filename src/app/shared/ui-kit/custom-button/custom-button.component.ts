import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ec-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() buttonType = 'submit';
  @Input() buttonClass = 'primary';
  @Input() buttonText = 'submit';
  @Input() buttonMode = 'normal';
  @Output() buttonEvent = new EventEmitter<string>();

  ngOnInit(): void {
    //
  }

  buttonClick(): void {
    this.buttonEvent.emit(this.buttonText);
  }

}
