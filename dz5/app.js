const userAge = prompt('What year you where born?');
const userCity = prompt('Which city do you live in?');
const userFavSport = prompt(' What’s your favorite sport');




if (userAge && userCity && userFavSport) {
    
    
    let age = new Date().getFullYear() - userAge; // 2023 - userAge;
    let city = "";
    
    if(userCity == "Kiev" || userCity == "Kyiv"){
        city = "You live in the capital of Ukraine!"
    }else if(userCity == "Washington"){
        city = "You live in the capital of USA!"
    }else if(userCity == "London"){
        city = "You live in the capital of Great Britain!"
    }else{
        city = "You live in " + userCity
    };
    
    
    
    
    let favSport = ""; 
    
    switch (userFavSport) {
        case "football":
            favSport = "Great choise! You wanna be as Cristiano Ronaldo?";
            break;
            case "Football":
                favSport = "Great choise! You wanna be as Cristiano Ronaldo?";
                break;
                case "boxing":
                    favSport = "Great choise! You wanna be as Floyd Mayweather Jr. ?";
                    break;
                    case "Boxing":
                        favSport = "Great choise! You wanna be as Floyd Mayweather Jr. ?";
                        break;
                        case "formula one":
                            favSport = "Great choise! You want to be as Michael Schumacher ? ";
                            break;
                            case "formula 1":
                                favSport = "Great choise! You want to be as Michael Schumacher ? ";
                                break;
                                case "Formula one":
                                    favSport = "Great choise! You want to be as Michael Schumacher ? ";
                                    break;
                                    case "Formula 1":
                                        favSport = "Great choise! You want to be as Michael Schumacher ? ";
                                        break;
                                        
                                        
                                        default:
                                            favSport = ("Good sport choise");
                                        };
                                        
                                    
    alert(`Your age is ${age}, \n${city}, \n${favSport}`);
                                        
                                        
                                        
                                        
                                        
                                        
}else{
                                        
if(userAge == null){
    alert("It is a pity that you cancelled your age input")
        }else if(userCity == null){
            alert("It is a pity that you cancelled your city choise") 
        }else if(userFavSport == null){
            alert("It is a pity that you cancelled your sport choise")
        };

};
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                    
                                