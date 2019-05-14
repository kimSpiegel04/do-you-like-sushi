var userResponse = confirm('Do you like sushi?');

if (userResponse===true) {
    var userKindLiked = prompt('What kind of sushi do you like?');
    alert('You do like sushi and your favorite kind is ' + (userKindLiked) + '!');
    document.getElementById("#yay").innerHTML = "Yay!";
} else {
    document.getElementById("#boo").innerHTML = "Boo!";
    alert('You do not like sushi :(');
}