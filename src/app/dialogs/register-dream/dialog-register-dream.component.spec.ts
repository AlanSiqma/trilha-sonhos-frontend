import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegisterDreamComponent } from './dialog-register-dream.component';

describe('RegisterDreamComponent', () => {
  let component: DialogRegisterDreamComponent;
  let fixture: ComponentFixture<DialogRegisterDreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogRegisterDreamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegisterDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
