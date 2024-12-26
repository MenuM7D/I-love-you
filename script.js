const messages = [
  "💘🔥 أعشقكِ بجنون 💖🌹",
];

const container = document.querySelector('.bubble-container');
const blackhole = document.querySelector('.blackhole');
const body = document.querySelector('body');

// لتخزين العناصر التي تم إخفاؤها
let hiddenElements = [];

// تأثير الثقب الأسود
blackhole.addEventListener('click', () => {
  // إخفاء جميع العناصر باستثناء نافذة المنبثقة
  hiddenElements = []; // إعادة تعيين العناصر المخفية
  
  // تخزين العناصر الموجودة في الصفحة قبل إخفائها
  const allElements = document.body.children;
  for (let i = 0; i < allElements.length; i++) {
    hiddenElements.push(allElements[i]);
  }

  // إخفاء العناصر باستثناء نافذة المنبثقة
  for (let i = 0; i < hiddenElements.length; i++) {
    hiddenElements[i].style.display = 'none';
  }

  // إنشاء نافذة منبثقة جديدة لعرض النص
  const loveMessage = document.createElement('div');
  loveMessage.classList.add('popup');
  loveMessage.innerText = "احم احم بصي يا اغلي ما ليا يا احلي بنوته واحلي ماما واحلي بيست واحلي حبيبه واحلل كل حاجه حرفيا انا عملت الموقع دا عشان افاجئك بي يعني هو كلو عل بعضو عملو كمفاجئه قولت استغل بقا ام النا بتعلمه دا في حاجه تفرح حد بحبه بدل الهبل الي مش جايبلي منها حاجه دا المهم بموت فيكي يا بت يارب يعجبك عشان بجد انا مش عامله بمجهود ولا حاجه انا عملو بقلبي عشان عايز اقولق واوصلك من خلاله اني بحبك موت ومقدرش اعيش من غيرك ومهما غيبت عليكي في يوم اعرفي ان دي حاجه غصبن عني اصلا مش بأيدي بجد عمري ما هتخلي عنك في يوم ولا هبعد عنك انتي قبل متكوني حبيبتي انتي حياتي كلها والله ومقدرش ابعد عنك لحظه مقدرش اعملك وحش مقدرش ارفضلك طلب ولو رفضت اعرفي ان الطلب الي بتطلبي دا في ضرر ليكي عشان كدا رفضه فا بحبكككك اوي بجد وربنا يخليكي ليا يا اغلي حد في حياتي وميحرمنيش منك ابدا ربنا يخليلي خفة دمك وهبلك وزعلك مني لما اضايقك ربنا يخليلي كل تفصيله ربنا يخليلي حنيتك ورومانسيتك وكلامك الحلو ربنا يخليلي تعلقك بيا وحبك ليا وانا بحبككك وبموووت فيكي اكتر والله بجدددد وعددد مني قسما بالله ما حد ياخدك غيري انتي بتاعتي فاهمه يعني لو هموت نفسي عشان نبقا في بيت واحد هعمل كدا ومهما كان اه لسه بدري بس انا البدري دا هفضل اعدو بلثواني وبلحظات وبلدقايق لاني خلاص انتي علي رأي المثل مراتي بس سايبك عند ماما بس تتسلي شويه بمووووت فيكي يا بتتتت وبعشقكككك وربنا ميحرمنننني منك ولا من اي حاجه بتعمليها ابدااا بعشقكككك يا بنوتي وكل عمري ✨🙈\n\nyou are my wife 👩‍❤️‍👨✨\n\nyou are my life ❤️‍🔥💫";

  // تصميم النافذة المنبثقة لتأخذ 70% من الشاشة
  loveMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // خلفية مظلمة
  loveMessage.style.color = "white"; // لون النص أبيض
  loveMessage.style.borderRadius = "0"; // إزالة الحواف المدورة
  loveMessage.style.padding = "20px";
  loveMessage.style.width = "70%"; // عرض النافذة 70% من الشاشة
  loveMessage.style.height = "70vh"; // ارتفاع النافذة 70% من الشاشة
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

  // إنشاء علامة الخروج (X)
  const exitButton = document.createElement('div');
  exitButton.innerText = 'X';
  exitButton.style.position = 'absolute';
  exitButton.style.top = '10px';
  exitButton.style.right = '10px';
  exitButton.style.color = 'white';
  exitButton.style.fontSize = '30px';
  exitButton.style.cursor = 'pointer';
  exitButton.style.zIndex = '1001'; // التأكد من أن زر الخروج فوق النافذة

  // إضافة حدث للإغلاق عند النقر على علامة الخروج
  exitButton.addEventListener('click', () => {
    loveMessage.remove(); // إزالة النافذة عند النقر على علامة الخروج

    // إعادة إظهار جميع العناصر التي تم إخفاؤها
    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].style.display = ''; // استعادة العرض الأصلي
    }
  });

  // إضافة علامة الخروج إلى النافذة
  loveMessage.appendChild(exitButton);

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
