const messages = [
  "💘🔥 أعشقكِ بجنون 💖🌹",
];

const container = document.querySelector('.bubble-container');
const blackhole = document.querySelector('.blackhole');
const body = document.querySelector('body');

// تأثير الثقب الأسود
blackhole.addEventListener('click', () => {
  // إخفاء جميع العناصر باستثناء نافذة المنبثقة
  document.body.innerHTML = '';
  
  // إنشاء نافذة منبثقة جديدة لعرض النص
  const loveMessage = document.createElement('div');
  loveMessage.classList.add('popup');
  loveMessage.innerText = "احم احم بصي يا اغلي";

  // تصميم النافذة المنبثقة لتأخذ كامل الشاشة
  loveMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // خلفية مظلمة
  loveMessage.style.color = "white"; // لون النص أبيض
  loveMessage.style.borderRadius = "0"; // إزالة الحواف المدورة
  loveMessage.style.padding = "20px";
  loveMessage.style.width = "100%"; // العرض كامل الشاشة
  loveMessage.style.height = "100vh"; // الارتفاع كامل الشاشة
  loveMessage.style.overflow = "auto"; // السماح بالتمرير إذا كان النص طويلاً
  loveMessage.style.wordWrap = "break-word"; // لضمان لف النص بشكل مناسب
  loveMessage.style.fontSize = "18px"; // تكبير حجم النص
  loveMessage.style.display = "flex";
  loveMessage.style.flexDirection = "column";
  loveMessage.style.alignItems = "center";
  loveMessage.style.justifyContent = "center";
  loveMessage.style.position = "fixed"; // وضع النافذة بشكل ثابت
  loveMessage.style.top = "50%"; // محاذاة النافذة من أعلى الشاشة إلى النصف
  loveMessage.style.left = "50%"; // محاذاة النافذة من اليسار إلى النصف
  loveMessage.style.transform = "translate(-50%, -50%)"; // التأكد من أن النافذة في المنتصف تمامًا
  loveMessage.style.zIndex = "1000"; // التأكد من أن النافذة فوق باقي العناصر

  document.body.appendChild(loveMessage);
  loveMessage.style.display = 'block'; // جعل النافذة مرئية
});

// وظيفة الفقاعات
function createBubble(message) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.top = Math.random() * 90 + '%';
  bubble.style.left = Math.random() * 90 + '%';

  const msgElement = document.createElement('div');
  msgElement.classList.add('message-popup');
  msgElement.innerHTML = message;

  // تعيين الخلفية المطلوبة للنافذة المنبثقة
  msgElement.style.backgroundImage = "url('https://i.ibb.co/x7Pbt6L/Screenshot.jpg')";
  msgElement.style.backgroundSize = "cover";
  msgElement.style.backgroundPosition = "center";
  msgElement.style.borderRadius = "10px";
  msgElement.style.padding = "10px";
  msgElement.style.color = "black"; // تغيير النص إلى اللون الأسود
  msgElement.style.height = "auto"; // جعل ارتفاع النافذة المنبثقة يتكيف مع النص
  msgElement.style.maxWidth = "90%"; // تحديد عرض أقصى للنافذة المنبثقة
  msgElement.style.display = "flex"; // استخدام flexbox
  msgElement.style.flexDirection = "column"; // ترتيب النص بشكل عمودي
  msgElement.style.alignItems = "center"; // محاذاة النص في المنتصف
  msgElement.style.justifyContent = "center"; // محاذاة العناصر

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
  });

  container.appendChild(bubble);
}

messages.forEach(createBubble);
