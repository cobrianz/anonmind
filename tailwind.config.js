/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#8B7FD6', // soft lavender
        'primary-50': '#F4F2FF', // very light lavender
        'primary-100': '#E8E4FF', // light lavender
        'primary-200': '#D1C9FF', // lighter lavender
        'primary-300': '#B9AEFF', // medium light lavender
        'primary-400': '#A297FF', // medium lavender
        'primary-500': '#8B7FD6', // primary lavender
        'primary-600': '#7A6BC4', // darker lavender
        'primary-700': '#6957B2', // dark lavender
        'primary-800': '#5843A0', // darker lavender
        'primary-900': '#472F8E', // darkest lavender
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors
        'secondary': '#7DD3C0', // mint green
        'secondary-50': '#F0FDFB', // very light mint
        'secondary-100': '#CCFBF1', // light mint
        'secondary-200': '#99F6E4', // lighter mint
        'secondary-300': '#5EEAD4', // medium light mint
        'secondary-400': '#2DD4BF', // medium mint
        'secondary-500': '#7DD3C0', // secondary mint
        'secondary-600': '#0D9488', // darker mint
        'secondary-700': '#0F766E', // dark mint
        'secondary-800': '#115E59', // darker mint
        'secondary-900': '#134E4A', // darkest mint
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors
        'accent': '#A8D8FF', // light blue
        'accent-50': '#F0F9FF', // very light blue
        'accent-100': '#E0F2FE', // light blue
        'accent-200': '#BAE6FD', // lighter blue
        'accent-300': '#7DD3FC', // medium light blue
        'accent-400': '#38BDF8', // medium blue
        'accent-500': '#A8D8FF', // accent blue
        'accent-600': '#0284C7', // darker blue
        'accent-700': '#0369A1', // dark blue
        'accent-800': '#075985', // darker blue
        'accent-900': '#0C4A6E', // darkest blue
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FDFCFF', // warm white with lavender undertone
        'surface': '#F8F6FB', // slightly deeper surface
        'card': '#FFFFFF', // white
        'popover': '#FFFFFF', // white
        'muted': '#F8F6FB', // muted surface
        'muted-foreground': '#6B6B7D', // medium gray with purple undertones

        // Text Colors
        'foreground': '#2D2A3D', // deep purple-gray
        'text-primary': '#2D2A3D', // deep purple-gray
        'text-secondary': '#6B6B7D', // medium gray with purple undertones

        // Status Colors
        'success': '#6BCF7F', // soft green
        'success-50': '#F0FDF4', // very light green
        'success-100': '#DCFCE7', // light green
        'success-200': '#BBF7D0', // lighter green
        'success-300': '#86EFAC', // medium light green
        'success-400': '#4ADE80', // medium green
        'success-500': '#6BCF7F', // success green
        'success-600': '#16A34A', // darker green
        'success-700': '#15803D', // dark green
        'success-800': '#166534', // darker green
        'success-900': '#14532D', // darkest green
        'success-foreground': '#FFFFFF', // white

        'warning': '#FFB366', // gentle orange
        'warning-50': '#FFFBEB', // very light orange
        'warning-100': '#FEF3C7', // light orange
        'warning-200': '#FDE68A', // lighter orange
        'warning-300': '#FCD34D', // medium light orange
        'warning-400': '#FBBF24', // medium orange
        'warning-500': '#FFB366', // warning orange
        'warning-600': '#D97706', // darker orange
        'warning-700': '#B45309', // dark orange
        'warning-800': '#92400E', // darker orange
        'warning-900': '#78350F', // darkest orange
        'warning-foreground': '#FFFFFF', // white

        'error': '#FF8A9B', // soft coral
        'error-50': '#FEF2F2', // very light coral
        'error-100': '#FEE2E2', // light coral
        'error-200': '#FECACA', // lighter coral
        'error-300': '#FCA5A5', // medium light coral
        'error-400': '#F87171', // medium coral
        'error-500': '#FF8A9B', // error coral
        'error-600': '#DC2626', // darker coral
        'error-700': '#B91C1C', // dark coral
        'error-800': '#991B1B', // darker coral
        'error-900': '#7F1D1D', // darkest coral
        'error-foreground': '#FFFFFF', // white

        // Destructive (alias for error)
        'destructive': '#FF8A9B', // soft coral
        'destructive-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#F8F6FB', // surface color for minimal borders
        'input': '#F8F6FB', // surface color for inputs
        'ring': '#8B7FD6', // primary lavender for focus rings
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'caption': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      borderRadius: {
        'xs': '0.25rem', // 4px for inputs
        'sm': '0.375rem', // 6px for buttons
        'DEFAULT': '0.5rem', // 8px for cards
        'md': '0.5rem', // 8px for cards
        'lg': '0.75rem', // 12px
        'xl': '1rem', // 16px
        '2xl': '1.5rem', // 24px
        '3xl': '2rem', // 32px
      },
      boxShadow: {
        'therapeutic-sm': '0 1px 3px rgba(139, 127, 214, 0.1), 0 1px 2px rgba(139, 127, 214, 0.06)',
        'therapeutic-md': '0 1px 3px rgba(139, 127, 214, 0.1), 0 4px 12px rgba(139, 127, 214, 0.05)',
        'therapeutic-lg': '0 4px 6px rgba(139, 127, 214, 0.07), 0 10px 25px rgba(139, 127, 214, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-in': 'slideIn 300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 150ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        'therapeutic': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        'therapeutic': '8px',
      },
      ringWidth: {
        '3': '3px',
      },
      ringOffsetWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}