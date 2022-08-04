import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FaceSnap } from '../Models/face-snap.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {
  snapForm!: FormGroup;
 
faceSnapPreview$!: Observable<FaceSnap>;


  constructor(private formBuilder: FormBuilder,
    private faceSnapsService: FaceSnapsService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.snapForm = this.formBuilder.group({
        titre: [null,[Validators.required]],
        contenu: [null,[Validators.required]],
        auteur : [null],
        date_de_publication : [null],
       
    }, {
      updateOn: 'blur'
  });

this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
  map(formValue => ({
      ...formValue,
    
  }))
);
  }
  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value).subscribe();
    this.router.navigateByUrl('/facesnaps');
}

}
