// API URL: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

// var myQuizData = null;


//     fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
//     .then(response=> response.json())
//     .then(function(json) {
//         myQuizData = json;
//         console.log(json);
        
//     })

//     console.log(myQuizData)



// VIEWMODELS
// =============================================================================
const appViewModel = new Vue({
    el: '#quiz',


    data() {
        return {
            category: null,
            questions: []
        }
    },

    mounted() {
        this.getData()
    },

    methods: {
        getData() {  
            var self = this;          
            fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
            .then(response=> response.json())
            .then((json) => {
                this.category = json.results[0].category;
                json.results.forEach(function(element, i){
                    self.questions.push(element.question)
                    console.log(element, i);
                })  
                    
            })
        }
    }
});