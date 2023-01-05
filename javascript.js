var quotes = [
    'I choose what I become.',
    'I will attract what belongs to me',
    'I am talented and intelligent',
    'I am grateful for today',
    'I am worthy',
    'I can do anything I set my mind to :)',
    'I am motivated',
    'I am so beautiful and everyone knows it',
    'Everything is falling into place',
    'I am patient and hardworking, I am victorious',
    'I attract whatever I desire',
    'Money comes to me by just existing',
    'I am proud of everything Ive accomplished',
    'The universe is guiding me every day',
    'I am smart and beautiful',
    'I am an intelligent human',
    'My skin gets clearer every day',
    'My eating habits are getting better every day',
    'I make heads turn',
    'I learn and grow every day',
    'My mistakes do not define me',
    'I take accountability for my actions',
    'I am deserving of love',
    'My mind is unique and beautiful',
    'I wouldnt want to be anyone else but me',
    'I am confident and humble',
    'I not only uplift myself, but others',
    'I deserve to be heard, I will be',
    'My smile is beautiful',

    


]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));


document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}


