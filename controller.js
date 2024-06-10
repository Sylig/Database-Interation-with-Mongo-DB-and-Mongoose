const models = require ('../models/BlogModel')
const BlogModel = models.BlogModel

//const helloWorld = (req,res) => {
//res.json({message: "Hello Si'"})
//}

//Create
const createBlogs = async (req,res) =>{
    const {model, make, owner, registrationN, address} = req.body //object destructuring
    const blog = await BlogModel.create({
      model: model,
      make: make,
      owner: owner,
      registrationN: registrationN,
      address: address
        
    })
    const savedBlog = await blog.save()
    res.json({
        message: "Blog saved successfully",
        savedBlog: savedBlog
    })
}
//Read
const readBlogs = async (req,res)=> {
    const blogs = await BlogModel.find()
    res.json (blogs)
}

module.exports = {
    // helloWorld,
     readBlogs,
     createBlogs,
 }

//Update
exports.updateByAuthor = async (req, res) => {
    try {
    // Define the query to find blogs with the specified author
    const query = ({ address: 'oldAddress' }, {name: 'old name'});
    
    // Define the new data to update the author
    const update = ({ address: 'NewAddress'}, {name:'newName'});
    /* Use the "findOneAndUpdate" method to update a blog with the
    specified field and set the "new" option to true to get the
    updated document as the result */
    const updatedBlog = await Blog.findOneAndUpdate(query, update, { new: true }
    );
    if (updatedBlog) {
    res.send("Updated successfully");
    } else {
    res.status(404).send("Blog not found");
    }
    } catch (error) {
    console.error("Something went wrong when updating data.", error);
    res.status(500).send("An error occurred while updating.");}
}

//Delete
exports.deleteBlogsByAuthor = async (req, res) => {
    try {
        // Remove all blogs with the specified author name
        const deleteResult = await Blog.deleteMany({ owner: 'NewAuthorName' });

        if (deleteResult.deletedCount > 0) {
            res.send("Successfully deleted all blogs from author.");
        } else {
            res.send("Author not found...");
        }
    } catch (error) {
        console.error("An error occurred while removing blogs.", error);
        res.status(500).send("An error occurred while removing blogs.");
    }
};



