var ctx = document.getElementById("demoChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["a", "b", "c", "d", "e", "f"],
        datasets: [{
            label: 'No of Votes',
            data: [12, 19, 3, 5, 12, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
        }]
    }
});