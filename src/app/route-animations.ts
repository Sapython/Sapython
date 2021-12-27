import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        opacity: 0,
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1})
      ),
    ]),
  ]),
]);
