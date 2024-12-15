# ROS Log Viewer and Analyzer

## Overview
ROS Log Viewer and Analyzer is a web application designed to upload, view, filter, and analyze ROS (Robot Operating System) log files. The application provides a user-friendly interface to search and filter logs based on various criteria and download the filtered logs for further analysis.

## Deployment
Netlify Link: https://roslogview.netlify.app/
Backend is deployed on Render.

## Features
- **Upload Logs**: Upload `.log` and `.txt` files containing ROS logs. Note: the logs should be in the format: [YYYY-MM-DD HH:MM:SS] [Level] [Node] Message
- **View Logs**: Display logs in a tabular format with pagination.
- **Search and Filter**: Search logs by message content and filter by log level and node.
- **Download Logs**: Download filtered logs as a CSV file.
- **Pagination**: Navigate through logs with pagination controls.

## Tools Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Flask, Gunicorn
- **Deployment**: Render for Backend, Netlify for Frontend
- **Other Libraries**: Axios (for API requests), React Icons (for icons)

## Setup Instructions

### Prerequisites
- Node.js and npm (for frontend)
- Python and pip (for backend)

### Frontend Setup
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/ros-log-viewer.git
    cd ros-log-viewer
    ```

2. **Install Dependencies**:
    ```sh
    cd frontend
    npm install
    ```

3. **Run the Frontend**:
    ```sh
    npm run dev
    ```
    This will start the React development server on `http://localhost:3000`.

### Backend Setup
1. **Navigate to Backend Directory**:
    ```sh
    cd backend
    ```

2. **Install Dependencies**:
    ```sh
    pip install -r requirements.txt
    ```

3. **Run the Backend**:
    ```sh
    flask run --host=0.0.0.0 --port=8000
    ```
    This will start the Flask application on `http://localhost:8000`.

## Usage
1. **Upload Logs**: Click on the "Upload" button to select and upload a `.log` or `.txt` file.
2. **View Logs**: The uploaded logs will be displayed in a table with pagination controls.
3. **Search and Filter**: Use the search bar and filter dropdowns to refine the displayed logs according to a Node and Severity Level.
4. **Download Logs**: Click on the download button to download the filtered logs as a CSV file.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
