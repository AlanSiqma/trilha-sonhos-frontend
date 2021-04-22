import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDreamComponent } from './register-dream.component';

describe('RegisterDreamComponent', () => {
  let component: RegisterDreamComponent;
  let fixture: ComponentFixture<RegisterDreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
