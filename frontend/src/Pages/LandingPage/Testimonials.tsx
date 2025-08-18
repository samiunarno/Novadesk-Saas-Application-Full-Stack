import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { dummyTestimonialData } from "../../assets/assets";

import "swiper/css";
import "swiper/css/pagination";
import { CiStar } from "react-icons/ci";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

// import { FaStar, FaRegStar } from "react-icons/fa";

interface Slide {
  id: number;
  title: string;
  content: string;
  image: string;
  alt: string;
  rating: number;
}

const Testimonials = () => {
  return (
    <div className="px-3 md:px-20 xl:px-32 mx-auto">
      <div className="px-3 md:px-20 xl:px-32 ">
        <h2 className="mt-6 text-center text-4xl font-bold text-[#3B3B3B]">
          Loved by Creators
        </h2>
        <p className="mt-2 mb-4 text-lg text-center text-[#858585]">
          Don't just take our word for it. Here's what our users are saying.
        </p>
      </div>

      <div className="swiper mb-12 mt-6">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {dummyTestimonialData.map((slide: Slide, index: number) => (
            <SwiperSlide
              key={index}
              className="border border-black bg-[#f9f9f9] py-16 px-6 rounded-xl shadow"
            >
              <div className="flex justify-center mb-4">
                {/* <Rating
                  initialRating={slide.rating}
                  readonly
                  emptySymbol={<CiStar className="text-yellow-400 text-xl" />}
                  fullSymbol={<CiStar className="text-yellow-400 text-xl" />}
                /> */}
                {
                  slide.rating == 5  ? <>
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                    
                  </> : <>
                      
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                    <FaStar className="text-[#5044E5] text-xl" />
                  </>
                }
              </div>

              <p className="font-semibold text-lg mb-2 text-center">
                {slide.title}
              </p>
              <p className="text-sm text-gray-600 text-center mb-4">
                {slide.content}
              </p>
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
