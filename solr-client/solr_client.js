/**
 * Created by michaelk on 20/11/2016.
 */

var request = require('request');

class SolrClient
{
    constructor(solrUrl)
    {
        this.solrUrl = solrUrl;
    }

    search(query, callback)
    {
        var options =
        {
            url: this.solrUrl + "/select?q=" + query + "&wt=json",
        };

        console.log("SOLR client request: " + options.url);
        request.get(options, function (error, response, body)
        {
            if (error)
            {
                console.error(error);
                return callback(error, null);
            }
            if (response.statusCode != 200)
            {
                console.error("SOLR request: Response status code = " , response.statusCode);
                return callback("SOLR client error (statusCode = " +response.statusCode + ", statusMessage = " + response.statusMessage + ")");
            }
            var jsonResult = null;
            try
            {
                jsonResult = JSON.parse(body);
            }
            catch (err)
            {
                console.error(err);
            }
            return callback(error, jsonResult);
        })
    }

}

module.exports = SolrClient;
