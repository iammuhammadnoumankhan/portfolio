document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter__button');
    const projects = document.querySelectorAll('.projects__content');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Get the filter category from the button
            const filter = button.getAttribute('data-filter');

            // Show/Hide projects based on filter
            projects.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
