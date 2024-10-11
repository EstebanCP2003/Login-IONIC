import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  // constructor() { }

  ngOnInit() {
    console.log('Hola');
  }
    isModalOpen = false;
  
    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }

}
