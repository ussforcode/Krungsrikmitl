const pages =
  document.querySelectorAll(".page");


function showPage(id) {

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const target =
    document.getElementById(id);

  if (!target) return;

  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* ================================================= */
/* NAVIGATION */
/* ================================================= */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest("[data-go]");

    if (!button) return;

    showPage(
      button.dataset.go
    );

  }
);


/* ================================================= */
/* CUSTOMER / BROKER */
/* ================================================= */

const modeButtons =
  document.querySelectorAll(".mode-btn");


modeButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      modeButtons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      if (
        button.dataset.mode === "broker"
      ) {

        showPage("broker");

      } else {

        showPage("home");

      }

    }
  );

});


/* ================================================= */
/* INFORMATION TABS */
/* ================================================= */

const infoTabs =
  document.querySelectorAll(".info-tab");


const tabContents =
  document.querySelectorAll(".tab-content");


infoTabs.forEach(tab => {

  tab.addEventListener(
    "click",
    () => {

      infoTabs.forEach(item => {
        item.classList.remove("active");
      });

      tabContents.forEach(item => {
        item.classList.remove("active");
      });

      tab.classList.add("active");


      const target =
        document.getElementById(
          `tab-${tab.dataset.tab}`
        );


      if (target) {
        target.classList.add("active");
      }

    }
  );

});


/* ================================================= */
/* UPDATE PROFILE */
/* ================================================= */

document
  .getElementById("updateProfileBtn")
  .addEventListener(
    "click",
    () => {

      const name =
        document
          .getElementById("firstName")
          .value
          .trim()
        || "ณัฐ";


      const age =
        document
          .getElementById("age")
          .value
        || "25";


      document
        .getElementById("roadmapName")
        .textContent =
        name;


      document
        .getElementById("roadmapAge")
        .textContent =
        age;


      showPage("roadmap");

    }
  );


/* ================================================= */
/* ROAD MAP YEAR */
/* ================================================= */

let currentYearIndex = 0;

const roadmapYears = [
  2026,
  2027
];


const roadmapTrack =
  document.getElementById("roadmapTrack");


const yearLabel =
  document.getElementById("yearLabel");


function updateRoadmapYear() {

  roadmapTrack.style.transform =
    `translateX(-${currentYearIndex * 50}%)`;


  yearLabel.textContent =
    roadmapYears[currentYearIndex];


  document
    .getElementById("prevYear")
    .disabled =
    currentYearIndex === 0;


  document
    .getElementById("nextYear")
    .disabled =
    currentYearIndex ===
    roadmapYears.length - 1;


  document
    .getElementById("scrollPrev")
    .disabled =
    currentYearIndex === 0;


  document
    .getElementById("scrollNext")
    .disabled =
    currentYearIndex ===
    roadmapYears.length - 1;

}


function moveYear(direction) {

  currentYearIndex +=
    direction;


  if (currentYearIndex < 0) {
    currentYearIndex = 0;
  }


  if (
    currentYearIndex >
    roadmapYears.length - 1
  ) {

    currentYearIndex =
      roadmapYears.length - 1;

  }


  updateRoadmapYear();

}


document
  .getElementById("prevYear")
  .addEventListener(
    "click",
    () => moveYear(-1)
  );


document
  .getElementById("nextYear")
  .addEventListener(
    "click",
    () => moveYear(1)
  );


document
  .getElementById("scrollPrev")
  .addEventListener(
    "click",
    () => moveYear(-1)
  );


document
  .getElementById("scrollNext")
  .addEventListener(
    "click",
    () => moveYear(1)
  );


updateRoadmapYear();


/* ================================================= */
/* FOCUS BENEFIT */
/* ================================================= */

document
  .getElementById("focusBenefitBtn")
  .addEventListener(
    "click",
    () => {

      const panel =
        document
          .getElementById("benefitPanel");


      panel.classList.remove("flash");


      void panel.offsetWidth;


      panel.classList.add("flash");


      if (
        window.innerWidth < 901
      ) {

        panel.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    }
  );


/* ================================================= */
/* BENEFIT POLICY TAB */
/* ================================================= */

document
  .querySelectorAll(
    ".benefit-policy-tab"
  )
  .forEach(tab => {

    tab.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".benefit-policy-tab"
          )
          .forEach(item => {
            item.classList.remove("active");
          });


        tab.classList.add("active");


        showToast(
          "Demo: เปลี่ยนมุมมอง No-Claim Benefit ของกรมธรรม์แล้ว"
        );

      }
    );

  });


