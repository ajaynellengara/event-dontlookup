"use client";

import { useState, useRef, useEffect } from "react";
import { Heading, Text } from "@/components/utils/typography";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import parse from "html-react-parser";

const localData = {
  title: "DOWNLOAD THE CATALOGUE",
  description: "<p>Enter your E-mail ID and click download, to download the catalogue.</p>",
};

const EMAIL_DOMAINS = ["@gmail.com", "@yahoo.com", "@outlook.com", "@hotmail.com", "@icloud.com", "@aol.com", "@protonmail.com", "@mail.com"];

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function EventsCatalogue({ data = localData, eventName: propEventName }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDomains, setFilteredDomains] = useState([]);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      const typedDomain = email.slice(atIndex).toLowerCase();
      const matches = EMAIL_DOMAINS.filter(d => d.startsWith(typedDomain) && d !== typedDomain);
      setFilteredDomains(matches);
      setShowSuggestions(matches.length > 0);
    } else {
      setShowSuggestions(false);
    }
  }, [email]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target) && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectDomain = (domain) => {
    const atIndex = email.indexOf("@");
    setEmail(email.slice(0, atIndex) + domain);
    setShowSuggestions(false);
    inputRef.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setValidationError("");

    if (!email.trim()) {
      setValidationError("Please enter your email address");
      return;
    }

    if (!isValidEmail(email)) {
      setValidationError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/download-brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          eventName: propEventName || data?.title || 'Stylepreneur Event'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to request brochure');
      }

      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catalogue" className="w-full h-auto bg-linear-to-t to-[#01393b] from-[#012023] block py-[50px] xl:py-[70px] 2xl:py-[80px] 3xl:py-[100px]">
      <div className="container">
        <div className="w-full sm:max-w-[468px] xl:max-w-[600px] 2xl:max-w-[720px] 3xl:w-[900px] mx-auto">
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
            className="sm:text-center text-[#e6e6e6] mb-6 sm:mb-4 xl:mb-8 2xl:mb-9 3xl:mb-12"
          >
            {parse(data?.description)}
          </Text>
        </div>

        <div className="w-full max-w-[576px] xl:max-w-[820px] 2xl:max-w-[1000px] 3xl:w-[1240px] mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 xl:gap-x-4 2xl:gap-x-4">
            <div className="w-full min-[376px]:flex-1 relative">
              <input
                ref={inputRef}
                type="email"
                required
                placeholder="Enter your E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {
                  const atIndex = email.indexOf("@");
                  if (atIndex !== -1 && filteredDomains.length > 0) setShowSuggestions(true);
                }}
                className="px-4 py-3 rounded-lg bg-white text-black border border-[#e7e7e7] focus:outline-none focus:border-[#D6A96F] w-full h-10 xl:h-13 2xl:h-16 3xl:h-24"
                autoComplete="email"
              />

              {showSuggestions && (
                <ul
                  ref={suggestionsRef}
                  className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#e7e7e7] rounded-lg shadow-lg z-10 overflow-hidden"
                >
                  {filteredDomains.map((domain) => (
                    <li
                      key={domain}
                      onClick={() => handleSelectDomain(domain)}
                      className="px-4 py-2 cursor-pointer text-black hover:bg-[#06B5B9] hover:text-white transition-colors text-sm"
                    >
                      {email.slice(0, email.indexOf("@"))}{domain}
                    </li>
                  ))}
                </ul>
              )}

              {validationError && (
                <p className="text-red-400 text-sm mt-1">{validationError}</p>
              )}
              {error && (
                <p className="text-red-400 text-sm mt-1">{error}</p>
              )}
              {isSuccess && (
                <p className="text-green-400 text-sm mt-1">Brochure sent! Check your email.</p>
              )}
            </div>

            <Button
              size="lg"
              variant="default"
              type="submit"
              disabled={isSubmitting}
              className="w-full max-w-[150px] xl:max-w-[178px] 2xl:max-w-[220px] 3xl:max-w-[268px] h-10 xl:h-13 2xl:h-16 3xl:h-24"
            >
              <Download />
              {isSubmitting ? "Sending..." : "Send Brochure"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}