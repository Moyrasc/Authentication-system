"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required

from datetime import timedelta

api = Blueprint('api', __name__)

#Create new user
@api.route('/signup', methods=['POST'])

def signup():
    body = json.loads(request.data)
    email = request.json.get("email")
    
    user = User.query.filter_by(email= email).first()
    if user:
        if email == user.email:
            return jsonify({"msg": "email ya registrado"}), 401
    else:
        
        new_user = User(email = body ["email"], password = body ["password"])
        db.session.add(new_user)
        db.session.commit()    
        return jsonify(new_user.serialize()), 200

@api.route('/login', methods=['POST', 'GET'])

def login():
    email = request.json.get("email")
    password = request.json.get("password")
    
    user = User.query.filter_by(email=email).first()
    if user:
        if password != user.password:
            return jsonify({"msg": "contraseña erronea"}), 401
        else:
            #defino tiempo de duracion de token
            time_token = timedelta(minutes = 1)
            access_token = create_access_token(identity=email, expires_delta=time_token)
            return jsonify(access_token = access_token)
    
    else:
        return jsonify({"msg": "email erroneo"}), 401
    
    response_body = {
        "message": "login"
    }
    return jsonify(response_body), 200

#Acces private route
@api.route('/private',methods =['GET'])    
@jwt_required()
def acces_profile():
    current_user=get_jwt_identity()
    return jsonify({"msg":"acceso permitido"}), 200