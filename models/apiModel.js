
class ModelApi {
    constructor(data) {
        this.name = data.name,
            this.gender = data.gender,
            this.img = data.img,
            this.psiPowers = data.psiPowers.img
    };
}

module.exports = ModelApi;