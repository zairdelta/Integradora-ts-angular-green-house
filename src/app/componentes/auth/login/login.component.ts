import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../modelos/user';
import { services } from '../../servicio/service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  registroForm:FormGroup;
  minleng=4
  loginActive=true;
  constructor(private fb:FormBuilder,private authService:services,private router:Router) {
    this.loginForm= this.createFrom1();
    this.login();
    this.registroForm=this.createFrom();
    this.registro();
   }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    // this.authService.cargar(["loginscript"]);
  }
  registro():void{
    if (this.registroForm.invalid) {
      return Object.values(this.registroForm.controls).forEach(control=>{
        control.markAllAsTouched();
      });

    }
    else{
      this.authService.registro(this.registroForm.value).subscribe((data:any)=>{
        this.router.navigate(['/login']);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your user has been registered',
          showConfirmButton: false,
          timer: 1500
        })
            },_error=>{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'This email or url_avatar already exists, please try again!',
                footer: '<a href="https://imgur.com">Do not you have an avatar?</a>'
              })

      })

    }
  }


  createFrom():FormGroup{
    return this.fb.group({
      username:[null,[Validators.required,Validators.minLength(4)]],
      url_foto:[null,[Validators.required,Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)]],
      email:[null,[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:[null,[Validators.required,Validators.minLength(4)]],
      password2:[null,[Validators.required,Validators.minLength(4)]]
    })
  }
  get emailValidate1(){
    return(
      this.registroForm.get('email')?.invalid && this.registroForm.get('email')?.touched && this.registroForm.get('email')?.dirty
    )
  }
  get url_fotoValidate(){
    return(
      this.registroForm.get('url_foto')?.invalid && this.registroForm.get('url_foto')?.touched && this.registroForm.get('url_foto')?.dirty
      )
  }
  get passwordValidate1(){
    return(
      this.registroForm.get('password')?.invalid && this.registroForm.get('password')?.touched  && this.registroForm.get('password')?.dirty

    )
  }
  get usernameValidate(){
    return(
      this.registroForm.get('nombre')?.invalid && this.registroForm.get('nombre')?.touched &&  this.registroForm.get('nombre')?.dirty
    )
  }
  get passwordValidate2(){
    const pass=this.registroForm.get('password')?.value;
    const pass2=this.registroForm.get('password2')?.value;
    return pass===pass2 ? false:true;
  }




  login():void{
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control=>{
        control.markAllAsTouched();
      })}
    else{
      this.authService.login(this.loginForm.value).subscribe((data:any)=>{
          //this.cookieService.set('token_access',data.token,4,'/')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Successful start, welcome',
            showConfirmButton: false,
            timer: 1500
          })
          if (localStorage.getItem("token_access")) {
           localStorage.removeItem("token_access")
         }
          localStorage.setItem("token_access",data.token)
          this.router.navigate(['ini/inicio']);
        })

    }
  }

  get emailValidate(){
    return(
      this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched && this.loginForm.get('email')?.dirty
    )
  }
  get passwordValidate(){
    return(
      this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched  && this.loginForm.get('password')?.dirty

    )
  }
  createFrom1():FormGroup{
    return this.fb.group({
      email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',[Validators.required,Validators.minLength(4)]],
    });
  }

}
