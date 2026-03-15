
"use client";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e) => {
    // Prevent toggling play if click originated from mute button
    if (e.target.closest('button.mute-btn')) return;

    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="w-full h-full group cursor-pointer relative" onClick={togglePlay}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className={cn(
          "w-10 h-10 xl:w-16 xl:h-16 flex items-center justify-center rounded-full absolute z-1 inset-0 m-auto transition-all duration-300 pointer-events-none",
          isPlaying
            ? "opacity-0 group-hover:opacity-100 bg-black/40 text-white scale-90 group-hover:scale-100"
            : "opacity-100 bg-[#06B5B9] text-white scale-100"
        )}
      >
        {isPlaying ? (
          <Pause className="size-4 xl:size-7" fill="currentColor" />
        ) : (
          <Play className="size-4 xl:size-7 ml-1" fill="currentColor" />
        )}
      </div>

      <button
        type="button"
        onClick={toggleMute}
        className="mute-btn absolute bottom-3 right-3 lg:bottom-4 lg:right-4 z-10 w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors pointer-events-auto"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="size-3 lg:size-5" />
        ) : (
          <Volume2 className="size-3 lg:size-5" />
        )}
      </button>
    </div>
  );
};

export default function EventsPortfolio({ data }) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      direction: "ltr",
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );
  return (
    <section id="portfolio" className="w-full h-auto bg-white block py-10 xl:py-[100px_50px] 2xl:py-[120px_60px] 3xl:py-[140px_70px]">
      <div className="container">
        <div className="w-full max-w-[576px] xl:max-w-[820px] 2xl:max-w-[998px] 3xl:w-[1240px] mx-auto">
          <Heading
            as="h2"
            size="h1"
            className="sm:text-center text-[#06B5B9] mb-0.5 lg:mb-1 2xl:mb-2 3xl:mb-3"
          >
            {parse(data?.title)}
          </Heading>
          <Text
            as="div"
            size="p1"
            className="sm:text-center text-black mb-3 sm:mb-4 xl:mb-8 2xl:mb-9 3xl:mb-12"
          >
            {parse(data?.description)}
          </Text>
        </div>

        <div
          ref={emblaRef}
          className="w-full max-w-full overflow-hidden"
          data-cursor="carousel"
        >
          <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-4 2xl:-mx-5 3xl:-mx-7 [&>*]:p-2 lg:[&>*]:p-4 2xl:[&>*]:p-5 3xl:[&>*]:p-7">

            {data?.items?.map((item, index) => (
              <div
                key={"industry-exposure" + item?.id}
                className={cn(
                  "flex-[0_0_180px] sm:flex-[0_0_200px] lg:flex-[0_0_276px] 2xl:flex-[0_0_340px] 3xl:flex-[0_0_400px] min-w-0 select-none",
                )}
              >
                <div className="w-full h-full transition-all duration-500 ease-in-out">
                  <div className="w-full aspect-27/48 overflow-hidden border border-gray-100 relative z-0 mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7">
                    {item?.media?.type === "video" ? (
                      <VideoPlayer src={item?.media?.url} />
                    ) : (
                      <picture>
                        <Image
                          src={item?.media?.url}
                          alt={item?.media?.alt}
                          width={270}
                          height={480}
                          className="w-full h-full object-cover"
                        />
                      </picture>
                    )}
                  </div>


                  <Text
                    as="h3"
                    size="p2"
                    className="font-normal text-black"
                  >
                    {parse(item?.title)}
                  </Text>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section >
  );
}