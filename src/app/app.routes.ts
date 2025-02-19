import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MainComponent } from './main/main.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'main', component: MainComponent },
  { path: 'start-screen', component: StartScreenComponent },
  { path: 'game', component: GameComponent },

];
