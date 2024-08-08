import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  languageListVisible: boolean = false;
  public currentLanguage!: {img: string, language: string};

  resourceList: {caption?: string, resource: string}[] = 
  [
    {caption: 'Support', resource: 'support@kick.com'},
    {caption: 'Partners', resource: 'partners@kick.com'},
    {caption: 'Careers', resource: 'careers@kick.com'},
    {resource: 'Kick Community'},
    {resource: 'Kick Brand'},
    {resource: 'Official Kick Merch'},
  ]

  languageList: {img: string, language: string}[] = [
    {img: './assets/images/flags/ch.webp', language: 'Sweather'},
    {img: './assets/images/flags/de.webp', language: 'German'},
    {img: './assets/images/flags/id.webp', language: 'Polish'},
    {img: './assets/images/flags/pt.webp', language: 'Portugal'},
    {img: './assets/images/flags/ro.webp', language: 'France'},
    {img: './assets/images/flags/tr.webp', language: 'Turkish'},
    {img: './assets/images/flags/ua.webp', language: 'Ukrainian'},
    {img: './assets/images/flags/us.webp', language: 'English'},
    {img: './assets/images/flags/vn.webp', language: 'Chinese'}
  ]

  setCurrentLanguage(id: number) {
    this.currentLanguage = this.languageList[id];
    this.languageListVisible = false;
  }
}