/* ================================================= */
/* PRODUCT DATA */
/* ================================================= */

const products = {

  travel: {

    icon: "✈️",

    match:
      "✦ AI MATCH 94%",

    name:
      "Travel Protect Plus",

    reason:
      "เหมาะกับคุณเพราะคุณมีพฤติกรรมเดินทางต่างประเทศเป็นประจำ",

    reasons: [

      "เดินทางต่างประเทศบ่อย",

      "ยังไม่มี Travel Insurance",

      "ต้องการความคุ้มครองเหตุฉุกเฉิน"

    ],

    coverage: [

      {
        icon: "🏥",
        title: "Medical",
        text: "ค่ารักษาฉุกเฉินระหว่างเดินทาง"
      },

      {
        icon: "✈️",
        title: "Flight Delay",
        text: "คุ้มครองกรณีเที่ยวบินล่าช้า"
      },

      {
        icon: "🧳",
        title: "Baggage",
        text: "สัมภาระสูญหายหรือเสียหาย"
      }

    ],

    price:
      "฿399 / Trip"

  },


  health: {

    icon: "❤️",

    match:
      "✦ AI MATCH 89%",

    name:
      "Health Upgrade",

    reason:
      "AI พบว่าความคุ้มครองสุขภาพปัจจุบันยังสามารถเพิ่มวงเงินได้",

    reasons: [

      "วงเงินเดิมอาจไม่พอกับค่ารักษาอนาคต",

      "คุณให้ความสำคัญกับสุขภาพ",

      "รายได้รองรับการเพิ่ม Protection"

    ],

    coverage: [

      {
        icon: "🏥",
        title: "Hospital",
        text: "วงเงินค่ารักษาพยาบาล"
      },

      {
        icon: "🩺",
        title: "Specialist",
        text: "ค่ารักษากับแพทย์เฉพาะทาง"
      },

      {
        icon: "💊",
        title: "Treatment",
        text: "ความคุ้มครองการรักษาต่อเนื่อง"
      }

    ],

    price:
      "ประมาณ ฿1,590 / เดือน"

  },


  family: {

    icon: "👨‍👩‍👧",

    match:
      "✦ AI MATCH 91%",

    name:
      "Family Protection Plan",

    reason:
      "AI พบว่าคุณมีแผนแต่งงานและอาจมีภาระทางการเงินเพิ่มขึ้นในอนาคต",

    reasons: [

      "มีแผนแต่งงานใน 2–3 ปี",

      "ต้องการดูแลครอบครัว",

      "ควรวางแผนก่อนมีภาระเพิ่ม"

    ],

    coverage: [

      {
        icon: "🛡️",
        title: "Life",
        text: "ความคุ้มครองชีวิต"
      },

      {
        icon: "❤️",
        title: "Critical Illness",
        text: "โรคร้ายแรง"
      },

      {
        icon: "👨‍👩‍👧",
        title: "Family",
        text: "ช่วยรองรับภาระของครอบครัว"
      }

    ],

    price:
      "ประมาณ ฿990 / เดือน"

  }

};


/* ================================================= */
/* PRODUCT DETAIL */
/* ================================================= */

document
  .querySelectorAll(
    ".product-detail-btn"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        openProduct(
          button.dataset.product
        );

      }
    );

  });


function openProduct(key) {

  const product =
    products[key];


  if (!product) return;


  document
    .getElementById("detailProductIcon")
    .textContent =
    product.icon;


  document
    .getElementById("detailMatch")
    .textContent =
    product.match;


  document
    .getElementById("detailProductName")
    .textContent =
    product.name;


  document
    .getElementById("detailProductReason")
    .textContent =
    product.reason;


  document
    .getElementById("detailPrice")
    .textContent =
    product.price;


  document
    .getElementById("detailReasons")
    .innerHTML =
    product.reasons
      .map(reason => `

        <div class="why-item">
          ✓ ${reason}
        </div>

      `)
      .join("");


  document
    .getElementById("detailCoverage")
    .innerHTML =
    product.coverage
      .map(item => `

        <div class="coverage-card">

          <span>
            ${item.icon}
          </span>

          <strong>
            ${item.title}
          </strong>

          <p>
            ${item.text}
          </p>

        </div>

      `)
      .join("");


  showPage(
    "productDetail"
  );

}


document
  .getElementById("buyDemoBtn")
  .addEventListener(
    "click",
    () => {

      showToast(
        "Demo: ส่งคำขอให้ Broker ติดต่อกลับแล้ว ✓"
      );

    }
  );


