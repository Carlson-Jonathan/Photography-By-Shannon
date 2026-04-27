import type { Theme } from '@mui/material/styles';

export const page = {
    width: '100%',
    minHeight: 'calc(100vh - 14.25rem)',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const title = {
    color: '#999999',
    fontSize: '2rem',
    fontWeight: '600',
    textAlign: 'center',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const container = (theme: Theme) => ({
    width: '100%',
    margin: '0 auto',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    backgroundColor: '#FFFFFF',

    '& .MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#AAFFFF',
            borderWidth: '2px',
        },
        
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#88DDDD',
        },
    },

    [theme.breakpoints.down('sm')]: {
        borderRadius: '0',
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const labels = {
    '& .MuiInputLabel-root': {
        color: '#999999',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#AADDDD',
        fontWeight: '900',
    },
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const button = {
    backgroundColor: '#999999',
    alignSelf: 'center',
    width: '200px',
    fontSize: '1rem',
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const successAlert = {
    color: '#559955',
};
