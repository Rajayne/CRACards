# React Cards

Cards exercise to practice custom hooks.

## Step One: Read the Code

1. Download the app
2. Draw out the component heirarchy

> Uses Deck of Cards API and Pokemon API to generate different types of cards on the same page.

## Step Two: useFlip

Both Card components can be flipped over when clicked using duplicate code.

1. Create a hooks.js file in src/
2. Write custom hook `useFlip` which will hold the logic for flipping any card.
3. Should return an array with two elements:

- the current flip state of the card
- a function that will toggle the flip state.

> useFlip shouldn't take any arguments

4. Refactor PokemonCard and PlayingCard to use this custom hook.

## Step Three: useAxios in PlayingCardList

1. Move logic from PlayingCardList into a function called useAxios.
2. Should initialize an empty array in state and add to it via an AJAX axios request.
3. Should return an array with two elements:

- an array of data obtained from previous AJAX requests
- a function that will add a new object of data to our array.

> useAxios should take a URL argument

4. Refactor PlayingCardList to use this custom hook.

## Step Four: useAxios in PokeDex

PokeDex also make AJAX requests, but this one’s a bit trickier. PlayingCardList makes a request to the same endpoint every time, but the endpoint in PokeDex depends on the name of the pokemon.

1. Modify the useAxios hook to use a base url, and only when adding to the array of response data in state, can take the rest of the url.
2. Refactor PokeDex to use useAxios.

> Make sure PlayingCardList still works too!

## Further Study: Removing response data

1. Add two buttons to the page:

- one that will erase all playing cards in state
- one that will erase all pokemon cards.

> **Hint:** Give useAxios a third element in its return array: a function that will remove everything from the array in state.

## Further Study: Minimizing state

The original application threw all of the response data into state, even though we didn’t use all of it. For example, we only need an image url from the Deck of Cards API, and the Pokemon API gives us a ton of data we don’t need.

One way to avoid throwing all of this information in state is to pass a formatting function to useAxios. This function should take the response data and extract only the information we need to render our component.

1. Write two formatting functions

- one for our playing card
- one for our Pokemon card

2. Refactor useAxios to accept a formatting function.

## Further Study: useLocalStorage hook

1. Build a custom hook called useLocalStorage which works like useState, except it also syncs to local storage after every state change, and tries to read from local storage when the component renders.

2. useLocalStorage should accept two arguments

- a key, corresponding to the key in local storage.
- an initial value to put into local storage (assuming no value already exists).

3. Refactor useAxios to use useLocalStorage instead of useState.
