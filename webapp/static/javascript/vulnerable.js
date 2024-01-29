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

    $("#share").attr("href", "https://twitter.com/intent/tweet?text=\"" + encodeURIComponent($("#hidden").html(randomQuote.quote).text()) + "\" diff_jeth" + quoteNumber);
}

function getRandomQuoteNumber() {
    return Math.floor(Math.random() * quotes.length);
}

var quotes = [{
        "author": "Jethro Jabay",
        "quote": "Anong favourite number mo sa electric fan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Nakakapagod pala pag laging nakaupo pwede ba tayo nalang"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Katulad ng bold sa japan, malabo kitang iwan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong dasal dinadasal mo kada gabi"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong ulam nyo kagabi"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Kung papapiliin ka, bat ako"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Alam moba kaya walang araw sa gabi, kase walang araw na di kita namimiss"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Happiness is a choice, that why i choose you"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Si joserizal nasa piso, ikaw nasa puso ko"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Kung si ed caluag may nakikitang iba ako wala, ikaw lang talaga"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Magagalit ba si gusion, kung tayo ang perfect combination"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Kung bibigyan ako tatlong kahilingan, tatlong beses kita hihilingin"
    },
    {
        "author": "Jethro Jabay",
        "quote": "I am not good at math, but i can give you the value you deserve"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong oras ginagawa yung orasan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong araw ginagawa yung calendar"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Baka ipagpalit moko sa malapit wag ah may pamasahe naman ako"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Anong oras ka mag rereply mag aalarm ako"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Every mistake can be a lesson"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Wag mong mahalin yung sarili mo, obligasyon ko yan"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Ha? hastronaut"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Emergency Vehicle Notification Systems"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Benefits of Data Mining"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Student Tracking Performance"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Library Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Student Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Student Handbook Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Thesis and Capstone Archiving System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "School Portal Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "School Events Attendance System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Grading System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Student Profile and Guidance Services with Decision Support"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Faculty Evaluation System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online School Documents Processing with Payment System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Class Scheduling System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Student Council Voting System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Android Based E-learning"
    },
    {
        "author": "Jethro Jabay",
        "quote": "OJT Records Monitoring System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Sales and Inventory System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Point of Sale Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Boarding House Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "COOP Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Insurance Management System"
    },

    {
        "author": "Jethro Jabay",
        "quote": "Beauty Parlor Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Daily Time Record and Payroll System with Barcode/Biometric"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Budget Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Queuing System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Financial Management with SMS Notification"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Procurement Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Financial Documents Archiving Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Teller’s Queuing System Using Barcode Technology"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Service Marketplace System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Tailor Booking Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Expense Tracking and Monitoring System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Loan Transaction and Reservation with SMS"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Accounting Information Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Food Order and Catering Services System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online and SMS Based Salary Notification"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Pharmacy Stocks Management"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Laundry Booking System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hotel Reservation Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Tourism Management Database System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Management Information Systems for Tourism and Hospitality"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hotel And Restaurant Management And Monitoring System with SMS Support"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based Tourist Destination Information"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hotel Best Prices Mobile Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hospitality Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Cloud-Based Property and Hospitality Management"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hotel Booking App For Smart Travel"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Point of Sale (PoS) System used in the Hotel Industry"
    },
    {
        "author": "Jethro Jabay",
        "quote": "BrowseHotel: Hotel Hopping using Mobile Devices"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Transaction Processing System in Hotel and Restaurant"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Travel Destination and Events Portal Capstone Project"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Property Management Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hotels and Vacation Rentals"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Maternal Records Management"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Smart Healthcare Support for Remote Patient Monitoring During COVID-19 Quarantine"
    },
    {
        "author": "Jethro Jabay",
        "quote": "X-Ray Results Image Archiving"
    },
    {
        "author": "Jethro Jabay",
        "quote": "First Aid Knowledge-Based Mobile Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hospital Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Hospital Resources and Room Utilization"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online Platform for COVID-19 Contact Tracing System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Nutrition Office Management Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Patient monitoring and tracking system of family planning in the community"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mask Wearing Monitoring Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based E-Prescribing App with Admin Panel"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Clinic Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online Platform for Patient Dental and Medical Records"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Web-Based Psychopathology Diagnosis System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Health and Welfare Monitoring System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based Common Ailment Guide with Admin Panel"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Blood Bank Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Medicine Reminder Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Web and Mobile Based Information of Herbal Plants and Medicinal Usages"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Android Based Fitness and Exercise App"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Gym Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Nutrition and Diet Mobile Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Contact Tracing Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": " COVID-19 Facilities Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online Bus Ticket Reservation"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vehicle Rental System with Mobile App Support"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Driving School Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Shipping Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vehicle Insurance Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "GPS based Vehicle Theft Detection System using GSM Technology"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Bike Portal Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vehicle Parking Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vehicle Impoundment Information Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vehicle Registration Portal"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vehicle Franchising and Drivers Offense Software"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Traffic Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based Airline Reservation System (Android and IOS)"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Tricycle Driver Conduct Reporting Mobile Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "PUV Transportation Route and Mapping System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Driving School Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "QR Code Fare Payment System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Courier Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based Emergency Reporting with SMS Support"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Interactive Flood Hazard Map"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Web and Mobile Crime Reporting System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Weather Prediction App"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Bantay Baha Alert System with SMS and Push Notification"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Fire and Smoke Detection Application with SMS Notification"
    },
    {
        "author": "Jethro Jabay",
        "quote": "SMS-based Flood Monitoring System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Crisis Information Management Software"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Data Platform for Emergency Response Management"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Fire Extinguisher and Fire Fighting Drone"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Disaster Management Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Crime Scene Management Mobile Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Android Based Controlled Water Sprinkler"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online Platform for Plant Calendar Scheduling"
    },
    {
        "author": "Jethro Jabay",
        "quote": "MobileMangrove a Mobile-Based Mangrove Species Field Guide"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based Instructional Material for Agriculture"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Soil Moisture Sensor using Micro Controller"
    },
    {
        "author": "Jethro Jabay",
        "quote": "E-commerce Platform for Farm Trading Activities"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Web and Mobile Based Monitoring and Tracking of Fertilizer Delivery Products"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Online Record Archiving of Soil Analysis Results"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Drone Based Seeding Application Controlled by Mobile Devices"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Dairy Farm Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Water Monitoring For Aquaculture with SMS Notification"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Arduino Based Irrigation Device with Android Controlled Settings"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Android Based Feeds Scheduler Dispensing Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Mobile Based Farm Management Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Electronic Watering System for Vegetable Nursery Garden"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Solar-Powered Water Filtration System used in Farm Land"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Curfew and Travel Pass Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Evacuation Center Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "PWD Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Cloud-Based Business Permit Processing"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Vaccine Distribution System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Senior Citizen Information System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "DSWD Donation System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Information System for Bureau of Fire Protection"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Poverty and Malnutrition Monitoring System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Project Monitoring and Evaluation System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "BJMP’S Visitor’s Log Monitoring System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "City Business Permit and Monitoring System with Decision Support"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Barangay Records Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Housing Information Management with Mapping"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Census Monitoring"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Cedula Mobile: Cedula and Certification Request Mobile Application"
    },
    {
        "author": "Jethro Jabay",
        "quote": "Health Center Information Management System"
    },
    {
        "author": "Jethro Jabay",
        "quote": ""
    }, {
        "author": "Jethro Jabay",
        "quote": "What are Data Breaches and How to Prevent Them"
    }, {
        "author": "Jethro Jabay",
        "quote": "Improving Data Security"
    }, {
        "author": "Jethro Jabay",
        "quote": "Benefits of Car Transportation Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Ecommerce Pricing Control Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Apps for Monitoring Temperature"
    }, {
        "author": "Jethro Jabay",
        "quote": "Mobile Event Planners"
    }, {
        "author": "Jethro Jabay",
        "quote": "Alarm SMS Notification Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Mobile Learning: How it Works"
    }, {
        "author": "Jethro Jabay",
        "quote": "Project Management Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Machine Learning and Big Data"
    }, {
        "author": "Jethro Jabay",
        "quote": "University Networks"
    }, {
        "author": "Jethro Jabay",
        "quote": "ARPANET: How The Internet Started"
    }, {
        "author": "Jethro Jabay",
        "quote": "Latest Ecommerce Technologies"
    }, {
        "author": "Jethro Jabay",
        "quote": "Cre Principles of Cybersecurity"
    }, {
        "author": "Jethro Jabay",
        "quote": "Information Technology in the 21st century"
    }, {
        "author": "Jethro Jabay",
        "quote": "Java Programming: The Basics"
    }, {
        "author": "Jethro Jabay",
        "quote": "Software Testing 101"
    }, {
        "author": "Jethro Jabay",
        "quote": "Introduction to Software Quality Assurance"
    }, {
        "author": "Jethro Jabay",
        "quote": "Employee Productivity Apps"
    }, {
        "author": "Jethro Jabay",
        "quote": "Onboarding Systems and HR"
    }, {
        "author": "Jethro Jabay",
        "quote": "Cloud-Based Software vs. On-Site Solutions"
    }, {
        "author": "Jethro Jabay",
        "quote": "Benefits of Cloud Solutions"
    }, {
        "author": "Jethro Jabay",
        "quote": "Hotel PMS Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Smart Technology in the Hotel Industry"
    }, {
        "author": "Jethro Jabay",
        "quote": "IoT and Data"
    }, {
        "author": "Jethro Jabay",
        "quote": "New IoT Gadgets"
    }, {
        "author": "Jethro Jabay",
        "quote": "What is Artificial Intelligence"
    }, {
        "author": "Jethro Jabay",
        "quote": "What is Machine Learning"
    }, {
        "author": "Jethro Jabay",
        "quote": "Robotics Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Neural Networks"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Has Technology Changed Our Lives"
    }, {
        "author": "Jethro Jabay",
        "quote": "Censorship on the Internet"
    }, {
        "author": "Jethro Jabay",
        "quote": "Should the Internet be Free?"
    }, {
        "author": "Jethro Jabay",
        "quote": "Email Marketing Tools"
    }, {
        "author": "Jethro Jabay",
        "quote": "Web Scrapers"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Machine Learning Learns"
    }, {
        "author": "Jethro Jabay",
        "quote": "How is AI Affecting us Today"
    }, {
        "author": "Jethro Jabay",
        "quote": "New Tech Innovations for the Near Future"
    }, {
        "author": "Jethro Jabay",
        "quote": "What is Virtual Reality"
    }, {
        "author": "Jethro Jabay",
        "quote": "How are Clouds Technologies Used for Data Storage"
    }, {
        "author": "Jethro Jabay",
        "quote": "Mobile Apps That Improve Education"
    }, {
        "author": "Jethro Jabay",
        "quote": "How The Internet Will Develop"
    }, {
        "author": "Jethro Jabay",
        "quote": "Software as a Service"
    }, {
        "author": "Jethro Jabay",
        "quote": "Platform as a Service"
    }, {
        "author": "Jethro Jabay",
        "quote": "Infrastructure as a Service"
    }, {
        "author": "Jethro Jabay",
        "quote": "SaaS, PaaS, & IaaS: Main Differences"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Google Ranks Websites"
    }, {
        "author": "Jethro Jabay",
        "quote": "3D Visualization in Architecture"
    }, {
        "author": "Jethro Jabay",
        "quote": "Essential Skills 3D Artists Need"
    }, {
        "author": "Jethro Jabay",
        "quote": "3D Rendering Tools"
    }, {
        "author": "Jethro Jabay",
        "quote": "DMaaS - Data Mining as a Service"
    }, {
        "author": "Jethro Jabay",
        "quote": "Augmented Reality"
    }, {
        "author": "Jethro Jabay",
        "quote": "VR vs. AR: Differences Explained"
    }, {
        "author": "Jethro Jabay",
        "quote": "Automation Systems in the 21st century"
    }, {
        "author": "Jethro Jabay",
        "quote": "Data Management for Big Companies"
    }, {
        "author": "Jethro Jabay",
        "quote": "Essential Data Analyst Skills"
    }, {
        "author": "Jethro Jabay",
        "quote": "AI and Gamification"
    }, {
        "author": "Jethro Jabay",
        "quote": "Data Mining for Employee Evaluation"
    }, {
        "author": "Jethro Jabay",
        "quote": "Data Mining in Healthcare"
    }, {
        "author": "Jethro Jabay",
        "quote": "Machine Learning for OTAs"
    }, {
        "author": "Jethro Jabay",
        "quote": "Facebook and Data"
    }, {
        "author": "Jethro Jabay",
        "quote": "Censorship on Social Media"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Social Media Filters out Content"
    }, {
        "author": "Jethro Jabay",
        "quote": "Fingerprint Authentication"
    }, {
        "author": "Jethro Jabay",
        "quote": "IoT Sensors"
    }, {
        "author": "Jethro Jabay",
        "quote": "Web Ordering Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "How to Prevent Phishing Attacks"
    }, {
        "author": "Jethro Jabay",
        "quote": "Using Web Scraping for Research"
    }, {
        "author": "Jethro Jabay",
        "quote": "Web Proxies"
    }, {
        "author": "Jethro Jabay",
        "quote": "Virtual Private Networks"
    }, {
        "author": "Jethro Jabay",
        "quote": "Differences Between VPNs and Proxies"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Proxies Enhances Web Scraping"
    }, {
        "author": "Jethro Jabay",
        "quote": "Home Automation Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "Smart Homes"
    }, {
        "author": "Jethro Jabay",
        "quote": "Warehouse Management Systems"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Voice Recognition Systems Work"
    }, {
        "author": "Jethro Jabay",
        "quote": "QR Code Check-ins"
    }, {
        "author": "Jethro Jabay",
        "quote": "Smart Systems in Cars"
    }, {
        "author": "Jethro Jabay",
        "quote": "Should Cars Have More Computers or Less?"
    }, {
        "author": "Jethro Jabay",
        "quote": "Solar Grass Cutters With Automation"
    }, {
        "author": "Jethro Jabay",
        "quote": "Voice Controlled Tools"
    }, {
        "author": "Jethro Jabay",
        "quote": "CRM Software"
    }, {
        "author": "Jethro Jabay",
        "quote": "Online Training Software Benefits"
    }, {
        "author": "Jethro Jabay",
        "quote": "ChatBots: Introduction"
    }, {
        "author": "Jethro Jabay",
        "quote": "Complex Chat Bots"
    }, {
        "author": "Jethro Jabay",
        "quote": "Using ML for Cybersecurity"
    }, {
        "author": "Jethro Jabay",
        "quote": "Machine LEarning in Ecommerce"
    }, {
        "author": "Jethro Jabay",
        "quote": "Elearning and Gamification"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Games Have Improved Digital Technologies"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Far Have Video Games Gone?"
    }, {
        "author": "Jethro Jabay",
        "quote": "Home Voice Assistants"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Technology Helps Disabled People"
    }, {
        "author": "Jethro Jabay",
        "quote": "Apps for Child Monitoring"
    }, {
        "author": "Jethro Jabay",
        "quote": "Nutrition Tools"
    }, {
        "author": "Jethro Jabay",
        "quote": "Semantic Web & Big Data"
    }, {
        "author": "Jethro Jabay",
        "quote": "Autonomous Systems Today"
    }, {
        "author": "Jethro Jabay",
        "quote": "Is The Internet Helping us?"
    }, {
        "author": "Jethro Jabay",
        "quote": "Blockchain and Crypto"
    }, {
        "author": "Jethro Jabay",
        "quote": "How Bitcoin Works"
    }, {
        "author": "Jethro Jabay",
        "quote": "IoT and 5G"
    }, {
        "author": "Jethro Jabay",
        "quote": "Edge Computing Explained"
    }
]
