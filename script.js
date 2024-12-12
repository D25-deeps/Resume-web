// Animated background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background').appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x3498db, wireframe: true });
const icosahedron = new THREE.Mesh(geometry, material);
scene.add(icosahedron);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    icosahedron.rotation.x += 0.005;
    icosahedron.rotation.y += 0.005;
    
    renderer.render(scene, camera);
}

animate();

// Profile picture hover effect
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.addEventListener('mouseover', () => {
        profileImg.style.transform = 'scale(1.1) rotate(5deg)';
    });

    profileImg.addEventListener('mouseout', () => {
        profileImg.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here you would typically send the form data to a server
        console.log('Form submitted:', { name, email, message });
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Responsive navigation menu
const navToggle = document.createElement('button');
navToggle.textContent = '☰';
navToggle.classList.add('nav-toggle');
document.querySelector('header').prepend(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Window resize event to adjust Three.js canvas
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});