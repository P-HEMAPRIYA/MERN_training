const myHeaders = new Headers();
myHeaders.append("access_key", "2a85b1835dd85e42f84802dfe04f09a9");

const requestOptions = {
  method: 'GET',
  //headers: myHeaders,
  redirect: 'follow'
};
async function test(){
try {
  const result = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=a5c96303c68d4ce13e6d2f5732737011', requestOptions);
  const resultObj = await result.json();
  //const resultObj =  result.json();
  console.log(JSON.stringify(resultObj, null, 2));
} catch(err) {
  console.error(`Could not fetch currency data`);
  throw err;
}}
test()

// const requestOptions = {
//     method: 'GET',
//     // headers: myHeaders, // Uncomment and define `myHeaders` object if required
//     redirect: 'follow'
//   };
  
//   async function test() {
//     try {
//       const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=a5c96303c68d4ce13e6d2f5732737011', requestOptions);
//       const resultObj = await response.json();
//       console.log(JSON.stringify(resultObj, null, 2));
//     } catch (err) {
//       console.error('Could not fetch currency data');
//       throw err;
//     }
//   }
  
//   test();
  