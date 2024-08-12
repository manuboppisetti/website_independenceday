document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const windows = document.querySelectorAll('.window');

    function showWindow(targetId) {
        windows.forEach(window => {
            window.classList.remove('active');
        });
        links.forEach(link => {
            link.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
        document.querySelector(`nav ul li a[data-target="${targetId}"]`).classList.add('active');
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showWindow(targetId);
        });
    });

    // Show the 'home' window by default on page load
    showWindow('home');
});
