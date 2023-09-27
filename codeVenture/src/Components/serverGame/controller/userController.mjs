import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:ciaook10@localhost:5432/video");

/* DROP TABLE IF EXISTS gioco; */
const setupDB = async () => {
  try {
    await db.none(`
      

      CREATE TABLE IF NOT EXISTS gioco(
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        password TEXT NOT NULL,
        score INTEGER DEFAULT 0,
        lvl INTEGER DEFAULT 0,
        htmlReward TEXT DEFAULT 'false',
        cssReward TEXT DEFAULT 'false',
        sassReward TEXT DEFAULT 'false',
        jsReward TEXT DEFAULT 'false',
        volumeMusica INTEGER DEFAULT 50,
        volumeEffetti INTEGER DEFAULT 50,
        notifiche TEXT DEFAULT 'false'
      );
    `);

    /* await db.none(`INSERT INTO gioco (name,password) VALUES ('marco','ciaook10')`);
    await db.none(`INSERT INTO gioco (name,password) VALUES ('barry','ciaook10')`); */
    console.log("Database setup completed.");
    
    const result = await db.any("SELECT * FROM gioco");
    console.log("Contenuto del database (tabella 'planets'):");
    console.table(result);

    
  } catch (error) {
    console.error("Error setting up the database:", error);
  }
};

setupDB();

/*˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅  POST  ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅  */
const setNewUser=async(req,res)=>{
  try {
    const {name,password,email}=req.body
    await db.none(`INSERT INTO gioco (name,password,email) VALUES ('${name}','${password}','${email}')`);
    const result = await db.any("SELECT * FROM gioco");
    console.table(result);
    res.status(201).json({msg:"elemento creato"})
  } catch (error) {
    console.log(error);
  }
}

/* serve a settare un nuovo utente */

/*˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄  POST  ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ */






/*˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅   GET  ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ */
const seeAllUsers =async(req,res)=>{
  const result = await db.any("SELECT * FROM gioco");
  console.table(result);
  res.status(200).send(result)

  /* questa serve per prendere la lista di tutti gli utenti */
}

const seeUser= async(req,res)=>{
  const{id}= req.params
  const user = await db.oneOrNone("SELECT * FROM gioco WHERE id=$1",id)
  res.status(200).json(user);

   /* questa serve per prendere un utente tramite l'id */
}

/*˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄  GET  ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ */








/*˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅   PUT  ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ */

const changeName = async(req,res) =>{
  const { id } = req.params;
  const { name } = req.body;
  await db.none('UPDATE gioco SET name=$2 WHERE id=$1',[id,name])
  res.status(200).json({ msg: "Name Change" });
  /* serve per aggiornare il name ,bisogna passare un json di questo tipo {"name": "xxxxxxx"} */
}

const changeEmail = async(req,res) =>{
  const { id } = req.params;
  const { email } = req.body;
  await db.none('UPDATE gioco SET email=$2 WHERE id=$1',[id,email])
  res.status(200).json({ msg: "E-mail Change" });
 /* serve per aggiornare il email ,bisogna passare un json di questo tipo {"email": "xxxxxxx@xxxxx.xx"} */
}

const changePassword = async(req,res) =>{
  const { id } = req.params;
  const { password } = req.body;
  await db.none('UPDATE gioco SET password=$2 WHERE id=$1',[id,password])
  res.status(200).json({ msg: "Password Change" });

  /* serve per aggiornare il password ,bisogna passare un json di questo tipo {"password": "xxxxxxx"} */
}

const setScore = async(req,res)=>{
  const { id } = req.params;
  const { score } = req.body;
  await db.none('UPDATE gioco SET score=$2 WHERE id=$1',[id,score])
  res.status(200).json({ msg: "Score Change" });

  /* serve per aggiornare il punteggio ,bisogna passare un json di questo tipo {"score": 0 (numero)} */
}

