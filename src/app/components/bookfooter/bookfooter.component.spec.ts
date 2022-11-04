import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookfooterComponent } from './bookfooter.component';

describe('BookfooterComponent', () => {
  let component: BookfooterComponent;
  let fixture: ComponentFixture<BookfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
