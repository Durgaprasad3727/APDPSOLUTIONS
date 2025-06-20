
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>APDPSOLUTIONS - Unlock Your Financial Potential</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
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
      overflow-x: hidden; /* Prevent horizontal scroll due to animations */
    }
    header {
      background: linear-gradient(135deg, #00274d, #005792);
      color: white;
      text-align: center;
      padding: 4rem 1rem 2rem 1rem;
      position: relative;
      animation: slideInFromTop 1s ease-in-out;
      overflow: hidden; /* Hide overflow from 3D canvas */
      min-height: 250px; /* Ensure header has enough height for canvas */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #three-canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0; /* Place behind text */
      opacity: 0.3; /* Make it subtle initially */
    }
    header h1, .subtitle, .utc-time {
      position: relative; /* Bring text above canvas */
      z-index: 1;
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
      /* Initial state for typing animation */
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      border-right: .15em solid orange; /* The caret */
      animation: typing 3s forwards, blink-caret .75s step-end infinite;
      animation-delay: 1.5s; /* Delay after header animation */
    }

    /* Typing animation */
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }

    /* Blinking caret animation */
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white; }
    }

    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    /* Scroll-triggered animation styles */
    .animated-section {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    .animated-section.is-visible {
      opacity: 1;
      transform: translateY(0);
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
    input, select {
      padding: 0.7em;
      margin-top: 0.3em;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
    .form-buttons {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
      position: relative; /* For loading spinner positioning */
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
    .thank-you-message {
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
      transition: transform 0.3s, box-shadow 0.3s; /* Added box-shadow transition */
      padding: 8px 12px; /* Added padding for better hover area */
      border-radius: 8px; /* Rounded corners for hover effect */
    }
    .contact-section a:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Added shadow on hover */
      background-color: rgba(0, 87, 146, 0.1); /* Subtle background on hover */
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
      animation: pulse 2s infinite; /* Pulsing animation */
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.03); opacity: 0.9; }
      100% { transform: scale(1); opacity: 1; }
    }

    footer {
      background: #00274d;
      color: white;
      text-align: center;
      padding: 1em;
      margin-top: 3rem;
      animation: fadeIn 1.5s ease-in;
    }

    /* Styles for Investment Plans Section */
    section#investment-plans {
      padding: 40px 20px;
      max-width: 900px;
      width: 100%;
      margin: 2rem auto;
      background: #fff;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    section#investment-plans h2 {
      text-align: center;
      font-size: 2.8rem;
      font-weight: 700;
      color: #003366;
      margin-bottom: 40px;
      letter-spacing: 1.2px;
      animation: fadeInDown 1s ease forwards;
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
      transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease; /* Added background transition */
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
      background: linear-gradient(to right, #00b4db, #0083b0); /* Highlight on hover */
      color: white; /* Ensure text color remains readable */
    }
    /* Specific hover colors for different schemes */
    ul.scheme-list li.scheme-item[data-plan="monthly"]:hover,
    ul.scheme-list li.scheme-item[data-plan="quarterly"]:hover,
    ul.scheme-list li.scheme-item[data-plan="yearly"]:hover {
      color: white; /* Change text to white on hover for light schemes */
    }

    ul.scheme-list li.scheme-item[data-plan="weekly"] { background: #b87333; }
    ul.scheme-list li.scheme-item[data-plan="monthly"] { background: #c0c0c0; color: #003366; box-shadow: 0 6px 12px rgba(192,192,192,0.5); }
    ul.scheme-list li.scheme-item[data-plan="quarterly"] { background: #ffd700; color: #003366; box-shadow: 0 6px 12px rgba(255,215,0,0.4); }
    ul.scheme-list li.scheme-item[data-plan="halfyearly"] { background: #daa520; }
    ul.scheme-list li.scheme-item[data-plan="yearly"] { background: #b9f2ff; color: #003366; box-shadow: 0 6px 12px rgba(185,242,255,0.4); }
    ul.scheme-list li.scheme-item[data-plan="twoyears"] { background: #0077be; }
    ul.scheme-list li.scheme-item[data-plan="threeyears"] { background: #4b0082; }
    ul.scheme-list li.scheme-item[data-plan="fiveyears"] { background: #6a5acd; }

    .scheme-item .icon {
      font-size: 1.4rem;
      user-select: none;
    }

    /* Modal styles for Investment Plans */
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

    /* Responsive adjustments for all sections */
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
      header {
        padding: 3rem 1rem 1.5rem 1rem;
      }
      header h1 {
        font-size: 2.2rem;
      }
      .subtitle {
        font-size: 1rem;
      }
    }

    /* Styles for mobile number and country code */
    .mobile-input-group {
      display: flex;
      gap: 10px; /* Space between select and input */
      margin-top: 0.3em;
    }
    .mobile-input-group select {
      flex-shrink: 0; /* Prevent select from shrinking */
      width: auto; /* Allow select to size based on content */
    }
    .mobile-input-group input {
      flex-grow: 1; /* Allow input to take remaining space */
    }

    /* Back to Top Button */
    #backToTopBtn {
      display: none; /* Hidden by default */
      position: fixed; /* Fixed position */
      bottom: 20px; /* Place at the bottom */
      right: 30px; /* Place at the right */
      z-index: 99; /* Ensure it's above other content */
      border: none; /* Remove borders */
      outline: none; /* Remove outline */
      background-color: #005792; /* Background color */
      color: white; /* Text color */
      cursor: pointer; /* Add a mouse pointer on hover */
      padding: 15px; /* Some padding */
      border-radius: 10px; /* Rounded corners */
      font-size: 18px; /* Increase font size */
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: background-color 0.3s, transform 0.3s;
    }

    #backToTopBtn:hover {
      background-color: #003366; /* Darker background on hover */
      transform: translateY(-3px); /* Slight lift on hover */
    }

    /* Form Submission Message Box */
    #formMessageBox {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      padding: 25px 35px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
      z-index: 1000;
      text-align: center;
      font-weight: bold;
      animation: fadeInScale 0.3s ease-out;
    }
    #formMessageBox.success {
      color: #28a745;
    }
    #formMessageBox.error {
      color: #dc3545;
    }
    #formMessageBox button {
      margin-top: 15px;
      padding: 8px 20px;
      background-color: #005792;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: normal;
    }
    #formMessageBox button:hover {
      background-color: #003366;
    }

    @keyframes fadeInScale {
      from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
      to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }

    /* Loading Spinner */
    .spinner {
      border: 4px solid rgba(255, 255, 255, 0.3);
      border-top: 4px solid #fff;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
      display: none; /* Hidden by default */
      position: absolute;
      right: 15px; /* Adjust position relative to button */
      top: 50%;
      transform: translateY(-50%);
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <header>
    <canvas id="three-canvas"></canvas>
    <div class="utc-time" id="utcTime"></div>
    <h1>APDPSOLUTIONS</h1>
    <div class="subtitle" id="header-subtitle">Unlock your financial potential with our investment strategies</div>
  </header>

  <div class="launch-info">🚀 This is our prelaunch website. Official launch coming soon.</div>

  <section class="form-section animated-section">
    <h2>Client Registration</h2>
    <form id="registrationForm">
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>

      <label for="country">Country</label>
      <input type="text" id="country" name="country" required>

      <label for="mobile">Mobile Number</label>
      <div class="mobile-input-group">
        <select id="countryCode" name="countryCode">
          <option value="+1">+1 (USA/Canada)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+91" selected>+91 (India)</option>
          <option value="+61">+61 (Australia)</option>
          <option value="+49">+49 (Germany)</option>
          <option value="+33">+33 (France)</option>
          <option value="+81">+81 (Japan)</option>
          <option value="+86">+86 (China)</option>
          <option value="+971">+971 (UAE)</option>
          <option value="+65">+65 (Singapore)</option>
          <option value="+27">+27 (South Africa)</option>
          </select>
        <input type="tel" id="mobile" name="mobile" required>
      </div>

      <div class="form-buttons">
        <button type="submit" id="submitButton">Register</button>
        <div class="spinner" id="formSpinner"></div>
      </div>
    </form>
    <div class="thank-you-message" id="thankYouMessage">Thank you for registering! We will contact you soon.</div>
  </section>

  <section id="investment-plans" aria-label="Investment Plans" class="animated-section">
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

  <section class="info-section animated-section">
    <h2>Your Data is Safe</h2>
    <p>At APDPSOLUTIONS, we take your privacy and data security seriously. All client information is encrypted and stored securely. We never share your personal data with third parties without your consent.</p>
  </section>

  <section class="info-section animated-section">
    <h2>About Us</h2>
    <p>APDPSOLUTIONS is a forward-thinking investment platform created to empower clients with the tools and opportunities to grow their wealth. Our platform combines secure technology, expert insight, and transparent practices to create a trusted investment environment. We are committed to helping you achieve your financial goals through strategic fundraising and personalized client service.</p>
  </section>

  <section class="info-section animated-section">
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

  <div id="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1">
    <div id="plan-details">
      <button id="close-btn" aria-label="Close details modal">×</button>
      <h3 id="modal-title">Plan Details</h3>
      <div id="modal-content">Select a plan to see details.</div>
    </div>
  </div>

  <section class="contact-section animated-section">
    <h2>Contact With Us</h2>
    <a href="https://www.instagram.com/apdpsolutions/" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />Instagram
    </a>
    <a href="https://t.me/apdpsolutions" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />Telegram
    </a>
    <a href="#" id="emailLink">
      <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />Email
    </a>
    <a href="https://www.youtube.com/@apdpsolutions-n6g" target="_blank">
      <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />YouTube
    </a>
  </section>

  <footer>
    © 2025 APDPSOLUTIONS. All Rights Reserved.
  </footer>

  <button onclick="topFunction()" id="backToTopBtn" title="Go to top">
    <i class="fas fa-arrow-up"></i>
  </button>

  <div id="formMessageBox">
    <p id="messageText"></p>
    <button onclick="hideMessageBox()">OK</button>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script>
    // Global variables for message box
    const formMessageBox = document.getElementById('formMessageBox');
    const messageText = document.getElementById('messageText');

    /**
     * Displays a message box with a given message and type (success/error).
     * @param {string} message - The message to display.
     * @param {string} type - 'success' or 'error'.
     */
    function showMessageBox(message, type) {
      messageText.textContent = message;
      formMessageBox.className = ''; // Clear existing classes
      formMessageBox.classList.add(type);
      formMessageBox.style.display = 'block';
    }

    /**
     * Hides the message box.
     */
    function hideMessageBox() {
      formMessageBox.style.display = 'none';
    }

    // Existing script for form submission and UTC time
    const form = document.getElementById("registrationForm");
    const submitButton = document.querySelector("#registrationForm button[type='submit']");
    const formSpinner = document.getElementById("formSpinner");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Show spinner and disable button
      submitButton.disabled = true;
      formSpinner.style.display = 'block';

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const country = document.getElementById("country").value;
      const countryCode = document.getElementById("countryCode").value;
      const mobile = document.getElementById("mobile").value;

      const fullMobile = countryCode + mobile;

      try {
        const response = await fetch("https://formsubmit.co/ajax/apdpsolutions@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, country, mobile: fullMobile })
        });

        if (response.ok) {
          showMessageBox("Thank you for registering! We will contact you soon.", "success");
          form.reset();
        } else {
          showMessageBox("Failed to send your registration. Please try again.", "error");
          console.error("Form submission failed:", response.statusText);
        }
      } catch (error) {
        showMessageBox("An error occurred during submission. Please check your internet connection.", "error");
        console.error("Something went wrong:", error);
      } finally {
        // Hide spinner and enable button
        submitButton.disabled = false;
        formSpinner.style.display = 'none';
      }
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

    // --- Three.js 3D Animation for Header ---
    let scene, camera, renderer, sphere, points; // Declare points globally too

    // Variables for blinking effect
    let blinkOpacity = 0.3; // Starting opacity
    let blinkDirection = 1; // 1 for increasing, -1 for decreasing
    const blinkSpeed = 0.005; // How fast it blinks
    const minOpacity = 0.1;
    const maxOpacity = 0.5;

    function initThreeJS() {
      const canvas = document.getElementById('three-canvas');
      if (!canvas) {
        console.error("Three.js canvas not found!");
        return;
      }

      // Scene setup
      scene = new THREE.Scene();

      // Camera setup
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / canvas.clientHeight, 0.1, 1000);
      camera.position.z = 2;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true }); // alpha: true for transparent background
      renderer.setSize(window.innerWidth, canvas.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Create a network sphere (abstract blockchain/data representation)
      const geometry = new THREE.IcosahedronGeometry(1, 1); // Radius 1, detail 1
      const material = new THREE.LineBasicMaterial({ color: 0x88ccff, transparent: true, opacity: blinkOpacity }); // Light blue lines
      const edges = new THREE.EdgesGeometry(geometry);
      sphere = new THREE.LineSegments(edges, material);
      scene.add(sphere);

      // Add some subtle points for a 'star' effect
      const pointsMaterial = new THREE.PointsMaterial({
        color: 0xb9f2ff, // Light cyan points
        size: 0.05,
        transparent: true,
        opacity: blinkOpacity
      });
      points = new THREE.Points(geometry, pointsMaterial);
      scene.add(points);

      // Animation loop
      const animateThreeJS = () => {
        requestAnimationFrame(animateThreeJS);

        // Update blinking opacity
        blinkOpacity += blinkDirection * blinkSpeed;
        if (blinkOpacity > maxOpacity || blinkOpacity < minOpacity) {
          blinkDirection *= -1; // Reverse direction
          blinkOpacity = Math.max(minOpacity, Math.min(maxOpacity, blinkOpacity)); // Clamp value
        }

        // Apply blinking opacity to sphere and points
        if (sphere && sphere.material) {
          sphere.material.opacity = blinkOpacity;
        }
        if (points && points.material) {
          points.material.opacity = blinkOpacity;
        }

        // Rotate the sphere and points
        if (sphere) {
          sphere.rotation.x += 0.0005;
          sphere.rotation.y += 0.001;
        }
        if (points) {
          points.rotation.x += 0.0005;
          points.rotation.y += 0.001;
        }

        renderer.render(scene, camera);
      };

      animateThreeJS();

      // Handle window resize
      window.addEventListener('resize', () => {
        const newWidth = window.innerWidth;
        const newHeight = canvas.clientHeight; // Keep height based on CSS
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      });
    }

    // --- Scroll-triggered Animations ---
    const animatedSections = document.querySelectorAll('.animated-section');

    const observerOptions = {
      root: null, /* viewport */
      rootMargin: '0px',
      threshold: 0.2 /* 20% of element visible to trigger */
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    // Observe each section
    animatedSections.forEach(section => {
      observer.observe(section);
    });

    // --- Back to Top Button Logic ---
    const backToTopBtn = document.getElementById("backToTopBtn");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // --- Copy Email to Clipboard ---
    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
      emailLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default mailto: action
        const emailAddress = "apdpsolutions@gmail.com"; // Your email address
        
        // Use document.execCommand for broader compatibility in iframes
        const tempInput = document.createElement('input');
        tempInput.value = emailAddress;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        // Provide visual feedback
        const originalText = emailLink.innerHTML;
        emailLink.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          emailLink.innerHTML = originalText;
        }, 2000);
      });
    }

    // Initialize Three.js and other functions when the window loads
    window.onload = function() {
      initThreeJS();
      updateUTCTime();
      // Start typing animation after a slight delay to ensure CSS is loaded
      const subtitleElement = document.getElementById('header-subtitle');
      if (subtitleElement) {
        subtitleElement.style.width = '0'; /* Reset width to start animation */
        subtitleElement.style.animation = 'typing 3s forwards, blink-caret .75s step-end infinite';
        subtitleElement.style.animationDelay = '1.5s';
      }
    };
  </script>
</body>
</html>
