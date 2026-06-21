document.addEventListener("DOMContentLoaded", () => {
    // Component DOM Nodes Selection
    const btnEnter = document.getElementById("btn-enter");
    const btnBack = document.getElementById("btn-back");
    const pageCover = document.getElementById("page-cover");
    const pageStories = document.getElementById("page-stories");
    const comicPanels = document.querySelectorAll(".animate-panel");

    /**
     * Executes transition logic between the cover view and the comic layout grid
     */
    function transitionToPage(showPage, hidePage, runsAnimation = false) {
        hidePage.classList.remove("active");
        hidePage.classList.add("hidden");

        // Delay handling element status toggle slightly for seamless layout transition
        setTimeout(() => {
            showPage.classList.remove("hidden");
            showPage.classList.add("active");
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Trigger stagger entry animation for individual panels if transitioning forward
            if (runsAnimation) {
                triggerPanelAnimations();
            }
        }, 300);
    }

    /**
     * Staggers structural panel and polaroid display to mimic reading an action book
     */
    function triggerPanelAnimations() {
        comicPanels.forEach((panel, index) => {
            // Clear prior states safely
            panel.classList.remove("show");
            
            setTimeout(() => {
                panel.classList.add("show");
            }, index * 180); // 180ms cascade delay
        });
    }

    // Interactive Action Triggers
    btnEnter.addEventListener("click", () => {
        transitionToPage(pageStories, pageCover, true);
    });

    btnBack.addEventListener("click", () => {
        transitionToPage(pageCover, pageStories, false);
    });
});
