<h2>Challenge</h2>
<p>
  You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.<br>
  For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.<br>
  In data.js you have an array of Christmas movies with emoji and text for aria labels.<br>
  Your task is to build an app that meets these criteria:<br>
  <ul>
    <li>The app should present the player with a set of emoji selected at random from the array in data.js. </li>
    <li>The player will input their guess.</li>
    <li>If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.</li>
    <li>If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”</li>
    <li>If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.</li>
    <li>When all films in the array have been used, the player should see a message saying "That's all folks!".</li>
    <li>Each film should only be used once. There should be no repetition.</li>
  </ul>
      Stretch Goals:
      <ul>
        <li>Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct.</li>
        <li>Improve the UX by disabling the form/button when the game is over and during the pause between questions.</li>
      </ul>
</p>
<br>

<h2>Solution</h2>

<a href="https://scrimba.com/s06j6h9/s0hh3a6mi7/head">Day 04 - Christmas Movie Emoji Quiz</a>

![Screenshot 2025-04-28 173523](https://github.com/user-attachments/assets/4ab22a62-b600-45db-a7bc-738f5c18d8bd)
