let data = [
    {
        id: 0,
        name: "Sarah Michelle",
        features: {
            eyes: 'blue',
            hair: 'brown',
            height: `5'8"`
        }
    
    },
    {
        id: 1,
        name: "John",
        features: {
            eyes: 'green',
            hair: 'blonde',
            height: `5'9"`
        }
    
    },
    {
        id: 2,
        name: "Matt",
        features: {
            eyes: 'blue',
            hair: 'brown',
            height: `6'1"`
        }
    
    }


]

let id = 3;
module.exports = {
    getPosts: (req, res) => {
        return res.status(200).send(data);
    },
    editUser: (req, res) => {
        const {id} = req.params
        const {name} = req.body
         


        let index = -1;

        data.forEach(person => {
            if(person.id=== +id){
                index = i;
            }
        })
        data[index.name = name]
        return res.status(200).send(data)
    }
};