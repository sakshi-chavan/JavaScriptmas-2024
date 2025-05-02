<h2>Challenge</h2>
<p>
  Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
  <ul>
    <li>The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.</li>
    <li>At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -</li>
    <li>The player selects a letter. </li>
    <li>If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.</li>
    <li>If the selected letter does not appear in the word, one part of the snowman gets removed.</li>
    <li>If the player guesses the entire word, they win! </li>
    <ul>
      <li>any removed parts of the snowman are reinstated.</li>
      <li>the snowman gets sunglasses</li>
      <li>the message "You Win!" is displayed in the "guess-container" div.</li>
    </ul>
    <li>If the player guesses wrong 6 times: </li>
    <ul>
      <li>only a puddle remains.</li>
      <li>the message "You Lose!" is displayed in the "guess-container" div.</li>
    </ul>   
  </ul>
  Stretch Goals:

  <ul>
    <li>Disable the letter button once a letter has been used.</li>
    <li>Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)</li>
  </ul>
</p>

<br>
<h2>Solution</h2>

<a href="https://scrimba.com/s06j5ju/s0i2ogl4be/head">Day 08 - Seasonal Hangman</a>

![Screenshot 2025-05-01 145304](https://github.com/user-attachments/assets/68788f50-a703-4a4c-b92a-9fc843f236b1)
