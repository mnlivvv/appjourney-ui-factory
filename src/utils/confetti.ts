import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const count = 200;
  const defaults = { 
    origin: { y: 0.7 },
    zIndex: 5000
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  // Colorful confetti explosion
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA']
  });

  fire(0.2, {
    spread: 60,
    colors: ['#FFC6FF', '#FFADAD', '#FFC6FF', '#BDB2FF', '#A0C4FF', '#9BF6FF']
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#FFABAB', '#FFC3A0', '#FF677D', '#D4A5A5', '#392F5A']
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#E0BBE4', '#957DAD', '#D291BC', '#FEC8D8', '#FFDFD3']
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#FCBAD3', '#AA96DA', '#FFFFD2', '#A8D8EA', '#FFAAA5']
  });
};