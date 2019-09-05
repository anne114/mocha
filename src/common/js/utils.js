export function add (a, b) {
  return a + b;
}
export async function asyncFn () {
  let a = 2;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      a += 4;
      resolve();
    }, 1000);
  });
  return a;
}
