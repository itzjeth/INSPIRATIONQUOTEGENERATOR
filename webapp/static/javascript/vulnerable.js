$(document).ready(function() {
    $("#next-quote").on("click", function(e) {
        e.preventDefault();

        var randomQuoteNumber = getRandomQuoteNumber();
        updateQuote(randomQuoteNumber);
    });

    var q = location.search.split("?q=")[1];

    if (q >= 0 && q < quotes.length) {
        updateQuote(q);
    } else {
        $("#next-quote").click();
    }
});

function updateQuote(quoteNumber) {
    var randomQuote = quotes[quoteNumber];

    $("#quote").html(randomQuote.quote);
    $("#author").html(randomQuote.author);
    $("#quote-box").removeClass().addClass("animated bounceIn").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass();
    });

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" kennethpajo" + quoteNumber);
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

var quotes = [{
        "author": "Kenneth Pajo",
        "quote": "Anong favourite number mo sa electric fan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Nakakapagod pala pag laging nakaupo pwede ba tayo nalang"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Katulad ng bold sa japan, malabo kitang iwan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong dasal dinadasal mo kada gabi"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong ulam nyo kagabi"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Kung papapiliin ka, bat ako"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Alam moba kaya walang araw sa gabi, kase walang araw na di kita namimiss"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Happiness is a choice, that why i choose you"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Si joserizal nasa piso, ikaw nasa puso ko"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Kung si ed caluag may nakikitang iba ako wala, ikaw lang talaga"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Magagalit ba si gusion, kung tayo ang perfect combination"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Kung bibigyan ako tatlong kahilingan, tatlong beses kita hihilingin"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "I am not good at math, but i can give you the value you deserve"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong oras ginagawa yung orasan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong araw ginagawa yung calendar"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Baka ipagpalit moko sa malapit wag ah may pamasahe naman ako"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Anong oras ka mag rereply mag aalarm ako"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Every mistake can be a lesson"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Wag mong mahalin yung sarili mo, obligasyon ko yan"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Ha? hastronaut"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Emergency Vehicle Notification Systems"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Benefits of Data Mining"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Student Tracking Performance"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Library Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Student Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Student Handbook Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Thesis and Capstone Archiving System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "School Portal Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "School Events Attendance System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Grading System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Student Profile and Guidance Services with Decision Support"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Faculty Evaluation System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online School Documents Processing with Payment System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Class Scheduling System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Student Council Voting System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Android Based E-learning"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "OJT Records Monitoring System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Sales and Inventory System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Point of Sale Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Boarding House Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "COOP Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Insurance Management System"
    },

    {
        "author": "Kenneth Pajo",
        "quote": "Beauty Parlor Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Daily Time Record and Payroll System with Barcode/Biometric"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Budget Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Queuing System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Financial Management with SMS Notification"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Procurement Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Financial Documents Archiving Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Teller’s Queuing System Using Barcode Technology"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Service Marketplace System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Tailor Booking Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Expense Tracking and Monitoring System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Loan Transaction and Reservation with SMS"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Accounting Information Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Food Order and Catering Services System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online and SMS Based Salary Notification"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Pharmacy Stocks Management"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Laundry Booking System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hotel Reservation Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Tourism Management Database System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Management Information Systems for Tourism and Hospitality"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hotel And Restaurant Management And Monitoring System with SMS Support"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based Tourist Destination Information"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hotel Best Prices Mobile Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hospitality Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Cloud-Based Property and Hospitality Management"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hotel Booking App For Smart Travel"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Point of Sale (PoS) System used in the Hotel Industry"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "BrowseHotel: Hotel Hopping using Mobile Devices"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Transaction Processing System in Hotel and Restaurant"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Travel Destination and Events Portal Capstone Project"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Property Management Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hotels and Vacation Rentals"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Maternal Records Management"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Smart Healthcare Support for Remote Patient Monitoring During COVID-19 Quarantine"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "X-Ray Results Image Archiving"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "First Aid Knowledge-Based Mobile Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hospital Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Hospital Resources and Room Utilization"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online Platform for COVID-19 Contact Tracing System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Nutrition Office Management Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Patient monitoring and tracking system of family planning in the community"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mask Wearing Monitoring Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based E-Prescribing App with Admin Panel"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Clinic Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online Platform for Patient Dental and Medical Records"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Web-Based Psychopathology Diagnosis System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Health and Welfare Monitoring System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based Common Ailment Guide with Admin Panel"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Blood Bank Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Medicine Reminder Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Web and Mobile Based Information of Herbal Plants and Medicinal Usages"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Android Based Fitness and Exercise App"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Gym Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Nutrition and Diet Mobile Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Contact Tracing Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": " COVID-19 Facilities Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online Bus Ticket Reservation"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vehicle Rental System with Mobile App Support"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Driving School Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Shipping Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vehicle Insurance Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "GPS based Vehicle Theft Detection System using GSM Technology"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Bike Portal Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vehicle Parking Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vehicle Impoundment Information Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vehicle Registration Portal"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vehicle Franchising and Drivers Offense Software"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Traffic Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based Airline Reservation System (Android and IOS)"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Tricycle Driver Conduct Reporting Mobile Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "PUV Transportation Route and Mapping System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Driving School Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "QR Code Fare Payment System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Courier Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based Emergency Reporting with SMS Support"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Interactive Flood Hazard Map"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Web and Mobile Crime Reporting System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Weather Prediction App"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Bantay Baha Alert System with SMS and Push Notification"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Fire and Smoke Detection Application with SMS Notification"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "SMS-based Flood Monitoring System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Crisis Information Management Software"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Data Platform for Emergency Response Management"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Fire Extinguisher and Fire Fighting Drone"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Disaster Management Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Crime Scene Management Mobile Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Android Based Controlled Water Sprinkler"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online Platform for Plant Calendar Scheduling"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "MobileMangrove a Mobile-Based Mangrove Species Field Guide"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based Instructional Material for Agriculture"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Soil Moisture Sensor using Micro Controller"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "E-commerce Platform for Farm Trading Activities"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Web and Mobile Based Monitoring and Tracking of Fertilizer Delivery Products"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Online Record Archiving of Soil Analysis Results"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Drone Based Seeding Application Controlled by Mobile Devices"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Dairy Farm Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Water Monitoring For Aquaculture with SMS Notification"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Arduino Based Irrigation Device with Android Controlled Settings"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Android Based Feeds Scheduler Dispensing Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Mobile Based Farm Management Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Electronic Watering System for Vegetable Nursery Garden"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Solar-Powered Water Filtration System used in Farm Land"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Curfew and Travel Pass Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Evacuation Center Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "PWD Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Cloud-Based Business Permit Processing"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Vaccine Distribution System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Senior Citizen Information System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "DSWD Donation System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Information System for Bureau of Fire Protection"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Poverty and Malnutrition Monitoring System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Project Monitoring and Evaluation System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "BJMP’S Visitor’s Log Monitoring System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "City Business Permit and Monitoring System with Decision Support"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Barangay Records Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Housing Information Management with Mapping"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Census Monitoring"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Cedula Mobile: Cedula and Certification Request Mobile Application"
    },
    {
        "author": "Kenneth Pajo",
        "quote": "Health Center Information Management System"
    },
    {
        "author": "Kenneth Pajo",
        "quote": ""
    }, {
        "author": "Kenneth Pajo",
        "quote": "What are Data Breaches and How to Prevent Them"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Improving Data Security"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Benefits of Car Transportation Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Ecommerce Pricing Control Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Apps for Monitoring Temperature"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Mobile Event Planners"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Alarm SMS Notification Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Mobile Learning: How it Works"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Project Management Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Machine Learning and Big Data"
    }, {
        "author": "Kenneth Pajo",
        "quote": "University Networks"
    }, {
        "author": "Kenneth Pajo",
        "quote": "ARPANET: How The Internet Started"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Latest Ecommerce Technologies"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Cre Principles of Cybersecurity"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Information Technology in the 21st century"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Java Programming: The Basics"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Software Testing 101"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Introduction to Software Quality Assurance"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Employee Productivity Apps"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Onboarding Systems and HR"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Cloud-Based Software vs. On-Site Solutions"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Benefits of Cloud Solutions"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Hotel PMS Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Smart Technology in the Hotel Industry"
    }, {
        "author": "Kenneth Pajo",
        "quote": "IoT and Data"
    }, {
        "author": "Kenneth Pajo",
        "quote": "New IoT Gadgets"
    }, {
        "author": "Kenneth Pajo",
        "quote": "What is Artificial Intelligence"
    }, {
        "author": "Kenneth Pajo",
        "quote": "What is Machine Learning"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Robotics Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Neural Networks"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Has Technology Changed Our Lives"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Censorship on the Internet"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Should the Internet be Free?"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Email Marketing Tools"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Web Scrapers"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Machine Learning Learns"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How is AI Affecting us Today"
    }, {
        "author": "Kenneth Pajo",
        "quote": "New Tech Innovations for the Near Future"
    }, {
        "author": "Kenneth Pajo",
        "quote": "What is Virtual Reality"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How are Clouds Technologies Used for Data Storage"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Mobile Apps That Improve Education"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How The Internet Will Develop"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Software as a Service"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Platform as a Service"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Infrastructure as a Service"
    }, {
        "author": "Kenneth Pajo",
        "quote": "SaaS, PaaS, & IaaS: Main Differences"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Google Ranks Websites"
    }, {
        "author": "Kenneth Pajo",
        "quote": "3D Visualization in Architecture"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Essential Skills 3D Artists Need"
    }, {
        "author": "Kenneth Pajo",
        "quote": "3D Rendering Tools"
    }, {
        "author": "Kenneth Pajo",
        "quote": "DMaaS - Data Mining as a Service"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Augmented Reality"
    }, {
        "author": "Kenneth Pajo",
        "quote": "VR vs. AR: Differences Explained"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Automation Systems in the 21st century"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Data Management for Big Companies"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Essential Data Analyst Skills"
    }, {
        "author": "Kenneth Pajo",
        "quote": "AI and Gamification"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Data Mining for Employee Evaluation"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Data Mining in Healthcare"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Machine Learning for OTAs"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Facebook and Data"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Censorship on Social Media"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Social Media Filters out Content"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Fingerprint Authentication"
    }, {
        "author": "Kenneth Pajo",
        "quote": "IoT Sensors"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Web Ordering Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How to Prevent Phishing Attacks"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Using Web Scraping for Research"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Web Proxies"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Virtual Private Networks"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Differences Between VPNs and Proxies"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Proxies Enhances Web Scraping"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Home Automation Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Smart Homes"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Warehouse Management Systems"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Voice Recognition Systems Work"
    }, {
        "author": "Kenneth Pajo",
        "quote": "QR Code Check-ins"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Smart Systems in Cars"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Should Cars Have More Computers or Less?"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Solar Grass Cutters With Automation"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Voice Controlled Tools"
    }, {
        "author": "Kenneth Pajo",
        "quote": "CRM Software"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Online Training Software Benefits"
    }, {
        "author": "Kenneth Pajo",
        "quote": "ChatBots: Introduction"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Complex Chat Bots"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Using ML for Cybersecurity"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Machine LEarning in Ecommerce"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Elearning and Gamification"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Games Have Improved Digital Technologies"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Far Have Video Games Gone?"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Home Voice Assistants"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Technology Helps Disabled People"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Apps for Child Monitoring"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Nutrition Tools"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Semantic Web & Big Data"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Autonomous Systems Today"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Is The Internet Helping us?"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Blockchain and Crypto"
    }, {
        "author": "Kenneth Pajo",
        "quote": "How Bitcoin Works"
    }, {
        "author": "Kenneth Pajo",
        "quote": "IoT and 5G"
    }, {
        "author": "Kenneth Pajo",
        "quote": "Edge Computing Explained"
    }
]
