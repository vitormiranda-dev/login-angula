import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info-usuario',
  imports: [],
  templateUrl: './info-usuario.html',
  styleUrl: './info-usuario.css'
})
export class InfoUsuario {
constructor(public bsModalRef: BsModalRef) { }

fecharModal() {
  this.bsModalRef.hide();
}
}
