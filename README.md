# 🏗️ DayZ Cartel Generator Bot

A specialized Discord bot for generating custom signs in DayZ using `Land_Container_1Bo_DE` objects with an advanced permission system.

## ✨ Features

- 🎯 **Slash Commands**: `/setup-cartel` for configuration (Admins Only)
- 🔐 **Access Control**: Role-based and channel-restricted system
- 🎨 **5x7 Pixel Font**: A-Z letters and 0-9 numbers in pixel matrix
- 📄 **JSON Export**: Compatible with DayZ mod tools and server builders
- 🛡️ **Multi-level Security**: Permissions and restrictions system
- 🚀 **Discord.js v14**: Modern technology with slash commands
- 📁 **Auto File Delivery**: Sends JSON files directly to Discord

## 🎮 For DayZ Servers

Generates JSON files with `Land_Container_1Bo_DE` objects positioned to form readable text in-game. Perfect for:
- Server welcome signs
- Base signage and decoration
- City landmarks and directions
- Informational messages
- Custom server branding

## 🔧 Technologies

- **Discord.js v14** - Modern Discord bot framework
- **Node.js** - JavaScript runtime environment
- **dotenv** - Environment variable management
- **JSON Generation** - DayZ-compatible object formatting

## 📋 Requirements

- Node.js 16.9.0 or higher
- Discord bot with administrator permissions
- Discord server for configuration

## ⚡ Quick Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MiniDelTuzo/CREATE-CARTEL-DAYZ.git
   cd CREATE-CARTEL-DAYZ
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env and add your Discord bot token
   ```

4. **Start the bot**
   ```bash
   npm start
   ```

5. **Setup in Discord**
   ```
   /setup-cartel
   ```

## 🎯 Usage Guide

### For Server Administrators:
- `/setup-cartel` - Configure the cartel generation channel
- `/setup-cartel channel:#your-channel` - Use an existing specific channel

### For Users with "buildcartel" role:
In the configured channel, use:
```
!cartel YOUR TEXT HERE
```

### Examples:
- `!cartel WELCOME PLAYERS` - Creates "WELCOME" on first line, "PLAYERS" on second
- `!cartel SERVER 2024` - Creates "SERVER" on first line, "2024" on second
- `!cartel TRADING POST` - Creates "TRADING" on first line, "POST" on second

## 🔐 Permission System

| User Type | Can use `/setup-cartel`? | Can use `!cartel`? | Needs buildcartel role? |
|-----------|--------------------------|-------------------|------------------------|
| **Administrator** | ✅ Yes | ✅ Yes | ❌ No |
| **With buildcartel role** | ❌ No | ✅ Yes | ✅ Yes |
| **Regular user** | ❌ No | ❌ No | ➖ N/A |

## 🛡️ Security Features

- ✅ **Channel Restriction**: Only works in configured channel
- ✅ **Role Control**: Only users with "buildcartel" role
- ✅ **Admin Override**: Administrators can always use commands
- ✅ **Permission Validation**: Multi-layer security checks

## ⚙️ Cartel Configuration

The bot generates objects with these properties:
- **Object Type**: `Land_Container_1Bo_DE`
- **Base Coordinates**: x=11970, y=3436.8, z=12600.7
- **Rotation**: [7.73, 0.0, 0.0]
- **Scale**: 0.05
- **Pixel Separation**: 0.1 units
- **Letter Size**: 5x7 pixel matrix

## 📚 Documentation

- [Configuration Guide](CONFIGURACION.md) (Spanish)
- [Installation Guide](README.md)

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## 🛠️ JSON Structure Example

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
```

## 🤖 Required Bot Permissions

The bot needs these Discord permissions:
- `Send Messages`
- `Attach Files`
- `Read Message History`
- `Use Slash Commands`

## 🎨 Supported Characters

**Supported**: A-Z, 0-9, SPACE

The bot automatically converts text to uppercase and ignores unsupported characters.

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

## 🐛 Support & Issues

If you encounter any issues:
1. Check the [Issues](https://github.com/MiniDelTuzo/CREATE-CARTEL-DAYZ/issues) page
2. Create a new issue with detailed information
3. Include error messages and steps to reproduce

## 🚀 Roadmap

- [ ] Custom coordinate configuration
- [ ] Multiple font sizes
- [ ] Color support for different container types
- [ ] Batch generation for multiple signs
- [ ] Web interface for preview

---

**Made with ❤️ for the DayZ community**
