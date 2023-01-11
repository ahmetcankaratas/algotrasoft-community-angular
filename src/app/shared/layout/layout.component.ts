import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  @Input()
  mainArea: TemplateRef<any> | undefined;

  constructor() {}

  ngOnInit(): void {}
}
