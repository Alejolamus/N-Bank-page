import { Component } from '@angular/core';
import { Navbar } from '../../Components/navbar/navbar';
import { Footer } from '../../Components/footer/footer';
import { Hero } from '../../Components/hero/hero';
import { Features } from '../../Components/features/features';

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, Hero,Features],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}