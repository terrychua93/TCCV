import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShortenPipe } from '@core/pipe/shorten.pipe';

interface Photo {
  id: number;
  title: string;
  url: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-imagecard',
  standalone: true,
  imports: [ShortenPipe],
  templateUrl: './imagecard.component.html',
  styleUrl: './imagecard.component.scss'
})
export class ImageCardComponent {
  @Input() image: Photo = {} as Photo;
  @Output() clicked = new EventEmitter<any>()


  onImageClick = (image: Photo) => {
    this.clicked.emit(image);  
  }
}
