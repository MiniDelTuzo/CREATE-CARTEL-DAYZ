const { Client, GatewayIntentBits, AttachmentBuilder, SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuración del bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Almacenar los canales de cartel por servidor (en producción usar una base de datos)
const cartelChannels = new Map();

// Coordenadas base para el cartel
const BASE_COORDS = {
    x: 11970,
    y: 3436.8,
    z: 12600.7
};

// Configuración de objetos
const OBJECT_CONFIG = {
    name: "Land_Container_1Bo_DE",
    ypr: [7.73, 0.0, 0.0],
    scale: 0.05,
    enableCEPersistency: 0,
    customString: ""
};

// Fuente 5x7 píxeles para letras A-Z y números 0-9
const FONT_5X7 = {
    'A': [
        "01110",
        "10001",
        "10001",
        "11111",
        "10001",
        "10001",
        "10001"
    ],
    'B': [
        "11110",
        "10001",
        "10001",
        "11110",
        "10001",
        "10001",
        "11110"
    ],
    'C': [
        "01111",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "01111"
    ],
    'D': [
        "11110",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "11110"
    ],
    'E': [
        "11111",
        "10000",
        "10000",
        "11110",
        "10000",
        "10000",
        "11111"
    ],
    'F': [
        "11111",
        "10000",
        "10000",
        "11110",
        "10000",
        "10000",
        "10000"
    ],
    'G': [
        "01111",
        "10000",
        "10000",
        "10111",
        "10001",
        "10001",
        "01111"
    ],
    'H': [
        "10001",
        "10001",
        "10001",
        "11111",
        "10001",
        "10001",
        "10001"
    ],
    'I': [
        "11111",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "11111"
    ],
    'J': [
        "11111",
        "00001",
        "00001",
        "00001",
        "10001",
        "10001",
        "01110"
    ],
    'K': [
        "10001",
        "10010",
        "10100",
        "11000",
        "10100",
        "10010",
        "10001"
    ],
    'L': [
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "10000",
        "11111"
    ],
    'M': [
        "10001",
        "11011",
        "10101",
        "10001",
        "10001",
        "10001",
        "10001"
    ],
    'N': [
        "10001",
        "11001",
        "10101",
        "10011",
        "10001",
        "10001",
        "10001"
    ],
    'O': [
        "01110",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01110"
    ],
    'P': [
        "11110",
        "10001",
        "10001",
        "11110",
        "10000",
        "10000",
        "10000"
    ],
    'Q': [
        "01110",
        "10001",
        "10001",
        "10001",
        "10101",
        "10010",
        "01101"
    ],
    'R': [
        "11110",
        "10001",
        "10001",
        "11110",
        "10100",
        "10010",
        "10001"
    ],
    'S': [
        "01111",
        "10000",
        "10000",
        "01110",
        "00001",
        "00001",
        "11110"
    ],
    'T': [
        "11111",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100",
        "00100"
    ],
    'U': [
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01110"
    ],
    'V': [
        "10001",
        "10001",
        "10001",
        "10001",
        "10001",
        "01010",
        "00100"
    ],
    'W': [
        "10001",
        "10001",
        "10001",
        "10001",
        "10101",
        "11011",
        "10001"
    ],
    'X': [
        "10001",
        "01010",
        "00100",
        "00100",
        "00100",
        "01010",
        "10001"
    ],
    'Y': [
        "10001",
        "10001",
        "01010",
        "00100",
        "00100",
        "00100",
        "00100"
    ],
    'Z': [
        "11111",
        "00001",
        "00010",
        "00100",
        "01000",
        "10000",
        "11111"
    ],
    '0': [
        "01110",
        "10001",
        "10011",
        "10101",
        "11001",
        "10001",
        "01110"
    ],
    '1': [
        "00100",
        "01100",
        "00100",
        "00100",
        "00100",
        "00100",
        "01110"
    ],
    '2': [
        "01110",
        "10001",
        "00001",
        "00110",
        "01000",
        "10000",
        "11111"
    ],
    '3': [
        "01110",
        "10001",
        "00001",
        "00110",
        "00001",
        "10001",
        "01110"
    ],
    '4': [
        "00010",
        "00110",
        "01010",
        "10010",
        "11111",
        "00010",
        "00010"
    ],
    '5': [
        "11111",
        "10000",
        "11110",
        "00001",
        "00001",
        "10001",
        "01110"
    ],
    '6': [
        "00110",
        "01000",
        "10000",
        "11110",
        "10001",
        "10001",
        "01110"
    ],
    '7': [
        "11111",
        "00001",
        "00010",
        "00100",
        "01000",
        "01000",
        "01000"
    ],
    '8': [
        "01110",
        "10001",
        "10001",
        "01110",
        "10001",
        "10001",
        "01110"
    ],
    '9': [
        "01110",
        "10001",
        "10001",
        "01111",
        "00001",
        "00010",
        "01100"
    ],
    ' ': [
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000",
        "00000"
    ]
};

// Función para generar el cartel
function generateCartel(text) {
    const objects = [];
    const lines = text.split(' ');
    let currentLine = 0;
    let currentX = 0;

    for (const word of lines) {
        // Si no es la primera palabra de la línea, añadir espacio
        if (currentX > 0) {
            currentX += 6; // Espacio entre palabras
        }

        for (const char of word.toUpperCase()) {
            if (FONT_5X7[char]) {
                const pattern = FONT_5X7[char];
                
                // Generar objetos para cada píxel de la letra
                for (let row = 0; row < pattern.length; row++) {
                    for (let col = 0; col < pattern[row].length; col++) {
                        if (pattern[row][col] === '1') {
                            const obj = {
                                ...OBJECT_CONFIG,
                                pos: [
                                    BASE_COORDS.x + (currentX + col) * 0.1,
                                    BASE_COORDS.y - (currentLine * 8 + row) * 0.1,
                                    BASE_COORDS.z
                                ]
                            };
                            objects.push(obj);
                        }
                    }
                }
                
                currentX += 6; // Espacio para la próxima letra (5 + 1 de separación)
            }
        }
        
        // Nueva línea para la próxima palabra
        currentLine++;
        currentX = 0;
    }

    return { Objects: objects };
}

// Evento cuando el bot está listo
client.once('clientReady', async () => {
    console.log(`Bot conectado como ${client.user.tag}!`);
    
    // Registrar comando slash
    const command = new SlashCommandBuilder()
        .setName('setup-cartel')
        .setDescription('Configura el canal para generar carteles de DayZ (Solo Admins)')
        .addChannelOption(option =>
            option.setName('canal')
                .setDescription('Canal donde se permitirán los comandos de cartel')
                .setRequired(false)
                .addChannelTypes(ChannelType.GuildText)
        );

    try {
        // Registrar el comando globalmente
        await client.application.commands.create(command);
        console.log('Comando slash /setup-cartel registrado correctamente');
    } catch (error) {
        console.error('Error al registrar comando slash:', error);
    }
});

// Manejar comandos slash
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'setup-cartel') {
        // Verificar que el usuario sea administrador
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return interaction.reply({
                content: '❌ Solo los administradores pueden configurar el canal de cartel.',
                ephemeral: true
            });
        }

        const canal = interaction.options.getChannel('canal');
        
        if (canal) {
            // Usar canal especificado
            cartelChannels.set(interaction.guildId, canal.id);
            await interaction.reply({
                content: `✅ Canal de cartel configurado: ${canal}\n\n📋 **Instrucciones:**\n- Solo usuarios con rol **buildcartel** pueden usar \`!cartel\` en este canal\n- Usa \`!cartel TEXTO\` para generar carteles`,
                ephemeral: false
            });
        } else {
            // Crear nuevo canal
            try {
                const newChannel = await interaction.guild.channels.create({
                    name: 'cartel-dayz',
                    type: ChannelType.GuildText,
                    topic: '🏗️ Canal para generar carteles de DayZ - Solo usuarios con rol "buildcartel"',
                    permissionOverwrites: [
                        {
                            id: interaction.guild.roles.everyone,
                            deny: [PermissionFlagsBits.SendMessages],
                        }
                    ]
                });

                cartelChannels.set(interaction.guildId, newChannel.id);
                
                await interaction.reply({
                    content: `✅ Canal de cartel creado: ${newChannel}\n\n📋 **Instrucciones:**\n1. Crea un rol llamado **buildcartel**\n2. Asigna el rol a los usuarios que pueden generar carteles\n3. Usa \`!cartel TEXTO\` en ${newChannel} para generar carteles\n\n⚠️ **Nota:** Solo usuarios con rol **buildcartel** pueden usar el comando`,
                    ephemeral: false
                });
            } catch (error) {
                console.error('Error al crear canal:', error);
                await interaction.reply({
                    content: '❌ Error al crear el canal. Verifica que el bot tenga permisos de administrador.',
                    ephemeral: true
                });
            }
        }
    }
});

