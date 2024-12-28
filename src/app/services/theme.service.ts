import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeType = 'male' | 'female';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<ThemeType>(null);
  theme$ = this.theme.asObservable();
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
  }

  setTheme(theme: ThemeType) {
    localStorage.setItem('theme', theme);
    this.renderer.removeClass(document.body, this.theme.value);
    this.renderer.addClass(document.body, theme);
    this.theme.next(theme);
  }

  getCurrentTheme(): ThemeType {
    return this.theme.value;
  }

  private getStoredTheme(): ThemeType | null {
    return localStorage.getItem('theme') as ThemeType | null;
  }

  initializeTheme() {
    const storedTheme = this.getStoredTheme();
    if (storedTheme) {
      this.renderer.addClass(document.body, storedTheme);
      this.theme.next(storedTheme);
    }
  }
}
