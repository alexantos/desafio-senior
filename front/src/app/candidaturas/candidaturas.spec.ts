import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candidaturas } from './candidaturas';

describe('Candidaturas', () => {
  let component: Candidaturas;
  let fixture: ComponentFixture<Candidaturas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Candidaturas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candidaturas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
