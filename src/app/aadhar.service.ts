import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aadhar } from './Aadhar list/Aadhar';

@Injectable({
  providedIn: 'root'
})
export class AadharService {

  constructor(private http:HttpClient) { }

  getall():Observable<Aadhar[]>{
   return this.http.get<Aadhar[]>(`https://localhost:7105/api/Aadhar`)
  }

  createAadhar(data:Aadhar):Observable<Aadhar>{
   return this.http.post<Aadhar>(`https://localhost:7105/api/Aadhar`,data);
  }

  updateAadhar(data:Aadhar):Observable<Aadhar>{
    return this.http.put<Aadhar>(`https://localhost:7105/api/Aadhar/${data.id}`,data);
  }

  getById(data:Aadhar):Observable<Aadhar>{
    return this.http.get<Aadhar>(`https://localhost:7105/api/Aadhar/${data.id}`);
  }

  deleteAadhar(id:number):Observable<Aadhar>{
    return this.http.delete<Aadhar>(`https://localhost:7105/api/Aadhar/${id}`);
  }
}
