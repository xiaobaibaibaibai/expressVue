

module.exports = (router) => {

    router.get("/", (req, res) => {
            const data = {
                title: "Oh hi world!",
            };
            req.vueOptions.head.title = "Express-Vue MVC Starter Kit";
            res.renderVue("main.vue", data, req.vueOptions);
        },
    );

}
