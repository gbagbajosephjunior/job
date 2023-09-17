import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup , Validators} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent  implements OnInit{
  title = 'news-web';

  Gbasquare: FormGroup;
  constructor(){}
  ngOnInit(): void {
    this.Gbasquare  =  new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed),
      country: new FormControl(null, Validators.required),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ])
    
    });
 
  }

  onSubmit(){
    console.log(this.Gbasquare)

    
  }

  onAddSkillls(){

    (<FormArray>this.Gbasquare.get('skills')).push('controls')
  }

  emailNotAllowed(control: FormControl):Promise<any> |Observable<any>{
    const response = new Promise((resolve,reject) =>{
      setTimeout(() =>{
        if(control.value === 'procademy'){
          resolve({'emailNotAlloed':true})
        }else{
          resolve('null')
        }
      }), 5000
    });
    return response
  }
}
