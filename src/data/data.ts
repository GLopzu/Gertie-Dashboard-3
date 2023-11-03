export const assets = async () => {
    try{
    const Assets = fetch("https://manofmany.com/entertainment/movies-tv/best-adult-cartoons").then(res => res.json());
    return Assets;
    } catch (error){
        console.log(error)
    }
}



