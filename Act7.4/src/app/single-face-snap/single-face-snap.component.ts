import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {


  @Input() faceSnap$! : Observable <FaceSnap>;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$= this.faceSnapsService.getFaceSnapById(snapId);
  }
  OnDelete(){
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnapsService.deleteFaceSnap(snapId).subscribe();
    this.router.navigateByUrl('/facesnaps');
  }

}
