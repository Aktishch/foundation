const plugin = require('tailwindcss/plugin')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

module.exports = plugin(

  ({ addComponents, theme }) => {

    addComponents({

      '.input': {
        flexGrow: 1,
        width: '100%',
        height: theme('size.md'),
        backgroundColor: theme('colors.white.DEFAULT'),
        padding: '12px 16px',
        border: `1px solid ${formatColor({ mode: 'rgba', color: parseColor(theme('colors.gray.DEFAULT')).color, alpha: 0.7 })}`,
        transition: '0.2s ease',
        userSelect: 'initial',

        '&-cover': {
          display: 'flex',
          width: '100%'
        },

        '&--error': {
          borderColor: theme('colors.error.DEFAULT')
        },

        '&:first-of-type': {
          borderTopLeftRadius: '12px',
          borderBottomLeftRadius: '12px'
        },

        '&:last-of-type': {
          borderTopRightRadius: '12px',
          borderBottomRightRadius: '12px'
        },

        '&:not(&--error):focus': {
          borderColor: theme('colors.gray.DEFAULT')
        },

        '&::disabled': {
          pointerEvents: 'none',
          opacity: 0.5
        }
      }

    })

  }

)