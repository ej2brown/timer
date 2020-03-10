const args = process.argv.slice(2);
const timers = args;

for (const time of timers) {
  setTimeout(() => {
    process.stdout.write('\x07');
    }, time * 1000)
} 

