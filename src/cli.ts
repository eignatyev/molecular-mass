#!/usr/bin/env node
import { calculateMolecularMass } from './calculateMolecularMass';
import { readFormulaInput } from './readFormulaInput';

/* istanbul ignore next */
(async (): Promise<void> => {
    const formula = readFormulaInput();

    const result = calculateMolecularMass(formula);
    const roundedResult = Math.round(result * 100) / 100;

    // eslint-disable-next-line no-console
    console.log(roundedResult);
})();
