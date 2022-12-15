import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Heading: {
      variants: {
        'section-title': {
          textDecoration: 'underline',
          fontSize: 35,
          textUnderlineOffset: 6,
          textDecorationColor: '#2C2C2C',
          textDecorationThickness: 4,
          color: '#A0AEC0'
        },
      },
    },
  },
});

export default theme;
