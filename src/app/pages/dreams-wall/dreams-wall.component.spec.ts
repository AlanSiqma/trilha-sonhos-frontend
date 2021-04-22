import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamsWallComponent } from './dreams-wall.component';

describe('DreamsWallComponent', () => {
  let component: DreamsWallComponent;
  let fixture: ComponentFixture<DreamsWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamsWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
