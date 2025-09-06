import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../../services/layout';

@Component({
  selector: 'app-topbar',
  imports: [ToolbarModule, ButtonModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css'
})
export class Topbar {
  private layoutService = inject(LayoutService);

  onMenuToggle() {
    this.layoutService.toggleSidebar();
  }
}
