function chai(size: string | number) {
  if (typeof size === "string") {
    return `give me ${size} chai`;
  } else if (typeof size === "number") {
    return `I want ${size} chai`;
  }
  return `No chai !`;
}
