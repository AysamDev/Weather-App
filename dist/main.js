const renderer = new Renderer()
const api = new APIManager(renderer)

const loadPage = function()
{
    api.getDataFromDB()
}

const handleSearch = async function()
{
    let cityName = $('#city-input').val()
    $('#city-input').val('')
    api.getCityData(cityName)
}

$('.city-container').on('click','.save-button',function()
{
    const name = $(this).siblings('.name').text()
    api.saveCity(name)
})


$('.city-container').on('click','.remove-button',function()
{
    const name = $(this).siblings('.name').text()
    console.log(name)
    api.removeCity(name)
})

loadPage()