// Manejar mensajes
client.on('messageCreate', async (message) => {
    // Ignorar mensajes del bot
    if (message.author.bot) return;

    // Verificar si el mensaje empieza con el prefijo !cartel
    if (message.content.startsWith('!cartel ')) {
        // Verificar si hay un canal configurado para este servidor
        const configuredChannelId = cartelChannels.get(message.guildId);
        
        if (!configuredChannelId) {
            return message.reply('❌ No hay canal de cartel configurado. Un administrador debe usar `/setup-cartel` primero.');
        }

        // Verificar si el mensaje está en el canal correcto
        if (message.channelId !== configuredChannelId) {
            const configuredChannel = message.guild.channels.cache.get(configuredChannelId);
            return message.reply(`❌ Los carteles solo se pueden generar en ${configuredChannel || 'el canal configurado'}.`);
        }

        // Verificar si el usuario tiene el rol "buildcartel"
        const hasRole = message.member.roles.cache.some(role => role.name.toLowerCase() === 'buildcartel');
        
        if (!hasRole && !message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            return message.reply('❌ Necesitas el rol **buildcartel** para generar carteles.');
        }

        try {
            const text = message.content.slice(8).trim(); // Remover "!cartel "
            
            if (!text) {
                return message.reply('Por favor, proporciona el texto para el cartel. Ejemplo: `!cartel VIERA TECANTA`');
            }

            // Generar el cartel
            const cartelData = generateCartel(text);
            
            // Crear archivo cartel.json
            const fileName = 'cartel.json';
            const filePath = path.join(__dirname, fileName);
            
            fs.writeFileSync(filePath, JSON.stringify(cartelData, null, 2));
            
            // Crear attachment y enviarlo
            const attachment = new AttachmentBuilder(filePath, { name: fileName });
            
            await message.reply({
                content: `✅ Cartel generado para: **${text}**\n📄 Total de objetos: ${cartelData.Objects.length}\n👤 Solicitado por: ${message.author}`,
                files: [attachment]
            });
            
            // Limpiar archivo temporal (verificar si existe antes de eliminar)
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (unlinkError) {
                console.log('Nota: No se pudo eliminar el archivo temporal (esto es normal)');
            }
            
        } catch (error) {
            console.error('Error al generar cartel:', error);
            
            // Intentar limpiar el archivo si existe
            try {
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            } catch (cleanupError) {
                // Ignorar errores de limpieza
            }
            
            message.reply('❌ Ocurrió un error al generar el cartel.');
        }
    }
});

// Iniciar el bot
const token = process.env.DISCORD_TOKEN;
if (!token) {
    console.error('Error: No se encontró el token de Discord. Asegúrate de configurar DISCORD_TOKEN en las variables de entorno.');
    process.exit(1);
}

client.login(token);
