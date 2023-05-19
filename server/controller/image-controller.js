

const url = "http://localhost:4000"

export const uploadImage = (req,res)=>{
    if(!req.file){
        return res.status(400).json({msg: "file not found"});
    }
    const imageUrl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
}