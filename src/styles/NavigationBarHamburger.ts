import type { Theme } from '@mui/material/styles';

export const navContainer = (theme: Theme) => ({
    backgroundColor: '#1e1e1e',
    boxShadow: 'none',
    width: '80%',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menuButton = {
    marginLeft: 'auto',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menu = {
    backgroundColor: '#AAAAAAAA',
    '& .MuiMenu-list': {
      padding: 0,
    },
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menuItem = {
    minWidth: '100vw',
    justifyContent: 'center',
    fontSize: '1.5rem',
    backgroundColor: '#DDDDDD',
    padding: '1rem',
    margin: '0',
};