import Blogs from './blogs.json' with {type:"json"}

Blogs.blogs.map(blogg => {
    const blogLink = document.createElement('a')
    blogLink.setAttribute('id', `blogLink-${blogg.id}`)
    blogLink.setAttribute('class', `blogLink`)
    const blog = document.createElement('div');
    blog.setAttribute('id', `blog-${blogg.id}`);
    blog.setAttribute('class', `blog`);
    const blogHeadline = document.createElement('h3');
    blogHeadline.setAttribute('id', `headline-${blogg.id}`)
    blogHeadline.setAttribute('class', `blogHead`)
    const blogParagraph = document.createElement('p');
    blogParagraph.setAttribute('id', `para-${blogg.id}`)
    blogParagraph.setAttribute('class', `blogPara`)
    const blogImage = document.createElement('img');
    blogImage.setAttribute('id', `image-${blogg.id}`)
    blogImage.setAttribute('class', `blogImage`)

    const allBlogs = document.getElementById('allBlogs');

    allBlogs.appendChild(blogLink)
    blogLink.appendChild(blog);

    blog.appendChild(blogHeadline);
    blog.appendChild(blogParagraph);
    blog.appendChild(blogImage);

    blogHeadline.textContent = `${blogg.name}`;
    blogParagraph.textContent = `${blogg.para}`;
    blogImage.srcset = `${blogg.img}`;
    blogLink.href = `${blogg.link}`
})



console.log(allBlogs);