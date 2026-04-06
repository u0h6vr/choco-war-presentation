"use client";

import React, { useState, useEffect } from 'react';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  hasExcerpt: boolean;
  excerptText?: string;
  visual: string;
  visualState?: string;
}

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setAnimationTrigger(false); 
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setAnimationTrigger(false); 
      setCurrentSlide(prev => prev - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimationTrigger(true), 50);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide]);

  const slides: Slide[] = [
    {
      id: "intro",
      title: "Astroturfing and the Bandwagon Effect",
      subtitle: "THE CHOCOLATE WAR",
      content: "20250723 이윤호",
      hasExcerpt: false,
      visual: "none"
    },
    {
      id: "microcosm",
      title: "A Microcosm of Society",
      subtitle: "Trinity Catholic High School",
      content: "The setting of the novel is a perfect microcosm of society, where authoritarian establishment and secret violent organizations collude to suppress independent thought.",
      hasExcerpt: false,
      visual: "trinity",
      visualState: "microcosm"
    },
    {
      id: "architecture",
      title: "The Architecture of Control",
      subtitle: "The Corrupt Power",
      content: "The chocolate sale is a cover for Brother Leon's financial corruption. Without official approval, he abused his power to mass-purchase chocolates.",
      hasExcerpt: false,
      visual: "trinity",
      visualState: "architecture"
    },
    {
      id: "front_group",
      title: "Utilizing 'Front Groups'",
      subtitle: "Masking the Interests",
      content: "Leon knows authoritarian orders aren't enough. Just as corporations use seemingly independent citizen groups to mask their own interests, Leon uses the student-run Vigils to mask his.",
      hasExcerpt: false,
      visual: "trinity",
      visualState: "front_group"
    },
    {
      id: "astroturfing_origins",
      title: "Manufacturing Consent",
      subtitle: "What is Astroturfing?",
      content: "Astroturfing forges 'social proof', making it look like there is massive, voluntary grassroots support while hiding true sponsors. The term was coined in 1985 by Senator Lloyd Bentsen.",
      hasExcerpt: false,
      visual: "astroturfing"
    },
    {
      id: "sources",
      title: "The Multiple Source Effect",
      subtitle: "Action in the Novel",
      content: "Psychologists found that people are much more persuaded by multiple independent sources than by a single source. If the school knew The Vigils sold everything, they would rebel.",
      hasExcerpt: true,
      excerptText: "\"Okay, kid,\" Carter had said, flinging the money, bills and change, on the desk. \"Here's the returns. Seventy-five boxes sold--- one hundred fifty dollars. … \"Those guys worked hard selling the chocolates,\" Carter said, a silly smile on his face. \"I want to make sure they get credit.\"",
      visual: "sources"
    },
    {
      id: "corporate_ventriloquism",
      title: "Corporate Ventriloquism",
      subtitle: "Mimicking the Public",
      content: "Astroturfing thrives through 'corporate ventriloquism'—mimicking the language of the public. Archie makes selling chocolates 'the thing to do', turning an oppressive mandate into a school fad.",
      hasExcerpt: false,
      visual: "corporate_ventriloquism"
    },
    {
      id: "bandwagon",
      title: "Psychology of the Bandwagon",
      subtitle: "The Avalanche",
      content: "If Astroturfing is the deceptive spark, the Bandwagon Effect is the psychological wildfire. It is driven by Efficiency, Informational Social Influence, and Normative Social Influence.",
      hasExcerpt: true,
      excerptText: "There was no necessity for the chocolate roll call now because most of the students were bringing their returns directly to Brian Cochran in the office. But Brother Leon persisted anyway. The Goober noticed that the teacher now took a delight in the process, making a big deal of it.",
      visual: "bandwagon"
    },
    {
      id: "spiral",
      title: "The Spiral of Silence",
      subtitle: "Crushing Resistance",
      content: "This creates an 'Information Cascade'. Individuals who hold minority views self-censor out of fear of isolation. Goober wants to correct them and support Jerry, but the fear of isolation crushes him. He chooses silence.",
      hasExcerpt: false,
      visual: "spiral"
    },
    {
      id: "fake_reviews",
      title: "Fake Reviews & Scoreboards",
      subtitle: "Astroturfing in Our Reality",
      content: "We see these exact mechanisms in our digital consumer culture. 'Fake review factories' use ghost accounts to flood a product with 5-star reviews. Brother Leon’s manipulated scoreboard is happening right now on our smartphones.",
      hasExcerpt: false,
      visual: "fake_reviews"
    },
    {
      id: "algorithmic_ventriloquism",
      title: "Algorithmic Ventriloquism",
      subtitle: "The Power of Generative AI",
      content: "If a machine learning model can be engineered to write anything, it can easily be weaponized to generate ten thousand fake reviews in seconds. The 'Multiple Source Effect' is now a programmable feature automated by code.",
      hasExcerpt: false,
      visual: "algorithmic_ventriloquism"
    },
    {
      id: "conclusion",
      title: "Daring to Disturb",
      subtitle: "Conclusion",
      content: "A novel written half a century ago serves as a devastatingly accurate prophecy. Today, surrounded by manipulated ratings and powerful algorithms, we must actively slow down our judgment and question the 'social proof'.",
      hasExcerpt: false,
      visual: "conclusion"
    },
    {
      id: "questions",
      title: "Thank You",
      subtitle: "Discussion & Q&A",
      content: "Q1. In our modern digital society, we have anonymity, but we also have aggressive comment sections and cancel culture. Do you think it is easier or harder to break the 'spiral of silence' and say 'No' today compared to the analog world of Trinity High School?\n\nQ2. When manipulations are exposed, who should bear the heavier moral and legal accountability: the 'Front Group' executing the dirty work (like The Vigils/fake review factories), or the hidden authority demanding it (like Brother Leon/corporations)?",
      hasExcerpt: false,
      visual: "questions"
    }
  ];

  const current = slides[currentSlide];

  const renderVisual = (visualType: string, visualState?: string) => {
    switch (visualType) {
      case "none":
        return null;

      case "trinity":
        let leonClass = "absolute flex items-center justify-center font-bold text-rose-900 border-2 border-rose-300 bg-rose-200 rounded-2xl z-20 transition-all duration-1000 ease-in-out shadow-md ";
        let vigilsClass = "absolute flex items-center justify-center font-bold text-purple-900 border-2 border-purple-300 bg-purple-200 rounded-2xl z-20 transition-all duration-1000 ease-in-out shadow-md ";
        let lineClass = "absolute bg-amber-200 rounded-full z-10 transition-all duration-1000 ease-in-out ";

        if (visualState === "microcosm") {
            leonClass += animationTrigger ? "w-32 h-16 top-8 left-[25%] -translate-x-1/2 opacity-100" : "w-32 h-16 top-8 left-[15%] -translate-x-1/2 opacity-0";
            vigilsClass += animationTrigger ? "w-32 h-16 top-8 left-[75%] -translate-x-1/2 opacity-100" : "w-32 h-16 top-8 left-[85%] -translate-x-1/2 opacity-0";
            lineClass += animationTrigger ? "w-32 h-1.5 top-[3.5rem] left-1/2 -translate-x-1/2 opacity-100" : "w-0 h-1.5 top-[3.5rem] left-1/2 -translate-x-1/2 opacity-0";
        } else if (visualState === "architecture") {
            leonClass += "w-32 h-16 top-8 left-[25%] -translate-x-1/2 opacity-100";
            vigilsClass += "w-32 h-16 top-8 left-[75%] -translate-x-1/2 opacity-100";
            lineClass += "w-32 h-1.5 top-[3.5rem] left-1/2 -translate-x-1/2 opacity-100";
        } else if (visualState === "front_group") {
            leonClass += animationTrigger ? "w-32 h-12 top-0 left-1/2 -translate-x-1/2 opacity-40" : "w-32 h-16 top-8 left-[25%] -translate-x-1/2 opacity-100";
            vigilsClass += animationTrigger ? "w-48 h-16 top-24 left-1/2 -translate-x-1/2 bg-purple-300 border-purple-400 shadow-[0_0_20px_rgba(216,180,254,0.6)]" : "w-32 h-16 top-8 left-[75%] -translate-x-1/2 opacity-100";
            lineClass += animationTrigger ? "w-1 h-12 top-12 left-1/2 -translate-x-1/2 opacity-100" : "w-32 h-1.5 top-[3.5rem] left-1/2 -translate-x-1/2 opacity-100";
        }

        return (
          <div className="relative w-full h-64 max-w-2xl mx-auto">
            <div className={leonClass}>Leon</div>
            <div className={lineClass} />
            <div className={vigilsClass}>The Vigils</div>
            
            <div className="absolute top-[150px] left-1/2 -translate-x-1/2 flex gap-3 z-10">
              {[...Array(12)].map((_, i) => {
                const isJerry = i === 5;
                let studentClass = "w-5 h-5 rounded-full transition-all duration-1000 ease-in-out ";
                let studentStyle: React.CSSProperties = {};
                
                const colorMicrocosm = i < 6 ? '#fda4af' : '#d8b4fe';
                const colorJerryArch = '#93c5fd';
                const colorBase = '#cbd5e1';

                if (visualState === "microcosm") {
                    studentClass += animationTrigger ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50";
                    studentStyle.backgroundColor = animationTrigger ? colorMicrocosm : colorBase;
                    studentStyle.transitionDelay = animationTrigger ? `${800 + i * 100}ms` : '0ms';
                } else if (visualState === "architecture") {
                    studentClass += animationTrigger ? (isJerry ? "opacity-100 scale-100" : "opacity-0 scale-0") : "opacity-100 translate-y-0 scale-100";
                    studentStyle.backgroundColor = isJerry ? (animationTrigger ? colorJerryArch : colorMicrocosm) : colorMicrocosm;
                    studentStyle.transitionDelay = animationTrigger ? (isJerry ? '800ms' : `${i * 50}ms`) : '0ms';
                } else if (visualState === "front_group") {
                    studentClass += animationTrigger ? "opacity-0 translate-y-10 scale-0" : (isJerry ? "opacity-100 scale-100" : "opacity-0 scale-0");
                    studentStyle.backgroundColor = colorJerryArch;
                    studentStyle.transitionDelay = '0ms';
                }

                return (
                  <div key={i} className="relative">
                    {isJerry && visualState === "architecture" && (
                      <div className={`absolute inset-0 rounded-full border-2 border-blue-300 animate-ping transition-opacity duration-1000 ${animationTrigger ? 'opacity-60 delay-1000' : 'opacity-0'}`} />
                    )}
                    <div className={studentClass} style={studentStyle} />
                  </div>
                );
              })}
            </div>

            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-transparent via-slate-400 to-transparent transition-all duration-1000
                ${visualState === "front_group" && animationTrigger ? "opacity-100 delay-500" : "opacity-0 delay-0"}
              `}
            />
          </div>
        );

      case "astroturfing":
        return (
          <div className="relative w-full h-64 mx-auto flex items-end justify-center gap-4 pb-4 overflow-hidden transition-opacity duration-700">
            {[...Array(15)].map((_, i) => (
              <div key={`choco-${i}`} className={`absolute w-3 h-4 bg-amber-600/80 rounded-sm transition-all duration-[2000ms] ease-in`}
                style={{
                  left: `${10 + (i * 5.5)}%`,
                  top: animationTrigger ? '100%' : '-20%',
                  opacity: animationTrigger ? 0 : 1,
                  transitionDelay: `${Math.random() * 1000}ms`
                }}
              />
            ))}
            <div className="w-12 bg-slate-400 rounded-t-xl h-[10%]" />
            <div className={`w-12 bg-blue-300 rounded-t-xl transition-all duration-1000 delay-700 ${animationTrigger ? 'h-[75%]' : 'h-[10%]'}`} />
            <div className={`w-12 bg-blue-300 rounded-t-xl transition-all duration-1000 delay-900 ${animationTrigger ? 'h-[50%]' : 'h-[10%]'}`} />
            <div className={`w-12 bg-blue-300 rounded-t-xl transition-all duration-1000 delay-1100 ${animationTrigger ? 'h-[90%]' : 'h-[10%]'}`} />
            <div className={`w-12 bg-blue-300 rounded-t-xl transition-all duration-1000 delay-1300 ${animationTrigger ? 'h-[65%]' : 'h-[10%]'}`} />
          </div>
        );

      case "sources":
        const fakeStudents = [
          { name: "Huart", sales: 13 },
          { name: "DeLillo", sales: 9 },
          { name: "Lemoine", sales: 16 },
          { name: "Caroni", sales: 12 },
          { name: "Mallan", sales: 25 }
        ];

        return (
          <div className="relative w-full h-64 flex flex-col items-center justify-center transition-opacity duration-700">
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-600 z-10" />

            <div className="absolute bottom-1/2 left-0 w-full flex justify-start px-16 items-end pb-1">
              <div className="flex flex-col items-center">
                <span className={`text-xs font-bold text-purple-300 mb-2 transition-opacity duration-700 ${animationTrigger ? 'opacity-30' : 'opacity-100'}`}>
                  The Vigils (Actual Sales)
                </span>
                <div 
                  className="w-32 bg-purple-300 rounded-t-2xl transition-all duration-1000 ease-in-out flex items-center justify-center shadow-[0_0_15px_rgba(216,180,254,0.4)]"
                  style={{
                    height: animationTrigger ? '15px' : '100px', 
                    opacity: animationTrigger ? 0.3 : 1
                  }}
                >
                  <span className={`text-purple-900 font-bold transition-opacity duration-500 ${animationTrigger ? 'opacity-0' : 'opacity-100'}`}>
                    75 Boxes
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-0 w-full flex justify-end px-16 items-start pt-1 gap-4">
              {fakeStudents.map((student, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className="w-12 bg-emerald-300 rounded-b-2xl transition-all duration-1000 ease-out flex items-end justify-center pb-2 shadow-[0_0_10px_rgba(110,231,183,0.4)]"
                    style={{
                      height: animationTrigger ? `${student.sales * 3.5}px` : '0px', 
                      opacity: animationTrigger ? 1 : 0,
                      transitionDelay: `${500 + (i * 150)}ms`
                    }}
                  >
                    <span 
                      className="text-emerald-900 text-[11px] font-bold"
                      style={{ opacity: animationTrigger ? 1 : 0, transitionDelay: `${800 + (i * 150)}ms` }}
                    >
                      {student.sales}
                    </span>
                  </div>
                  <span 
                    className="text-[12px] text-slate-300 mt-2 font-bold tracking-wider"
                    style={{
                      opacity: animationTrigger ? 1 : 0,
                      transitionDelay: `${600 + (i * 150)}ms`
                    }}
                  >
                    {student.name}
                  </span>
                </div>
              ))}
            </div>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 px-4 py-1.5 rounded-full border border-slate-500 text-slate-300 text-xs font-bold transition-all duration-1000 z-20 ${animationTrigger ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              Data Distributed
            </div>
          </div>
        );

      case "corporate_ventriloquism":
        return (
          <div className="relative flex items-center justify-center w-full h-64">
            <div className={`w-16 h-16 rounded-full bg-purple-300 text-purple-900 z-10 flex items-center justify-center font-bold transition-all duration-700 shadow-md ${animationTrigger ? 'scale-100' : 'scale-0'}`}>Archie</div>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="absolute w-4 h-4 bg-slate-300 rounded-full transition-all duration-[1500ms] ease-out"
                style={{
                  transform: animationTrigger ? `rotate(${i * 60}deg) translateX(80px)` : `rotate(${i * 60}deg) translateX(0px)`,
                  opacity: animationTrigger ? 1 : 0,
                  transitionDelay: `${300 + (i * 100)}ms`
                }}
              />
            ))}
          </div>
        );

      case "bandwagon":
        return (
          <div className="flex flex-wrap items-center justify-center gap-3 w-72 h-64 mx-auto content-center">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-12 h-12 rounded-2xl transition-colors duration-700 ease-in-out shadow-sm"
                style={{ 
                  backgroundColor: animationTrigger ? '#fda4af' : '#cbd5e1', 
                  transitionDelay: `${i === 0 ? 100 : 100 + (Math.random() * 1500)}ms` 
                }}
              />
            ))}
          </div>
        );

      case "spiral":
        return (
          <div className="relative w-full h-64 flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-blue-300 rounded-full z-10 shadow-[0_0_15px_rgba(147,197,253,0.8)]" />
            <div className={`absolute w-4 h-4 bg-slate-400 rounded-full transition-all duration-1000 delay-500 ${animationTrigger ? 'translate-x-20 opacity-20' : 'translate-x-8 opacity-100'}`} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <div key={i} className="absolute w-5 h-5 bg-rose-300 rounded-md transition-all duration-[1500ms] ease-out"
                style={{ 
                  transform: `rotate(${deg}deg) translateY(${animationTrigger ? '40px' : '100px'})`,
                  opacity: animationTrigger ? 1 : 0,
                  transitionDelay: `${800 + i * 150}ms`
                }}
              />
            ))}
          </div>
        );

      case "fake_reviews":
        return (
          <div className="relative flex flex-col items-center justify-center w-full h-64">
            <div className={`w-40 h-56 border-4 border-slate-600 rounded-[2rem] flex flex-col items-center pt-8 gap-3 bg-slate-800 transition-all duration-1000 ${animationTrigger ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="text-xs text-slate-400 font-bold mb-2">Trinity App Store</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                    className={`w-6 h-6 transition-all duration-500 ${animationTrigger ? 'text-amber-300 scale-100' : 'text-slate-600 scale-50'}`}
                    style={{ transitionDelay: `${800 + (i * 200)}ms` }}>
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <div className={`w-24 h-2 bg-slate-500 rounded-full mt-2 transition-all duration-700 delay-[1800ms] ${animationTrigger ? 'opacity-100' : 'opacity-0'}`} />
              <div className={`w-16 h-2 bg-slate-500 rounded-full transition-all duration-700 delay-[1900ms] ${animationTrigger ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          </div>
        );

      case "algorithmic_ventriloquism":
        return (
          <div className="relative flex items-center justify-center w-full h-64 gap-8">
            <div className={`w-20 h-20 bg-emerald-200 text-emerald-900 rounded-2xl flex items-center justify-center font-mono font-bold text-xs border-2 border-emerald-300 shadow-[0_0_20px_rgba(167,243,208,0.5)] transition-all duration-1000 ${animationTrigger ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              LLM / AI
            </div>
            <div className="flex flex-col gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-16 h-1.5 rounded-full bg-emerald-300 transition-all duration-700`} 
                    style={{
                      transformOrigin: 'left',
                      transform: animationTrigger ? 'scaleX(1)' : 'scaleX(0)',
                      transitionDelay: `${800 + (i * 300)}ms`
                    }}
                  />
                  <div className={`w-8 h-8 bg-blue-300 rounded-full shadow-sm transition-all duration-500`}
                    style={{
                      transform: animationTrigger ? 'scale(1)' : 'scale(0)',
                      opacity: animationTrigger ? 1 : 0,
                      transitionDelay: `${1100 + (i * 300)}ms`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case "conclusion":
        return (
          <div className="relative flex items-center justify-center w-full h-64">
             <div className={`absolute w-4 h-4 bg-amber-200 rounded-full z-10 transition-transform duration-1000 ${animationTrigger ? 'scale-100' : 'scale-0'}`} />
            <div className={`absolute w-4 h-4 border-2 border-amber-300 rounded-full transition-all duration-1000 delay-300 ${animationTrigger ? 'scale-[10] opacity-0' : 'scale-100 opacity-100'}`} />
            <div className={`absolute w-4 h-4 border-2 border-amber-300 rounded-full transition-all duration-1000 delay-700 ${animationTrigger ? 'scale-[20] opacity-0' : 'scale-100 opacity-100'}`} />
          </div>
        );

      case "questions":
        return (
          <div className="relative flex items-center justify-center w-full h-48 gap-6">
            <div className={`relative w-20 h-16 bg-blue-200 text-blue-900 rounded-3xl flex items-center justify-center text-2xl font-bold shadow-md transition-all duration-700 ${animationTrigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              ?
              <div className="absolute -bottom-2 left-4 w-4 h-4 bg-blue-200 transform rotate-45" />
            </div>
            <div className={`relative w-24 h-20 bg-purple-200 text-purple-900 rounded-3xl flex items-center justify-center text-3xl font-bold shadow-md transition-all duration-700 delay-300 ${animationTrigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              ?
              <div className="absolute -bottom-2 right-6 w-4 h-4 bg-purple-200 transform rotate-45" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden">
      
      <div className="h-1 bg-slate-800 w-full z-20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center p-8 max-w-6xl mx-auto w-full relative">
        
        <div className="w-full flex flex-col items-center w-full">
          
          {current.visual !== "none" && (
            <div key={current.visual} className="w-full h-64 mb-4 flex items-center justify-center">
              {renderVisual(current.visual, current.visualState)}
            </div>
          )}

          <div 
            key={`text-${current.id}`}
            className={`text-center w-full transition-all duration-700 transform ${
              animationTrigger ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-blue-300 font-bold tracking-widest uppercase mb-2 text-sm md:text-base">
              {current.subtitle}
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
              {current.title}
            </h1>
            
            <div className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-4">
              {current.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={idx > 0 ? "mt-4" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {current.hasExcerpt && current.excerptText && (
            <div 
              key={`excerpt-${current.id}`}
              className={`w-full max-w-4xl mt-4 p-6 rounded-2xl bg-slate-800/80 border-l-8 border-amber-300 shadow-2xl transition-all duration-700 delay-500 transform ${
                animationTrigger ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-amber-300 text-xs font-bold uppercase mb-2 tracking-wider">
                Excerpt
              </h3>
              <div className="text-slate-300 italic text-base leading-relaxed font-serif">
                <p>"{current.excerptText}"</p>
              </div>
            </div>
          )}
          
        </div>
      </main>

      <footer className="h-20 border-t border-slate-800 flex items-center justify-between px-8 bg-slate-900/80 backdrop-blur-sm z-20 relative">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-2 rounded-full font-semibold transition-colors disabled:opacity-30 hover:bg-slate-800 text-slate-300 z-10"
        >
          ← Prev
        </button>
        <div className="text-slate-500 font-medium tracking-widest text-sm z-10">
          {currentSlide + 1} / {slides.length}
        </div>
        <button 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="px-6 py-2 rounded-full font-semibold transition-colors disabled:opacity-30 hover:bg-slate-800 text-slate-300 z-10"
        >
          Next →
        </button>
      </footer>
    </div>
  );
}