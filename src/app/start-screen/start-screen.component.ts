import { Component } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-start-screen',
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  constructor(private router: Router) {

  }

newGame() {
  this.router.navigateByUrl('/game');
  console.log('Ring of Fire!');
  
}

}
