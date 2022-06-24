#!/usr/bin/env node


//..........................................................
//..........JJJJJJ.........AAAAAAA....AAAAYYY.......YYYYYY..
//..........JJJJJJ.........AAAAAAAA...AAAAYYY.......YYYYYY..
//..........JJJJJJ........AAAAAAAAA....AAAYYYY.....YYYYYYY..
//..........JJJJJJ........AAAAAAAAA.....AAYYYY.....YYYYYY...
//..........JJJJJJ.......AAAAAAAAAAA....AAYYYYY...YYYYYYY...
//..........JJJJJJ.......AAAAAAAAAAA.....AYYYYYY.YYYYYYY....
//..........JJJJJJ.......AAAAAAAAAAAA....AYYYYYY.YYYYYY.....
//..........JJJJJJ......AAAAAA.AAAAAA.....YYYYYYYYYYYYY.....
//..........JJJJJJ......AAAAAA.AAAAAA......YYYYYYYYYYY......
//..........JJJJJJ......AAAAA...AAAAAA.....YYYYYYYYYYY......
//..........JJJJJJ.....AAAAAA...AAAAAA......YYYYYYYYY.......
//..........JJJJJJ.....AAAAAA...AAAAAA.......YYYYYYY...9039.
//..........JJJJJJ....AAAAAA.....AAAAAA......YYYYYYY........
//..........JJJJJJ....AAAAAAAAAAAAAAAAA.......YYYYY.........
//.JJJJJ....JJJJJJ....AAAAAAAAAAAAAAAAA.......YYYYY.........
//.JJJJJJ...JJJJJJ...AAAAAAAAAAAAAAAAAAA......YYYYY.........
//.JJJJJJ...JJJJJJ...AAAAAAAAAAAAAAAAAAA......YYYYY.........
//.JJJJJJJ.JJJJJJJ...AAAAAA.......AAAAAAA.....YYYYY.........
//.JJJJJJJJJJJJJJ...AAAAAA.........AAAAAA.....YYYYY.........
//..JJJJJJJJJJJJJ...AAAAAA.........AAAAAA.....YYYYY.........
//...JJJJJJJJJJJ...JAAAAAA.........AAAAAAA....YYYYY.........
//....JJJJJJJJJ....JAAAAA...........AAAAAA....YYYYY.........
//..........................................................


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'Let`s Play Noder \n'
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO PLAY')} 
    Hello! I am Noder.
    If you do any question wrong I will be ${chalk.bgRed('killed')}
    So get all the questions right...

  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  } else {
    spinner.error({ text: `💀💀💀 Game over, you phakinn Noob ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} !\n You Won ♥`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Programming isn't about what you know; Bas Hackerman wali Feel aani Chaiye`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'Do You Know Jay Sharma?\n',
    choices: [
      'Yes',
      'No'
    ],
  });

  return handleAnswer(answers.question_1 === 'Yes');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'What do you think about him ?\n',
    choices: ['"He is very annoying and irritating fool."', '"He is smart-cool-lovable, He is Just Awesome ♥"'],
  });
  return handleAnswer(answers.question_2 === '"He is smart-cool-lovable, He is Just Awesome ♥"');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: `Does you think, he need to lose some fat to look good?\n`,
    choices: ['No, He`s already to hard to handle!', 'No'],
  });

  return handleAnswer(answers.question_3 === 'No, He`s already to hard to handle!');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Does he have 6-pack Abs?\n',
    choices: [
      'Yes',
      'No',
       // Correct
    ],
  });
  return handleAnswer(answers.question_4 === 'Yes');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message:
      'JS is shortform of Jay Sharma or JavaScript?',
    choices: ['JavaScript', 'Jay-Sharma'],
  });

  return handleAnswer(answers.question_5 === 'Jay Sharma');
}

// Run it with top-level await
console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
winner();