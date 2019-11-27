import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityContainerComponent } from './celebrity-container.component';

describe('CelebrityContainerComponent', () => {
  let component: CelebrityContainerComponent;
  let fixture: ComponentFixture<CelebrityContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelebrityContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
