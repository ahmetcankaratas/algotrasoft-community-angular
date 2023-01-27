import { ParticleComponent } from './particle.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from '../../../home.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ParticleComponent', () => {
  let component: ParticleComponent;
  let fixture: ComponentFixture<ParticleComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ParticleComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the particles animation', () => {
    expect(component).toBeTruthy();
  });

});
