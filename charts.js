// Chart.js Configuration and Data
// Initializes all charts after DOM is loaded

document.addEventListener('DOMContentLoaded', function() {
    // Chart.js Default Configuration
    Chart.defaults.color = '#b0b0b0';
    Chart.defaults.font.family = 'Cairo, sans-serif';
    Chart.defaults.font.size = 14;
    
    // Colors
    const moroccoRed = '#C1272D';
    const championsBlue = '#034694';
    
    // ================================
    // POSSESSION & PASSES CHART (Bar)
    // ================================
    
    const possessionCtx = document.getElementById('possessionChart');
    if (possessionCtx) {
        new Chart(possessionCtx, {
            type: 'bar',
            data: {
                labels: ['الاستحواذ %', 'التمريرات الناجحة', 'دقة التمرير %'],
                datasets: [{
                    label: 'Botola Pro',
                    data: [52, 420, 78],
                    backgroundColor: moroccoRed,
                    borderColor: moroccoRed,
                    borderWidth: 2
                }, {
                    label: 'Champions League',
                    data: [58, 580, 85],
                    backgroundColor: championsBlue,
                    borderColor: championsBlue,
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false // Legend is custom in HTML
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: {
                            size: 14,
                            weight: 'bold'
                        },
                        bodyFont: {
                            size: 13
                        },
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#b0b0b0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#b0b0b0'
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }
    
    // ================================
    // ATTACK STATS CHART (Radar)
    // ================================
    
    const attackCtx = document.getElementById('attackChart');
    if (attackCtx) {
        new Chart(attackCtx, {
            type: 'radar',
            data: {
                labels: ['الأهداف', 'التسديدات', 'التسديدات على المرمى', 'الركلات الركنية', 'الضربات الحرة'],
                datasets: [{
                    label: 'Botola Pro',
                    data: [2.4, 12, 5, 6, 3],
                    backgroundColor: 'rgba(193, 39, 45, 0.2)',
                    borderColor: moroccoRed,
                    borderWidth: 2,
                    pointBackgroundColor: moroccoRed,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: moroccoRed
                }, {
                    label: 'Champions League',
                    data: [3.1, 16, 7, 7, 4],
                    backgroundColor: 'rgba(3, 70, 148, 0.2)',
                    borderColor: championsBlue,
                    borderWidth: 2,
                    pointBackgroundColor: championsBlue,
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: championsBlue
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#b0b0b0',
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: '#b0b0b0',
                            font: {
                                size: 11
                            }
                        },
                        ticks: {
                            color: '#b0b0b0',
                            backdropColor: 'transparent'
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }
    
    // ================================
    // DEFENSE STATS CHART (Line)
    // ================================
    
    const defenseCtx = document.getElementById('defenseChart');
    if (defenseCtx) {
        new Chart(defenseCtx, {
            type: 'line',
            data: {
                labels: ['الجولة 1', 'الجولة 2', 'الجولة 3', 'الجولة 4', 'الجولة 5', 'الجولة 6'],
                datasets: [{
                    label: 'Botola - الأهداف المستقبلة',
                    data: [1.2, 1.0, 1.3, 0.8, 1.1, 0.9],
                    borderColor: moroccoRed,
                    backgroundColor: 'rgba(193, 39, 45, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: moroccoRed,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7
                }, {
                    label: 'Champions League - الأهداف المستقبلة',
                    data: [0.8, 0.7, 0.9, 0.6, 0.8, 0.7],
                    borderColor: championsBlue,
                    backgroundColor: 'rgba(3, 70, 148, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: championsBlue,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            color: '#b0b0b0',
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: '#b0b0b0'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: '#b0b0b0'
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeInOutQuart'
                }
            }
        });
    }
});
