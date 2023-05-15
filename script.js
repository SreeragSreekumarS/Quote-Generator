var quotes = new Array();
quotes[0]="“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[1]="“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[2]="“It is only after you have stepped outside your comfort zone that you begin to change, grow, and transform.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp- Roy T. Bennett";
quotes[3]="“Do what is right, not what is easy nor what is popular.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[4]="“Success is not how high you have climbed, but how you make a positive difference to the world.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[5]="“Pursue what catches your heart, not what catches your eyes.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[6]="“Start each day with a positive thought and a grateful heart.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[7]="“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[8]="“Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Steve Maraboli";
quotes[9]="“Never lose hope. Storms make people stronger and never last forever.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[10]="“Do not fear failure but rather fear not trying”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[11]="“Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Zig Ziglar";
quotes[12]="“Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Steve Maraboli";
quotes[13]="“You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[14]="“Let the improvement of yourself keep you so busy that you have no time to criticize others.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[15]="“Believe in your infinite potential. Your only limitations are those you set upon yourself.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";
quotes[16]="“The man who moves a mountain begins by carrying away small stones.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Confucius";
quotes[17]="“Happiness is not the absence of problems, it's the ability to deal with them.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Steve Maraboli";
quotes[18]="“The only way of discovering the limits of the possible is to venture a little way past them into the impossible.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Arthur C. Clarke";
quotes[19]="“Be brave to stand for what you believe in even if you stand alone.”<br><br>&nbsp&nbsp&nbsp&nbsp&nbsp-Roy T. Bennett";


let btn = document.getElementById("btn"); 
let textbox = document.getElementById("tb");

function onClick(){
    var i = Math.floor(Math.random() * 20) + 1;
    textbox.innerHTML = quotes[i];
}

btn.addEventListener("click",onClick);

