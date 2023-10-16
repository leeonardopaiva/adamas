import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersuporteComponent } from './headersuporte.component';

describe('HeadersuporteComponent', () => {
  let component: HeadersuporteComponent;
  let fixture: ComponentFixture<HeadersuporteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadersuporteComponent]
    });
    fixture = TestBed.createComponent(HeadersuporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
