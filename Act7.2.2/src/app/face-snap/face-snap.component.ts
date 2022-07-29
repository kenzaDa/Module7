import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../Models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  title!: string;
  description!: string;
  createdDate!: Date;
  author!: string;
  imageUrl!: string;
  comment!: string;

  constructor( private router:Router) {}

  ngOnInit() {
   
  
  }
  

onViewFaceSnap() {
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}