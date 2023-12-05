//https://tpkcubibhsjksznxidsa.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa2N1YmliaHNqa3N6bnhpZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTA2MjAsImV4cCI6MjAxNzI2NjYyMH0.l7F0Hy6ns8ad6EpyOuzi7ZKBmOM2aI7XeF_VX7Ka7dA

fetch("https://tpkcubibhsjksznxidsa.supabase.co/test/v1/2-sem-eksamen", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwa2N1YmliaHNqa3N6bnhpZHNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2OTA2MjAsImV4cCI6MjAxNzI2NjYyMH0.l7F0Hy6ns8ad6EpyOuzi7ZKBmOM2aI7XeF_VX7Ka7dA",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.table(items);
  //items.forEach()
}

//function(){}
