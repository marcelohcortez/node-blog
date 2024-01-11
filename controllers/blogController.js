const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blog/index', { title: 'All Posts', blogs: result })
        })
        .catch((err) => {
            console.log(err)
        });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('blog/details', { blog: result, title: 'Blog Details' });
    })
    .catch((err) => {
        res.status().render('404', {title: 'Blog not found'});
    });
}

const blog_create_get = (req, res) => {
    res.render('blog/create', { title: 'Create' });
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    // Deactivate next line to avoid improper content while don't have login
    // blog.save() 
    //     .then((result) => {
    //         res.redirect('/blog');
    //     })
    //     .catch((err) => console.log(err));
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blog'});
        })
        .catch((err) => {console.log(err);});
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}