const particlesConfig = {
    "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 1362.9002517356944
          }
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0.1,
            "color": "#201a4d"
          },
        },
        "opacity": {
          "value": 0.3,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4.008530152163807,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0,
            "size_min": 11.053621458328248,
            "sync": true
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 0.5758378440631123
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 0.5440917322419012,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
};

export default particlesConfig;