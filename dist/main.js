const renderer = new Renderer()
const api = new APIManager(renderer)

const loadPage = function()
{
    api.getDataFromDB()
}

const handleSearch = async function()
{
    let cityName = $('#city-input').val()
    if(cityName != "")
    {
        $('#city-input').val('')
        api.getCityData(cityName)
    }
    else
    {
        alert("Insert an city name")
    }
 }


$('.city-container').on('click','.save-button',function()
{
    const name = $(this).siblings('.city-degree-name').children(".name").text()
    api.saveCity(name)
})


$('.city-container').on('click','.remove-button',function()
{
    const name = $(this).siblings('.city-degree-name').children(".name").text()
    api.removeCity(name)
})

loadPage()