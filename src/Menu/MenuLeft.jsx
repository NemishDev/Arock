import React from "react";
import Tilt from "react-parallax-tilt";

const MenuLeft = () => {
  return (
    <div className="w-2/3 py-14 px-32 relative h-full">

      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        className="relative flex items-center justify-center h-full w-full"
      >

        <img
          className="opacity-20 scale-[0.97] absolute h-full w-full object-cover object-center"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />

        <img
          className="opacity-50 scale-[0.94] absolute h-full w-full object-cover object-center"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />

        <img
          className="opacity-70 scale-[0.91] absolute h-full w-full object-cover object-center"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />

        <img
          className="opacity-50 absolute h-full w-full object-cover object-center"
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          alt=""
        />

      </Tilt>

    </div>
  );
};

export default MenuLeft;