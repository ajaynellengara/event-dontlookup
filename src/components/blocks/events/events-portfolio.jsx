
"use client";
import { Heading, Text } from "@/components/utils/typography";

import parse from "html-react-parser";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const VideoPlayer = ({ src, index, isActive, onVideoEnd, onVideoClick }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!videoRef.current) return;

    // Play or pause automatically based on the global isActive state
    if (isActive) {
      // Small timeout is sometimes needed in React 18 strict mode for reliable video play()
      setTimeout(() => {
        videoRef.current?.play().catch(e => console.log("Can't auto-play", e));
      }, 50);
    } else {
      videoRef.current.pause();
      // Reset video to start if you want it to play from beginning when its turn comes around again
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const togglePlay = (e) => {
    // Prevent toggling play if click originated from mute button
    if (e.target.closest('button.mute-btn')) return;

    // Trigger global centralized selection
    onVideoClick(index);
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
        muted={isMuted}
        playsInline
        onEnded={onVideoEnd}
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className={cn(
          "w-10 h-10 xl:w-16 xl:h-16 flex items-center justify-center rounded-full absolute z-1 inset-0 m-auto transition-all duration-300 pointer-events-none",
          isActive
            ? "opacity-0 group-hover:opacity-100 bg-black/40 text-white scale-90 group-hover:scale-100"
            : "opacity-100 bg-[#06B5B9] text-white scale-100"
        )}
      >
        {isActive ? (
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
  // Track the global active video
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      direction: "ltr",
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    // We can conditionally disable the autoplay if we want, but letting Embla scroll while the video plays is fine
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  // Pre-calculate just the video items in the array for the loop sequence logic
  // We need to know exactly how many items are type === "video".
  // Let's store a cumulative index of ONLY the videos to map their progression
  const totalVideos = data?.items?.filter(item => item?.media?.type === "video").length || 0;

  // Track the logical video index when mapping over ALL mixed items
  let currentVideoCounter = 0;
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

            {data?.items?.map((item, index) => {
              // Only increment the video logical counter for valid video types
              const isVideo = item?.media?.type === "video";
              const myVideoIndex = isVideo ? currentVideoCounter++ : -1;

              return (
                <div
                  key={"industry-exposure" + item?.id}
                  className={cn(
                    "flex-[0_0_180px] sm:flex-[0_0_200px] lg:flex-[0_0_320px] 2xl:flex-[0_0_340px] 3xl:flex-[0_0_400px] min-w-0 select-none",
                  )}
                >
                  <div className="w-full h-full transition-all duration-500 ease-in-out">
                    <div className="w-full aspect-27/48 overflow-hidden border border-gray-100 relative z-0 mb-4 xl:mb-5 2xl:mb-6 3xl:mb-7">
                      {isVideo ? (
                        <VideoPlayer
                          src={item?.media?.url}
                          index={myVideoIndex}
                          isActive={activeVideoIndex === myVideoIndex}
                          onVideoClick={(clickedIndex) => {
                            // Clicking toggles play. If it was already active, pause it (by setting to -1), else activate it
                            setActiveVideoIndex(activeVideoIndex === clickedIndex ? -1 : clickedIndex);
                          }}
                          onVideoEnd={() => {
                            // On completion, move to the next video sequentially, wrapping back to 0
                            setActiveVideoIndex((prev) => (prev + 1) % totalVideos);
                          }}
                        />
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
              );
            })}

          </div>
        </div>

      </div>
    </section >
  );
}