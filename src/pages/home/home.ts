import { Component } from '@angular/core';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    subAreas = [
        { title: 'Earnings', score: 6, color: '#98c276' },
        { title: 'Investment', score: 3, color: '#98c276' },
        { title: 'Savings', score: 4, color: '#98c276' }
    ];

}
