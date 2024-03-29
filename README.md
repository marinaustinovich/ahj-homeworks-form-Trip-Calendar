### Trip Calendar (задача со звёздочкой)

[![Build status](https://ci.appveyor.com/api/projects/status/y1x8dit5o0fdgiym/branch/main?svg=true)](https://ci.appveyor.com/project/marinaustinovich/ahj-homeworks-form-trip-calendar/branch/main)

deployment: https://marinaustinovich.github.io/ahj-homeworks-form-Trip-Calendar/
#### Легенда

Сервис для путешествий, а именно виджет выбора дат: туда и обратно, если установлена соответствующая галочка.

Аналог - на сайте РЖД и любых авиакомпаний:

![](./src/img/trip.png)

![](./src/img/trip.png)

#### Описание

Реализованы только переключатель туда-обратно и виджеты ввода дат, выбора их из календаря в соответствии со следующими условиями:

1. Дата «туда» должна быть не раньше, чем сегодняшняя (по времени браузера).
1. Сегодняшняя дата должна быть выделена.
1. Даты до сегодняшней должны быть не активны.
1. Должно быть реализовано переключение месяца — без анимации, просто пересчёт дат.
1. Дата «обратно» не может быть ранее даты «туда».
