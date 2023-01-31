// // import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// // import { By } from '@angular/platform-browser';
// // import { DebugElement } from '@angular/core';

// // import { ContactComponent } from './contact.component';
// // import { ContactModule } from '../../contact.module';

// // fdescribe('ContactComponent', () => {
// //   let component: ContactComponent;
// //   let fixture: ComponentFixture<ContactComponent>;

// //   beforeEach(
// //     waitForAsync(() => {
// //       TestBed.configureTestingModule({
// //         imports: [ContactModule],
// //       }).compileComponents()
// //       .then(() => {
// //         fixture = TestBed.createComponent(ContactComponent);
// //         component = fixture.componentInstance;
// //         fixture.detectChanges();
// //       });
// //     })
// //   );

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });


// import { ContactComponent } from './contact.component';
// import {
//   ComponentFixture,
//   flush,
//   TestBed,
// } from '@angular/core/testing';
// import { ContactModule } from '../../contact.module';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// describe('ContactComponent', () => {
//   let component: ContactComponent;
//   let fixture: ComponentFixture<ContactComponent>;
//   let el: DebugElement;

//   beforeEach(async () => {
//     TestBed.configureTestingModule({
//       imports: [ContactModule],
//     })
//       .compileComponents()
//       .then(() => {
//         fixture = TestBed.createComponent(ContactComponent);
//         component = fixture.componentInstance;
//         el = fixture.debugElement;
//       });
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();

//   });

//   it('should display the descriptions', () => {
//     const descriptions = [
//       ' Please do not hesitate to contact us, if you want to learn more about simple trading strategies or more complicated statistical arbitrage of stocks. Regardless of whether you are a novice to trading or a veteran Quant, all are welcomed to be part of the society. ',
//       ' Email: algotrasoft@gmail.com ',
//     ];

//     const describeEl = el.queryAll(By.css('p'));
//     console.log(describeEl)

//      expect(describeEl).toBeTruthy('Missing description');
//       expect(describeEl.length).toBe(3, 'Unexpected number of descriptions');

//     // descriptions.forEach((description, index) => {
//     //   expect(describeEl[index].nativeElement.textContent).toBe(
//     //     description,
//     //     `Unexpected description at index ${index}`
//     //   );
//     // });
//   });

//   // it('should display the icon', () => {
//   //   const iconUrl = ['assets/images/icon-email.svg'];

//   //   const element = el.query(By.css('img'));

//   //   expect(element).toBeTruthy('Missing images');
//   //   expect(element.nativeElement.src).toContain(
//   //     iconUrl,
//   //     'Unexpected first description'
//   //   );
//   // });
// });
