import Express from 'express'

const app = Express()

app.get('/', (req,res) => {
    res.send('Hugo')
})

app.listen(8080,() =>  {
    console.log('running now')
})