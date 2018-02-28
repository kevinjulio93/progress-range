import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProgressRangeComponent } from './progress-range/progress-range';
import { SubAreaItemComponent } from './sub-area-item/sub-area-item';

@NgModule({
    declarations: [
        ProgressRangeComponent,
        SubAreaItemComponent
    ],
    imports: [
        IonicModule.forRoot(SubAreaItemComponent)
    ],
    exports: [
        ProgressRangeComponent,
        SubAreaItemComponent
    ]
})
export class ComponentsModule {}
