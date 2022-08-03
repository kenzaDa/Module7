import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FaceSnap } from '../Models/face-snap.model';



@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
 

  constructor( private router:Router) {}

  ngOnInit() {
     console.log(this.faceSnap.id);
  }
  
 
onViewFaceSnap() {

  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  console.log(this.faceSnap.id);
}

}