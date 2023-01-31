import { AboutComponent } from './about.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeModule } from '../../../home.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const title = el.queryAll(By.css('h4'));

    expect(title).toBeTruthy('Missing title');
    expect(title.length).toBe(1, 'Unexpected number of titles');
    expect(title[0].nativeElement.textContent).toBe('About Us');
  });

  it('should display the descriptions', () => {
    const descriptions = [
      ' The Algorithmic Trading Society of Turkey was founded in March 2020 with the aim of bringing people together to develop their understanding of the application algorithms in a financially driven context. ',
      ' We hope to build a community of Algo traders that can help improve one another. ',
    ];

    const describeEl = el.queryAll(By.css('p'));

    expect(describeEl).toBeTruthy('Missing description');
    expect(describeEl[0].nativeElement.textContent).toBe(descriptions[0],'Unexpected first description');
    expect(describeEl[1].nativeElement.textContent).toBe(descriptions[1],'Unexpected second description');
  });

  it('should display the images', () => {
    const imagesUrl = [
      'assets/images/network.png',
      'assets/images/icon-arrow.svg',
    ];

    const imageEl = el.queryAll(By.css('img'));

    expect(imageEl).toBeTruthy('Missing images');
    expect(imageEl[0].nativeElement.src).toContain(imagesUrl[0],'Unexpected first description');
    expect(imageEl[1].nativeElement.src).toContain(imagesUrl[1],'Unexpected second description');
  });
});
