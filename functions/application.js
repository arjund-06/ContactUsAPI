const { PrismaClient } = require('@prisma/client')

exports.cors = require("cors")({ origin: true });

exports.prisma = new PrismaClient()