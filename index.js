const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const {response} = require("express");
const {replaceWith} = require("cheerio/lib/api/manipulation");

const app = express()

const url = 'https://beacons.ai/'

axios(url)
    .then(response => {
        const html = response.data
        console.log(html)
        const $ = cheerio.load(html)
        const articles = []

        $('.sqseobar2-horizontal', html).each(function (){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                title,
                url
            })
        })
        console.log(articles)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))