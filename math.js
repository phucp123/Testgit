// Named exports
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}

export const multiply = (a, b) => a * b;

// Default export
export default function greet(name) {
  console.log(`Xin chào ${name}!`);
}
