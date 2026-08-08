# Conateta Slack Bot

a slack bot that responds to certain commands for 24/7.

## features
For now i made 4 commands which are:

/conateta-help: View full list of available commands

/conateta-ping: Check bot's latency

/conateta-catfact: Get a random fact about cats

/conateta-joke: Get a random quick joke

## about this project
this is a simple slack bot that i created for hackclub slack workspace. I wanted to build something simple so i focused on making 4 core commands that handle basic info and fun API stuff directly inside slack.

## why i made it
I really wanted to learn how real world bots work under the hood and how APIs actually connect to slack. Building this helped me figure out how to set up slash commands in Node.js, fetch data from external APIs, process user inputs, and keep everything running smoothly.

## how to use the bot
The bot is already installed and running in the Hack Club Slack workspace.
To use it:
Open Slack and head over to the #bot-spam.
Type any of the slash commands into the chat bar and hit send:

/conateta-help: shows you the full list of commands

/conateta-ping: checks if the bot is online and how fast it responds

/conateta-catfact: sends a random cat fact

/conateta-joke: sends a quick joke

## setup
if you want to run your own instance of bot:

clone the repository

git clone https://github.com/wardazahoor4-boop/conateta-slack-bot

install independencies 

npm install

set up your environment variables:

create a .env file in the root directory and add your slack tokens:

SLACK_BOT_TOKEN=your_token

SLACK_APP_TOKEN=your_token

run the bot:

node index.js

## what i learned

i learned a lot about how apis and backend stuff actually work behind the scenes. building this taught me how to set up slash commands in node.js using slack bolt, fetch live data from external apis for the jokes and cat facts, keep api keys safe using .env files, and host the code on a server so the bot stays online 24/7.


