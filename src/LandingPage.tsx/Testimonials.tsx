import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/Data/Data";


const Testimonials = () => {
  return (
    <section className=" py-20 px-4">
      <div className="text-center mb-12">
        <div className="text-4xl font-semibold text-center">
            What <span className="text-berry-900">Techies</span> say about us
        </div>  
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        spaceBetween={24}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-4"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <Card className="bg-berry-100 text-white border-none rounded-4xl">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border border-berry-600">
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback className="bg-berry-800 text-white">
                      {t.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-lg text-berry-900">{t.name}</h4>
                    <p className="text-sm text-berry-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">“{t.quote}”</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
