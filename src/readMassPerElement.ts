import parse from 'csv-parse/lib/sync';

export function readMassPerElement(stringData: string): Map<string, number> {
    return new Map(parse(stringData, { delimiter: ',' }) as [string, number][]);
}
