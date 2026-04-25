export const container = {
    width: '100%',
    maxWidth: '68rem',
    maxHeight: '80vh',

    '& .swiper': {
        height: '100%',
    },

    '& .swiper-slide': {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center', // Keeps images original size and centers them horizontally.
    },
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const image = {
    maxWidth: '100%',
    maxHeight: '78vh',
    objectFit: 'cover',
};