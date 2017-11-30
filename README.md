# CSSIO Gulp-Webpack Workflow
**Шаблон для быстрого старта проекта на базе BEM и SMACSS**


## Запускаем

```
yarn
```

## Команды

```
gulp zip - для создания zip архива
gulp ftp - для отправки на сервер, нужно создать файл config.json
{
	"ftp": {
		"host": "",
        "user": "",
        "pass": "",
        "port": ,
        "remotePath": "путь к папке после подключения" 
	},
	"project": {
		"name": "gulp_workflow" - название архива zip
	}
}
```

## Структура папок и файлов
```
├── src/                       			# Исходники
│   ├── fonts/                 			# Шрифты
│   ├── images/                			# Изображения
│   ├── js/                    			# Javascript библиотеки и основной файл scripts.js
│   ├── scss/                  			# Стили
│   │   ├── base/              			# Базовые стили
│   │   │   ├── _normalize.scss      
│   │   │   ├── _typography.scss      
│   │   │   ├── _tables.scss     
│   │   │   ├── _buttons.scss   
│   │   │   ├── _forms.scss   
│   │   │   └──  и другие...
│	│	├── layout/            			# Стили макета, такие как .header, .main, .footer, .grid-сетка
│   │   │   ├── _layout.scss      
│   │   │   ├── _grid.scss     
│   │   │   ├── _header.scss   
│   │   │   ├── _main.scss   
│   │   │   └── _footer.scss  
│	│	├── modules/           			# Стили модулей, такие как .news, .promo и т.д.
│	│	├── states/            			# Стили состояния, такие как .is-success, .is-error
│   │   │   └── _states.scss     
│	│	├── vendors/           			# Стили от плагинов
│   │   └── app.scss           			# Главный стилевой файл
│   ├── sprites/               			# Спрайты
│   │   ├── _images/           			# Тут изображения
│	│	├── _svg/              			# Тут svg иконки
│   │   ├── _templates/        			# Тут шаблоны настроек для их генерации
│   │   ├── _sprites.scss      			# Автогенерация
│   │   └── _spritesSvg.scss   			# Автогенерация
│   └── index.pug
│
├── dist/                      			# Сборка
│   ├── css/                   			# Стили
│   │   └── app.min.css         
│   ├── fonts/                 			# Шрифты
│   ├── images/                			# Изображения
│	├── js/                    			# Скрипты
│   │   └── app.min.js         			
│   ├── sprites/               			# Спрайты (автогенерация) .png и .svg
│   │   ├── sprite.png         
│   │   └── sprite.svg         
│   └── index.html             			# Страница
├── .gitignore                 			# Список исключённых файлов из Git, сюда входит config.json
├── gulpfile.js                			# Файл для запуска Gulp.js
├── package.json               			# Список модулей и прочей информации
├── config.json                			# Для комманды отправки на сервер файлов из папки /dist gulp ftp
└── readme.md                  			# Документация шаблона
```


### Как PNG спрайты & Svg Спрайты

```
Вставляем в документ или через @include sprite($icon-name), svg через svg use;
```

