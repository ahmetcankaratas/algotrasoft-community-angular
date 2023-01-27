import { WorkComponent } from './work.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeModule } from '../../../home.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HomeModule, RouterTestingModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(WorkComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the titles', () => {
    const titles = ['Grow Together', 'Coding Sessions', 'Events', 'Scanner'];

    const titlesEl = el.queryAll(By.css('h3'));
    console.log(titlesEl);
    expect(titlesEl).toBeTruthy('Missing titles');
    expect(titlesEl.length).toBe(4, 'Unexpected number of titles');
    titles.forEach((title, index) => {
      expect(titlesEl[index].nativeElement.textContent).toBe(
        title,
        `Unexpected title at index ${index}`
      );
    });
  });

  it('should display the descriptions', () => {
    const descriptions = [
      ' Our members are dedicated to the free exchange of information. By educating each other, we improve ourselves, our networks, our market positions, and our portfolios. ',
      ' Join our bi-weekly Sunday coding sessions where you will be introduced to mathematical concepts behind algorithmic trading, learn basic trading strategies, and how to implement them in code. ',
      ' Members offering free events to other members so that all are encouraged to participate. By supplying the industry with webinars, training materials, white papers, and other information, we can demonstrate the extent to which our intelligence is competitive. ',
      ' Our scanner is a tool that allows you to scan the market for best algorithmic strategtic results. You can then download the code and run it on your own machine. You can also use the code as a starting point for your own algorithmic trading strategy. To see the scanner in action  Click ',
    ];

    const describeEl = el.queryAll(By.css('p'));

    expect(describeEl).toBeTruthy('Missing description');
    expect(describeEl.length).toBe(4, 'Unexpected number of descriptions');
    descriptions.forEach((description, index) => {
      expect(describeEl[index].nativeElement.textContent).toBe(
        description,
        `Unexpected description at index ${index}`
      );
    });
  });

  it('should display the icons', () => {
    const iconsUrl = [
      'assets/images/icon-team.svg',
      'assets/images/icon-coding.svg',
      'assets/images/icon-event.svg',
      'assets/images/icon-search.svg',
      'assets/images/icon-arrow.svg',
    ];

    const describeEl = el.queryAll(By.css('img'));

    expect(describeEl).toBeTruthy('Missing images');
    iconsUrl.forEach((url, index) => {
      expect(describeEl[index].nativeElement.src).toContain(
        url,
        `Unexpected icon at index ${index}`
      );
    });
  });
});
