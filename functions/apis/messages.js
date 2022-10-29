const { prisma, cors } = require("../application")

exports.getMessages = async function(req, res) {
    cors(req, res, async() => {
        const r = await prisma.messages.findMany()
        res.send(r);
    })
}

exports.getMessageByEmail = async function(req, res) {
    cors(req, res, async() => {
        const r = await prisma.messages.findMany({
            where: {
                OR: [{ email: { contains: req.params.email } }]
            }
        })
        res.send(r);
    })
}


exports.createMessage = async function(req, res) {
    cors(req, res, async() => {

        console.log("PARAMS", req.params);
        console.log("BODY", req.body);

        const newMessage = await prisma.messages.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                message: req.body.message,
                datetime: req.body.DateTime,
            },
        });

        res.send(newMessage);
    });
}