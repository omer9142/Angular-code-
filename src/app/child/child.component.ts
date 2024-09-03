import { Component, Input, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() Receive : any = " "
  @Input() item = '';

  updatedValue: any
  @Output() messageEvent = new EventEmitter<string>();
  // sendMessage() {
  //   this.messageEvent.emit("Data from child back to parent");
  // }

  // ngOnchanges(changes : SimpleChanges){
  //   if (changes['Receive']) {
  //     this.updatedValue = this.Receive
  //   }
  // }

  ngOnChanges(changes: SimpleChanges) {
    this.data();
  }
  
  data() {
    console.log("function running in onchange");
  }

}
