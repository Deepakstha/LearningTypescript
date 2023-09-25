"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import "@/types";

const Hero = () => {
  const handelScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          sint quod fugiat dolorem, nihil provident quaerat debitis enim
          quisquam non eveniet consequuntur libero similique, saepe inventore
          soluta asperiores quam? Ipsa.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles=" bg-primary-blue text-white rounded-full mt-10"
          handelClick={handelScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill alt="hero" className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
