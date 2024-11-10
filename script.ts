document.getElementById('toggle-skills')?.addEventListener('click', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.classList.toggle('hidden');
    }
});
