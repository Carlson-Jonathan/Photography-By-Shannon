import type { Theme } from '@mui/material/styles';

export const navContainer = {
    maxWidth: '68rem',
    backgroundColor: '#FFFFFF',
    height: '2rem',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menuButton = {
    margin: 'auto',
    color: '#999999',
    height: '2rem',
    width: '100%',
    borderRadius: '0',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menu = (theme: Theme) => ({
    '& .MuiPaper-root': {
        width: '100vw',
        maxWidth: '100vw',
        
        // For some reason the drawer anchors differently for small and medium views.
        // This corrects that.
        [theme.breakpoints.down('md')]: {
            marginLeft: '1rem',
        },
        
        [theme.breakpoints.down('sm')]: {
            marginLeft: '-1rem',
        },
    },
    
    '& .MuiMenu-list': {
        padding: 0,
    },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const menuItem = {
    justifyContent: 'center',
    fontSize: '1.5rem',
    backgroundColor: '#E5E5E5',
    padding: '1rem 0',
    border: 'solid #EEEEEE 1px',
    color: '#666666',
};
