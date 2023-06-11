let Parser = require('rss-parser');
let parser = new Parser();
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const ejs = require('ejs')
const cors = require('cors')

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.listen(3001, () => {console.log('run');})
app.get('/', renderFeed)
app.get('/search', renderSearch)
app.post('/search/title', renderSearchTitle)
app.post('/search/category', renderSearchCategory)
app.set('view engine', 'ejs')
 
let items =[]
populateItems()
async function populateItems (){
    let feed = await parser.parseURL('https://thefactfile.org/feed/'); 
    items = feed.items
    console.log(items);
    
    
}

 
function renderFeed(req, res) {
              res.render('pages/index.ejs', {  
            items
        })
            };

function renderSearch(req, res) {
              res.render('pages/search.ejs', {  
            items : []
        })
            };
            
function renderSearchTitle(req, res) {
    const body = req.body
    const title = body.val
              res.render('pages/search.ejs', {  
            items : getPosts(title)
        })
            };
        
function getPosts(title){
    return items.filter(item => item.title.toLowerCase().includes(title.toLowerCase())  )
}

function renderSearchCategory(req, res) {
    const body = req.body
    const category = body.category
              res.render('pages/search.ejs', {  
            items : getPostsCat(category)
        })
            };

function getPostsCat(category){
    
    return items.filter((item) =>{
        let categories = item.categories
        let toLower = categories.map((el) => el.toLowerCase())
        return toLower.includes(category.toLowerCase())  
    }  )
}
    