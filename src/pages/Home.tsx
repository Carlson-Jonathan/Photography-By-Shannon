import * as styles from '@styles/Home';
import { Box } from '@mui/material';
import { getGallery } from '@/ApiUtilities';
import { useEffect, useState } from 'react';
import { GalleryError, GalleryLoading } from '@/components';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Hooks
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const [slides, setSlides] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>('');
  const [loading, setLoading] = useState(true);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Side Effects
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  useEffect(() => {
    getGallery('homePage')
    .then((res) => {
      setSlides(res.images ?? []);
    })
    .catch((err) => {
      console.error(err);
      
      setErrorMessage(
        err?.message ||
        err?.response?.data?.detail ||
        "Unknown error occurred while loading gallery"
      );
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <GalleryLoading />
    );
  }

  if (errorMessage || slides.length === 0) {
    return (
      <GalleryError errorMessage={errorMessage ?? "No images returned"} />
    );
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Component Return
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <Box sx={styles.container}>

      <Swiper
        modules={[ Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        speed={1200}
        grabCursor={true}
        style={{ zIndex: 0 }}
        pagination={{ clickable: true }}
        loop
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              sx={styles.image}
              src={`${import.meta.env.VITE_API_URL}${src}`}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </Box>
  );
};

export default Home;
