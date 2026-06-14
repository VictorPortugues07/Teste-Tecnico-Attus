import { trigger, transition, style, query, animate, group } from '@angular/animations';

export const routeTransitionAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%', height: '100%' }), {
      optional: true,
    }),

    group([
      query(
        ':leave',
        [animate('400ms ease-in-out', style({ opacity: 0, transform: 'scale(0.95)' }))],
        { optional: true },
      ),

      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'scale(1.05)' }),
          animate('400ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' })),
        ],
        { optional: true },
      ),
    ]),
  ]),
]);
