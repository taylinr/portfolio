module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#333333'
    },
    fontFamily: {
      'serif': ['Yeseva One', 'serif'],
      'sans': ['Josefin Sans', 'sans-serif'],
      'sans-bold': ['Josefin Sans Bold', 'sans-serif'],
      'sans-italic': ['Josefin Sans Italic', 'sans-serif'],
      'sans-bold-italic': ['Josefin Sans Bold Italic', 'sans-serif'],
    },
    fontSize: {
      xl: ['86px', '60px'],
      h1: ['42px', '50px'],
      h2: ['32px', '44px'],
      h3: ['22px', '30px'],
      h4: ['18px', '24px'],
      body: ['18px', '28px'],
      md: ['16px', '20px'],
      sm: ['14px', '20px'],
      xs: ['11px', '16px'],
      label: ['16px', '16px'],
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      hd: '1920px',
      '4k': '3000px',
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '916px',
        xl: '1472px',
      },
    },
    extend: {
      backgroundImage: {
        'tv-tower': "url('../assets/img/pexels-felix-mittermeier-532833.jpg')",
      }
    },
  },
  plugins: [],
}
