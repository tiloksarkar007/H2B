import React, { useState } from 'react';
import { FaqItem } from '../data/content';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [items[0]?.id || '']: true // First item open by default
  });

  const toggleItem = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="divide-y divide-[#E5E6DC] border-y border-[#E5E6DC]">
      {items.map((item) => {
        const isOpen = !!openIds[item.id];
        const buttonId = `faq-btn-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div key={item.id} className="py-5">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087F8C] rounded-lg p-1"
              >
                <span className="text-base sm:text-lg font-bold text-[#10243A] group-hover:text-[#087F8C] transition-colors">
                  {item.question}
                </span>
                <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-[#F3F3ED] text-[#10243A] group-hover:bg-[#EBF7F8] group-hover:text-[#087F8C] transition-all transform ${
                  isOpen ? 'rotate-180 bg-[#EBF7F8] text-[#087F8C]' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="mt-3 pr-6 text-sm sm:text-base text-[#475569] leading-relaxed animate-in fade-in duration-150"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
