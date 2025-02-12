import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProposalComponent } from './proposal/proposal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProposalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'san-valentin';
}
