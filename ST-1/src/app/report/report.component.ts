import { Component } from '@angular/core';
import { ExportServiceService } from '../export-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  listofuser!: any[] ;

  //Aniket Method
  // exportToExcel(): void {
  //   const data: any[] = this.listofuser; 
  //   if(data){
    
  //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

  //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

  //   XLSX.writeFile(wb, 'exported_data.xlsx');
  //   } else{
  //     console.error('Data is undefined or null');
  //   }
  // }

  constructor(private exportService: ExportServiceService) { }

  exportToExcel(): void {
    this.exportService.exportToExcel().subscribe((data: Blob) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.download = 'exported_data.xlsx';
      anchor.href = url;
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
