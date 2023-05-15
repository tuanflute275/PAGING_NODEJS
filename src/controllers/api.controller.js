import pool from '../config/connectDB'

let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('select * from product')

    // phân trang
    var page = parseInt(req.query.page) || 1
    var perPage = 8
    var start = (page - 1) * perPage
    var end = page * perPage
    return res.render('home.ejs', { data: rows.slice(start, end) })
}

let getPageCreate = async (req, res) => {
    return res.render('create.ejs')
}

let createNewProduct = async (req, res) => {
    const { name, image, description } = req.body
    await pool.execute('insert into product(name, image, description) values (?, ?, ?)', [name, image, description])
    return res.redirect('/product')
}

module.exports = {
    getHomePage, createNewProduct, getPageCreate
}