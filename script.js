const envelopes = document.querySelectorAll(".envelope");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const fortuneText = document.getElementById("fortuneText");

const fortuneList = [
    "Chúc bạn năm mới an khang thịnh vượng!",
    "Vạn sự như ý – Tỷ sự như mơ!",
    "Phát tài – Phát lộc – Phát bình an!",
    "Gia đình hạnh phúc – Sự nghiệp thăng hoa!",
    "Tiền vô như nước – Sức khoẻ dồi dào!"
];

envelopes.forEach(env => {
    env.addEventListener("click", () => {
        const random = Math.floor(Math.random() * fortuneList.length);
        fortuneText.textContent = fortuneList[random];
        popup.classList.remove("hidden");
    });
});

closePopup.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// Toggle giữa hoa đào và hoa mai
const flowerToggle = document.getElementById("flowerToggle");
const toggleText = document.getElementById("toggleText");
const flowers = document.querySelectorAll(".flower-bloom");
let isPeachFlower = true; // Mặc định là hoa đào

flowerToggle.addEventListener("click", () => {
    isPeachFlower = !isPeachFlower;
    
    flowers.forEach(flower => {
        if (isPeachFlower) {
            flower.classList.remove("flower-apricot");
            flower.classList.add("flower-peach");
            toggleText.textContent = "Hoa Đào";
        } else {
            flower.classList.remove("flower-peach");
            flower.classList.add("flower-apricot");
            toggleText.textContent = "Hoa Mai";
        }
    });
});

// Khởi tạo hoa đào mặc định
flowers.forEach(flower => {
    flower.classList.add("flower-peach");
});
