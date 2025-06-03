<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>APDPSOLUTIONS - Unlock Your Financial Potential</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
    /* General styles for the APDPSOLUTIONS website */
    * {
      box-sizing: border-box;
    }
    html, body {
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
      color: #333;
      scroll-behavior: smooth;
    }
    header {
      background: linear-gradient(135deg, #00274d, #005792);
      color: white;
      text-align: center;
      padding: 4rem 1rem 2rem 1rem;
      position: relative;
      animation: slideInFromTop 1s ease-in-out;
    }
    .utc-time {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 1rem;
      color: #fff;
    }
    @keyframes slideInFromTop {
      0% { transform: translateY(-100%); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    header h1 {
      font-size: 2.8rem;
      margin: 0;
      animation: scaleIn 1.2s ease-in-out;
    }
    @keyframes scaleIn {
      0% { transform: scale(0); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    .subtitle {
      font-size: 1.3rem;
      margin-top: 0.5rem;
      font-weight: 300;
      animation: fadeInUp 2s ease-in;
    }
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    section {
      animation: fadeIn 1s ease-in;
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
    .form-section {
      background: white;
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    .form-section:hover {
      transform: translateY(-5px);
    }
    .form-section h2 {
      text-align: center;
      margin-bottom: 1rem;
      color: #005792;
    }
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-top: 1em;
      font-weight: 500;
    }
    input {
      padding: 0.7em;
      margin-top: 0.3em;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .form-buttons {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
    button {
      padding: 0.7em 1.2em;
      background: linear-gradient(to right, #00b4db, #0083b0);
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s ease, transform 0.2s;
    }
    button:hover {
      transform: scale(1.05);
    }
    .thank-ou-message {
      display: none;
      text-align: center;
      margin-top: 1rem;
      color: green;
      font-weight: bold;
    }
    .info-section {
      max-width: 800px;
      margin: 2rem auto;
      background: #fff;
      padding: 2rem;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    .info-section h2 {
      color: #005792;
      margin-bottom: 1rem;
    }
    .info-section p {
      line-height: 1.7;
    }
    .contact-section {
      text-align: center;
      padding: 2rem;
      background: linear-gradient(to right, #e3f2fd, #cce7ff);
      margin: 2rem auto;
      max-width: 800px;
      border-radius: 15px;
    }
    .contact-section a {
      display: inline-block;
      margin: 0.5rem 1rem;
      color: #005792;
      text-decoration: none;
      font-weight: 500;
      transition: transform 0.3s;
    }
    .contact-section a:hover {
      transform: scale(1.1);
    }
    .contact-section img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .launch-info {
      text-align: center;
      padding: 1rem;
      font-weight: bold;
      color: #d32f2f;
      font-size: 1.2rem;
    }
    footer {
      background: #00274d;
      color: white;
      text-align: center;
      padding: 1em;
      margin-top: 3rem;
      animation: fadeIn 1.5s ease-in;
    }

    /* Styles for Investment Plans Section (copied from previous code) */
    section#investment-plans {
      padding: 40px 20px;
      max-width: 900px;
      width: 100%;
      margin: 2rem auto; /* Added margin to fit into the main layout */
      background: #fff; /* Added background for consistency */
      border-radius: 15px; /* Added border-radius for consistency */
      box-shadow: 0 5px 15px rgba(0,0,0,0.05); /* Added box-shadow for consistency */
    }
    section#investment-plans h2 { /* Targeting h2 specifically within this section */
      text-align: center;
      font-size: 2.8rem;
      font-weight: 700;
      color: #003366;
      margin-bottom: 40px;
      letter-spacing: 1.2px;
      animation: fadeInDown 1s ease forwards;
    }
    @keyframes fadeInDown {
      0% { opacity: 0; transform: translateY(-25px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    ul.scheme-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }
    ul.scheme-list li.scheme-item {
      color: #fff;
      padding: 18px 16px;
      border-radius: 12px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      user-select: none;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1rem;
      outline: none;
      border: 3px solid transparent;
    }
    ul.scheme-list li.scheme-item:hover,
    ul.scheme-list li.scheme-item:focus {
      transform: scale(1.07);
      box-shadow: 0 10px 20px rgba(0,0,0,0.25);
      outline: none;
      border-color: #00509e;
    }
    ul.scheme-list li.scheme-item[data-plan="weekly"] {
      background: #b87333; /* bronze */
    }
    ul.scheme-list li.scheme-item[data-plan="monthly"] {
      background: #c0c0c0; /* silver */
      color: #003366;
      box-shadow: 0 6px 12px rgba(192,192,192,0.5);
    }
    ul.scheme-list li.scheme-item[data-plan="quarterly"] {
      background: #ffd700; /* gold */
      color: #003366;
      box-shadow: 0 6px 12px rgba(255,215,0,0.4);
    }
    ul.scheme-list li.scheme-item[data-plan="halfyearly"] {
      background: #daa520; /* goldenrod */
    }
    ul.scheme-list li.scheme-item[data-plan="yearly"] {
      background: #b9f2ff; /* light cyan */
      color: #003366;
      box-shadow: 0 6px 12px rgba(185,242,255,0.4);
    }
    ul.scheme-list li.scheme-item[data-plan="twoyears"] {
      background: #0077be; /* blue */
    }
    ul.scheme-list li.scheme-item[data-plan="threeyears"] {
      background: #4b0082; /* indigo */
    }
    ul.scheme-list li.scheme-item[data-plan="fiveyears"] {
      background: #6a5acd; /* slate blue */
    }

    .scheme-item .icon {
      font-size: 1.4rem;
      user-select: none;
    }

    /* Modal styles for Investment Plans (copied from previous code) */
    #modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
    }
    #modal-overlay.show {
      opacity: 1;
      pointer-events: auto;
    }
    #plan-details {
      background: #fff;
      border-radius: 14px;
      padding: 30px 40px;
      box-shadow: 0 10px 24px rgba(0,0,0,0.2);
      color: #333;
      font-size: 1rem;
      line-height: 1.6;
      max-width: 600px;
      max-height: 80vh;
      overflow-y: auto;
      position: relative;
      transform: translateY(-30px);
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
    #modal-overlay.show #plan-details {
      opacity: 1;
      transform: translateY(0);
    }
    #plan-details h3 {
      margin-top: 0;
      color: #003366;
      font-weight: 700;
      margin-bottom: 18px;
    }
    #plan-details ul {
      padding-left: 20px;
      margin-bottom: 20px;
    }
    #plan-details ul li {
      margin-bottom: 10px;
    }

    #close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #003366;
      color: white;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-weight: 700;
      cursor: pointer;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 0.2s ease;
    }
    #close-btn:hover,
    #close-btn:focus {
      background: #00509e;
      outline: none;
    }

    /* Responsive adjustments for both sections */
    @media (max-width: 600px) {
      ul.scheme-list {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 12px;
      }
      ul.scheme-list li.scheme-item {
        font-size: 0.9rem;
        padding: 14px 10px;
      }
      #plan-details {
        padding: 20px 25px;
        max-width: 90vw;
        max-height: 70vh;
      }
      #close-btn {
        width: 28px;
        height: 28px;
        font-size: 1rem;
        top: 12px;
        right: 12px;
      }
    }

    /* Styles for the logo (if present) */
    .header-logo {
      width: 150px; /* Adjust size as needed */
      height: auto;
      margin-bottom: 1rem; /* Space between logo and title */
      animation: fadeIn 1.5s ease-in; /* Add fade-in animation */
    }
    @media (max-width: 600px) {
      .header-logo {
        width: 100px; /* Smaller logo on mobile */
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="utc-time" id="utcTime"></div>
    <h1>APDPSOLUTIONS</h1>
    <div class="subtitle">Unlock your financial potential with our investment strategies</div>
  </header>

  <div class="launch-info">🚀 This is our prelaunch website. Official launch coming soon.</div>

  <section class="form-section">
    <h2>Client Registration</h2>
    <form id="registrationForm">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="country">Country</label>
      <input type="text" id="country" name="country" required>

      <label for="mobile">Mobile Number</label>
      <input type="tel" id="mobile" name="mobile" required>

      <div class="form-buttons">
        <button type="submit">Register</button>
      </div>
    </form>
    <div class="thank-you-message" id="thankYouMessage">Thank you for registering! We will contact you soon.</div>
  </section>

  <section class="info-section">
    <h2>Your Data is Safe</h2>
    <p>At APDPSOLUTIONS, we take your privacy and data security seriously. All client information is encrypted and stored securely. We never share your personal data with third parties without your consent.</p>
  </section>

  <section class="info-section">
    <h2>About Us</h2>
    <p>APDPSOLUTIONS is a forward-thinking investment platform created to empower clients with the tools and opportunities to grow their wealth. Our platform combines secure technology, expert insight, and transparent practices to create a trusted investment environment. We are committed to helping you achieve your financial goals through strategic fundraising and personalized client service.</p>
  </section>

  <section class="info-section">
    <h2>Why Fund Us?</h2>
    <p>
      - We offer a unique approach to secure, blockchain-based fundraising.<br />
      - Transparent and fast USDT (TRC20) crypto payments.<br />
      - Dedicated support and regular updates for investors.<br />
      - We align our success with yours — we grow together.<br />
      - Advanced tools to monitor and manage your investments in real-time.<br />
      - Security of capital is our top priority.<br />
      - Enjoy consistent returns and growth.<br />
      - Backed by strong past performance metrics.<br />
      - Read real user testimonials from our satisfied investors.<br />
      - Unlock passive income potential through our optimized strategies.
    </p>
  </section>

  <section id="investment-plans" aria-label="Investment Plans">
    <h2>Investment Plans</h2>

    <ul class="scheme-list" role="listbox" tabindex="0" aria-label="Investment scheme list">
      <li 
        class="scheme-item" 
        data-plan="weekly" 
        role="option" 
        tabindex="0" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">⏳</span> WEEKLY – 7 DAYS (BRONZE)
      </li>
      <li 
        class="scheme-item" 
        data-plan="monthly" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">📅</span> MONTHLY – 30 DAYS (SILVER)
      </li>
      <li 
        class="scheme-item" 
        data-plan="quarterly" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">💰</span> QUARTERLY – 3 MONTHS (GOLD)
      </li>
      <li 
        class="scheme-item" 
        data-plan="halfyearly" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">📈</span> HALF YEARLY – 6 MONTHS (GOLD PLUS)
      </li>
      <li 
        class="scheme-item" 
        data-plan="yearly" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">🎯</span> YEARLY – 12 MONTHS (DIAMOND)
      </li>
      <li 
        class="scheme-item" 
        data-plan="twoyears" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">🏆</span> TWO YEARS (DIAMOND PLUS)
      </li>
      <li 
        class="scheme-item" 
        data-plan="threeyears" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">🚀</span> THREE YEARS (PLATINUM)
      </li>
      <li 
        class="scheme-item" 
        data-plan="fiveyears" 
        role="option" 
        tabindex="-1" 
        aria-selected="false"
      >
        <span class="icon" aria-hidden="true">🌟</span> FIVE YEARS (PLATINUM PLUS)
      </li>
    </ul>
  </section>

  <div id="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
    <div id="plan-details">
      <button id="close-btn" aria-label="Close details modal">×</button>
      <h3 id="modal-title">Plan Details</h3>
      <div id="modal-content">Select a plan to see details.</div>
    </div>
  </div>

  <section class="contact-section">
    <h2>Contact With Us</h2>
    <a href="https://www.instagram.com/apdpsolutions/" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />Instagram
    </a>
    <a href="https://t.me/apdpsolutions" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />Telegram
    </a>
    <a href="mailto:apdpsolutions@gmail.com">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />Email
    </a>
    <a href="https://www.youtube.com/@apdpsolutions-n6g" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />YouTube
    </a>
  </section>

  <footer>
    © 2025 APDPSOLUTIONS. All Rights Reserved.
  </footer>

  <script>
    // Existing script for form submission and UTC time
    const form = document.getElementById("registrationForm");
    const thankYou = document.getElementById("thankYouMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const country = document.getElementById("country").value;
      const mobile = document.getElementById("mobile").value;

      fetch("https://formsubmit.co/ajax/apdpsolutions@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, country, mobile })
      })
      .then(res => res.ok ? thankYou.style.display = "block" : console.error("Failed to send. Try again."))
      .catch((error) => console.error("Something went wrong:", error));

      form.reset();
    });

    function updateUTCTime() {
      const now = new Date();
      document.getElementById("utcTime").textContent = "UTC Time: " + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' });
    }
    setInterval(updateUTCTime, 1000);
    updateUTCTime();

    // New script for Investment Plans section and modal
    const planDetails = {
      weekly: {
        title: "WEEKLY – 7 DAYS (BRONZE)",
        description: [
          "For first 100 clients only applicable.",
          "Minimum investment: $100 to $10,000.",
          "Return: 2% for the week only.",
          "A client can invest only 3 times in the weekly plan, then they have to upgrade for the next basic-monthly, quarterly, half yearly etc., plans.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $1000 on (10-02-2020) in weekly plan. After 7 days on (16-02-2020), they got invested profit of $20 for a week, and total amount of $1,020 can withdraw on the next day after plan expire (17-02-2020)."
        ]
      },
      monthly: {
        title: "MONTHLY – 30 DAYS (SILVER)",
        description: [
          "Minimum investment: $500 to $100,000.",
          "Return: 4% for the month only.",
          "A client can invest only 2 times in the Monthly plan, then they have to upgrade for the next quarterly, half yearly etc., plans.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $10,000 on (1-03-2020) in monthly plan. After a month on (30-03-2020), they got invested profit of $400 for a month, and total amount of $10,400 can withdraw on the next day after plan expire (31-03-2020).",
          "Client will get bonus of $5 for the upgradation of the silver plan."
        ]
      },
      quarterly: {
        title: "QUARTERLY – 3 MONTHS (GOLD)",
        description: [
          "Minimum investment: $500 to $1,000,000.",
          "Return: 4.15% for the QUARTERLY (3 MONTHS) only.",
          "A client can invest only 3 times in the QUARTERLY plan, then they have to upgrade for the next half yearly, annual etc., plans.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $100,000 on (1-04-2020) in quarterly plan. After 3 months on (1-07-2020), they got invested profit of $12,450 for 3 months, and total amount of $112,450 can withdraw on the next day after plan expire (2-07-2020).",
          "Client will get bonus of $10 for the upgradation of the gold plan."
        ]
      },
      halfyearly: {
        title: "HALF YEARLY – 6 MONTHS (GOLD PLUS)",
        description: [
          "Minimum investment: $1,000 to $1,000,000.",
          "Return: 4.25% for the HALF YEARLY (6 MONTHS) only.",
          "They can upgrade for the next- one year, 2 years, 3 years, 5 years etc., plans.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $100,000 on (1-04-2020) in half yearly plan. After 6 months on (1-10-2020), they got invested profit of $25,500 for 6 months, and total amount of $125,500 can withdraw on the next day after plan expire (2-10-2020).",
          "Client will get bonus of $20 for the upgradation of the gold plus plan."
        ]
      },
      yearly: {
        title: "YEARLY – 12 MONTHS (DIAMOND)",
        description: [
          "Minimum investment: $1,000 to $10,000,000.",
          "Return: 4.35% for the YEARLY (12 MONTHS) only.",
          "They can upgrade for the next- 2 years, 3 years, 5 years etc., plans.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $100,000 on (1-04-2020) in yearly plan. After one year on (1-04-2021), they got invested profit of $52,200 for 12 months, and total amount of $152,200 can withdraw on the next day after plan expire (2-04-2021).",
          "Client will get bonus of $20 for the upgradation of the diamond plan."
        ]
      },
      twoyears: {
        title: "TWO YEARS – 24 MONTHS (DIAMOND PLUS)",
        description: [
          "Minimum investment: $1,000 to $10,000,000.",
          "Return: 4.45% for the 2 YEARS (24 MONTHS) only.",
          "They can upgrade for the next- 3 years, 5 years etc., plans.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $100,000 on (1-04-2020) in 2 years plan. After 2 years on (1-04-2022), they got invested profit of $106,800 for 24 months, and total amount of $206,800 can withdraw on the next day after plan expire (2-04-2022).",
          "Client will get bonus of $40 for the upgradation of the diamond plus plan."
        ]
      },
      threeyears: {
        title: "THREE YEARS – 36 MONTHS (PLATINUM)",
        description: [
          "Minimum investment: $1,000 to $10,000,000.",
          "Return: 4.50% for the 3 YEARS (36 MONTHS) only.",
          "They can upgrade for the next- 5 years plan.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $100,000 on (1-04-2020) in 3 years plan. After 3 years on (1-04-2023), they got invested profit of $162,000 for 36 months, and total amount of $262,000 can withdraw on the next day after plan expire (2-04-2023).",
          "Client will get bonus of $60 for the upgradation of the PLATINUM plan."
        ]
      },
      fiveyears: {
        title: "FIVE YEARS – 60 MONTHS (PLATINUM PLUS)",
        description: [
          "Minimum investment: $1,000 to $10,000,000.",
          "Return: 5% for the 5 YEARS (60 MONTHS) only.",
          "After the expire of the plan, the client can withdraw both capital & profit of the invested amount.",
          "Example: A client invested $100,000 on (1-04-2020) in 5 years plan. After 5 years on (1-04-2025), they got invested profit of $300,000 for 60 months, and total amount of $400,000 can withdraw on the next day after plan expire (2-04-2025).",
          "Client will get bonus of $100 for the upgradation of the PLATINUM PLUS plan."
        ]
      }
    };

    // Get references to DOM elements for investment plans
    const schemeList = document.querySelector('.scheme-list');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-btn');

    /**
     * Displays the modal with the details of the selected plan.
     * @param {string} planKey - The key of the plan to display (e.g., 'weekly', 'monthly').
     */
    function showPlanDetails(planKey) {
      const plan = planDetails[planKey];
      if (plan) {
        modalTitle.textContent = plan.title;
        modalContent.innerHTML = ''; // Clear previous content

        const ul = document.createElement('ul');
        plan.description.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        modalContent.appendChild(ul);

        modalOverlay.classList.add('show');
        modalOverlay.focus(); // Focus the modal for accessibility
      } else {
        modalTitle.textContent = "Plan Not Found";
        modalContent.innerHTML = "<p>Details for this plan are not available.</p>";
        modalOverlay.classList.add('show');
        modalOverlay.focus();
      }
    }

    /**
     * Hides the modal.
     */
    function hideModal() {
      modalOverlay.classList.remove('show');
    }

    // Event listener for clicking on investment scheme items
    schemeList.addEventListener('click', (event) => {
      const targetItem = event.target.closest('.scheme-item');
      if (targetItem) {
        const planKey = targetItem.dataset.plan;
        showPlanDetails(planKey);

        // Update aria-selected for accessibility
        document.querySelectorAll('.scheme-item').forEach(item => {
          item.setAttribute('aria-selected', 'false');
        });
        targetItem.setAttribute('aria-selected', 'true');
      }
    });

    // Event listener for keyboard navigation (Enter/Space) on investment scheme items
    schemeList.addEventListener('keydown', (event) => {
      const targetItem = event.target.closest('.scheme-item');
      if (targetItem && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault(); // Prevent default scroll behavior for spacebar
        const planKey = targetItem.dataset.plan;
        showPlanDetails(planKey);

        // Update aria-selected for accessibility
        document.querySelectorAll('.scheme-item').forEach(item => {
          item.setAttribute('aria-selected', 'false');
        });
        targetItem.setAttribute('aria-selected', 'true');
      }
    });

    // Event listener for closing the modal via the close button
    closeBtn.addEventListener('click', hideModal);

    // Event listener for closing the modal by clicking outside it
    modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
        hideModal();
      }
    });

    // Event listener for closing the modal with the Escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modalOverlay.classList.contains('show')) {
        hideModal();
      }
    });
  </script>
</body>
</html>
