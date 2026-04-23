import type { Theme } from '@mui/material/styles';

export const page = (theme: Theme) => ({
    backgroundColor: '#EEEEEE',
    height: '100vh',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'center',
    
    [theme.breakpoints.down('sm')]: {
        padding: '0',
    },

    [theme.breakpoints.down('md')]: {
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const siteName = (theme: Theme) => ({
    color: '#222222',
    fontSize: '2.5rem',
    fontWeight: '900',
    textAlign: 'center', 

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        paddingTop: '2rem',
    },
});


