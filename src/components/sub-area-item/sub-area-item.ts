import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'sub-area-item',
    templateUrl: 'sub-area-item.html'
})
export class SubAreaItemComponent {

    @Input() title: string = '';
    @Input() score: number = 0;
    @Input() color: string = '#5CBCB9';
    @Output() scoreChange: EventEmitter<number>;
    @Output() edit: EventEmitter<void>;
    @Output() delete: EventEmitter<void>;

    constructor() {
        this.scoreChange = new EventEmitter<number>();
        this.edit = new EventEmitter<void>();
        this.delete = new EventEmitter<void>();
    }

    clickEdit() {
        this.edit.emit();
    }

    clickDelete() {
        this.delete.emit();
    }

    updateScore(score: number) {
        this.score = score;
        this.scoreChange.emit(score);
    }

}
