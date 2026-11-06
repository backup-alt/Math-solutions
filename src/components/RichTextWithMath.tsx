import React from 'react';
import { Math } from './Math';

interface RichTextWithMathProps {
  text: string;
  className?: string;
}

export const RichTextWithMath: React.FC<RichTextWithMathProps> = ({ text, className = '' }) => {
  const parts = React.useMemo(() => {
    const segments: { isMath: boolean; value: string }[] = [];
    const regex = /\$([^$]+)\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        segments.push({ isMath: false, value: text.slice(lastIndex, match.index) });
      }
      segments.push({ isMath: true, value: match[1] });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      segments.push({ isMath: false, value: text.slice(lastIndex) });
    }

    return segments;
  }, [text]);

  return (
    <span className={className}>
      {parts.map((part, idx) =>
        part.isMath ? (
          <Math key={idx} tex={part.value} />
        ) : (
          <React.Fragment key={idx}>{part.value}</React.Fragment>
        )
      )}
    </span>
  );
};
