import Blogs from './blogs.json' with {type:"json"}

    Blogs.blogs.map(link => {
        // const blogHeadline = document.getElementById('blogHeadline');
        const bLink = document.createElement('a');
        bLink.setAttribute('id', `bLink-${link.id}`);
        bLink.textContent = `${link.name}`;
        bLink.href = `${link.link}`;
        console.log(bLink);
        
        if (bLink.textContent === blogHeadline.textContent) {
            bLink.textContent = '';
        }
        
        let blogLinks = document.getElementById('blogLinks');
        blogLinks.appendChild(bLink);
    })