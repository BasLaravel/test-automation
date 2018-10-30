import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';
// @ts-ignore
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  sound = new Howl({
    src: ['../assets/Elevator-music.mp3'],
    loop: true
  });

  muteSound = false;

  constructor(public wallet: WalletService) {
    this.startMusic();
  }

  ngOnInit() {
  }

  startMusic() {
    Howler.volume(0.25);
    this.sound.play();
  }

  muteMusic() {
    this.muteSound = !this.muteSound;
    this.sound.mute(this.muteSound);
  }

  stopMusic() {
    this.sound.stop();
  }
}
