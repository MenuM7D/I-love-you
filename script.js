const messages = [
  "💘🔥 أعشقكِ بجنون 💖🌹", "💓🌙 أحبكِ أكثر من أي شيء في هذا العالم 🌟❤️", "💖✨ أدمنكِ بكل تفاصيلكِ 😘💫", "🌹✨ أنا مسحور بكِ لدرجة أنني لا أستطيع العيش بدونكِ 💘🌙", "💘👑 أنتِ قلبي وعالمي 💖💍",
  "👀💫 أنتِ عيوني التي لا ترى سواكِ 😍💖", "🧠💘 أنتِ عقلي الذي لا يفكر إلا فيكِ 🧠✨", "👑💞 أنتِ ملكتي التي لا أستطيع العيش بدونها 🏰💖", "🌍💘 أنتِ كل شيء بالنسبة لي، لا شيء يعادل حبكِ 💫🌹",
  "💓🕊️ أنتِ حياتي التي لا أريد أن أعيشها بدونكِ 💖🌙", "🌬️💖 أنتِ روحي التي أتنفسها في كل لحظة 🕊️✨", "💗💫 أنتِ أوكسيجيني الذي يعطيني الحياة 🌬️💖",
  "💗💘 أنتِ كل نبضة قلب في جسدي 😘❤️", "👣💞 أنتِ الشخص الذي أعيش من أجله 🤍🌹", "🤝💖 أنتِ صديقتي وحبيبة قلبي ❤️🌟", 
  "💑💖 أنتِ حبيبتي التي لا أريد سواها في حياتي 💘✨", "👩‍👧💖 أنتِ أمي التي أعشقها بكل كياني 🌸💗", "👶💘 أنتِ ابنتي التي أراها في كل لحظة 🍼💖", 
  "🍃💖 أنتِ الهواء الذي أتنفسه بكل تفاصيله 💨💫", "🛡️💘 سأضحي بحياتي من أجل سعادتكِ 🏹💖", "🌟💘 سأخسر الجميع من أجل أن تبقي بجانبي 🌙💖", 
  "⏳💖 سأكرس حياتي كلها لكِ ولحظاتنا الرائعة ⏳💘", "🌠💫 أنتِ حلمي الذي أصبح حقيقة 🌙💖", "🤔💖 أنتِ أفكاري في كل لحظة وفي كل ثانية 🧠💘", 
  "🌅💘 أنتِ أول من أفكر فيه عندما أستيقظ 💫💖", "🌌💖 أنتِ آخر من يفكر فيه عقلي قبل أن أنام 🌙💘", "🛑💖 لن أتخلى عنكِ أبدًا مهما كانت الظروف 💞🔥",
  "🚫💘 لن أعيش بدونكِ أبدًا لأنكِ جزء مني 💖🌹", "💪💘 سأواجه كل التحديات من أجلكِ مهما كانت صعوبتها 💫💖", "💍💘 سأتزوجكِ وأجعلكِ جزءًا من حياتي للأبد 💍💖",
  "❤️‍🔥🔥 أعشقك", "💖💓 أحبك", "💖🌟 أدمنك", "✨💫 أنا مسحور بكِ", "💘👑 أنتِ قلبي",
  "👀💖 أنتِ عيوني", "🧠💡 أنتِ عقلي", "👑💍 أنتِ ملكتي", "🌍💫 أنتِ كل شيء بالنسبة لي",
  "💓💖 أنتِ حياتي", "🕊️💞 أنتِ روحي", "🌬️💗 أنتِ أوكسيجيني",
  "💖💓 أنتِ كل دقة قلب يدقها قلبي", "👣❤️ أنتِ من أريد العيش من أجلها",
  "🤝💑 أنتِ صديقتي", "💑💖 أنتِ حبيبتي", "👩‍👧💖 أنتِ أمي", "👶💖 أنتِ ابنتي",
  "🍃💨 أنتِ الهواء الذي أتنفسه", "🛡️💪 أستطيع أن أضحي بنفسي من أجلكِ",
  "🌟🔥 مستعد أن أخسر الجميع من أجلكِ", "⏳💞 مستعد أن أكرس حياتي من أجلكِ",
  "🌠💖 أنتِ حلمي", "🤔💭 أنتِ عقلي", "🌅💭 أنتِ من أستيقظ وأفكر بكِ",
  "🌌💫 أنتِ من أنام وأفكر بكِ", "🛑💔 لن أتخلى عنكِ أبدًا",
  "🚫💔 لن أعيش بدونكِ أبدًا", "💪🔥 سأتحدي كل الصعاب من أجلكِ",
  "💍💖 سأتزوجكِ حتمًا"
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

  // تعيين الخلفية نفسها وتغيير اللون للنص إلى الأسود
  loveMessage.style.backgroundImage = "url('https://i.ibb.co/x7Pbt6L/Screenshot.jpg')";
loveMessage.style.backgroundSize = "cover";  // تغطي المساحة بالكامل
loveMessage.style.backgroundPosition = "center";  // تركز الصورة في المنتصف
loveMessage.style.backgroundAttachment = "fixed";  // تثبيت الصورة أثناء التمرير
loveMessage.style.borderRadius = "10px";
loveMessage.style.padding = "10px";
loveMessage.style.color = "black";  // تغيير النص إلى اللون الأسود

// التعامل مع الأجهزة المحمولة عبر media queries
loveMessage.style.display = 'block';

document.body.appendChild(loveMessage);

// إضافة media query للتأكد من التناسق على الأجهزة المختلفة
let style = document.createElement('style');
style.innerHTML = `
  @media (max-width: 768px) {
    loveMessage.style.backgroundAttachment = "scroll";  // تعطيل التثبيت على الأجهزة المحمولة
    loveMessage.style.backgroundSize = "cover";
  }
`;
document.head.appendChild(style);
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
