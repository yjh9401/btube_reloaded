const mockUser={
    username:"bnb",
    loggedIn:true
}
const videos=[];
/*
const videos=[
    {
        title: "first video",
        rating: 5,
        comment: 2,
        createAt: "2 minute ago",
        views: 52,
        id: 1
    },
    {
        title: "second video",
        rating: 3,
        comment: 15,
        createAt: "1 month ago",
        views: 61,
        id: 2
    },
    {
        title: "third video",
        rating: 3,
        comment: 108,
        createAt: "1.5 month ago",
        views: 1088,
        id: 3
    },
]; //mock up data 만들기, array의 특징 length를 가진다
*/
export const trendings = (req, res) => res.render("home", { pageTitle : "Home", mockUser, videos });
export const search = (req, res) => res.send("search video!! {videoController}");

export const upload = (req, res) => res.send("videos upload!!! {videoController}");
export const see = (req, res) => {
    res.send(`videos ${req.params.id} see!!! {videoController}`);
}
export const edit = (req, res) => {
    res.send(`videos ${req.params.id} edit!!! {videoController}`);
}
export const remove = (req, res) => {
    res.send(`videos ${req.params.id} remove!!! {videoController}`);
}