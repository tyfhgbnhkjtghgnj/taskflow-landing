# TaskFlow — SaaS landing page

[Открыть сайт](https://tyfhgbnhkjtghgnj.github.io/taskflow-landing/) · [Репозиторий](https://github.com/tyfhgbnhkjtghgnj/taskflow-landing)

Адаптивный англоязычный лендинг вымышленного сервиса управления задачами. Первый проект для портфолио: чистые HTML, CSS и JavaScript, без сборки, библиотек и платных ресурсов.

## Открыть сайт

Откройте `dist/index.html` двойным щелчком. Интернет для работы страницы не нужен. Либо запустите из папки проекта `python -m http.server 8080 --directory dist` и откройте `http://localhost:8080`.

## Что реализовано

- Адаптивная вёрстка для телефона, планшета и компьютера.
- Первый экран с интерактивным списком задач и индикатором прогресса.
- Блоки преимуществ, процесса работы, тарифов и FAQ.
- Переключение месячной и годовой стоимости: $10/месяц или $96/год ($8/месяц).
- Мобильное меню: поддержка клавиатуры, Escape и закрытие после перехода.
- Семантическая разметка, видимый фокус, ссылка пропуска навигации, поддержка уменьшенной анимации.
- Локальные стили, скрипты и встроенная иконка. Нет внешних шрифтов, трекеров или запросов к API.

TaskFlow — концепт, а не работающий SaaS. Тарифы иллюстративные. Кнопки ведут к демо, подписки и оплаты отсутствуют. Задачи не сохраняются после перезагрузки. Описания функций показывают идею продукта; сам проект реализует лендинг и перечисленные интерактивные элементы. Имена и инициалы в примерах вымышлены, реальные отзывы и клиентские логотипы не используются.

## Структура

```text
taskflow/
├── dist/
│   ├── index.html          # Содержание и разметка
│   ├── styles.css          # Оформление и адаптация
│   ├── script.js           # Меню, задачи и тарифы
│   └── .nojekyll           # Публикация обычного HTML
├── .github/workflows/
│   └── pages.yml           # Автопубликация GitHub Pages
├── .gitignore
└── README.md
```

## Публикация на GitHub Pages

1. Войдите в GitHub и создайте пустой публичный репозиторий `taskflow-landing`. Не добавляйте README при создании: он уже есть в проекте.
2. Загрузите содержимое этой папки в корень репозитория, включая `.github/workflows/pages.yml`. Главная ветка должна называться `main`.
3. Откройте **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Откройте **Actions → Deploy TaskFlow to GitHub Pages → Run workflow**, если первоначальный запуск не опубликовал сайт. После успешного запуска ссылка появится в **Settings → Pages**.
5. Адрес будет иметь вид `https://YOUR_USERNAME.github.io/taskflow-landing/`. Замените `YOUR_USERNAME` своим именем пользователя. Добавьте фактическую ссылку в описание репозитория и своё портфолио.

Если используете Git, команды из папки проекта:

```sh
git init -b main
git add .
git commit -m "Add TaskFlow portfolio landing page"
git remote add origin https://github.com/YOUR_USERNAME/taskflow-landing.git
git push -u origin main
```

GitHub может запросить вход или подтверждение аккаунта. Пароли и токены нельзя добавлять в файлы проекта. Пока репозиторий не создан и workflow не завершился, публичной ссылки нет.

Все пути относительные: страница работает и в подпапке GitHub Pages. Для ручного размещения на другом статическом хостинге достаточно содержимого `dist/`.

## Как редактировать

- Тексты, разделы и ссылки: `dist/index.html`.
- Основные цвета: переменные `:root` в начале `dist/styles.css`.
- Адаптация: медиазапросы в конце `dist/styles.css`.
- Поведение списка задач, меню и тарифов: `dist/script.js`.

## Описание для портфолио

**TaskFlow — Responsive SaaS Landing Page**

A responsive landing page concept for a fictional productivity app, built with HTML, CSS, and vanilla JavaScript. Includes an interactive task checklist, a billing switch, mobile navigation, and accessible FAQ disclosures. Designed for mobile and desktop, with no external dependencies.

Указывайте честно: учебный концепт, созданный с помощью AI, а не коммерческий заказ. Перед предложением похожей услуги клиенту разберитесь, как менять тексты, стили и поведение страницы.
