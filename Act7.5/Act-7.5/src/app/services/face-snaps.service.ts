import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../Models/face-snap.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}
   faceSnaps: FaceSnap[] =[]
 
  getAllFaceSnaps(): Observable <FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://127.0.0.1:8000/articles');
    
}

getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
  return this.http.get<FaceSnap>(`http://127.0.0.1:8000/api/article/${faceSnapId}`);
}

public addFaceSnap(article:FormGroup): Observable<any>{

  return this.http.post<any>('http://127.0.0.1:8000/api/article',article);

}
public deleteFaceSnap(faceSnapId: number) : Observable<any>{
  return this.http.delete<any>(`http://127.0.0.1:8000/api/article/${faceSnapId}`);
}
}

