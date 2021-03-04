let label1 = ['Men', 'Woman'];
let data1 = [89, 11];
let colors1 = ['#298acd', '#fccbf4'];
let myGraph1 = document.getElementById("genderGraph").getContext('2d');

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
      text: "What are the gender of our space travelers?",
      display:true
  }
}
});

let label2 = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', ' Saturn', 'Uranus', 'Neptune', 'Pluto'];
let data2 = [57.9, 108.2, 149.6, 227.9, 778.3, 1427, 2871, 4497.1, 5913];
let colors2 = ['#040c44', '#373472','#855eb2', '#8e92bf','#3f99d2', '#76c4ec','#298acd', '#fccbf4', '#13366c'];
let myGraph2 = document.getElementById("distanceGraph").getContext('2d');

let graph2 = new Chart(myGraph2, {
  type: 'bar',
  data: {
    labels: label2,
    datasets: [ {
      data: data2,
      backgroundColor: colors2,
      label: 'Planets in our Universe'
    }]
  },
  options: {
    title: {
      text: "How far are the planets from the sun?(x1000 km)",
      display:true
  }
}
});

let label3 = ['China', 'Europe', 'India', 'Iran', ' Japan', 'Russia', 'United States'];
let data3 = [39,5,2,2,4,17,44];
let colors3 = ['#040c44', '#373472','#855eb2', '#8e92bf','#3f99d2', '#76c4ec','#298acd', '#fccbf4'];
let myGraph3 = document.getElementById("launchGraph").getContext('2d');

let graph3 = new Chart(myGraph3, {
  type: 'pie',
  data: {
    labels: label3,
    datasets: [ {
      data: data3,
      backgroundColor: colors3
    }]
  },
  options: {
    title: {
      text: "Orbital launches",
      display:true
  }
}
});
