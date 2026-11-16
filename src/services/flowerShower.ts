import confetti from 'canvas-confetti';
import { sacredHaptics } from './haptics';

export const triggerSacredFlowerShower = () => {
  sacredHaptics.petalShower();

  const count = 50;
  const defaults = {
    origin: { y: 0.2 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  // Marigold & Rose Petals mix (Gold, Amber, Crimson, Rose, Orange)
  fire(0.25, {
    spread: 26,
    startVelocity: 45,
    colors: ['#F59E0B', '#F43F5E', '#FB923C', '#E11D48', '#FDE047'],
    shapes: ['circle'],
    scalar: 1.2,
  });

  fire(0.2, {
    spread: 60,
    colors: ['#EA580C', '#EC4899', '#D97706', '#BE185D', '#FEF08A'],
    scalar: 1.4,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.1,
    colors: ['#F59E0B', '#E11D48', '#FB923C', '#F43F5E'],
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    colors: ['#FDE047', '#FDA4AF', '#FCD34D'],
    scalar: 1.5,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#E11D48', '#F59E0B', '#BE123C'],
    scalar: 1.3,
  });
};
