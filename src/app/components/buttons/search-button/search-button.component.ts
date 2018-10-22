import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss']
})
export class SearchButtonComponent implements OnInit {

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search() {
    this.event.emit()
  }

}
