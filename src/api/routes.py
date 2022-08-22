"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/login', methods=['POST', 'GET'])

def login():
    email = request.json.get("email")
    password = request.json.get("password")
    
    user = User.query.filter_by(email=email).first()
    if user:
        if password != user.password:
            return jsonify({"msg": "contraseña erronea"}), 401
        else:
            access_token = create_access_token(identity=email)
            return jsonify(access_token=access_token)
    
    else:
        return jsonify({"msg": "email erroneo"}), 401
    
    response_body = {
        "message": "login"
    }
    return jsonify(response_body), 200