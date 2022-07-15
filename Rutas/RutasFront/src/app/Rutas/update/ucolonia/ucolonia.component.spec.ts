import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UcoloniaComponent } from './ucolonia.component';

describe('UcoloniaComponent', () => {
  let component: UcoloniaComponent;
  let fixture: ComponentFixture<UcoloniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UcoloniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UcoloniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
