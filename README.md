# Preax - WeatherApp 2

Это решение задачи на [спринт WeatherApp на Preax](https://preax.ru 'Preax'). Платформа Preax помогает улучшить навыки программирования путем создания реалистичных проектов.

Task 1: Marsel, marsel-shakirov

## Оглавление

- [Контакты](#контакты)
- [Установка приложения](#установка-приложения)
- [Дебаггинг](#дебаггинг)

## Контакты

- Name - Marsel
- Nickname preax - marsel-shakirov
- Telegram - @MarselShakirov
- GitHub - [Github](https://github.com/marsel-shakirov)

## Установка приложения

1. открыть терминал
2. установить зависимости командой `npm i`
3. развернуть проект в режиме разработчика `npm start`

## Дебаггинг

1. General
   1.1 Конвертировал background image с png в jpg (сделал сжатие изображения)
   1.2 Чуть подправил favicon
   1.3 Сделал svg подгрузку через sprite (сделал сжатие иконок)
   1.4 Убрал picture>source c svg (svg сам по себе хорошо масштабируется )
   1.5 Чуть добавил больше css переменных цвета
   1.6 Чуть больше поддержки accessibility
2. Header
   2.1 В input search убрал aria-label и связал с label
   2.2 input имеет правильный hover, focus, pressed
3. Main
   3.1 Добавил тег time для дат и времени
