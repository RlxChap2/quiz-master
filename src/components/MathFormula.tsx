import React, { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathFormulaProps {
  formula: string;
  displayMode?: boolean;
}

export const MathFormula: React.FC<MathFormulaProps> = ({ formula, displayMode = false }) => {
  useEffect(() => {
    katex.render(formula, document.getElementById(`formula-${formula}`)!, {
      displayMode,
      throwOnError: false
    });
  }, [formula, displayMode]);

  return <span id={`formula-${formula}`} className="math-formula" />;
};