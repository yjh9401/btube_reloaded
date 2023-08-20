const mockUser={
    username:"bnb",
    loggedIn:true
}
//const videos=[];

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

export const trendings = (req, res) => {
    res.render("home", { pageTitle : "Home", mockUser, videos });
}
export const watch = (req, res) => {
    const {id}=req.params;
    console.log(`id ::: ${id}`)
    const video=videos[id-1]
    res.render('watch', {pageTitle:"Watch",video:video});
}
export const getEdit = (req, res) => {
    const {id}=req.params;
    console.log(`id ::: ${id}`)
    const video=videos[id-1]
    res.render('edit', {pageTitle:"Edit",video:video});
}
export const postEdit = (req, res) => {
    const {id}=req.params;
    console.log(`id ::: ${id}`)
    const {title}=req.body;
    console.log(`title ::: ${title}`)
    const video=videos[id-1]
    videos[id-1].title=title;
    return res.redirect(`/videos/${id}`);
}
export const upload = (req, res) => res.send("videos upload!!! {videoController}");