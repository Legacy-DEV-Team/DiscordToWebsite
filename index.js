const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./config');

// Set up Discord client with necessary intents
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
app.use(express.json());

// Endpoint to get user info by Discord ID
app.get('/get_user_info', async (req, res) => {
  const { discord_id, discord_guild_id } = req.query;

  if (!discord_id && !discord_guild_id) {
    return res.status(400).json({ error: 'No Discord ID or Guild ID provided' });
  }

  try {
    if (discord_id) {
      const user = await client.users.fetch(discord_id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      return res.json({
        username: user.globalName || user.username,
        avatar_url: user.avatarURL() || null,
      });
    }

    if (discord_guild_id) {
      const guild = await client.guilds.fetch(discord_guild_id);
      if (!guild) return res.status(404).json({ error: 'Guild not found' });
      
      const members = await guild.members.fetch();
      const memberData = {};

      members.forEach(member => {
        memberData[member.id] = {
          discord_id: member.id,
          discord_member_since: member.user.createdAt,
          guild_member_since: member.joinedAt,
          roles: member.roles.cache.map(role => ({
            role_id: role.id,
            role_name: role.name,
          })),
        };
      });

      return res.json({
        guild_discord_id: discord_guild_id,
        members_count: members.size,
        members: memberData,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to fetch data' });
  }
});

client.login(config.botToken).then(() => {
  console.log('Bot logged in successfully');
  app.listen(config.port, config.ip, () => {
    console.log(`API server running on http://${config.ip}:${config.port}`);
  });
}).catch(error => {
  console.error('Bot login failed:', error);
});
