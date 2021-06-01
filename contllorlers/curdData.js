
const curdModel = require('../models/curdModel');
//add obj to favorit list
const addFav = async (req, res) => {
    const { gender, name, img, psiPowers } = req.body;
    const slug = name.toLowerCase().split(' ').join('-');
    curdModel.find({ slug: slug }, (erorr, data) => {
        if (data.length > 0) {
            res.send('data alredy exict');
        }
        else {
            const newMod = new curdModel({
                name: name,
                gender: gender,
                img: img,
                psiPowers: psiPowers,
                slug: slug


            });

            newMod.save();
            res.send('add to fav');
        }
    })
};

// read fav from DB
const getFav = async (req, res) => {
    curdModel.find({}, (erorr, data) => {
        res.send(data);
    });
};
// delete fav form DB
const deleteFav = async (req, res) => {
    const slug = req.params.slug;
    curdModel.remove({ slug: slug }, (erorr, data) => {
        if (erorr) {
            res.send('erorr');
        }
        else {
            curdModel.find({}, (erorr, data) => {
                res.send(data);
            });
        }
    });
};

const updateFav = async (req, res) => {
    const { name, gender } = req.body;
    const slug = req.params.slug;
    curdModel.find({ slug: slug }, (erorr, data) => {
        if (erorr) {
            res.send('erorr');
        }
        else {
            data[0].name = name,
                data[0].gender = gender,
                data[0].save();
            res.send(data);
        }

    });
};


module.exports = {
    addFav,
    getFav,
    deleteFav,
    updateFav
}