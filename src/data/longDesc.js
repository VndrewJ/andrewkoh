export const longDesc = {
    MIDI_CTRL: 
`This project is a small scale version of one I've wanted to build for years as a means to learn **RTOS** development and **matrix scanning** for devices with a high amount of inputs to eventually build a fully fleshed out version of it later on.
Using spare parts I had lying around I decided to go with 2 control surfaces that I could map via firmware.
I outlined some key specifications as a challenge for myself:

1. To use **MIDI** over HID to practice building structured messages.
2. To make use of ESP32's BLE stack for **wireless** connectivity.
3. To make it as **real-time** as BLE allowed me to.

The real-time specification in particular I wanted to do because I wanted to make the user experience seamless, especially when it comes to something like making music.
For the architecture of this device I split the BLE stack and matrix scanning over **dual cores**, with the latter running via hardware timer interrupts at 1kHz. This ensures **deterministic** performance without blocking the connection stack.
I chose to use bit-shifting where I could in implementing the **Moving Average Filter** for the ADC to keep calculations as lightweight as possible to minimise latency between human input and device output.

The biggest challenge I found in this project was getting the BLE stack to work reliably, especially with multiple concurrent tasks running on the device. I had to do a lot of research in finding out the cofniguration required for the ESP32 to work with various OS BLE stacks (Windows, MACOS,IOS) which then influenced how I implemented task scheduling in RTOS. 

As a result, I was able to achieve **sub-millisecond input latency** which I then tested on GarageBand on IOS.
For future works and improvements I'd want to fully flesh out the idea of a wireless MIDI controller, including more control surfaces, velocity, and a proper enclosure.
`,
    POSE_EST:
`This was my final year project for my Bachelor's degree in Mechatronics Engineering. The main focus of which was to implement a **6D pose estimation** system for **novel objects**.
This was to be implemented onto an existing autonomous assembly robot using **ROS (Robot Operating System)** previously developed by phds in my department for the purpose of assembly robot competitions (e.g IEEE ICRA).

An Intel RealSense D435i depth camera was mounted to a UR5e robotic arm to capture point cloud data. Because the system needed to be lightweight due to hardware constraints, I researched and compared various algorithms, 
ultimately selecting the **Viewpoint Feature Histogram (VFH)** and **K-Nearest Neighbor (k-NN)** classifier from the **Point Cloud Library (PCL)** for their balance of performance and computational efficiency.

In addition to the vision pipeline, **Forward Kinematics** were implemented to translate these predictions into accurate robotic manipulation. The entire system was validated in Gazebo simulations before transitioning to the physical hardware.

The biggest challenge in this project was dealing with the noise and inaccuracies in the point cloud data, which made it difficult for the VFH algorithm to make accurate predictions. A lot of trial and error in tuning the parameters of the algorithm and implementing additional filtering techniques was required to improve the accuracy of the system.
Our testing setup was also quite rudimentary, with a paper grid taped onto the table to provide reference points for measuring the accuracy of the system, which made it difficult to get precise measurements of the system's performance.

Testing was done by comparing the predicted pose of the object to the actual pose as measured by the depth camera, and I was able to achieve a **sub-millimeter accuracy**, taking into account 
systematic error. 

For future improvements, an improved, rigid testing setup would help greatly for further developing the system, especially in moving to real-time training and testing. 

`,
    AI_POKEMON:
`For my Robotics and Intelligent Systems paper (COMPSYS726) we were tasked with designing an intelligent agent to play through Pokemon Red. 
This environment was chosen due to its prominence as a benchmark in **Reinforcement Learning**, offering a vast state space and continuous environment that poses a challenge to autonomous learning. 
This project is rooted in **behavioural robotics**, exploring how machine learning in particular has influenced the field in building artificial intelligence, especially in the real world. 

However, beating Pokemon Red in its entirety is an immense challenge in of itself, we were instead given the goal of making it to Brock, the first gym leader.
Our main goal in this assignment was to explore the behavioural requirements in getting to Brock through different **policies** and **reward functions**.

For this project, I implemented an **actor-critic** framework using the **LAPSAC** algorithm which proved to be most efficient at balancing exploration and exploitation. A **reward system** incorporating some key
state space variables were then added to guide the agent towards making it to Brock. Some of these variables included count-based exploration, sequential map progress, and xp from battling.

While the agent successfully learned to navigate Route 1 and engage in battles over 11 iterations, I hadn't let the agent train over enough time to reach the level needed to get to Brock. 
Ultimately however, this project highlighted the gap between machine learing and human-like understanding in building artificial intelligence. 
`,
    TELE_OXI:
`I wanted to build an IoT project as a means to learn more about full-stack development as well as making something that could be helpful to people in the real world. In short, this project is a 
**telemetry platform** for pulse oximeters, enabling **remote monitoring** of patient vitals, which I targeted towards use in hospitals and first responders to monitor patients remotely.

The system consists of a generic **Bluetooth Low Energy (BLE)** enabled pulse oximeter connected to a computer running a Python **Bleak** client that reads the data from the device and sends it to a **Flask** backend via a REST API. The backend then stores this data in a **Supabase (PostgreSQL)** database and serves it to a **React** frontend for real-time monitoring.
My main focus on this project was to build a robust responsive system that could handle **real-time data** streaming and display, while also ensuring secure and efficient data storage and retrieval. This is especially important in a healthcare context where data must be accurate temporally and securely handled.

Initial versions of the project used SQLite and websockets to handle the data, but I switched to Supabase for better scalability and reliability. Supabase also provided their own real-time features which I was able to leverage to update the frontend in real-time without needing to implement my own websockets.

I designed the frontend to be stripped down, only including the most essential information for monitoring patient vitals, such as heart rate and oxygen saturation levels. This included a simple dashboard with real-time graphs and the past 50 data entries for each vital sign.

For security, I implemented a **session-key based authentication** system where users must log in using the key generated by the backend to access the dashboard. This ensures that only authorized personnel can access sensitive patient data and allows for **multiple users** to monitor different patients simultaneously.

The biggest challenge I faced in this project was definately the initial learning curve as this was my first time working on a full-stack project, as well as dealing with the various connectivity issues between the BLE device, backend, and frontend. Often times, debugging would lead to research which would lead to an overwhelming amount of information to take in and apply, especially in what tools were available to me vs what I actually needed and best practices in implementing them.
I found breaking down the project into smaller parts, as well as the use of AI tools for guidance helped me in navigating and best understanding the full-stack development process, especially in the context of an IoT project with real-time data streaming and display.

Overall, I was able to successfully build a functional telemetry platform for pulse oximeters that allows for remote monitoring of patient vitals in real-time. The project provided me with valuable experience in full-stack development, IoT connectivity, and handling real-time data, which are all skills that I can apply to future projects in the IoT and healthcare technology space.

For future improvements, I'd want to create a mobile app version of the Python script allowing users to connect the oximeter to their phone and have the data sent to the backend without needing a computer. I'd also want to implement a notification system that alerts users when a patient's vitals fall outside of safe ranges, as well as adding support for multiple types of medical devices beyond just pulse oximeters.

`,
    FIRE_FIGHTING:
`The 2nd project in my Mechatronics Systems Design course (MECHENG 706) was to design a firefighting robot that could autonomously navigate an obstacle course and extinguish a fire source. This was done in teams of 4, in which I took the role of team lead and **robot behaviour designer**.
As **team lead**, I was responsible for coordinating the efforts of the team in allocating roles and tasks, as well as organising meetings and sessions for us to work on the project together. 

The main area I focused on was the design of the robot's behaviour and sensor fusion. For this, I implemented a **subsumption architecture** to manage the different behaviours of the robot, such as obstacle avoidance, fire detection, and extinguishing. This allowed for a **modular design** where each behaviour could be developed and tested independently before being integrated into the overall system.
Additionally, new behaviours could be added much more easily without needing to redesign the entire system, which was especially useful given the time constraints of the project. This allowed for our project to be quite robust and adaptable, as we were able to quickly iterate on our design and add new features as needed.

The robot itself came equipped with a variety of sensors including **ultrasonic** sensors, x4 **infrared** sensors, a **phototransistor** for fire detection, and a servo + fan for extinguishing the fire. 

Other areas I worked on were with the implementation of sensor filtering using a **Kalman Filter** and **Convolution Filter** to improve the accuracy of the robot's sensors. This was crucial as our robots sensors were quite noisy and unreliable, and without filtering the robot struggled to navigate the course effectively.

The final behaviour pipeline of the robot was as follows:
1. The robot would start by rotating, looking for the fire source using the phototransistor.
2. Once a fire was found, the phototransistor attached to the servo would face it, keeping the robot aligned in its direction. 
3. The robot would then move towards it while using its ultrasonic to calculate the distance to the fire and avoid obstacles on its front and sides using its infrared sensors.
4. Once the robot was at the fire, it would switch to extinguishing mode, where it would turn on the fan and continue to monitor the fire's status using the phototransistor until it was extinguished.
5. After extinguishing the fire, the robot would then rotate to look for the next fire source and repeat the process until both fires were extinguished.

The biggest issue we faced in this project was the unpredictability and unreliability of our sensors, making consistency in our robot a huge issue. This was especially problematic in the fire detection and extinguishing stages, where the robot would often struggle to accurately detect the fire and align itself properly to extinguish it. 
We mitigated this as much as possible through finer tuning of our filters, and making the robot behaviour as robust as possible to account for these issues. 

Overall, our robot achieved **full marks**, successfully navigating the course without collisions and extinguishing both fires. 

Looking back on the project, I think our biggest area of improvement would our use of blocking code. Many parts of our code were blocking or used a lot of resource in float calculations, which could have been the cause of a lot of our sensor reading issues and jittery behaviour.
If we were to do this project again, I would want to implement a more robust and efficient codebase, potentially using an RTOS to manage the different behaviours and sensor readings more effectively.
`,

    ROBOT_HAND:
` The main project of the MECHENG 736: Biomechatronic Systems course was to design and build a robotic gripper, acutated by a singular dynamixel servo, to pick up a variety of objects ranging from small and thin, to large and heavy. 
We were given a lot of freedom in the design of the gripper, with the only requirement being the singular motor. Additional marks were given for designs that were anthropomorphic, strongest, and most novel.

For our group, we decided to go with a 5 finger, double jointed, **anthropomorphic** design with a whipple tree mechanism to evenly distribute the force of the motor across all fingers. CAD was done in **Onshape** and parts were 3D printed in PLA with rubber molds used for hand/finger pids to increase friction.
The design process was quite iterative, with us going through multiple prototypes for the fingers and whipple tree mechanism before settling on our final design as shown below.

To mimic the actuation of a human hand, we used a **tendon driven actuation** system, where the dynamixel servo would pull on tendons attached to the fingers to close the gripper. This allowed for a more compact design and also provided a more natural movement to the fingers. 
A lot of our biggest challenges came with friction between the tendons and the guides as well as phalanges and joints, which caused a lot of our issues with getting the fingers to move smoothly and with enough force. We tried to mitigate this as much as possible using small rubber bands conencting each finger joint to try even out the tension across each tendon, but it was still quite difficult to get it right.

Our fingers were designed to be double jointed, with a proximal and distal phalange, to allow for better gripping of objects. Additionally, 2 different finger tips were used.
The first of which used a thin **fingernail design** meant for picking up thin objects such as the card and washer. The second utilised a **ramp design** meant for picking up larger, heavier, and irregularly shaped objects, such as the chain bundle.

The finger arrangement was also designed so that the 2 fingernail fingers were directly opposite each other, allowing for better gripping of thin objects, while the ramp fingers were **interlocking** with each other to provide better support for heavier objects.

Overall, our gripper was able to achieve **full marks**, being able to pick up all required objects, as well as achieving a maximum grip force of 50N, a respectable amount for a single motor gripper of our size.

For future improvements, I think the biggest area would be improving the friction in the system, as this was the main cause of our issues with getting the fingers to move smoothly and with enough force. This could be done through better material choices for the fingers and joints, as well as improving lubrication in the system. Additionally, a rack and pinion based design instead of whipple tree could potentially provide more consistent force distribution across the fingers, as we had some issues with the whipple tree mechanism getting out of sync and causing uneven finger movement.
Other designs we considered was the use of TPA plastic for the fingers, which could have provided a more flexible and compliant design, as well as a more traditional parallel jaw gripper design, which would have been simpler to build and control, but less novel and anthropomorphic.
`,
    WELD_GAP:
` The 2nd project in MECHENG 709: Indstrial Automation was to put all the theory we had learned about **computer vision** to use in building a system that could detect the gap in a weld and adjust the position of the welding torch accordingly to ensure a proper weld.
`,
}
