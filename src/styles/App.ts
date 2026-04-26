import type { Theme } from '@mui/material/styles';

export const page = (theme: Theme) => ({
    backgroundColor: '#EEEEEE',
    height: '100%',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    [theme.breakpoints.down('sm')]: {
        padding: '0',
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const siteName = (theme: Theme) => ({
    color: '#999999',
    fontSize: '2.5rem',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: '1.5rem',
    
    [theme.breakpoints.down('md')]: {
        fontSize: '1.75rem',
    },

    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
        paddingTop: '2rem',
    },
});


