'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heading, Text } from "@/components/utils/typography";
import parse from "html-react-parser";
import Image from "next/image";

export default function EventsInfo({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/download-brochure', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          eventName: data?.title || 'Stylepreneur Event'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to request brochure');
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full h-auto bg-[#121212] block py-8 sm:py-10 md:py-16 lg:py-24 xl:py-32 2xl:py-36 3xl:py-44">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full mb-[60px] xl:mb-[180px] 2xl:mb-[200px] 3xl:mb-[240px]">
            <Heading
              as="h2"
              size="h3"
              className="font-extralight font-sora text-[#D6A96F] [&_span]:text-[#C58330] mb-2 sm:mb-0"
            >
              {parse(data?.description)}
            </Heading>
          </div>

          <div className="w-full sm:w-7/12 ">
            <div className="w-full">
              <div
                className="text-[68px] sm:text-[100px] xl:text-[128px] 2xl:text-[150px] 3xl:text-[192px] font-normal uppercase font-big-shoulders -tracking-[0.25rem] scale-y-110 text-white mb-2 xl:mb-4 3xl:mb-6"
              >
                {parse(data?.date)}
              </div>
              <div className="w-full pl-4 xl:pl-6 2xl:pl-6 3xl:pl-6 border-l border-white mx-1 xl:mx-2">

                {data?.location &&
                  <EventInfoItem icon="/images/icon-events-loc.png" label={data?.location} />}

                {data?.dateInfo && <EventInfoItem icon="/images/icon-events-cal.png" label={data?.dateInfo} />}

                {data?.duration && <EventInfoItem icon="/images/icon-events-time.png" label={data?.duration} />}

              </div>
            </div>
          </div>

          <div className="w-full sm:w-5/12">
            <div className="w-full">

              <Text
                as="div"
                size="p1"
                className="text-white my-2 [&_p]:mb-4 md:[&_p]:mb-5 lg:[&_p]:mb-6 xl:[&_p]:mb-6 2xl:[&_p]:mb-7 3xl:[&_p]:mb-8 [&_span]:text-[#AEAFAF]"
              >
                {parse(data?.longDescription)}
              </Text>

              <Heading
                as="h2"
                size="h3"
                className="font-normal font-sora text-[#99E1E2] mb-2 xl:mb-4 2xl:mb-5"
              >
                {parse(data?.price)}
              </Heading>

              <Button
                size="lg"
                variant={"default"}
                className="max-w-[220px] xl:max-w-[268px] 2xl:max-w-[320px] 3xl:max-w-[400px]"
                onClick={() => setIsModalOpen(true)}
              >
                {data?.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-md w-full relative border border-gray-700">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <h3 className="text-2xl font-sora text-[#D6A96F] mb-4">Get the Brochure</h3>
            {isSuccess ? (
              <div className="text-center py-6">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <p className="text-white text-lg font-medium">Thank you!</p>
                <p className="text-gray-400 mt-2">The brochure has been sent to your email.</p>
                <Button
                  className="mt-6 w-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <p className="text-gray-300 mb-2">Enter your email address to download the exclusive event brochure.</p>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3 rounded-lg bg-[#2A2A2A] text-white border border-gray-600 focus:outline-none focus:border-[#D6A96F] w-full"
                />

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Brochure'}
                </Button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function EventInfoItem({ icon, label }) {
  return (
    <Heading
      as="div"
      size="h5"
      className="font-sora font-normal text-white flex gap-x-2 xl:gap-x-5 mb-4 xl:mb-6"
    >
      <Image
        src={icon}
        alt={label}
        width={30}
        height={30}
        className="w-3 xl:w-4.5 2xl:w-6 3xl:w-7 object-contain"
      />
      {parse(label)}
    </Heading>
  )
}