import {Component, OnInit} from '@angular/core';
import {Plant} from "./plant";

@Component({
    selector: 'app-plant',
    standalone: false,
    templateUrl: './plant.component.html',
    styleUrls: ['./plant.component.css']
})
export class PlantComponent {
    plant: Array<Plant> = [];
    constructor() {
    }

    ngOnInit() {
    }
}
