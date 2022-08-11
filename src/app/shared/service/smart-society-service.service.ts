import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartSocietyServiceService {

  constructor(private http: HttpClient) { }

  findAll(control:string): Observable<any>{
   return this.http.get('http://localhost:3000/api/'+control);
  }

  update(_id:string ,details:any, control:string):Observable<any>{
    console.log(details)
    return  this.http.patch('http://localhost:3000/api/'+control+'/'+_id,details[0])
   }

   delete(id:string,control:string):Observable<any>{
    return this.http.delete('http://localhost:3000/api/'+control+'/'+id);
  }

  create(details:any,control:string):Observable<any>{
    return  this.http.post('http://localhost:3000/api/'+control,details,).pipe(tap(()=>{

    }))
   }
}
