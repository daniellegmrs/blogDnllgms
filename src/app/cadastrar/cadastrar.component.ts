import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: Usuario = new Usuario
  confirmarSenha: string
  tipoUser: string

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any) {
    this.tipoUser = event.target.value
  }

  cadastrar() {
    this.user.tipo = this.tipoUser

    if(this.user.senha != this.confirmarSenha){
      alert('Senhas incorretas')
    }else {
      this.authService.cadastrar(this.user).subscribe((resp: Usuario) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }

}
