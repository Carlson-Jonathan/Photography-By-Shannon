import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as styles from '@styles/Home';
import { Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {

  const imageLocation = '/src/images/slideShow';
  const images = import.meta.glob(`${imageLocation}/*.{jpg,png,jpeg}`, {
    eager: true,
    as: 'url',
  });

  const slides = Object.values(images);

  return (
    <Box sx={styles.container}>
      <Swiper
        modules={[ Autoplay, Pagination ]}
        autoplay={{delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true}}
        speed={1200}
        grabCursor={true}
        style={{zIndex: 0}}
        pagination={{ clickable: true }}
        loop>

        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <Box component="img" sx={styles.image} src={src} loading='lazy'/>
          </SwiperSlide>
        ))}

      </Swiper>
    </Box>
  );
};

export default Home;
