type Listener = (image: string | null) => void;
const listeners = new Set<Listener>();

export const getCustomDarshanImage = (): string | null => {
  try {
    return localStorage.getItem('sahebworld_custom_darshan_image') || null;
  } catch {
    return null;
  }
};

export const setCustomDarshanImage = (dataUrl: string | null) => {
  try {
    if (dataUrl) {
      localStorage.setItem('sahebworld_custom_darshan_image', dataUrl);
    } else {
      localStorage.removeItem('sahebworld_custom_darshan_image');
    }
  } catch {}
  listeners.forEach(listener => listener(dataUrl));
};

export const subscribeToCustomPortrait = (listener: Listener) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
