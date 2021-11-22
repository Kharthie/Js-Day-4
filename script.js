var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
   var data =JSON.parse(request.response);
      console.log(data);
      var res=data.filter((ele)=>ele.population);
      var res=data.filter((ele)=>ele.region);
      var res=data.filter((ele)=>ele.subregion);
      var res=data.filter((ele)=>ele.name);
      var res=data.filter((ele)=>ele.flag);
      console.log(res.map((ele)=>ele.population));
      console.log(res.map((ele)=>ele.region));
      console.log(res.map((ele)=>ele.subregion));
      console.log(res.map((ele)=>ele.name));
      console.log(res.map((ele)=>ele.flag));
       
      
  }