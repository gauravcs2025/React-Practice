import React, { useRef } from "react";

// --- ARROW ICON COMPONENTS (These are still defined as inline SVGs) ---
const ChevronLeftIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);

// --- SKILLS DATA (Updated with image URLs) ---
const skills = [
  {
    name: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg"
        alt="React Logo"
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg"
        alt="Next.js Logo"
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/nodedotjs.svg"
        alt="Node.js Logo"
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg"
        alt="MongoDB Logo"
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/tailwindcss.svg"
        alt="Tailwind CSS Logo"
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "Adobe Analytics",
    icon: (
      <img
        src="https://www.svgrepo.com/show/303531/adobe-analytics-logo.svg"
        alt="Adobe Analytics Logo"
        className="h-12 w-12"
      />
    ),
  },
  // Add more skills...
  {
    name: "JavaScript",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg"
        alt="JavaScript Logo"
        className="h-12 w-12"
      />
    ),
  },
  {
    name: "HTML5",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons/icons/html5.svg"
        alt="HTML5 Logo"
        className="h-12 w-12"
      />
    ),
  },
];

// --- MAIN CAROUSEL COMPONENT ---
export default function SkillsCarousel() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (scrollContainerRef.current) {
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
          Technologies & Skills
        </h2>
        <div className="relative flex items-center group">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 p-2 bg-white/80 rounded-full shadow-md -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-6 w-6 text-slate-700" />
          </button>

          {/* The scrollable list of skills */}
          <div
            ref={scrollContainerRef}
            className="flex w-full space-x-8 overflow-x-auto scrollbar-hide py-4"
          >
            {skills.map((skill) => (
              <div key={skill.name} className="flex-shrink-0 text-center">
                <div className="flex items-center justify-center h-28 w-28 rounded-full bg-slate-100 border border-slate-200 transition-transform duration-300 hover:scale-105">
                  {skill.icon}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 p-2 bg-white/80 rounded-full shadow-md translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-6 w-6 text-slate-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
