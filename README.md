# Bot Cartel DayZ

Bot de Discord para generar carteles de DayZ usando objetos `Land_Container_1Bo_DE`.

## Características

- ✅ Comando slash `/setup-cartel` para configurar canal (Solo Admins)
- ✅ Comando `!cartel` restringido a canal específico
- ✅ Control de roles - Solo usuarios con rol "buildcartel"
- ✅ Fuente completa A-Z y 0-9 en formato 5x7 píxeles
- ✅ Genera archivo `cartel.json` compatible con DayZ
- ✅ Envía el archivo como adjunto en Discord
- ✅ Soporte para múltiples palabras (cada palabra en nueva línea)

## Configuración Inicial

### 1. Configurar el Canal (Solo Administradores)

Usa el comando slash para configurar donde se pueden generar carteles:

**Crear nuevo canal:**
```
/setup-cartel
```

**Usar canal existente:**
```
/setup-cartel canal:#mi-canal
```

### 2. Configurar Roles

1. Crea un rol llamado **buildcartel**
2. Asigna este rol a los usuarios que pueden generar carteles
3. Solo usuarios con este rol (y admins) pueden usar `!cartel`

## Uso

### Para Administradores
- `/setup-cartel` - Configura el canal de cartel
- `/setup-cartel canal:#canal` - Usa un canal específico

### Para Usuarios con rol "buildcartel"
En el canal configurado, usa:
```
!cartel TEXTO_AQUI
```

**Ejemplos:**
- `!cartel VIERA TECANTA` - Genera "VIERA" en primera línea y "TECANTA" en segunda
- `!cartel HOLA MUNDO` - Genera "HOLA" en primera línea y "MUNDO" en segunda
- `!cartel SERVER 2024` - Genera "SERVER" en primera línea y "2024" en segunda

## Restricciones de Seguridad

- ✅ **Canal específico:** Solo funciona en el canal configurado
- ✅ **Control de roles:** Solo usuarios con rol "buildcartel"
- ✅ **Solo admins:** Pueden configurar el canal
- ✅ **Permisos:** Admins siempre pueden usar el comando

## Configuración del Cartel

El bot genera objetos con las siguientes propiedades:
- **Objeto:** `Land_Container_1Bo_DE`
- **Coordenadas base:** x=11970, y=3436.8, z=12600.7
- **Rotación:** [7.73, 0.0, 0.0]
- **Escala:** 0.05
- **Separación entre píxeles:** 0.1 unidades
- **Tamaño de letra:** 5x7 píxeles

## Estructura del JSON generado

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

## Permisos del Bot

El bot necesita los siguientes permisos en Discord:
- `Send Messages`
- `Attach Files`
- `Read Message History`

## Soporte

Caracteres soportados: A-Z, 0-9, ESPACIO

El bot convierte automáticamente el texto a mayúsculas y ignora caracteres no soportados.
