import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeriaComponent } from './perfumeria.component';

describe('PerfumeriaComponent', () => {
  let component: PerfumeriaComponent;
  let fixture: ComponentFixture<PerfumeriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfumeriaComponent]
    });
    fixture = TestBed.createComponent(PerfumeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
