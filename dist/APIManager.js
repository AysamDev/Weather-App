//This is the class that will manage all your APIs

class APIManager {

    constructor(renderer)
     {
         this.cityData = []
        this.renderer = renderer
    }
    getDataFromDB()
    {
            $.ajax({
                type:"GET",
                url: `/cities`,
                success: (ref) =>
                {
                this.cityData = ref
                }
            });
    }

    getCityData(cityName)
    {
        $.ajax({
            type:"GET",
            url: `/city/${cityName}`,
            success: async (ref) => {
                    const data = await ref
                    const newCity = {
                        name: data.name,
                        temperature: data.main.temp,
                        condition: data.weather.main,
                        conditionPic: data.weather.icon
                    }
                    this.cityData.push(newCity)
                }
            
        });
    }

    saveCity(cityName)
    {
        $.ajax({
            type:"POST",
            data: this.cityData.find((c) =>
                {
                 c.name === cityName
                }),
            dataType: "json",
            url: `/city/${cityName}`,
            success: (result) =>
             {  
                console.log(result)
             }
            
        });
    }

    removeCity(cityName)
    {
        $.ajax({
            type:"DELETE",
            url: `/city/${cityName}`,
            success:  (result) => {
                console.log(result)
                }
        });
    }
}
