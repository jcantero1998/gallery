import {Injectable} from '@angular/core';
import {GalleryImage} from '../model/gallery-image';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleryImages: GalleryImage[] = [];
  private gallerySelected$: BehaviorSubject<GalleryImage> = new BehaviorSubject<GalleryImage>(undefined!);

  constructor() {
  }

  getImageSelected(): Observable<GalleryImage> {
    return this.gallerySelected$.asObservable();
  }

  selectImage(galleryImages: any, position: number): void {
    if(galleryImages){
      this.galleryImages = galleryImages;
    }
    this.gallerySelected$.next(this.galleryImages[position]);
  }
}
