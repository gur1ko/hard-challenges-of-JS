// 1) show rating by *

function showRating(rating) {
    let ratings = "";
        for (let i = 0; i < Math.floor(rating); ++i) {
            ratings = ratings + "*"
            if (i !== Math.floor(rating) - 1) {
                ratings = ratings + " "
            }
        }
        if (rating % Math.floor(rating) !== 0) {
            console.log('.')
        return ratings; 
    }
}
console.log(showRating(4.5));