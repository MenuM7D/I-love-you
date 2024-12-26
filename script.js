const messages = [
  "💘🔥 أعشقكِ بجنون 💖🌹",
];

const body = document.querySelector('body');

// تأثير الثقب الأسود
document.querySelector('.blackhole').addEventListener('click', () => {
  document.body.innerHTML = ''; // مسح محتوى الصفحة لتكون الخلفية هي العنصر الوحيد

  // تعيين الخلفية الكاملة للصورة
  body.style.backgroundImage = "url('https://i.ibb.co/x7Pbt6L/Screenshot.jpg')";
  body.style.backgroundSize = "cover"; // جعل الصورة تغطي كامل الشاشة
  body.style.backgroundPosition = "center"; // ضبط الصورة في المركز
  body.style.height = "100vh"; // تأكد من أن الخلفية تغطي كامل العرض والارتفاع
  body.style.margin = "0"; // إزالة الهوامش الافتراضية

  // إنشاء نافذة منبثقة تحتوي على نص الرسالة في جميع المساحة
  const loveMessage = document.createElement('div');
  loveMessage.classList.add('popup');
  loveMessage.innerText = "💘🔥 أعشقكِ بجنون 💖🌹"; // النص

  // تنسيق النص ليغطي كامل الصورة
  loveMessage.style.position = "absolute"; // جعل النص في مكان معين في الصفحة
  loveMessage.style.top = "0"; // وضع النص بداية من أعلى الصفحة
  loveMessage.style.left = "0"; // وضع النص بداية من اليسار
  loveMessage.style.right = "0"; // تمديد النص حتى اليمين
  loveMessage.style.bottom = "0"; // تمديد النص حتى الأسفل
  loveMessage.style.fontSize = "50px"; // تغيير حجم الخط ليغطي المساحة
  loveMessage.style.color = "white"; // تغيير لون النص إلى الأبيض ليتناسب مع الخلفية
  loveMessage.style.fontFamily = "Arial, sans-serif"; // تعيين نوع الخط
  loveMessage.style.textAlign = "center"; // محاذاة النص في المنتصف
  loveMessage.style.padding = "20px";
  loveMessage.style.borderRadius = "10px"; // جعل النص داخل مربع مع حواف مدورة
  loveMessage.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // إضافة خلفية داكنة للنص لزيادة وضوحه
  loveMessage.style.display = "flex";
  loveMessage.style.flexDirection = "column"; // ترتيب النص بشكل عمودي
  loveMessage.style.alignItems = "center"; // محاذاة النص في المنتصف
  loveMessage.style.justifyContent = "center"; // محاذاة العناصر
  loveMessage.style.overflow = "hidden"; // منع النص من الخروج من الحدود

  document.body.appendChild(loveMessage); // إضافة النص إلى الصفحة
});

// وظيفة الفقاعات (إذا كنت ترغب في الاحتفاظ بها)
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
