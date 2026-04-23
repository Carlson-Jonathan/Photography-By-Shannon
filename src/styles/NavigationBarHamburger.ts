import type { Theme } from '@mui/material/styles';

export const navContainer = (theme: Theme) => ({
    width: '95%',
    maxWidth: '68rem',
    backgroundColor: '#FFFFFF',
    height: '2rem',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
        width: '95%'
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menuButton = {
    marginLeft: 'auto',
    color: '#999999',
    height: '2rem',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menu = {
    '& .MuiPaper-root': {
        width: '100vw',
        maxWidth: '100vw',
        marginLeft: '1rem',
    },
    
    '& .MuiMenu-list': {
        padding: 0,
    },
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menuItem = {
    justifyContent: 'center',
    fontSize: '1.5rem',
    backgroundColor: '#E5E5E5',
    padding: '1rem 0',
    border: 'solid #EEEEEE 1px',
    color: '#666666',
};
