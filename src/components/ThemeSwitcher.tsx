'use client';

import { useState, useEffect } from 'react';
import { Palette, ChevronDown } from 'lucide-react';

const themes = [
  { id: 'medicare', name: 'Medicare Blue', color: 'bg-blue-600' },
  { id: 'teal', name: 'Sinai Teal', color: 'bg-teal-600' },
  { id: 'emerald', name: 'Fortis Emerald', color: 'bg-emerald-600' },
  { id: 'sunset', name: 'Apollo Sunset', color: 'bg-orange-600' },
  { id: 'dark', name: 'Premium Dark', color: 'bg-slate-900' },
];

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('medicare');

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('hospital-theme') || 'medicare';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  if (!mounted) return null;

  const changeTheme = (themeId: string) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('hospital-theme', themeId);
    setIsOpen(false);
  };

  const activeTheme = themes.find(t => t.id === currentTheme) || themes[0];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
        title="Switch Theme"
      >
        <Palette className="w-4 h-4 text-[var(--color-primary)]" />
        <span className="text-xs font-medium text-[var(--color-text-dark)] hidden sm:block">Theme</span>
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-48 bg-white border border-[var(--color-border)] rounded-xl shadow-lg z-50 overflow-hidden py-2">
            <div className="px-3 py-2 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider border-b border-[var(--color-border)] mb-1">
              Select Theme
            </div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => changeTheme(theme.id)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-colors hover:bg-slate-50 ${currentTheme === theme.id ? 'bg-slate-50 font-medium text-[var(--color-primary)]' : 'text-slate-700'}`}
              >
                <div className={`w-4 h-4 rounded-full ${theme.color} shadow-sm border border-black/10`} />
                {theme.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
