function romanToInt(s: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];

    if (romanMap[next] > romanMap[current]) {
      total -= romanMap[current];
    } else {
      total += romanMap[current];
    }
  }

  return total;
}
