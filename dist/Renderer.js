class Renderer
{
    constructor()
    {
        this.template = $('#city-template').html()
        this.templateScript = Handlebars.compile(this.template)
    }

    renderCities(cityData)
    {
        $('.city-container').empty()
        const html =  this.templateScript({cityData})
        console.log(html)
        $('.city-container').append(html)
    }
}