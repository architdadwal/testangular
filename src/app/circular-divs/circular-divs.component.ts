import { Component } from '@angular/core';

@Component({
  selector: 'app-circular-divs',
  templateUrl: './circular-divs.component.html',
  styleUrls: ['./circular-divs.component.css']
})
export class CircularDivsComponent {
  showInfo: boolean = true; // Initially set to true to display default information
  infoHeading: string = 'Product'; // Default heading
  infoDetails: string = 'Learn about our products.'; // Default details
  infoImage: string = 'path/to/product-image.png'; // Default image

  showInfoDetails(category: string) {
    switch(category) {
      case 'Product':
        this.infoHeading = 'Product';
        this.infoDetails = 'Learn about our products.';
        this.infoImage = 'path/to/product-image.png';
        break;
      case 'Service':
        this.infoHeading = 'Service';
        this.infoDetails = 'Explore our services.';
        this.infoImage = 'path/to/service-image.png';
        break;
      case 'Contact':
        this.infoHeading = 'Contact';
        this.infoDetails = 'Contact us for assistance.';
        this.infoImage = 'path/to/contact-image.png';
        break;
      case 'Category 4':
        this.infoHeading = 'Category 4';
        this.infoDetails = 'Learn about Category 4.';
        this.infoImage = 'path/to/category4-image.png';
        break;
      case 'Category 5':
        this.infoHeading = 'Category 5';
        this.infoDetails = 'Explore Category 5.';
        this.infoImage = 'path/to/category5-image.png';
        break;
      case 'Category 6':
        this.infoHeading = 'Category 6';
        this.infoDetails = 'Contact us for assistance regarding Category 6.';
        this.infoImage = 'path/to/category6-image.png';
        break;
      default:
        break;
    }
  }
}
