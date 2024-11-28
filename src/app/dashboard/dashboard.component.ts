import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
title='angular-curd-localstorage';
@ViewChild('myModal') model :ElementRef | undefined;
studentObj:Student=new Student
studentlist:Student[]=[];
ngOnInit(): void {
  const localData=localStorage.getItem("angular17crud");
  if(localData!=null){
this.studentlist=JSON.parse(localData)
  }
}



openModel(){
 
const model=document.getElementById('myModal');
if(model !=null){
  model.style.display='block'
}
}


closeModel(){
  this.studentObj=new Student();
  if(this.model != null){
this.model.nativeElement.style.display='none';
  }
}


// saveStudent(){
//   debugger;
// const isLocalPresent=localStorage.getItem("angular17crud");
// if(isLocalPresent != null){
// const oldArray=JSON.parse(isLocalPresent);
// oldArray.push(this.studentObj);
// localStorage.setItem('angular17curd',JSON.stringify(oldArray));
// }else{
//   const newArr=[];
//   newArr.push(this.studentObj);
//   localStorage.setItem('angular17curd',JSON.stringify(newArr));
// }
// }

ondelete(item:Student){
const isdelete=confirm("Are you sure want tod delete ");
if(isdelete){
  const currentrecord=this.studentlist.findIndex(m=>m.id === this.studentObj.id);
  this .studentlist.splice(currentrecord,1);
  localStorage.setItem("angular17crud", JSON.stringify(this.studentlist));
}
}


onedit(item:Student){
this.studentObj=item;
this.openModel();
}


updateStudent(){
const currentrecord=this.studentlist.find(m=>m.id === this.studentObj.id);
if(currentrecord != undefined){
currentrecord.address=this.studentObj.address;
currentrecord.name=this.studentObj.name;
currentrecord.mobileNo=this.studentObj.mobileNo;
};
localStorage.setItem("angular17crud", JSON.stringify(this.studentlist));
this.closeModel();
}


saveStudent() {
  debugger;
  
  // Get the existing data from localStorage (with the correct key)
  const isLocalPresent = localStorage.getItem("angular17crud"); // Use consistent key
  
  if (isLocalPresent !== null) {
    // Parse the existing array from localStorage
    const oldArray = JSON.parse(isLocalPresent);
    // update
    this.studentObj.id=oldArray.length + 1;
    
    // Add the new student object to the array
    oldArray.push(this.studentObj);
    // onclick to save create a cardin html salman writing
    this.studentlist=oldArray;

    
    // Save the updated array back to localStorage
    localStorage.setItem("angular17crud", JSON.stringify(oldArray)); // Save the updated array
  } else {
    // If no data is present in localStorage, create a new array with the first student
    const newArr = [this.studentObj];

    // update
    this.studentObj.id=1
     
    // 
    this.studentlist=newArr;
    
    // Save the new array to localStorage
    localStorage.setItem("angular17crud", JSON.stringify(newArr)); // Save the new array
  }
  this.closeModel();
}

}





export class Student{
  id:number;
  name:string;
  mobileNo:string;
  email:string;
  city:string;
  state:string;
  pincode:string;
  address:string;


  constructor(){
    this.id=0;
    this.address='',
    this.city='',
    this.email='',
    this.mobileNo='',
    this.name='',
    this.state='',
    this.pincode=''
  }
}

