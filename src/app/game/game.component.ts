import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { PlayerComponent } from "../player/player.component";

@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
    
})
export class GameComponent {
pickCardAnimation = false;
cardAmount : number[] = [1,2,3,4,5];
game!: Game ;
currentCard : string = '';


constructor() {
  this.newGame();
}


newGame() {
  this.game = new Game;
  console.log(this.game);
  
}

takeCard(){
  if(!this.pickCardAnimation){
    this.currentCard = this.game.stack.pop() || 'card_empty';
    this.pickCardAnimation = true;
  setTimeout(() => {
    this.game.playedCards.push(this.currentCard);
    this.pickCardAnimation = false;
    console.log(this.currentCard, this.game.playedCards);
  }, 1000);  
}

}
}