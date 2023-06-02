var mostWordsFound = function(sentences) {
    var maxSentence = sentences[0];
    var maxWords = maxSentence.split(" ").length;

    for (var i = 1; i < sentences.length; i++) {
        var currentSentence = sentences[i];
        var currentWords = currentSentence.split(" ").length;

        if (currentWords > maxWords) {
            maxSentence = currentSentence;
            maxWords = currentWords;
        }
    }

    return maxWords;
};