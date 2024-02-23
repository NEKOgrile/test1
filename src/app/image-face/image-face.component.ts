import { Component , OnInit , Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-image-face',
  templateUrl: './image-face.component.html',
  styleUrl: './image-face.component.scss'
})
export class ImageFaceComponent {
  @Input() faceSnap!: FaceSnap;


  constructor(private faceSnapsService: FaceSnapsService) {}

  onEpisodeMore() {
    if(this.faceSnap.NEpisodeValide < this.faceSnap.NEpisode)
    {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id , "snap");
    }


  }
  onEpisodeLess() {
    if (this.faceSnap.NEpisodeValide > 0) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id , "unsnap");
    }
   
  }

  onNoteeMore() {
    if(this.faceSnap.note < 20)
    {
      this.faceSnap.note++;
    }


  }
  onNoteLess() {
    if (this.faceSnap.note > 0) {
      this.faceSnap.note--;
    }
   
  }

}
