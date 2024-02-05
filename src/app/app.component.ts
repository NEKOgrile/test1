import { Component } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'TOH',
        description: 'bla bla bla bla bla',
        avies: 'trop bien wola',
        note: 8,
        imageUrl:
          'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afe69fdc-4029-44fc-a8d6-400634ca6a15/dfowhqs-4d4a8de6-0da9-4df9-bf72-ea7c7f3e8f2a.jpg/v1/fill/w_1920,h_2095,q_75,strp/toh____the_final__collab__by_jmdx64_dfowhqs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA5NSIsInBhdGgiOiJcL2ZcL2FmZTY5ZmRjLTQwMjktNDRmYy1hOGQ2LTQwMDYzNGNhNmExNVwvZGZvd2hxcy00ZDRhOGRlNi0wZGE5LTRkZjktYmY3Mi1lYTdjN2YzZThmMmEuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5YUlAbvtTgrEMGbD2lkK-c24TfGbBPugbXvI1llDqKQ',
        NEpisode: 20,
        NEpisodeValide: 0,
      },
      {
        title: 'shera',
        description: 'bla bla bla bla bla',
        avies: 'trop bien wola',
        note: 8,
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        NEpisode: 20,
        NEpisodeValide: 0,
      },
      {
        title: 'asbin hotel',
        description: 'bla bla bla bla bla',
        avies: 'trop bien wola',
        note: 8,
        imageUrl:
          'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        NEpisode: 2,
        NEpisodeValide: 0,
      },
    ];
  }
}
