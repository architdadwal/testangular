import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-circular-divs',
  templateUrl: './circular-divs.component.html',
  styleUrls: ['./circular-divs.component.css']
})
export class CircularDivsComponent implements OnInit {
  showInfo: boolean = false;
  infoHeading: string = '';
  infoDetails: string = '';
  infoImage: string = '';
  selectedCategory: string = 'Product'; // Initialize with the value of the first category
  categories: string[] = ['Product', 'Service', 'Contact', 'Category 4', 'Category 5', 'Category 6'];
  currentIndex: number = 0;

  ngOnInit() {
    this.showInfoDetails(this.selectedCategory); // Call showInfoDetails with the initial category value

    // Start the carousel effect
    interval(3000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.categories.length;
      this.showInfoDetails(this.categories[this.currentIndex]);
    });
  }

  showInfoDetails(category: string) {
    this.showInfo = true;
    this.selectedCategory = category; // Update the selected category
    switch(category) {
      case 'Product':
        this.infoHeading = 'Product';
        this.infoDetails = 'Learn about our products.';
        this.infoImage = 'assets/event.svg';
        break;
      case 'Service':
        this.infoHeading = 'Service';
        this.infoDetails = 'Explore our services.';
        this.infoImage = 'assets/extension.svg';
        break;
      case 'Contact':
        this.infoHeading = 'Contact';
        this.infoDetails = 'Contact us for assistance.';
        this.infoImage = 'assets/forum.svg';
        break;
      case 'Category 4':
        this.infoHeading = 'Category 4';
        this.infoDetails = 'Learn about Category 4.';
        this.infoImage = 'assets/group.svg';
        break;
      case 'Category 5':
        this.infoHeading = 'Category 5';
        this.infoDetails = 'Explore Category 5.';
        this.infoImage = 'assets/school.svg';
        break;
      case 'Category 6':
        this.infoHeading = 'Category 6';
        this.infoDetails = 'Contact us for assistance.';
        this.infoImage = 'assets/work.svg';
        break;
      default:
        break;
    }
  }
}
