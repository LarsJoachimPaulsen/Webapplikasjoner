/*
  new Intl.RelativeTimeFormat(
    "nb", {
      localeMatcher: "best fit", // "lookup"
      numeric: "always", // "auto" (not always uses numeric values in the output)
      style: "long", // "short" or "narrow" (some locales: short == narrow)
  });

  Units: "year", "quarter", "month", "week", "day", "hour", "minute", "second"
*/

let rtf;

console.log('NB: Numeric "always", Style "long"');
rtf = new Intl.RelativeTimeFormat('nb', { numeric: 'always', style: 'long' });
console.log(rtf.format(-1, 'day')); // for 1 døgn siden
console.log(rtf.format(0, 'day')); // om 0 døgn
console.log(rtf.format(1, 'day')); // om 1 døgn
console.log(rtf.format(1, 'week')); // om 1 uke


console.log('NB: Numeric "auto", Style "long"');
rtf = new Intl.RelativeTimeFormat('nb', { numeric: 'auto', style: 'long' });
console.log(rtf.format(-1, 'day')); // i går
console.log(rtf.format(0, 'day')); // i dag
console.log(rtf.format(1, 'day')); // i morgen
console.log(rtf.format(-1, 'month')); // forrige måned
console.log(rtf.format(1, 'year')); // neste år


console.log('NB: Numeric "auto", Style "short"');
rtf = new Intl.RelativeTimeFormat('nb', { numeric: 'auto', style: 'short' });
console.log(rtf.format(-1, 'month')); // forrige md.
console.log(rtf.format(1, 'year')); // neste år

