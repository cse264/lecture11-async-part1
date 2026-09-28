# Lecture 11 In-Class Activity: Async JavaScript, Part 1

Work with a partner. We'll stop three times during class to go over what people found, so when you get to a **Stop** line, finish what you're typing and wait for everyone else before moving on.

Each part has its own file. Run them from the terminal one at a time, for example `node part1.js`. You don't need a browser today.

## Part 1: Timers (about 5 minutes)

In `part1.js`, write three lines:

1. Log `"start"`.
2. Use `setTimeout` to log `"timer"` after 2000 milliseconds.
3. Log `"end"`.

Run it. Then change the delay from 2000 to 0 and write down your guess in a comment before you run it again: now that the timer has no delay at all, where does `"timer"` show up?

**Stop.** Be ready to say what you guessed for the 0 delay, what actually happened, and why you think it came out that way.

## Part 2: Making and using a promise (about 7 minutes)

`part2.js` has an `orderPizza` function that's partly written. It returns a promise that waits one second and then either succeeds or fails.

1. Finish the inside of the `setTimeout` so the promise resolves with `"Pizza is here!"` when `success` is true, and rejects with `"Sorry, we're out of cheese."` when it's false.
2. Below the function, call `orderPizza` and handle the result with `.then()`, `.catch()`, and `.finally()`. Have each one log something so you can tell which ones ran.
3. Right after your call to `orderPizza`, add `console.log("Ordering...")`.

For step 2, I'll split the room. One half calls `orderPizza(true)`. The other half calls `orderPizza(false)`. Don't look at the other half's screen yet.

**Stop.** Be ready to read out exactly what printed, in order. We'll compare the two halves.

## Part 3: Promise vs. timer (about 6 minutes)

`part3.js` already has four lines in it. Don't run it yet. With your partner, write down in a comment what order you think `A`, `B`, `C`, and `D` will print in. Then run it.

Once you've seen the real order, try this: without changing or moving any of the four existing lines, add **one** new line at the bottom that makes the letter `E` print between `C` and `B`.

**Stop.** Be ready to share your guess, the real order, and the line you added for `E`.

## If you finish a part early

Stay on the part you're on and try one of these:

- In Part 2, log the promise itself right after you create it, then log it again from inside a `setTimeout` two seconds later. What's different between the two?
- In Part 2, what happens if the promise calls `resolve` and then `reject` right after? Which one wins?
- Write a small function `wait(ms)` that returns a promise which resolves after `ms` milliseconds. Use it to print `"one"`, `"two"`, and `"three"` one second apart, without nesting any `setTimeout` calls inside each other.

## Before you leave

Make sure both of your names are at the top of each file, then commit and push before the end of class.
