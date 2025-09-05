import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matWhatsappOutline as whats } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-button-whatsapp',
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ whats })],
  templateUrl: './button-whatsapp.component.html',
  styleUrl: './button-whatsapp.component.scss'
})
export class ButtonWhatsappComponent {

}
