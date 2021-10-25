export function connectClasses(classes: { [T in string]: boolean }): string {
  return Object.entries(classes)
    .filter(([, enable]) => enable)
    .map(([className]) => className)
    .join(" ");
}

export function joinClasses(classes: string[]): string {
  return classes.join(" ");
}
