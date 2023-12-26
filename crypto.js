export function is_valid_hex(string){
  const hex_regex= /^[0-9A-F]+$/i;
  return hex_regex.test(string);
}

export function xor_strings(string1, string2){

  if(!(is_valid_hex(string1 + string2) 
        && string1.length == string2.length)){
        return "non vaild string"
  }
  let result = "";
  for(let i = 0; i < string1.length; i++){
    let hex1 = parseInt(string1[i], 16);
    let hex2 = parseInt(string2[i], 16);
    let hex3 = hex1 ^ hex2;
    result += (hex3.toString(16));
  }
  return result; 
}
export function test(){
  return "test"

}
console.log(xor_strings("a", "a"))
