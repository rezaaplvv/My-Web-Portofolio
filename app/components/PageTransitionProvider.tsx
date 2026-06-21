"use client";

import React, { createContext, useContext, useRef, useLayoutEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";

const PageTransitionContext = createContext<{
  triggerTransition: (href: string) => void;
} | null>(null);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error("usePageTransition must be used within a PageTransitionProvider");
  }
  return context;
};

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const topCurtainRef = useRef<HTMLDivElement>(null);
  const bottomCurtainRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);

  const isMobile = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768; // md breakpoint is 768px
    }
    return false;
  };

  // Opening Phase: Hanya jalankan ketika navigasi dipicu secara resmi oleh tirai
  useLayoutEffect(() => {
    if (isMobile()) {
      return;
    }

    if (isTransitioningRef.current) {
      const ctx = gsap.context(() => {
        // Mulai dari keadaan tertutup (di tengah layar)
        gsap.set(topCurtainRef.current, { yPercent: 100 });
        gsap.set(bottomCurtainRef.current, { yPercent: -100 });

        // Animate split-opening (Top ke atas / kembali ke yPercent: 0, Bottom ke bawah / kembali ke yPercent: 0)
        gsap.to(topCurtainRef.current, {
          yPercent: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(bottomCurtainRef.current, {
          yPercent: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            isTransitioningRef.current = false;
          }
        });
      }, topCurtainRef);

      return () => ctx.revert();
    } else {
      // Jika navigasi standar, pastikan tirai tetap terbuka (di luar viewport)
      gsap.set(topCurtainRef.current, { yPercent: 0 });
      gsap.set(bottomCurtainRef.current, { yPercent: 0 });
    }
  }, [pathname]);

  const triggerTransition = (href: string) => {
    if (isMobile()) {
      router.push(href);
      return;
    }

    isTransitioningRef.current = true;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          router.push(href);
        }
      });

      // Closing Phase: Tutup tirai ke tengah layar (yPercent top: 100, bottom: -100)
      tl.to(topCurtainRef.current, {
        yPercent: 100,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);

      tl.to(bottomCurtainRef.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);
    });
  };

  return (
    <PageTransitionContext.Provider value={{ triggerTransition }}>
      {children}
      {/* Top Curtain Panel: Tinggi 50vh, bergeser ke atas -100% secara default (-translate-y-full) */}
      <div
        ref={topCurtainRef}
        className="hidden md:block fixed top-0 left-0 w-full h-[50vh] bg-black -translate-y-full z-[99999] pointer-events-none"
      />
      {/* Bottom Curtain Panel: Tinggi 50vh, bergeser ke bawah 100% secara default (translate-y-full) */}
      <div
        ref={bottomCurtainRef}
        className="hidden md:block fixed bottom-0 left-0 w-full h-[50vh] bg-black translate-y-full z-[99999] pointer-events-none"
      />
    </PageTransitionContext.Provider>
  );
}
