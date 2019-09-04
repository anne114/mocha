export function add (a, b) {
  return a + b;
}
export async function asyncFn () {
  let a = 2;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('::???');
      a += 4;
      resolve();
    }, 1000);
  });
  console.log(':::aaa', a);
  return a;
}
// console.log(asyncFn());
