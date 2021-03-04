let label1 = ['Stock', 'Used'];
let data1 = [89, 11];
let colors1 = ['#298acd', '#ffffff'];
let myGraph1 = document.getElementById("waterGraph").getContext('2d');

let graph1 = new Chart(myGraph1, {
  type: 'doughnut',
  data: {
    labels: label1,
    datasets: [ {
      data: data1,
      backgroundColor: colors1
    }]
  },
  options: {
    title: {
      text: "What is our water level? (x100 liters)",
      display:true
  }
}
});

let label2 = ['Mercury', 'Venus', 'Mars', 'Jupiter', ' Saturn', 'Uranus', 'Neptune', 'Pluto'];
let data2 = [57.9, 108.2,227.9, 778.3, 1427, 2871, 4497.1, 5913];
let colors2 = ['#040c44', '#373472','#8e92bf','#3f99d2', '#76c4ec','#298acd', '#fccbf4', '#13366c'];
let myGraph2 = document.getElementById("distanceGraph").getContext('2d');

let graph2 = new Chart(myGraph2, {
  type: 'bar',
  data: {
    labels: label2,
    datasets: [ {
      data: data2,
      backgroundColor: colors2,
      label: 'Distance to the planet'
    }]
  },
  options: {
    title: {
      text: "How far are we from these planets? (x1000 km)",
      display:true
  }
}
});

let label3 = ['Main', 'Main 2', 'Halls', 'Bath', 'Tube 1', ' Tube 2', 'Controll'];
let data3 = [0.8,0.85,0.95,0.7,0.9,0.92,1];
let myGraph3 = document.getElementById("oxygenGraph").getContext('2d');

let graph3 = new Chart(myGraph3, {
  type: 'radar',
  data: {
    labels: label3,
    datasets: [ {
      data: data3,
      backgroundColor: 'rgba(40, 136, 204, 0.55)',
      label: "Air quality in each room"
    }]
  },
  options: {
    title: {
      text: "Oxygen quality",
      display:true
  },
  scale: {
    angleLines: {
        display: true,
        color: '#FFF',
    },
    gridLines: {
        display: true,
        color: '#FFF',
    }
}

}
});
