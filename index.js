require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

// --- COMMANDS ---

// 1. Ping Command
app.command("/conateta-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong! \n Latency: ${latency}ms` });
});

// 2. Help Command
app.command("/conateta-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text: `Available Commands:
/conateta-ping - Check bot latency
/conateta-catfact - Get a cat fact
/conateta-joke - Get a joke`
  });
});

// 3. Cat Fact Command
app.command("/conateta-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

// 4. Joke Command
app.command("/conateta-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({ 
      text: `${response.data.setup}\n${response.data.punchline}` 
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

// --- START APP AT THE BOTTOM ---
(async () => {
  await app.start();
  console.log("⚡️ Bot is running!");
})();