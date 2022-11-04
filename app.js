// 1) show rating by *

/* function showRating(rating) {
    let ratings = "";
        for (let i = 0; i < Math.floor(rating); ++i) {
            ratings = ratings + "*"
            if (i !== Math.floor(rating) - 1) {
                ratings = ratings + " "
            }
        }
        if (rating % Math.floor(rating) !== 0) {
            ratings = ratings + " ."
        }
        return ratings; 
    }

console.log(showRating(4.5)); */


/* function showRating(rating) {
    let ratings = "";
        for (let i = 0; i < Math.floor(rating); ++i) {
            ratings = ratings + "*"
            if (i !== Math.floor(rating) - 1) {
                ratings = ratings + " "
            }
        }

 */
        function showRating(rating) {
            let ratings = "";
                for (let i = 0; i < Math.floor(rating); ++i) {
                    ratings = ratings + "*"
                    if (i !== Math.floor(rating) - 1) {
                        ratings = ratings + " "
                    }
                }
                if (rating % Math.floor(rating) !== 0) {
                    ratings = ratings + " ."
                }
                return ratings; 
            }
        
        console.log(showRating(4.5));

function showRating(rating) {
    // initialise an empty string
    let ratings = ""; 
    // loop a star for every iteration
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings = ratings + "*"
    // if its not the last iteration add a space
        if (i !== Math.floor(rating) - 1) {
        ratings = ratings + " "
    }
}
if (rating % Math.floor(rating) !== 0) {
    ratings = ratings + " ."
}
    // if the number is not an integer 
    //add a full stop
    // return
    return ratings;
}

console.log(showRating(4.5))