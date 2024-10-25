type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: 'SF Night Trip',
        date: '8 Sept 2024',
        description: 'A spontaneous trip to San Francisco to visit my big (ft. Emily Chan)!',
        image: 'media/icecream.jpg',
        imageAlt: 'ice cream sunday from ghirardelli',
        slug: 'sf-night-trip.html'
    },
    {
        title: 'Handroll Night',
        date: '6 Oct 2024',
        description: 'Handrolls and miso soup with Kasey and Emi!',
        image: 'media/handroll.jpg',
        imageAlt: 'handroll I made, also kasey and emi',
        slug: 'handroll-night.html'
    }
];

const blogContainer = document.querySelector(".blog-container");

blogs.forEach(function (blog) {
  const blogAnchor = document.createElement("a");
  blogAnchor.href = `blogs/${blog.slug}`;

  const blogPage = document.createElement("div");
  const blogTitle = document.createElement("h1");
  blogTitle.innerHTML = blog["title"];
  const blogDate = document.createElement("h3");
  blogDate.innerHTML = blog["date"];
  const blogDesc = document.createElement("p");
  blogDesc.innerHTML = blog["description"];
  const blogImg = document.createElement("img");
  blogImg.src = blog["image"];

  blogPage.appendChild(blogTitle);
  blogPage.appendChild(blogDate);
  blogPage.appendChild(blogDesc);
  blogPage.appendChild(blogImg);
  blogAnchor.appendChild(blogPage)
  blogContainer.appendChild(blogAnchor);

});

