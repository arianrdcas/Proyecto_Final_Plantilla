import os
from werkzeug.security import generate_password_hash, check_password_hash
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

    user = User.query.filter_by(emailuser=emailuser).first()
    if user: return jsonify({"msg": "Ya existe un usuario con el email insertado"}),400

    user = User()
    user.name = name
    user.password = generate_password_hash(password) 
    user.emailuser = emailuser

    user.save()

    if not user: return jsonify({"msg": "El registro falló!!!"}),400

    
    access_token = create_access_token(identity=user.idusuario) 

    data = {
        "access_token": access_token,
        "user": user.serialize()
    }


    return jsonify(data), 200


""" -------------------Ruta Login-------------------- """

@app.route("/api/users/login", methods=['POST'])
def login():
    name = request.json.get('name')
    
    password = request.json.get('password')

    if not name: return jsonify({"msg": "El nombre  es requerido"}), 400
    
    if not password: return jsonify({"msg": "La contraseña es requerida"}), 400

    user = User.query.filter_by(name=name).first()
    if not user: return jsonify({"msg": "El email o la contraseña es incorrecta!!!"}),400

    if check_password_hash(user.password, password): 
        access_token = create_access_token(identity= user.idusuario)
        data = {
        "access_token": access_token,
        "user": user.serialize()
        }
        return jsonify(data), 200
    else:
        return jsonify({"msg": "El nombre de usuario o la contraseña es incorrecta!!!"}),401


"""--------RUTAS PROYECTOS--------"""

@app.route("/api/proyectos", methods=['GET'])
def get_proyectos():
    proyectos = Project.query.all()
    proyectos = list(map(lambda proyectos: proyectos.serialize(), proyectos))

    return jsonify(proyectos), 200


@app.route("/api/proyecto/<int:idproyecto>", methods=['GET'])
def get_proyecto(idproyecto):
    proyecto = Project.query.filter_by(idproyecto=idproyecto)
    proyecto = list(map(lambda proyecto: proyecto.serialize(), proyecto))
    return jsonify(proyecto), 200




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

@app.route("/api/proyectos/editar/<int:idproyecto>", methods=['PUT'])
def editar(idproyecto):

    nombre = request.json.get('nombre')
    descripcion = request.json.get('descripcion')
    autor = request.json.get('autor')

    if not nombre: return jsonify({"msg": "El nombre del proyecto es requerido"}), 400
    if not descripcion: return jsonify({"msg": "La descripcion es requerida"}), 400
    if not autor: return jsonify({"msg": "El autor es requerido"}), 400

    proyecto = Project.query.get(idproyecto)
    proyecto.nombre = nombre
    proyecto.descripcion = descripcion
    proyecto.autor = autor

    proyecto.update()

    return jsonify(), 200  


@app.route('/api/proyectos/delete/<int:idproyecto>', methods=['DELETE'])
def delete_proyecto(idproyecto):

    proyecto = Project.query.get(idproyecto)
    proyecto.delete()

    if not proyecto: return jsonify({"msg": "No se pudo eliminar el proyecto!"}),400
    
    #return jsonify({ "status": True, "msg": "Proyecto elminado"}), 200

    #return jsonify(), 200

    proyectos = Project.query.all()
    proyectos = list(map(lambda proyectos: proyectos.serialize(), proyectos))

    return jsonify(proyectos), 200


"""--------RUTAS MENU--------"""

@app.route('/api/about', methods=['GET'])
@jwt_required()
def about():
    idusuario = get_jwt_identity()
    user = User.query.get(idusuario)
    return jsonify(user.serialize()),200




if __name__ == '__main__':
   app.run()
