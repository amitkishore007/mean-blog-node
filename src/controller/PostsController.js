import Post from '../model/Post';

export default {

    post(req, res)
    {
        const post = new Post(req.body);
        post.save()
            .then((result)=>{
                return res.status(201).json({status:'success',data:result});                
            })
            .catch((error)=>{
                return res.status(500).json({status:'failed', errors:error});
            });
    },
    get(req, res)
    {
        Post.find({})
            .then((posts) => {
                return res.status(200).json({ status: 'success', data: posts });
            })
            .catch((error) => {
                return res.status(500).json({ status: 'failed', errors: error });
            });
    },
    put(req, res)
    {
        const postId = req.params.id;
        const post = req.body;
        Post.findOneAndUpdate({_id:postId}, post)
            .then((result)=>{
                return res.status(200).json({ status: 'success', data: result });
            })
            .catch((error)=>{
                return res.status(500).json({ status: 'failed', errors: error });
            });
    },
    delete(req, res)
    {
        const id = req.params.id;
        Post.findOneAndDelete({_id:id})
            .then((post) => {
                return res.status(200).json({ status: 'success', data: post });
            })
            .catch((error) => {
                return res.status(500).json({ status: 'failed', errors: error });
            });
    },
    getOne(req, res) 
    {
        const postId = req.params.id;
        Post.findOne({ _id: postId })
            .then((post) => {
                return res.status(200).json({ status: 'success', data: post });
            })
            .catch((error) => {
                return res.status(500).json({ status: 'failed', errors: error });
            });
    }
};