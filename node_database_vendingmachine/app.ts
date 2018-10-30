//import { find } from 'lodash';
import express from 'express';
import axios, { AxiosResponse } from 'axios'
import mysql from 'mysql'
import fs from 'fs'
import { RootObject, ProductsItem } from './interfaces';
import * as bodyParser from "body-parser";
// @ts-ignore
//import { passwordForDatabase, passwordForGMail } from './passwords';
import * as nodemailer from "nodemailer";

const app = express();

//create connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'vending_machine_4'
});

//make connection
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

//-------------------CREATE TABLES----------------------------------------------------------------
//routes for creating tables in your database do this before seeding
app.get('/createtables', (req, res) => {
    let non_alcoholic_beers = `CREATE TABLE non_alcoholic_beers(id int AUTO_INCREMENT, ean VARCHAR(255) NOT NULL, title VARCHAR(255),
    price DECIMAL(6,2) NOT NULL, stock INTEGER NOT NULL, category VARCHAR(255),
    img_path VARCHAR(255) NOT NULL, description MEDIUMTEXT, table_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)
    )`;
    db.query(non_alcoholic_beers, (err, result) => {
        if (err) throw err;
        console.log('non_alcoholic_beers table created...');
    });

    let beers = `CREATE TABLE beers(id int AUTO_INCREMENT, ean VARCHAR(255) NOT NULL, title VARCHAR(255),
    price DECIMAL(6,2) NOT NULL, stock INTEGER NOT NULL, category VARCHAR(255), 
    img_path VARCHAR(255) NOT NULL, description MEDIUMTEXT, table_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)
    )`;
    db.query(beers, (err, result) => {
        if (err) throw err;
        console.log('beers table created...');

    });

    let redWine = `CREATE TABLE red_wines(id int AUTO_INCREMENT, ean VARCHAR(255) NOT NULL, title VARCHAR(255),
    price DECIMAL(6,2) NOT NULL, stock INTEGER NOT NULL, category VARCHAR(255), 
    img_path VARCHAR(255) NOT NULL, description MEDIUMTEXT, table_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)
    )`;
    db.query(redWine, (err, result) => {
        if (err) throw err;
        console.log('red-wine table created...');

    });
  

    let liquor = `CREATE TABLE liquor(id int AUTO_INCREMENT, ean VARCHAR(255) NOT NULL, title VARCHAR(255),
    price DECIMAL(6,2) NOT NULL, stock INTEGER NOT NULL, category VARCHAR(255), 
    img_path VARCHAR(255) NOT NULL, description MEDIUMTEXT, table_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)
    )`;
    db.query(liquor, (err, result) => {
        if (err) throw err;
        console.log('liquor table created...');

    });
    res.send('All tables are created');
});

//36778

   //-------------------FUNCTIONS----------------------------------------------------------------

   let seedDrinks = (data: ProductsItem[], table: string, category: string) => {
    data.forEach(item => {
        let drink = {
            ean: item.ean, title: item.title, price: item.offerData.offers[0].price,
            stock: 4, category: category, img_path: item.images[5].url, description: item.longDescription,
            table_name: table
        };
        let sql = `INSERT INTO ${table} SET ?`;
        let query = db.query(sql, drink, (err, result) => {
            console.log('in database');
            if (err) throw err;
            console.log(result);
        });
    });
}

//-------------------SEED END POINTS----------------------------------------------------------------
app.get('/seed/non-alcoholic-beers', (req, res) => {
    let content: ProductsItem[];

    if (fs.existsSync('./non-alcoholic-beers.json')) {
        fs.readFile('./non-alcoholic-beers.json', 'utf8', (err, cont) => {
            console.log('file is read');
            content = JSON.parse(cont);
            res.send(content);
            seedDrinks(content, 'non_alcoholic_beers', 'non alcoholic beer');
        });
    } else {
        axios.get('https://api.bol.com/catalog/v4/lists/?ids=4268792077&limit=40&apikey=A1588DB3C75F426196E5C3A7A64887A9&MediaEntry=true&includeAttributes=true&format=json')
            .then((response: AxiosResponse<RootObject>) => {
                content = response.data.products;
                res.send(content);
                seedDrinks(content, 'non_alcoholic_beers', 'non alcoholic beer');
                fs.writeFile('non-alcoholic-beers.json', JSON.stringify(content, null, 2), (err) => {
                    console.log('file is written');
                });
            })
    }
})

