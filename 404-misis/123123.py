from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string('''
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Мисис</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    margin-top: 50px;
                    position: relative;
                }
                .top-text {
                    font-size: 30px;
                    color: #2d2d2d;
                    margin-bottom: 20px;
                }
                .banner {
                    font-size: 50px;
                    font-weight: bold;
                    color: #2d2d2d;
                    background-color: #f7f7f7;
                    padding: 30px;
                    border-radius: 10px;
                }
                .footer {
                    font-size: 20px;
                    margin-top: 20px;
                    color: #555555;
                }
                .login-btn {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .login-btn:hover {
                    background-color: #45a049;
                }
                .event-btn {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #2196F3;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .event-btn:hover {
                    background-color: #0b7dda;
                }
                .image-container {
                    margin-top: 50px;
                }
                .image-container img {
                    width: 300px;
                    height: auto;
                }
                .logo {
                    position: absolute;
                    top: 50px; /* Увеличен отступ, чтобы логотип был ниже */
                    left: 10px;
                    width: 150px;
                    height: auto;
                }
            </style>
        </head>
        <body>
            <img src="{{ url_for('static', filename='Логотип_НИТУ_МИСиС.png') }}" alt="Логотип" class="logo">
            <button class="login-btn">Войти</button>
            <button class="event-btn">Список мероприятий</button>
            <div class="top-text">
                МИСИС МИСИС МИСИС МИСИС МИСИС
            </div>
            <div class="banner">
                МИСИС
            </div>
            <div class="footer">
                Контакты | О проекте
            </div>
            <div class="image-container">
                <img src="{{ url_for('static', filename='1123123.jpeg') }}" alt="Мисис изображение">
            </div>
        </body>
        </html>
    ''')

if __name__ == '__main__':
    app.run(debug=True)
