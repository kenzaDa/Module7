import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../Models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  
  commentForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  constructor(private formBuilder: FormBuilder , private faceSnapsService: FaceSnapsService , private route: ActivatedRoute , private router : Router) { }

  ngOnInit(): void {


    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.commentForm = this.formBuilder.group({
      content:  [null, [Validators.required, Validators.maxLength(225)]],
      author:[null, [Validators.required]],
  }, {
  updateOn: 'blur'
  
     
  });
  
  }
  onSubmitComment() {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnapsService.addComment(this.commentForm.value, snapId);
//     this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
// }
}}
