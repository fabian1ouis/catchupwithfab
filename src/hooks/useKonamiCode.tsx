import { useEffect, useRef } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export const useKonamiCode = (onSuccess: () => void) => {
  const keysPressed = useRef<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keysPressed.current.push(event.key);
      
      // Keep only the last 10 keys
      if (keysPressed.current.length > KONAMI_CODE.length) {
        keysPressed.current.shift();
      }

      // Check if the sequence matches
      const isMatch = KONAMI_CODE.every(
        (key, index) => key === keysPressed.current[index]
      );

      if (isMatch) {
        onSuccess();
        keysPressed.current = []; // Reset after success
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSuccess]);
};

