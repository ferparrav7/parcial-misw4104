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
    totalInterior: number = 0;
    totalExterior: number = 0;

    constructor(private plantService: PlantService) {
    }

    getPlantList(): void {
        this.plantService.getPlant().subscribe((plants) => {
            this.plants = plants;
        });
    }

    getPlantInternal(): number {
        return this.plants.filter(plant => plant.tipo === 'Interior').length;
    }

    getPlantExternal(): number {
        return this.plants.filter(plant => plant.tipo === 'Exterior').length;
    }

    ngOnInit() {
        this.getPlantList();
    }
}
