export function test(result, expected) {
  if (result !== expected) {
    console.log(`❤️ ${result}`);
    return;
  }

  console.log(`💚 ${result}`);
}