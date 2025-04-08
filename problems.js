document.addEventListener("DOMContentLoaded", function () {
    function applyJSEffects() {
        let problems = document.getElementsByClassName("problem");
        updateRowColors();

        function updateRowColors() {
            let b = document.getElementsByClassName("problem");
            let ct = 0;
            for (let i = 0; i < b.length; i++) {
                if (b[i].style.display === "none") continue;
                b[i].style.backgroundColor = ct % 2 === 0 ? "#1a0b2e" : "#ba51e0";
                ct++;
            }
        }

        for (let i = 0; i < problems.length; i++) {
            let spans = problems[i].getElementsByTagName("span");
            if (spans.length >= 3) {
                if (spans[2].innerText === "Easy") spans[2].style.color = "#389754";
                else if (spans[2].innerText === "Medium") spans[2].style.color = "yellow";
                else if (spans[2].innerText === "Hard") spans[2].style.color = "red";
            }
        }
    }

    // ✅ Use MutationObserver on the correct element (`#problems`)
    const observer = new MutationObserver(() => {
        console.log("Problems updated, reapplying JS effects...");
        applyJSEffects();
    });

    let list = document.getElementById("problems");
    if (list) observer.observe(list, { childList: true, subtree: true });

    // ✅ Run filter logic correctly
    let tagFilter = document.getElementById("Tag");
    let difficultyFilter = document.getElementById("Difficulty");
    let statusFilter = document.getElementById("Status");
    let searchInput = document.getElementById("text");

    function filterProblems() {
        let problems = document.querySelectorAll(".problem:not(.p0)");
        let selectedTag = tagFilter.value;
        let selectedDifficulty = difficultyFilter.value;
        let selectedStatus = statusFilter.value;
        let searchQuery = searchInput.value.toLowerCase().trim();
    
        problems.forEach(problem => {
            let title = problem.children[1].innerText.toLowerCase();
            let difficulty = problem.children[2].innerText;
            let category = problem.children[3].innerText;
    
            // let tagMatch = selectedTag === "Choose" || category === selectedTag;
            // let difficultyMatch = selectedDifficulty === "Choose" || difficulty === selectedDifficulty;
            // let statusMatch = selectedStatus === "Choose" || selectedStatus === problem.children[0].innerText;
            let tagMatch = selectedTag === "Choose" || category.includes(selectedTag);
            let difficultyMatch = selectedDifficulty === "Choose" || difficulty === selectedDifficulty;
            let statusMatch = selectedStatus === "Choose" || selectedStatus === problem.children[0].innerText;
            let searchMatch = searchQuery === "" || title.includes(searchQuery);
    
            problem.style.display = (tagMatch && difficultyMatch && statusMatch && searchMatch) ? "" : "none";
        });
    
        // **Ensure colors are updated after filtering**
        updateRowColors();
    }
    function updateRowColors() {
        let b = document.getElementsByClassName("problem");
        let ct = 0;
        for (let i = 0; i < b.length; i++) {
            if (b[i].style.display === "none") continue;
            b[i].style.backgroundColor = ct % 2 === 0 ? "#1a0b2e" : "#ba51e0";
            ct++;
        }
    }

    // ✅ Attach event listeners to filters
    tagFilter.addEventListener("change", filterProblems);
    difficultyFilter.addEventListener("change", filterProblems);
    statusFilter.addEventListener("change", filterProblems);
    searchInput.addEventListener("input", filterProblems);
    updateRowColors();
});