import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationBoxComponent } from './destination-box.component';

describe('DestinationBoxComponent', () => {
  let component: DestinationBoxComponent;
  let fixture: ComponentFixture<DestinationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
