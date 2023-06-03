import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-box',
  templateUrl: './destination-box.component.html',
  styleUrls: ['./destination-box.component.scss'],
})
export class DestinationBoxComponent implements OnInit {
  @Input() imageURL: string = '';
  @Input() destinationName: string = '';
  @Input() address: string = '';
  @Input() starsCount: number = 0;
  stars = new Array(5).fill('pi-star');
  saved: boolean = false;

  ngOnInit(): void {
    this.stars = this.stars.fill('pi-star-fill', 0, this.starsCount);
    console.log(this.stars);
  }

  saveDestination() {
    this.saved = !this.saved;
  }
}
