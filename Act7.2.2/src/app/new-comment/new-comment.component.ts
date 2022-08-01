import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  commentForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder , private faceSnapsService: FaceSnapsService) { }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      comment: [null,[Validators.required]]
    
     
  });
  }
  onSubmitComment() {
   
    this.faceSnapsService.addComment(this.commentForm.value);
   
}
}
