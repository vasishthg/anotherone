from flask import Flask, render_template, session, request, url_for, redirect
import datetime
from flask_mysqldb import MySQL
import MySQLdb.cursors
import mysql
import mysql.connector

app = Flask(__name__)
app.config["SECRET_KEY"] = "yetanotherportfolio"
app.config["MYSQL_DB"] = "portfoliodb"
app.config["MYSQL_USER"] = "root"
app.config["MYSQL_PASSWORD"] = "toor"
app.config["MYSQL_HOST"] = "localhost"
mysql = MySQL(app)

@app.route('/', methods=["GET", "POST"])
def index():
    ltime = request.args.get("time")
    if request.method == "POST" and "review-form" in request.form:
        reviewcontent = request.form.get("review-form")
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("INSERT INTO ayus-review VALUES(NULL, %s)", [reviewcontent])
        mysql.connection.commit()
        return redirect('/')
    return render_template("index.html", ltime = ltime) 

@app.route('/work', methods=["GET", "POST"])
def work():
    ltime = request.args.get("time")
    if request.method == "POST" and "review-form" in request.form:
        reviewcontent = request.form.get("review-form")
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("INSERT INTO ayus-review VALUES(NULL, %s)", [reviewcontent])
        mysql.connection.commit()
        return redirect('/')
    return render_template("work.html", ltime = ltime) 

@app.route('/about', methods=["GET", "POST"])
def abt():
    ltime = request.args.get("time")
    if request.method == "POST" and "review-form" in request.form:
        reviewcontent = request.form.get("review-form")
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("INSERT INTO ayus-review VALUES(NULL, %s)", [reviewcontent])
        mysql.connection.commit()
        return redirect('/')
    return render_template("abt.html", ltime = ltime) 

@app.route('/pricing', methods=["GET", "POST"])
def p():
    ltime = request.args.get("time")
    if request.method == "POST" and "review-form" in request.form:
        reviewcontent = request.form.get("review-form")
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("INSERT INTO ayus-review VALUES(NULL, %s)", [reviewcontent])
        mysql.connection.commit()
        return redirect('/')
    return render_template("pr.html", ltime = ltime) 


@app.route('/contact', methods=["GET", "POST"])
def abct():
    ltime = request.args.get("time")
    if request.method == "POST" and "review-form" in request.form:
        reviewcontent = request.form.get("review-form")
        cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cur.execute("INSERT INTO ayus-review VALUES(NULL, %s)", [reviewcontent])
        mysql.connection.commit()
        return redirect('/')
    if request.method == "POST":
        name = "None"
        org = "None"
        email = "None"
        subject = "None"
        query = "None"
        if "cnnname" in request.form:
            name = request.form.get("cnnname")
        if "cnnorg" in request.form:
            org = request.form.get("cnnorg")
        if "cnnemail" in request.form:
            email = request.form.get("cnnemail")
        if "cnnsubject" in request.form:
            subject = request.form.get("cnnsubject")
        if "cnnquery" in request.form:
            query = request.form.get("cnnquery")
        cur.execute("INSERT INTO ayus-cn VALUES(NULL, %s, %s, %s, %s, %s)", [name, org, email, subject, query])
        mysql.connection.commit()
    return render_template("cn.html", ltime = ltime) 

if __name__ == "__main__":
    app.run(debug=True)