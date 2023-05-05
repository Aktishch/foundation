const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(

  ({ addComponents, theme }) => {

    const bg = parseColor(theme('colors.white.DEFAULT')).color
    const shadow = parseColor(theme('colors.black.DEFAULT')).color

    addComponents({

      '.card': {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundImage: `radial-gradient(336.9% 105.08% at 0% 100%, ${formatColor({ mode: 'rgba', color: bg, alpha: 0.4 })} 0%, ${formatColor({ mode: 'rgba', color: bg, alpha: 0.2 })} 100%)`,
        boxShadow: `0px 20px 40px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.1 })}`,
        borderRadius: '24px',
        border: `1px solid ${theme('colors.white.DEFAULT')}`,
        backdropFilter: 'blur(20px)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        overflow: 'hidden',

        '&-content': {
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1
        },

        '&--active:active': {
          transform: 'translateY(4px)'
        }
      },

      '@media(hover)': {
        '.card--active:hover': {
          boxShadow: `0px 20px 40px ${formatColor({ mode: 'rgba', color: shadow, alpha: 0.4 })}`
        }
      }

    })

  }

)