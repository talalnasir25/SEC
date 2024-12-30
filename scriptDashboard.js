document.addEventListener('DOMContentLoaded', function() {
    initializeCharts();
    setupEventListeners();
});

function initializeCharts() {
    // User Growth Chart
    const userGrowthCtx = document.getElementById('userGrowthChart').getContext('2d');
    new Chart(userGrowthCtx, {
        type: 'line',
        data: {
            labels: ['Jun 22', 'Jan 23', 'June 23', 'Jan 24', 'Jun 24'],
            datasets: [
                {
                    label: 'Users',
                    data: [1800, 2200, 2800, 3500, 4500],
                    borderColor: '#60a5fa',
                    tension: 0.4
                },
                {
                    label: 'Active Users',
                    data: [1700, 2000, 2500, 3200, 3600],
                    borderColor: '#818cf8',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Performance Metrics Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
        type: 'bar',
        data: {
            labels: ['Jan 23', 'Jun 23', 'Jan 24', 'Jun 24'],
            datasets: [
                {
                    label: 'Sales in 100$',
                    data: [30, 45, 65, 100],
                    backgroundColor: '#fcd34d'
                },
                {
                    label: 'Profit in 100$',
                    data: [25, 35, 55, 80],
                    backgroundColor: '#818cf8'
                },
                {
                    label: 'Customers',
                    data: [35, 50, 70, 120],
                    backgroundColor: '#60a5fa'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // User Engagement Chart
    const engagementCtx = document.getElementById('engagementChart').getContext('2d');
    new Chart(engagementCtx, {
        type: 'line',
        data: {
            labels: ['JUN22', 'JAN23', 'JUN23', 'JAN24', 'JUN24'],
            datasets: [
                {
                    label: 'Page Views',
                    data: [1000, 1200, 1800, 2300, 2000],
                    borderColor: '#60a5fa',
                    tension: 0.4
                },
                {
                    label: 'Session Duration',
                    data: [100, 400, 450, 900, 950],
                    borderColor: '#818cf8',
                    tension: 0.4
                },
                {
                    label: 'Bounce Rate',
                    data: [20, 50, 100, 250, 150],
                    borderColor: '#fcd34d',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function setupEventListeners() {
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // Export buttons
    document.querySelectorAll('.export-btn').forEach(btn => {
        btn.addEventListener('click', handleExport);
    });

    // Filters
    document.getElementById('reportType').addEventListener('change', handleFilterChange);
    document.getElementById('dateRange').addEventListener('change', handleFilterChange);
    document.getElementById('status').addEventListener('change', handleFilterChange);
    document.getElementById('search').addEventListener('input', handleFilterChange);

    // Export PDF/Excel
    document.getElementById('exportPDF').addEventListener('click', () => exportData('pdf'));
    document.getElementById('exportExcel').addEventListener('click', () => exportData('excel'));
}

function handleExport(e) {
    const reportName = e.target.closest('.report-item')?.querySelector('h3')?.textContent;
    if (reportName) {
        console.log(`Exporting ${reportName}`);
        alert(`Exporting ${reportName}`);
    }
}

function handleFilterChange() {
    const filters = {
        type: document.getElementById('reportType').value,
        date: document.getElementById('dateRange').value,
        status: document.getElementById('status').value,
        search: document.getElementById('search').value
    };
    console.log('Filters updated:', filters);
    // Implement filter logic here
}

function exportData(type) {
    console.log(`Exporting data as ${type}`);
    alert(`Exporting data as ${type}`);
    // Implement actual export logic here
}