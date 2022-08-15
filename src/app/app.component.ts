import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
username : string = '';
password : string = '';
RetypePassword : string = '';
ispasswordsmatch : boolean = false ;
public onUsernameInputChanged(e: Event){
  this.username = (<HTMLInputElement>e.target).value;
}
public onPasswordInputChanged(e: Event){
  this.password = (<HTMLInputElement>e.target).value;
}
public onRetypePasswordChanged(e: Event){
this.RetypePassword = (<HTMLInputElement>e.target).value;

// if(this.password !== this.RetypePassword){
//   this.ispasswordsmatch = false;
// } else {
//   this.ispasswordsmatch = true;
this.ispasswordsmatch = this.password !== this. RetypePassword ? false : true;
}
}