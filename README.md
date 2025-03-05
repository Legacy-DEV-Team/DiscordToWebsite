# Discord To Website

This project, **Discord To Website**, is a Node.js application developed by **Legacy DEV Team**. It provides an API to fetch user and guild member data from Discord, including roles with colors, join dates, and more.

## Features
- Fetch Discord user information based on the Discord ID.
- Retrieve guild member details, including roles and colors, join dates, and member count.
- Exposes an API to retrieve user and guild data via a simple HTTP request.
- Developed using **Node.js** with **discord.js** and **Express**.
- Easy to integrate into any web application.
- MIT License.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Legacy-DEV-Team/DiscordToWebsite.git
    cd DiscordToWebsite
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up your **config.js** file:
   ```javascript
   module.exports = {
     botToken: 'YOUR_BOT_TOKEN',
     port: 5000,
     ip: '0.0.0.0'
   };
   ```
   - Replace `'YOUR_BOT_TOKEN'` with your bot token from the [Discord Developer Portal](https://discord.com/developers/applications).

4. Run the bot:
    ```bash
    node index.js
    ```
5. The API will be running on `http://localhost:5000`.

## API Usage

### Fetch User Data
```
GET /get_user_info?discord_id=USER_DISCORD_ID
```
#### Response Example:
```json
{
  "username": "ExampleUser",
  "avatar_url": "https://cdn.discordapp.com/avatars/123456789012345678/a_123456789abcdef123456789abcdef12.png"
}
```

### Fetch Guild Members Data
```
GET /get_user_info?discord_guild_id=GUILD_DISCORD_ID
```
#### Response Example:
```json
{
  "guild_discord_id": "GUILD_DISCORD_ID",
  "members_count": 50,
  "members": {
    "123456789012345678": {
      "discord_id": "123456789012345678",
      "discord_member_since": "2020-05-10T12:34:56.789Z",
      "guild_member_since": "2021-06-15T08:22:44.123Z",
      "roles": [
        {
          "role_id": "987654321098765432",
          "role_name": "Admin",
          "role_color": "#FF0000"
        }
      ]
    }
  }
}
```

### Error Responses
- **No Discord ID or Guild ID provided**:
  ```json
  { "error": "No Discord ID or Guild ID provided" }
  ```
- **User or Guild not found**:
  ```json
  { "error": "User not found" }
  ```
  ```json
  { "error": "Guild not found" }
  ```
- **Failed to fetch data**:
  ```json
  { "error": "Failed to fetch data" }
  ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing
Feel free to fork the repository and create pull requests. All contributions are welcome. Please ensure that any changes are thoroughly tested.

## Authors
- **Legacy DEV Team** - Developer