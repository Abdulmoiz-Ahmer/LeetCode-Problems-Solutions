function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  const lastSeen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (lastSeen.has(char) && lastSeen.get(char) >= start) {
      start = lastSeen.get(char) + 1;
    }
    lastSeen.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
