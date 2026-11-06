import React from 'react';
import katex from 'katex';

interface MathProps {
  tex: string;
  block?: boolean;
  className?: string;
}

export const Math: React.FC<MathProps> = ({ tex, block = false, className = '' }) => {
  const html = React.useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: block,
        throwOnError: false,
        strict: false,
        trust: true,
      });
    } catch {
      return tex;
    }
  }, [tex, block]);

  if (block) {
    return (
      <div
        className={`my-2 overflow-x-auto ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
