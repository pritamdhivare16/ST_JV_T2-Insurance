import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExportServiceService {

  constructor(private http: HttpClient) { }

  exportToExcel(): Observable<Blob> {
    return this.http.get('http://localhost:4200/report', { responseType: 'blob' });
  }
}
