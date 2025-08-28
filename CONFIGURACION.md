# 🚀 Guía de Configuración del Bot

## Paso 1: Crear el Bot en Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Haz clic en "New Application"
3. Dale un nombre a tu aplicación (ej: "Bot Cartel DayZ")
4. Ve a la sección "Bot" en el menú lateral
5. Haz clic en "Add Bot"
6. En "TOKEN", haz clic en "Copy" para copiar el token

## Paso 2: Configurar Permisos

En la sección "Bot":
- ✅ Activa "MESSAGE CONTENT INTENT"

En la sección "OAuth2" > "URL Generator":
- **Scopes:** Selecciona "bot" y "applications.commands"
- **Bot Permissions:**
  - ✅ Send Messages
  - ✅ Attach Files
  - ✅ Read Message History
  - ✅ Manage Channels
  - ✅ Use Slash Commands

## Paso 3: Invitar el Bot a tu Servidor

1. Copia la URL generada en "OAuth2" > "URL Generator"
2. Pégala en tu navegador
3. Selecciona tu servidor Discord
4. Autoriza los permisos

## Paso 4: Configurar el Token

**Variable de Entorno (Ya configurado):**
El bot ya tiene el token en el archivo `.env`

## Paso 5: Ejecutar el Bot

```bash
npm start
```

## Paso 6: Configurar el Canal (Solo Administradores)

En Discord, usa el comando slash:

**Crear nuevo canal:**
```
/setup-cartel
```

**Usar canal existente:**
```
/setup-cartel canal:#mi-canal
```

## Paso 7: Configurar Roles

1. **Crear rol:** Ve a Configuración del Servidor > Roles > Crear Rol
2. **Nombre del rol:** `buildcartel` (exactamente así)
3. **Asignar rol:** Asigna este rol a los usuarios que pueden generar carteles

## Paso 8: Probar el Bot

En el canal configurado, escribe:
```
!cartel HOLA MUNDO
```

## � Seguridad y Restricciones

- **Canal específico:** Solo funciona donde se configuró
- **Control de roles:** Solo usuarios con rol "buildcartel"
- **Solo admins:** Pueden configurar el canal con `/setup-cartel`
- **Administradores:** Siempre pueden usar `!cartel`

## ⚠️ Notas Importantes

- **NUNCA compartas tu token de Discord**
- El bot necesita permisos de administrador para crear canales
- El rol debe llamarse exactamente **buildcartel**
- Cada servidor necesita su propia configuración
