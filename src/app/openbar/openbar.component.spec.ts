import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenbarComponent } from './openbar.component';

describe('OpenbarComponent', () => {
  let component: OpenbarComponent;
  let fixture: ComponentFixture<OpenbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenbarComponent]
    });
    fixture = TestBed.createComponent(OpenbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
