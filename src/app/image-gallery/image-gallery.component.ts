import { Component, OnInit }  from '@angular/core';
import { CommonModule } from '@angular/common';
import axios from 'axios';
@Component({
  selector: 'app-image-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  // images = [
  //   { src: 'https://picsum.photos/id/1015/400/300', alt: 'Mountain' },
  //   { src: 'https://picsum.photos/id/1025/400/300', alt: 'Dog' },
  //   { src: 'https://picsum.photos/id/1035/400/300', alt: 'River' },
  //   { src: 'https://picsum.photos/id/1045/400/300', alt: 'Beach' },
  //   { src: 'https://picsum.photos/id/1055/400/300', alt: 'Forest' },
  //   { src: 'https://picsum.photos/id/1031/400/300', alt: 'River' },
  //   { src: 'https://picsum.photos/id/1049/400/300', alt: 'Beach' },
  //   { src: 'https://picsum.photos/id/1062/400/300', alt: 'Forest' },
  //   { src: 'https://picsum.photos/id/1072/400/300', alt: 'Forest' },
    
  // ];

  // selectedImage: string | null = null;

  // openLightbox(imageSrc: string) {
  //   this.selectedImage = imageSrc;
  // }

  // closeLightbox() {
  //   this.selectedImage = null;
  // }

images: any[] = [];
  selectedImage: string | null = null;

  async ngOnInit() {
    const res = await axios.get('http://localhost:5000/images');
    this.images = res.data.map((img: any) => ({
      src: img.url,
      alt: img.filename
    }));
  }

  openLightbox(src: string) {
    this.selectedImage = src;
  }

  closeLightbox() {
    this.selectedImage = null;
  }


}
