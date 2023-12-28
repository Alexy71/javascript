from flask import Flask, render_template
app = Flask(__name__)

@app.route("/pomodoro")
def hola():
    return render_template("pomodoro.html")