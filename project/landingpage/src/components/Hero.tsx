// src/components/Hero.tsx
"use client";

import React, {
  ElementType,
  useEffect,
  useRef,
  useState,
  createElement,
} from "react";
import { ArrowRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CountUp from "./CountUp";
import { useWalkthrough } from "../context/Walkthrough";
import { gsap } from "gsap";

/* ===== Typing Text Component ===== */
interface TextTypeProps {
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  textColors?: string[]; // kept for API compatibility
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
}

const TextType = ({
  text,
  as: Component = "div",
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  const textArray = Array.isArray(text) ? text : [text];

  const getRandomSpeed = () => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) return;

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText((prev) => prev + processedText[currentCharIndex]);
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          if (currentTextIndex === textArray.length - 1 && !loop) return;
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping &&
    (currentCharIndex < textArray[currentTextIndex].length || isDeleting);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `inline-block whitespace-pre-wrap tracking-tight ${className}`,
      ...props,
    },
    <span className="inline bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`ml-1 inline-block opacity-100 ${shouldHideCursor ? "hidden" : ""} ${cursorClassName}`}
      >
        {cursorCharacter}
      </span>
    )
  );
};
/* ===== End Typing Text Component ===== */

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { open } = useWalkthrough();

  return (
    <section id="hero" className="relative min-h-[78vh] flex items-center justify-center px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_20%,rgba(0,0,0,0.35),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl text-center">
        <div className="inline-block rounded-2xl bg-black/20 backdrop-blur-sm px-5 py-2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            <span>Custom Websites </span>
            <TextType
              as="span"
              text={[
                "for Small Businesses",
                "for Electricians",
                "for Restaurants",
                "for Freelancers",
                "Specifically Built4You",
              ]}
              typingSpeed={45}
              deletingSpeed={30}
              pauseDuration={3000}
              initialDelay={200}
              loop={false}
              startOnVisible
              variableSpeed={{ min: 35, max: 65 }}
              showCursor={false}
            />
          </h1>
        </div>

        <p className="mt-5 text-lg md:text-xl text-slate-200/90 max-w-3xl mx-auto">
          Professional, responsive websites that grow your business. No templates. No compromises. Built for results.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-500 transition"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </button>

          <button
            onClick={open}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white hover:bg-white/15 transition backdrop-blur-sm"
          >
            <Info className="h-5 w-5" />
            Learn More
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4">
            <div className="text-2xl font-bold text-emerald-300">
              <CountUp to={50} duration={1.2} />+
            </div>
            <div className="text-slate-200/80 text-sm">Projects Delivered</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4">
            <div className="text-2xl font-bold text-emerald-300">
              <CountUp to={100} duration={1.2} delay={0.15} />%
            </div>
            <div className="text-slate-200/80 text-sm">Client Satisfaction</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-5 py-4">
            <div className="text-2xl font-bold text-emerald-300">
              <CountUp to={7} duration={1.2} delay={0.3} /> Days
            </div>
            <div className="text-slate-200/80 text-sm">Average Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
