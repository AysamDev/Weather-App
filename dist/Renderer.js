class Renderer
{
    constructor()
    {
        this.template = $('#city-template').html()
        this.templateScript = Handlebars.compile(this.template)
    }

    renderPlayers(cityData)
    {
        $('.city-container').empty()
        const html =  this.templateScript({cityData})
        $('.city-container').append(html)
    }
}