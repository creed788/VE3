Ve3 csv analysis app

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_name>
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

6. Open the browser and go to `http://127.0.0.1:8000/` to upload a CSV file.

## Project Explanation

This project allows users to upload a CSV file, perform basic data analysis using pandas, and visualize the results using matplotlib and seaborn. The analysis includes displaying the first few rows of the data, calculating summary statistics, and identifying missing values. The visualizations include histograms for numerical columns.
