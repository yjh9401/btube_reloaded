const mockUser={
    username:"bnb",
    loggedIn:true
}

export const trendings = (req, res) => res.render("home", { pageTitle : "Home", mockUser });
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