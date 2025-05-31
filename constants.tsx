import React from 'react';
import { NavLinkItem, Service, Testimonial, ProgressEntry, CarouselSlide } from './types';

export const APP_NAME = "Coach Fitness Pro"; // Placeholder for Logo

export const NAV_LINKS: NavLinkItem[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Me", path: "/about" },
  { name: "Progress", path: "/progress" },
  { name: "Contact", path: "/contact" },
];

export const FOOTER_LINKS: NavLinkItem[] = [
  ...NAV_LINKS,
  { name: "Privacy Policy", path: "/privacy" }, // Example additional link
];

// Color Palette (for reference, use arbitrary values in Tailwind)
export const COLORS = {
  nightBlack: "#0E0E0E",
  onyxGray: "#434343",
  ecru: "#C6A664",
  hunyadiYellow: "#E8B040",
  lavender: "#F3ECFF",
  white: "#FFFFFF",
};

// Placeholder SVGs for Icons (e.g., Heroicons)

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XMarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const DumbbellIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8 text-[#C6A664]"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h3m-6.75 6.75h9.5M5.25 6.75h13.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5H5.25c-.828 0-1.5-.672-1.5-1.5v-7.5c0-.828.672-1.5 1.5-1.5zM9 15V9m6 6V9" />
  </svg>
);

export const NutritionIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8 text-[#C6A664]"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9.75A1.5 1.5 0 0020.25 12a1.5 1.5 0 001.5 2.25m-1.5-4.5V6a1.5 1.5 0 00-1.5-1.5H5.25A1.5 1.5 0 003.75 6v6.75m18 0A2.25 2.25 0 0119.5 15a2.25 2.25 0 01-2.25-2.25M3.75 12.75A2.25 2.25 0 016 15a2.25 2.25 0 012.25-2.25M3.75 12.75V6.75m0 6A2.25 2.25 0 005.25 15h9.5A2.25 2.25 0 0017.25 12.75M3.75 12.75H17.25m0 0A2.25 2.25 0 0019.5 15m0 0v1.5c0 .621.504 1.125 1.125 1.125h1.125c.621 0 1.125-.504 1.125-1.125V15m0 0a2.25 2.25 0 00-2.25-2.25m2.25 2.25a2.25 2.25 0 01-2.25 2.25M3.75 15h13.5M3.75 18h13.5" />
  </svg>
);

export const OnlineCoachingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-8 h-8 text-[#C6A664]"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H5.25A2.25 2.25 0 003 3.75v16.5a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 20.25V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


export const SOCIAL_MEDIA_LINKS = [
  { name: "Facebook", url: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
  { name: "Instagram", url: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { name: "LinkedIn", url: "#", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z"/></svg> },
];

export const HOME_CAROUSEL_SLIDES: CarouselSlide[] = [
  { id: "slide1", image: "https://picsum.photos/seed/heroFitness1/1920/1080", headline: "Elevate Your Potential. Transform Your Life.", ctaText: "Discover Your Path", ctaLink: "/services" },
  { id: "slide2", image: "https://picsum.photos/seed/heroFitness2/1920/1080", headline: "Expert Guidance. Personalized Results.", ctaText: "Meet Your Coach", ctaLink: "/about" },
  { id: "slide3", image: "https://picsum.photos/seed/heroFitness3/1920/1080", headline: "Unlock Peak Performance Today.", ctaText: "Begin Your Transformation", ctaLink: "/contact" },
];

export const SERVICES_DATA: Service[] = [
  { 
    id: "s1", 
    name: "Elite Personal Training", 
    shortDescription: "Customized workout plans tailored to your unique goals and fitness level.", 
    description: "Our Elite Personal Training program offers one-on-one coaching with personalized workout routines designed to maximize your strength, endurance, and overall fitness. We focus on proper form, progressive overload, and continuous motivation to help you achieve and surpass your goals. Suitable for all fitness levels, from beginners to seasoned athletes.",
    icon: <DumbbellIcon />, 
    image: "https://picsum.photos/seed/personaltraining/600/400",
    ctaText: "Book Your Consultation",
    ctaLink: "/contact?service=personal-training"
  },
  { 
    id: "s2", 
    name: "Strategic Nutrition Design", 
    shortDescription: "Science-backed dietary guidance to fuel your body and optimize health.", 
    description: "Navigate the complexities of nutrition with our Strategic Nutrition Design service. We create individualized meal plans based on your dietary needs, preferences, and fitness objectives. Learn sustainable eating habits, understand macronutrients, and fuel your body for optimal performance and well-being. Includes ongoing support and adjustments.",
    icon: <NutritionIcon />,
    image: "https://picsum.photos/seed/nutrition/600/400",
    ctaText: "Design Your Diet Plan",
    ctaLink: "/contact?service=nutrition-design"
  },
  { 
    id: "s3", 
    name: "Online Coaching & Support", 
    shortDescription: "Flexible remote coaching with comprehensive support and accountability.",
    description: "Access expert coaching from anywhere with our Online Coaching program. Receive personalized workout and nutrition plans, regular check-ins, video feedback, and continuous support through our dedicated platform. Ideal for self-motivated individuals seeking flexibility without compromising on results.",
    icon: <OnlineCoachingIcon />,
    image: "https://picsum.photos/seed/onlinecoaching/600/400",
    ctaText: "Join Online Program",
    ctaLink: "/contact?service=online-coaching"
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: "t1", quote: "Working with [Coach's Name] completely changed my perspective on fitness. I'm stronger and more confident than ever!", name: "Jamie L.", role: "Client for 1 Year" },
  { id: "t2", quote: "The personalized nutrition plan was a game-changer. I finally understand how to eat for my body and goals.", name: "Alex P.", role: "Nutrition Client" },
  { id: "t3", quote: "Incredible support and motivation. I've achieved results I never thought possible. Highly recommend!", name: "Sarah K.", role: "Online Coaching Client" },
];

export const PROGRESS_ENTRIES_DATA: ProgressEntry[] = [
  { id: "p1", beforeImage: "https://picsum.photos/seed/before1/400/600", afterImage: "https://picsum.photos/seed/after1/400/600", clientName: "Michael B.", summary: "Lost 30lbs and gained significant muscle definition in 6 months. Transformed energy levels and confidence." },
  { id: "p2", beforeImage: "https://picsum.photos/seed/before2/400/600", afterImage: "https://picsum.photos/seed/after2/400/600", clientName: "Jessica T.", summary: "Improved posture, core strength, and overall fitness. Completed first 10k race after 4 months of training." },
  { id: "p3", beforeImage: "https://picsum.photos/seed/before3/400/600", afterImage: "https://picsum.photos/seed/after3/400/600", clientName: "David R.", summary: "Successfully adopted a sustainable healthy eating plan, losing 15lbs and improving metabolic health markers." },
  { id: "p4", beforeImage: "https://picsum.photos/seed/before4/400/600", afterImage: "https://picsum.photos/seed/after4/400/600", clientName: "Emily S.", summary: "Gained 10lbs of lean muscle and dramatically increased strength PBs through consistent training and nutrition." },
];

export const COACH_PLACEHOLDER_NAME = "Alex Vector"; // Placeholder coach name
