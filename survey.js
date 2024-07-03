const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("What is your name? ", (answer1) => {
  rl.question("What is an activity that you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? ", (answer7) => {
              
              // Here you could form and print the profile paragraph
              console.log(`\n${answer1} loves listening to ${answer3} while ${answer2}.
                ${answer1} loves ${answer5} for ${answer4}, and enjoys ${answer6} the most.
                ${answer1}'s superpower is ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});