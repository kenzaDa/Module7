import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FaceSnap } from '../Models/face-snap.model';
import { switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}
   faceSnaps: FaceSnap[] =[]
 
  getAllFaceSnaps(): Observable <FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://127.0.0.1:8001/articles');
    
}


getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
  return this.http.get<FaceSnap>(`http://127.0.0.1:8001/article/${faceSnapId}`);
}


add(formValue: { titre: string, contenu: string, auteur: string ,dateDePublication : string }): Observable<FaceSnap> {
  return this.getAllFaceSnaps().pipe(
       map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
       map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
       map(previousFacesnap => ({
          ...formValue,
          id: previousFacesnap.id + 1
      })),
      switchMap((newFacesnap: any) => this.http.post<FaceSnap>(
          'http://127.0.0.1:8001/article',
          newFacesnap)
      )
  );
}
// public addInteraction(formValue: { titre: string, contenu: string, auteur: string ,dateDePublication : string } ): Observable<any>{

//   return this.http.post<any>(`http://127.0.0.1:8001/article`,interaction);

// }
public addFaceSnap(interaction:FormGroup ): Observable<any>{

  return this.http.post<any>('http://127.0.0.1:8001/article',interaction);

}
}

