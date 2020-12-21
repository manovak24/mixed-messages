//Object containing three arrays with outdoor, motivational and fitness quotes
const quotes = {
    outdoors: ['Waking up early on a weekend to hit the trail is a sacrifice made well worth it when you reach a mountain top in time to catch the sunrise.', 'When you are hiking through a forest, you have the chance to see the natural world up close.', 'Modern life has made the draw of home stronger than ever, but taking the time to unplug and hit the trail is the perfect way to reset and reassess your priorities.', 'The good tidings of the mountains are a real thing, just ask any thru-hiker, backpacker, or climber.', 'We agree with Muir, we get a lot more than a great workout out of every hike we take. '],
    motivational: ['The harder I work, the luckier I get.', 'The Best Way To Get Started Is To Quit Talking And Begin Doing.', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.', 'Don’t Let Yesterday Take Up Too Much Of Today.', 'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.'],
    fitness: ['Today I will do what others won’t, so tomorrow I can accomplish what others can’t.', 'Do something today that your future self will thank you for.', 'We are what we repeatedly do. Excellence then is not an act but a habit.', 'No matter how slow you go, you are still lapping everybody on the couch.', 'Sweat is fat crying.']
}

//Returns random number to select random quote
const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

//Store quotes in an array
let today = new Date();
let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
let quotesToPost = [`Today is ${date} and your potential quotes to use with your Instagram posts are as follows:`];

//Function to output the random quote generated
for (prop in quotes) {
    let optionIdx = randomNumber(quotes[prop].length)
    switch(prop) {
        case 'outdoors':
            quotesToPost.push(`Outdoor Quote - ${quotes[prop][optionIdx]}`)
            break
        case 'motivational':
            quotesToPost.push(`Motivational Quote - ${quotes[prop][optionIdx]}`)
            break
        case 'fitness':
            quotesToPost.push(`Fitness Quote - ${quotes[prop][optionIdx]}`)
            break
        default:
            quotesToPost.push(`Nothing to post today`)
    }
}

const formatQuote = () => {
    const formatted = quotesToPost.join('\n ')
    console.log(formatted)
}

formatQuote(quotesToPost);
