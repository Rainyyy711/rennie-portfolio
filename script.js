const modal = document.getElementById("projectModal");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalLink = document.getElementById("modalLink");


function openProject(project) {

    // 第一個作品
    if (project === "project1") {

        modalCategory.textContent = "MEDIA PROJECT";

        modalTitle.textContent = "世界好好吃";

        modalDescription.innerHTML = `
            <strong>作品類型</strong><br>
            兒少節目企劃<br><br>

            <strong>作品介紹</strong><br>
            以兒少觀眾為主要受眾的內容企劃，
            嘗試從年輕觀眾的生活與興趣出發，
            設計具有娛樂性與新聞價值的節目內容。<br><br>

            <strong>我的角色</strong><br>
            節目企劃、內容發想、受眾設定與單元設計。
        `;

        modalLink.href =
            "https://drive.google.com/drive/u/0/folders/1AyCnW8TFuLm2d61KL1iH5_WUEMq8gZQo";

        modal.classList.add("show");
    }


    // 第二個作品
    if (project === "project2") {

        modalCategory.textContent = "SPORT CULTURE";

        modalTitle.textContent =
            "「能不動就不動」的體育課";

        modalDescription.innerHTML = `
            <strong>作品類型</strong><br>
            運動文化研究<br><br>

            <strong>作品介紹</strong><br>
            從高中生的體育課經驗出發，
            探討班級體育氛圍、師生互動，
            以及學生參與體育活動的意願。<br><br>

            <strong>我的角色</strong><br>
            資料蒐集、研究設計、內容分析與成果整理。
        `;

        modalLink.href =
            "https://drive.google.com/drive/u/0/folders/1H1DQAKuL8bd_OeUvV4-ojMeRsTRahiXo";

        modal.classList.add("show");
    }


    // 第三個作品
    if (project === "project3") {

        modalCategory.textContent = "PHOTOGRAPHY";

        modalTitle.textContent =
            "Sports Photography";

        modalDescription.innerHTML = `
            <strong>作品類型</strong><br>
            運動攝影<br><br>

            <strong>作品介紹</strong><br>
            專注於運動現場的人物、動作與情緒，
            嘗試透過攝影捕捉比賽中的速度感，
            以及只有在現場才能感受到的瞬間。<br><br>

            <strong>我的角色</strong><br>
            攝影、構圖、現場觀察與影像紀錄。
        `;

        modalLink.href =
            "https://drive.google.com/drive/u/0/folders/1n2Fbvjklb8sg4NCxeZdVccGyqAHDcpkm";

        modal.classList.add("show");
    }
}


function closeProject() {
    modal.classList.remove("show");
}


// 點背景關閉
modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeProject();
    }

});


// 按 ESC 關閉
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProject();
    }

});

/* =========================
   區塊滑動動畫
========================= */

const sections =
    document.querySelectorAll("section");

const sectionObserver =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-section"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(function(section) {

    sectionObserver.observe(section);

});