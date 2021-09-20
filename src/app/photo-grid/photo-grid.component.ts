import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetPhotosService } from '../core/get-photos.service';
import { Photo } from '../core/Photo.model';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss']
})
export class PhotoGridComponent implements OnInit {
  photos: Photo[] = [];
  show: Boolean = false;
  constructor(private PhotoService: GetPhotosService, private router: Router) {
  }
  ngOnInit(): void {

    this.PhotoService.GetPhotos().subscribe(x => this.photos = x.slice(0, 200));
    this.show = false

  }

  onClick(id: number) {
    this.PhotoService.SetValues(id, true)
    this.router.navigate(['/Photo'])
  }
  showImg(id: number) {
    console.log("at click")
    this.PhotoService.SetValues(id, false);
    this.show = true;
  }

}
