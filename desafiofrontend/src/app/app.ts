import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ChildrenOutletContexts } from '@angular/router';
import { routeTransitionAnimations } from './app.animations';
import { LoadingService } from './core/services/loading';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  animations: [routeTransitionAnimations], // Aplica a mágica
  template: `
    <!-- O Loader Real com Efeito de Vidro (Glassmorphism) -->
    <div class="global-loader" *ngIf="loadingService.isLoading()">
      <div class="loader-content">
        <div class="spinner"></div>
        <span>Processando...</span>
      </div>
    </div>

    <!-- O Container das Animações -->
    <main [@routeAnimations]="getRouteAnimationData()">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      main {
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #140924; /* Garante que o fundo não fique branco ao transitar */
      }

      .global-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(20, 9, 36, 0.6);
        backdrop-filter: blur(6px);
        -webkit-backdrop-filter: blur(6px);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: 'Roboto', sans-serif;
      }

      .loader-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }

      .spinner {
        width: 48px;
        height: 48px;
        border: 4px solid rgba(255, 255, 255, 0.1);
        border-top-color: #bfa3e6;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class App {
  contexts = inject(ChildrenOutletContexts);
  loadingService = inject(LoadingService);

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.routeConfig?.path;
  }
}
