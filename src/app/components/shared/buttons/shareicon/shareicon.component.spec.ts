import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareiconComponent } from './shareicon.component';

describe('ShareiconComponent', () => {
  let component: ShareiconComponent;
  let fixture: ComponentFixture<ShareiconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareiconComponent]
    });
    fixture = TestBed.createComponent(ShareiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
