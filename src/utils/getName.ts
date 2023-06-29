export const getName = () => {
  const args = process.argv.slice(2);
  const prefix = '--username';
  const [,userName] = args.filter((arg) => arg.startsWith(prefix)).join().split('=');

  return userName;
}
