from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains (adjust for production)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    print("Received contact form data:")
    print(f"Name: {name}, Email: {email}, Phone: {phone}, Message: {message}")

    # Here, add logic to save to DB or send email if needed

    return jsonify({"success": True, "message": "Form submitted successfully"})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
