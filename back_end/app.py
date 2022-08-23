import os
from flask import Flask, render_template, request, jsonify
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from dotenv import load_dotenv
from models import db, User, Project

load_dotenv() 

app = Flask(__name__)
app.url_map.slashes = False 
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///proyecto-final.db"
app.config['JWT_SECRET_KEY'] = 'super-secret'


db.init_app(app)
jwt = JWTManager(app)
Migrate(app,db) 
CORS(app)
manager = Manager(app) 
manager.add_command('db', MigrateCommand) 




@app.route("/")
def main():
    return render_template('index.html')


"""-------RUTAS USUARIO-------"""

@app.route("/api/users", methods=['GET'])
def get_users():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200

@app.route("/api/users/register", methods=['POST'])
def register():
    name = request.json.get('name')
    password = request.json.get('password')
    emailuser = request.json.get('emailuser')

    if not name: return jsonify({"msg": "El nombre es requerido"}), 400
    if not password: return jsonify({"msg": "La contraseña es requerida"}), 400
    if not emailuser: return jsonify({"msg": "La contraseña es requerida"}), 400


    user = User.query.filter_by(name=name).first()
    if user: return jsonify({"msg": "El usuario ya existe!!!"}),400

    user = User()
    user.name = name
    user.password = password
    user.emailuser = emailuser

    user.save()

    if not user: return jsonify({"msg": "El registro falló!!!"}),400

    return jsonify(), 200


"""--------RUTAS PROYECTOS--------"""

@app.route("/api/proyectos", methods=['GET'])
def get_proyectos():
    proyectos = Project.query.all()
    proyectos = list(map(lambda proyectos: proyectos.serialize(), proyectos))

    return jsonify(proyectos), 200

@app.route("/api/proyectos/register", methods=['POST'])
def proyecto():
    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    autor = request.json.get('autor')

    if not nombre: return jsonify({"msg": "El nombre del proyecto es requerido"}), 400
    if not descripcion: return jsonify({"msg": "La descripcion es requerida"}), 400
    if not autor: return jsonify({"msg": "El autor es requerido"}), 400


    proyecto = Project.query.filter_by(nombre=nombre).first()
    if proyecto: return jsonify({"msg": "El proyecto ya existe!!!"}),400

    proyecto = Project()
    proyecto.nombre = nombre
    proyecto.descripcion = descripcion
    proyecto.autor = autor

    proyecto.save()

    if not proyecto: return jsonify({"msg": "El registro falló!!!"}),400

    return jsonify(), 200 

@app.route('/api/proyectos/delete/<int:idproyecto>', methods=['DELETE'])
def delete_proyecto(idproyecto):

    proyecto = Project.query.get(idproyecto)
    proyecto.delete()
    
    return jsonify({ "status": True, "msg": "Proyecto elminado"}), 200


if __name__ == '__main__':
   app.run()
