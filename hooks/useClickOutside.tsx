import { useState, useEffect, useRef, MutableRefObject } from 'react';

const useClickOutside = <T extends HTMLElement>(initialState: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const ref = useRef<T | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isOpen, setIsOpen, ref };
};

export default useClickOutside;
