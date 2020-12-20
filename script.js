//Object containing three arrays with outdoor, motivational and fitness quotes
const quotes = {
    outdoors: ['Waking up early on a weekend to hit the trail is a sacrifice made well worth it when you reach a mountain top in time to catch the sunrise.', 'When you are hiking through a forest, you have the chance to see the natural world up close.', 'Modern life has made the draw of home stronger than ever, but taking the time to unplug and hit the trail is the perfect way to reset and reassess your priorities.', 'The good tidings of the mountains are a real thing, just ask any thru-hiker, backpacker, or climber.', 'We agree with Muir, we get a lot more than a great workout out of every hike we take. '],
    motivational: ['The harder I work, the luckier I get', 'The Best Way To Get Started Is To Quit Talking And Begin Doing.', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.', 'Don’t Let Yesterday Take Up Too Much Of Today.', 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.'],
    fitness: ['Today I will do what others won’t, so tomorrow I can accomplish what others can’t.', 'Do something today that your future self will thank you for.', 'We are what we repeatedly do. Excellence then is not an act but a habit.', 'No matter how slow you go, you are still lapping everybody on the couch.', 'Sweat is fat crying.']
}

//Returns random quote from array
const randomQuote = (quote) => {
   let randomIndex = Math.floor(Math.random() * 5);
   quote = quote[randomIndex];
   return{
       quote
   };
}

//Store quotes in an array
let quotesToPost = [];

//Function to output the random quote generated
const quoteGenerator = (quote) => {
    let outdoorQuote = randomQuote(quote.outdoors);
    let motivationalQuote = randomQuote(quote.motivational);
    let fitnessQuote = randomQuote(quote.fitness);
    return {
        outdoorQuote, motivationalQuote, fitnessQuote
    }  
}

//Test to make sure randomQuote works
/*console.log(randomQuote(quotes.outdoors));
console.log(randomQuote(quotes.motivational));
console.log(randomQuote(quotes.fitness));*/

//Test to see if quoteGenerator works
console.log(quoteGenerator(quotes));