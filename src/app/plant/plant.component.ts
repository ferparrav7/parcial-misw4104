import {Component, OnInit} from '@angular/core';
import {Plant} from "./plant";
import {PlantService} from "./plant.service";


@Component({
    selector: 'app-plant',
    standalone: false,
    templateUrl: './plant.component.html',
    styleUrls: ['./plant.component.css']
})
export class PlantComponent {
    plants: Plant[] = [];

    constructor(private plantService: PlantService) {
    }

    getPlantList(): void {
        this.plantService.getPlant().subscribe((plants) => {
            this.plants = plants;
        });
    }

    ngOnInit() {
        this.getPlantList();
    }
}
