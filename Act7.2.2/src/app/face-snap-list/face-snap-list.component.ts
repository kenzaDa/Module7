import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
  
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  
  constructor(private faceSnapsService: FaceSnapsService, private router: Router) { }

  ngOnInit() {
    this.faceSnaps =this.faceSnapsService.getAllFaceSnaps();
}


onAddNewFaceSnap() {
  this.router.navigateByUrl('/create');
}
  }