app.get('/seed/beers', (req, res) => {
    let content: ProductsItem[];

    if (fs.existsSync('./beers.json')) {
        fs.readFile('./beers.json', 'utf8', (err, cont) => {
            console.log('file is read');
            content = JSON.parse(cont);
            res.send(content);
            seedDrinks(content, 'beers', 'beer');
        });
    } else {
        axios.get('https://api.bol.com/catalog/v4/lists/?ids=36771&limit=40&apikey=A1588DB3C75F426196E5C3A7A64887A9&MediaEntry=true&includeAttributes=true&format=json')
            .then((response: AxiosResponse<RootObject>) => {
                content = response.data.products;
                res.send(content);
                seedDrinks(content, 'beers', 'beer');
                fs.writeFile('beers.json', JSON.stringify(content, null, 2), (err) => {
                    console.log('file is written');
                });
            })
        }
    })

    app.get('/seed/red-wines', (req, res) => {
        let content: ProductsItem[];

        if (fs.existsSync('./red-wine.json')) {
            fs.readFile('./red-wine.json', 'utf8', (err, cont) => {
                console.log('file is read');
                content = JSON.parse(cont);
                res.send(content);
                seedDrinks(content, 'red_wines', 'wine');
            });
        } else {
            axios.get('https://api.bol.com/catalog/v4/lists/?ids=4268805223&limit=40&apikey=A1588DB3C75F426196E5C3A7A64887A9&MediaEntry=true&includeAttributes=true&format=json')
                .then((response: AxiosResponse<RootObject>) => {
                    content = response.data.products;
                    console.log(content);
                    //console.log(response);
                    res.send(content);
                    seedDrinks(content, 'red_wines', 'wine');
                    fs.writeFile('red-wine.json', JSON.stringify(content, null, 2), (err) => {
                        console.log('file is written');
                    });
                })
        }
    })

    app.get('/seed/liquor', (req, res) => {
        let content: ProductsItem[];

        if (fs.existsSync('./liquor.json')) {
            fs.readFile('./liquor.json', 'utf8', (err, cont) => {
                console.log('file is read');
                content = JSON.parse(cont);
                res.send(content);
                seedDrinks(content, 'liquor', 'liquor');
            });
        } else {
            axios.get('https://api.bol.com/catalog/v4/lists/?ids=36778&limit=40&apikey=A1588DB3C75F426196E5C3A7A64887A9&MediaEntry=true&includeAttributes=true&format=json')
                .then((response: AxiosResponse<RootObject>) => {
                    content = response.data.products;
                    console.log(content);
                    //console.log(response);
                    res.send(content);
                    seedDrinks(content, 'liquor', 'liquor');
                    fs.writeFile('liquor.json', JSON.stringify(content, null, 2), (err) => {
                        console.log('file is written');
                    });
                })
        }
    })


    //-------------------API END POINTS----------------------------------------------------------------
    //get all drinks per category. first create tabels and then seed them.
    //---------GET ALL--------

    app.get('/api/get-all-drinks', (req, res) => {
        let sql = `SELECT * FROM beers 
        UNION SELECT * FROM non_alcoholic_beers 
        UNION SELECT * FROM red_wines
        UNION SELECT * FROM liquor`;
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.send(results);
        })
    })

    app.get('/api/get-all-non-alcoholic-beers', (req, res) => {
        let sql = 'SELECT * FROM non_alcoholic_beers ';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.send(results);
        })
    })

    app.get('/api/get-all-beers', (req, res) => {
        let sql = 'SELECT * FROM beers';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.send(results);
        })
    })

    app.get('/api/get-all-wines', (req, res) => {
        let sql = 'SELECT * FROM red_wines';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.send(results);
        })
    })
    app.get('/api/get-all-wines', (req, res) => {
        let sql = 'SELECT * FROM red_wines';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.send(results);
        })
    })

    app.get('/api/get-all-liquor', (req, res) => {
        let sql = 'SELECT * FROM liquor';
        let query = db.query(sql, (err, results) => {
            if (err) throw err;
            // console.log(results);
            res.send(results);
        })
    })

    app.get('/', (req, res) => {
            res.send('node-express-server is running');
        })
    })


//------------------ADMIN TABLE UPDATE-----------------\\

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/update-item-table', function(req, res) {
    console.log("Command to update table received");
    console.log("Received the follow data:");
    console.log(req.body);
    console.log('-------------------------');

    if (req.body[0].address === null) {
        console.log("Server did not detect proper email adress");
        return;
    }
    
    let sql = "UPDATE " + req.body[1] + " SET "
    for (let keyCounter = 0; keyCounter < Object.keys(req.body[0]).length; keyCounter++) {
        // @ts-ignore
        const entries = Object.entries(req.body[0])[keyCounter];
        if (entries[0] !== 'ean') {
            if (typeof(entries[1]) === "number") {
                sql += `${entries[0]} = ${entries[1]}, `;
            } else {
                sql += `${entries[0]} = '${entries[1]}', `;
            }
        }
    }
    sql = sql.substring(0, sql.length - 2);
    sql += ` WHERE ean = ${req.body[0].ean};`;
    console.log("Updating MySQL table with the following command:")
    console.log(sql + '\n');

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Updated table");
    });
    console.log('-------------------------');
});

//------------------ADMIN TABLE REMOVE PRODUCT-----------------\\

