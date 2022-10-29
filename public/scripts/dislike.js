/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function dislikeFreet(fields) {
  fetch("/api/dislikes", {
    method: "POST",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function deletedislike(fields) {
  fetch(`/api/dislikes?freetId=${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}


function viewdislikeCountOfFreet(fields) {
  console.log("here");
  fetch(`/api/dislikes?freetId=${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}
