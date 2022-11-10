const button = document.querySelector("button");
const span = document.querySelector("p");
button.addEventListener('click', changeQuote);

var quotes = [
"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. Sheryl Sandberg",
"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end. Aristotle",
"If the wind will not serve, take to the oars. Latin Proverb",
"You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground. Unknown",
"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained. Marie Curie",
"Too many of us are not living our dreams because we are living our fears. Les Brown",
"Challenges are what make life interesting and overcoming them is what makes life meaningful. Joshua J. Marine",
"If you want to lift yourself up, lift up someone else. Booker T. Washington",
"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. Leonardo da Vinci",
"Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless. Jamie Paolinetti",
"You take your life in your own hands, and what happens? A terrible thing, no one to blame. Erica Jong",
"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do. Bob Dylan",
"I didn’t fail the test. I just found 100 ways to do it wrong. Benjamin Franklin",
"In order to succeed, your desire for success should be greater than your fear of failure. Bill Cosby",
"A person who never made a mistake never tried anything new.  Albert Einstein",
"The person who says it cannot be done should not interrupt the person who is doing it. Chinese Proverb",
"There are no traffic jams along the extra mile. Roger Staubach",
"It is never too late to be what you might have been. George Eliot",
"You become what you believe. Oprah Winfrey",
"I would rather die of passion than of boredom. Vincent van Gogh",
"A truly rich man is one whose children run into his arms when his hands are empty. Unknown",
"It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings. Ann Landers",
"If you want your children to turn out well, spend twice as much time with them, and half as much money. Abigail Van Buren",
"Build your own dreams, or someone else will hire you to build theirs. Farrah Gray",
"The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at. Jesse Owens",
"Education costs money.  But then so does ignorance. Sir Claus Moser",
"I have learned over the years that when one’s mind is made up, this diminishes fear. Rosa Parks",
"It does not matter how slowly you go as long as you do not stop. Confucius",
"If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. Oprah Winfrey",
"Remember that not getting what you want is sometimes a wonderful stroke of luck. Dalai Lama",
"You can’t use up creativity.  The more you use, the more you have. Maya Angelou",
"Dream big and dare to fail. Norman Vaughan",
"Our lives begin to end the day we become silent about things that matter. Martin Luther King Jr.",
"Do what you can, where you are, with what you have. Teddy Roosevelt",
"If you do what you’ve always done, you’ll get what you’ve always gotten. Tony Robbins",
"Dreaming, after all, is a form of planning. Gloria Steinem",
"It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live. Mae Jemison",
"You may be disappointed if you fail, but you are doomed if you don’t try. Beverly Sills",
"Remember no one can make you feel inferior without your consent. Eleanor Roosevelt",
"Life is what we make it, always has been, always will be. Grandma Moses",
"The question isn’t who is going to let me; it’s who is going to stop me. Ayn Rand",
"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. Henry Ford",
"It’s not the years in your life that count. It’s the life in your years. Abraham Lincoln",
"Change your thoughts and you change your world. Norman Vincent Peale",
"Either write something worth reading or do something worth writing. Benjamin Franklin",
"Nothing is impossible, the word itself says, “I’m possible!” –Audrey Hepburn",
"The only way to do great work is to love what you do. Steve Jobs",
"If you can dream it, you can achieve it. Zig Ziglar"
];

function changeQuote(){
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	span.innerHTML = quotes[randomNumber];
	console.log(quotes[randomNumber]);
};


