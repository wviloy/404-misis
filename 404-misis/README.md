# 404-misis

🔧 1. Клонируй репозиторий
Через PyCharm:
Открой PyCharm

Выбери File → New → Project from Version Control

Вставь ссылку:

arduino
Копировать
Редактировать
https://github.com/wviloy/404-misis.git
Нажми Clone

Или через терминал:
bash
Копировать
Редактировать
git clone https://github.com/wviloy/404-misis.git
cd 404-misis
🐍 2. Создай виртуальное окружение
bash
Копировать
Редактировать
python -m venv venv
source venv/bin/activate     # для Windows: venv\Scripts\activate
📦 3. Установи зависимости
bash
Копировать
Редактировать
pip install -r requirements.txt
⚙️ 4. Настрой .env, если нужен
Если в проекте используется .env, то:

bash
Копировать
Редактировать
cp .env.example .env
Заполни нужные переменные в .env.

🌿 5. Создай новую ветку
bash
Копировать
Редактировать
git checkout -b твоя-ветка
✍️ 6. Сделай изменения, закоммить и отправь
bash
Копировать
Редактировать
git add .
git commit -m "Что сделал"
git push origin твоя-ветка
🔁 7. Создай Pull Request на GitHub
Перейди на https://github.com/wviloy/404-misis

Там появится кнопка "Compare & pull request"

Нажми её → опиши изменения → нажми "Create pull request"

🛑 Правила для всех:
Нельзя пушить напрямую в main

Работай в своих ветках

Один Pull Request = одна задача

