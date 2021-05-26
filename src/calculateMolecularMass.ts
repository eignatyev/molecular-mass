import { readFileSync } from 'fs';
import { readMassPerElement } from './readMassPerElement';

const PERIODIC_TABLE_PATH = `${__dirname}/amu-per-element.csv`;

const MASS_PER_ELEMENT = readMassPerElement(
    readFileSync(PERIODIC_TABLE_PATH, 'utf8'),
);

const ELEMENT_REG_EX = /^([A-Z][a-z]?)(\d+)?/;

export function calculateMolecularMass(formula: string): number {
    const match = formula.match(ELEMENT_REG_EX);

    if (match !== null) {
        const [elementFormula, element, atomsCount] = match;

        const multiplier =
            typeof atomsCount === 'undefined' ? 1 : Number(atomsCount);

        if (MASS_PER_ELEMENT.has(element)) {
            const elementMass = MASS_PER_ELEMENT.get(element) as number;
            return (
                elementMass * multiplier +
                calculateMolecularMass(formula.slice(elementFormula.length))
            );
        }

        throw new Error(`\n\ninvalid element formula: "${elementFormula}"\n`);
    }

    return 0;
}
