import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faLinkedin = faLinkedin;
  faGitHub = faGithub;
}