const setLvl = async(req,res) =>{
  const { id } = req.params;
  const { lvl } = req.body;
  await db.none('UPDATE gioco SET lvl=$2 WHERE id=$1',[id,lvl])
  res.status(200).json({ msg: "LVL Change" });
  /* serve per aggiornare il livello ,bisogna passare un json di questo tipo {"lvl": 0 (numero)} */
}

const changeHtmlReward = async(req,res) =>{
  const { id } = req.params;
  const { htmlReward } = req.body;
  await db.none('UPDATE gioco SET htmlreward=$2 WHERE id=$1',[id,htmlReward])
  res.status(200).json({ msg: "htmlReward Change" });
  /* serve per aggiornare la reward di html ,bisogna passare un json di questo tipo {"htmlReward":"true" oppure "false"}*/
}

const changeCssReward = async(req,res) =>{
  const { id } = req.params;
  const { cssReward } = req.body;
  await db.none('UPDATE gioco SET cssreward=$2 WHERE id=$1',[id,cssReward])
  res.status(200).json({ msg: "cssReward Change" });
  /* serve per aggiornare la reward di html ,bisogna passare un json di questo tipo {"cssReward":"true" oppure "false"}*/
}

const changeSassReward = async(req,res) =>{
  const { id } = req.params;
  const { sassReward } = req.body;
  await db.none('UPDATE gioco SET sassreward=$2 WHERE id=$1',[id,sassReward])
  res.status(200).json({ msg: "sassReward Change" });
  /* serve per aggiornare la reward di html ,bisogna passare un json di questo tipo {"cssreward":"true" oppure "false"}*/
}

const changeJsReward = async(req,res) =>{
  const { id } = req.params;
  const { jsReward } = req.body;
  await db.none('UPDATE gioco SET jsreward=$2 WHERE id=$1',[id,jsReward])
  res.status(200).json({ msg: "jsReward Change" });
  /* serve per aggiornare la reward di html ,bisogna passare un json di questo tipo {"jsReward":"true" oppure "false"}*/
}

const changeVolumeMusica = async(req,res) =>{
  const { id } = req.params;
  const { volumeMusica } = req.body;
  await db.none('UPDATE gioco SET volumemusica=$2 WHERE id=$1',[id,volumeMusica])
  res.status(200).json({ msg: "volume musica Change" });
  /* serve per aggiornare il volume della musica ,bisogna passare un json di questo tipo {"volumeMusica":50(number)}*/
}

const changeVolumeEffetti = async(req,res) =>{
  const { id } = req.params;
  const { volumeEffetti } = req.body;
  await db.none('UPDATE gioco SET volumeeffetti=$2 WHERE id=$1',[id,volumeEffetti])
  res.status(200).json({ msg: "volume effetti Change" });
  /* serve per aggiornare il volume degli effetti sonori ,bisogna passare un json di questo tipo {"volumeEffetti":50(number)}*/
}

const changeNotifiche = async(req,res) =>{
  const { id } = req.params;
  const { notifiche } = req.body;
  await db.none('UPDATE gioco SET notifiche=$2 WHERE id=$1',[id,notifiche])
  res.status(200).json({ msg: "notifiche Change" });
  /* serve per aggiornare il check delle notifiche ,bisogna passare un json di questo tipo {"notifiche": "true" o "false"}*/
}

/*˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄  PUT  ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ */







/*˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅   DELETE  ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ ˅ */

const deleteById = async(req, res) => {
  const { id } = req.params;
  await db.none(`DELETE FROM gioco WHERE id=$1`,Number(id))
  res.status(200).json({ msg: "UTENTE ELIMINATO" });
};

/*˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄  DELETE  ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ ˄ */
export {setNewUser,seeAllUsers,seeUser,changeName,changeEmail,changePassword,setScore,setLvl,changeHtmlReward,changeCssReward,changeSassReward,changeJsReward,changeVolumeMusica,changeVolumeEffetti,changeNotifiche,deleteById}