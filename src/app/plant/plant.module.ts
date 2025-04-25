import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlantComponent} from './plant.component';


@NgModule({
    declarations: [PlantComponent],
    exports: [PlantComponent],
    imports: [CommonModule]
})
export class PlantModule {
}
