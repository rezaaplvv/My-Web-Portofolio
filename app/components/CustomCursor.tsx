"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mencegah kursor aktif di perangkat mobile / touch screen
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    let hoveredTarget: HTMLElement | null = null;

    // 1. Mousemove: Update koordinat kursor dan jalankan efek magnetik
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      // Titik tengah bergerak instan mengikuti mouse
      gsap.set(dotRef.current, { x, y });

      if (hoveredTarget) {
        // Efek tarikan magnetik (magnetic pull) pada tombol/link
        const rect = hoveredTarget.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;
        const dx = x - targetX;
        const dy = y - targetY;

        // Tarik sedikit posisi tombol ke arah kursor mouse
        gsap.to(hoveredTarget, {
          x: dx * 0.25,
          y: dy * 0.25,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Posisikan ring luar mendekati pusat tombol (efek magnetik kursor)
        gsap.to(ringRef.current, {
          x: targetX + dx * 0.2,
          y: targetY + dy * 0.2,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        // Normal tracking ring luar dengan efek jeda halus (inertia)
        gsap.to(ringRef.current, {
          x,
          y,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    // 2. Mouseover: Delegasi pendeteksian hover
    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      // A. Deteksi Target Magnetik biasa (a, button, dll) -> Ring Membesar & Dot Mengecil
      const target = el.closest("a, button, [role='button'], .magnetic-target");
      if (target) {
        hoveredTarget = target as HTMLElement;
        gsap.to(ringRef.current, {
          scale: 1.8,
          opacity: 1,
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(dotRef.current, {
          width: 8,
          height: 8,
          scale: 0.5,
          opacity: 0.5,
          borderRadius: "50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
          duration: 0.3,
          overwrite: "auto",
        });
        return;
      }

      // B. Deteksi Area Teks -> Dot berubah menjadi Caret Biru Muda setinggi Font
      const isText = el.closest("p, span, h1, h2, h3, h4, h5, h6, li, label, code, blockquote, input, textarea");
      if (isText) {
        const computedStyle = window.getComputedStyle(isText);
        const fontSize = parseFloat(computedStyle.fontSize) || 16;

        gsap.to(dotRef.current, {
          width: 3,
          height: fontSize,
          borderRadius: "2px",
          backgroundColor: "#38BDF8", // Biru muda
          mixBlendMode: "normal",      // Solid, tidak membalik warna agar kontras
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
          overwrite: "auto",
        });

        // Pastikan ring disembunyikan
        gsap.to(ringRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.2,
          overwrite: "auto",
        });
        return;
      }
    };

    // 3. Mouseout: Mengembalikan kursor ke bentuk semula
    const handleMouseOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      // Keluar dari target magnetik
      const target = el.closest("a, button, [role='button'], .magnetic-target");
      if (target && target === hoveredTarget) {
        gsap.to(hoveredTarget, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
        hoveredTarget = null;
        gsap.to(ringRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          overwrite: "auto",
        });
        gsap.to(dotRef.current, {
          width: 8,
          height: 8,
          scale: 1.0,
          opacity: 1.0,
          borderRadius: "50%",
          backgroundColor: "white",
          mixBlendMode: "difference",
          duration: 0.3,
          overwrite: "auto",
        });
        return;
      }

      // Keluar dari area teks ke area kosong
      const isText = el.closest("p, span, h1, h2, h3, h4, h5, h6, li, label, code, blockquote, input, textarea");
      if (isText) {
        const toEl = e.relatedTarget as HTMLElement;
        // Hanya reset jika pointer berpindah ke elemen yang BUKAN teks
        if (!toEl || !toEl.closest("p, span, h1, h2, h3, h4, h5, h6, li, label, code, blockquote, input, textarea")) {
          gsap.to(dotRef.current, {
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "white",
            mixBlendMode: "difference",
            opacity: 1,
            scale: 1,
            duration: 0.3,
            overwrite: "auto",
          });
        }
      }
    };

    // Daftarkan event
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);

      if (hoveredTarget) {
        gsap.to(hoveredTarget, { x: 0, y: 0, duration: 0.1 });
      }
    };
  }, []);

  return (
    <>
      {/* Sembunyikan kursor bawaan browser pada layar non-mobile */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 769px) {
          html, body, a, button, [role="button"], input, textarea, select, p, span, h1, h2, h3, h4, h5, h6, li {
            cursor: none !important;
          }
        }
      ` }} />

      {/* Central Dot: Morphing kursor utama */}
      <div
        ref={dotRef}
        className="w-8 h-8 rounded-full fixed pointer-events-none z-[9999] mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "white",
          borderRadius: "50%",
          willChange: "transform, width, height, background-color, border-radius"
        }}
      />

      {/* Outer Ring: Muncul hanya saat berinteraksi dengan tombol magnetik */}
      <div
        ref={ringRef}
        className="w-8 h-8 border-2 border-white rounded-full fixed pointer-events-none z-[9998] flex items-center justify-center mix-blend-difference top-0 left-0 -translate-x-1/2 -translate-y-1/2 hidden md:block opacity-0 scale-0"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
