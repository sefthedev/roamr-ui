import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-destination-box',
  templateUrl: './destination-box.component.html',
  styleUrls: ['./destination-box.component.scss']
})
export class DestinationBoxComponent {
  @Input() imageURL: string = '';
  @Input() destinationName: string = '';
  
  makeTextBolder(){
    
  }
}
