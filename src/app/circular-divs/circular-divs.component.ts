import { Component } from '@angular/core';

@Component({
  selector: 'app-circular-divs',
  templateUrl: './circular-divs.component.html',
  styleUrls: ['./circular-divs.component.css']
})
export class CircularDivsComponent {
  showInfo: boolean = false;
  infoHeading: string = '';
  infoDetails: string = '';
  infoImage: string = ''; // New property for image URL

  showInfoDetails(info: string) {
    this.showInfo = !this.showInfo;
    switch(info) {
      case 'Product':
        this.infoHeading = `Product`;
        this.infoDetails = `Learn about our products.`;
        this.infoImage = 'assets/events.png'; // Set image URL for Product
        break;
      case 'Service':
        this.infoHeading = `Services`;
        this.infoDetails = `Explore our services.`;
        this.infoImage = 'assets/events.png'; // Set image URL for Service
        break;
      case 'Contact':
        this.infoHeading = `Contact us `;
        this.infoDetails = `Contact us for assistance.`;
        this.infoImage = 'assets/events.png'; // Set image URL for Contact
        break;
      case 'Category 4':
        this.infoHeading = `Category 4`;
        this.infoDetails = `Learn about Category 4.`;
        this.infoImage = 'assets/events.png'; // Set image URL for Category 4
        break;
      case 'Category 5':
        this.infoHeading = `Category 5`;
        this.infoDetails = `Explore Category 5.`;
        this.infoImage = 'assets/events.png'; // Set image URL for Category 5
        break;
      case 'Category 6':
        this.infoHeading = `Category 6`;
        this.infoDetails = `Contact us for assistance regarding Category 6.`;
        this.infoImage = 'assets/events.png'; // Set image URL for Category 6
        break;
      default:
        this.infoDetails = '';
        this.infoImage = ''; // Reset image URL if no valid case
    }
  }
}
