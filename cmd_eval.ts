// console.log(await Deno.readTextFile('./test_env.env'))
export const cmd = Deno.args[0];
// console.log(cmd);
try {
  eval(cmd);
} catch {
  console.log(`cmd fail: ${cmd}`);
}
