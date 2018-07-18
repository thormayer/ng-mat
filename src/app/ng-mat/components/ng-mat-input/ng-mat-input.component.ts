import { Component, OnInit, EventEmitter, Input, forwardRef, ElementRef, DoCheck } from '@angular/core';
import { ngMatInput } from './model/input.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, NG_VALIDATORS, COMPOSITION_BUFFER_MODE } from '@angular/forms';

@Component({
  selector: 'ng-mat-input',
  templateUrl: './ng-mat-input.component.html',
  styleUrls: ['./ng-mat-input.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgMatInputComponent), multi: true },
  ]
})
export class NgMatInputComponent implements ControlValueAccessor, OnInit {
  @Input() placeholderInput;
  @Input() inputType;
  @Input() errorMessage;
  @Input() icon;
  @Input() text;
  @Input() errors;
  @Input() errorType;
  errorsClass = 'error-message';
  showError = false;
  blured = false;


  public input: ngMatInput;
  public myFocusTriggeringEventEmitter = new EventEmitter<boolean>();

  public placeholderClass = 'placeholder';
  public inputTextClass = 'input-class';
  public containerClass = 'input-container';

  constructor(private elem: ElementRef) {
    this.input = new ngMatInput(this.placeholderInput);
    if (!this.errorType) this.errorType = 'error';
    
  }

  ngOnInit() {

    this.isInitProperly();
    this._render();
  }

  ngDoCheck() {
    if(this.errors){
      if (!this.errors.pristine && this.blured) 
      this.errors.status === "INVALID" ? this.setErrorClass(true) : this.setErrorClass(false);
    }
  }

  setErrorClass(isError) {
    this.input.setContainerError(isError);
    this.input.setPlaceholderError(isError);
    this.showError = isError;
    this._render();

  }

  isInitProperly() {
    this.text === '' ? this.toggleTexts(false) : this.toggleTexts(true);
    if (this.text === '') this.input.setPlaceholderActive(false);
  }

  inputKeypress(e) {
    this.input.setText(e.target.value);
    this.propegateChange(this.input.getText());
    this.isEmpty() ? this.toggleTexts(false) : this.toggleTexts(true);
  }

  isEmpty() {
    return this.input.getText() === '' ? true : false;
  }

  toggleTexts(isSmall) {
    if (isSmall) {
      this.input.setPlaceholderActive(true);
      this.input.setPlaceholderFocus(true);
      this.input.setInputActive(true);
    }

    this._render();
  }

  toggleInputContainer(isActive) {
    isActive ? this.input.setContainerActive(true) : this.input.setContainerActive(false);
    this._render();
  }

  inputClicked() {
    this.myFocusTriggeringEventEmitter.emit(true);

    this.input.setInputActive(true);
    this.input.setContainerActive(true);
    this.input.setPlaceholderFocus(true);
    this._render();
  }

  inputBlued() {
    this.errors.status === "INVALID" ? this.setErrorClass(true) : this.setErrorClass(false);
    this.blured = true;
    this.input.setContainerActive(false);
    this.input.setPlaceholderActive(false);
    this.isEmpty() ? this.input.setPlaceholderFocus(false) : this.input.setPlaceholderFocus(true);
    this._render();
  }

  _render() {
    this.placeholderClass = this.input.renderPlaceholder();
    this.inputTextClass = this.input.renderInput();
    this.containerClass = this.input.renderContainer();
  }

  writeValue(value: any) {
    this.input.setText(value);
  }

  propegateChange = (_: any) => { };

  registerOnChange(fn) {
    this.propegateChange = fn;
  }
  registerOnTouched() { }

}
