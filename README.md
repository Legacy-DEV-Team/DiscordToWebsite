Here’s a `README.md` file for your **"Discord To Website"** project, along with the suggested file structure.

### `README.md`:

## Discord To Website

This project, **Discord To Website**, is a Node.js application developed by **Legacy DEV Team**. It allows websites to fetch user data (such as username, discriminator, and avatar) from Discord using the Discord ID through a simple API.

## Features
- Fetch Discord user information based on the Discord ID.
- Exposes an API to retrieve the user's username, discriminator, and avatar URL.
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
   - Copy the **Bot Token** and replace `'YOUR_BOT_TOKEN'` in the `bot.js` file.

4. Run the bot:

    ```bash
    node bot.js
    ```

5. The API will be running on `http://localhost:5000`. You can now use the endpoint:

    ```
    GET /get_user_info?discord_id=DISCORD_USER_ID
    ```

## API Usage

### Request

Send a `GET` request to fetch a user's Discord data by their **Discord ID**:

```
GET http://localhost:5000/get_user_info?discord_id=USER_DISCORD_ID
```

### Response

The response will contain the following user information:

```json
{
  "username": "ExampleUser",
  "discriminator": "1234",
  "avatar_url": "https://cdn.discordapp.com/avatars/123456789012345678/a_123456789abcdef123456789abcdef12.png"
}
```

### Error Responses

- **No Discord ID provided**:
  ```json
  { "error": "No Discord ID provided" }
  ```

- **User not found**:
  ```json
  { "error": "User not found" }
  ```

- **Failed to fetch user data**:
  ```json
  { "error": "Failed to fetch user data" }
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to fork the repository and create pull requests. All contributions are welcome. Please ensure that any changes are thoroughly tested.

## Authors

- **Legacy DEV Team** - Developer