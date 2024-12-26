const messages = [
  "❤️ يعشقك", "💕 يحبك", "💖 يدمنك", "✨ مسحور بكي", "💘 انتي قلبه",
  "👀 انتي عيونه", "🧠 انتي عقله", "👑 انتي تملكيه", "🌍 انتي كل شئ بنسبه له",
  "💓 انتي حياته", "🕊️ انتي روحه", "🌬️ انتي اوكسجينه",
  "💗 انتي قل دقة قلب يدقها قلبه", "👣 انتي من يريد العيش من اجلك",
  "🤝 انتي صديقته", "💑 انتي حبيبته", "👩‍👧 انتي امه", "👶 انتي ابنته",
  "🍃 انتي الهواء الذي يتنفسه", "🛡️ يستطيع ان يضحي بنفسه من اجلك",
  "🌟 مستعد ان يخسر الجميع من اجلك", "⏳ مستعد ان يكرس حياته من اجلك",
  "🌠 انتي حلمه", "🤔 انتي عقله", "🌅 انتي من يستيقظ يفكر بكي",
  "🌌 انتي من ينام يفكر بكي", "🛑 لن يتخلي عنكي ابدا",
  "🚫 لن يعيش بدونك ابدا", "💪 سيتحدي كل الصعاب من اجلك",
  "💍 سيتزوجك حتما"
];

const container = document.querySelector('.bubble-container');
const blackhole = document.querySelector('.blackhole');
const body = document.querySelector('body');

let allBubblesOpened = false;  // متغير لتتبع حالة الفقاعات

// تأثير الثقب الأسود
blackhole.addEventListener('click', () => {
  if (!allBubblesOpened) {
    return; // لا يتم فتح الثقب الأسود إلا بعد فتح كل الفقاعات
  }

  document.body.innerHTML = '';
  body.style.backgroundImage = "url('https://i.ibb.co/jRKqCJT/copilot-image-1735083971598.jpg')";

  const loveMessage = document.createElement('div');
  loveMessage.classList.add('popup');
  loveMessage.innerText = "أحبك";

  // تعيين الخلفية نفسها وتغيير اللون للنص إلى الأسود
  loveMessage.style.backgroundImage = "url('https://i.ibb.co/FbQQcy6/IMG.jpg')";
  loveMessage.style.backgroundSize = "cover";
  loveMessage.style.backgroundPosition = "center";
  loveMessage.style.borderRadius = "10px";
  loveMessage.style.padding = "10px";
  loveMessage.style.color = "black"; // تغيير النص إلى اللون الأسود

  document.body.appendChild(loveMessage);
  loveMessage.style.display = 'block';
});

// وظيفة الفقاعات
function createBubble(message) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  // حساب مكان الفقاعة بحيث لا تتداخل مع الثقب الأسود
  let top = Math.random() * 90 + '%';
  let left = Math.random() * 90 + '%';

  const blackholeRect = blackhole.getBoundingClientRect();
  const bubbleRect = { top: parseFloat(top), left: parseFloat(left) };

  // التأكد من أن الفقاعة لا تقع في منطقة الثقب الأسود
  while (Math.abs(blackholeRect.top - bubbleRect.top) < 100 && Math.abs(blackholeRect.left - bubbleRect.left) < 100) {
    top = Math.random() * 90 + '%';
    left = Math.random() * 90 + '%';
    bubbleRect.top = parseFloat(top);
    bubbleRect.left = parseFloat(left);
  }

  bubble.style.top = top;
  bubble.style.left = left;

  const msgElement = document.createElement('div');
  msgElement.classList.add('message-popup');
  msgElement.innerHTML = message;

  // تعيين الخلفية المطلوبة للنافذة المنبثقة
  msgElement.style.backgroundImage = "url('https://i.ibb.co/FbQQcy6/IMG.jpg')";
  msgElement.style.backgroundSize = "cover";
  msgElement.style.backgroundPosition = "center";
  msgElement.style.borderRadius = "10px";
  msgElement.style.padding = "10px";
  msgElement.style.color = "black"; // تغيير النص إلى اللون الأسود

  bubble.addEventListener('click', () => {
    // تأثير السحب والتشفط
    bubble.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    bubble.style.transform = 'scale(0)';
    bubble.style.opacity = '0';

    setTimeout(() => {
      bubble.remove();
    }, 600); // اختفاء الفقاعة بعد 0.6 ثانية

    // ظهور النص مع تأثير السحب
    setTimeout(() => {
      msgElement.style.display = 'block';
      msgElement.style.opacity = '1';
      msgElement.style.transform = 'scale(1)';
      msgElement.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    }, 600); // تأخير ظهور النص بعد انفجار الفقاعة

    // اختفاء النص بعد ثانيتين
    setTimeout(() => {
      msgElement.style.opacity = '0';
      msgElement.style.transform = 'scale(0)';
    }, 2500);

    container.appendChild(msgElement);

    // التحقق إذا تم فتح كل الفقاعات
    const remainingBubbles = document.querySelectorAll('.bubble').length;
    if (remainingBubbles === 0) {
      allBubblesOpened = true;
    }
  });

  container.appendChild(bubble);
}

messages.forEach(createBubble);
