export default {
    firstName: 'Himanshu',
    lastName: 'Bharti',
    jobTitle: 'Full Stack Developer',
    address: 'F - 110 Kondli Delhi',
    phone: '08447767283',
    email: 'himanshubhartimax@gmail.com',
    portfolio: 'portfolio URL',
    linkedin: 'linkedin.com URL',
    github: 'github.com URL',
    themeColor: '#ff6666',
    summary: 'Full-stack developer with expertise in web development, focusing on creating dynamic web applications and seamless user experiences.',
    experience: [
        {
            id: 1,
            title: 'Web Development Intern',
            company: 'Brainwave Matrix Solutions',
            location: 'Remote',
            startDate: 'Jul 2024',
            endDate: '',
            currentlyWorking: true,
            description: [
                'Gaining valuable hands-on experience in full-stack web development.',
                'Applying technical skills in the development and implementation of dynamic web applications.'
            ],
        },
        {
            id: 2,
            title: 'Python and R Language Instructor',
            company: 'Self-Employed Tutor',
            location: 'Remote',
            startDate: 'Jun 2023',
            endDate: '',
            currentlyWorking: true,
            description: [
                'Taught Python and R to 11th-grade students, focusing on fundamental concepts and practical applications.',
                'Increased student test scores by an average of 85% through personalized instruction and practical coding exercises.',
                'Developed and delivered 50+ hours of custom curriculum, resulting in a 100% student satisfaction rate.'
            ],
        },
        {
            id: 3,
            title: 'Remote Python Instructor',
            company: 'Freelance Instructor',
            location: 'Remote',
            startDate: 'Jan 2023',
            endDate: 'Jun 2023',
            currentlyWorking: false,
            description: [
                'Delivered 150+ remote Python sessions, teaching basic and advanced concepts.',
                'Facilitated remote coding workshops, monitored student performance, and provided targeted feedback.',
                'Improved coding skill levels by 75% across 60 students in one quarter.'
            ],
        }
    ],
    education: [
        {
            id: 1,
            instituteName: 'Indira Gandhi National Open University, Delhi',
            startDate: 'Jan 2021',
            endDate: 'June 2024',
            currentlyPursuing: false,
            degree: 'Bachelor of Computer Application (BCA)',
            description: 'Focused on computer science fundamentals, web development, and programming languages.'
        },
        {
            id: 2,
            instituteName: 'School Of Excellence Khichripur | CBSE, Delhi',
            startDate: 'Apr 2019',
            endDate: 'Mar 2020',
            currentlyPursuing: false,
            degree: '12th Board',
            description: 'Completed higher secondary education with a focus on science and technology.'
        }
    ],
    skills: [
        { id: 1, name: 'HTML / CSS', rating: 90 },
        { id: 2, name: 'JavaScript', rating: 85 },
        { id: 3, name: 'React.js', rating: 80 },
        { id: 4, name: 'Node.js', rating: 75 },
        { id: 5, name: 'Express.js', rating: 70 },
        { id: 6, name: 'RESTful APIs', rating: 80 },
        { id: 7, name: 'Python', rating: 95 },
        { id: 8, name: 'C++', rating: 70 },
        { id: 9, name: 'SQL', rating: 75 },
        { id: 10, name: 'R Language', rating: 85 },
        { id: 11, name: 'MongoDB', rating: 80 },
        { id: 12, name: 'MySql', rating: 75 },
        { id: 13, name: 'Redux Toolkit', rating: 85 },
        { id: 14, name: 'Bootstrap', rating: 80 },
        { id: 15, name: 'Tailwind CSS', rating: 80 },
        { id: 16, name: 'Flowbite React', rating: 70 },
        { id: 17, name: 'Git & GitHub', rating: 90 },
        { id: 18, name: 'Postman', rating: 85 },
        { id: 19, name: 'VS Code', rating: 90 },
        { id: 20, name: 'Replit', rating: 75 },
        { id: 21, name: 'R Studio', rating: 80 },
        { id: 22, name: 'Responsive Design', rating: 85 },
        { id: 23, name: 'Cross-Browser Compatibility', rating: 80 },
        { id: 24, name: 'Web Performance', rating: 75 },
        { id: 25, name: 'Accessibility', rating: 70 },
        { id: 26, name: 'Debugging', rating: 85 },
        { id: 27, name: 'Troubleshooting', rating: 85 }
    ],
    certifications: [
        {
            id: 1,
            name: 'Programming with JavaScript',
            issuingOrganization: 'META',
            issueDate: 'Feb 2023',
            credentialId: '2KMF28AY79ZY',
            link: 'https://www.coursera.org/account/accomplishments/verify/2KMF28AY79ZY'
        },
        {
            id: 2,
            name: 'Introduction to Front-end Development',
            issuingOrganization: 'META',
            issueDate: 'Jan 2023',
            credentialId: 'WQKE2TX2ZCDE',
            link: 'https://www.coursera.org/account/accomplishments/verify/WQKE2TX2ZCDE'
        }
    ],
    interests: [
        {
            id: 1,
            name: 'Blogging',
            description: 'Passionate about writing and sharing insights on technology and programming on Hashnode.',
            link: 'Hashnode Blog URL'
        },
        {
            id: 2,
            name: 'Content Creation',
            description: 'Creating educational and engaging videos on programming, projects, and technology for YouTube, Instagram, and X (formerly Twitter).',
            youtube: 'YouTube Profile URL',
            instagram: 'Instagram Profile URL',
            twitter: 'X (Twitter) Profile URL'
        }
    ],
    projects: [
        {
            id: 1,
            name: 'IBlogIt - Blog Website',
            stack: 'MERN stack | Redux Toolkit | JWT | Flowbite React',
            startDate: 'May 2024',
            endDate: '',
            onGoing: true,
            description: [
                'Developed a full-featured blog website for creating, reading, updating, and deleting posts.',
                'Built responsive front-end with React.js and managed state using Redux Toolkit.',
                'Developed RESTful APIs with Node.js and Express.js for CRUD operations, integrating secure user authentication via JWT and MongoDB for data storage.'
            ],
            features: ['User signup, login/logout, post interactions, dark mode, admin dashboard.'],
            github: 'GitHub Repository URL'
        },
        {
            id: 2,
            name: 'On4All - E-commerce Website',
            stack: 'MERN stack | Redux Toolkit | JWT',
            startDate: 'Jan 2024',
            endDate: 'Apr 2024',
            onGoing: false,
            description: [
                'Developed an e-commerce platform using MERN stack with Redux Toolkit and JWT for user authentication.',
                'Designed MongoDB database, built backend RESTful APIs, and created dynamic frontend for seamless user experience.',
                'Integrated payment processing via Razorpay.'
            ],
            features: ['Product search, filtering, sorting, wishlist, cart management, and order page.'],
            github: 'GitHub Repository URL',
            liveSite: 'On4All Live Site URL'
        },
        {
            id: 3,
            name: 'Apple Website Clone',
            stack: 'React.js | GSAP | Three.js | Tailwind CSS',
            startDate: 'Jun 2024',
            endDate: 'Jul 2024',
            onGoing: false,
            description: 'Developed a fully responsive and interactive clone of the Apple website.',
            github: 'GitHub Repository URL'
        },
        {
            id: 4,
            name: 'QuillBot Clone',
            stack: 'HTML | CSS | JavaScript',
            startDate: 'Jul 2024',
            endDate: 'Jul 2024',
            onGoing: false,
            description: 'Developed a clone of QuillBot with a focus on frontend functionalities.',
            github: 'GitHub Repository URL'
        }
    ]
};
