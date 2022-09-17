
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  }
  {
  if (distance >= 401 && distance <= 2000) {
    return 'That will be twenty bucks.';
  }
   if (distance >= 2001 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance >= 2501) {
    return 'No can do.'
  }
  console.log(scuberGreetingForFeet());

  
  function ternaryCheckCity(NYC) {
    return (NYC ? 'Ok, sounds good.' : 'No go.');
  }
    console.log(ternaryCheckCity()); 
    

function switchOnCharmFromTip(amount){
  switch (amount) {
    case 'generous':
       return 'Thank you so much.';
       break;
    case 'not as generous':
        return 'Thank you.';
        break;
    default:
      'Thanks for everything';
      return 'Bye.'; }
}
    console.log(switchOnCharmFromTip());}}