from app import app,db
from flask import Flask, request,jsonify
from models import Friends


@app.route("/home",methods = ["GET"])
def home():
    return "Checking here"

@app.route("/api/friends",methods =["GET"])
def get_friends():
    friends = Friends.query.all()
    result =  [friend.to_json() for friend in friends]
    return jsonify(result)  

@app.route("/api/friends",methods=["POST"])
def create_friend():
    try:
        data = request.json

        required_fields = ["name","role","description","gender"]

        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error" : f"missing field {field}"}), 400

        name =data.get("name")
        role =data.get("role")
        description =data.get("description")
        gender =data.get("gender")
        img_url = f"https://ui-avatars.com/api/?name={name}"

        newFriend = Friends(name=name,role=role,description=description,gender=gender,img_url=img_url)

        db.session.add(newFriend)
        db.session.commit()

        return jsonify(newFriend.to_json()),201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({"error" : str(e)}),500


#delete a friend
@app.route('/api/friends/<int:id>', methods = ["DELETE"])
def delete_friend(id):
    try:
        friend = Friends.query.get(id)
        if friend == None:
            return jsonify({"error":f"No friend with the {id} is found"}),404
        else:
            db.session.delete(friend)
            db.session.commit()
            return jsonify({"msg":"Friend Deleted successfuly"}),200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error" : str(e)}),500

#update friend
@app.route('/api/friends/<int:id>',methods=["PUT"])
def update_friend(id):
    try:
        friend = Friends.query.get(id)
        if friend == None:
            return jsonify({"error":f"No friend with the {id} is found"}),404
        else:
            data = request.json

            friend.name = data.get("name",friend.name)
            friend.role = data.get("role",friend.role)
            friend.description = data.get("description",friend.description)
            friend.gender = data.get("gender",friend.gender)

            db.session.commit()
            return jsonify(friend.to_json()),200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error" : str(e)}),500

    