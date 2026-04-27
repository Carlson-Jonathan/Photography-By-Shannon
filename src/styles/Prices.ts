export const page = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    width: '100%',
    minHeight: 'calc(100vh - 14.25rem)',
    maxWidth: '68rem',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const boxPair = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    width: '24rem',
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const session = {
    textAlign: 'center',

    '& .MuiTypography-root': { 
        fontSize: '1rem',
        
        '&.price': {
            fontSize: '2rem',
            fontWeight: '600',
            margin: '0.75rem 0',
        },
    },
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const prints = {
    width: '100%',
    padding: '1rem 3rem',

    '& .MuiTypography-root': {
        fontSize: '1.25rem',
        fontWeight: '300',
    },

    '& .lineItem':{
        display: 'flex',
        justifyContent: 'space-between',
    },
};
