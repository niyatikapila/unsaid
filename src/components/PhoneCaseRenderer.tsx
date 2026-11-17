import React from 'react';
import { CameraLayout } from '../types';

interface PhoneCaseRendererProps {
  patternType: string;
  cameraLayout: CameraLayout;
  modelName?: string;
  className?: string;
  showShadow?: boolean;
  stickers?: string[];
}

export const PhoneCaseRenderer: React.FC<PhoneCaseRendererProps> = ({
  patternType,
  cameraLayout,
  modelName,
  className = 'w-full h-full max-w-[280px]',
  showShadow = true,
  stickers = []
}) => {
  // Render specific artwork pattern based on patternType
  const renderPattern = () => {
    switch (patternType) {
      case 'retro-cat':
        return (
          <g>
            <rect width="100%" height="100%" fill="#691728" />
            {/* Background retro sunburst lines */}
            <g opacity="0.15" stroke="#FCE8EC" strokeWidth="1.5">
              <line x1="100" y1="200" x2="20" y2="40" />
              <line x1="100" y1="200" x2="180" y2="40" />
              <line x1="100" y1="200" x2="20" y2="360" />
              <line x1="100" y1="200" x2="180" y2="360" />
              <circle cx="100" cy="200" r="70" fill="none" strokeDasharray="4 4" />
            </g>
            {/* Retro Sparkles */}
            <path d="M40 140 Q40 148 32 148 Q40 148 40 156 Q40 148 48 148 Q40 148 40 140Z" fill="#FCE8EC" />
            <path d="M165 240 Q165 246 159 246 Q165 246 165 252 Q165 246 171 246 Q165 246 165 240Z" fill="#FCE8EC" />
            <path d="M150 120 Q150 125 145 125 Q150 125 150 130 Q150 125 155 125 Q150 125 150 120Z" fill="#E4EFF8" />
            <path d="M45 280 Q45 285 40 285 Q45 285 45 290 Q45 285 50 285 Q45 285 45 280Z" fill="#F7F3EB" />
            {/* Mischief Cat Graphic */}
            <g transform="translate(42, 140)">
              {/* Cat Ears */}
              <polygon points="28,26 14,0 42,12" fill="#1C1819" />
              <polygon points="26,24 18,6 36,14" fill="#FCE8EC" />
              <polygon points="88,26 102,0 74,12" fill="#1C1819" />
              <polygon points="90,24 98,6 80,14" fill="#FCE8EC" />
              {/* Cat Head */}
              <ellipse cx="58" cy="50" rx="46" ry="38" fill="#1C1819" />
              {/* White muzzle/chest */}
              <path d="M42,54 C42,42 74,42 74,54 C74,70 42,70 42,54 Z" fill="#F7F3EB" />
              {/* Pink nose */}
              <polygon points="55,56 61,56 58,60" fill="#E88295" />
              {/* Whiskers */}
              <path d="M36,58 L12,54 M36,62 L10,65 M80,58 L104,54 M80,62 L106,65" stroke="#F7F3EB" strokeWidth="1.5" strokeLinecap="round" />
              {/* Retro Black Sunglasses with reflection */}
              <g>
                {/* Left lens */}
                <ellipse cx="40" cy="42" rx="16" ry="14" fill="#121011" stroke="#FCE8EC" strokeWidth="2.5" />
                <path d="M30,36 Q38,32 46,38" stroke="#FCE8EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                {/* Right lens */}
                <ellipse cx="76" cy="42" rx="16" ry="14" fill="#121011" stroke="#FCE8EC" strokeWidth="2.5" />
                <path d="M66,36 Q74,32 82,38" stroke="#FCE8EC" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                {/* Bridge */}
                <path d="M54,40 Q58,37 62,40" stroke="#FCE8EC" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </g>
              {/* Cat paws resting */}
              <rect x="36" y="86" width="44" height="20" rx="10" fill="#1C1819" />
              <circle cx="48" cy="94" r="5" fill="#F7F3EB" />
              <circle cx="68" cy="94" r="5" fill="#F7F3EB" />
            </g>
          </g>
        );

      case 'funky-dino':
        return (
          <g>
            <rect width="100%" height="100%" fill="#4A5C43" />
            {/* Pastel Clouds */}
            <path d="M15,100 Q25,85 45,90 Q65,80 80,95 Q90,110 75,115 L25,115 Q10,115 15,100 Z" fill="#FCE8EC" opacity="0.85" />
            <path d="M110,230 Q125,215 145,220 Q165,210 178,225 Q188,240 175,245 L120,245 Q105,245 110,230 Z" fill="#E4EFF8" opacity="0.85" />
            {/* Skating Dino */}
            <g transform="translate(38, 115)">
              {/* Dino Back Spikes */}
              <polygon points="40,30 32,20 44,22" fill="#E88295" />
              <polygon points="34,44 24,36 36,38" fill="#E88295" />
              <polygon points="30,60 20,54 32,56" fill="#E88295" />
              <polygon points="28,78 18,72 30,74" fill="#E88295" />
              {/* Dino Body */}
              <path d="M46,30 Q92,20 96,55 Q98,85 75,105 Q45,120 38,90 Q34,70 42,50 Z" fill="#88A87D" />
              {/* Dino belly patch */}
              <path d="M60,65 Q80,65 82,90 Q65,105 52,95 Z" fill="#F7F3EB" opacity="0.9" />
              {/* Cute big eye */}
              <circle cx="82" cy="45" r="7" fill="#1C1819" />
              <circle cx="84" cy="43" r="2.5" fill="#FFFFFF" />
              {/* Rosy cheek */}
              <ellipse cx="78" cy="54" rx="4.5" ry="3" fill="#E88295" />
              {/* Happy smile */}
              <path d="M88,52 Q94,56 92,60" stroke="#1C1819" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Dino Arm */}
              <path d="M68,68 Q78,72 74,80" stroke="#6B8262" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              {/* Tail */}
              <path d="M38,95 Q18,92 14,80 Q25,86 36,88" fill="#88A87D" />
              {/* Roller Skates */}
              <g transform="translate(42, 105)">
                <rect x="0" y="0" width="22" height="7" rx="3" fill="#E88295" />
                <circle cx="4" cy="11" r="4" fill="#FCE8EC" stroke="#1C1819" strokeWidth="1.5" />
                <circle cx="18" cy="11" r="4" fill="#FCE8EC" stroke="#1C1819" strokeWidth="1.5" />
              </g>
              <g transform="translate(68, 103)">
                <rect x="0" y="0" width="22" height="7" rx="3" fill="#E88295" />
                <circle cx="4" cy="11" r="4" fill="#FCE8EC" stroke="#1C1819" strokeWidth="1.5" />
                <circle cx="18" cy="11" r="4" fill="#FCE8EC" stroke="#1C1819" strokeWidth="1.5" />
              </g>
              {/* Speed lines */}
              <path d="M12,118 L2,118 M16,122 L6,122" stroke="#FCE8EC" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        );

      case 'groovy-eyes':
        return (
          <g>
            <rect width="100%" height="100%" fill="#E4EFF8" />
            {/* Undulating Wavy Ribbons */}
            <path d="M-20,60 Q50,90 100,50 T220,70 L220,110 Q150,80 100,120 T-20,100 Z" fill="#691728" />
            <path d="M-20,150 Q50,180 100,140 T220,160 L220,200 Q150,170 100,210 T-20,190 Z" fill="#F7F3EB" />
            <path d="M-20,240 Q50,270 100,230 T220,250 L220,290 Q150,260 100,300 T-20,280 Z" fill="#691728" />
            {/* Funky Cartoon Eyeballs */}
            <g transform="translate(48, 130)">
              {/* Eye 1 */}
              <ellipse cx="26" cy="30" rx="22" ry="16" fill="#F7F3EB" stroke="#1C1819" strokeWidth="2.5" />
              <circle cx="28" cy="30" r="9" fill="#691728" />
              <circle cx="29" cy="30" r="5" fill="#1C1819" />
              <circle cx="31" cy="28" r="2.5" fill="#FFFFFF" />
              {/* Eyelashes */}
              <line x1="26" y1="14" x2="26" y2="8" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="38" y1="16" x2="42" y2="10" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="14" y1="16" x2="10" y2="10" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" />
              {/* Eye 2 */}
              <ellipse cx="78" cy="30" rx="22" ry="16" fill="#F7F3EB" stroke="#1C1819" strokeWidth="2.5" />
              <circle cx="76" cy="30" r="9" fill="#691728" />
              <circle cx="75" cy="30" r="5" fill="#1C1819" />
              <circle cx="73" cy="28" r="2.5" fill="#FFFFFF" />
              {/* Eyelashes */}
              <line x1="78" y1="14" x2="78" y2="8" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="90" y1="16" x2="94" y2="10" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="66" y1="16" x2="62" y2="10" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" />
            </g>
            {/* Bottom mini eye pair */}
            <g transform="translate(56, 235) scale(0.75)">
              <ellipse cx="24" cy="24" rx="18" ry="13" fill="#F7F3EB" stroke="#1C1819" strokeWidth="2" />
              <circle cx="26" cy="24" r="7" fill="#4A5C43" />
              <circle cx="27" cy="23" r="2" fill="#FFFFFF" />
              <ellipse cx="64" cy="24" rx="18" ry="13" fill="#F7F3EB" stroke="#1C1819" strokeWidth="2" />
              <circle cx="62" cy="24" r="7" fill="#4A5C43" />
              <circle cx="61" cy="23" r="2" fill="#FFFFFF" />
            </g>
          </g>
        );

      case 'bubble-ghost':
        return (
          <g>
            <rect width="100%" height="100%" fill="#FCE8EC" />
            {/* Scattered mini daisies */}
            <g fill="#F7F3EB" opacity="0.8">
              <circle cx="35" cy="90" r="6" />
              <circle cx="165" cy="110" r="5" />
              <circle cx="150" cy="270" r="6" />
              <circle cx="45" cy="260" r="5" />
            </g>
            <g fill="#691728">
              <circle cx="35" cy="90" r="2" />
              <circle cx="165" cy="110" r="1.8" />
              <circle cx="150" cy="270" r="2" />
              <circle cx="45" cy="260" r="1.8" />
            </g>
            {/* Little smiling Ghost */}
            <g transform="translate(46, 125)">
              {/* Ghost body with soft ripples */}
              <path
                d="M54,15 C20,15 15,50 15,85 C15,95 24,98 28,92 C32,87 40,99 46,93 C52,87 60,98 66,92 C72,87 80,98 86,92 C90,87 95,95 95,85 C95,50 90,15 54,15 Z"
                fill="#FFFFFF"
                filter="drop-shadow(0px 4px 10px rgba(105, 23, 40, 0.08))"
              />
              {/* Cute eyes */}
              <circle cx="44" cy="50" r="4.5" fill="#1C1819" />
              <circle cx="46" cy="48" r="1.5" fill="#FFFFFF" />
              <circle cx="68" cy="50" r="4.5" fill="#1C1819" />
              <circle cx="70" cy="48" r="1.5" fill="#FFFFFF" />
              {/* Rosy cheeks */}
              <circle cx="38" cy="57" r="4" fill="#F8C9D3" />
              <circle cx="74" cy="57" r="4" fill="#F8C9D3" />
              {/* Smile */}
              <path d="M52,57 Q56,62 60,57" stroke="#1C1819" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Holding a Daisy Flower */}
              <path d="M72,66 Q82,75 78,85" stroke="#4A5C43" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Daisy blossom */}
              <g transform="translate(73, 62)">
                <circle cx="0" cy="-6" r="4" fill="#FCE8EC" />
                <circle cx="6" cy="0" r="4" fill="#FCE8EC" />
                <circle cx="0" cy="6" r="4" fill="#FCE8EC" />
                <circle cx="-6" cy="0" r="4" fill="#FCE8EC" />
                <circle cx="0" cy="0" r="3.5" fill="#E88295" />
              </g>
            </g>
          </g>
        );

      case 'celestial-sun':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F3EB" />
            <g transform="translate(100, 190)">
              {/* Sun Ray Beams */}
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <line
                  key={deg}
                  x1="0"
                  y1="0"
                  x2={Math.cos((deg * Math.PI) / 180) * 78}
                  y2={Math.sin((deg * Math.PI) / 180) * 78}
                  stroke="#691728"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              ))}
              {/* Sun Core */}
              <circle cx="0" cy="0" r="48" fill="#FCE8EC" stroke="#691728" strokeWidth="4" />
              {/* Retro Sun Sunglasses */}
              <g transform="translate(-32, -14)">
                <ellipse cx="14" cy="8" rx="14" ry="11" fill="#1C1819" stroke="#691728" strokeWidth="2" />
                <ellipse cx="50" cy="8" rx="14" ry="11" fill="#1C1819" stroke="#691728" strokeWidth="2" />
                <line x1="28" y1="6" x2="36" y2="6" stroke="#691728" strokeWidth="3" />
                {/* Glare */}
                <path d="M5,4 Q14,1 23,7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
                <path d="M41,4 Q50,1 59,7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
              </g>
              {/* Big Grin */}
              <path d="M-16,14 Q0,28 16,14" stroke="#691728" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Rosy blush */}
              <ellipse cx="-20" cy="12" rx="5" ry="3" fill="#E88295" opacity="0.7" />
              <ellipse cx="20" cy="12" rx="5" ry="3" fill="#E88295" opacity="0.7" />
            </g>
          </g>
        );

      case 'french-stripes':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F3EB" />
            {/* Breton Stripes */}
            {Array.from({ length: 22 }).map((_, i) => (
              <rect
                key={i}
                x="0"
                y={i * 18 + 8}
                width="200"
                height="8.5"
                fill="#691728"
              />
            ))}
            {/* Refined Center Crest / Frame */}
            <g transform="translate(45, 175)">
              <rect x="0" y="0" width="110" height="42" rx="4" fill="#F7F3EB" stroke="#691728" strokeWidth="1.5" />
              <text
                x="55"
                y="22"
                textAnchor="middle"
                fontSize="10"
                fontFamily="Playfair Display, Georgia, serif"
                fontWeight="600"
                letterSpacing="3"
                fill="#691728"
              >
                CAZELLE
              </text>
              <text
                x="55"
                y="33"
                textAnchor="middle"
                fontSize="6"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="500"
                letterSpacing="2"
                fill="#691728"
                opacity="0.8"
              >
                RIVIERA N°01
              </text>
            </g>
          </g>
        );

      case 'botanical-wildflower':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F3EB" />
            {/* Delicate Stems and pressed wildflowers */}
            <g transform="translate(10, 20)">
              {/* Stem 1: Chamomile Floral */}
              <path d="M60,260 Q50,180 75,110" stroke="#4A5C43" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Leaves */}
              <path d="M57,210 Q45,200 42,190 Q52,192 57,210" fill="#4A5C43" />
              <path d="M66,170 Q78,160 84,155 Q76,165 66,170" fill="#4A5C43" />
              <path d="M68,135 Q58,125 54,115 Q64,122 68,135" fill="#4A5C43" />
              {/* Daisy Flower Top */}
              <g transform="translate(75, 110)">
                {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
                  <ellipse
                    key={deg}
                    cx={Math.cos((deg * Math.PI) / 180) * 12}
                    cy={Math.sin((deg * Math.PI) / 180) * 12}
                    rx="6"
                    ry="3.5"
                    transform={`rotate(${deg}, ${Math.cos((deg * Math.PI) / 180) * 12}, ${Math.sin((deg * Math.PI) / 180) * 12})`}
                    fill="#FCE8EC"
                  />
                ))}
                <circle cx="0" cy="0" r="5" fill="#691728" />
              </g>

              {/* Stem 2: Lavender Sprig */}
              <path d="M125,270 Q135,210 115,145" stroke="#4A5C43" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {[150, 165, 180, 195, 210].map((y, idx) => (
                <g key={y} transform={`translate(${idx % 2 === 0 ? 116 : 122}, ${y})`}>
                  <ellipse cx="-4" cy="0" rx="4" ry="2.5" fill="#E88295" transform="rotate(-25)" />
                  <ellipse cx="4" cy="0" rx="4" ry="2.5" fill="#E88295" transform="rotate(25)" />
                </g>
              ))}

              {/* Floating petals */}
              <ellipse cx="35" cy="80" rx="4" ry="2.5" fill="#FCE8EC" transform="rotate(35, 35, 80)" />
              <ellipse cx="155" cy="85" rx="5" ry="3" fill="#FCE8EC" transform="rotate(-25, 155, 85)" />
              <ellipse cx="145" cy="240" rx="4" ry="2" fill="#E88295" transform="rotate(15, 145, 240)" />
            </g>
          </g>
        );

      case 'olive-flora':
        return (
          <g>
            <rect width="100%" height="100%" fill="#4A5C43" />
            <g transform="translate(15, 10)">
              {/* Mediterranean Olive Vine S-curve */}
              <path d="M85,340 Q130,240 70,170 T95,40" stroke="#6B8262" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Olive leaves pairing */}
              {[60, 95, 130, 165, 200, 235, 270, 305].map((y, i) => {
                const isLeft = i % 2 === 0;
                const xOffset = isLeft ? 68 : 88;
                return (
                  <g key={y} transform={`translate(${xOffset}, ${y})`}>
                    <path
                      d="M0,0 Q-15,-10 -25,-4 Q-12,8 0,0"
                      fill="#F7F3EB"
                      opacity="0.9"
                      transform={isLeft ? 'rotate(10)' : 'scale(-1, 1) rotate(10)'}
                    />
                    {/* Small Olive Berry */}
                    {i % 2 === 1 && (
                      <ellipse cx={isLeft ? -10 : 10} cy="6" rx="3.5" ry="5" fill="#FCE8EC" transform="rotate(20)" />
                    )}
                  </g>
                );
              })}
            </g>
          </g>
        );

      case 'linear-terracotta':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F3EB" />
            {/* Concentric Architectural Arches */}
            <g transform="translate(100, 200)">
              <path d="M-65,60 L-65,0 A65,65 0 0,1 65,0 L65,60" stroke="#691728" strokeWidth="3" fill="none" />
              <path d="M-48,60 L-48,0 A48,48 0 0,1 48,0 L48,60" stroke="#691728" strokeWidth="2" strokeDasharray="3 3" fill="none" />
              <path d="M-32,60 L-32,0 A32,32 0 0,1 32,0 L32,60" stroke="#691728" strokeWidth="2.5" fill="none" />
              <path d="M-16,60 L-16,0 A16,16 0 0,1 16,0 L16,60" stroke="#691728" strokeWidth="2" fill="none" />
              {/* Floating sphere */}
              <circle cx="0" cy="-78" r="14" fill="#691728" />
            </g>
            {/* Rhythmic Guidelines */}
            <line x1="20" y1="80" x2="180" y2="80" stroke="#691728" strokeWidth="1" opacity="0.4" />
            <line x1="20" y1="310" x2="180" y2="310" stroke="#691728" strokeWidth="1" opacity="0.4" />
          </g>
        );

      case 'matcha-club':
        return (
          <g>
            <rect width="100%" height="100%" fill="#EAE5D9" />
            {/* Checkerboard trim at top & bottom */}
            {Array.from({ length: 12 }).map((_, i) => (
              <rect
                key={i}
                x={i * 17}
                y={30}
                width="8.5"
                height="8.5"
                fill={i % 2 === 0 ? '#4A5C43' : '#F7F4EE'}
              />
            ))}
            {/* Retro Sparkles */}
            <path d="M35 120 Q35 126 29 126 Q35 126 35 132 Q35 126 41 126 Q35 126 35 120Z" fill="#691728" />
            <path d="M165 140 Q165 146 159 146 Q165 146 165 152 Q165 146 171 146 Q165 146 165 140Z" fill="#4A5C43" />
            <path d="M155 280 Q155 285 150 285 Q155 285 155 290 Q155 285 160 285 Q155 285 155 280Z" fill="#E88295" />
            
            {/* Vintage Diner Mascot: Matcha Cup with Shades */}
            <g transform="translate(50, 140)">
              {/* Striped Paper Straw */}
              <line x1="68" y1="5" x2="88" y2="-28" stroke="#691728" strokeWidth="6" strokeLinecap="round" />
              <line x1="72" y1="-2" x2="84" y2="-22" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="4 4" />
              {/* Cup Lid */}
              <ellipse cx="50" cy="18" rx="42" ry="10" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2.5" />
              {/* Cup Body */}
              <path d="M12,20 L24,115 Q50,126 76,115 L88,20 Z" fill="#6B8262" stroke="#1C1819" strokeWidth="2.5" />
              {/* Iced Layer / Cream swirl */}
              <path d="M14,26 Q50,38 86,26 L84,40 Q50,52 16,40 Z" fill="#F7F4EE" opacity="0.9" />
              {/* Vintage Sunglasses */}
              <g transform="translate(18, 52)">
                <rect x="0" y="0" width="28" height="18" rx="6" fill="#1C1819" stroke="#F7F4EE" strokeWidth="1.5" />
                <rect x="36" y="0" width="28" height="18" rx="6" fill="#1C1819" stroke="#F7F4EE" strokeWidth="1.5" />
                <line x1="28" y1="8" x2="36" y2="8" stroke="#1C1819" strokeWidth="3" />
                {/* Glare */}
                <line x1="5" y1="5" x2="16" y2="13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                <line x1="41" y1="5" x2="52" y2="13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
              </g>
              {/* Cheerful Smile */}
              <path d="M42,82 Q50,92 58,82" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Rosy blush */}
              <circle cx="28" cy="80" r="4.5" fill="#E88295" opacity="0.8" />
              <circle cx="72" cy="80" r="4.5" fill="#E88295" opacity="0.8" />
            </g>

            {/* Banner Text */}
            <g transform="translate(100, 290)">
              <rect x="-56" y="-12" width="112" height="24" rx="12" fill="#691728" />
              <text x="0" y="4" textAnchor="middle" fill="#FCE8EC" fontSize="8" fontFamily="Playfair Display, Georgia, serif" fontWeight="700" letterSpacing="2">
                MATCHA CLUB
              </text>
            </g>
          </g>
        );

      case 'lucky-cat':
        return (
          <g>
            <rect width="100%" height="100%" fill="#691728" />
            {/* Background sunburst lines */}
            <g opacity="0.12" stroke="#FCE8EC" strokeWidth="2">
              {[0, 30, 60, 90, 120, 150, 180].map((deg) => (
                <line
                  key={deg}
                  x1="100"
                  y1="220"
                  x2={100 + Math.cos((deg * Math.PI) / 180) * 160}
                  y2={220 - Math.sin((deg * Math.PI) / 180) * 160}
                />
              ))}
            </g>
            {/* Maneki-Neko Lucky Cat */}
            <g transform="translate(45, 125)">
              {/* Cat Body */}
              <ellipse cx="55" cy="110" rx="46" ry="42" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2.5" />
              {/* Red Collar & Golden Bell */}
              <path d="M22,86 Q55,98 88,86" stroke="#C8384E" strokeWidth="8" strokeLinecap="round" fill="none" />
              <circle cx="55" cy="94" r="7" fill="#E5A93B" stroke="#1C1819" strokeWidth="1.5" />
              <line x1="55" y1="91" x2="55" y2="95" stroke="#1C1819" strokeWidth="1" />
              {/* Cat Head */}
              <ellipse cx="55" cy="52" rx="42" ry="34" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2.5" />
              {/* Ears */}
              <polygon points="24,30 14,2 38,15" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2" />
              <polygon points="22,26 18,8 34,17" fill="#C8384E" />
              <polygon points="86,30 96,2 72,15" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2" />
              <polygon points="88,26 92,8 76,17" fill="#C8384E" />
              {/* Happy closed eyes (arches) */}
              <path d="M34,48 Q42,42 50,48" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M60,48 Q68,42 76,48" stroke="#1C1819" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Nose & Mouth */}
              <polygon points="53,54 57,54 55,57" fill="#C8384E" />
              <path d="M51,58 Q55,62 55,62 Q55,62 59,58" stroke="#1C1819" strokeWidth="2" strokeLinecap="round" fill="none" />
              {/* Whiskers */}
              <line x1="20" y1="52" x2="5" y2="50" stroke="#1C1819" strokeWidth="1.5" />
              <line x1="20" y1="57" x2="5" y2="60" stroke="#1C1819" strokeWidth="1.5" />
              <line x1="90" y1="52" x2="105" y2="50" stroke="#1C1819" strokeWidth="1.5" />
              <line x1="90" y1="57" x2="105" y2="60" stroke="#1C1819" strokeWidth="1.5" />
              {/* Waving Right Paw */}
              <g transform="translate(80, 25)">
                <ellipse cx="14" cy="20" rx="12" ry="18" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2.5" transform="rotate(-20)" />
                <path d="M6,10 Q14,4 20,8" stroke="#C8384E" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>
              {/* Left Paw holding Gold Koban Coin */}
              <g transform="translate(14, 88)">
                <ellipse cx="12" cy="16" rx="10" ry="16" fill="#F7F4EE" stroke="#1C1819" strokeWidth="2" />
                <ellipse cx="26" cy="20" rx="14" ry="18" fill="#E5A93B" stroke="#1C1819" strokeWidth="2" />
                <text x="26" y="24" textAnchor="middle" fill="#1C1819" fontSize="8" fontWeight="bold">千万</text>
              </g>
            </g>
          </g>
        );

      case 'cherry-pop':
        return (
          <g>
            <rect width="100%" height="100%" fill="#FCE8EC" />
            {/* Pop Art Cherry Duo */}
            <g transform="translate(48, 140)">
              {/* Green Twig Stems */}
              <path d="M52,0 Q40,35 24,70" stroke="#4A5C43" strokeWidth="4" strokeLinecap="round" fill="none" />
              <path d="M52,0 Q65,35 80,70" stroke="#4A5C43" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Little Leaf */}
              <path d="M52,0 Q72,-15 78,-5 Q68,10 52,0 Z" fill="#6B8262" stroke="#1C1819" strokeWidth="1.5" />
              {/* Left Glossy Cherry */}
              <circle cx="24" cy="80" r="24" fill="#C82845" stroke="#1C1819" strokeWidth="2.5" />
              {/* Wink Eye */}
              <path d="M14,75 Q20,70 26,75" stroke="#F7F4EE" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="28" cy="82" r="2" fill="#F7F4EE" />
              {/* Specular Glare */}
              <ellipse cx="16" cy="68" rx="6" ry="3" fill="#FFFFFF" opacity="0.75" transform="rotate(-30 16 68)" />

              {/* Right Glossy Cherry */}
              <circle cx="78" cy="80" r="24" fill="#691728" stroke="#1C1819" strokeWidth="2.5" />
              {/* Big anime eye */}
              <circle cx="76" cy="76" r="5" fill="#1C1819" />
              <circle cx="78" cy="74" r="2" fill="#FFFFFF" />
              {/* Little smile */}
              <path d="M84,82 Q88,86 92,82" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
              <ellipse cx="70" cy="68" rx="6" ry="3" fill="#FFFFFF" opacity="0.75" transform="rotate(-30 70 68)" />
            </g>

            {/* Sparkles around */}
            <path d="M35 120 Q35 125 30 125 Q35 125 35 130 Q35 125 40 125 Q35 125 35 120Z" fill="#C82845" />
            <path d="M165 250 Q165 255 160 255 Q165 255 165 260 Q165 255 170 255 Q165 255 165 250Z" fill="#691728" />
            <path d="M40 270 Q40 275 35 275 Q40 275 40 280 Q40 275 45 275 Q40 275 40 270Z" fill="#4A5C43" />
          </g>
        );

      case 'groovy-checker':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F4EE" />
            {/* Undulating Warped Checkerboard Pattern */}
            {Array.from({ length: 14 }).map((_, row) => {
              const y = row * 26 + 10;
              return Array.from({ length: 8 }).map((_, col) => {
                const x = col * 26 - 4;
                const isOdd = (row + col) % 2 === 1;
                return (
                  <path
                    key={`${row}-${col}`}
                    d={`M${x},${y} Q${x + 13},${y + (col % 2 === 0 ? 5 : -5)} ${x + 26},${y} L${x + 26},${y + 26} Q${x + 13},${y + 26 + (col % 2 === 0 ? 5 : -5)} ${x},${y + 26} Z`}
                    fill={isOdd ? '#691728' : '#FCE8EC'}
                    stroke="#E88295"
                    strokeWidth="0.5"
                    opacity={isOdd ? 0.95 : 0.6}
                  />
                );
              });
            })}
            {/* Center Oval Emblem */}
            <g transform="translate(100, 200)">
              <ellipse cx="0" cy="0" rx="55" ry="32" fill="#F7F4EE" stroke="#691728" strokeWidth="2.5" />
              <text x="0" y="-3" textAnchor="middle" fill="#691728" fontSize="10" fontFamily="Playfair Display, Georgia, serif" fontWeight="bold" letterSpacing="2">
                CAZELLE
              </text>
              <text x="0" y="10" textAnchor="middle" fill="#691728" fontSize="6" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" letterSpacing="1.5">
                EST. 2026
              </text>
            </g>
          </g>
        );

      case 'happy-pills':
        return (
          <g>
            <rect width="100%" height="100%" fill="#E4EFF8" />
            {/* Pop art pastel capsules with smiley faces */}
            {[
              { x: 50, y: 120, rot: -25, c1: '#691728', c2: '#FCE8EC' },
              { x: 140, y: 160, rot: 35, c1: '#4A5C43', c2: '#F7F4EE' },
              { x: 60, y: 220, rot: 40, c1: '#E88295', c2: '#691728' },
              { x: 135, y: 270, rot: -30, c1: '#6B8262', c2: '#E4EFF8' },
            ].map((p, i) => (
              <g key={i} transform={`translate(${p.x}, ${p.y}) rotate(${p.rot})`}>
                {/* Capsule Left Half */}
                <path d="M-22,-10 L0,-10 L0,10 L-22,10 A10,10 0 0,1 -22,-10 Z" fill={p.c1} stroke="#1C1819" strokeWidth="2" />
                {/* Capsule Right Half */}
                <path d="M0,-10 L22,-10 A10,10 0 0,1 22,10 L0,10 Z" fill={p.c2} stroke="#1C1819" strokeWidth="2" />
                {/* Center Divider */}
                <line x1="0" y1="-10" x2="0" y2="10" stroke="#1C1819" strokeWidth="2" />
                {/* Happy Face */}
                <circle cx="-10" cy="-3" r="1.5" fill="#FFFFFF" />
                <circle cx="-4" cy="-3" r="1.5" fill="#FFFFFF" />
                <path d="M-10,2 Q-7,6 -4,2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </g>
            ))}
            {/* Micro Sparkles */}
            <circle cx="100" cy="110" r="3" fill="#691728" />
            <circle cx="45" cy="180" r="2.5" fill="#4A5C43" />
            <circle cx="155" cy="225" r="3" fill="#E88295" />
            <circle cx="95" cy="310" r="2.5" fill="#691728" />
          </g>
        );

      case 'matisse-lineart':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F4EE" />
            {/* Organic Color Blobs */}
            <path d="M30,120 Q80,90 100,150 Q110,210 50,210 Q10,200 30,120 Z" fill="#FCE8EC" />
            <path d="M110,180 Q160,160 170,220 Q160,270 110,250 Q80,220 110,180 Z" fill="#E4EFF8" />
            <ellipse cx="140" cy="120" rx="28" ry="36" fill="#EDE4D4" />

            {/* Continuous One-Line Face Silhouette */}
            <path
              d="M100,90 C115,90 128,105 125,125 C122,145 105,155 105,165 C105,175 118,178 116,188 C114,198 98,205 98,218 C98,230 112,238 108,255 C105,268 90,275 80,275"
              stroke="#691728"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Nose & Lip detail */}
            <path d="M105,145 L118,160 L108,168" stroke="#691728" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M106,182 Q114,180 110,188" stroke="#691728" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Minimal eye arch */}
            <path d="M85,138 Q95,132 102,138" stroke="#691728" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="94" cy="139" r="1.5" fill="#691728" />
            {/* Botanical accent branch */}
            <path d="M40,240 Q60,260 70,290" stroke="#4A5C43" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <ellipse cx="50" cy="248" rx="4" ry="2" fill="#4A5C43" transform="rotate(-30 50 248)" />
            <ellipse cx="62" cy="268" rx="4" ry="2" fill="#4A5C43" transform="rotate(20 62 268)" />
          </g>
        );

      case 'copenhagen-grid':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F4EE" />
            {/* Architectural Scandinavian Grid */}
            {Array.from({ length: 15 }).map((_, i) => (
              <line
                key={`h-${i}`}
                x1="10"
                y1={i * 26 + 15}
                x2="190"
                y2={i * 26 + 15}
                stroke="#691728"
                strokeWidth="0.8"
                opacity="0.35"
              />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 26 + 10}
                y1="15"
                x2={i * 26 + 10}
                y2="380"
                stroke="#691728"
                strokeWidth="0.8"
                opacity="0.35"
              />
            ))}
            {/* Minimalist Micro Typography Box */}
            <g transform="translate(62, 175)">
              <rect x="0" y="0" width="76" height="38" fill="#F7F4EE" stroke="#691728" strokeWidth="1.5" />
              <text x="38" y="16" textAnchor="middle" fill="#691728" fontSize="8" fontFamily="Playfair Display, Georgia, serif" fontWeight="bold" letterSpacing="2">
                CAZELLE
              </text>
              <text x="38" y="27" textAnchor="middle" fill="#691728" fontSize="6" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="500" letterSpacing="1">
                KØBENHAVN
              </text>
            </g>
          </g>
        );

      case 'botanica-fern':
        return (
          <g>
            <rect width="100%" height="100%" fill="#F7F4EE" />
            {/* Pressed Forest Ferns */}
            <g transform="translate(40, 40)">
              {/* Central Spine */}
              <path d="M60,320 Q80,200 40,80" stroke="#4A5C43" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              {/* Fern Leaflets */}
              {[90, 115, 140, 165, 190, 215, 240, 265, 290].map((y, idx) => {
                const isLeft = idx % 2 === 0;
                const width = Math.min(28, 12 + idx * 2.2);
                return (
                  <g key={y} transform={`translate(${isLeft ? 52 : 62}, ${y})`}>
                    <path
                      d={isLeft ? `M0,0 Q-${width / 2},-10 -${width},-4 Q-${width / 2},4 0,0` : `M0,0 Q${width / 2},-10 ${width},-4 Q${width / 2},4 0,0`}
                      fill="#4A5C43"
                      opacity="0.85"
                    />
                  </g>
                );
              })}
            </g>
          </g>
        );

      case 'tortoise-luxe':
        return (
          <g>
            <rect width="100%" height="100%" fill="#964024" />
            {/* Mottled Tortoiseshell Organic Patches */}
            {[
              { x: 30, y: 40, rx: 25, ry: 18, c: '#481912' },
              { x: 90, y: 70, rx: 32, ry: 24, c: '#2A0C08' },
              { x: 155, y: 55, rx: 22, ry: 30, c: '#481912' },
              { x: 45, y: 130, rx: 35, ry: 26, c: '#2A0C08' },
              { x: 120, y: 145, rx: 42, ry: 30, c: '#C47035' },
              { x: 170, y: 160, rx: 20, ry: 18, c: '#481912' },
              { x: 60, y: 220, rx: 38, ry: 28, c: '#2A0C08' },
              { x: 130, y: 235, rx: 32, ry: 35, c: '#481912' },
              { x: 40, y: 290, rx: 28, ry: 22, c: '#C47035' },
              { x: 105, y: 310, rx: 40, ry: 28, c: '#2A0C08' },
              { x: 160, y: 330, rx: 24, ry: 20, c: '#481912' },
            ].map((p, i) => (
              <ellipse key={i} cx={p.x} cy={p.y} rx={p.rx} ry={p.ry} fill={p.c} opacity="0.8" />
            ))}
            {/* Center Gold Crest */}
            <g transform="translate(100, 200)">
              <rect x="-45" y="-14" width="90" height="28" rx="6" fill="#1C1819" stroke="#E5A93B" strokeWidth="1.5" />
              <text x="0" y="3" textAnchor="middle" fill="#E5A93B" fontSize="8" fontFamily="Playfair Display, Georgia, serif" fontWeight="bold" letterSpacing="2">
                CAZELLE
              </text>
            </g>
          </g>
        );

      case 'cherry-blossom-bloom':
      default:
        return (
          <g>
            <rect width="100%" height="100%" fill="#E4EFF8" />
            {/* Cherry blossom sprigs drifting */}
            <g transform="translate(15, 20)">
              <path d="M160,50 Q100,100 80,180 T30,290" stroke="#691728" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
              {/* Blossoms */}
              {[
                { x: 130, y: 75, s: 1 },
                { x: 95, y: 130, s: 1.1 },
                { x: 75, y: 185, s: 0.9 },
                { x: 45, y: 245, s: 1.15 }
              ].map((b, i) => (
                <g key={i} transform={`translate(${b.x}, ${b.y}) scale(${b.s})`}>
                  {[0, 72, 144, 216, 288].map((deg) => (
                    <path
                      key={deg}
                      d="M0,0 Q-5,-12 0,-15 Q5,-12 0,0"
                      fill="#FCE8EC"
                      stroke="#E88295"
                      strokeWidth="0.8"
                      transform={`rotate(${deg})`}
                    />
                  ))}
                  <circle cx="0" cy="0" r="3" fill="#691728" />
                </g>
              ))}
              {/* Drifting Petals */}
              <path d="M40,90 Q48,82 45,78 Q38,82 40,90" fill="#FCE8EC" />
              <path d="M140,170 Q148,162 145,158 Q138,162 140,170" fill="#FCE8EC" />
              <path d="M110,260 Q118,252 115,248 Q108,252 110,260" fill="#FCE8EC" />
            </g>
          </g>
        );
    }
  };

  // Render camera cutout matching real phone specifications
  const renderCameraCutout = () => {
    switch (cameraLayout) {
      case 'iphone-triple':
        // Rounded square camera island with 3 lenses and flash
        return (
          <g transform="translate(18, 18)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))">
            {/* Glass Island */}
            <rect x="0" y="0" width="58" height="58" rx="14" fill="#1C1819" stroke="#383335" strokeWidth="1.5" />
            {/* Top-Left Lens */}
            <circle cx="18" cy="18" r="10" fill="#0D0B0C" stroke="#4F494B" strokeWidth="2" />
            <circle cx="18" cy="18" r="5" fill="#1E232A" />
            <circle cx="16.5" cy="16.5" r="1.8" fill="#FFFFFF" opacity="0.6" />
            {/* Bottom-Left Lens */}
            <circle cx="18" cy="40" r="10" fill="#0D0B0C" stroke="#4F494B" strokeWidth="2" />
            <circle cx="18" cy="40" r="5" fill="#1E232A" />
            <circle cx="16.5" cy="38.5" r="1.8" fill="#FFFFFF" opacity="0.6" />
            {/* Right Centered Lens */}
            <circle cx="40" cy="29" r="10" fill="#0D0B0C" stroke="#4F494B" strokeWidth="2" />
            <circle cx="40" cy="29" r="5" fill="#1E232A" />
            <circle cx="38.5" cy="27.5" r="1.8" fill="#FFFFFF" opacity="0.6" />
            {/* True Tone Flash */}
            <circle cx="40" cy="14" r="4" fill="#F7F3EB" stroke="#78716C" strokeWidth="1" />
            {/* LiDAR Sensor */}
            <circle cx="40" cy="45" r="3" fill="#121011" />
          </g>
        );

      case 'iphone-dual':
        // Pill-shaped dual lens camera island
        return (
          <g transform="translate(18, 18)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))">
            <rect x="0" y="0" width="34" height="60" rx="17" fill="#1C1819" stroke="#383335" strokeWidth="1.5" />
            {/* Top Lens */}
            <circle cx="17" cy="17" r="10" fill="#0D0B0C" stroke="#4F494B" strokeWidth="2" />
            <circle cx="17" cy="17" r="5" fill="#1E232A" />
            <circle cx="15.5" cy="15.5" r="1.8" fill="#FFFFFF" opacity="0.6" />
            {/* Bottom Lens */}
            <circle cx="17" cy="43" r="10" fill="#0D0B0C" stroke="#4F494B" strokeWidth="2" />
            <circle cx="17" cy="43" r="5" fill="#1E232A" />
            <circle cx="15.5" cy="41.5" r="1.8" fill="#FFFFFF" opacity="0.6" />
          </g>
        );

      case 'samsung-vertical':
        // Vertical stacked independent lenses (Galaxy S series)
        return (
          <g transform="translate(20, 20)" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.3))">
            {/* Lens 1 */}
            <circle cx="12" cy="12" r="11" fill="#0D0B0C" stroke="#71717A" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" fill="#1E232A" />
            <circle cx="10" cy="10" r="2" fill="#FFFFFF" opacity="0.7" />
            {/* Lens 2 */}
            <circle cx="12" cy="38" r="11" fill="#0D0B0C" stroke="#71717A" strokeWidth="2" />
            <circle cx="12" cy="38" r="6" fill="#1E232A" />
            <circle cx="10" cy="36" r="2" fill="#FFFFFF" opacity="0.7" />
            {/* Lens 3 */}
            <circle cx="12" cy="64" r="11" fill="#0D0B0C" stroke="#71717A" strokeWidth="2" />
            <circle cx="12" cy="64" r="6" fill="#1E232A" />
            <circle cx="10" cy="62" r="2" fill="#FFFFFF" opacity="0.7" />
            {/* Flash */}
            <circle cx="32" cy="25" r="3.5" fill="#F7F3EB" stroke="#A1A1AA" strokeWidth="1" />
          </g>
        );

      case 'pixel-visor':
        // Google Pixel Camera Visor bar spanning horizontally
        return (
          <g transform="translate(6, 28)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.35))">
            {/* Visor Bar Frame */}
            <rect x="0" y="0" width="188" height="34" rx="10" fill="#1C1819" stroke="#52525B" strokeWidth="2" />
            {/* Camera Pill Cutout */}
            <rect x="18" y="7" width="58" height="20" rx="10" fill="#090809" />
            {/* Lens 1 */}
            <circle cx="30" cy="17" r="7" fill="#1E232A" stroke="#3F3F46" strokeWidth="1.5" />
            <circle cx="28.5" cy="15.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
            {/* Lens 2 */}
            <circle cx="62" cy="17" r="7" fill="#1E232A" stroke="#3F3F46" strokeWidth="1.5" />
            <circle cx="60.5" cy="15.5" r="1.5" fill="#FFFFFF" opacity="0.6" />
            {/* Flash on right */}
            <circle cx="145" cy="17" r="4.5" fill="#F7F3EB" stroke="#71717A" strokeWidth="1" />
          </g>
        );

      case 'oneplus-round':
        // Circular Hasselblad / watch-dial style camera housing
        return (
          <g transform="translate(42, 22)" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.35))">
            <circle cx="58" cy="46" r="42" fill="#1C1819" stroke="#52525B" strokeWidth="2.5" />
            {/* 3 Lenses arranged in circle */}
            <circle cx="44" cy="34" r="9" fill="#0D0B0C" stroke="#71717A" strokeWidth="1.5" />
            <circle cx="72" cy="34" r="9" fill="#0D0B0C" stroke="#71717A" strokeWidth="1.5" />
            <circle cx="58" cy="58" r="9" fill="#0D0B0C" stroke="#71717A" strokeWidth="1.5" />
            <circle cx="58" cy="42" r="3.5" fill="#F7F3EB" />
          </g>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 400"
        className={`w-full h-auto drop-shadow-md transition-transform duration-300 ${
          showShadow ? 'hover:scale-[1.02]' : ''
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Clip path for the rounded rectangular phone case back */}
          <clipPath id={`phone-case-clip-${patternType}`}>
            <rect x="6" y="6" width="188" height="388" rx="34" />
          </clipPath>

          {/* Realistic Specular Reflection Gradient */}
          <linearGradient id="specular-gloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
          </linearGradient>

          {/* Outer Protective Bumper Ring Gradient */}
          <linearGradient id="bumper-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3F3F46" />
            <stop offset="50%" stopColor="#27272A" />
            <stop offset="100%" stopColor="#18181B" />
          </linearGradient>
        </defs>

        {/* 1. Outer Shock-Absorbing TPU Bumper */}
        <rect
          x="3"
          y="3"
          width="194"
          height="394"
          rx="37"
          fill="url(#bumper-grad)"
          stroke="#52525B"
          strokeWidth="1.2"
        />

        {/* 2. Side Button Ridges (Authentic iPhone Profile: Action Button, Volume Rocker, Power & Camera Control) */}
        <rect x="0" y="44" width="3" height="18" rx="1.5" fill="#71717A" />
        <rect x="0" y="78" width="3" height="34" rx="1.5" fill="#71717A" />
        <rect x="0" y="122" width="3" height="34" rx="1.5" fill="#71717A" />
        <rect x="197" y="90" width="3" height="48" rx="1.5" fill="#71717A" />
        {/* iPhone 16 Recessed Capacitive Camera Control Button */}
        <rect x="197" y="270" width="3" height="26" rx="1.5" fill="#52525B" />

        {/* 3. Main Printed Polycarbonate Artwork Surface */}
        <g clipPath={`url(#phone-case-clip-${patternType})`}>
          {renderPattern()}

          {/* Optional Interactive Stickers Layer */}
          {stickers.map((stk, i) => {
            if (stk === 'smiley-flower') {
              return (
                <g key={i} transform="translate(130, 270) rotate(12)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
                  {/* Daisy Petals */}
                  {[0, 60, 120, 180, 240, 300].map(deg => (
                    <circle key={deg} cx={Math.cos((deg*Math.PI)/180)*14} cy={Math.sin((deg*Math.PI)/180)*14} r="9" fill="#FFFFFF" stroke="#1C1819" strokeWidth="1.2" />
                  ))}
                  {/* Center Core */}
                  <circle cx="0" cy="0" r="10" fill="#E5A93B" stroke="#1C1819" strokeWidth="1.5" />
                  {/* Smiling Face */}
                  <circle cx="-3" cy="-2" r="1.5" fill="#1C1819" />
                  <circle cx="3" cy="-2" r="1.5" fill="#1C1819" />
                  <path d="M-4,3 Q0,7 4,3" stroke="#1C1819" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </g>
              );
            }
            if (stk === 'drop-shield') {
              return (
                <g key={i} transform="translate(25, 230) rotate(-8)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
                  <rect x="0" y="0" width="58" height="20" rx="4" fill="#1C1819" stroke="#E5A93B" strokeWidth="1.2" />
                  <text x="29" y="13" textAnchor="middle" fill="#E5A93B" fontSize="6" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" letterSpacing="0.5">
                    8FT DROPTES
                  </text>
                </g>
              );
            }
            if (stk === 'vintage-stamp') {
              return (
                <g key={i} transform="translate(125, 130) rotate(6)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))">
                  <rect x="0" y="0" width="46" height="34" rx="2" fill="#F7F4EE" stroke="#691728" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="23" y="14" textAnchor="middle" fill="#691728" fontSize="6" fontFamily="Playfair Display, serif" fontWeight="bold">
                    CAZELLE
                  </text>
                  <text x="23" y="24" textAnchor="middle" fill="#691728" fontSize="4.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600">
                    AIR MAIL · 26
                  </text>
                </g>
              );
            }
            if (stk === 'handle-with-care') {
              return (
                <g key={i} transform="translate(35, 305) rotate(-4)" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))">
                  <rect x="0" y="0" width="70" height="18" rx="2" fill="#C82845" />
                  <text x="35" y="12" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="bold" letterSpacing="1">
                    ★ HANDLE WITH STYLE ★
                  </text>
                </g>
              );
            }
            return null;
          })}

          {/* Cazelle Subtle Brand Foil Stamp at bottom */}
          <g transform="translate(100, 368)">
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fontSize="7"
              fontFamily="Playfair Display, Georgia, serif"
              fontWeight="600"
              letterSpacing="3"
              fill="rgba(255, 255, 255, 0.75)"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            >
              CAZELLE · PARIS
            </text>
          </g>

          {/* Subtle Tactile Sheen Overlay */}
          <rect
            x="6"
            y="6"
            width="188"
            height="388"
            fill="url(#specular-gloss)"
            pointerEvents="none"
          />
        </g>

        {/* 4. Raised Camera Bevel & Lens Modules (Adapts by Phone Model) */}
        {renderCameraCutout()}

        {/* 5. Inner Edge Raised Bevel Ring */}
        <rect
          x="6"
          y="6"
          width="188"
          height="388"
          rx="34"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.5"
          pointerEvents="none"
        />
      </svg>

      {/* Model Name Floating Label when active */}
      {modelName && (
        <span className="sr-only">
          Custom fit for {modelName}
        </span>
      )}
    </div>
  );
};
