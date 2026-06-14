import { Injectable, signal, inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  isLoading = signal<boolean>(false);
}

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.isLoading.set(true);

  return next(req).pipe(
    finalize(() => {
      loadingService.isLoading.set(false);
    }),
  );
};
