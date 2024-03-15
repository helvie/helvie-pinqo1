
    // Fonction pour mettre le focus sur une section
    const scrollToSection = (e, targetId, setSectionSelected) => {
        e.preventDefault();

        // Récuperation de l'id de l'élément à mettre en focus
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Ajustement du focus en fonction de la taille du header
            const screenWidth = window.innerWidth;
            const headerOffset = screenWidth < 1024 ? 400 : 110;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            // Déplacement à hauteur de la section en focus
            window.scrollTo({
                top: offsetPosition,
                // Défilement en douceur
                behavior: 'smooth'
            });
        }
        // Stockage de la section en focus (pour styliser le lien)
        setSectionSelected(targetId)
    };

    export default scrollToSection;