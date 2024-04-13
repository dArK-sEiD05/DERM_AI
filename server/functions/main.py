# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`
from flask import Flask, request, jsonify, render_template
from firebase_admin import auth, credentials, initialize_app
import tensorflow as tf
from flask_cors import CORS, cross_origin
import numpy as np
import jwt
import cv2
import datetime
from functools import wraps
from google.cloud import storage
import os


app = Flask(__name__)
import firebase_admin
from firebase_admin import credentials
from google.cloud import firestore


cred = credentials.Certificate("./serviceAccountKey.json")
firebase_admin.initialize_app(cred)

# Initialize Firebase Admin SDK
from flask import Flask, request, jsonify

import time
import urllib.request
import os


from flask import send_file
from google.cloud import firestore
from google.oauth2 import service_account

# Initialize Firestore client with service account credentials
credentials = service_account.Credentials.from_service_account_file("./serviceAccountKey.json")
db = firestore.Client(credentials=credentials)

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = "images" 
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./serviceAccountKey.json"

@app.route('/')
def hello():
    # Initialize Firestore client
    db = firestore.Client()

    return "hello world"

model = tf.keras.models.load_model("./model/model1.h5")
class_names = [('akiec', 'Actinic keratoses and intraepithelial carcinomae'),  # Index 0
 ('bcc', 'basal cell carcinoma'),                                # Index 1
 ('bkl', 'benign keratosis-like lesions'),                       # Index 2
 ('df', 'dermatofibroma'),                                       # Index 3
 ('nv', 'melanocytic nevi'),                                     # Index 4
 ('vasc', ''),                 # Index 5
 ('mel', 'melanoma')]  

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def predict_skin_disease(image):
    class_names = [('akiec', 'Actinic keratoses and intraepithelial carcinomae'),  # Index 0
                   ('bcc', 'basal cell carcinoma'),                                # Index 1
                   ('bkl', 'benign keratosis-like lesions'),                       # Index 2
                   ('df', 'dermatofibroma'),                                       # Index 3
                   ('nv', 'melanocytic nevi'),                                     # Index 4
                   ('vasc', 'pyogenic granulomas and hemorrhage'),                 # Index 5
                   ('mel', 'melanoma')]  

    # Resize image
    resized_image = cv2.resize(image, (28, 28))
    batch_size = 4
    batch_of_images = np.array([resized_image] * batch_size)

    # Make prediction on preprocessed image
    pred = model.predict(batch_of_images)
    predicted_class = np.argmax(pred, axis=1)
    predicted_class_number = predicted_class[0]
    predicted_class_name = class_names[predicted_class_number]
    print(predicted_class_name)

    return predicted_class_name







# Route to create a new product
@app.route('/create', methods=['POST'])
def create_product():
    db = firestore.Client()
    try:
        # Check if the request contains a file
        if 'file' not in request.files:
            return jsonify({'success': False, 'msg': 'No file part'}), 400

        file = request.files['file']

        # Check if the file is an image
        if file.filename == '':
            return jsonify({'success': False, 'msg': 'No selected file'}), 400
        if file and allowed_file(file.filename):
            # Generate unique ID based on current timestamp
            id = int(time.time() * 1000)

            # Save the image to a directory (you might need to create this directory)
            image_path = os.path.join('uploads', str(id) + '.jpg')
            file.save(image_path)

            # Add data to Firestore
            data = {
                'productId': id,
                'imageURL': image_path
            }
            db.collection('products').document(str(id)).set(data)

            return jsonify({'success': True, 'data': data}), 200

        return jsonify({'success': False, 'msg': 'Invalid file type'}), 400
    except Exception as e:
        return jsonify({'success': False, 'msg': f'Error: {e}'}), 500

# Function to check if the file extension is allowed



def read_image_from_url(url):
    try:
        url = str(url)
        # Open the URL and read the image data
        req = urllib.request.urlopen(url)
        arr = np.asarray(bytearray(req.read()), dtype=np.uint8)

        # Decode the image data into a NumPy array
        img = cv2.imdecode(arr, -1)
       
        return img
    except Exception as e:
        print(f"Error reading image from URL: {e}")
        return None


@app.route('/upload', methods=['PUT'])
def upload_image():
    try:
        url_param = request.json.get('url')
        # Construct the URL for fetching the image from Firebase Storage
        print(f"Type of 'url' parameter: {type(url_param)}")

        # Construct the URL for fetching the image from Firebase Storage
        image_name = str(url_param)  # Ensure that the 'url' parameter is a string
        

        # Read the image from URL
        image = read_image_from_url(image_name)

        if image is not None:
            pred = predict_skin_disease(image)
            sugg = skin_disease_suggestions(pred[0])
            # Serialize prediction and suggestions as dictionaries
            response_data = {
                'prediction': pred,
                'suggestions': sugg
            }
            return (response_data), 200
        else:
            return jsonify({'success': False, 'msg': 'Failed to read image from URL'}), 500
    except Exception as e:
        return jsonify({'success': False, 'msg': f'Error: {e}'}), 500
    
