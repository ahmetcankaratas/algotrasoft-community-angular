import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/data/service/data-storage.service';
import { ResultService } from 'src/app/data/service/result.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  isLoading: boolean = true;
  
  constructor(
    private dataStorageService: DataStorageService,
    private resultService: ResultService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.getStocks().subscribe((results) => {
      this.resultService.setResults(results.stocks);
      this.isLoading = false;
    });
  }
}
