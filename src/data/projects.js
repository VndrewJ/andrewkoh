import { longDesc } from "./longDesc";

export const projects = [
  {
    id: 1,
    title: "BLE-MIDI Controller",
    category: "Embedded",
    description: "A bluetooth low energy midi controller built for real-time responsiveness",
    longDesc: longDesc.MIDI_CTRL,
    tags: ["ESP32", "C++", "RTOS"],
    techStack: [
      { label: "Hardware", items: ['ESP32 WROOM']},
      { label: "Protocols", items: ['BLE', 'MIDI']},
      { label: "Tools and Frameworks", items: ['FreeRTOS', 'ESP-IDF', 'Unity'] },
    ],
    links: [
      { name: "Github", type: "github", url: "https://github.com/VndrewJ/midi-media-controller" },
    ],
    image: "/thumbnails/midi-ctrlr.jpeg", 
    folder: "midi-ctrlr",
    media: [
      { type: 'video', url: 'live_demo.webm', caption: 'Live demo of the modulation function' },
      { type: 'video', url: 'modulation.webm', caption: 'Modulation function test' },
      { type: 'video', url: 'mute.webm', caption: 'Mute function test' },
    ]
  },
  {
    id: 2,
    title: "6D Pose Estimation for Autonomous Assembly Robot",
    category: "Robotics, Software",
    description: "A computer vision system for estimating the 6D pose of novel objects, designed for use in an autonomous assembly robot.",
    longDesc: longDesc.POSE_EST,
    tags: ["ROS", "Machine Learning", "Computer Vision"],
    techStack: [
      { label: "Hardware", items: ['UR5e Robotic Arm', 'Intel RealSense Depth Camera']},
      { label: "Tools and Frameworks", items: ['ROS', 'PCL', 'Gazebo']},
      { label: "Techniques", items: ['K-Nearest Neighbors', 'Viewpoint Feature Histrogram']},  
    ],
    links: [
      { name: "Github", type: "github", url: "https://github.com/VndrewJ/6d-pose-estimation" },
      { name: "Report", type: "pdf", url: "https://drive.google.com/file/d/1TOYAe5IlYYsCwVjIqnhcCii-3ZjSws0S/view?usp=sharing"}
    ],
    image: "/thumbnails/pose-est.jpg",
    folder: "pose-est",
    media: [
      { type: 'image', url: '4.png', caption: 'Point Cloud render of the test object with calculated centroid' },
      { type: 'image', url: 'depth_cam1.jpg', caption: 'RViz simulation of UR5e with depth camera attachment' },
      { type: 'image', url: 'test-accuracy.jpg', caption: 'Visualization of test accuracy, showing predicted vs actual pose' },
      { type: 'image', url: 'active_percep_change.png', caption: 'Comparison of the change in position between VFH Pose Estimation and forward kinematics in the x and y axes.'},
      { type: 'video', url: 'IMG_5574.mp4', caption: 'Demo of robot moving the object'},
    ]
  },
  {
    id : 3,
    title: "Telemetry Oximeter Platform",
    category: "Software",
    description: "A telemetry platform for pulse oximeters, enabling remote monitoring of patient vitals.",
    longDesc: "tbd",
    tags: ["Full-Stack Development", "IoT"],
    techStack: [
      { label: "Tools and Frameworks", items: ['React', 'Flask', 'Supabase (PostgreSQL)']},
      { label: "Connectivity", items: ['BLE (Bleak)', 'REST API', 'Websockets']},
      { label: "Database", items: ['Supabase', 'PostgreSQL']},
      { label: "Security", items: ['Session Based Authentication']},
    ],
    links: [
      { name: "Github", type: "github", url: "https://github.com/VndrewJ/tele-oximeter"},
    ],
    image: "/thumbnails/teleoximeter.jpg",
    folder: "tele-oximeter",
    media: [
      { type: 'image', url: 'Home.jpg', caption: 'Home page of web app, asking for session key a desired session.'},
      { type: 'image', url: 'session.jpg', caption: 'Last 50 data entries for a sample session, updated live.' },
      { type: 'image', url: 'tables.jpg', caption: 'SpO and Pulse Tables, updated live.'}
    ]
  },
  {
    id: 4,
    title: "Anthropomorphic Underactuated Robotic Gripper",
    category: "Robotics, Mechanical",
    description: "A robotic gripper designed to mimic the human hand's dexterity using a singular actuator.",
    longDesc: "tbd",
    tags: ["CAD", "Mechanical Design", "Rapid Prototyping"],
    techStack: [
      { label: "Hardware", items: ['Dynamixel MMX-64AR', '3D Printed Components']},
      { label: "Tools", items: ['Bare Hands', 'Onshape']},
      { label: "Techniques", items: ['Wipple Tree Mechanism', 'Tendon Driven Actuation', 'Rubber Mold Casting']},
    ],
    links: [
      { name: "Report", type: 'pdf', url: "https://drive.google.com/file/d/1-s0Xuaub8Gksa2h-Hfhu7nA4Bs0FA6i4/view?usp=sharing" },
    ],
    image: "thumbnails/gripper.jpg",
    folder: "gripper",
    media: [
      { type: 'image', url: 'exploded.png', caption: 'Exploded view of the gripper design' },
      { type: 'image', url: 'finger.jpg', caption: 'Phalange design ' },
      { type: 'image', url: 'finger-section.JPG', caption: 'Sectional view of the tendon actuation mechanism' },
      { type: 'image', url: 'tests.jpg', caption: 'Tests of the gripper on various objects'},
      { type: 'video', url: 'bottle.mp4', caption: 'Demo of the gripper picking up a 2.5L bottle' },
      { type: 'video', url: 'chain.mp4', caption: 'Demo of the gripper picking up a bundle of chain without chain hanging' },
    ]
  },
  {
    id : 5,
    title: "Autonomous Fire Fighting Robot",
    category: "Embedded, Robotics",
    description: "A robot that autonomously navigates an obstacle course and extinguishes a candle flame.",
    longDesc: "Developed a behavioral control system on an AVR RISC architecture. The robot utilizes a suite of sensors to navigate complex environments, detect flame signatures via IR, and execute an extinguishing routine while maintaining stability and obstacle avoidance.",
    tags: ["AVR RISC", "C", "Control Systems"],
    techStack:[
      { label: "Hardware", items: ['ATMega328p', 'IR Sensor', 'Ultrasonic', 'Servo Motors']},
      { label: "Techniques", items: ['Behavioral Control', 'Sensor Fusion', 'PID Control', 'Kalman Filter']},
    ],
    links: [
      { name: "Github", type: "github", url: "https://github.com/eoxe316/706project2"},
      { name: "PDF Report", type: "pdf", url: "https://drive.google.com/file/d/1yipn0b2hiPKgmFebplIBglRYtJxicD4i/view?usp=sharing" },
    ],
    image: "/thumbnails/fire-fighting.JPG",
    folder: "fire-fighting",
    media: [
      { type: 'image', url: 'robot.jpg', caption: 'Diagram of the robot' },
      { type: 'image', url: 'behavioural_control.jpg', caption: 'Behavioral control flowchart' },
      { type: 'video', url: 'fire-fighting-demo.mp4', caption: 'Live demo of the robot' },
    ]
  },
  {
    id : 6,
    title: "Reinforcement Learning for Pokemon Red",
    category: "Software, Machine Learning",
    description: "A reinforcement learning agent trained to play Pokemon Red using various policies and custom reward functions.",
    longDesc: "tbd",
    tags: ["Reinforcement Learning", "Python"],
    techStack: [
      { label: "Tools and Frameworks", items: ['OpenAI Gym', 'PyBoy', 'Stable Baselines3']},
      { label: "Policies", items: ['PPO', 'TD3', 'SAC', 'LAPSAC']},
      { label: "Techniques", items: ['Reward Shaping']},
    ],
    links: [
      { name: "Github", type: "github", url: "https://github.com/VndrewJ/compsys726_pokemon_agent" },
    ],
    image: "/thumbnails/ai-pokemon.png",
    folder: "ai-pokemon",
    media: [
      { type: 'image', url: 'LAPSACvSAC.png', caption: 'Comparison of LAPSAC and SAC algorithms.' },
      { type: 'image', url: 'LAPSAC-results.jpg', caption: 'Results of LAPSAC algorithm over 11k steps.' },
      { type: 'video', url: 'Results.mp4', caption: 'Video showcasing the performance of the trained agent.' }
    ]
  },
  {
    id : 7,
    title: "Weld Gap Detection",
    category: "Software",
    description: "Computer Vision system for detecting weld gap size and location",
    longDesc: "tbd",
    tags: ["OpenCV", "Computer Vision"],
    techStack: [
      { label: "Tools and Frameworks", items: ['OpenCV']},
      { label: "Techniques", items: ['Sobel Filtering', 'Feature Detection']},
    ],
    links: [
      { name: "Github", type: "github", url: "https://github.com/VndrewJ/Computer-vision-project"},
    ],
    image: "/thumbnails/weld-gap-detection.jpg",
    folder: "weld-gap-detection",
    media: [
      { type: 'image', url: 'interim-filter1.JPG', caption: 'Vertical Sobel filter applied to an image of a weld seam.'},
      { type: 'image', url: 'interim-filter2.JPG', caption: 'Binary Thresholding occurs to create an edge mask on the weld seam.' },
      { type: 'image', url: 'weld-gap.jpg', caption: 'Hough Line Transform is applied to the edge mask to detect lines in the image.'},
      { type: 'image', url: 'original.jpg', caption: 'Original image of the weld seam.'}
    ]
  },
];