import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ec-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent)
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() inputType = 'text';
  @Input() inputPlaceholder = 'placeholder';

  inputValue = new FormControl('');
  private onChange: (value: string) => void;
  private onTouched: () => void;

  ngOnInit(): void {
    //
  }

  writeValue(obj: any): void {
    const [ inputValue ] = String(obj).split(' ');
    this.inputValue.setValue(inputValue);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.inputValue.disable();
    } else {
      this.inputValue.enable();
    }
  }

  inputHandler(): void {
    this.onChange(this.inputValue.value);
  }

  blurHandler(): void {
    this.onTouched();
  }

  focusHandler(): void {
    //
  }

}
