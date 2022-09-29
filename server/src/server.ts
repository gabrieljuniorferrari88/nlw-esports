import express from 'express'

const app = express()

app.use(express.json())

app.get('/ads', (req, res) => {
	return res.json({ message: "OK" })
})

app.listen(3333, () => {
	console.log(`🚀 Server inicializado na porta 3333!`)
})