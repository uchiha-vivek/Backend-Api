import front from "../model/front";

 export const getAllBlogs = async(req,res,next) =>{

    let fronts;
    try{
        fronts = front.find();


    }catch(err){
        return console.log(err)
    }
    if(!fronts){
        return res.status(404).json({message:"NO blogs found"})
    }

    return res.status(200).json({fronts})
}



export const addBlog = async(req,res,next)=>{
    const {title,description , image,user} = req.body;
    const blog = new front({
        title,
        description,
        image,
        user
    });
    try{
       await blog.save()

    }catch(err){
        return console.log(error)
    }

    return res.status(200).json({blog})
}


export const updateBlog =  async(req,res,next)=>{
    const {title,description} = req.body
    const blogId = req.params.id
    let blog;

     try{
        blog = await front.findByIdAndUpdate(blogId,{
            title,
            description
        })


     }catch(err){
        return console.log(err)
        
     }

     if(!blog){
        return res.status(500).json({message:"Not able to update the Blog"})
     }
     return res.status(200).json({blog})
    
}


export const getById =  async (req,res,next)  =>{

    const id=  req.params.id;
    let blog;
    try{
        blog=  await front.findById(id)


    }catch(err){
        return console.log(error)
    
    }

    if(!blog){
        return res.status(404).json({message:"blog not found"})
    }
    return res.status(200).json({blog})
}