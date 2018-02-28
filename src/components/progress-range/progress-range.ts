import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'progress-range',
    templateUrl: 'progress-range.html'
})
export class ProgressRangeComponent {

    @Input() min: number = 0;
    @Input() max: number = 10;
    @Input() score: number = 0;
    @Input() color: string = '#5CBCB9';
    @Output() scoreChange: EventEmitter<number>;

    constructor() {
        this.scoreChange = new EventEmitter<number>();
    }

    updateScore(score: number) {
        this.score = score;
        this.scoreChange.emit(score);
    }
}
