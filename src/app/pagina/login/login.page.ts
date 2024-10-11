import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ''; 
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  ngOnInit() {}

  async onSubmit() {

    if (this.username === 'admin' && this.password === '1234') {
      this.router.navigate(['/hola']);
    } 
    
    else {
     await this.Alert();
    }
  }
  
  async Alert(){
    const alertas = await this.alertController.create({
      header: 'Error de utenticación',
      message: 'Las credenciales son incorrectas, verifica que el nombre de usuario o la contraseña sean correctas.',
      buttons: ['Cerrar']
    });

    await alertas.present();
  }
}
