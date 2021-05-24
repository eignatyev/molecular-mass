export function readFormulaInput(): string {
    const {
        argv: [, , formula],
    } = process;

    if (typeof formula === 'undefined') {
        throw new Error(
            '\n\nNo formula argument provided. Usage example:\nmolecular-mass C20H25N3O\n',
        );
    }

    return formula;
}
