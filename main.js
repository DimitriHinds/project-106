function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CpeJFaktP/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
var cat = 0;
var dog = 0;
var cow = 0;
var lion = 0;
function gotResults(error, results)
{
    if (error){
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Detected Cat - '+cat+'  Detected Dog - '+dog+'  Detected Cow - '+cow+'  Detected Lion - '+lion;
        document.getElementById("result_confidence").innerHTML = 'Detected sound is - '+results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('pic');

        if (results[0].label == "Mooing")
        {
            img.src = 'cow.png';
            cow = cow+1;
        }
        else if (results[0].label == "Barking")
        {
            img.src = 'dog.png';
            dog = dog+1;
        }
        else if (results[0].label == "Meowing")
        {
            img.src = 'cat.png';
            cat = cat+1;
        }
        else if (results[0].label == "Roaring")
        {
            img.src = 'lion.png';
            lion = lion+1;
        }
        else
        {
            img.src = 'ear.png'
        }
    }
}