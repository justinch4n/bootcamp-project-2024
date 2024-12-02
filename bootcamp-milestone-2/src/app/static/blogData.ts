export interface Blog {
    title: string;
    date: string;
    caption: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
  };

  //list of currently posted blogs
  const blogs: Blog[] = [
    {
        title: 'SF Night Trip',
        date: '8 Sept 2024',
        caption: 'A spontaneous trip to San Francisco to visit my big (ft. Emily Chan)!',
        description: 'A spontaneous trip to San Francisco to visit my big (ft. Emily Chan)! We went to the Golden Gate Bridge, Alcatraz, and the fish market. We also ate some ice cream on Sunday! (I love ghirardelli!)',
        image: '/media/icecream.jpg', 
        imageAlt: 'ice cream sunday from ghirardelli',
        slug: 'sf-night-trip'
    },
    {
        title: 'Handroll Night',
        date: '6 Oct 2024',
        caption: 'Handrolls and miso soup with Kasey and Emi!',
        description: 'Handrolls and miso soup with Kasey and Emi! We made handrolls and made miso soup! I love handrolls and miso soup!',
        image: '/media/handroll.jpg', 
        imageAlt: 'handroll I made, also kasey and emi',
        slug: 'handroll-night'
    }
];

  export default blogs;