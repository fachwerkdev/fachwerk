export function translate(
  x: number = 0,
  y: number = 0,
  unit?: undefined | "px" | "%"
): string {
  return `translate(${x}${unit ?? ""}, ${y}${unit ?? ""})`;
}

export function rotate(
  angle: number = 0,
  unit?: undefined | "deg" | "rad" | "turn"
): string {
  return `rotate(${angle}${unit ?? ""})`;
}

export function scale(scaleX: number = 1, scaleY?: number): string {
  return `scale(${scaleX}, ${scaleY || scaleX})`;
}

export function skewX(angle: number = 0): string {
  return `skewX(${angle})`;
}

export function skewY(anglec: number = 0): string {
  return `skewY(${angle})`;
}

export function matrix(
  a: number = 1, // scaleX
  b: number = 0, // skewY
  c: number = 0, // skewX
  d: number = 1, // scaleY
  e: number = 0, // translateX
  f: number = 0 // translateY
): string {
  return `matrix(${a} ${b} ${c} ${d} ${e} ${f})`;
}
