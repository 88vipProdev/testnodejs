const gethomePage = (req,res) => {
    res.send('hello world ! ');
};

const vipPro = (req,res)=>{

    res.render('sample.ejs')
}

module.exports = {
    gethomePage ,vipPro
}