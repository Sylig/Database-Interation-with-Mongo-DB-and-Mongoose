const mongoose = require ('mongoose')

// To create a schema which is the definition of the document
const blogSchema = mongoose.Schema (
    
    {
    model: 'String',
    make: 'String',
    owner: 'String',
    registrationN: 'String',
    address: 'String',
    createdAt: {
        type: Date,
        default: Date.now //auto created
        }
    })

//Document model
const BlogModel = mongoose.model ('Cars', blogSchema)

module.exports = {
    BlogModel
}