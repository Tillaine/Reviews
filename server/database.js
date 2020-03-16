const mysql = require('mysql')
// ***********************************
// db Connection
// ***********************************
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    database: 'reviews_db'
});

// database connection 
connection.connect(function (err) {
    if(err){
        if(err) {
            console.log('database err', err);
        } else {
            console.log('moves_db connected')
        }
    }
});

//get a given number of reviews 
getSomeReviews = (amountOfreviews) => {
    const queryString = `SELECT * FROM reviews WHERE id < ${amountOfreviews + 1}`
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, reviews) => {
            if (err) { reject(err) }
            else { resolve(reviews) }
        })

    })
}

//get reviews that include search term 

getRelevantReviews = (searchTerm) => {
    searchTerm = searchTerm.replace(/['"]+/g, '')
    const queryString = `SELECT * FROM reviews WHERE message LIKE "%${searchTerm}%"` 
    return new Promise((resolve, reject) => {
        connection.query(queryString, (err, reviews) => {
            if (err) { reject(err) }
            else { resolve(reviews) }
        })

    })
}



const ipsum = `I'm baby locavore venmo irony, everyday carry meh tofu stumptown skateboard polaroid VHS neutra. Sartorial +1 chambray forage franzen neutra. Pop-up vaporware bitters forage semiotics vegan, shaman tilde. Photo booth typewriter XOXO kombucha, mixtape helvetica tousled lumbersexual dreamcatcher franzen blog art party. Chartreuse mustache woke, quinoa blog semiotics fingerstache dreamcatcher cliche disrupt microdosing helvetica subway tile unicorn occupy. Hammock sartorial brunch live-edge post-ironic, cardigan cray shaman raclette crucifix hexagon poke coloring book gastropub woke. Umami scenester tote bag woke adaptogen. Cold-pressed flannel next level kale chips lumbersexual, distillery hammock scenester stumptown bushwick brunch kitsch aesthetic migas. Paleo hot chicken quinoa vape plaid. Microdosing hot chicken tumblr vice, man bun authentic lo-fi pop-up lumbersexual squid. Taxidermy slow-carb tilde you probably haven't heard of them, gochujang selfies af aesthetic roof party cliche umami helvetica snackwave XOXO church-key. Artisan shoreditch taxidermy kale chips mlkshk thundercats tacos. Brunch kombucha lyft live-edge jean shorts shabby chic tousled roof party. Post-ironic glossier literally schlitz kickstarter selvage woke. Marfa tbh yuccie, iceland flannel jean shorts pitchfork skateboard. You probably haven't heard of them ramps thundercats, tumeric deep v organic echo park biodiesel jean shorts irony mlkshk selvage slow-carb gentrify af. Mustache forage williamsburg, plaid schlitz kitsch neutra hammock vape shaman. PBR&B selfies tousled, portland raclette cardigan tbh franzen brunch kale chips yr. Copper mug fingerstache literally cronut chicharrones slow-carb actually live-edge. Gochujang selfies craft beer, chartreuse marfa everyday carry raclette iPhone yuccie cronut. Etsy PBR&B banjo schlitz lyft banh mi truffaut disrupt echo park succulents readymade sriracha humblebrag unicorn. Poutine tbh ugh forage cred freegan helvetica four loko, knausgaard keffiyeh. Pug helvetica brooklyn, try-hard gentrify keytar four loko sartorial franzen pinterest fashion axe. Listicle succulents hot chicken bitters lomo kombucha bicycle rights synth tbh swag. Vape typewriter retro, slow-carb coloring book man braid mixtape next level letterpress raw denim viral craft beer beard. Migas pop-up bicycle rights craft beer, whatever slow-carb sriracha roof party XOXO chillwave mlkshk shaman umami shoreditch paleo. Keffiyeh cred fashion axe vape cronut coloring book. I'm baby try-hard hot chicken fanny pack cloud bread pok pok banh mi messenger bag green juice stumptown kinfolk adaptogen locavore shoreditch pork belly. Selvage tumeric synth affogato 90's lyft hexagon roof party portland fixie quinoa. Austin flannel banh mi chartreuse gastropub. Coloring book chambray man braid squid lomo ramps messenger bag subway tile. Organic raclette lo-fi cliche godard gentrify la croix tofu chia selvage actually. Banh mi lomo edison bulb neutra, cronut chicharrones twee. Gentrify whatever truffaut brooklyn hashtag fingerstache semiotics kogi. Authentic mixtape raclette seitan, irony messenger bag iPhone activated charcoal butcher meggings slow-carb biodiesel. 8-bit raw denim tousled aesthetic. Roof party chillwave selfies, pinterest snackwave lo-fi meditation. Fixie green juice single-origin coffee chartreuse cliche tofu lumbersexual. Hexagon schlitz listicle hashtag irony pabst, polaroid deep v austin leggings hella cliche flannel artisan DIY. Small batch typewriter tousled yuccie forage intelligentsia austin glossier readymade green juice seitan banjo. Mumblecore single-origin coffee distillery, green juice flannel butcher four loko master cleanse hammock hella 8-bit. Umami banh mi lo-fi, gluten-free yr fingerstache keffiyeh vape street art. Health goth disrupt waistcoat try-hard, yuccie raw denim poke quinoa cardigan poutine. Normcore mustache man braid skateboard chia, post-ironic green juice. Craft beer art party fashion axe, hot chicken fanny pack chartreuse chicharrones. Paleo green juice succulents PBR&B messenger bag hexagon pabst 8-bit YOLO +1 tattooed hella. Brooklyn slow-carb YOLO fashion axe bicycle rights, hexagon roof party stumptown hashtag tattooed offal chia. Master cleanse beard next level artisan, tbh pour-over bespoke mixtape organic letterpress adaptogen lyft. Letterpress dreamcatcher cronut fanny pack +1 bushwick. Lyft viral air plant direct trade. Squid vinyl letterpress, kale chips locavore freegan banh mi hot chicken williamsburg waistcoat hammock ennui prism. Marfa bespoke hella green juice synth la croix tofu roof party glossier cliche man bun gluten-free banh mi air plant. Chartreuse mlkshk seitan freegan you probably haven't heard of them, kickstarter migas echo park sartorial brunch. Venmo occupy before they sold out locavore. Street art drinking vinegar green juice direct trade semiotics normcore. Air plant fingerstache distillery asymmetrical mlkshk cray bicycle rights. Seitan pok pok farm-to-table food truck post-ironic twee, chartreuse taiyaki swag. Next level man braid readymade, waistcoat pok pok hell of flexitarian organic. Dummy text? More like dummy thicc text, amirite? Lorem Ispum is a choke artist. It chokes! Some people have an ability to write placeholder text… It’s an art you’re basically born with. You either have it or you don’t. You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. The best taco bowls are made in Trump Tower Grill. I love Hispanics! Lorem Ipsum is the single greatest threat. We are not – we are not keeping up with other websites. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. Some people have an ability to write placeholder text… It’s an art you’re basically born with. You either have it or you don’t. All of the words in Lorem Ipsum have flirted with me – consciously or unconsciously. That’s to be expected. Look at these words. Are they small words? And he referred to my words – if they’re small, something else must be small. I guarantee you there’s no problem, I guarantee. That other text? Sadly, it’s no longer a 10. That other text? Sadly, it’s no longer a 10. We have so many things that we have to do better… and certainly ipsum is one of them. An ‘extremely credible source’ has called my office and told me that Lorem Ipsum’s birth certificate is a fraud. I don’t think anybody knows it was Russia that wrote Lorem Ipsum, but I don’t know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok? The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I think my strongest asset maybe by far is my temperament. I have a placeholding temperament. An ‘extremely credible source’ has called my office and told me that Lorem Ipsum’s birth certificate is a fraud. That other text? Sadly, it’s no longer a 10. Lorem Ipsum is FAKE TEXT! This placeholder text is gonna be HUGE. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. The other thing with Lorem Ipsum is that you have to take out its family. All of the words in Lorem Ipsum have flirted with me – consciously or unconsciously. That’s to be expected. Lorem Ipsum is the single greatest threat. We are not – we are not keeping up with other websites. I think the only difference between me and the other placeholder text is that I’m more honest and my words are more beautiful. You have so many different things placeholder text has to be able to do, and I don’t believe Lorem Ipsum has the stamina. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. I have a 10 year old son. He has words. He is so good with these words it’s unbelievable. Despite the constant negative ipsum covfefe. You’re disgusting. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, I can't do it. I just can't do it. It's inappropriate. It's not nice. The best taco bowls are made in Trump Tower Grill. I love Hispanics! You could see there was text coming out of her eyes, text coming out of her wherever. Be careful, or I will spill the beans on your placeholder text. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you know, shot. Lorem Ipsum is FAKE TEXT! If Trump Ipsum weren’t my own words, perhaps I’d be dating it. An 'extremely credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected.`

const messages = ipsum.split('. ')

updateMessages = () => {
    randomMessage = () => messages[Math.floor(Math.random() * messages.length)]
    for (let id = 0; id < 200; id++) {
        queryString = `UPDATE reviews SET message = "${randomMessage() + ". " + randomMessage()}" WHERE id=${id}`
        connection.query(queryString, (err) => {
            if(err) { console.log(err) }
        })
    }
}

updateMessages();

module.exports = { connection, getSomeReviews, getRelevantReviews }

