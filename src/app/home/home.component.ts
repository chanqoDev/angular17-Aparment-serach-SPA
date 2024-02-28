import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housingLocation';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule],
  template: `
  <section class="mx-auto mt-6">
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary hover:bg-blue-700" type="button">Search</button>
    </form>
  </section>
  <section class="results">
<app-housing-location
  *ngFor="let housingLocation of housingLocationList"
  [housingLocation]="housingLocation">
</app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocationList: HousingLocation[] = []; 
  housingService: HousingService = inject(HousingService); 
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations(); 
  }
}
