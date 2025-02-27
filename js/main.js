import {
    getAdjectives
} from "./data.js";

let adjectives;
let sortDirection = "up";

function init() {
    let getAdjectives = getAdjectivesJSON();
    console.log(getAdjectives);

    adjectives = JSON.parse(getAdjectives);
    render();




}

function addSortEvents() {

}

function addVoteEvents() {

}

function sort() {

}

function render() {
    let htmlString = '';

    adjectives.forEach {
        function(adjectives) {
            console.log(adjectives.word, adjectives.score);
            htmlString += "
                < div class="word-item" >

                    <span class="word-score bad">4</span>
<span>ok</span>
<div class="vote-buttens">
<button vatue ="ok" class="upvote-button" > i</buttons>
<button value = "ok" class="downvate-button">f< </button>

</div>
</div >

        


        }

    }

    function upVote(target) {

    }


    function downVote(target) {

    }

    function updateScore(word, scoreChange) {
        const foundIndex = adjectives.findIndex(function (item, index) {
            if (item.word == word) {
                return true
            }
        });

        if (foundIndex != null) {
            let newScore = adjectives[foundIndex]['score'] + scoreChange;
            adjectives[foundIndex]['score'] = Math.round(newScore * 100) / 100;
        }
    }

    init();