$(function () {
    let dom = document.createElement("span");
    
    // Function to display each item with a delay
    function displayItem(index) {
        if (index >= config.texts.length) {
            return;
        }
        
        let item = config.texts[index];
        let p = document.createElement("p");
        p.innerHTML = item;
        
        if (config.imgs && config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        
        dom.appendChild(p);
        $("#texts-container").append(p);
        
        setTimeout(function() {
            displayItem(index + 1);
        }, 2000); // Adjust the delay time here (1000 milliseconds = 1 second)
    }
    
    // Start displaying items from the first one
    displayItem(0);
});


$(function () {
    for (let k in config.desc) {
        let dom = $("#" + k);
        if (dom.length > 0 && config.desc[k]) {
            dom.html(config.desc[k]);
        }
    }
});
