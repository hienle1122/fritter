/**
 * Fields is an object mapping the names of the form inputs to the values typed in
 * e.g. for createUser, fields has properites 'username' and 'password'
 */

function likeFreet(fields) {
  fetch("/api/likes", {
    method: "POST",
    body: JSON.stringify(fields),
    headers: { "Content-Type": "application/json" },
  })
    .then(showResponse)
    .catch(showResponse);
}

function deleteLike(fields) {
  fetch(`/api/likes?freetId=${fields.freetId}`, {method: 'DELETE'})
    .then(showResponse)
    .catch(showResponse);
}


function viewLikeCountOfFreet(fields) {
  console.log("here");
  fetch(`/api/likes?freetId=${fields.freetId}`)
    .then(showResponse)
    .catch(showResponse);
}
