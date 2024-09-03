import { Component, OnChanges, SimpleChanges, Input, OnInit, ViewChild, ElementRef} from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   
 
// @ViewChild('input') inputRef!: ElementRef;
// submittedData: any = null ;
// item = ["omer", "Anas"];
// isActive = true;
// textColor = 'blue';
// fontSize = 20;

// Data = "Data From parent to child";

// message: string = "";

// receiveMessage($event: string) {
//   this.message = $event;
// }

// Template driven form code
//  formData: any;

//  detail(value: any) {
//    this.formData = value;
// }
// LoginForm = new FormGroup({
//   user: new FormControl(''),
//   password: new FormControl('')
// })

// constructor(private formBuilder: FormBuilder) {
// }

// LoginForm = this.formBuilder.group({
//   user: ['', [Validators.required , Validators.email]],
//   password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
// })

// loginUser() {
//   this.LoginForm.markAllAsTouched();
//   if (this.LoginForm.valid) {
//   this.submittedData = this.LoginForm.value;
//   console.log(this.submittedData);
//   }
// }

// firstName: string = '';
// lastName: string = '';

// logChange(field: string, value: string) {
//   console.log(`${field} changed:`, value);
// }
// ngOnInit() {
//   // console.log(" input ref",this.inputRef);
  
//   this.call()
 
// }
// call(){
//   console.log("Hello")   
// }

// ngAfterViewInit(): void{
//   console.log(" input ref",this.inputRef);
// }

ngOnInit(){
  this.fun()
}

fun(){
  console.log("function called")
}

currentItem = 'Television';

}
export class AppComponent {
}
// export class FormComponent implements OnChanges {
 
// }


