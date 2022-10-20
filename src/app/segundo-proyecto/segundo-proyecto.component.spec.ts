import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoProyectoComponent } from './segundo-proyecto.component';

describe('SegundoProyectoComponent', () => {
  let component: SegundoProyectoComponent;
  let fixture: ComponentFixture<SegundoProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoProyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
