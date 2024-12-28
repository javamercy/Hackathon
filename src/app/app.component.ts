import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Hackathon';

  isChatPage: boolean = false;

  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.isChatPage = this.router.url.includes('chat');
    });
  }
}
