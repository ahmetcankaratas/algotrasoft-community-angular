import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { setupBacktest } from 'src/app/data/common/setup-test-data';
import { ScannerModule } from 'src/app/modules/scanner/scanner.module';
import { ResultItemComponent } from './result-item.component';

describe('ResultItemComponent', () => {
  let component: ResultItemComponent;
  let fixture: ComponentFixture<ResultItemComponent>;
  let el: DebugElement;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ScannerModule, HttpClientTestingModule, RouterTestingModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResultItemComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        httpTestingController = TestBed.get(HttpTestingController);
      });
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the result item', () => {
    component.result = setupBacktest();
    component.isLoading = false;

    fixture.detectChanges();
    console.log(el.nativeNode.outerHTML);
    const card = el.query(By.css('a')),
      name = card.query(By.css('.text-lg')),
      symbol = card.query(By.css('.text-sm'));

    expect(card).toBeTruthy('Could not find backtest item');

    expect(name.nativeElement.textContent).toContain(component.result.name);

    expect(symbol.nativeElement.textContent).toBe(component.result.symbol);
  });
});
