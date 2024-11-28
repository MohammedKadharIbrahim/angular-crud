import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
signupUser:any[]=[];
signupObj:any={
userName:'',
email:'',
password:''
};
loginObj:any={
  userName:'',
  password:''
  };


constructor(private router:Router){}

ngOnInit(): void {
  const localData=localStorage.getItem('signupUser')
  if(localData!=null){
    this.signupUser=JSON.parse(localData)
  }
}
onSignUp(){
this.signupUser.push(this.signupObj);
localStorage.setItem('signupUser',JSON.stringify(this.signupUser));
this.signupObj={
  userName:'',
  email:'',
  password:''
  };
}
onLogin(){
  const isUserExist=this.signupUser.find(m=>m.userName==this.loginObj.userName&&m.password==this.loginObj.password);
  if(isUserExist !=undefined){
    alert('user login successfully')
    this.router.navigate(['/dashboard'])
  }else{
    alert('wrong crendentials')
  }
}







}
