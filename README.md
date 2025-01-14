# TuPark
TuPark - Parking Assignment Application

# TuPark - Parking Assignment Application

TuPark is an application developed in 2013 as part of my PhD thesis. The application uses a genetic algorithm to assign a set of vehicles to the best parking places, with the objective of minimizing the total distance traveled. 

This project provides a solution for optimizing parking assignments by reducing travel distances for vehicles.

## Requirements

- **Java (2013)**: The project was developed using Java in 2013, so ensure your environment is set up to run Java applications.
- **Windows OS**: The application was originally developed and tested on Windows. If you are using another operating system, additional configuration might be required.
- **Google Maps API**: To display the parking assignment results on a map, you will need a valid Google Maps API key.

## Setup Instructions

### Step 1: Execute the `asp4.jar` File
1. To run the application, execute the `asp4.jar` file. You can do this from the command line or by double-clicking the file, depending on your Java installation.

### Step 2: Upload the Fixed VPD File
1. After running the application, upload the `fixedvpd` file. This file contains the fixed data necessary for the parking assignment process.

### Step 3: Select the Benchmark
1. Choose a benchmark from the list to generate variable data, such as vehicle coordinates. This data will be used for the assignment process.

### Step 4: Choose the Objective
1. Choose the objective for the optimization:
    - **Minimize Distance**: The algorithm will try to minimize the total distance traveled by vehicles.
    - **Minimize Distance and Cost**: The algorithm will also consider the cost in addition to minimizing the distance.

### Step 5: Display the Map
1. Once the parking assignment is calculated, you can display the results on a map. 
2. To display the map, you need to enter the car index in the relevant input field.
   
   **Important Note**: Make sure to update the `index.html` file with your Google Maps API key to enable map rendering.

### Step 6: Updating the `index.html` with Your Google Maps API Key
1. Open the `index.html` file in any text editor.
2. Find the section where the Google Maps API script is included.
3. Replace the placeholder `YOUR_API_KEY` with your actual Google Maps API key.
4. Save the file.

## Environment

- **Programming Language**: Java (2013)
- **Operating System**: Windows (originally developed on Windows)

## License

This project is open-source, and you are free to modify it for your purposes. However, please cite the original work if you use it in any research or development project.
### Abidi, S., Krichen, S., Alba, E. et al. A Hybrid Heuristic for Solving a Parking Slot Assignment Problem for Groups of Drivers. Int. J. ITS Res. 15, 85–97 (2017). https://doi.org/10.1007/s13177-016-0123-1

---

This README file includes all the necessary instructions and details for running your application, as well as important reminders about updating the `index.html` file for Google Maps integration.
