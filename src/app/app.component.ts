import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu Inicial', url: '/menu', icon: 'Earth' },
    { title: 'Portugal', url: '/portugal', icon: 'paper-plane' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Definições', url: '/folder/Archived', icon: 'construct' },
    
  ];
  public labels = ['Family', 'Siuuuu', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
