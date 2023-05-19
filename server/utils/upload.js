import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url: URL = `mongodb://jatinfoujdar:jatinfoujdar1234@ac-kbusnl5-shard-00-00.g1o73sw.mongodb.net:27017,ac-kbusnl5-shard-00-01.g1o73sw.mongodb.net:27017,ac-kbusnl5-shard-00-02.g1o73sw.mongodb.net:27017/?ssl=true&replicaSet=atlas-10yuwk-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 