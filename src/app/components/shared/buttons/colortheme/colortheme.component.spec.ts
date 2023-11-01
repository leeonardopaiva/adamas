import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorthemeComponent } from './colortheme.component';

describe('ColorthemeComponent', () => {
  let component: ColorthemeComponent;
  let fixture: ComponentFixture<ColorthemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorthemeComponent]
    });
    fixture = TestBed.createComponent(ColorthemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
