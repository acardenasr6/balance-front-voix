import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // Estado del sidebar
  private _sidebarVisible = signal(false);
  
  // Getter para leer el estado
  get sidebarVisible() {
    return this._sidebarVisible.asReadonly();
  }

  // Métodos para manejar el sidebar
  toggleSidebar() {
    this._sidebarVisible.update(visible => !visible);
  }

  showSidebar() {
    this._sidebarVisible.set(true);
  }

  hideSidebar() {
    this._sidebarVisible.set(false);
  }

  setSidebarVisible(visible: boolean) {
    this._sidebarVisible.set(visible);
  }
}
