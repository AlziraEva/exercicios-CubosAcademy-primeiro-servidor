const express = require('express')
const app = express()

let minutos = 0
let segundos = 0
let setinterval

app.get('/', (req, res) => {

    res.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, '0')} minutos e ${segundos.toString().padStart(2, '0')} segundos`)
})

function cronometro() {
    setinterval = setInterval(() => {
        segundos++
        if (segundos > 60) {
            segundos = 0
            minutos++
        }

    }, 1000)
}

app.get('/iniciar', (req, res) => {
    cronometro()
    res.send('Cronômetro iniciado!')
})


app.get('/pausar', (req, res) => {
    clearInterval(setinterval)
    res.send('Cronômetro pausado!')
})


app.get('/continuar', (req, res) => {
    cronometro()
    res.send('Cronômetro continuando!')
})

app.get('/zerar', (req, res) => {
    minutos = 0
    segundos = 0
    res.send('Cronômetro zerado!')
})

app.listen(8000)
