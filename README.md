# Discord To Website

This project, **Discord To Website**, is a Node.js application developed by **Legacy DEV Team**. It allows websites to fetch user and guild member data from Discord using a simple API.

## Features
- Fetch Discord user information based on the Discord ID.
- Fetch guild members along with their roles, Discord join date, and guild join date.
- Exposes an API to retrieve user and guild member data.
- Developed using **Node.js** with **discord.js** and **Express**.
- Easy to integrate into your website.
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

3. Set up your **Discord Bot Token**:
   - Go to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new bot.
   - Copy the **Bot Token** and update the `config.js` file with your bot token and server details.

4. Run the bot:

    ```bash
    node bot.js
    ```

5. The API will be running on `http://localhost:5000`. You can now use the endpoints.

## API Usage

### Fetch User Info

#### Request

Send a `GET` request to fetch a user's Discord data by their **Discord ID**:

```
GET http://localhost:5000/get_user_info?discord_id=USER_DISCORD_ID
```

#### Response

```json
{
  "username": "ExampleUser",
  "avatar_url": "https://cdn.discordapp.com/avatars/123456789012345678/a_123456789abcdef123456789abcdef12.png"
}
```

### Fetch Guild Members

#### Request

Send a `GET` request to fetch all guild members with their details:

```
GET http://localhost:5000/get_user_info?discord_guild_id=GUILD_DISCORD_ID
```

#### Response

```json
{
  "guild_discord_id": "GUILD_DISCORD_ID", 
  "members_count": 100,
  "members": {
    "123456789012345678": {
      "discord_id": "123456789012345678",
      "discord_member_since": "2020-01-01T12:34:56.789Z",
      "guild_member_since": "2021-06-15T09:22:33.123Z",
      "roles": [
        { "role_id": "987654321098765432", "role_name": "Admin" },
        { "role_id": "876543210987654321", "role_name": "Member" }
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
  { "error": "User or Guild not found" }
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
