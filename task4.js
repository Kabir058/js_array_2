const statement = 'I am a hard working person'

let spl = statement.split(' ')
let rev= spl.reverse()
console.log(rev.join(' '))



const statement = 'I am a hard working person';
const words = statement.split(' ');
let reversed = '';

for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i];
    if (i !== 0) {
        reversed += ' ';
    }
}

console.log(reversed); // Output: person working hard a am I
