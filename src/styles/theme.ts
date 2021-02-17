import {createMuiTheme} from '@material-ui/core/styles';

const RED = '#F43C48';
const BLUE = '#1A3C4A';
const PURPLE = '#311B50';
const ORANGE = '#5A2922';
const GREEN = '#17B679';
const LIGHT_GRAY = '#8A8B8D';
const DARK_GRAY = '#201F29';
const WHITE = '#FFFFFF';
const BLACK = '#15161B';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: LIGHT_GRAY,
    },
    primary: {
      main: LIGHT_GRAY,
    },
    secondary: {
      main: DARK_GRAY,
    },
    error: {
      main: RED,
    },
    background: {
      default: BLACK,
    },
  },
});

export default theme;
