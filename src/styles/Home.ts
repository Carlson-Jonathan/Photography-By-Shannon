import type { Theme } from '@mui/material/styles';

export const container = (theme: Theme) => ({
    width: '100%',
    maxWidth: '68rem',
    
    [theme.breakpoints.down('md')]: {
        width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },

    '& .fillerText': {
        textAlign: 'center',
        fontSize: '3rem'
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const image = {
    objectFit: 'cover',
    width: '100%',
};