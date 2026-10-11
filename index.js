```javascript
document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile Navigation Menu
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
        });

        // Close menu after clicking a navigation link
        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    // 2. Smooth Scroll to Projects
    window.scrollProjects = function () {
        const projects = document.getElementById("projects");

        if (projects) {
            projects.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };


    // 3. Download Resume
    window.downloadResume = function () {
        const resumePath = "./Resume.pdf";

        const link = document.createElement("a");
        link.href = resumePath;
        link.download = "Dhariha_Sree_Resume.pdf";

        document.body.appendChild(link);
        link.click();
        link.remove();
    };


    // 4. Open Gmail Compose Window
    window.sendMail = function () {
        const email = "dharikashanmugam@gmail.com";

        const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1&to=" +
            encodeURIComponent(email);

        window.open(gmailURL, "_blank", "noopener,noreferrer");
    };


    // 5. Open GitHub Profile
    window.openGithub = function () {
        window.open(
            "https://github.com/dharika-28",
            "_blank",
            "noopener,noreferrer"
        );
    };


    // 6. Back to Top Button
    const topBtn = document.getElementById("topBtn");

    function handleScroll() {
        if (!topBtn) return;

        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();


    // 7. Scroll Back to Top
    window.goTop = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };


    // 8. Update Footer Year Automatically
    const footerYear = document.getElementById("footerYear");

    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

});
```
