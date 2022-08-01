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
urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private faceSnapsService: FaceSnapsService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
        title: [null,[Validators.required]],
        description: [null,[Validators.required]],
        imageUrl: [null, [Validators.pattern(this.urlRegex)]],
        author : [null],
        createdDate : [null],
       
    }, {
      updateOn: 'blur'
  });

this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
  map(formValue => ({
      ...formValue,
      createdDate: new Date(),
      snaps: 0,
      id: 0
  }))
);
  }
  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
}
}
