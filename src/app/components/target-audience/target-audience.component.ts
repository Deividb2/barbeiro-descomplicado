import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheck, heroXMark } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-target-audience',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({heroCheck, heroXMark})],
  templateUrl: './target-audience.component.html',
  styleUrl: './target-audience.component.scss'
})
export class TargetAudienceComponent {
  targetAudience: ReadonlyArray<{text: string}> = [
    { text: "Para quem quer um ramo lucrativo" },
    { text: "Para quem já trabalha na área e deseja evoluir" },
    { text: "Para quem quer aprender" },
    { text: "Para quem quer fazer uns cortes bem loko" },
    { text: "Para quem é gente boa" }
  ]

  targetAudienceNot: ReadonlyArray<{text: string}> = [
    { text: "Para quem quer dinheiro fácil" },
    { text: 'Para quem "não tem tempo" de aprender' },
    { text: "Para quem quer viver dependendo dos outros" },
    { text: "Para quem é pipa avoada" },
    { text: "Para quem só está de bobeira" }  
  ]
}
