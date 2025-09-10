import { Component, inject, OnInit, computed } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../services/layout';

@Component({
  selector: 'app-sidebar',
  imports: [MenuModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  private layoutService = inject(LayoutService);
  
  // Computed signal para reactividad
  isVisible = computed(() => this.layoutService.sidebarVisible());
  
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.initializeMenu();
  }

  private initializeMenu() {
    this.menuItems = [
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Balance Overview',
            icon: 'pi pi-chart-line',
            routerLink: '/balance-overview'
          }
        ]
      },
      {
        label: 'Accounts',
        items: [
          {
            label: 'Account',
            icon: 'pi pi-list',
            routerLink: '/accounts/crud'
          },
          {
            label: 'Account Types',
            icon: 'pi pi-list',
            routerLink: '/accounts/types'
          },
          {
            label: 'Balances',
            icon: 'pi pi-wallet',
            routerLink: '/accounts/balance'
          },
          {
            label: 'Movement',
            icon: 'pi pi-credit-card',
            routerLink: '/accounts/movement'
          },
          {
            label: 'Movement Type',
            icon: 'pi pi-credit-card',
            routerLink: '/accounts/movement/types'
          }
          
        ]
      },
    ];
  }

  onOverlayClick() {
    this.layoutService.hideSidebar();
  }
}
