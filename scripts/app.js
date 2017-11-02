// API URL: https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple

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

    
    // once the view is mounted, do these things
    mounted() {
        this.getData()
    },

    methods: {
        getData() {  
            // This will preserve the 'this' context prior to the function below. An arrow function also preserves 'this' context.
            // Is there a better way? TODO convert to arrow function?
            var self = this;

            // Now let's get that API response
            fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
            .then(response=> response.json())
            .then((json) => {
                // assisn the first question's category to the category property -> where is this going? How does actually GET into data() above? 
                this.category = json.results[0].category;

                // We must loop through the results to grab the question property of each object in the array
                // Then write to our own array of questions
                // Is there a better way to do this?!?!?!
                json.results.forEach(function(element, i){
                    self.questions.push(element.question)
                    console.log(element, i);
                })  
                    
            })
        }
    }
});