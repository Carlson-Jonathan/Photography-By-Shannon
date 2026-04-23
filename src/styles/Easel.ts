import type { Theme } from '@mui/material/styles';

export const container = (theme: Theme) => ({
    width: '80%',
    height: '65%',
    backgroundColor: 'blue',
    color: 'white',

    [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: '70%',
    },

    [theme.breakpoints.up('md')]: {
    },

    '& .fillerText': {
        textAlign: 'center',
        fontSize: '3rem'
    },
});