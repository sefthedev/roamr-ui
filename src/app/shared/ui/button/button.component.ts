import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() icon? = '';
  @Input() submit?: boolean;
  @Input() text = '';
  @Input() color = '';
  @Input() textSize = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  getType(): string {
    return this.submit ? 'submit' : 'button';
  }

  handleClick(): void {
    this.buttonClick.emit();
  }

  getColorClass(): string {
    switch (this.color) {
      case 'primary':
        return 'bg-primary hover:bg-primary-background hover:text-primary border-transparent text-textWhite';
      case 'primary-inverse':
        return 'bg-textWhite hover:bg-primary-background border-primary text-primary';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary-background hover:text-secondary border-transparent text-textWhite';
      case 'tertiary':
        return 'bg-tertiary hover:bg-tertiary-background hover:text-tertiary border-transparent text-textWhite';
      case 'icon-primary':
        return 'bg-transparent text-primary border-transparent shadow-none hover:shadow-none hover:text-shadow';
      default:
        return 'bg-transparent text-textDark border-transparent shadow-none hover:shadow-none hover:text-shadow';
    }
  }
}
