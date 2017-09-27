/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

rating1.innerHTML = '5 Star'; 


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

price2.innerHTML = "$$$";
addy2.innerHTML = '525 Kapahulu Ave, Honolulu, HI 96815';


//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/
var rahours = document.createElement('div');
rahours.id = 'hours';
rahours.innerHTML= 'Hours: 6pm - 12am Sun - Sat';
text3.appendChild(rahours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var kamBowl = document.createElement('div');
kamBowl.id = 'price4';
kamBowl.innerHTML = '$$$';
text4.appendChild(kamBowl);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var bowladdy = document.createElement('div');
bowladdy.id = 'addy4';
bowladdy.innerHTML = 'Address: 1620 N. School St, Honolulu, HI 96817';
text4.appendChild(bowladdy);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/
var bowl = document.createElement('div');
bowl.id = 'hours4';
bowl.innerHTML = 'Hours: 9am - 10pm Sun - Sat';
text4.appendChild(bowl);

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var blank = document.createElement('p');
blank.id = 'update4';
blank.innerHTML = "I'd leave a blank space for this oxtail soup!"; 
comment4.appendChild(blank);


//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: 
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var darkStar = document.createElement('div');
darkStar.id = 'name5';
darkStar.innerHTML = 'The Death Star Cafe';
text5.appendChild(darkStar);

var darkRating = document.createElement('div');
darkRating.id = 'rating5';
darkRating.innerHTML = 'Rating: 2 Stars';
text5.appendChild(darkRating);

var darkPrice = document.createElement('div');
darkPrice.id = 'price5';
darkPrice.innerHTML = 'Price: $$';
text5.appendChild(darkPrice);

var darkAddy = document.createElement('div');
darkAddy.id = 'addy5';
darkAddy.innerHTML = 'Address: A galaxy far, far away.';
text5.appendChild(darkAddy);

var darkHours = document.createElement('div');
darkHours.id = 'hours5';
darkHours.innerHTML = 'Hours: We never close.';
text5.appendChild(darkHours); 








