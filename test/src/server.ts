import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port: number = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
})