/* ================================================= */
/* CHAT */
/* ================================================= */

const chatInput =
  document.getElementById("chatInput");


const chatMessages =
  document.getElementById("chatMessages");


document
  .getElementById("sendChatBtn")
  .addEventListener(
    "click",
    sendChatMessage
  );


chatInput.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      sendChatMessage();

    }

  }
);


document
  .querySelectorAll("[data-quick]")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        chatInput.value =
          button.dataset.quick;


        sendChatMessage();

      }
    );

  });


function sendChatMessage() {

  const text =
    chatInput.value.trim();


  if (!text) return;


  chatMessages.insertAdjacentHTML(
    "beforeend",
    `

      <div class="message-row user">

        <div class="message">
          ${escapeHTML(text)}
        </div>

      </div>

    `
  );


  chatInput.value =
    "";


  showTyping();


  setTimeout(
    () => {

      removeTyping();


      const reply =
        generateAIReply(text);


      chatMessages.insertAdjacentHTML(
        "beforeend",
        `

          <div class="message-row">

            <div class="ai-avatar">
              AI
            </div>

            <div class="message">
              ${reply}
            </div>

          </div>

        `
      );


      window.scrollTo({
        top:
          document.body.scrollHeight,
        behavior:
          "smooth"
      });

    },
    700
  );

}


function showTyping() {

  chatMessages.insertAdjacentHTML(
    "beforeend",
    `

      <div
        id="typingMessage"
        class="message-row"
      >

        <div class="ai-avatar">
          AI
        </div>

        <div class="message">

          <div class="typing-dots">
            <i></i>
            <i></i>
            <i></i>
          </div>

        </div>

      </div>

    `
  );

}


function removeTyping() {

  const typing =
    document
      .getElementById(
        "typingMessage"
      );


  if (typing) {
    typing.remove();
  }

}


function generateAIReply(message) {

  const text =
    message.toLowerCase();


  if (
    text.includes("benefit")
    ||
    text.includes("สิทธิ")
    ||
    text.includes("ได้อะไร")
  ) {

    return `

      ตอนนี้คุณมี
      <strong>No-Claim Streak 2 ปี</strong>
      และอยู่ที่ระดับจำลอง
      <strong>30%</strong> ครับ

      <br><br>

      Benefit ที่คุณเห็นในแอปตอนนี้คือ

      <br>
      ✓ ส่วนลดจากประวัติไม่เคลม

      <br>
      ✓ Renewal Reminder ก่อนหมดอายุ

      <br>
      ✓ AI Claim Advisor

      <br>
      ✓ ติดตาม No-Claim Streak

      <br><br>

      หากรักษาประวัติต่อเนื่อง
      ปีหน้ามีโอกาสปลดล็อก Level
      <strong>40%</strong>
      ตามเงื่อนไขกรมธรรม์ครับ

    `;

  }


  if (
    text.includes("ปีหน้า")
    ||
    text.includes("เพิ่ม")
  ) {

    return `

      ถ้ารักษา No-Claim Streak ต่ออีกหนึ่งปี
      ในตัวอย่าง Demo
      Benefit Level อาจขยับจาก

      <strong>
        30% → 40%
      </strong>

      และคิดเป็นมูลค่าเพิ่มประมาณ

      <strong>
        ฿1,290
      </strong>

      จากเบี้ยตัวอย่าง ฿12,900/ปีครับ

    `;

  }


  if (
    text.includes("ชน")
    ||
    text.includes("เคลม")
    ||
    text.includes("อุบัติเหตุ")
  ) {

    return `

      ถ้าเกิดอุบัติเหตุจริง
      ความปลอดภัยและเงื่อนไขกรมธรรม์
      ต้องมาก่อนการรักษา No-Claim ครับ

      <br><br>

      แต่ AI สามารถช่วยให้คุณเห็นข้อมูลก่อนตัดสินใจ เช่น

      <br>
      • ค่าซ่อมโดยประมาณ

      <br>
      • ค่าเสียหายส่วนแรก

      <br>
      • ผลที่อาจเกิดกับ No-Claim Benefit

      <br><br>

      แล้วเปรียบเทียบทางเลือกให้คุณดูในหน้าเดียวครับ

    `;

  }


  if (
    text.includes("travel")
    ||
    text.includes("เที่ยว")
    ||
    text.includes("เดินทาง")
  ) {

    return `

      AI แนะนำ
      <strong>Travel Protect Plus</strong>
      เพราะคุณมีข้อมูลว่าเดินทางต่างประเทศบ่อย
      แต่ยังไม่มี Travel Protection โดยตรงครับ

      <br><br>

      AI Match ใน Demo อยู่ที่
      <strong>94%</strong>
      และสามารถกดจาก Road Map
      เข้าไปดูรายละเอียดความคุ้มครองได้เลย

    `;

  }


  if (
    text.includes("สุขภาพ")
    ||
    text.includes("health")
  ) {

    return `

      Road Map ของคุณวาง
      <strong>Health Upgrade</strong>
      ไว้ช่วงเดือน 4–6
      เพื่อไม่ให้ต้องซื้อทุกอย่างพร้อมกันครับ

      แนวคิดคือ AI กระจาย Protection
      ตามช่วงเวลาที่เหมาะกับ Life Stage ของคุณ

    `;

  }


  if (
    text.includes("แต่งงาน")
    ||
    text.includes("ครอบครัว")
  ) {

    return `

      เนื่องจากคุณมีแผนแต่งงานในอีก 2–3 ปี
      Road Map ปีถัดไปจึงเริ่มแนะนำ

      <strong>
        Family Protection Plan
      </strong>

      ก่อนถึงช่วงที่มีภาระทางการเงินจริงครับ

    `;

  }


  if (
    text.includes("road")
    ||
    text.includes("แผน")
  ) {

    return `

      Road Map ของคุณไม่ได้บอกแค่ว่า
      “ปีนี้ต้องซื้ออะไร”

      แต่แบ่งเป็น

      <strong>
        เดือน 1–3,
        4–6,
        7–9,
        10–12
      </strong>

      เพื่อบอกว่าช่วงไหนควร
      ซื้อ Protection,
      ติดตาม Benefit,
      หรือ Review กรมธรรม์ครับ

    `;

  }


  return `

    ผมสามารถช่วยตอบข้อมูล Demo
    จาก Life Road Map ของคุณได้ครับ 😊

    <br><br>

    ลองถามเรื่อง

    <strong>
      No-Claim Benefit,
      ประกันที่ AI แนะนำ,
      Road Map,
      สุขภาพ,
      การเดินทาง
      หรือแผนครอบครัว
    </strong>

    ได้เลย

  `;

}


