export interface Project {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    link: string;
  };

  const projects: Project[] = [
    {
        "title": "Price Plate",
        "description": "In this project, I worked with a team to create a recipe expense tracker, a web application designed to help users manage cooking costs and plan meals efficiently. I was responsible for prototyping in Figma and developing the application frontend using TypeScript and CSS. We used MongoDB to store recipes and user data and the application was built using Next.js. Throughout development, we faced challenges such as efficiently structuring the database for complex recipe data and implementing real-time cost calculations, which we overcame through collaborative problem-solving. This experience significantly enhanced my skills in UI/UX design, frontend development, and working with modern web technologies.",
        "image": "/media/pricePlate.png",
        "imageAlt": "price plate landing page",
        "link": "https://price-plate.vercel.app/"
    },
    {
        "title": "Concert Ticket Database",
        "description": "In this project, I used MySQL to create a relational database to store different database tables. I also created a GUI to interact with the database using the JavaFx framework to interact with the tables in different ways. A user is able to sign into the database as a customer or artist which gives access to related tables and allows for the users to create/add/remove different records. There is also an admin account which can view all tables through the GUI.",
        "image": "/media/concertTicketDB.png",
        "imageAlt": "concert ticket database landing page",
        "link": "https://github.com/joieng1/concertTicketDatabase"
    },
    {
        "title": "Personal Website",
        "description": "This website is my first portfolio project I made using the Hack4Impact starter kit!",
        "image": "/media/personalPage.png",
        "imageAlt": "personal website homepage",
        "link": "/"
    }
  ];
