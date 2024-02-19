import { Component } from '@angular/core';

@Component({
  selector: 'app-circular-divs',
  templateUrl: './circular-divs.component.html',
  styleUrls: ['./circular-divs.component.css']
})
export class CircularDivsComponent {
  showInfo: boolean = false;
  infoDetails: string = '';

  showInfoDetails(info: string) {
    this.showInfo = !this.showInfo;
    switch(info) {
      case 'Product':
        this.infoDetails = `Learn about our products.`;
        break;
      case 'Service':
        this.infoDetails = `Explore our services.`;
        break;
      case 'Contact':
        this.infoDetails = `Contact us for assistance.`;
        break;
      default:
        this.infoDetails = '';
    }
  }
}
