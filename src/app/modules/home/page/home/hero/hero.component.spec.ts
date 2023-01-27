import { HeroComponent } from './hero.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from '../../../home.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = el.queryAll(By.css('h1'));

    expect(title).toBeTruthy('Missing title');
    expect(title.length).toBe(1, 'Unexpected number of titles');
    expect(title[0].nativeElement.textContent).toBe('THE NEXT GENERATION');
  });

  it('should display the descriptions', () => {
    const descriptions = [
      'ALGOTRASOFT',
      ' Algorithmic Trading for ',
      ' Join the Quantitative Revolution ',
    ];

    const describeEl = el.queryAll(By.css('p'));

    expect(describeEl).toBeTruthy('Missing description');
    expect(describeEl[0].nativeElement.textContent).toBe(
      descriptions[0],
      'Unexpected first description'
    );
    expect(describeEl[1].nativeElement.textContent).toBe(
      descriptions[1],
      'Unexpected second description'
    );
    expect(describeEl[2].nativeElement.textContent).toBe(
      descriptions[2],
      'Unexpected third description'
    );
  });

});
