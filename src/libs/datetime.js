export function dbTimeForHuman(str) {
  return str.replace("T", "  ").substr(0, 17);
}
