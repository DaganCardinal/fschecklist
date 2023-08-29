export function toTitleCase(input: string): string {
  input = input.toLowerCase();
  return input.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

export function lbsToKg(lbs: number): number {
  return lbs / 2.2046;
}

export function kgToLbs(kg: number): number {
  return kg * 2.2046;
}

export function metersToFeet(meters: number): number {
  return meters * 3.2808;
}

export function feetToMeters(feet: number): number {
  return feet / 3.2808;
}

export function generateId(): string {
  const currTime = new Date().getTime().toString();
  const randomNum = Math.floor(Math.random() * 100000000).toString();
  return currTime + randomNum;
}
