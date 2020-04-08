const models = require('../models');
const axios = require('axios')

exports.syncJob = function (req, res) {
    axios.get('https://jobs.github.com/positions.json?description=&full_time=&location=&lat&long')
        .then(function (response) {
            // handle success
            models.job.bulkCreate(response.data).then(async (savedJob) => {
                const allJobs = await models.job.findAll();
                res.send(allJobs)
            })

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

exports.getJobs = async function (req, res) {
    let offset = (req.query.offset) ? req.query.offset : 0;
    let limit = (req.query.limit) ? req.query.limit : 10;
    let offsetLimit = 0;
    let filter = {};

    if (offset === 1) {
        offsetLimit = 0;
        filter.offset = offsetLimit;
    } else if (offset > 1) {
        offsetLimit = limit * (offset - 1);
        filter.offset = offsetLimit;
    }

    filter.limit = limit;
    if (req.query.filter) {
        filter.where = req.query.filter;
    }


    const allJob = await models.job.findAndCountAll(filter);
    res.send({
        data: allJob.rows,
        count: allJob.count
    })


}