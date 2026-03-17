/**
 * Image helper utilities for menu content
 */

export interface ImagePlaceholder {
  src: string;
  alt: string;
  placeholder: string; 
}

// Placeholder images 
export const imagePlaceholders: Record<string, ImagePlaceholder> = {
  'what-we-do': {
    src: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/whatwedo.jpg?alt=media&token=cb2d21b2-b659-486d-90b2-c6bd8fb526de',
    alt: 'South African township businesses',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VG93bnNoaXAgRWNvbm9teTwvdGV4dD48L3N2Zz4='
  },
  'discount-engine': {
    src: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/techeco.png?alt=media&token=b288215a-b707-4e3c-af65-724668329411',
    alt: '75/25 Discount Engine visualization',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+NzUvMjUgRGlzY291bnQgRW5naW5lPC90ZXh0Pjwvc3ZnPg=='
  },
  'team-photo': {
    src: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/teamBanner.png?alt=media&token=8dd45e55-3107-41cc-90f8-a1ab1a92482e',
    alt: 'Locals ZA team photo',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGVhbSBQaG90bzwvdGV4dD48L3N2Zz4='
  },
  'lehlohonolo-profile': {
    src: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/lebea.jpg?alt=media&token=9c1dff47-3ba5-49cc-b4fc-9107defe837d',
    alt: 'Lehlohonolo Lebea profile photo', 
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMzMzIi8+ICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjUwIiByPSIyMCIgZmlsbD0iIzU1NSIvPiAgPHBhdGggZD0iTTMwIDkwIFEzMCA4MCA2MCA4MCBROTMCA4MCA5MCA5MFoiIGZpbGw9IiM1NTUiLz4gIDx0ZXh0IHg9IjUwJSIgeT0iMTA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxlaGxvaG9ub2xvPC90ZXh0Pjwvc3ZnPg=='
  },
  'martin-profile': {
    src: 'https://firebasestorage.googleapis.com/v0/b/localsite-1f8f6.firebasestorage.app/o/martin.jpg?alt=media&token=86959307-360a-4158-a851-b8870e7c7960',
    alt: 'Martin Maseko profile photo',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMzMzIi8+ICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjUwIiByPSIyMCIgZmlsbD0iIzU1NSIvPiAgPHBhdGggZD0iTTMwIDkwIFEzMCA4MCA2MCA4MCBROTMCA4MCA5MCA5MFoiIGZpbGw9IiM1NTUiLz4gIDx0ZXh0IHg9IjUwJSIgeT0iMTA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1hcnRpbjwvdGV4dD48L3N2Zz4='
  }
};

/**
 * Get image source with fallback to placeholder
 */
export const getImageSrc = (imageName: string): string => {
  const placeholder = imagePlaceholders[imageName];
  return placeholder ? placeholder.placeholder : '';
};

/**
 * Get image path - returns the actual path as-is for now
 */
export const getImagePath = (imagePath: string): string => {
  return imagePath;
};

/**
 * Check if image exists and return appropriate source
 */
export const getImageWithFallback = (src: string, fallbackName?: string): string => {
  if (fallbackName && imagePlaceholders[fallbackName]) {
    return imagePlaceholders[fallbackName].placeholder;
  }
  return src;
};