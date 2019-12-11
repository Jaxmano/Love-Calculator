function done(){
        var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
        let count1 = 0; 
        let count2 = 0; 
        let name1 = document.getElementById("firstname").value;
        let name2 = document.getElementById("secondname").value;
        if (name1.length != 0 && name2.length != 0) {
                while (name1.length > name2.length){ 
                    name2 = name2 + "a"; 
                }
                while (name2.length > name1.length) { 
                    name1 = name1 + "a"; 
                }
        }

        for (let i = 0; i < name1.length; i++){ 
            for (let j = 0; j < letters.length; j++){ 
                if (name1.charAt(i).toLowerCase() == letters[j]){ 
                    count1 += numbers[j]; 
                }
            }
        }

        for (let i = 0; i < name2.length; i++){
            for (let j = 0; j < letters.length; j++){ 
                if (name2.charAt(i).toLowerCase() == letters[j]){ 
                    count2 += numbers[j];
                }
            }
        }

        let percent;
        if(count2==0 || count1==0){
            document.getElementById("after_submit").innerHTML=(" ");
        }
        else{
        if (count2 == count1 && count2 == 0) { 
        document.getElementById("after_submit").innerHTML=(" ");
        }
        else if (count1 > count2) { 
            percent = (count2 / count1) * 100; 
            document.getElementById("after_submit").innerHTML=(percent.toFixed(1) + "% compatible!");
        }
        else if (count2 > count1) { 
            percent = (count1 / count2) * 100;
            document.getElementById("after_submit").innerHTML=(percent.toFixed(1) + "% compatible!");
        }
        else if (count1 == count2) { 
            percent = 100;
            document.getElementById("after_submit").innerHTML=percent + "% compatible!";
        }
        else {
            document.getElementById("after_submit").innerHTML="Issue in count comparison";
        }
     }
    }
