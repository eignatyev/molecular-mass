import { promises as fsPromises } from 'fs';
import { calculateMolecularMass } from './calculateMolecularMass';
import { readFormulaInput } from './readFormulaInput';
import { readMassPerElement } from './readMassPerElement';

/* istanbul ignore next */
(async (): Promise<void> => {
    const { readFile } = fsPromises;
    const PERIODIC_TABLE_PATH = `${__dirname}/amu-per-element.csv`;

    const formula = readFormulaInput();

    const massPerElement = readMassPerElement(
        await readFile(PERIODIC_TABLE_PATH, 'utf8'),
    );

    const result = calculateMolecularMass(formula, massPerElement);
    const roundedResult = Math.round(result * 100) / 100;

    // eslint-disable-next-line no-console
    console.log(roundedResult);
})();
