
/* IMPORT */

import assert from 'node:assert/strict';

import onExit from '../dist/node/index.js';

/* MAIN */

for ( const signal of ['SIGTRAP', 'SIGABRT', 'SIGIOT', 'SIGBUS', 'SIGFPE', 'SIGILL', 'SIGSEGV', 'SIGSYS'] ) {

  assert.equal ( process.listenerCount ( signal ), 0, signal );

}

//TODO: This module should really be tested better than this

onExit ( () => {

  console.log ( 'Callback 1' );

});

onExit ( () => {

  console.log ( 'Callback 2' );

});

const disposer = onExit ( () => {

  console.log ( 'Callback 3' );

});

disposer ();

console.log ( 'Ready' );

setTimeout ( () => {

  process.exit ();
  // process.kill ( process.pid, 'SIGTERM' );

}, 2000 );
