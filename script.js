// Theme toggle
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
});

// Chart.js skills chart
window.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("skillsChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
      datasets: [{
        label: "Skill Level",
        data: [90, 85, 80, 60, 70],
        backgroundColor: ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: getComputedStyle(document.body).getPropertyValue('--text')
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--text')
          },
          grid: {
            color: "rgba(255,255,255,0.1)"
          }
        },
        x: {
          ticks: {
            color: getComputedStyle(document.body).getPropertyValue('--text')
          },
          grid: {
            color: "rgba(255,255,255,0.1)"
          }
        }
      }
    }
  });
});