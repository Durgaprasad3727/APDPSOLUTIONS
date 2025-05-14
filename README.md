<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>APDPSOLUTIONS - Unlock Your Financial Potential</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
  <style>
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
    #utc-time {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 1rem;
      font-weight: 300;
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
  </style>
</head>
<body>
  <header>
    <div id="utc-time"></div>
    <h1>APDPSOLUTIONS</h1>
    <div class="subtitle">Unlock your financial potential with our investment strategies</div>
  </header>

  <div class="launch-info">
    🚀 This is our prelaunch website. Official site launching soon.
  </div>

  <section class="form-section">
    <h2>Client Registration</h2>
    <form action="https://formsubmit.co/apdpsolutions@gmail.com" method="POST">
      <input type="hidden" name="_next" value="https://apdpsolutions.com/thank-you.html">
      <input type="hidden" name="_captcha" value="false">

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
    &copy; 2025 APDPSOLUTIONS. All Rights Reserved.
  </footer>

  <script>
    function updateUTCTime() {
      const now = new Date();
      document.getElementById("utc-time").textContent = `UTC Time: ${now.toUTCString()}`;
    }
    setInterval(updateUTCTime, 1000);
    updateUTCTime();
  </script>
</body>
</html>
