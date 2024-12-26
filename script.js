const messages = [
  "💘🔥 أعشقكِ بجنون 💖🌹 \n" + 
  "أنا دائمًا هنا لأجلكِ، حتى في أصعب اللحظات 💘🔥 أعشقكِ بجنون 💖🌹 " + 
  "أنا دائمًا هنا لأجلكِ، حتى في أصعب اللحظات 💘🔥 أعشقكِ بجنون 💖🌹"
];

const container = document.querySelector('.bubble-container');
const blackhole = document.querySelector('.blackhole');
const body = document.querySelector('body');

// تأثير الثقب الأسود
blackhole.addEventListener('click', () => {
  document.body.innerHTML = '';
  body.style.backgroundImage = "url('https://i.ibb.co/CK2Hx00/f5da5f7fd5f3d81fabb18d7a6161c637.jpg')";

  const loveMessage = document.createElement('div');
  loveMessage.classList.add('popup');
  loveMessage.innerText = "احم احم بصي يا اغلي ما ليا يا احلي بنوته واحلي ماما واحلي بيست واحلي حبيبه واحلل كل حاجه حرفيا انا عملت الموقع دا عشان افاجئك بي يعني هو كلو عل بعضو عملو كمفاجئه قولت استغل بقا ام النا بتعلمه دا في حاجه تفرح حد بحبه بدل الهبل الي مش جايبلي منها حاجه دا المهم بموت فيكي يا بت يارب يعجبك عشان بجد انا مش عامله بمجهود ولا حاجه انا عملو بقلبي عشان عايز اقولق واوصلك من خلاله اني بحبك موت ومقدرش اعيش من غيرك ومهما غيبت عليكي في يوم اعرفي ان دي حاجه غصبن عني اصلا مش بأيدي بجد عمري ما هتخلي عنك في يوم ولا هبعد عنك انتي قبل متكوني حبيبتي انتي حياتي كلها والله ومقدرش ابعد عنك لحظه مقدرش اعملك وحش مقدرش ارفضلك طلب ولو رفضت اعرفي ان الطلب الي بتطلبي دا في ضرر ليكي عشان كدا رفضه فا بحبكككك اوي بجد وربنا يخليكي ليا يا اغلي حد في حياتي وميحرمنيش منك ابدا ربنا يخليلي خفة دمك وهبلك وزعلك مني لما اضايقك ربنا يخليلي كل تفصيله ربنا يخليلي حنيتك ورومانسيتك وكلامك الحلو ربنا يخليلي تعلقك بيا وحبك ليا وانا بحبككك وبموووت فيكي اكتر والله بجدددد وعددد مني قسما بالله ما حد ياخدك غيري انتي بتاعتي فاهمه يعني لو هموت نفسي عشان نبقا في بيت واحد هعمل كدا ومهما كان اه لسه بدري بس انا البدري دا هفضل اعدو بلثواني وبلحظات وبلدقايق لاني خلاص انتي علي رأي المثل مراتي بس سايبك عند ماما بس تتسلي شويه بمووووت فيكي يا بتتتت وبعشقكككك وربنا ميحرمنننني منك ولا من اي حاجه بتعمليها ابدااا بعشقكككك يا بنوتي وكل عمري ✨🙈\n\nyou are my wife 👩‍❤️‍👨✨\n\nyou are my life ❤️‍🔥💫";

  // تعيين خلفية سوداء شفافة وتغيير النص إلى الأبيض
  loveMessage.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // خلفية سوداء شفافة
  loveMessage.style.color = "white"; // تغيير النص إلى الأبيض
  loveMessage.style.height = "70vh"; // تحديد ارتفاع ثابت نسبي
  loveMessage.style.maxWidth = "90%"; // تحديد عرض أقصى للعنصر
  loveMessage.style.display = "flex"; // استخدام flexbox
  loveMessage.style.flexDirection = "column"; // ترتيب النص بشكل عمودي
  loveMessage.style.alignItems = "center"; // محاذاة العناصر
  loveMessage.style.justifyContent = "center"; // محاذاة النص في المنتصف
  loveMessage.style.padding = "10px"; // إضافة حواف للرسالة
  loveMessage.style.overflowY = "auto"; // تمكين التمرير العمودي
  loveMessage.style.maxHeight = "60vh"; // تحديد الحد الأقصى للارتفاع مع التمرير

  document.body.appendChild(loveMessage);
  loveMessage.style.display = 'block';
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

  // تعيين خلفية سوداء شفافة للنافذة المنبثقة
  msgElement.style.backgroundColor = "rgba(0, 0, 0, 0.6)"; // خلفية سوداء شفافة
  msgElement.style.color = "white"; // تغيير النص إلى الأبيض
  msgElement.style.height = "auto"; // جعل ارتفاع النافذة المنبثقة يتكيف مع النص
  msgElement.style.maxWidth = "90%"; // تحديد عرض أقصى للنافذة المنبثقة
  msgElement.style.display = "flex"; // استخدام flexbox
  msgElement.style.flexDirection = "column"; // ترتيب النص بشكل عمودي
  msgElement.style.alignItems = "center"; // محاذاة النص في المنتصف
  msgElement.style.justifyContent = "center"; // محاذاة العناصر
  msgElement.style.overflowY = "auto"; // تمكين التمرير العمودي
  msgElement.style.maxHeight = "60vh"; // تحديد الحد الأقصى للارتفاع مع التمرير
  msgElement.style.padding = "10px"; // إضافة حواف للرسالة

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