app.post('/api/remove-product', function(req, res) {
    console.log("Command to delete product from table received");
    console.log("Received the following product EAN number:");
    console.log(req.body + '\n');

    let sql = `DELETE FROM ${req.body[1]} WHERE ean = ${req.body[0].ean};`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Removed product from table");
    })
    console.log('-------------------------');
})

//------------------ADMIN TABLE ADD PRODUCT-----------------\\

app.post('/api/add-new-product', function(req, res) {
    console.log("Command to add new product to beer table received");
    console.log("Received the follow data:");
    console.log(req.body);
    
    let sql = `INSERT INTO ${req.body.tablename}(ean, title, price, stock, category, img_path, description, table_name) ` +
    `VALUES('${req.body.ean}', '${req.body.title}', ${req.body.price}, ${req.body.stock}, ` +
    `'${req.body.category}', '${req.body.img_path}', '${req.body.description}', '${req.body.tablename}');`

    console.log("Updating MySQL table with the following command:")
    console.log(sql);

    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Added product to table");
    })

    console.log('-------------------------');
});

//------------------SEND PRODUCTS BY MAIL------------------\\

app.post('/api/send-products', function(req, res) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'peperone60@gmail.com',
          pass: passwordForGMail
        }
    });

    console.log("Command to send ordered products received");
    console.log("Received the following data:");
    console.log(req.body);

    let htmlText = `<html>\n\t<head>\n\t\t<meta charset="utf-8">\n\t\t<style>\n\t\t\t` +
                   `body {background-color: white}\n\n\t\t\t.imageClass {height: 20%; width: 20%;}` + 
                   `\n\t\t</style>\n\t</head>\n\t<body>`;

    for (let iteration = 0; iteration < req.body.images.length; iteration++) {
        for (let amountOfItems = 0; amountOfItems < req.body.images[iteration][1]; amountOfItems++) {
            htmlText += `\n\t\t<img class='imageClass' src='${req.body.images[iteration][0]}'>`;
        }
        htmlText += '\n\t\t<br><hr>';
    }

    htmlText += '\n\t</body>\n</html>'

    const mailOptions = {
        from: 'peperone60@gmail.com',
        to: req.body.address,
        subject: 'Your products are here babyyy',
        html: htmlText
      };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

    console.log('Products sent');
    console.log('-------------------------');
})

     //---------GET PER ID--------  

    app.get('/api/get-one-drink/:ean/:table_name', (req, res) => {
        let sql = `SELECT * FROM ${req.params.table_name} WHERE ean = ${req.params.ean}`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result[0]);
        })
    })


    //-----GET-STOCK-LEVEL
    app.get('/api/get-stock-level/:ean', (req, res) => {
        let sql = `SELECT * FROM beers WHERE ean = ${req.params.ean} limit 1`;
        let query = db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(JSON.stringify(result[0].stock));
            res.status(404);
        })
    })

    //-------Decrease-stock--
    app.get('/api/decrease-stock-level/:ean/:qty/:table_name', (req, res) => {
        let currentStockLevel: any;
        let sqlOne = `SELECT * FROM ${req.params.table_name} WHERE ean = ${req.params.ean} limit 1`;

        db.query(sqlOne, (err, result) => {
            if (err) {
                throw err;
            } else {
                currentStockLevel = parseInt(JSON.stringify(result[0].stock));
                if (currentStockLevel < parseInt(req.params.qty)) {
                    res.send(JSON.stringify(currentStockLevel === 0 ? 'Out of stock.' : `Only ${currentStockLevel} item(s) in stock.`));
                } else {
                    let sql = `UPDATE ${req.params.table_name} SET stock = (stock - ${req.params.qty}) WHERE ean = ${req.params.ean}`;
                    db.query(sql, (err, result) => {
                        if (err) throw err;
                        let newStockLevel = currentStockLevel - parseInt(req.params.qty);
                        console.log(typeof (newStockLevel));
                        res.send(JSON.stringify(newStockLevel));
                        //res.status(404);
                    })
                }
            }
        })
    })


    //--------INCREASE STOCK BY 1

    app.get('/api/increase-stock-level/:ean/:table_name', (req, res) => {
        let currentStockLevel: any;
        let sqlOne = `SELECT * FROM ${req.params.table_name} WHERE ean = ${req.params.ean} limit 1`;

        db.query(sqlOne, (err, result) => {
            if (err) {
                throw err;
            } else {
                currentStockLevel = parseInt(JSON.stringify(result[0].stock));

                let sql = `UPDATE ${req.params.table_name} SET stock = (stock + 1) WHERE ean = ${req.params.ean}`;
                db.query(sql, (err, result) => {
                    if (err) throw err;
                    let newStockLevel = currentStockLevel + 1;
                    res.send(JSON.stringify(newStockLevel));
                })
            }
        })
    })


 

    //-------------------SERVER----------------------------------------------------------------
    app.listen('3000', () => {
        console.log('server starting on port 3000');
    });




