import { Component } from '@angular/core';
import { process, State } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {


    public gridData= sampleProducts

  
}