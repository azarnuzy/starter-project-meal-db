'use client';

import React, { FC, useEffect, useState } from 'react';
import { Header } from './Header';
import Link from 'next/link';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import Image from 'next/image';
import { meals } from '../../utils/recipesData';

export const LandingPageModules: FC = () => {
  const data = meals.filter((item) => item.strMeal[0].toLowerCase() === 'e');

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const getSlidesPerView = () => {
    if (windowSize.innerWidth > 1280) {
      return 6;
    } else if (windowSize.innerWidth > 1024) {
      return 5;
    } else if (windowSize.innerWidth > 768) {
      return 4;
    } else {
      return 3;
    }
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    if (typeof window !== 'undefined') {
      try {
        window.addEventListener('resize', handleWindowResize);

        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-between my-3">
        <h3 className="flex items-center font-semibold">All Meals</h3>
        <Link
          href="/meals"
          className="py-1 px-4 bg-primary text-[#97655a] rounded-xl hover:opacity-90"
        >
          View All
        </Link>
      </div>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Navigation]}
        spaceBetween={10}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={getSlidesPerView()}
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              key={item.strMeal}
              className="p-2 flex justify-center items-center rounded-md w-fit text-sm  font-bold text-[#5e3a32] flex-col h-fit hover:opacity-90 cursor-pointer text-center"
            >
              <div>
                <Link href={`/meals/${item.idMeal}`}>
                  <Image
                    width={200}
                    height={200}
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="rounded-full p-2"
                  />

                  {item.strMeal}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
