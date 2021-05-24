const ELEMENT_REG_EX = /^([A-Z][a-z]?)(\d+)?/;

export function calculateMolecularMass(
    formula: string,
    massPerElement: Map<string, number>,
): number {
    const match = formula.match(ELEMENT_REG_EX);

    if (match !== null) {
        const [elementFormula, element, atomsCount] = match;

        const multiplier =
            typeof atomsCount === 'undefined' ? 1 : Number(atomsCount);

        if (massPerElement.has(element)) {
            const elementMass = massPerElement.get(element) as number;
            return (
                elementMass * multiplier +
                calculateMolecularMass(
                    formula.slice(elementFormula.length),
                    massPerElement,
                )
            );
        }

        throw new Error(`\n\ninvalid element formula: "${elementFormula}"\n`);
    }

    return 0;
}
