import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SmartSocietyServiceService {
  signedIn$= new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  findAll(control:string): Observable<any>{
   return this.http.get('http://localhost:3000/api/'+control);
  }

  findById(id:string,control:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/'+control+'/'+id);
  }

  searchByIdentificationNo(id:string,control:string):Observable<any>{
    return this.http.get('http://localhost:3000/api/'+control+'/searchByIdentificationNo/'+id);
  }
  findOffendersInCrimeOffenders(id:string,control:string){
    return this.http.get('http://localhost:3000/api/'+control+'/offender/'+id);
  }

  update(_id:string ,details:any, control:string):Observable<any>{
    return  this.http.patch('http://localhost:3000/api/'+control+'/'+_id,details)
   }

   delete(id:string,control:string):Observable<any>{
    return this.http.delete('http://localhost:3000/api/'+control+'/'+id);
  }

  usernammeAvailable(username: string){
    return this.http.get<{available:boolean}>('http://localhost:3000/api/users/'+
         username
      )
   }

  findOne(id:string ,control:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+control+'/username/'+id );
  }

  findOneByPhone(id:string ,control:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+control+'/phonenumber/'+id );
  }
  findOneByEmail(id:string ,control:string):Observable<any>{

    return this.http.get<users>('http://localhost:3000/api/'+control+'/email/'+id );
  }

  checkAuth(){
    return this.http.get<any>('http://localhost:3000/api/users/profile',).pipe(tap((res) =>{
    this.signedIn$.next(res.authenticated)
    console.log(res.authenticated)
    }),catchError(()=>' authentication:false'
    ))
  }

  register(details:any,control:string):Observable<any>{
    return  this.http.post('http://localhost:3000/api/'+control,details,).pipe(tap(()=>{
      this.signedIn$.next(true)
    }))
   }

   signIn(details:any, ):Observable<any>{
    return this.http.post('http://localhost:3000/api/users/login',details).pipe(tap(()=>{
      this.signedIn$.next(true)
    }))
  }


  create(details:any,control:string):Observable<any>{
    return  this.http.post('http://localhost:3000/api/'+control,details,).pipe(tap(()=>{

    }))
   }

   
}

interface users{
  address:string
  email: string
  gender: string
  image:string
  password: string
  personnelType: string
  phonenumber: number
  username: string
}
