/*function fn() {
  console.log('ciao')
}*/

try {
  fn()
  console.log('ciao 1')
  console.log('ciao 2')
}
catch( err ) {
  console.log( 'si è verificato un errore, con messaggio: ' + err.message )
}

console.log('ciao')