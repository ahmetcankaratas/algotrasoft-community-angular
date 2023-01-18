import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = '';
  @Output() filteredSymbol = new EventEmitter<string>();

  searchChanged(): void {
    this.filteredSymbol.emit(this.searchValue);
    console.log(this.searchValue);
  }

}
