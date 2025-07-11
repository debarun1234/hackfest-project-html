// JavaScript for Agentic AI HomeAdvisor canvas presentation

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all canvas elements
    initHeroCanvas();
    initProblemCanvas();
    initSolutionCanvas();
    initDemoCanvas();

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA button animations
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
        
        button.addEventListener('click', function() {
            alert('Thank you for your interest in Agentic AI HomeAdvisor! This is a project concept for Hackfest 2025.');
        });
    });

    // Add scroll animations
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('animate');
            }
        });
    });
});

// Hero Canvas - House with AI integration visualization
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Set up animation properties
    let particles = [];
    const particleCount = 100;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            color: getRandomColor(),
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1
        });
    }
    
    // Draw house outline
    function drawHouse() {
        // House base
        ctx.beginPath();
        ctx.moveTo(width/2 - 100, height/2 + 80);
        ctx.lineTo(width/2 - 100, height/2 - 20);
        ctx.lineTo(width/2, height/2 - 100);
        ctx.lineTo(width/2 + 100, height/2 - 20);
        ctx.lineTo(width/2 + 100, height/2 + 80);
        ctx.lineTo(width/2 - 100, height/2 + 80);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Door
        ctx.beginPath();
        ctx.rect(width/2 - 25, height/2 + 20, 50, 60);
        ctx.stroke();
        
        // Window left
        ctx.beginPath();
        ctx.rect(width/2 - 70, height/2, 40, 40);
        ctx.stroke();
        
        // Window right
        ctx.beginPath();
        ctx.rect(width/2 + 30, height/2, 40, 40);
        ctx.stroke();
        
        // Digital circuit patterns around the house
        drawCircuitPatterns();
    }
    
    // Draw circuit-like patterns
    function drawCircuitPatterns() {
        ctx.beginPath();
        ctx.moveTo(width/2 - 150, height/2);
        ctx.lineTo(width/2 - 120, height/2);
        ctx.lineTo(width/2 - 120, height/2 - 50);
        ctx.lineTo(width/2 - 50, height/2 - 50);
        ctx.lineTo(width/2 - 50, height/2 - 80);
        
        ctx.moveTo(width/2 + 150, height/2);
        ctx.lineTo(width/2 + 120, height/2);
        ctx.lineTo(width/2 + 120, height/2 - 50);
        ctx.lineTo(width/2 + 50, height/2 - 50);
        ctx.lineTo(width/2 + 50, height/2 - 80);
        
        ctx.moveTo(width/2, height/2 - 120);
        ctx.lineTo(width/2, height/2 - 150);
        
        ctx.moveTo(width/2 - 50, height/2 + 100);
        ctx.lineTo(width/2 - 50, height/2 + 130);
        ctx.lineTo(width/2, height/2 + 130);
        
        ctx.moveTo(width/2 + 50, height/2 + 100);
        ctx.lineTo(width/2 + 50, height/2 + 130);
        ctx.lineTo(width/2, height/2 + 130);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Add circuit nodes
        drawCircleNode(width/2 - 150, height/2);
        drawCircleNode(width/2 + 150, height/2);
        drawCircleNode(width/2, height/2 - 150);
        drawCircleNode(width/2, height/2 + 130);
        drawCircleNode(width/2 - 120, height/2 - 50);
        drawCircleNode(width/2 + 120, height/2 - 50);
    }
    
    function drawCircleNode(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#4cc9f0';
        ctx.fill();
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw particles
        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            
            // Update particle position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Boundary check
            if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
        });
        
        // Draw house with circuit patterns
        drawHouse();
        
        requestAnimationFrame(animate);
    }
    
    // Helper function to get random colors
    function getRandomColor() {
        const colors = [
            'rgba(76, 201, 240, 0.7)',  // Cyan
            'rgba(114, 9, 183, 0.7)',   // Purple
            'rgba(247, 37, 133, 0.7)',  // Pink
            'rgba(128, 255, 219, 0.7)'  // Mint
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Start animation
    animate();
}

// Problem Canvas - Inequality visualization
function initProblemCanvas() {
    const canvas = document.getElementById('problemCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Draw problem visualization
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        // Background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, width, height);
        
        // Draw inequality scale
        drawScale();
        
        // Draw wealth distribution curve
        drawWealthDistribution();
    }
    
    // Draw an unbalanced scale representing inequality
    function drawScale() {
        // Scale center pole
        ctx.beginPath();
        ctx.moveTo(width/2, height - 50);
        ctx.lineTo(width/2, height/2);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Scale base
        ctx.beginPath();
        ctx.moveTo(width/2 - 40, height - 50);
        ctx.lineTo(width/2 + 40, height - 50);
        ctx.stroke();
        
        // Scale beam (tilted to show inequality)
        ctx.beginPath();
        ctx.moveTo(width/2 - 100, height/2 + 30);
        ctx.lineTo(width/2 + 100, height/2 - 30);
        ctx.stroke();
        
        // Scale left pan (lower wealth)
        ctx.beginPath();
        ctx.arc(width/2 - 100, height/2 + 30, 25, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.fillStyle = 'rgba(76, 201, 240, 0.3)';
        ctx.fill();
        
        // Scale right pan (higher wealth)
        ctx.beginPath();
        ctx.arc(width/2 + 100, height/2 - 30, 25, 0, Math.PI * 2);
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        ctx.fillStyle = 'rgba(247, 37, 133, 0.3)';
        ctx.fill();
        
        // Left pan contents (many small coins)
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.arc(width/2 - 100 + (Math.random() * 30 - 15), height/2 + 30 + (Math.random() * 10 - 5), 5, 0, Math.PI * 2);
            ctx.fillStyle = '#f8f9fa';
            ctx.fill();
        }
        
        // Right pan contents (few large gold bars)
        ctx.fillStyle = '#ffd700';
        ctx.fillRect(width/2 + 90, height/2 - 40, 20, 10);
        ctx.fillRect(width/2 + 85, height/2 - 30, 30, 10);
        
        // Labels
        ctx.font = '14px Poppins, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Moderate Income', width/2 - 150, height/2 + 80);
        ctx.fillText('Ultra-Wealthy', width/2 + 50, height/2 - 60);
    }
    
    // Draw wealth distribution curve
    function drawWealthDistribution() {
        ctx.beginPath();
        ctx.moveTo(50, height - 120);
        
        // Draw exponential curve for wealth distribution
        for (let x = 0; x < width - 100; x++) {
            const progress = x / (width - 100);
            let y = height - 120 - Math.pow(progress, 4) * 150;
            
            if (progress > 0.8) {
                y = height - 120 - Math.pow(progress, 8) * 1500;
            }
            
            ctx.lineTo(50 + x, y);
        }
        
        ctx.strokeStyle = 'rgba(255, 158, 0, 0.8)';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Label the curve
        ctx.font = '14px Poppins, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText('Wealth Distribution', 60, height - 140);
        
        // Highlight the wealthy section
        ctx.beginPath();
        ctx.arc(width - 100, 30, 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(247, 37, 133, 0.7)';
        ctx.fill();
    }
    
    // Initial draw
    draw();
}

// Solution Canvas - AI HomeAdvisor in action
function initSolutionCanvas() {
    const canvas = document.getElementById('solutionCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    let frameCount = 0;
    
    // Draw solution visualization
    function draw() {
        ctx.clearRect(0, 0, width, height);
        frameCount++;
        
        // Background with subtle gradient
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(67, 97, 238, 0.1)');
        gradient.addColorStop(1, 'rgba(114, 9, 183, 0.1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Draw house outline
        drawHouse();
        
        // Draw AI advisor and couple
        drawPeople();
        
        // Draw digital connections
        drawConnections();
        
        // Animate data flow
        animateDataFlow();
        
        requestAnimationFrame(draw);
    }
    
    function drawHouse() {
        // House outline
        ctx.beginPath();
        ctx.moveTo(width/2 - 80, height/2 + 60);
        ctx.lineTo(width/2 - 80, height/2);
        ctx.lineTo(width/2, height/2 - 60);
        ctx.lineTo(width/2 + 80, height/2);
        ctx.lineTo(width/2 + 80, height/2 + 60);
        ctx.lineTo(width/2 - 80, height/2 + 60);
        ctx.strokeStyle = '#4361ee';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Door
        ctx.beginPath();
        ctx.rect(width/2 - 20, height/2 + 20, 40, 40);
        ctx.stroke();
        
        // Windows
        ctx.beginPath();
        ctx.rect(width/2 - 60, height/2 + 10, 30, 30);
        ctx.rect(width/2 + 30, height/2 + 10, 30, 30);
        ctx.stroke();
    }
    
    function drawPeople() {
        // AI Advisor (stylized robot/digital entity)
        ctx.beginPath();
        ctx.arc(width/2 - 120, height/2, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(76, 201, 240, 0.8)';
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Digital pattern in AI
        ctx.beginPath();
        ctx.moveTo(width/2 - 130, height/2 - 10);
        ctx.lineTo(width/2 - 110, height/2 - 10);
        ctx.moveTo(width/2 - 130, height/2);
        ctx.lineTo(width/2 - 110, height/2);
        ctx.moveTo(width/2 - 130, height/2 + 10);
        ctx.lineTo(width/2 - 110, height/2 + 10);
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
        
        // Couple (simplified)
        // Person 1
        ctx.beginPath();
        ctx.arc(width/2 - 170, height/2 + 30, 15, 0, Math.PI * 2);
        ctx.fillStyle = '#f72585';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(width/2 - 170, height/2 + 45);
        ctx.lineTo(width/2 - 170, height/2 + 80);
        ctx.strokeStyle = '#f72585';
        ctx.lineWidth = 3;
        ctx.stroke();
        
        // Person 2
        ctx.beginPath();
        ctx.arc(width/2 - 200, height/2 + 30, 15, 0, Math.PI * 2);
        ctx.fillStyle = '#4361ee';
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(width/2 - 200, height/2 + 45);
        ctx.lineTo(width/2 - 200, height/2 + 80);
        ctx.strokeStyle = '#4361ee';
        ctx.lineWidth = 3;
        ctx.stroke();
    }
    
    function drawConnections() {
        // Connection lines between AI and house
        ctx.beginPath();
        ctx.moveTo(width/2 - 100, height/2);
        ctx.lineTo(width/2 - 90, height/2);
        ctx.lineTo(width/2 - 90, height/2 - 30);
        ctx.lineTo(width/2 - 30, height/2 - 30);
        ctx.strokeStyle = 'rgba(76, 201, 240, 0.8)';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Connection lines between AI and couple
        ctx.beginPath();
        ctx.moveTo(width/2 - 140, height/2);
        ctx.lineTo(width/2 - 150, height/2);
        ctx.lineTo(width/2 - 150, height/2 + 20);
        ctx.lineTo(width/2 - 170, height/2 + 20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(width/2 - 150, height/2 + 20);
        ctx.lineTo(width/2 - 200, height/2 + 20);
        ctx.stroke();
        
        ctx.setLineDash([]);
    }
    
    function animateDataFlow() {
        // Data particles flowing along connection lines
        const time = frameCount / 20;
        
        // Data from AI to house
        drawDataParticle(
            width/2 - 100 + Math.min(10, time % 50) * 1, 
            height/2
        );
        
        if (time % 50 > 10) {
            drawDataParticle(
                width/2 - 90, 
                height/2 - Math.min(30, (time % 50 - 10) * 3)
            );
        }
        
        if (time % 50 > 20) {
            drawDataParticle(
                width/2 - 90 + Math.min(60, (time % 50 - 20) * 6), 
                height/2 - 30
            );
        }
        
        // Data from AI to couple
        drawDataParticle(
            width/2 - 140 - Math.min(10, time % 40) * 1, 
            height/2
        );
        
        if (time % 40 > 10) {
            drawDataParticle(
                width/2 - 150, 
                height/2 + Math.min(20, (time % 40 - 10) * 2)
            );
        }
        
        if (time % 40 > 20) {
            const progress = Math.min(50, (time % 40 - 20) * 5);
            const targetX = progress < 20 ? width/2 - 150 - progress : width/2 - 170 - (progress - 20);
            drawDataParticle(
                targetX, 
                height/2 + 20
            );
        }
    }
    
    function drawDataParticle(x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#4cc9f0';
        ctx.fill();
    }
    
    // Start animation
    draw();
}
// Canvas Journey for Sarah & Mark - Improved
function initDemoCanvas() {
    const canvas = document.getElementById('demoCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Step Data
    const steps = [
        { label: "AI Interview",        color: "#4361ee", icon: "💬" },
        { label: "Curated Listings",    color: "#f72585", icon: "🗂️" },
        { label: "Smart Reports",       color: "#4cc9f0", icon: "📄" },
        { label: "Negotiation",         color: "#ff9e00", icon: "🤝" },
        { label: "Financial Model",     color: "#7209b7", icon: "📈" },
        { label: "Guidance",            color: "#80ffdb", icon: "🛡️" }
    ];

    // Path positions - now compact!
        const path = [
        {x:100, y:170},
        {x:200, y:100},
        {x:300, y:110},
        {x:400, y:170},
        {x:500, y:140},
        {x:600, y:180}
    ];
    // House position
    const house = {x:670, y:160};


    // Draw smooth curved path
    function drawPath() {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for(let i=1; i<path.length; i++) {
            let prev = path[i-1], curr = path[i];
            let mx = (prev.x + curr.x) / 2;
            ctx.quadraticCurveTo(mx, prev.y, curr.x, curr.y);
        }
        ctx.lineTo(house.x+25, house.y+30);
        ctx.setLineDash([7,7]);
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#4361ee44";
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
    }

    // Draw Sarah & Mark at the start
    function drawSarahAndMark() {
        // Sarah: Pink, Mark: Blue
        // Head
        ctx.save();
        ctx.globalAlpha = 1.0;
        ctx.beginPath();
        ctx.arc(path[0].x - 35, path[0].y + 28, 18, 0, 2 * Math.PI); // Sarah
        ctx.fillStyle = "#f72585";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(path[0].x - 15, path[0].y + 16, 18, 0, 2 * Math.PI); // Mark
        ctx.fillStyle = "#4361ee";
        ctx.fill();
        // Bodies (simple lines)
        ctx.strokeStyle = "#f72585";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(path[0].x - 35, path[0].y + 46); // Sarah
        ctx.lineTo(path[0].x - 35, path[0].y + 66);
        ctx.stroke();
        ctx.strokeStyle = "#4361ee";
        ctx.beginPath();
        ctx.moveTo(path[0].x - 15, path[0].y + 34); // Mark
        ctx.lineTo(path[0].x - 15, path[0].y + 54);
        ctx.stroke();
        // Labels
        ctx.font = "bold 13px Montserrat";
        ctx.fillStyle = "#22223b";
        ctx.textAlign = "center";
        ctx.fillText("Sarah", path[0].x - 35, path[0].y + 82);
        ctx.fillText("Mark", path[0].x - 15, path[0].y + 72);
        ctx.restore();
    }

    // Draw step circles with icon and label
    function drawSteps() {
        ctx.font = "bold 24px Montserrat";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        for(let i=0; i<steps.length; i++) {
            // Outer circle
            ctx.beginPath();
            ctx.arc(path[i].x, path[i].y, 36, 0, 2 * Math.PI);
            ctx.fillStyle = steps[i].color+"22";
            ctx.fill();
            ctx.lineWidth = 3.5;
            ctx.strokeStyle = steps[i].color;
            ctx.stroke();

            // Emoji icon
            ctx.font = "32px sans-serif";
            ctx.fillText(steps[i].icon, path[i].x, path[i].y - 4);

            // Label (below)
            ctx.font = "bold 17px Poppins";
            ctx.fillStyle = steps[i].color;
            ctx.fillText(steps[i].label, path[i].x, path[i].y + 38);
        }
    }

    // Draw animated traveling dot on path
    let frame = 0;
    function drawTravelDot() {
        // Animate progress along path
        const totalSegments = path.length;
        const progress = (frame % 260) / 260 * totalSegments;
        let seg = Math.floor(progress);
        let t = progress - seg;

        let x = path[seg].x, y = path[seg].y;
        if (seg < path.length-1) {
            x += (path[seg+1].x - path[seg].x) * t;
            y += (path[seg+1].y - path[seg].y) * t;
        }
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, 2 * Math.PI);
        ctx.fillStyle = "#4361ee";
        ctx.globalAlpha = 0.38 + 0.32 * Math.abs(Math.sin(frame/15));
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }

    // Draw house at the end, with visible result text
    function drawHouseAndResult() {
        let x = house.x, y = house.y;
        ctx.save();
        ctx.strokeStyle = "#4361ee";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y+70);
        ctx.lineTo(x, y+25);
        ctx.lineTo(x+30, y);
        ctx.lineTo(x+60, y+25);
        ctx.lineTo(x+60, y+70);
        ctx.closePath();
        ctx.stroke();

        // Door
        ctx.beginPath();
        ctx.rect(x+23, y+45, 14, 25);
        ctx.stroke();

        // Windows
        ctx.beginPath();
        ctx.rect(x+7, y+32, 13, 13);
        ctx.rect(x+40, y+32, 13, 13);
        ctx.stroke();

        // Result text (moved left and up)
        ctx.font = "bold 17px Montserrat";
        ctx.fillStyle = "#4361ee";
        ctx.textAlign = "left";
        ctx.fillText("Result:", x+68, y+12);
        ctx.font = "14px Poppins";
        ctx.fillStyle = "#22223b";
        ctx.fillText("45+ hrs saved, 8% lower price,", x+68, y+34);
        ctx.fillText("95% confidence in final decision.", x+68, y+54);
        ctx.restore();
    }

    // Animate everything
    function animate() {
        ctx.clearRect(0, 0, w, h);
        drawPath();
        drawSarahAndMark();
        drawSteps();
        drawTravelDot();
        drawHouseAndResult();
        frame++;
        requestAnimationFrame(animate);
    }
    animate();
}

document.addEventListener('DOMContentLoaded', function() {
    initDemoCanvas();
});
