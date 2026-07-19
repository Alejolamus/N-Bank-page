import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  constructor(private cdr: ChangeDetectorRef){}
  linkSimulacion: string ='/login';
  //determinamos link del boton para que el usario ingrese antes de cotizar
  ngOnInit():void{
  const token = localStorage.getItem('token');
  if (token){
    this.linkSimulacion='/cotizar'
    this.cdr.detectChanges()
  }
  }
}