@app.route('/jwtVerification', methods=['GET'])
def jwt_verification():
    print("passes")
    if 'Authorization' not in request.headers:
        return jsonify({'msg': 'No token provided'}), 500
    
    token = request.headers['Authorization'].split(" ")[1]
    
    
    try:
        decoded_value = auth.verify_id_token(token)
        print(decoded_value)
        return jsonify({'success': True, 'data': decoded_value}), 200
    
    except Exception as e:
        return jsonify({'success': False, 'msg': f'Error verifying token: {e}'}),500

messages = []

def skin_disease_suggestions(skin_disease):
    suggestions = {
        
        "nv": {
            "Preventive Measures": ["Regularly monitor your skin for any changes in moles or spots",
                                    "Avoid excessive exposure to sunlight, and use sunscreen regularly",
                                    "Wear protective clothing, hats, and sunglasses when outdoors"],
            "Curative Measures": ["Consult a dermatologist for mole removal or biopsy if necessary",
                                    "Seek medical attention if you notice any unusual growth or changes in moles"],
            "Medicative Suggestions": ["Melanocytic nevi are generally benign and do not require medication for treatment. Dermatologist may recommend further treatment options which could include surgical excision, topical treatments, or other therapies."],
                                  
        },
        "mel": {
            "Preventive Measures": ["Perform regular self-examinations to detect any changes in moles or skin lesions",
                                    "Avoid prolonged sun exposure, especially during peak hours",
                                    "Use broad-spectrum sunscreen with a high SPF regularly"],
            "Curative Measures": ["Seek immediate medical attention for any suspicious or changing moles",
                                    "Undergo surgical excision or other treatments as recommended by your dermatologist"],
            "Medicative Suggestions": ["Immunotherapy drugs, such as pembrolizumab, nivolumab, ipilimumab, and others, work by enhancing the body's immune response against cancer cells."]
        },
        "bkl": {
            "Preventive Measures": ["Perform regular skin checks and monitor any changes in lesions or spots",
                                    "Protect your skin from UV radiation by wearing sunscreen and protective clothing",
                                    "Avoid indoor tanning beds and excessive sun exposure"],
            "Curative Measures": ["Consult a dermatologist for evaluation and possible biopsy of suspicious lesions",
                                    "Consider cryotherapy or surgical excision for treatment of benign keratosis-like lesions"],
            "Medicative Suggestions": ["Keratolytic agents: Creams containing ingredients like salicylic acid, urea, or alpha hydroxy acids (AHAs) can help soften and exfoliate the surface of the lesions, improving their appearance."]
        },
        "bcc": {
            "Preventive Measures": ["Limit exposure to sunlight, especially during peak hours",
                                    "Use protective clothing, hats, and sunglasses when outdoors",
                                    "Regularly check your skin for any new growths or changes in existing lesions"],
            "Curative Measures": ["Consult a dermatologist for evaluation and treatment options",
                                    "Consider surgical excision, Mohs surgery, or other interventions as recommended"],
            "Medicative Suggestions": ["Prescription creams containing imiquimod or 5-fluorouracil may be used for certain superficial basal cell carcinomas."]
        },
        "vasc": {
            "Preventive Measures": ["Avoid trauma or injury to the skin that may lead to bleeding or granuloma formation",
                                    "Seek prompt medical attention for any unusual growths or bleeding lesions",
                                    "Protect your skin from excessive sun exposure and environmental factors"],
            "Curative Measures": ["Consult a dermatologist for evaluation and treatment of pyogenic granulomas",
                                    "Consider surgical removal, cryotherapy, or other interventions as recommended"],
            "Medicative Suggestions": ["Silver nitrate sticks or topical medications like timolol may be applied to help reduce bleeding and promote healing."]
        },
        "akiec": {
            "Preventive Measures": ["Perform regular skin checks and monitor any changes in moles or spots",
                                    "Use sunscreen regularly, and avoid excessive sun exposure",
                                    "Seek medical attention for any suspicious or changing lesions"],
            "Curative Measures": ["Consult a dermatologist for evaluation and possible biopsy of suspicious lesions",
                                    "Undergo surgical excision or other treatments as recommended"],
            "Medicative Suggestions": ["Prescription creams containing 5-fluorouracil, imiquimod, or diclofenac gel may be applied to treat actinic keratoses."]
        },
        "df": {
            "Preventive Measures": ["Monitor any new or changing skin lesions or growths",
                                    "Protect your skin from excessive sun exposure and trauma",
                                    "Seek medical attention for any suspicious or atypical lesions"],
            "Curative Measures": ["Consult a dermatologist for evaluation and possible biopsy of dermatofibromas",
                                    "Consider surgical excision or other treatments as recommended"],
            "Medicative Suggestions": ["Topical corticosteroid creams or ointments can help reduce inflammation, itching, and discomfort associated with dermatofibromas. Examples include hydrocortisone cream or triamcinolone acetonide cream."]
        }
    }

    return suggestions.get(skin_disease, "No suggestions available for this skin disease")

# Example usage:
# skin_disease = ""
@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.get_json()
    message = data['message']
    print(message)
    messages.append(message)
    return jsonify({'success': True})

@app.route('/get_messages', methods=['GET'])
def get_messages():
    return jsonify({'messages': messages})

if __name__ == '__main__':
    app.run(debug=True)


# initialize_app()
#
#
# @https_fn.on_request()
# def on_request_example(req: https_fn.Request) -> https_fn.Response:
#     return https_fn.Response("Hello world!")