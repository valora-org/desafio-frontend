export function convertFloatToUSD(value: number): string {
  return `$${value.toFixed(2)}`;
}
