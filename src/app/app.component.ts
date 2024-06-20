import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public birdsList: Record<string, string | number>[] = [
    { ID: 1, Name: "Cardinal", imageName: 'cardinal' },
    { ID: 2, Name: "Kingfisher", imageName: 'hunei' },
    { ID: 3, Name: "Keel-billed-toucan", imageName: 'costa-rica' },
    { ID: 4, Name: "Yellow-warbler", imageName: 'kaohsiung' },
    { ID: 5, Name: "Bee-eater", imageName: 'bee-eater' }
  ];
  public getImage(bird: string): string {
    return `https://ej2.syncfusion.com/products/images/carousel/${bird}.png`;
  }
  title = 'myapp';
}
