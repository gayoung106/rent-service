"use client";
import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          quickly and easily ! 자동차를 렌트하거나 검색해보세요.
        </h1>
        <p className="hero__subtitle">
          쉽고, 빠르게 ! 자동차 렌트 경험의 기회를 드립니다.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
