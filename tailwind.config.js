module.exports = {
  "content": [
    "./**/*.liquid",
    "./**/*.js"
  ],
  "theme": {
    "container": {
      "center": true,
      "padding": "16px",
      "screens": {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      }
    },
    "extend": {
       animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      "colors": {
        "primary": "#FFC800",
        "black": "#000000",
        "gray-900": "#1A1A1A",
        "gray-700": "#333333",
        "gray-100": "#F5F5F5",
        "white": "#FFFFFF",
        "accent": "#D4AF37",
        "success": "#00D26A",
        "error": "#FF3B3B"
      },
      "spacing": {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "32px",
        "2xl": "48px",
        "section": "80px"
      },
      "fontSize": {
        "xs": "12px",
        "sm": "14px",
        "base": "16px",
        "lg": "20px",
        "xl": "24px",
        "2xl": "32px",
        "3xl": "40px"
      },
      "fontFamily": {
        "heading": [
          "'Inter', sans-serif"
        ],
        "body": [
          "'Inter', sans-serif"
        ]
      },
      "screens": {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      }
    }
  },
  "plugins": []
}