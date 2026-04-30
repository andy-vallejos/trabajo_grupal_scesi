fetch("https://reviews-api-4yt6.onrender.com/api/reviews")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });
