'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 120);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.timeline-item, .project-card, .achievement-card, .work-card').forEach(el => observer.observe(el));

    // 2. Card Tilt
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg) translateZ(4px)`;
    };
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = '';
    };
    const cards = document.querySelectorAll('.project-card, .achievement-card, .work-card, .item, .card');
    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    // 3. Typo Effect
    const eyebrow = document.querySelector('.hero-eyebrow span');
    if (eyebrow && !eyebrow.hasAttribute('data-typed')) {
      const text = eyebrow.textContent;
      eyebrow.textContent = '';
      eyebrow.setAttribute('data-typed', 'true');
      let i = 0;
      const typeText = () => {
        if (i < text.length) {
          eyebrow.textContent += text[i++];
          setTimeout(typeText, 40);
        }
      };
      setTimeout(typeText, 400);
    }
    
    // Cleanup
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [pathname]);

  return null;
}