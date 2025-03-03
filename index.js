const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config');

// Set up Discord client with intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Set up Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Endpoint to get user info by Discord ID
app.get('/get_user_info', async (req, res) => {
  const discordId = req.query.discord_id;

  if (!discordId) {
    return res.status(400).json({ error: 'No Discord ID provided' });
  }

  try {
    // Fetch the user info from Discord using the Discord ID
    const user = await client.users.fetch(discordId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return the user info
    return res.json({
      username: user.username,
      discriminator: user.discriminator,
      avatar_url: user.avatarURL() || null,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch user data' });
  }
});

// Log in to Discord with your bot token
client.login(config.botToken).then(() => {
  console.log('Bot logged in successfully');

  // Start Express server after bot is logged in
  app.listen(config.port, config.ip, () => {
    console.log(`API server running on http://${config.ip}:${config.port}`);
  });
});
