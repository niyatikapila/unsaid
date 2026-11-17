import React, { useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface AnnouncementBarProps {
  announcementText: string;
  onExploreDrop?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({
  announcementText,
  onExploreDrop
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#691728] text-[#FCE8EC] text-xs font-medium py-2 px-4 transition-all duration-300 border-b border-[#4F0F1C]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-6 hidden md:block" />
        
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#FCE8EC] opacity-80" />
          <span className="truncate">
            {announcementText}
          </span>
          {onExploreDrop && (
            <button
              onClick={onExploreDrop}
              className="hidden sm:inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:text-white transition-colors cursor-pointer shrink-0 ml-1"
            >
              Explore Spring Drop
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="text-[#FCE8EC]/70 hover:text-white p-1 transition-colors cursor-pointer shrink-0"
          aria-label="Dismiss announcement banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
