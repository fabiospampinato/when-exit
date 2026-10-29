# WhenExit

Execute a function right before the process, or the browser's tab, is about to exit.

## Install

```sh
npm install when-exit
```

## Usage

```ts
import whenExit from 'when-exit';

// Registering multiple callbacks

onExit ( () => {
  console.log ( 'Callback 1' );
});

onExit ( () => {
  console.log ( 'Callback 2' );
});

// Registering and disposing a callback

const disposer = onExit ( () => {
  console.log ( 'Callback 3' );
});

disposer ();

// Triggering the process to exit

process.exit (); // Callback 1 and 2 are called before exiting
```

## Signals

`SIGTRAP`, `SIGABRT`, `SIGIOT`, `SIGBUS`, `SIGFPE`, `SIGILL`, `SIGSEGV` and `SIGSYS` are not intercepted because native fatal errors cannot reliably run JavaScript cleanup. Cleanup callbacks do not run for direct termination by these signals, including externally sent signals.

## License

MIT © Fabio Spampinato
