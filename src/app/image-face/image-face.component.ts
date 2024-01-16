import { Component , OnInit , Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-image-face',
  templateUrl: './image-face.component.html',
  styleUrl: './image-face.component.scss'
})
export class ImageFaceComponent {
  @Input() faceSnap!: FaceSnap;

  onEpisodeMore() {
    if(this.faceSnap.NEpisodeValide < this.faceSnap.NEpisode)
    {
      this.faceSnap.NEpisodeValide++;
    }


  }
  onEpisodeLess() {
    if (this.faceSnap.NEpisodeValide > 0) {
      this.faceSnap.NEpisodeValide--;
    }
   
  }

}
