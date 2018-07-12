import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date-struct';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() emitEffectiveDate: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
   
  }

  onSelectDate(date: NgbDateStruct){
    console.log(date);
    this.emitEffectiveDate.emit(date);
  }
}
