import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'; 
import { InfoUsuario } from '../../modals/info-usuario/info-usuario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  abrirModal() {
    this.bsModalRef = this.modalService.show(InfoUsuario);
    
  }
}