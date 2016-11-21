/**
 * Created by michaelk on 20/11/2016.
 */
var chai        = require('chai');
var expect      = chai.expect;
var should      = chai.should();
var domain      = require('domain');
var SolrClient = require('../../solr-client/solr_client.js');

describe("Solr client test", function()
{
    before("Init testing environment", function (next)
    {
        return next();
    })

    it("test1", function (next)
    {
        var solrUrl = "http://localhost:8983/solr/ML";
        var solrClient = new SolrClient(solrUrl);
        solrClient.search("*:*", function (err, result)
        {
            expect(result.response).to.be.not.null;
            expect(result.response.numFound).to.be.equal(0);

            return next();
        })

    })
})