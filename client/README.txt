<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>APDPSOLUTIONS - Unlock Your Financial Potential</title>
    <!-- Google Fonts: Poppins for main text -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Font Awesome for icons -->
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

        /* Navigation Bar */
        nav {
            background: #00274d; /* Dark blue for nav */
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 100; /* Ensure nav is above other content */
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        nav .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: #00b4db; /* Light blue for logo */
            text-decoration: none;
        }
        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        nav ul li {
            margin-left: 2rem;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease, transform 0.3s ease;
            position: relative;
            padding-bottom: 5px; /* Space for underline effect */
        }
        nav ul li a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background: #00b4db;
            left: 0;
            bottom: 0;
            transition: width 0.3s ease;
        }
        nav ul li a:hover::after {
            width: 100%;
        }
        nav ul li a:hover {
            color: #00b4db;
            transform: translateY(-2px);
        }

        /* Hamburger Menu */
        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 10px;
            z-index: 101; /* Above nav links when open */
        }
        .menu-toggle .bar {
            height: 3px;
            width: 25px;
            background-color: white;
            margin: 4px 0;
            transition: 0.4s;
        }
        .menu-toggle.open .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        .menu-toggle.open .bar:nth-child(2) {
            opacity: 0;
        }
        .menu-toggle.open .bar:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }

        /* Header Section */
        header {
            background: linear-gradient(135deg, #00274d, #005792);
            color: white;
            text-align: center;
            padding: 6rem 1rem 4rem 1rem; /* Increased padding */
            position: relative;
            animation: slideInFromTop 1s ease-in-out;
            overflow: hidden; /* Hide overflow from 3D canvas */
            min-height: 400px; /* Ensure header has enough height for canvas */
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
            font-size: 3.5rem; /* Larger font size */
            margin: 0;
            animation: scaleIn 1.2s ease-in-out;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
        @keyframes scaleIn {
            0% { transform: scale(0); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
        .subtitle {
            font-size: 1.5rem; /* Larger subtitle */
            margin-top: 0.8rem;
            font-weight: 300;
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

        /* General Section Styling */
        section {
            padding: 40px 20px;
            max-width: 900px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        section h2 {
            text-align: center;
            font-size: 2.2rem;
            color: #005792;
            margin-bottom: 30px;
            position: relative;
            padding-bottom: 10px;
        }
        section h2::after {
            content: '';
            position: absolute;
            width: 80px;
            height: 3px;
            background: #00b4db;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            border-radius: 5px;
        }
        section p {
            line-height: 1.7;
            text-align: justify;
        }

        /* Form Sections (Login/Signup) */
        .form-section {
            max-width: 500px;
        }
        label {
            margin-top: 1em;
            font-weight: 500;
            color: #003366;
        }
        input, select, textarea { /* Added textarea for future use */
            padding: 0.7em;
            margin-top: 0.3em;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
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
            font-size: 1rem;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        button:hover {
            transform: scale(1.05);
            background: linear-gradient(to right, #0083b0, #00b4db);
        }
        button:disabled {
            background: #cccccc;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        .mobile-input-group {
            display: flex;
            gap: 10px;
            margin-top: 0.3em;
        }
        .mobile-input-group select {
            flex-shrink: 0;
            width: auto;
        }
        .mobile-input-group input {
            flex-grow: 1;
        }

        /* Investment Plans Section */
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
            transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
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
            background: linear-gradient(to right, #00b4db, #0083b0);
            color: white;
        }
        ul.scheme-list li.scheme-item[data-plan="weekly"] { background: #b87333; } /* Bronze */
        ul.scheme-list li.scheme-item[data-plan="monthly"] { background: #c0c0c0; color: #003366; box-shadow: 0 6px 12px rgba(192,192,192,0.5); } /* Silver */
        ul.scheme-list li.scheme-item[data-plan="quarterly"] { background: #ffd700; color: #003366; box-shadow: 0 6px 12px rgba(255,215,0,0.4); } /* Gold */
        ul.scheme-list li.scheme-item[data-plan="halfyearly"] { background: #daa520; } /* Gold Plus */
        ul.scheme-list li.scheme-item[data-plan="yearly"] { background: #b9f2ff; color: #003366; box-shadow: 0 6px 12px rgba(185,242,255,0.4); } /* Diamond */
        ul.scheme-list li.scheme-item[data-plan="twoyears"] { background: #0077be; } /* Diamond Plus */
        ul.scheme-list li.scheme-item[data-plan="threeyears"] { background: #4b0082; } /* Platinum */
        ul.scheme-list li.scheme-item[data-plan="fiveyears"] { background: #6a5acd; } /* Platinum Plus */

        .scheme-item .icon {
            font-size: 1.4rem;
            user-select: none;
        }

        /* Modal styles for Investment Plans */
        #modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.6); /* Darker overlay */
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
            box-shadow: 0 10px 24px rgba(0,0,0,0.3); /* Stronger shadow */
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

        /* Features Section */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        .feature-item {
            background: #f8f8f8;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .feature-item .icon {
            font-size: 2.5rem;
            color: #00b4db;
            margin-bottom: 15px;
        }
        .feature-item h3 {
            font-size: 1.3rem;
            color: #003366;
            margin-top: 0;
            margin-bottom: 10px;
        }
        .feature-item p {
            font-size: 0.95rem;
            color: #555;
            line-height: 1.6;
        }

        /* How It Works Section */
        .steps-container {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-top: 30px;
        }
        .step-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            background: #f8f8f8;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
        }
        .step-item:hover {
            transform: translateX(5px);
        }
        .step-item .step-number {
            font-size: 2rem;
            font-weight: 700;
            color: #00b4db;
            flex-shrink: 0;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 2px solid #00b4db;
            border-radius: 50%;
        }
        .step-item .step-content h3 {
            margin-top: 0;
            color: #003366;
            font-size: 1.2rem;
        }
        .step-item .step-content p {
            margin-bottom: 0;
            font-size: 0.95rem;
        }

        /* Testimonials Section */
        .testimonials-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            margin-top: 30px;
        }
        .testimonial-card {
            background: #f8f8f8;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            position: relative;
            font-style: italic;
            color: #555;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.12);
        }
        .testimonial-card::before {
            content: '“';
            font-size: 4rem;
            color: #00b4db;
            position: absolute;
            top: 10px;
            left: 15px;
            opacity: 0.3;
            line-height: 1;
        }
        .testimonial-card p {
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 0.95rem;
            text-align: left;
        }
        .testimonial-card .author {
            font-weight: 600;
            color: #003366;
            text-align: right;
            display: block;
            margin-top: 10px;
            font-style: normal;
        }

        /* FAQ Section */
        .faq-container {
            margin-top: 30px;
        }
        .faq-item {
            background: #f8f8f8;
            border-radius: 10px;
            margin-bottom: 15px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .faq-question {
            padding: 18px 25px;
            background: #e9f5f9;
            color: #003366;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: background 0.3s ease;
        }
        .faq-question:hover {
            background: #d4edf7;
        }
        .faq-question .toggle-icon {
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }
        .faq-answer {
            padding: 0 25px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-out, padding 0.4s ease-out;
            color: #555;
            line-height: 1.6;
        }
        .faq-item.active .faq-question .toggle-icon {
            transform: rotate(180deg);
        }
        .faq-item.active .faq-answer {
            max-height: 200px; /* Adjust as needed for content length */
            padding: 15px 25px 25px;
        }

        /* Contact Section */
        .contact-section {
            text-align: center;
            padding: 2rem;
            background: linear-gradient(to right, #e3f2fd, #cce7ff);
            margin: 2rem auto;
            max-width: 800px;
            border-radius: 15px;
        }
        .contact-section h2 {
            margin-bottom: 20px;
        }
        .contact-section a {
            display: inline-block;
            margin: 0.5rem 1rem;
            color: #005792;
            text-decoration: none;
            font-weight: 500;
            transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
            padding: 8px 12px;
            border-radius: 8px;
        }
        .contact-section a:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            background-color: rgba(0, 87, 146, 0.1);
        }
        .contact-section img {
            width: 24px;
            height: 24px;
            vertical-align: middle;
            margin-right: 8px;
        }

        /* Footer */
        footer {
            background: #00274d;
            color: white;
            text-align: center;
            padding: 1.5em;
            margin-top: 3rem;
            animation: fadeIn 1.5s ease-in;
            font-size: 0.9rem;
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        /* Back to Top Button */
        #backToTopBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 99;
            border: none;
            outline: none;
            background-color: #005792;
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 10px;
            font-size: 18px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            transition: background-color 0.3s, transform 0.3s;
        }
        #backToTopBtn:hover {
            background-color: #003366;
            transform: translateY(-3px);
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
            display: none;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Sections to be toggled by login status */
        .logged-in-only, .logged-out-only {
            display: none;
        }

        /* Dashboard Section */
        #dashboard {
            padding: 40px 20px;
            max-width: 900px;
            margin: 2rem auto;
            background: #fff;
            border-radius: 15px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            text-align: center;
        }
        #dashboard h2 {
            color: #005792;
            margin-bottom: 20px;
        }
        #dashboard p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 25px;
        }
        #dashboard .dashboard-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .dashboard-feature-card {
            background: #e9f5f9;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .dashboard-feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .dashboard-feature-card .icon {
            font-size: 2rem;
            color: #00b4db;
            margin-bottom: 10px;
        }
        .dashboard-feature-card h3 {
            font-size: 1.1rem;
            color: #003366;
            margin-top: 0;
            margin-bottom: 10px;
        }
        .dashboard-feature-card p {
            font-size: 0.9rem;
            color: #666;
            line-height: 1.5;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                position: absolute;
                top: 60px; /* Below nav bar */
                left: 0;
                width: 100%;
                background: #00274d;
                border-top: 1px solid rgba(255,255,255,0.1);
                padding: 1rem 0;
                display: none; /* Hidden by default */
                transition: transform 0.3s ease-out;
                transform: translateY(-100%);
            }
            nav ul.open {
                display: flex;
                transform: translateY(0);
            }
            nav ul li {
                margin: 0.5rem 0;
                text-align: center;
            }
            nav ul li a {
                display: block;
                padding: 0.8rem 0;
            }
            .menu-toggle {
                display: flex;
            }
            header h1 {
                font-size: 2.8rem;
            }
            .subtitle {
                font-size: 1.2rem;
            }
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
            .features-grid, .testimonials-container, .dashboard-features {
                grid-template-columns: 1fr; /* Stack columns on small screens */
            }
            .step-item {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .step-item .step-number {
                margin-bottom: 10px;
            }
        }

        @media (max-width: 480px) {
            header {
                padding: 4rem 1rem 2rem 1rem;
                min-height: 300px;
            }
            header h1 {
                font-size: 2.2rem;
            }
            .subtitle {
                font-size: 1rem;
            }
            section {
                padding: 30px 15px;
                margin: 1.5rem auto;
            }
            section h2 {
                font-size: 1.8rem;
            }
            .contact-section a {
                margin: 0.5rem 0.5rem;
                padding: 6px 10px;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation Bar -->
    <nav>
        <a href="#home" class="logo">APDPSOLUTIONS</a>
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav-list" id="navList">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#investment-plans">Plans</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="logged-out-only"><a href="#login">Login</a></li>
            <li class="logged-out-only"><a href="#signup">Signup</a></li>
            <li class="logged-in-only"><a href="#dashboard">Dashboard</a></li>
            <li class="logged-in-only"><a href="#" id="logoutButton">Logout</a></li>
        </ul>
    </nav>

    <!-- Header Section -->
    <header id="home">
        <canvas id="three-canvas"></canvas>
        <div class="utc-time" id="utcTime"></div>
        <h1>APDPSOLUTIONS</h1>
        <div class="subtitle" id="header-subtitle">Unlock your financial potential with our strategic investments</div>
    </header>

    <!-- Features Section -->
    <section id="features" class="animated-section">
        <h2>Our Key Features</h2>
        <div class="features-grid">
            <div class="feature-item">
                <div class="icon"><i class="fas fa-shield-alt"></i></div>
                <h3>Secure & Transparent</h3>
                <p>Leveraging blockchain technology for unparalleled security and complete transparency in all transactions.</p>
            </div>
            <div class="feature-item">
                <div class="icon"><i class="fas fa-chart-line"></i></div>
                <h3>Consistent Returns</h3>
                <p>Benefit from our expertly managed portfolios designed to deliver stable and consistent returns over time.</p>
            </div>
            <div class="feature-item">
                <div class="icon"><i class="fas fa-headset"></i></div>
                <h3>Dedicated Support</h3>
                <p>Our team of financial experts is always ready to provide personalized support and guidance.</p>
            </div>
            <div class="feature-item">
                <div class="icon"><i class="fas fa-dollar-sign"></i></div>
                <h3>Flexible Plans</h3>
                <p>Choose from a variety of investment plans tailored to meet diverse financial goals and risk appetites.</p>
            </div>
            <div class="feature-item">
                <div class="icon"><i class="fas fa-mobile-alt"></i></div>
                <h3>Real-time Monitoring</h3>
                <p>Access advanced tools to monitor your investments and track performance in real-time, anytime, anywhere.</p>
            </div>
            <div class="feature-item">
                <div class="icon"><i class="fas fa-handshake"></i></div>
                <h3>Growth Partnership</h3>
                <p>We align our success with yours, fostering a partnership where we grow and achieve financial milestones together.</p>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="animated-section">
        <h2>How It Works</h2>
        <div class="steps-container">
            <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3>Register & Verify</h3>
                    <p>Sign up easily on our platform and complete a quick verification process to secure your account.</p>
                </div>
            </div>
            <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3>Choose Your Plan</h3>
                    <p>Explore our diverse range of investment plans and select the one that best fits your financial aspirations.</p>
                </div>
            </div>
            <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3>Fund Your Account</h3>
                    <p>Securely deposit funds into your investment account using our transparent USDT (TRC20) crypto payment system.</p>
                </div>
            </div>
            <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h3>Monitor & Grow</h3>
                    <p>Watch your investments grow with real-time monitoring tools and enjoy consistent returns.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Login Section -->
    <section class="form-section animated-section logged-out-only" id="login">
        <h2>Client Login</h2>
        <form id="loginForm">
            <label for="loginEmail">Email</label>
            <input type="email" id="loginEmail" name="email" required value="user@example.com">

            <label for="loginPassword">Password</label>
            <input type="password" id="loginPassword" name="password" required value="password123">

            <div class="form-buttons">
                <button type="submit" id="loginButton">Login</button>
                <div class="spinner" id="loginSpinner"></div>
            </div>
            <p style="text-align: center; margin-top: 1rem;">Don't have an account? <a href="#signup">Sign Up</a></p>
        </form>
    </section>

    <!-- Signup Section (repurposed from Client Registration) -->
    <section class="form-section animated-section logged-out-only" id="signup">
        <h2>Client Signup</h2>
        <form id="signupForm">
            <label for="signupName">Full Name</label>
            <input type="text" id="signupName" name="name" required>

            <label for="signupEmail">Email</label>
            <input type="email" id="signupEmail" name="email" required>

            <label for="signupCountry">Country</label>
            <input type="text" id="signupCountry" name="country" required>

            <label for="signupMobile">Mobile Number</label>
            <div class="mobile-input-group">
                <select id="signupCountryCode" name="countryCode">
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
                <input type="tel" id="signupMobile" name="mobile" required>
            </div>

            <label for="signupPassword">Password</label>
            <input type="password" id="signupPassword" name="password" required>

            <div class="form-buttons">
                <button type="submit" id="signupButton">Signup</button>
                <div class="spinner" id="signupSpinner"></div>
            </div>
            <p style="text-align: center; margin-top: 1rem;">Already have an account? <a href="#login">Login</a></p>
        </form>
    </section>

    <!-- Dashboard Section -->
    <section id="dashboard" class="animated-section logged-in-only">
        <h2>Welcome to Your Dashboard!</h2>
        <p>Here you can view your investment summary and manage your portfolio.</p>
        <div class="dashboard-features">
            <div class="dashboard-feature-card">
                <div class="icon"><i class="fas fa-wallet"></i></div>
                <h3>My Balance</h3>
                <p>View your current account balance and total invested capital.</p>
            </div>
            <div class="dashboard-feature-card">
                <div class="icon"><i class="fas fa-history"></i></div>
                <h3>Transaction History</h3>
                <p>Track all your deposits, withdrawals, and profit distributions.</p>
            </div>
            <div class="dashboard-feature-card">
                <div class="icon"><i class="fas fa-chart-area"></i></div>
                <h3>Performance Analytics</h3>
                <p>Analyze the performance of your active investment plans.</p>
            </div>
            <div class="dashboard-feature-card">
                <div class="icon"><i class="fas fa-exchange-alt"></i></div>
                <h3>Make a New Investment</h3>
                <p>Easily initiate new investments or upgrade existing plans.</p>
            </div>
        </div>
        <div class="form-buttons" style="margin-top: 30px;">
            <button onclick="showMessageBox('This feature is coming soon!', 'success')">View My Investments</button>
        </div>
    </section>

    <!-- Investment Plans Section -->
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

    <!-- Testimonials Section -->
    <section id="testimonials" class="animated-section">
        <h2>What Our Clients Say</h2>
        <div class="testimonials-container">
            <div class="testimonial-card">
                <p>"APDPSOLUTIONS has transformed my financial outlook. Their transparent process and consistent returns are truly impressive. Highly recommended!"</p>
                <span class="author">- Sarah L., Investor</span>
            </div>
            <div class="testimonial-card">
                <p>"The dedicated support team at APDPSOLUTIONS is fantastic. They answered all my questions and made the investment process incredibly smooth."</p>
                <span class="author">- John D., Entrepreneur</span>
            </div>
            <div class="testimonial-card">
                <p>"I've tried several platforms, but APDPSOLUTIONS stands out with its security and real-time monitoring. My capital feels truly safe here."</p>
                <span class="author">- Emily R., Freelancer</span>
            </div>
        </div>
    </section>

    <!-- About Us Section -->
    <section class="info-section animated-section">
        <h2>About Us</h2>
        <p>APDPSOLUTIONS is a forward-thinking investment platform created to empower clients with the tools and opportunities to grow their wealth. Our platform combines secure technology, expert insight, and transparent practices to create a trusted investment environment. We are committed to helping you achieve your financial goals through strategic fundraising and personalized client service. We believe in building long-term relationships based on trust, integrity, and mutual success.</p>
    </section>

    <!-- Why Fund Us Section -->
    <section class="info-section animated-section">
        <h2>Why Choose APDPSOLUTIONS?</h2>
        <ul>
            <li>We offer a unique approach to secure, blockchain-based fundraising.</li>
            <li>Transparent and fast USDT (TRC20) crypto payments.</li>
            <li>Dedicated support and regular updates for investors.</li>
            <li>We align our success with yours — we grow together.</li>
            <li>Advanced tools to monitor and manage your investments in real-time.</li>
            <li>Security of capital is our top priority, ensuring peace of mind.</li>
            <li>Enjoy consistent returns and sustainable growth.</li>
            <li>Backed by strong past performance metrics and a proven track record.</li>
            <li>Unlock passive income potential through our optimized investment strategies.</li>
        </ul>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="animated-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-container">
            <div class="faq-item">
                <div class="faq-question">
                    What is the minimum investment amount?
                    <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="faq-answer">
                    <p>The minimum investment varies by plan. For our Weekly (Bronze) plan, the minimum investment is $100. Please refer to the specific plan details for more information.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    How are my funds secured?
                    <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="faq-answer">
                    <p>We prioritize your security. All client information is encrypted, and funds are managed with blockchain technology for enhanced security and transparency. We employ industry-leading security protocols to protect your assets.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    When can I withdraw my capital and profit?
                    <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="faq-answer">
                    <p>You can withdraw both your capital and accumulated profit on the day following the expiration of your chosen investment plan. Detailed withdrawal procedures are available in your client dashboard.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    Do you offer bonuses for upgrading plans?
                    <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="faq-answer">
                    <p>Yes, we offer attractive bonuses for upgrading to higher-tier plans. For example, upgrading to the Silver plan gives you a $5 bonus, Gold plan a $10 bonus, and so on. Check each plan's details for specific bonus amounts.</p>
                </div>
            </div>
            <div class="faq-item">
                <div class="faq-question">
                    What payment methods do you accept?
                    <span class="toggle-icon"><i class="fas fa-chevron-down"></i></span>
                </div>
                <div class="faq-answer">
                    <p>We primarily accept USDT (TRC20) crypto payments for fast, secure, and transparent transactions. This ensures efficiency and reliability for our global clientele.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section animated-section" id="contact">
        <h2>Connect With Us</h2>
        <a href="https://www.instagram.com/apdpsolutions/" target="_blank" aria-label="Visit us on Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />Instagram
        </a>
        <a href="https://t.me/apdpsolutions" target="_blank" aria-label="Join our Telegram channel">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />Telegram
        </a>
        <a href="mailto:apdpsolutions@gmail.com" id="emailLink" aria-label="Send us an email">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />Email
        </a>
        <a href="http://youtube.com/0" target="_blank" aria-label="Visit our YouTube channel">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" />YouTube
        </a>
    </section>

    <!-- Footer -->
    <footer>
        © 2025 APDPSOLUTIONS. All Rights Reserved.
    </footer>

    <!-- Back to Top Button -->
    <button onclick="topFunction()" id="backToTopBtn" title="Go to top" aria-label="Back to top">
        <i class="fas fa-arrow-up"></i>
    </button>

    <!-- Form Submission Message Box -->
    <div id="formMessageBox" role="alert" aria-live="assertive">
        <p id="messageText"></p>
        <button onclick="hideMessageBox()">OK</button>
    </div>

    <!-- Three.js Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // --- Global Message Box Functions ---
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
            // Focus the OK button for accessibility
            formMessageBox.querySelector('button').focus();
        }

        /**
         * Hides the message box.
         */
        function hideMessageBox() {
            formMessageBox.style.display = 'none';
        }

        // --- Header Animations & UTC Time ---
        function updateUTCTime() {
            const now = new Date();
            document.getElementById("utcTime").textContent = "UTC Time: " + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' });
        }
        setInterval(updateUTCTime, 1000);
        updateUTCTime(); // Initial call

        // --- Three.js Background Animation ---
        let scene, camera, renderer, particles, particleMaterial;
        let mouseX = 0, mouseY = 0;
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        function initThreeJS() {
            const container = document.getElementById('three-canvas');
            if (!container) return; // Exit if canvas element is not found

            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ canvas: container, alpha: true }); // alpha: true for transparent background
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // Particles
            const particleCount = 1000;
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);

            const color = new THREE.Color();

            for (let i = 0; i < particleCount; i++) {
                // Position particles randomly in a cube
                positions[i * 3] = (Math.random() * 2 - 1) * 500; // x
                positions[i * 3 + 1] = (Math.random() * 2 - 1) * 500; // y
                positions[i * 3 + 2] = (Math.random() * 2 - 1) * 500; // z

                // Assign random colors, leaning towards blue/white
                color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.5); // Blueish hues
                colors[i * 3] = color.r;
                colors[i * 3 + 1] = color.g;
                colors[i * 3 + 2] = color.b;
            }

            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            particleMaterial = new THREE.PointsMaterial({
                size: 2,
                vertexColors: true,
                blending: THREE.AdditiveBlending,
                transparent: true,
                opacity: 0.8
            });

            particles = new THREE.Points(geometry, particleMaterial);
            scene.add(particles);

            camera.position.z = 200;

            // Event listeners for mouse interaction
            document.addEventListener('mousemove', onDocumentMouseMove);
            window.addEventListener('resize', onWindowResize);
        }

        function onDocumentMouseMove(event) {
            mouseX = (event.clientX - windowHalfX) * 0.1;
            mouseY = (event.clientY - windowHalfY) * 0.1;
        }

        function onWindowResize() {
            const container = document.getElementById('three-canvas');
            if (!container) return;

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }

        function animateThreeJS() {
            requestAnimationFrame(animateThreeJS);

            // Move camera based on mouse position
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            // Rotate particles slowly
            particles.rotation.x += 0.0005;
            particles.rotation.y += 0.001;

            renderer.render(scene, camera);
        }

        // --- Login/Logout & UI Management ---
        const loggedInOnlySections = document.querySelectorAll('.logged-in-only');
        const loggedOutOnlySections = document.querySelectorAll('.logged-out-only');
        const navList = document.getElementById('navList');
        const logoutButton = document.getElementById('logoutButton');

        /**
         * Updates the UI based on the login status.
         * Shows/hides sections and navigation links accordingly.
         */
        function updateLoginUI() {
            const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

            if (isLoggedIn) {
                loggedInOnlySections.forEach(section => section.style.display = 'block');
                loggedOutOnlySections.forEach(section => section.style.display = 'none');
                // Ensure dashboard is visible if logged in
                document.getElementById('dashboard').classList.add('is-visible');
            } else {
                loggedInOnlySections.forEach(section => section.style.display = 'none');
                loggedOutOnlySections.forEach(section => section.style.display = 'block');
                // Hide dashboard if logged out
                document.getElementById('dashboard').classList.remove('is-visible');
            }
        }

        /**
         * Simulates user login.
         */
        function loginUser() {
            sessionStorage.setItem('isLoggedIn', 'true');
            updateLoginUI();
            // Scroll to dashboard after login
            document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
        }

        /**
         * Simulates user logout.
         */
        function logoutUser() {
            sessionStorage.removeItem('isLoggedIn');
            updateLoginUI();
            // Scroll to home after logout
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
            showMessageBox("You have been logged out.", "success");
        }

        // Attach logout event listener
        if (logoutButton) {
            logoutButton.addEventListener('click', (e) => {
                e.preventDefault();
                logoutUser();
            });
        }

        // --- Signup Form Submission ---
        const signupForm = document.getElementById("signupForm");
        const signupButton = document.getElementById("signupButton");
        const signupSpinner = document.getElementById("signupSpinner");

        if (signupForm) {
            signupForm.addEventListener("submit", async function (e) {
                e.preventDefault();

                signupButton.disabled = true;
                signupSpinner.style.display = 'block';

                const name = document.getElementById("signupName").value;
                const email = document.getElementById("signupEmail").value;
                const country = document.getElementById("signupCountry").value;
                const countryCode = document.getElementById("signupCountryCode").value;
                const mobile = document.getElementById("signupMobile").value;
                const password = document.getElementById("signupPassword").value; // For simulation

                const fullMobile = countryCode + mobile;

                try {
                    // Simulate network delay for signup
                    await new Promise(resolve => setTimeout(resolve, 2000));

                    // Simulate success
                    const success = Math.random() > 0.1; // 90% chance of success

                    if (success) {
                        showMessageBox("Signup successful! You are now logged in.", "success");
                        signupForm.reset();
                        loginUser(); // Log in the user after successful signup
                    } else {
                        showMessageBox("Signup failed. Please try again.", "error");
                        console.error("Signup simulated failed.");
                    }
                } catch (error) {
                    showMessageBox("An error occurred during signup. Please check your internet connection.", "error");
                    console.error("Something went wrong during signup:", error);
                } finally {
                    signupButton.disabled = false;
                    signupSpinner.style.display = 'none';
                }
            });
        }

        // --- Login Form Submission ---
        const loginForm = document.getElementById("loginForm");
        const loginButton = document.getElementById("loginButton");
        const loginSpinner = document.getElementById("loginSpinner");

        if (loginForm) {
            loginForm.addEventListener("submit", async function (e) {
                e.preventDefault();

                loginButton.disabled = true;
                loginSpinner.style.display = 'block';

                const email = document.getElementById("loginEmail").value;
                const password = document.getElementById("loginPassword").value;

                try {
                    // Simulate network delay for login
                    await new Promise(resolve => setTimeout(resolve, 1500));

                    // Simulate login success based on dummy credentials
                    if (email === "user@example.com" && password === "password123") {
                        showMessageBox("Login successful! Welcome back.", "success");
                        loginForm.reset();
                        loginUser(); // Log in the user
                    } else {
                        showMessageBox("Invalid email or password.", "error");
                    }
                } catch (error) {
                    showMessageBox("An error occurred during login. Please check your internet connection.", "error");
                    console.error("Something went wrong during login:", error);
                } finally {
                    loginButton.disabled = false;
                    loginSpinner.style.display = 'none';
                }
            });
        }

        // --- Investment Plans Modal Logic ---
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
         * Hides the plan details modal.
         */
        function hidePlanDetails() {
            modalOverlay.classList.remove('show');
            // Return focus to the element that opened the modal, if possible
            const activeElement = document.activeElement;
            if (activeElement && activeElement.classList.contains('scheme-item')) {
                activeElement.focus();
            }
        }

        function setupInvestmentPlanModal() {
            if (schemeList) {
                schemeList.addEventListener('click', (event) => {
                    const targetItem = event.target.closest('.scheme-item');
                    if (targetItem) {
                        const planKey = targetItem.dataset.plan;
                        showPlanDetails(planKey);
                    }
                });

                // Handle keyboard navigation for scheme items
                schemeList.addEventListener('keydown', (event) => {
                    const currentFocus = document.activeElement;
                    const isSchemeItem = currentFocus && currentFocus.classList.contains('scheme-item');
                    const schemeItems = Array.from(schemeList.querySelectorAll('.scheme-item'));
                    const currentIndex = schemeItems.indexOf(currentFocus);

                    if (event.key === 'Enter' && isSchemeItem) {
                        const planKey = currentFocus.dataset.plan;
                        showPlanDetails(planKey);
                    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
                        event.preventDefault();
                        const nextIndex = (currentIndex + 1) % schemeItems.length;
                        schemeItems[nextIndex].focus();
                    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
                        event.preventDefault();
                        const prevIndex = (currentIndex - 1 + schemeItems.length) % schemeItems.length;
                        schemeItems[prevIndex].focus();
                    }
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', hidePlanDetails);
            }

            if (modalOverlay) {
                // Close modal on Escape key
                modalOverlay.addEventListener('keydown', (event) => {
                    if (event.key === 'Escape') {
                        hidePlanDetails();
                    }
                });
            }
        }

        // --- Scroll-triggered Animations ---
        function setupScrollAnimations() {
            const animatedSections = document.querySelectorAll('.animated-section');

            const observerOptions = {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.1 // 10% of element visible to trigger
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing once visible
                    }
                });
            }, observerOptions);

            animatedSections.forEach(section => {
                observer.observe(section);
            });
        }

        // --- Back to Top Button ---
        const backToTopBtn = document.getElementById("backToTopBtn");

        function setupBackToTop() {
            // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() { scrollFunction() };
        }

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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

        // --- Mobile Menu Toggle ---
        function setupMobileMenu() {
            const mobileMenu = document.getElementById('mobile-menu');
            const navList = document.getElementById('navList');

            if (mobileMenu && navList) {
                mobileMenu.addEventListener('click', () => {
                    mobileMenu.classList.toggle('open');
                    navList.classList.toggle('open');
                });

                // Close menu when a nav link is clicked (for smooth scrolling)
                navList.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('open');
                        navList.classList.remove('open');
                    });
                });
            }
        }

        // --- FAQ Accordion ---
        function setupFAQAccordion() {
            const faqItems = document.querySelectorAll('.faq-item');

            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                if (question) {
                    question.addEventListener('click', () => {
                        // Close other open items
                        faqItems.forEach(otherItem => {
                            if (otherItem !== item && otherItem.classList.contains('active')) {
                                otherItem.classList.remove('active');
                            }
                        });
                        // Toggle current item
                        item.classList.toggle('active');
                    });
                }
            });
        }

        // Initialize all scripts after the window loads
        window.onload = function() {
            initThreeJS();
            animateThreeJS();
            setupScrollAnimations();
            setupBackToTop();
            setupMobileMenu();
            setupInvestmentPlanModal();
            setupFAQAccordion();
            updateLoginUI(); // Initial UI update based on login status
        };
    </script>
</body>
</html>
