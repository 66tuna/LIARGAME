"use client";

import { FC, useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

interface SlideChangeType {
  activeIndex: number;
}

const PlayerSettings = () => {
  const [maxNum, setMaxNum] = useState<number>(15);
  const maxPlayerArr = Array.from({ length: maxNum }, (_, idx) => idx + 3);
  const maxMafiaArr = Array.from({ length: maxNum }, (_, idx) => idx + 1);
  const [playerNum, setPlayerNum] = useState<number>(0);
  const [mafiaNum, setMafiaNum] = useState<number>(0);

  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef<any>(null);

  const handleSwiper1SlideChange = (swiper: any) => {
    setPlayerNum(swiper.activeIndex);
  };

  const handleSwiper2SlideChange = (swiper: any) => {
    setMafiaNum(swiper.activeIndex);
  };

  useEffect(() => {
    // swiper1Ref.current, swiper2Ref.current를 사용하여 Swiper 인스턴스에 접근할 수 있습니다.
    if (swiper1Ref.current && swiper2Ref.current) {
      swiper1Ref.current.swiper.slideTo(mafiaNum);
      swiper2Ref.current.swiper.slideTo(playerNum);
    }
  }, [playerNum, mafiaNum]);

  return (
    <div className="flex">
      <div className="w-1/2">
        <h2>플레이어</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          ref={swiper1Ref}
          onSlideChange={handleSwiper1SlideChange}
          initialSlide={playerNum}
        >
          {maxPlayerArr &&
            maxPlayerArr.map((item: number) => (
              <SwiperSlide key={item}>{item}</SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="w-1/2">
        <h2>라이어</h2>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          ref={swiper2Ref}
          onSlideChange={handleSwiper2SlideChange}
          initialSlide={mafiaNum}
        >
          {maxMafiaArr &&
            maxMafiaArr.map((item: number) => (
              <SwiperSlide key={item}>{item}</SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PlayerSettings;
