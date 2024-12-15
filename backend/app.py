from flask import Flask, request, jsonify, send_file
from log_parser import parse_ros_logs
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_log_file():
    """
    Endpoint to upload a ROS log file and parse it.

    Returns:
        JSONResponse: Parsed log data.
    """
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if not (file.filename.endswith(".log") or file.filename.endswith(".txt")):
        return jsonify({"error": "Invalid file type. Only .log and .txt files are supported."}), 400

    try:
        # Read file content
        content = file.read().decode("utf-8")

        # Parse logs
        parsed_logs = parse_ros_logs(content)
        return jsonify({"parsed_logs": parsed_logs})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=10000)
