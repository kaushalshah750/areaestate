import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCallDetailComponent } from './add-call-detail.component';

describe('AddCallDetailComponent', () => {
  let component: AddCallDetailComponent;
  let fixture: ComponentFixture<AddCallDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCallDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCallDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
