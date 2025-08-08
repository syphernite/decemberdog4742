import { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 12 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.26,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const driftParallax: Variants = {
  hidden: { y: 0 },
  visible: { 
    y: -20,
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear'
    }
  }
};

export const hoverTension: Variants = {
  rest: { 
    scale: 1, 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
  },
  hover: { 
    scale: 1.02,
    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.3)',
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
};

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const sweepOnce: Variants = {
  hidden: { 
    backgroundPosition: '-200% 0' 
  },
  visible: { 
    backgroundPosition: '200% 0',
    transition: {
      duration: 1.2,
      ease: 'easeInOut'
    }
  }
};

export const slideInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1]
    }
  }
};

export const glitchIn: Variants = {
  hidden: { 
    opacity: 0,
    x: -20,
    skewX: -5
  },
  visible: { 
    opacity: 1,
    x: 0,
    skewX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const bloodDrip: Variants = {
  hidden: { 
    opacity: 0,
    y: -50,
    scaleY: 0
  },
  visible: { 
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const smokeRise: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 2,
      ease: 'easeOut'
    }
  }
};

export const typewriter: Variants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut'
    }
  }
};

export const neonFlicker: Variants = {
  hidden: { 
    opacity: 0,
    filter: 'brightness(0.5)'
  },
  visible: { 
    opacity: 1,
    filter: 'brightness(1)',
    transition: {
      duration: 0.1,
      repeat: 3,
      repeatType: 'reverse'
    }
  }
};

export const rotateIn: Variants = {
  hidden: { 
    opacity: 0,
    rotate: -180,
    scale: 0.5
  },
  visible: { 
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};