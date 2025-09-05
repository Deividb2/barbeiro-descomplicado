import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheck } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-course-content',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({heroCheck})],
  templateUrl: './course-content.component.html',
  styleUrl: './course-content.component.scss'
})
export class CourseContentComponent {
  listItems: ReadonlyArray<{ text: string}> = [
    { text: 'Lista de equipamentos para iniciar'},
    { text: 'Como usar os equipamentos'},
    { text: 'Cuidados essenciais'},
    { text: 'Exercícios para pegar firmeza com a navalha'},
    { text: 'Primeiro corte de cabelo'},
    { text: 'Nomenclatura dos cortes'},
    { text: 'Técnicas em corte degradê'},
    { text: 'Técnica de pigmentação'},
    { text: 'Barba na navalha'},
    { text: 'Pigmentação em barba'},
    { text: 'Técnicas em corte com tesoura'},
    { text: 'Como usar o secador'},
  ];
}
