from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'usuario'
    idusuario = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    emailuser = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            "idusuario": self.idusuario,
            "name":self.name,
            "emailuser": self.emailuser
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
         db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()



class Project(db.Model):
    __tablename__ = 'proyecto'
    idproyecto = db.Column(db.Integer, primary_key=True)
    nombre  = db.Column(db.String(50), nullable=False, unique=True)
    descripcion  = db.Column(db.String(100))
    autor = db.Column(db.String(100), nullable=False)

    def serialize(self):
        return {
            "idproyecto": self.idproyecto,
            "nombre":self.nombre,
            "descripcion": self.descripcion,
            "autor": self.autor
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
         db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()