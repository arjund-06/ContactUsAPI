const { prisma, cors } = require("../application")


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