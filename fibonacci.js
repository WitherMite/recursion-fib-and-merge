console.log(fibsRec(8));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(20));
console.log(fibsRec(-1));
console.log(fibsRec("8"));
console.log(fibsRec(null));
console.log(fibsRec());

function fibs(length) {
  if (!(typeof length === "number") || length < 0) return "Invalid argument";

  const sequence = [0, 1];
  if (length <= sequence.length) return sequence.slice(0, length);
  for (let i = sequence.length; i < length; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
  }
  return sequence;
}

function fibsRec(length) {
  if (!(typeof length === "number") || length < 0) return "Invalid argument";

  const firstFibs = [0, 1];
  if (length <= firstFibs.length) return firstFibs.slice(0, length);

  const prevFibs = fibsRec(length - 1);
  const nextFib = prevFibs.at(-1) + prevFibs.at(-2);
  return [...prevFibs, nextFib];
}
