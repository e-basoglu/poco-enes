/* The world translator
Write a function named helloWorld that:
Takes 1 argument, a language code (e.g. "es", "de", "en")
Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works */




function HelloWorld (){

let userInput = prompt('Enter the language code that you want to translate "Hello, World" to the language code you desired (e.g., en, es, tr, de):');

  switch (userInput) {
    case 'en':
      alert('Hello, World');
      break;
    case 'es':
      alert('Hola, Mundo');
      break;
    case 'tr':
      alert('Merhaba Dünya');
      break;
    case 'de':
      alert('Hallo Welt');
      break;
    default:
      alert('Hello, World');
      break;
  }
}

HelloWorld();
    