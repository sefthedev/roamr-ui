import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() icon = '';
  @Input() text = '';
  @Input() color = '';
  @Input() textSize = '';
  
  constructor() {

  }

  getColorClass(): string {
    switch (this.color) {
      case 'primary':
        return 'bg-primary hover:bg-primary-background hover:text-primary';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary-background hover:text-secondary';
      case 'tertiary':
        return 'bg-tertiary hover:bg-tertiary-background hover:text-tertiary';
      default:
        return '';
    }
  }
}
