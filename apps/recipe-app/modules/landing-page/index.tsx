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
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width > 1280) {
        setScreenWidth(6);
      } else if (width > 1024) {
        setScreenWidth(5);
      } else if (width > 768) {
        setScreenWidth(6);
      } else if (width > 640) {
        setScreenWidth(4);
      } else {
        setScreenWidth(3);
      }
    };

    // Inisialisasi lebar layar awal
    handleResize();

    // Tambahkan event listener untuk memantau perubahan lebar layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen tidak lagi digunakan
    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
        slidesPerView={screenWidth}
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
