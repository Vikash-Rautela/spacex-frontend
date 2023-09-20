// script.js
const blogContainer = document.getElementById("blog-container");

// Sample blog post data with preview images (replace with your own data)
const blogPosts = [
  {
    title: "Blog Post 1",
    content: "This is the content of Blog Post 1.",
    imageSrc: "./homestay_2.jpg", // Image file path or URL
  },
  {
    title: "Blog Post 2",
    content: "This is the content of Blog Post 3.",
    imageSrc: "./homestay_2.jpg", // Image file path or URL
  },
  {
    title: "Blog Post 3",
    content: "This is the content of Blog Post 3.",
    imageSrc: "./homestay_2.jpg", // Image file path or URL
  },
  {
    title: "Blog Post 3",
    content: "This is the content of Blog Post 3.",
    imageSrc: "./homestay_2.jpg",
  },
  {
    title: "Blog Post 3",
    content: "This is the content of Blog Post 3.",
    imageSrc: "./homestay_2.jpg",
  },
  {
    title: "Blog Post 3",
    content: "This is the content of Blog Post 3.",
    imageSrc: "./homestay_2.jpg",
  },
];

// Function to create and append blog cards
function createBlogCards() {
  blogPosts.forEach((post) => {
    const article = document.createElement("article");
    article.innerHTML = `
            <img src="${post.imageSrc}" alt="${post.title}" />
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
    blogContainer.appendChild(article);
  });
}

// Call the function to populate the blog section
createBlogCards();
