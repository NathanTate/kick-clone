import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CloseDetailsDirectiveDirective } from '../../directives/close-details-directive.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, CloseDetailsDirectiveDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isSearchVisible: boolean = false;

  moreList: string[] = [
    'Community Guidelines',
    'DMCA Policy',
    'Privacy Policy',
    'Terms of Service',
    'Help & Support'
  ]
}
