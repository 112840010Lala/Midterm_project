console.log("JavaScript loaded");
function selectAnswer(answer, nextPage) {
    const currentPage = window.location.pathname.split('/').pop();
    localStorage.setItem(currentPage, answer); // Store the answer associated with the current page
    window.location.href = nextPage;
}

// Calculate and display the result on the result page
function calculateAndDisplayResult() {
    const answers = { A: 0, B: 0, C: 0, D: 0 };

    // Loop through each question's stored answer in localStorage
    for (let i = 2; i <= 10; i++) { // Adjust range based on actual question page count
        const answer = localStorage.getItem(`Q${i}.html`);
        if (answer) answers[answer]++;
    }

    // Display the result based on the dominant answer
    const resultTitle = document.querySelector('.type h1');
    const resultDescription = document.querySelector('.type p');
    const resultImage = document.querySelector('.descriptionImg .img');
    let resultContent;
    
        if (answers.A >= 3 && answers.B >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為馬卡龍",
                description: "#優雅高貴\n#外表精緻\n#品味不凡\n#精緻細膩\n#每一口都是藝術的享受",
                imgSrc: "./img/Macaron.png"
            };
        } else if (answers.A >= 3 && answers.C >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為馬卡龍",
                description: "#優雅高貴\n#外表精緻\n#品味不凡\n#精緻細膩\n#每一口都是藝術的享受",
                imgSrc: "./img/Macaron.png"
            };
        } else if (answers.A >= 3 && answers.D >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為馬卡龍",
                description: "#優雅高貴\n#外表精緻\n#品味不凡\n#精緻細膩\n#每一口都是藝術的享受",
                imgSrc: "./img/Macaron.png"
            };
        } else if (answers.B >= 3 && answers.A >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為巧克力",
                description: "#濃郁深沉\n#味道豐富\n#內涵層次多\n#甜蜜誘惑\n#欲罷不能的美味",
                imgSrc: "./img/Chocolate.png"
            };
        } else if (answers.B >= 3 && answers.D >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為巧克力",
                description: "#濃郁深沉\n#味道豐富\n#內涵層次多\n#甜蜜誘惑\n#欲罷不能的美味",
                imgSrc: "./img/Chocolate.png"
            };
        } else if (answers.B >= 3 && answers.C >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為巧克力",
                description: "#濃郁深沉\n#味道豐富\n#內涵層次多\n#甜蜜誘惑\n#欲罷不能的美味",
                imgSrc: "./img/Chocolate.png"
            };
        } else if (answers.C >= 3 && answers.A >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為小糖果",
                description: "#精緻可口\n#小巧玲瓏\n#甜蜜一口\n#多樣口味\n#各式各樣\n#滿足不同需求",
                imgSrc: "./img/Candy.png"
            };
        } else if (answers.C >= 3 && answers.D >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為小糖果",
                description: "#精緻可口\n#小巧玲瓏\n#甜蜜一口\n#多樣口味\n#各式各樣\n#滿足不同需求",
                imgSrc: "./img/Candy.png"
            };
        } else if (answers.C >= 3 && answers.B >= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為小糖果",
                description: "#精緻可口\n#小巧玲瓏\n#甜蜜一口\n#多樣口味\n#各式各樣\n#滿足不同需求",
                imgSrc: "./img/Candy.png"
            };
        } else if (answers.D >= 5 && answers.A <= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為雷根糖",
                description: "#獨特香氣\n#清新口感\n#回味無窮\n#強烈風味\n#味道獨特\n#挑戰味蕾",
                imgSrc: "./img/Jelly_beans.png"
            };
        } else if (answers.D >= 5 && answers.C <= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為雷根糖",
                description: "#獨特香氣\n#清新口感\n#回味無窮\n#強烈風味\n#味道獨特\n#挑戰味蕾",
                imgSrc: "./img/Jelly_beans.png"
            };
        } else if (answers.D >= 5 && answers.B <= 2) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為雷根糖",
                description: "#獨特香氣\n#清新口感\n#回味無窮\n#強烈風味\n#味道獨特\n#挑戰味蕾",
                imgSrc: "./img/Jelly_beans.png"
            };
        } else if (answers.A > answers.B && answers.A > answers.C && answers.A > answers.D) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為拐杖糖",
                description: "#節日象徵\n#聖誕節\n#具紀念意義\n#堅韌固執\n#形狀獨特\n#堅持自我風格",
                imgSrc: "./img/Candy_cane.png"
            };
        } else if (answers.B > answers.A && answers.B > answers.C && answers.B > answers.D) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為棒棒糖",
                description: "#甜美可愛\n#色彩繽紛\n#帶來快樂感\n#耐心等待\n#慢慢享受\n#耐性十足",
                imgSrc: "./img/Lollipop.PNG"
            };
        } else if (answers.C > answers.B && answers.C > answers.A && answers.C > answers.D) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為泡泡糖",
                description: "#輕鬆快樂\n#可以吹出泡泡\n#自由隨性\n#隨意嚼食\n#帶來快感",
                imgSrc: "./img/Bubble_gum.png"
            };
        } else if (answers.D > answers.B && answers.D > answers.C && answers.D > answers.A) {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為棉花糖",
                description: "#柔軟甜美\n#如雲朵般輕盈\n#甜蜜無比\n#夢幻浪漫\n#童話世界",
                imgSrc: "./img/Marshmallow.png"
            };
        } else {
            resultContent = {
                title: "恭喜你成功被錄取！\n你擔任的部門為跳跳糖",
                description: "#充滿驚喜\n#有趣的口感\n#活潑俏皮\n#歡樂和驚奇",
                imgSrc: "./img/Popping_Candy.png"
            };
        }
    
        resultTitle.textContent = resultContent.title;
        resultDescription.textContent = resultContent.description;
        resultImage.src = resultContent.imgSrc;
    }
