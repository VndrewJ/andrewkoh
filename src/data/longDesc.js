export const longDesc = {
    MIDI_CTRL: 
`This project is a small scale version of one I've wanted to build for years as a means to learn **RTOS** development and **matrix scanning** for devices with a high amount of inputs to eventually build a fully fleshed out version of it later on.
Using spare parts I had lying around I decided to go with 2 control surfaces that I could map via firmware.
I outlined some key specifications as a challenge for myself:

1. To use **MIDI** over HID to practice building structured messages.
2. To make use of ESP32’s BLE stack for **wireless** connectivity.
3. To make it as **real-time** as BLE allowed me to.

The real-time specification in particular I wanted to do because I firmly believe in the user experience, especially when it comes to something like making music.
For the architecture of this device I split the BLE stack and matrix scanning over **dual cores**, with the latter running via hardware timer interrupts at 1kHz. This ensures **deterministic** performance without blocking the connection stack.
I chose to use bit-shifting where I could in implementing the **Moving Average Filter** for the ADC to keep calculations as lightweight as possible to minimise latency between human input and device output.

As a result, I was able to achieve **sub-millisecond input latency** which I then tested on GarageBand on IOS.
For future works and improvements I'd want to fully flesh out the idea of a wireless MIDI controller, including more control surfaces, velocity, and a proper enclosure.
`,
    POSE_EST:
`This was my final year project for my Bachelor's degree in Mechatronics Engineering. The main focus of which was to implement a **6D pose estimation** system for **novel objects**.
This was to be implemented onto an existing autonomous assembly robot using **ROS (Robot Operating System)** previously developed by phds in my department for the purpose of assembly robot competitions (e.g IEEE ICRA).

An Intel RealSense D435i depth camera was mounted to a UR5e robotic arm to capture point cloud data. Because the system needed to be lightweight due to hardware constraints, I researched and compared various algorithms, 
ultimately selecting the **Viewpoint Feature Histogram (VFH)** and **K-Nearest Neighbor (k-NN)** classifier from the **Point Cloud Library (PCL)** for their balance of performance and computational efficiency.

In addition to the vision pipeline, **Forward Kinematics** were implemented to translate these predictions into accurate robotic manipulation. The entire system was validated in Gazebo simulations before transitioning to the physical hardware.

Testing was done by comparing the predicted pose of the object to the actual pose as measured by the depth camera, and I was able to achieve a **sub millimeter accuracy**, taking into account 
systematic error. 

For future improvements, an improved, systematic testing setup would help greatly for further developing the system, especially in moving to real-time training and testing. 

`
}
