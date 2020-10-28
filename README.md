# Weather - Веб-приложение, которое показывает погоду.

***Какую задачу решает мой проект?*** Мой проект дает возможность посмотреть погоду в выбранном городе (в списке в настоящий момент 4 города).
![погода](http://images.vfl.ru/ii/1603877317/ff31b1ee/32107257.png)

***Языки программирования и фреймворки, а также технологии, которые я использовала в рамках создания проекта и для чего:***

- Использован express, чтобы при переходе на ручку get была отрисована страница приложения, а также для настройки серверной части приложения.
- NPM пакет hbs для отрисовки фронтенда.
- API, которое предоставляет данные о погоде (openweathermap).
- CSS / HTML - отображение фронтенда (также можно открыть на мобильном устройстве данное приложение, будет отображаться иначе).
- Написан fetch, чтобы, при нажатии на выбранный город в выпадающем списке, страница не обновлялась.

***Процесс работы программы:***

- Пользователь открывает приложение
- В верхней части отрисовывается текущая дата и день недели.
- Выбирает город из списка. 
- Пользователю отрисовывается информация о погоде.

***Как запустить программу?***

1. После того, как папка с проектом склонирована на устройство - вводим "npm i", чтобы dependencies скачались.
2. В терминале выбираем папку с проектом и вводим команду "node server.js".
3. В браузере в адресной строке пишем: "localhost:3000".
