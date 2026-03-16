/**
 * Image helper utilities for menu content
 */

export interface ImagePlaceholder {
  src: string;
  alt: string;
  placeholder: string; // Base64 or placeholder image
}

// Placeholder images for development
export const imagePlaceholders: Record<string, ImagePlaceholder> = {
  'what-we-do': {
    src: '/src/assets/images/whatwedo.jpg',
    alt: 'South African township businesses',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VG93bnNoaXAgRWNvbm9teTwvdGV4dD48L3N2Zz4='
  },
  'discount-engine': {
    src: '/src/assets/images/discount-engine.jpg',
    alt: '75/25 Discount Engine visualization',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+NzUvMjUgRGlzY291bnQgRW5naW5lPC90ZXh0Pjwvc3ZnPg=='
  },
  'team-photo': {
    src: '/src/assets/images/teamBanner.png',
    alt: 'Locals ZA team photo',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VGVhbSBQaG90bzwvdGV4dD48L3N2Zz4='
  },
  'contact-map': {
    src: '/src/assets/images/contact-map.jpg',
    alt: 'Johannesburg office location map',
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMzMzIi8+ICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Sm9oYW5uZXNidXJnIE1hcDwvdGV4dD48L3N2Zz4='
  },
  'lehlohonolo-profile': {
    src: '/src/assets/images/lebea.png',
    alt: 'Lehlohonolo Lebea profile photo', 
    placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gIDxjaXJjbGUgY3g9IjYwIiBjeT0iNjAiIHI9IjYwIiBmaWxsPSIjMzMzIi8+ICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjUwIiByPSIyMCIgZmlsbD0iIzU1NSIvPiAgPHBhdGggZD0iTTMwIDkwIFEzMCA4MCA2MCA4MCBROTMCA4MCA5MCA5MFoiIGZpbGw9IiM1NTUiLz4gIDx0ZXh0IHg9IjUwJSIgeT0iMTA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkxlaGxvaG9ub2xvPC90ZXh0Pjwvc3ZnPg=='
  },
  'martin-profile': {
    src: '/src/assets/images/martin.jpg',
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
  // In production, you might want to check if the image exists
  // For now, return the src or a placeholder if fallbackName is provided
  if (fallbackName && imagePlaceholders[fallbackName]) {
    return imagePlaceholders[fallbackName].placeholder;
  }
  return src;
};