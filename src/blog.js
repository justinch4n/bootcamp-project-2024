var blogs = [
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
var blogContainer = document.querySelector(".blog-container");
blogs.forEach(function (blog) {
    var blogAnchor = document.createElement("a");
    blogAnchor.href = "blogs/".concat(blog.slug);
    var blogPage = document.createElement("div");
    var blogTitle = document.createElement("h1");
    blogTitle.innerHTML = blog["title"];
    var blogDate = document.createElement("h3");
    blogDate.innerHTML = blog["date"];
    var blogDesc = document.createElement("p");
    blogDesc.innerHTML = blog["description"];
    var blogImg = document.createElement("img");
    blogImg.src = blog["image"];
    blogPage.appendChild(blogTitle);
    blogPage.appendChild(blogDate);
    blogPage.appendChild(blogDesc);
    blogPage.appendChild(blogImg);
    blogAnchor.appendChild(blogPage);
    blogContainer.appendChild(blogAnchor);
});
