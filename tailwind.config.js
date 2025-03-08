/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ae_background_color: "rgba(var(--ae_background_color))",
        ae_logo_color: "rgba(var(--ae_logo_color))",
        ae_ring_color: "rgba(var(--ae_ring_color))",
        ae_navbar_modal: "rgba(var(--ae_navbar_modal))",
        ae_hover_modal: "rgba(var(--ae_hover_modal))",
        ae_quote_bg_color: "rgba(var(--ae_quote_bg_color))",
        ae_quote_ring: "rgba(var(--ae_quote_ring))",
        ae_quote_shadow: "rgba(var(--ae_quote_shadow))",
        ae_keypoints_bg_color: "rgba(var(--ae_keypoints_bg_color))",
        ae_titles_text_color: "rgba(var(--ae_titles_text_color))",
        ae_logo_tech_stack_color: "rgba(var(--ae_logo_tech_stack_color))",
        ae_contact_label: "rgba(var(--ae_contact_label))",
      },
      animation: {
        bounceOnce: 'bounceOnce 0.4s ease forwards',
      },
      keyframes: {
        bounceOnce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
        },
      },
    },
  },
  plugins: [],
}

