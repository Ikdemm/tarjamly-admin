import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatorsListComponent } from './translators-list.component';

describe('TranslatorsListComponent', () => {
  let component: TranslatorsListComponent;
  let fixture: ComponentFixture<TranslatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
