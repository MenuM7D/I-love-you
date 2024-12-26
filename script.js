const messages = [
  "💘🔥 أعشقكِ بجنون 💖🌹",
];

const container = document.querySelector('.bubble-container');
const blackhole = document.querySelector('.blackhole');
const body = document.querySelector('body');

// تأثير الثقب الأسود
blackhole.addEventListener('click', () => {
  document.body.innerHTML = ''; // مسح محتوى الصفحة لتكون الخلفية هي العنصر الوحيد

  // تعيين الخلفية الكاملة للصورة
  body.style.backgroundImage = "url('https://i.ibb.co/x7Pbt6L/Screenshot.jpg')";
  body.style.backgroundSize = "cover"; // جعل الصورة تغطي كامل الشاشة
  body.style.backgroundPosition = "center"; // ضبط الصورة في المركز
  body.style.height = "100vh"; // تأكد من أن الخلفية تغطي كامل العرض والارتفاع
  body.style.margin = "0"; // إزالة الهوامش الافتراضية

  // إنشاء نافذة منبثقة تحتوي على نص الرسالة في المنتصف
  const loveMessage = document.createElement('div');
  loveMessage.classList.add('popup');
  loveMessage.innerText = "احم احم بصي يا اغلي ما ليا يا احلي بنوته واحلي ماما واحلي بيست واحلي حبيبه واحلل كل حاجه حرفيا انا عملت الموقع دا عشان افاجئك بي يعني هو كلو عل بعضو عملو كمفاجئه قولت استغل بقا ام النا بتعلمه دا في حاجه تفرح حد بحبه بدل الهبل الي مش جايبلي منها حاجه دا المهم بموت فيكي يا بت يارب يعجبك عشان بجد انا مش عامله بمجهود ولا حاجه انا عملو بقلبي عشان عايز اقولق واوصلك من خلاله اني بحبك موت ومقدرش اعيش من غيرك ومهما غيبت عليكي في يوم اعرفي ان دي حاجه غصبن عني اصلا مش بأيدي بجد عمري ما هتخلي عنك في يوم ولا هبعد عنك انتي قبل متكوني حبيبتي انتي حياتي كلها والله ومقدرش ابعد عنك لحظه مقدرش اعملك وحش مقدرش ارفضلك طلب ولو رفضت اعرفي ان الطلب الي بتطلبي دا في ضرر ليكي عشان كدا رفضه فا بحبكككك اوي بجد وربنا يخليكي ليا يا اغلي حد في حياتي وميحرمنيش منك ابدا ربنا يخليلي خفة دمك وهبلك وزعلك مني لما اضايقك ربنا يخليلي كل تفصيله ربنا يخليلي حنيتك ورومانسيتك وكلامك الحلو ربنا يخليلي تعلقك بيا وحبك ليا وانا بحبككك وبموووت فيكي اكتر والله بجدددد وعددد مني قسما بالله ما حد ياخدك غيري انتي بتاعتي فاهمه يعني لو هموت نفسي عشان نبقا في بيت واحد هعمل كدا ومهما كان اه لسه بدري بس انا البدري دا هفضل اعدو بلثواني وبلحظات وبلدقايق لاني خلاص انتي علي رأي المثل مراتي بس سايبك عند ماما بس تتسلي شويه بمووووت فيكي يا بتتتت وبعشقكككك وربنا ميحرمنننني منك ولا من اي حاجه بتعمليها ابدااا بعشقكككك يا بنوتي وكل عمري ✨🙈\n\nyou are my wife 👩‍❤️‍👨✨\n\nyou are my life ❤️‍🔥💫";

  // تنسيق النص داخل النافذة المنبثقة
  loveMessage.style.position = "absolute"; // جعل النص في مكان معين في الصفحة
  loveMessage.style.top = "50%"; // وضع النص في منتصف الصفحة عموديا
  loveMessage.style.left = "50%"; // وضع النص في منتصف الصفحة أفقيا
  loveMessage.style.transform = "translate(-50%, -50%)"; // تحريك النص ليكون في المنتصف تماما
  loveMessage.style.fontSize = "24px"; // تغيير حجم الخط حسب الحاجة
  loveMessage.style.color = "white"; // تغيير لون النص إلى الأبيض ليتناسب مع الخلفية
  loveMessage.style.fontFamily = "Arial, sans-serif"; // تعيين نوع الخط
  loveMessage.style.textAlign = "center"; // محاذاة النص في المنتصف
  loveMessage.style.padding = "20px";
  loveMessage.style.borderRadius = "10px"; // جعل النص داخل مربع مع حواف مدورة
  loveMessage.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // إضافة خلفية داكنة للنص لزيادة وضوحه
  loveMessage.style.maxWidth = "90%"; // ضمان أن النص لا يتجاوز عرض الشاشة

  document.body.appendChild(loveMessage);
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
