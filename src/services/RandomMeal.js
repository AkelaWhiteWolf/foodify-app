class RandomMeal {
    baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    meal = (async () => {
        let data = await fetch(this.baseURL);
        data = await data.json();
        return data.meals[0];
    })();

    // async getImg() {
    //     let img = await this.meal;
    //     img = img.strMealThumb;
        
    //     return img;
    // }

    // async getName() {
    //     let name = await this.meal;
    //     name = name.strMeal;
        
    //     return name;
    // }

    // async getInstruction() {
    //     let instruction = await this.meal;
    //     instruction = instruction.strInstructions;
        
    //     return instruction;
    // }
};

export default RandomMeal;