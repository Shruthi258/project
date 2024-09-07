from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB Configuration
app.config['MONGO_URI'] = 'mongodb://localhost:27017/blog'
mongo = PyMongo(app)

@app.route('/posts', methods=['GET'])
def get_posts():
    posts = mongo.db.posts.find()
    result = []
    for post in posts:
        post['_id'] = str(post['_id'])  # Convert ObjectId to string
        result.append(post)
    return jsonify(result)

@app.route('/posts', methods=['POST'])
def create_post():
    data = request.json
    title = data.get('title')
    content = data.get('content')
    if not title or not content:
        return jsonify({'error': 'Title and content are required'}), 400
    post_id = mongo.db.posts.insert_one({'title': title, 'content': content}).inserted_id
    return jsonify({'_id': str(post_id), 'title': title, 'content': content})

@app.route('/posts/<id>', methods=['GET'])
def get_post(id):
    try:
        post = mongo.db.posts.find_one({'_id': ObjectId(id)})
        if post:
            post['_id'] = str(post['_id'])
            return jsonify(post)
        else:
            return jsonify({'error': 'Post not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/posts/<id>', methods=['PUT'])
def update_post(id):
    try:
        data = request.json
        title = data.get('title')
        content = data.get('content')
        if not title or not content:
            return jsonify({'error': 'Title and content are required'}), 400
        result = mongo.db.posts.update_one(
            {'_id': ObjectId(id)},
            {'$set': {'title': title, 'content': content}}
        )
        if result.matched_count:
            return jsonify({'_id': id, 'title': title, 'content': content})
        else:
            return jsonify({'error': 'Post not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/posts/<id>', methods=['DELETE'])
def delete_post(id):
    try:
        result = mongo.db.posts.delete_one({'_id': ObjectId(id)})
        if result.deleted_count:
            return jsonify({'message': 'Post deleted successfully'})
        else:
            return jsonify({'error': 'Post not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)



@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({'error': 'All fields are required'}), 400

    # Check if user already exists
    existing_user = mongo.db.users.find_one({'email': email})
    if existing_user:
        return jsonify({'error': 'User already exists'}), 400

    # Insert new user
    user_id = mongo.db.users.insert_one({
        'username': username,
        'email': email,
        'password': password  # Note: In a real app, hash the password!
    }).inserted_id

    return jsonify({'_id': str(user_id), 'username': username, 'email': email})

if __name__ == '__main__':
    app.run(debug=True)