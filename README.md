# MicroCosmix Core

**MicroCosmix** es una librería para construir microfrontends completamente desacoplados, utilizando un sistema de colas asincrónicas para la comunicación entre contenedores.

## 🧠 ¿Qué hace?

MicroCosmix permite que múltiples aplicaciones independientes —cada una con su propio framework o stack— se integren en una única experiencia de usuario, comunicándose entre sí mediante un bus de eventos.

### Características principales:

- 📦 Cada microfrontend vive en su propio contenedor aislado (`iframe`).
- 🔄 Comunicación entre contenedores usando `postMessage`, expuesta como **Event Emitters**.
- 🧵 Sistema de colas asincrónicas para transmitir eventos entre apps desacopladas.
- 🛠️ Framework-agnostic: funciona con React, Angular, Vue, Svelte o vanilla.
- ⚙️ Fácil de extender, integrar y testear.

## ✨ Casos de uso

- Dashboards con múltiples microapps independientes.
- Migración progresiva de una app monolítica a microfrontends.
- Integración de herramientas o productos de diferentes equipos sin acoplamiento.

## 🚧 Estado actual

Este paquete está en desarrollo activo. Puedes seguir el progreso en el [repositorio de la organización](https://github.com/microcosmix).
