# Conateta Slack Bot

A 24/7 Slack bot that responds to custom commands with facts, jokes, latency checks, and helpful guides! Built for Hack Club.

## Features
❓ /conateta-help: View the full list of available commands and instructions.

⚡ /conateta-ping: Quickly check the bot's latency and responsiveness.

🐱 /conateta-catfact: Fetch a fun, interesting cat fact on demand.

🐊 /conateta-joke: Get a quick pun/joke to lighten up the channel.

🚀 24/7 Uptime: Hosted on Nest so it never slacks off!

## Built With

* Programming Language: JavaScript
* Runtime/Environment: Node.js
* Framework/SDK: Slack bolt for JavaScript
* APIs: External APIs for fetching cat facts and jokes 
* Hosting Platform: Nest (24/7 uptime)

## Quick start and Local Setup

### Prerequisites

* Node.js (v18 or higher)
* A Slack App with App-Level Tokens (`xapp-...`) and Bot Tokens (`xoxb-...`) configured with Socket Mode enabled.

### Environment Variables

Create a `.env` file in the root directory and add your Slack credentials:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token 
SLACK_APP_TOKEN=xapp-your-app-token
```
### Running Locally

1. **Clone & Install Dependencies:**
```bash
git clone https://github.com/wardazahoor4-boop/conateta-slack-bot.git
cd conateta-slack-bot
npm install
```
2. **Start the Bot**
```bash
node index.js
```