function escapeHTML(text) {

  return text
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


/* ================================================= */
/* BROKER DEMO */
/* ================================================= */

const customers = [

  {
    name:
      "ณัฐ พงษ์พิพัฒน์",

    age:
      25,

    job:
      "Software Engineer",

    opportunity:
      "97%",

    insight:
      "No-Claim + Travel"
  },

  {
    name:
      "มินตรา วัฒนากุล",

    age:
      31,

    job:
      "Marketing Manager",

    opportunity:
      "92%",

    insight:
      "Family Protection"
  },

  {
    name:
      "ธนกร วิชัย",

    age:
      35,

    job:
      "Business Owner",

    opportunity:
      "88%",

    insight:
      "Health Upgrade"
  },

  {
    name:
      "พิมพ์ชนก ศรีสุข",

    age:
      29,

    job:
      "Designer",

    opportunity:
      "84%",

    insight:
      "Travel Protection"
  },

  {
    name:
      "วรัญญา ธีรพงศ์",

    age:
      38,

    job:
      "Teacher",

    opportunity:
      "82%",

    insight:
      "Retirement Plan"
  },

  {
    name:
      "ปกรณ์ วิเศษ",

    age:
      26,

    job:
      "Engineer",

    opportunity:
      "79%",

    insight:
      "Auto Insurance"
  }

];


const customerList =
  document.getElementById(
    "customerList"
  );


const brokerSearch =
  document.getElementById(
    "brokerSearch"
  );


function renderCustomers() {

  const query =
    brokerSearch.value
      .toLowerCase();


  const result =
    customers.filter(
      customer =>

        customer.name
          .toLowerCase()
          .includes(query)

        ||

        customer.job
          .toLowerCase()
          .includes(query)

    );


  customerList.innerHTML =
    result.map(customer => `

      <div class="customer-card">

        <h3>
          ${customer.name}
        </h3>

        <p>
          ${customer.age} ปี •
          ${customer.job}
        </p>

        <div class="customer-opportunity">

          <span>
            ${customer.insight}
          </span>

          <strong>
            ${customer.opportunity}
          </strong>

        </div>

      </div>

    `).join("");

}


brokerSearch.addEventListener(
  "input",
  renderCustomers
);


renderCustomers();


/* ================================================= */
/* TOAST */
/* ================================================= */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2300
    );

}


/* ================================================= */
/* START */
/* ================================================= */

showPage("home");