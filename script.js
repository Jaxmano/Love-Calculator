function done(){
        var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        // numbers that correspond the the letters
        var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

        let count1 = 0; // corresponds to first name
        let count2 = 0; // corresponds to second name

        let name1 = document.getElementById("firstname").value;
        let name2 = document.getElementById("secondname").value;

        while (name1.length > name2.length&& name1==0 && name2==0){ // if the first name is longer than the second
            name2 = name2 + "e"; // adds e's until the strings are the same length
        }
        while (name2.length > name1.length&& name1==0 && name2==0) { // if the second name is longer than the first
            name1 = name1 + "e"; // adds e's until the strings are the same length
        }

        for (let i = 0; i < name1.length; i++){ // goes through every letter in the first name
            for (let j = 0; j < letters.length; j++){ // goes through the letter array
                if (name1.charAt(i).toLowerCase() == letters[j]){ // if the letter in the first name and letter in the array are the same
                    count1 += numbers[j]; // increments count by corresponding number
                }
            }
        }

        for (let i = 0; i < name2.length; i++){ // goes through every letter in the second name
            for (let j = 0; j < letters.length; j++){ // goes through the letter array
                if (name2.charAt(i).toLowerCase() == letters[j]){ // if the letter in the second name and letter in the array are the same
                    count2 += numbers[j]; // increments count by corresponding number
                }
            }
        }

        let percent;
        if(count2==0 || count1==0){
            document.getElementById("after_submit").innerHTML=(" ");
        }
        else{
        if (count2 == count1 && count2 == 0) { // when the user doesn't enter any inputs in the text fields
        document.getElementById("after_submit").innerHTML=(" ");
        }
        else if (count1 > count2) { // if first name is worth more than second
            percent = (count2 / count1) * 100; // finding percent
            document.getElementById("after_submit").innerHTML=(percent.toFixed(1) + "% compatible!");
        }
        else if (count2 > count1) { // if second name is worth more than first
            percent = (count1 / count2) * 100; // finding percent
            document.getElementById("after_submit").innerHTML=(percent.toFixed(1) + "% compatible!");
        }
        else if (count1 == count2) { // if names are the same
            percent = 100;
            document.getElementById("after_submit").innerHTML=percent + "% compatible!";
        }
        else {
            document.getElementById("after_submit").innerHTML="Issue in count comparison";
        }
     }
    }
