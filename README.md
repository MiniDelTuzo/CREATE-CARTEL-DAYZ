# CREATE-CARTEL-DAYZ
# 🏗️ DayZ Sign Generator Bot

Specialized Discord bot for generating custom signs in DayZ using `Land_Container_1Bo_DE` objects with advanced permission system.

## ✨ Features

- 🎯 **Slash Commands**: `/setup-cartel` for configuration (Admins Only)
- 🔐 **Access Control**: Role-based and channel-restricted system
- 🎨 **5x7 Font**: A-Z letters and 0-9 numbers in pixel matrix
- 📄 **JSON Export**: Compatible with DayZ mod tools
- 🛡️ **Security**: Multi-level permissions and restrictions
- 🚀 **Discord.js v14**: Modern technology with slash commands

## 🎮 For DayZ

Generates JSON files with `Land_Container_1Bo_DE` objects positioned to form readable text in-game. Perfect for:
- Server signs
- Base signage
- City decoration
- Informational messages

## 🔧 Technologies

- **Discord.js v14** - Bot framework
- **Node.js** - Runtime environment
- **dotenv** - Environment variable management

## 📋 Requirements

- Node.js 16.9.0 or higher
- Discord bot with administrator permissions
- Discord server for configuration

## ⚡ Quick Installation

1. Clone the repository
2. `npm install`
3. Configure your token in `.env`
4. `npm start`
5. Use `/setup-cartel` in Discord

## 🎯 Usage

### For Administrators:
- `/setup-cartel` - Set up sign generation channel
- `/setup-cartel channel:#your-channel` - Use existing channel

### For Users with "buildcartel" role:
- `!cartel YOUR TEXT` - Generate sign JSON file

### Examples:
- `!cartel WELCOME PLAYERS` - Creates "WELCOME" on first line, "PLAYERS" on second
- `!cartel SERVER 2024` - Creates "SERVER" on first line, "2024" on second

## 🔐 Permission System

| User Type | Can use `/setup-cartel`? | Can use `!cartel`? | Needs buildcartel role? |
|-----------|--------------------------|-------------------|------------------------|
| **Admin** | ✅ Yes | ✅ Yes | ❌ No |
| **With buildcartel role** | ❌ No | ✅ Yes | ✅ Yes |
| **Regular user** | ❌ No | ❌ No | ➖ N/A |

## 📚 Documentation

- [Configuration Guide](CONFIGURACION.md)
- [User Manual](README.md)

## 🤝 Contributing

Contributions are welcome! Please open an issue first to discuss major changes.

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

## 🛠️ Configuration Object Structure

```json
{
  "Objects": [
    {
      "name": "Land_Container_1Bo_DE",
      "pos": [11970.0, 3436.8, 12600.7],
      "ypr": [7.73, 0.0, 0.0],
      "scale": 0.05,
      "enableCEPersistency": 0,
      "customString": ""
    }
  ]
}
