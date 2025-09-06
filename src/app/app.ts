import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountTypeComponent } from './components/account-type//account-type.component';
import { Topbar } from './components/topbar/topbar';
import { Sidebar } from './components/sidebar/sidebar';
import { LayoutService } from './services/layout';

@Component({
  selector: 'app-root',
  imports: [Topbar, Sidebar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('balance-front-voix');
  private layoutService = inject(LayoutService);
  
  // Computed signal para reactividad del layout
  sidebarVisible = computed(() => this.layoutService.sidebarVisible());
}
