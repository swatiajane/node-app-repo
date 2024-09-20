const {error}=require('console');
const fs=require('fs');
const FilePath='sample-file.txt';
fs.unlink(FilePath,(err) =>
{
    if(err){
        console.error(err);
        return;
    }
    console.log('file has been deleted');
});